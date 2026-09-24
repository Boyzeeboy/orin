/**
 * guard-commit.mjs — Claude Code PreToolUse hook: no commits on main.
 *
 * "Never commit directly to main" was a memory note, which means it held only
 * as long as the session remembered it. This refuses the Bash call instead.
 * It applies to Claude's commands only; Warren's own terminal is untouched.
 *
 * Covers `git commit` (with -C, --git-dir, cd-prefixed and env-prefixed forms)
 * and `scripts/private commit`, whose main is protected by the same rule
 * (orin-private: branch, then ff-only by hand). Merges are not commits and pass,
 * so the private repo's by-hand fast-forward still works.
 *
 * Fails open: if the command cannot be parsed or the branch cannot be read,
 * the call goes through. A guard that breaks every Bash call gets switched off.
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { isAbsolute, join, resolve } from 'node:path';

const PROTECTED = new Set(['main', 'master']);

/** Split a shell command into segments of tokens, honouring quotes. */
function segments(cmd) {
  const segs = [[]];
  let tok = '';
  let has = false;
  let q = null;
  const push = () => {
    if (has) segs[segs.length - 1].push(tok);
    tok = '';
    has = false;
  };
  for (let i = 0; i < cmd.length; i++) {
    const c = cmd[i];
    if (q) {
      if (c === q) q = null;
      else if (c === '\\' && q === '"' && i + 1 < cmd.length) tok += cmd[++i];
      else tok += c;
      continue;
    }
    if (c === "'" || c === '"') { q = c; has = true; continue; }
    if (c === '\\' && i + 1 < cmd.length) { tok += cmd[++i]; has = true; continue; }
    if (/\s/.test(c) && c !== '\n') { push(); continue; }
    if (c === '\n' || c === ';' || c === '&' || c === '|') {
      push();
      if (segs[segs.length - 1].length) segs.push([]);
      continue;
    }
    tok += c;
    has = true;
  }
  push();
  return segs.filter((s) => s.length);
}

const expand = (p, cwd) => {
  const h = p === '~' || p.startsWith('~/') ? join(homedir(), p.slice(1)) : p;
  return isAbsolute(h) ? h : resolve(cwd, h);
};

function branch(args, cwd) {
  try {
    return execFileSync('git', [...args, 'branch', '--show-current'], { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

/** Returns { args, cwd, label } for a commit segment, or null. */
function commitTarget(seg, cwd) {
  let i = 0;
  while (i < seg.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(seg[i])) i++; // FOO=bar prefixes
  const cmd = seg[i];
  if (!cmd) return null;

  if (/(^|\/)scripts\/private$/.test(cmd) && seg[i + 1] === 'commit') {
    let top;
    try {
      top = execFileSync('git', ['rev-parse', '--show-toplevel'], { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch {
      return null;
    }
    return { args: [`--git-dir=${join(top, '.private.git')}`, `--work-tree=${top}`], cwd, label: 'orin-private' };
  }

  if (cmd !== 'git' && !cmd.endsWith('/git')) return null;
  const args = [];
  let dir = cwd;
  for (i++; i < seg.length; i++) {
    const t = seg[i];
    if (t === '-C') dir = expand(seg[++i] ?? '.', dir);
    else if (t === '-c') i++;
    else if (t.startsWith('--git-dir=') || t.startsWith('--work-tree=')) args.push(t.replace(/=(.*)$/, (_, p) => `=${expand(p, dir)}`));
    else if (t.startsWith('-')) continue;
    else return t === 'commit' ? { args, cwd: dir, label: dir } : null;
  }
  return null;
}

try {
  const input = JSON.parse(readFileSync(0, 'utf8'));
  const command = input?.tool_input?.command;
  if (typeof command !== 'string') process.exit(0);
  let cwd = input.cwd || process.cwd();

  for (const seg of segments(command)) {
    if (seg[0] === 'cd' && seg.length <= 2) {
      cwd = expand(seg[1] ?? '~', cwd);
      continue;
    }
    const target = commitTarget(seg, cwd);
    if (!target) continue;
    const b = branch(target.args, target.cwd);
    if (b && PROTECTED.has(b)) {
      console.error(
        `Blocked: this would commit directly to ${b} in ${target.label}. ` +
          'Branch first (never commit directly to main; in orin-private, branch from the ' +
          'unmerged branch that already touches the file). Guard: .claude/hooks/guard-commit.mjs',
      );
      process.exit(2);
    }
  }
} catch {
  // fail open
}
process.exit(0);
