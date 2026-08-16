# Services agreement — Build and Retainer

*Draft template. Not legal advice — have a solicitor review before first use.*
*Decisions you need to make are marked **[DECIDE]**.*

**How this is meant to work.** This agreement is signed once. Each piece of work
is then a short Statement of Work referencing it — so the Build and the Retainer
don't each need a fresh negotiation. That structure mirrors `Offer.md`: each
engagement is optional and de-risks the next.

**Clause 6 is the important one.** It is the only clause that is genuinely
specific to how this practice works, and it is the one a client's legal team will
want to change. Understand it before you're asked about it.

---

## SERVICES AGREEMENT

**Between:**

**(1) Warren Rossiter**, a sole trader trading as **Orin**, of [address]
("**Orin**"); and

**(2) [Client company name]**, a company registered in [jurisdiction] under
number [number], whose registered office is at [address] ("**the Client**").

**Date:** [date]

---

### 1. What this agreement covers

1.1 This agreement sets out the terms on which Orin provides services to the
Client. It does not by itself commit either party to any particular work.

1.2 Each piece of work is described in a separate **Statement of Work (SOW)**,
agreed in writing (email is sufficient), setting out the scope, the deliverables,
the fee, and the timescale. Each SOW incorporates these terms.

1.3 If a SOW conflicts with this agreement, the SOW wins for that work only.

---

### 2. The services

2.1 Orin will perform each SOW with reasonable skill and care, in accordance with
good industry practice.

2.2 Orin does not guarantee any particular business outcome. Where a SOW refers
to expected improvements in defect rates, velocity or similar, those are targets
informed by prior work, not warranties.

2.3 Orin may use subcontractors, and remains responsible for their work and bound
by these terms in respect of it.

2.4 **Client dependencies.** The Client will provide, in reasonable time, the
access, people, decisions and environments a SOW identifies as necessary. Where a
delay is caused by the Client, timescales extend accordingly and Orin may charge
reasonable costs of standing idle, having first told the Client and given them a
chance to resolve it.

---

### 3. Fees and payment

3.1 Fees are stated in each SOW and are **fixed against the deliverable, not
charged by time**. Orin does not work to a day rate.

3.2 **[DECIDE]** Payment schedules. Recommended defaults:

- **Build** — 40% on commencement, 30% at the midpoint milestone named in the
  SOW, 30% on delivery. Invoices payable within 14 days.
- **Retainer** — monthly in advance, invoiced on the first working day of the
  month, payable within 14 days.

3.3 Fees exclude VAT, which will be added if and when Orin is VAT registered.

3.4 Expenses over £[100] are agreed in advance and recharged at cost.

3.5 Late payment: Orin may charge interest and recovery costs under the Late
Payment of Commercial Debts (Interest) Act 1998, and may suspend work on
undisputed invoices more than [30] days overdue, having given [7] days' written
notice.

3.6 The Client will not withhold payment on the basis of a dispute about part of
an invoice; the undisputed part remains payable.

---

### 4. Term and termination

4.1 This agreement begins on the date above and continues until ended under this
clause.

4.2 **Retainer.** Either party may end a Retainer SOW on **30 days'** written
notice, for any reason.

4.3 **Build.** Either party may end a Build SOW on **[14] days'** written notice.
The Client pays for work completed to that point, including work in progress on a
fair proportional basis.

4.4 Either party may end this agreement or any SOW immediately if the other
materially breaches it and fails to fix the breach within 14 days of being asked
in writing, or becomes insolvent.

4.5 On termination Orin will deliver the work completed and paid for, in a usable
form, and will not withhold the Client's own materials.

4.6 Clauses 5, 6, 7, 8, 9 and 12 survive termination.

---

### 5. Confidentiality

5.1 Each party will keep the other's confidential information confidential, use
it only for this engagement, and not disclose it without consent.

5.2 This does not apply to information that is or becomes public other than by
breach, was already lawfully known, is independently developed, or must be
disclosed by law or a regulator — in which case the disclosing party gives notice
where lawful.

5.3 These obligations continue for [3] years after the engagement ends, and
indefinitely for anything that is a trade secret.

---

### 6. Intellectual property

*This is the clause that matters. It reflects `deliverable.md`: the shared core
is Orin's, reused across clients; the client owns their instance.*

6.1 **Definitions.**

- **Orin Materials** — the token pipeline's build machinery, scripts, transforms,
  templates, scaffolding, report generator, Figma plugin and associated tooling,
  including all improvements to them, whether created before or during an
  engagement. These are used across Orin's engagements and are not specific to
  the Client.
- **Client Materials** — anything the Client provides: their code, designs, brand
  assets, content and data.
- **Deliverables** — what a SOW says Orin will produce for the Client: their
  token set, their generated outputs, their component library, their
  configuration, their documentation, and their repositories.

6.2 **Client Materials** remain the Client's.

6.3 **Orin Materials** remain Orin's. They are not sold, assigned or transferred
under this agreement, and nothing in it prevents Orin using them for any other
client.

6.4 **Deliverables.** On payment in full for the relevant SOW, Orin assigns to
the Client all intellectual property rights in the Deliverables, excluding any
Orin Materials embedded in them.

6.5 **Licence to the embedded Orin Materials.** Orin's tooling is delivered
*inside* the Client's repositories rather than called from a remote service. So
that the Client can actually use, run, modify and maintain what they own, Orin
grants the Client a **perpetual, irrevocable, worldwide, non-exclusive,
royalty-free licence** to use, copy, modify and create derivative works of the
Orin Materials, to the extent they are embedded in the Deliverables, for the
Client's own internal business purposes — including in their own repositories,
build systems and products, and including use by their employees and
contractors.

6.6 **What that licence does not permit.** The Client may not distribute, sell,
sublicense or otherwise make the Orin Materials available to third parties **as a
standalone product, tool or service**, separately from the Client's own products.
For the avoidance of doubt, this does not restrict the Client shipping their own
product built using the Deliverables.

6.7 **[DECIDE — only if working through an intermediary.]** Where the Client is
contracting on behalf of, or delivering to, an end client (for example a software
house delivering to a bank), the licence at 6.5 is sublicensable to that named
end client for that engagement only, on the same terms. **Name the end client in
the SOW.** Do not grant a general right to sublicense.

6.8 Orin may use techniques, know-how and general skills learned during an
engagement on other work, provided no Client Materials or confidential
information are used.

6.9 Orin waives moral rights in the Deliverables to the extent permitted by law.

---

### 7. Publicity and portfolio

7.1 Orin may describe the work publicly — including the problem, the approach,
the outcome and measured results — and name the Client as a client, provided Orin
agrees the wording with the Client in advance. The Client will not unreasonably
withhold or delay agreement.

7.2 Orin will not publish Client Materials, confidential information, or
commercially sensitive figures without specific consent.

7.3 If the Client declines to be named, Orin may still describe the work without
identifying the Client.

7.4 The Client may name Orin as a supplier and link to orinsystems.co.

*Keep this clause. Two of your three case studies are constrained by not having
agreed it in advance — see `HANDOVER.md` on attribution.*

---

### 8. Warranties and liability

8.1 Each party warrants it has the right to enter this agreement, and that
materials it provides don't infringe a third party's rights.

8.2 Orin warrants the services will be performed with reasonable skill and care.
Except as stated, all other warranties and conditions implied by law are excluded
so far as the law allows.

8.3 Nothing limits liability for death or personal injury caused by negligence,
for fraud or fraudulent misrepresentation, or for anything else that cannot
lawfully be limited.

8.4 Neither party is liable for indirect or consequential loss, or for loss of
profit, revenue, business, anticipated savings, goodwill or data, however caused.

8.5 **[DECIDE]** Liability cap. Recommended: Orin's total liability for all
claims arising from a SOW is limited to **the total fees paid by the Client under
that SOW**.

Clients commonly ask for a multiple of fees, or a fixed floor such as £250,000 or
£1m. **Do not agree a cap your professional indemnity cover will not meet.** Once
you hold PI, set the cap at or below the policy limit, and expect the level of
cover to become the negotiation rather than the clause.

8.6 **[DECIDE]** Insurance. Add here once cover is in place: *"Orin will maintain
professional indemnity insurance of not less than £[X] for the term of this
agreement and for [2] years afterwards, and will provide evidence on request."*
**Leave this clause out entirely until the policy exists.**

---

### 9. Data protection

9.1 Each party will comply with UK data protection law.

9.2 The engagement is not expected to involve Orin processing personal data on
the Client's behalf. If a SOW does require it, the parties will agree a data
processing addendum before that work starts.

9.3 Where the Client gives Orin access to production systems containing personal
data, the Client remains the controller and will ensure the access is lawful and
minimal.

---

### 10. Status and people

10.1 Orin is an independent contractor. Nothing creates employment, partnership,
agency or a joint venture, and Orin is responsible for their own tax and National
Insurance.

10.2 Orin is free to work for other clients, including in the same sector,
subject to clause 5.

10.3 **[DECIDE]** Non-solicitation. Optional and mutual if included: neither
party solicits the other's staff or contractors for [6] months after the
engagement ends, excluding responses to public advertisements. Consider whether
you want this at all — as a sole trader it protects you very little and can be a
sticking point.

---

### 11. Things outside anyone's control

11.1 Neither party is liable for failure to perform caused by events beyond its
reasonable control, provided it tells the other promptly and does what it
reasonably can to work around it. If such an event lasts more than [30] days,
either party may end the affected SOW.

---

### 12. General

12.1 This agreement and the SOWs under it are the entire agreement between the
parties and replace all earlier discussions and proposals.

12.2 Changes must be in writing and agreed by both parties. Email is sufficient.

12.3 Neither party may assign this agreement without the other's consent, not to
be unreasonably withheld, except to a successor of substantially the whole
business.

12.4 No third party may enforce this agreement under the Contracts (Rights of
Third Parties) Act 1999, except a named end client under clause 6.7.

12.5 If a provision is unenforceable, the rest continues in force.

12.6 A failure to enforce a right is not a waiver of it.

12.7 This agreement is governed by the law of England and Wales, and the courts
of England and Wales have exclusive jurisdiction.

*If the Client insists on their own governing law — likely with a South African
or US counterparty — that is a commercial decision, but understand that it makes
enforcing clause 6 harder and more expensive.*

---

**Signed for and on behalf of the parties:**

| Orin | [Client company name] |
|---|---|
| Name: Warren Rossiter | Name: |
| Position: Principal | Position: |
| Date: | Date: |

---

## Appendix — Statement of Work template

**SOW [number] — [short title]**
**Under the Services Agreement dated [date]**

- **Engagement type:** Diagnostic / Build / Retainer
- **Scope:** [what is included — reference the written diagnosis where it exists]
- **Explicitly out of scope:** [what is not]
- **Deliverables:** [what physically lands, and where]
- **Fee:** £[amount] fixed
- **Payment schedule:** [per clause 3.2]
- **Timescale:** [start, milestones, delivery]
- **Client dependencies:** [access, people, decisions — per clause 2.4]
- **End client named for clause 6.7, if any:** [name or "none"]

Agreed: [Orin] / [Client] / [date]
