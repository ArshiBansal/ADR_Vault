/* =========================================
   ADR Vault — main.js
   Sample data · Search · Expand · Scroll reveals · Smooth scroll
   ========================================= */

const sampleADRs = [
  {
    id: "ADR-042",
    title: "Event-driven order processing",
    status: "accepted",
    summary:
      "We chose Kafka over synchronous service calls to improve resilience, decoupling, and long-term maintainability of the order pipeline.",
    date: "4 days ago",
    related: "Checkout, Payments",
  },
  {
    id: "ADR-041",
    title: "Adopt OpenTelemetry for distributed tracing",
    status: "accepted",
    summary:
      "Standardize on OpenTelemetry across all services to gain consistent observability without vendor lock-in.",
    date: "1 week ago",
    related: "Platform, Observability",
  },
  {
    id: "ADR-040",
    title: "Move authentication to a dedicated identity service",
    status: "accepted",
    summary:
      "Extract auth logic into a separate service to reduce coupling and enable future multi-tenant support.",
    date: "2 weeks ago",
    related: "Security, Platform",
  },
  {
    id: "ADR-039",
    title: "Use PostgreSQL as the primary transactional store",
    status: "accepted",
    summary:
      "After evaluating MongoDB and DynamoDB, PostgreSQL provides the strongest consistency guarantees and operational maturity for our workload.",
    date: "3 weeks ago",
    related: "Data, Backend",
  },
  {
    id: "ADR-038",
    title: "Introduce feature flags via LaunchDarkly",
    status: "proposed",
    summary:
      "Enable safer rollouts and rapid experimentation by adopting a managed feature-flag service.",
    date: "5 days ago",
    related: "Platform, Product",
  },
  {
    id: "ADR-037",
    title: "Deprecate REST endpoints in favor of GraphQL for the public API",
    status: "deprecated",
    summary:
      "Original decision to expose only REST. Superseded by the GraphQL federation approach in ADR-035.",
    date: "1 month ago",
    related: "API, Frontend",
  },
  {
    id: "ADR-036",
    title: "Standardize on React + TypeScript for all new UI work",
    status: "accepted",
    summary:
      "Consolidate frontend stack to reduce context switching and improve long-term maintainability.",
    date: "1 month ago",
    related: "Frontend",
  },
  {
    id: "ADR-035",
    title: "Adopt GraphQL Federation for the public API",
    status: "accepted",
    summary:
      "Federation allows independent teams to own their subgraphs while presenting a unified graph to clients.",
    date: "5 weeks ago",
    related: "API, Platform",
  },
  {
    id: "ADR-034",
    title: "Run background jobs on a dedicated worker fleet",
    status: "accepted",
    summary:
      "Separate compute-intensive and long-running tasks from the request/response path.",
    date: "6 weeks ago",
    related: "Infrastructure",
  },
  {
    id: "ADR-033",
    title: "Use Cloudflare Workers for edge authentication checks",
    status: "proposed",
    summary:
      "Move lightweight auth validation closer to the user to reduce latency on protected routes.",
    date: "3 days ago",
    related: "Security, Edge",
  },
  {
    id: "ADR-032",
    title: "Centralize logging with a structured JSON format",
    status: "accepted",
    summary:
      "All services emit structured logs to simplify querying and alerting.",
    date: "2 months ago",
    related: "Observability",
  },
  {
    id: "ADR-031",
    title: "Prefer server-side rendering for marketing pages",
    status: "accepted",
    summary:
      "SSR improves SEO and first-contentful paint for public-facing pages while keeping the app shell client-rendered.",
    date: "2 months ago",
    related: "Frontend, Performance",
  },
];

/* ---------- DOM refs ---------- */
const adrListEl = document.getElementById("adrList");
const searchInput = document.getElementById("adrSearch");
const adrCountEl = document.getElementById("adrCount");

/* ---------- Helpers ---------- */
function statusClass(status) {
  const map = {
    accepted: "status-accepted",
    proposed: "status-proposed",
    deprecated: "status-deprecated",
  };
  return map[status] || "status-accepted";
}

function statusLabel(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

/* ---------- Render ADRs ---------- */
function renderADRs(adrs) {
  if (!adrListEl) return;

  if (adrs.length === 0) {
    adrListEl.innerHTML = `
      <div class="adr-item" style="text-align:center; color: var(--text-muted); padding: 2.5rem 1rem;">
        No ADRs match your search.
      </div>
    `;
    if (adrCountEl) adrCountEl.textContent = "0 ADRs";
    return;
  }

  adrListEl.innerHTML = adrs
    .map(
      (adr) => `
      <article class="adr-item" data-id="${adr.id}" tabindex="0">
        <div class="adr-item-header">
          <h3 class="adr-item-title">${adr.title}</h3>
          <span class="status-badge ${statusClass(adr.status)}">${statusLabel(adr.status)}</span>
        </div>
        <div class="adr-item-meta">
          <span>${adr.id}</span>
          <span>•</span>
          <span>${adr.date}</span>
          <span>•</span>
          <span>${adr.related}</span>
        </div>
        <div class="adr-item-body">
          <p>${adr.summary}</p>
        </div>
      </article>
    `,
    )
    .join("");

  if (adrCountEl) {
    adrCountEl.textContent = `${adrs.length} ADR${adrs.length === 1 ? "" : "s"}`;
  }

  // Attach click + keyboard handlers
  document.querySelectorAll(".adr-item").forEach((item) => {
    item.addEventListener("click", () => toggleADR(item));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleADR(item);
      }
    });
  });
}

/* ---------- Expand / Collapse ---------- */
function toggleADR(item) {
  const isActive = item.classList.contains("active");

  // Close every open item
  document.querySelectorAll(".adr-item.active").forEach((el) => {
    el.classList.remove("active");
  });

  // Open the clicked one (if it wasn’t already open)
  if (!isActive) {
    item.classList.add("active");
  }
}

/* ---------- Search ---------- */
function filterADRs(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    renderADRs(sampleADRs);
    return;
  }

  const filtered = sampleADRs.filter((adr) => {
    return (
      adr.title.toLowerCase().includes(q) ||
      adr.id.toLowerCase().includes(q) ||
      adr.status.toLowerCase().includes(q) ||
      adr.related.toLowerCase().includes(q) ||
      adr.summary.toLowerCase().includes(q)
    );
  });

  renderADRs(filtered);
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section-header, .feature-card, .benefit-visual, .demo-shell, .future-icon",
  );

  revealElements.forEach((el) => {
    // Skip elements that already have directional entrance animations
    if (
      !el.classList.contains("animate-left") &&
      !el.classList.contains("animate-right")
    ) {
      el.classList.add("reveal");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
}

/* ---------- Smooth scroll with sticky nav offset ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        12;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render ADR list
  renderADRs(sampleADRs);

  // 2. Live search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterADRs(e.target.value);
    });
  }

  // 3. Scroll animations
  initScrollReveal();

  // 4. Smooth scrolling that respects sticky navbar
  initSmoothScroll();
});
