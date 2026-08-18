# DECISIONS.md

**Project:** ADR Vault – Premium Home Page  

**Track:** Part 2  

**Stack:** HTML, CSS, JavaScript, Bootstrap 5, Google Fonts

---

### 1. Why this approach over the obvious alternative?

The most obvious alternative was a heavy React/Next.js setup with a component library and a full design system. I rejected it in favor of plain HTML + CSS + vanilla JS + Bootstrap.



Reasons:

- The brief prioritizes a fast, polished, deployable home page over architectural complexity.
- Bootstrap gave me reliable responsive behavior and a solid dropdown (profile menu) without reinventing the wheel.
- Vanilla JS kept the interactive ADR mock transparent and easy to explain line-by-line in a follow-up call.
- A lighter stack made it easier to focus on spacing, typography, motion restraint, and honest copy — the exact things the grading criteria emphasize (UI craft \& taste + Honesty).


I still structured the CSS with custom properties and clear sections so the code remains maintainable and intentional.

---

### 2. One trade-off made under the time limit, and what I’d do with a real week


**Trade-off:** I built a high-fidelity interactive mock of the ADR list (search + expand) instead of a real backend or authentication flow.

This let me deliver a working, responsive page that clearly shows the product, satisfies the “demo interaction” requirement, and stays fully honest (no fake user counts or testimonials). Real accounts, login, and data persistence were intentionally left as “Coming Soon.”

**With a real week I would:**

- Add a lightweight backend (or localStorage + simple auth mock) so users can actually create and save ADRs.
- Implement proper dark/light mode toggle (currently dark-only by design).
- Refine the micro-interactions further and add subtle page-load sequencing.
- Write a proper design system file and improve accessibility (focus states, reduced-motion support).
- Deploy with a custom domain and basic analytics.

---

### 3. Where I used AI tools, and what I personally verified or changed afterward

I used AI assistance for:

- Generating the initial page structure and sample ADR content
- Drafting CSS custom properties and animation keyframes
- Suggesting realistic ADR titles and summaries
- Helping format the footer and social icon SVGs


**What I personally verified and changed:**

- Rewrote all marketing copy to be concise, honest, and free of fabricated metrics or testimonials.
- Tuned spacing, type scale, and color contrast by hand until the page felt intentional rather than scaffolded.
- Adjusted the expand/collapse behavior and search filtering logic myself.
- Manually tested the page at 390px and 1440px widths and fixed several responsive edge cases.
- Simplified the profile dropdown and social icon hover states after the AI-generated versions felt generic.
- Removed any decorative elements that did not earn their place.



Every major visual and interaction decision was reviewed and refined by me before finalizing the page.

