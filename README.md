# ADR Vault

**Architecture decisions that stay found.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-5eead4?style=for-the-badge)](https://arshibansal.github.io/ADR_Vault/)

---

## Introduction

**ADR Vault** is a premium landing page for a focused product that helps engineering teams manage Architecture Decision Records (ADRs).

It is designed to feel polished, intentional, and product-ready — the kind of page that makes someone think *“I want an account”* within the first few seconds.

This project prioritizes clean design, honest messaging, meaningful interactions, and a lightweight technical approach.

---

## What is ADR Vault?

ADR Vault is a lightweight tool concept for storing, searching, and versioning **Architecture Decision Records**.

Architecture Decision Records (ADRs) are documents that capture important technical decisions along with their context and consequences. In most teams these records get lost in Slack threads, Confluence pages, or scattered Markdown files.

ADR Vault aims to solve that problem by giving teams one focused place to:

- Write decisions in a structured way
- Search across all past decisions
- Track status (Proposed → Accepted → Deprecated)
- Keep related context linked and visible

---

## Why was it built?

Most documentation tools try to be everything — wikis, knowledge bases, project trackers.

ADR Vault takes the opposite approach: it stays ruthlessly focused on **one job** — making architecture decisions easy to write, find, and trust over time.

The landing page was built to communicate that focus clearly, demonstrate the product experience, and maintain a high standard of visual craft and honesty (no fake metrics or testimonials).

---

## What does it do?

The current version is a **fully interactive front-end landing page** that includes:

- A clear product story and value proposition
- A working interactive mock of the ADR interface
- Search and expand functionality on sample decision records
- Smooth animations and micro-interactions
- A complete multi-section marketing layout
- Future-ready account and profile UI elements

It demonstrates how the product would feel without requiring a backend.

---

## Current Status

> **In Progress / Early Stage**

The landing page is complete and live.  
Core product features (real authentication, data persistence, ADR creation) are planned for future development and are currently shown under the “Coming Soon” section.

---

## What it has as of now

| Area                    | Status      | Details                                      |
|-------------------------|-------------|----------------------------------------------|
| Landing Page            | ✅ Complete | Fully responsive, dark-mode only             |
| Interactive ADR Mock    | ✅ Complete | Search + expand/collapse                     |
| Animations              | ✅ Complete | Left/right entrance + scroll reveals         |
| Profile Menu            | ✅ Complete | Dropdown with Profile / Update / Sign out    |
| Social Links            | ✅ Complete | GitHub, LinkedIn, Discord, Slack, Instagram  |
| Footer & Legal Links    | ✅ Complete | Multi-column layout                          |
| Real Authentication     | 🔜 Planned  | Shown in roadmap                             |
| ADR Persistence         | 🔜 Planned  | Shown in roadmap                             |
| Team Profiles           | 🔜 Planned  | Shown in roadmap                             |
| Notifications           | 🔜 Planned  | Shown in roadmap                             |

---

## Features

### Design & Experience
- Dark-mode only interface with a distinctive teal + charcoal palette
- Unique typography pairing (Syne + IBM Plex Sans + IBM Plex Mono)
- Smooth left-to-right and right-to-left entrance animations
- Scroll-triggered fade-up reveals
- Fully responsive (390px → 1440px+)

### Product Demo
- 12 realistic sample Architecture Decision Records
- Live search across title, ID, status, services, and summary
- Expandable cards with decision context
- Keyboard accessible interactions

### Navigation & Account UI
- Sticky navbar
- Profile icon with dropdown menu
- Login / Sign up buttons (future-ready)

### Content Sections
- Hero with strong value proposition
- Interactive product demonstration
- How it works (Write → Search → Version)
- Extended feature grid
- “Built for people who write ADRs” section
- Coming Soon / Roadmap
- Final call-to-action
- Comprehensive footer

---

## Tech Stack

| Technology          | Purpose                                      |
|---------------------|----------------------------------------------|
| HTML5               | Semantic page structure                      |
| CSS3                | Layout, custom properties, animations        |
| Vanilla JavaScript  | Search, expand/collapse, scroll logic        |
| Bootstrap 5         | Responsive grid + dropdown component         |
| Google Fonts        | Syne, IBM Plex Sans, IBM Plex Mono           |

No build tools or frameworks are required. The project runs directly in the browser.

---

## Getting Started

### Prerequisites
- A modern browser (Chrome, Firefox, Safari, or Edge)
- Optional: a local server for the best experience

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arshibansal/ADR_Vault.git
   cd ADR_Vault
   ```

2. Open the project:
   - **Simple:** Open `index.html` directly in your browser
   - **Recommended:** Run a local server

   ```bash
   # Using npx
   npx serve .

   # Or using Python
   python -m http.server 8000
   ```

3. Visit `http://localhost:3000` (or the port shown).

---

## Features to be added

The following capabilities are planned for future releases:

- [ ] User accounts and secure authentication
- [ ] Personal and team profiles
- [ ] Real ADR creation, editing, and persistence
- [ ] Status change history and versioning
- [ ] Notifications for owned or related ADRs
- [ ] Markdown export of individual ADRs or the full vault
- [ ] Optional light mode
- [ ] Improved accessibility (reduced motion, stronger focus states)

---

## Screenshots

> Add screenshots of the live site here after capturing them.

| Section            | Description                          |
|--------------------|--------------------------------------|
| Hero               | Value proposition + product preview  |
| Interactive Demo   | Searchable ADR list with expand      |
| Features           | How it works + extended features     |
| Coming Soon        | Roadmap cards                        |
| Footer             | Social links + legal navigation      |

**Live site:** [https://arshibansal.github.io/ADR_Vault/](https://arshibansal.github.io/ADR_Vault/)

---

## Project Structure

```
ADR_Vault/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # All styles, variables, and animations
├── js/
│   └── main.js         # ADR data, search, interactions, scroll logic
├── DECISIONS.md        # Design and technical decisions
└── README.md           # Project documentation
```

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Arshi Bansal**  
GitHub: [arshibansal](https://github.com/arshibansal)

---

## Credits

- Design and development by Arshi Bansal
- Built with attention to craft, restraint, and honest product communication
- Fonts provided by Google Fonts
- Icons from custom SVGs

---

**Live Demo →** [https://arshibansal.github.io/ADR_Vault/](https://arshibansal.github.io/ADR_Vault/)
