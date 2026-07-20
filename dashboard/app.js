const articles = [
  {
    slug: "information-resilience",
    category: "Field Note",
    title: "Information resilience is now a household skill",
    deck: "A practical framework for separating urgent signals from the churn of the daily feed.",
    author: "Editorial Desk",
    date: "July 12, 2026",
    minutes: 6,
    featured: true,
    body: [
      "The modern information environment rewards speed, certainty, and emotional force. Reliable understanding often requires the opposite: a deliberate pause, a clear view of provenance, and enough humility to update a conclusion.",
      "Information resilience is the ability to stay oriented while claims move faster than verification. It is not cynicism. It is a repeatable way to decide what deserves attention, what needs corroboration, and what can safely wait.",
      "A three-step practice",
      "Start with the claim, not the reaction. Write down exactly what is being asserted. Then look for the closest available primary source and note what remains unknown. Finally, decide whether the information calls for action now, observation over time, or no response at all.",
      "The strongest signal is rarely the loudest one. It is the one that survives contact with evidence, context, and time.",
      "Build a calmer information diet",
      "Choose a small set of reliable sources with different vantage points. Separate scheduled review from ambient checking. Most importantly, define in advance what would change your mind. A good information practice should make updating easier, not more embarrassing."
    ]
  },
  {
    slug: "local-systems",
    category: "Civic Systems",
    title: "The quiet infrastructure holding local communities together",
    deck: "Why small institutions often carry more resilience than their visibility suggests.",
    author: "Research Team",
    date: "July 10, 2026",
    minutes: 8,
    body: [
      "Resilience is often discussed at national scale, but it is experienced locally. Libraries, mutual-aid groups, faith communities, volunteer responders, and neighborhood associations form a human layer of infrastructure.",
      "These institutions translate broad conditions into practical help. Their value is not only in services delivered, but in trusted relationships formed before a disruption arrives.",
      "Capacity before crisis",
      "The best time to map local capacity is before it is needed. Knowing who communicates well, which spaces can convene people, and where verified information can travel quickly turns a collection of organizations into a network.",
      "Strong communities are built through repeated, ordinary acts of coordination long before anyone calls them resilience."
    ]
  },
  {
    slug: "verification-gap",
    category: "Media",
    title: "Inside the verification gap",
    deck: "What happens in the crucial minutes between a viral claim and a confirmed account.",
    author: "Editorial Desk",
    date: "July 8, 2026",
    minutes: 5,
    body: [
      "A breaking claim can reach millions before anyone with direct knowledge has assessed it. That interval is the verification gap: the period when attention is high, evidence is thin, and corrections have not yet caught up.",
      "The gap cannot be eliminated, but its risks can be managed. Time stamps, source lineage, geolocation, independent corroboration, and explicit uncertainty all help readers understand the status of a claim.",
      "Label what is known",
      "A useful briefing distinguishes observed facts from analysis and analysis from forecast. Clear labels do not weaken a report. They let readers place the right amount of confidence in each part."
    ]
  },
  {
    slug: "public-data",
    category: "Technology",
    title: "Public data should feel public",
    deck: "Dashboards work best when they explain, not merely display.",
    author: "Data Desk",
    date: "July 5, 2026",
    minutes: 7,
    body: [
      "A dashboard is an argument about what matters. Every threshold, color, label, and default view guides attention and implies a priority.",
      "Good public-interest dashboards make those choices legible. They explain data freshness, link to sources, expose uncertainty, and translate changes into plain language without manufacturing urgency.",
      "Design for decisions",
      "The right question is not how many metrics can fit on a screen. It is what a reader should understand or do after seeing them. Fewer, better-explained signals often create more public value than a wall of live numbers."
    ]
  },
  {
    slug: "slow-news",
    category: "Perspective",
    title: "A case for slower news in faster times",
    deck: "Why a publication can be timely without becoming reactive.",
    author: "Editorial Desk",
    date: "July 2, 2026",
    minutes: 4,
    body: [
      "Speed has become a proxy for relevance, but the first account is rarely the fullest one. A slower publication model can add value by showing its work and returning to stories after the initial attention has moved on.",
      "Timeliness should mean arriving while information remains useful, not racing to publish before it is understood.",
      "The follow-through matters",
      "A durable briefing tracks what changed, which assumptions held, and what early reporting missed. That continuity creates institutional memory for readers and accountability for publishers."
    ]
  },
  {
    slug: "digital-continuity",
    category: "Preparedness",
    title: "The small digital continuity plan",
    deck: "A short checklist for keeping essential records and communications available.",
    author: "Research Team",
    date: "June 28, 2026",
    minutes: 6,
    body: [
      "Digital continuity starts with knowing which information would be hardest to replace. Critical contacts, identity records, recovery codes, and current plans should not depend on a single device or account.",
      "Create encrypted backups, test account recovery, and keep a printed contact sheet for the few numbers you would need during an outage.",
      "Simple beats elaborate",
      "A modest plan that is reviewed twice a year will outperform a comprehensive one that nobody maintains. Assign ownership, set a calendar reminder, and test one recovery step at a time."
    ]
  }
];

const signals = [
  { id: "PHY-104", severity: "Watch", title: "Regional house-of-worship safety advisory", detail: "Monitoring verified law-enforcement and denominational safety notices.", domain: "Physical safety", updated: "18 min", trend: "Steady", confidence: "Medium", horizon: "Near term", source: "Official safety advisories", angle: 240, radius: 35 },
  { id: "POL-218", severity: "Info", title: "Religious-liberty policy calendar", detail: "Upcoming hearings, court dates, and public comment windows indexed.", domain: "Policy", updated: "1 hr", trend: "Steady", confidence: "High", horizon: "30 days", source: "Court and legislative calendars", angle: 315, radius: 66 },
  { id: "ONL-307", severity: "Elevated", title: "High-volume hostile narrative event", detail: "Rapid claim spread involving Christian institutions; verification remains incomplete.", domain: "Online safety", updated: "2 hr", trend: "Rising", confidence: "Medium", horizon: "Immediate", source: "Multi-source media monitor", angle: 28, radius: 22 },
  { id: "WXR-411", severity: "Watch", title: "Severe weather readiness for weekend services", detail: "Review official forecasts, shelter plans, and congregation communications.", domain: "Weather", updated: "3 hr", trend: "Steady", confidence: "High", horizon: "72 hours", source: "Official forecast products", angle: 102, radius: 42 },
  { id: "CAR-509", severity: "Info", title: "Community-care bulletin indexed", detail: "New public-health guidance relevant to congregational care has been added.", domain: "Community care", updated: "5 hr", trend: "Steady", confidence: "High", horizon: "30 days", source: "Public health bulletins", angle: 172, radius: 68 }
];

const publishedIncidents = window.CSD_CONTENT?.incidents || [];

const briefings = [
  { time: "12:40 PM", title: "New public guidance added to the source monitor", href: "#/signals" },
  { time: "11:15 AM", title: "Three signals moved to active observation", href: "#/signals" },
  { time: "9:30 AM", title: "Morning media and policy scan complete", href: "#/signals" }
];

const main = document.querySelector("#main");
const toast = document.querySelector("#toast");

function meta(article) {
  return `<div class="story-meta"><span>${article.author}</span><i class="meta-dot"></i><span>${article.date}</span><i class="meta-dot"></i><span>${article.minutes} min read</span></div>`;
}

function articleCard(article) {
  return `<a class="article-card" href="#/article/${article.slug}">
    <span class="category">${article.category}</span>
    <h3>${article.title}</h3>
    <p>${article.deck}</p>
    ${meta(article)}
  </a>`;
}

function signalRows(limit = signals.length) {
  return signals.slice(0, limit).map((signal) => `<div class="signal-row">
    <span class="severity severity-${signal.severity.toLowerCase()}">${signal.severity}</span>
    <div><h3>${signal.title}</h3><p>${signal.detail}</p></div>
    <span class="signal-time">${signal.updated} ago</span>
  </div>`).join("");
}

function homePage() {
  const lead = articles[0];
  return `<section class="home-hero">
      <a class="lead-story" href="#/article/${lead.slug}">
        <div class="lead-content">
          <p class="eyebrow">Lead analysis</p>
          <h1>${lead.title}</h1>
          <p class="lead-deck">${lead.deck}</p>
          ${meta(lead)}
        </div>
      </a>
      <aside class="hero-rail">
        <div class="rail-header"><h2>Today’s brief</h2><span class="live-mark">Preview</span></div>
        <div class="brief-list">${briefings.map(item => `<a class="brief-item" href="${item.href}"><time>${item.time}</time><h3>${item.title}</h3></a>`).join("")}</div>
        <a class="rail-link" href="#/signals">Open the signal desk →</a>
      </aside>
    </section>
    <section class="section">
      <div class="section-heading"><h2>Recent dispatches</h2><p>Reporting and analysis designed to remain useful after the feed moves on.</p></div>
      <div class="article-grid">${articles.slice(1, 4).map(articleCard).join("")}</div>
    </section>
    <section class="section signal-preview">
      <div class="section-heading"><h2>The signal desk</h2><p>A calm, source-conscious view of developments worth attention—not a machine for manufacturing alarm.</p></div>
      <div class="signal-board">
        <div><div class="threat-gauge"><span class="gauge-label">Current posture / illustrative</span><strong class="gauge-number">2<sup>of 5</sup></strong><div class="gauge-scale"><span class="active"></span><span class="active"></span><span></span><span></span><span></span></div></div><p class="demo-note">Demonstration data only. Verified incident records are published separately with source links.</p></div>
        <div class="signal-list">${signalRows(3)}<a class="rail-link" href="#/signals">View all signals →</a></div>
      </div>
    </section>`;
}

function latestPage() {
  const categories = ["All", ...new Set(articles.map(a => a.category))];
  return `<section class="page-shell"><div class="page-intro"><h1>Latest</h1><p>Essays, explainers, and field notes for people who want useful context—not another stream of reactions.</p></div>
    <div class="filter-bar" aria-label="Filter articles">${categories.map((cat, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("")}</div>
    <div class="article-grid all-articles" id="article-list">${articles.map(articleCard).join("")}</div></section>`;
}

function signalsPage() {
  return `<section class="page-shell"><div class="page-intro"><h1>Signal desk</h1><p>A working view of notable developments across infrastructure, public information, policy, weather, and health.</p></div>
    <p class="eyebrow">Demonstration environment — not an active alerting service</p>
    <div class="dashboard-summary">
      <div class="summary-stat"><span>Active signals</span><strong>${signals.length}</strong></div>
      <div class="summary-stat"><span>Elevated</span><strong>${signals.filter(s => s.severity === "Elevated").length}</strong></div>
      <div class="summary-stat"><span>Domains</span><strong>${new Set(signals.map(s => s.domain)).size}</strong></div>
      <div class="summary-stat"><span>Posture</span><strong>Watch</strong></div>
    </div>
    <div class="filter-bar" aria-label="Filter signals">${["All", "Elevated", "Watch", "Info"].map((f, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-signal-filter="${f}">${f}</button>`).join("")}</div>
    <div class="signals-table" id="signals-table">${dashboardRows(signals)}</div>
  </section>`;
}

function radarPoint(signal, selectedId) {
  const radians = (signal.angle - 90) * Math.PI / 180;
  const distance = signal.radius * 0.62;
  const x = 50 + Math.cos(radians) * distance;
  const y = 50 + Math.sin(radians) * distance;
  return `<button class="radar-point radar-point-${signal.severity.toLowerCase()} ${signal.id === selectedId ? "selected" : ""}"
    style="--x:${x.toFixed(2)}%;--y:${y.toFixed(2)}%" data-radar-select="${signal.id}"
    aria-label="${signal.severity}: ${signal.title}" aria-pressed="${signal.id === selectedId}">
    <span>${signal.id}</span>
  </button>`;
}

function radarMarks(items, selectedId) {
  return items.map(signal => radarPoint(signal, selectedId)).join("");
}

function radarDetail(signal) {
  if (!signal) return `<div class="radar-detail-empty">Choose a signal to inspect its context.</div>`;
  return `<div class="radar-detail-heading">
      <span class="severity severity-${signal.severity.toLowerCase()}">${signal.severity}</span>
      <span class="radar-detail-id">${signal.id}</span>
    </div>
    <h2>${signal.title}</h2>
    <p>${signal.detail}</p>
    <dl class="radar-facts">
      <div><dt>Domain</dt><dd>${signal.domain}</dd></div>
      <div><dt>Confidence</dt><dd>${signal.confidence}</dd></div>
      <div><dt>Horizon</dt><dd>${signal.horizon}</dd></div>
      <div><dt>Trend</dt><dd>${signal.trend}</dd></div>
      <div class="radar-source"><dt>Source class</dt><dd>${signal.source}</dd></div>
      <div><dt>Updated</dt><dd>${signal.updated} ago</dd></div>
    </dl>`;
}

function featuredIncidentCard() {
  const incident = publishedIncidents[0];
  if (!incident) return "";
  const date = new Date(`${incident.eventDate}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const location = `${incident.location.city}, ${incident.location.region}`;
  const primary = incident.sources.find(source => source.type === "primary") || incident.sources[0];
  const secondary = incident.sources.find(source => source !== primary);
  return `<article class="featured-incident">
    <div class="featured-incident-label">
      <span class="incident-status-dot"></span><span>Verified incident review</span><time>${date}</time>
    </div>
    <div class="featured-incident-body">
      <div><p class="incident-location">${location}</p><h2>${incident.title}</h2><span class="incident-outcome">${incident.outcome}</span></div>
      <div class="incident-summary">
        <p>${incident.deck}</p>
        <p><strong>Preparedness note:</strong> ${incident.responseLessons[0]}</p>
        <div class="incident-sources">
          ${primary ? `<a href="${primary.url}" target="_blank" rel="noreferrer">${primary.publisher} ↗</a>` : ""}
          ${secondary ? `<a href="${secondary.url}" target="_blank" rel="noreferrer">${secondary.publisher} ↗</a>` : ""}
          <a href="incidents/${incident.slug}.html">Full incident record →</a>
        </div>
      </div>
    </div>
  </article>`;
}

function radarPage() {
  const selected = signals.find(signal => signal.severity === "Elevated") || signals[0];
  const domains = ["All domains", ...new Set(signals.map(signal => signal.domain))];
  return `<section class="page-shell radar-page">
    <div class="page-intro"><h1>Threat radar</h1><p>A church and Christian-community safety view of verified incidents and developing signals. Points closer to the center deserve earlier review.</p></div>
    <div class="radar-status-line">
      <p class="eyebrow">Demonstration environment — not an active alerting service</p>
      <span>Last scan: 12 minutes ago</span>
    </div>
    ${featuredIncidentCard()}
    <div class="radar-controls">
      <label for="radar-domain">Domain
        <select id="radar-domain">
          ${domains.map(domain => `<option value="${domain}">${domain}</option>`).join("")}
        </select>
      </label>
      <div class="radar-legend" aria-label="Severity legend">
        <span><i class="legend-dot legend-elevated"></i>Elevated</span>
        <span><i class="legend-dot legend-watch"></i>Watch</span>
        <span><i class="legend-dot legend-info"></i>Information</span>
      </div>
    </div>
    <div class="radar-layout">
      <div class="radar-field" role="group" aria-label="Threat radar. Signals closer to the center have higher review priority.">
        <div class="radar-ring radar-ring-outer"><span>Monitor</span></div>
        <div class="radar-ring radar-ring-middle"><span>Watch</span></div>
        <div class="radar-ring radar-ring-inner"><span>Review</span></div>
        <div class="radar-axis radar-axis-horizontal"></div>
        <div class="radar-axis radar-axis-vertical"></div>
        <span class="radar-domain-label label-information">Online safety</span>
        <span class="radar-domain-label label-weather">Weather</span>
        <span class="radar-domain-label label-health">Community care</span>
        <span class="radar-domain-label label-infrastructure">Physical safety</span>
        <span class="radar-domain-label label-policy">Policy</span>
        <div id="radar-marks">${radarMarks(signals, selected.id)}</div>
      </div>
      <aside class="radar-detail" id="radar-detail" aria-live="polite">${radarDetail(selected)}</aside>
    </div>
    <div class="radar-method">
      <p><strong>How to read it:</strong> position reflects editorial review priority, not a prediction of harm. Every signal should retain a source trail, confidence label, owner, and update history before this becomes a live service.</p>
    </div>
  </section>`;
}

function incidentsPage() {
  return `<section class="page-shell">
    <div class="page-intro"><h1>Incidents</h1><p>Source-linked reviews of events affecting churches and Christian communities. Every published record has passed verification and editorial review.</p></div>
    <div class="incident-archive">
      ${publishedIncidents.length ? publishedIncidents.map(incident => `<article class="incident-archive-card">
        <div class="incident-archive-meta"><span>${incident.currentStatus}</span><time>${new Date(`${incident.eventDate}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time></div>
        <p class="eyebrow">${incident.location.city}, ${incident.location.region}</p>
        <h2>${incident.title}</h2>
        <p>${incident.deck}</p>
        <div class="incident-archive-actions"><a class="button button-dark" href="incidents/${incident.slug}.html">Read incident record</a><span>${incident.sources.length} retained sources</span></div>
      </article>`).join("") : `<p class="empty-state">No verified incident records have been published.</p>`}
    </div>
  </section>`;
}

function standardsPage() {
  return `<section class="page-shell standards-page">
    <div class="page-intro"><h1>Editorial standards</h1><p>How Corner Stone Digital discovers, verifies, labels, publishes, corrects, and protects information.</p></div>
    <div class="standards-grid">
      <article><span>01</span><h2>Classification</h2><p><strong>Verified incident:</strong> confirmed through a primary record or strong independent corroboration.</p><p><strong>Credible threat:</strong> a specific warning from an accountable authority requiring review or preparation.</p><p><strong>Developing signal:</strong> potentially relevant information that remains incomplete.</p><p><strong>Context:</strong> policy, cultural, or media developments without an immediate safety implication.</p></article>
      <article><span>02</span><h2>Publication gate</h2><p>Automated discovery never publishes. A public incident requires a primary source, explicit uncertainty language, completed editorial review, and a current-status label.</p></article>
      <article><span>03</span><h2>Fairness</h2><p>An arrest or charge is not a conviction. Reports distinguish allegations, official statements, court findings, analysis, and established facts. Motive is not inferred without evidence.</p></article>
      <article><span>04</span><h2>Corrections</h2><p>Material corrections are dated and explained. Updates preserve the distinction between what was known initially and what was established later.</p><a class="rail-link" href="mailto:admin@cornerstonedigital.dev?subject=Correction%20request">Request a correction →</a></article>
      <article><span>05</span><h2>Privacy and safety</h2><p>Private addresses, personal contact information, operational security details, and unnecessary personal data are excluded. Public-interest value must outweigh foreseeable risk.</p></article>
      <article><span>06</span><h2>Narrative audit</h2><p>Coverage comparisons look for selective context, premature certainty, and later corrective facts. Disagreement or ideological slant alone is never treated as proof of coordination.</p></article>
      <article><span>07</span><h2>Source hierarchy</h2><p><strong>Official and primary records</strong> anchor factual claims. <strong>Established reporting</strong> adds corroboration and context. Aggregators are discovery tools, not evidence. No source tier removes the need to distinguish an allegation from an established fact.</p></article>
      <article><span>08</span><h2>Social media</h2><p>Posts from official accounts, journalists, organizations, and eyewitnesses may surface timely leads. Account identity, date, original URL, and firsthand basis are checked; material claims require independent corroboration before publication.</p></article>
    </div>
  </section>`;
}

function subscribePage() {
  return `<section class="page-shell subscribe-page">
    <div class="page-intro"><h1>Stay informed</h1><p>Choose the briefings that matter to you. Urgent notices are reserved for specific, verified, and actionable information.</p></div>
    <form class="subscription-form" id="subscription-form">
      <fieldset><legend>Briefing preferences</legend>
        ${["Weekly intelligence briefing", "Verified incident reviews", "Local safety notices", "Religious-liberty and policy updates", "International persecution coverage"].map((label, index) => `<label><input type="checkbox" name="preference" value="${label}" ${index === 0 ? "checked" : ""} /> <span>${label}</span></label>`).join("")}
      </fieldset>
      <p>Your selections are placed into an email for you to review and send. This prototype does not store your address or transmit anything automatically.</p>
      <button class="button button-dark" type="submit">Prepare subscription email</button>
    </form>
  </section>`;
}

function dashboardRows(items) {
  return items.map(signal => `<div class="dashboard-row">
    <span class="severity severity-${signal.severity.toLowerCase()}">${signal.severity}</span>
    <div><h3>${signal.title}</h3><p>${signal.detail}</p></div>
    <span>${signal.domain}</span><span class="${signal.trend === "Rising" ? "trend-up" : "trend-steady"}">${signal.trend}</span><span>→</span>
  </div>`).join("") || `<p class="empty-state">No signals match this view.</p>`;
}

function articlePage(article) {
  if (!article) return notFoundPage();
  const paragraphs = article.body.map((text, index) => {
    if (index === 2 || index === 5) return `<h2>${text}</h2>`;
    if (text.length < 150 && index > 2) return `<p class="pullquote">${text}</p>`;
    return `<p>${text}</p>`;
  }).join("");
  return `<article class="page-shell article-page">
    <header class="article-header"><aside class="article-header-aside"><p class="eyebrow">${article.category}</p></aside><div>
      <p class="eyebrow">${article.category}</p><h1>${article.title}</h1><p class="article-deck">${article.deck}</p>${meta(article)}
    </div></header>
    <div class="article-body-layout"><aside class="share-tools">
      <button class="button button-outline" data-share="native">Share article</button>
      <button class="button button-outline" data-share="x">Copy for X</button>
    </aside><div class="article-body">${paragraphs}</div></div>
  </article>`;
}

function aboutPage() {
  return `<section class="page-shell"><div class="page-intro"><h1>About</h1><p>Corner Stone Digital is an editorial platform for public-interest analysis, practical intelligence, and clear-eyed monitoring.</p></div>
    <div class="about-grid"><div><p class="eyebrow">Our purpose</p><h2>Make important information easier to understand—and easier to act on.</h2><p>We are building a publication where articles, source notes, and live dashboards can reinforce one another. Every format should help readers distinguish what happened, what it may mean, and what remains unknown.</p></div>
    <div class="principles"><div class="principle"><div><h3>Show the source</h3><p>Claims should lead back to evidence whenever possible.</p></div></div><div class="principle"><div><h3>Label uncertainty</h3><p>Observed fact, analysis, and forecast are different things.</p></div></div><div class="principle"><div><h3>Prefer durable context</h3><p>Publish work that remains useful after the first wave of attention.</p></div></div></div></div>
  </section>`;
}

function notFoundPage() { return `<section class="page-shell"><div class="page-intro"><h1>Not found</h1><p>That page isn’t in the dashboard. <a class="rail-link" href="#/signals">Return to the Signal Desk →</a></p></div></section>`; }

function route() {
  const path = location.hash.slice(1) || "/";
  if (path === "/") main.innerHTML = homePage();
  else if (path === "/latest") main.innerHTML = latestPage();
  else if (path === "/signals") main.innerHTML = signalsPage();
  else if (path === "/radar") main.innerHTML = radarPage();
  else if (path === "/incidents") main.innerHTML = incidentsPage();
  else if (path === "/standards") main.innerHTML = standardsPage();
  else if (path === "/subscribe") main.innerHTML = subscribePage();
  else if (path === "/about") main.innerHTML = aboutPage();
  else if (path.startsWith("/article/")) main.innerHTML = articlePage(articles.find(a => a.slug === path.split("/").pop()));
  else main.innerHTML = notFoundPage();
  document.querySelector("#mobile-menu").classList.remove("open");
  document.querySelector("#menu-button").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
  bindPageEvents();
}

function bindPageEvents() {
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filtered = button.dataset.category === "All" ? articles : articles.filter(a => a.category === button.dataset.category);
    document.querySelector("#article-list").innerHTML = filtered.map(articleCard).join("");
  }));
  document.querySelectorAll("[data-signal-filter]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-signal-filter]").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filtered = button.dataset.signalFilter === "All" ? signals : signals.filter(s => s.severity === button.dataset.signalFilter);
    document.querySelector("#signals-table").innerHTML = dashboardRows(filtered);
  }));
  document.querySelectorAll("[data-share]").forEach(button => button.addEventListener("click", () => shareCurrent(button.dataset.share)));
  const radarMarksElement = document.querySelector("#radar-marks");
  const radarDomain = document.querySelector("#radar-domain");
  if (radarMarksElement && radarDomain) {
    const selectRadarSignal = (id) => {
      const signal = signals.find(item => item.id === id);
      document.querySelector("#radar-detail").innerHTML = radarDetail(signal);
      radarMarksElement.querySelectorAll("[data-radar-select]").forEach(point => {
        const isSelected = point.dataset.radarSelect === id;
        point.classList.toggle("selected", isSelected);
        point.setAttribute("aria-pressed", String(isSelected));
      });
    };
    radarMarksElement.addEventListener("click", event => {
      const point = event.target.closest("[data-radar-select]");
      if (point) selectRadarSignal(point.dataset.radarSelect);
    });
    radarDomain.addEventListener("change", () => {
      const filtered = radarDomain.value === "All domains" ? signals : signals.filter(signal => signal.domain === radarDomain.value);
      const selected = filtered.find(signal => signal.severity === "Elevated") || filtered[0];
      radarMarksElement.innerHTML = radarMarks(filtered, selected?.id);
      document.querySelector("#radar-detail").innerHTML = radarDetail(selected);
    });
  }
  const subscriptionForm = document.querySelector("#subscription-form");
  if (subscriptionForm) subscriptionForm.addEventListener("submit", event => {
    event.preventDefault();
    const preferences = [...subscriptionForm.querySelectorAll('input[name="preference"]:checked')].map(input => input.value);
    const subject = encodeURIComponent("Corner Stone Digital subscription request");
    const body = encodeURIComponent(`Please subscribe me to:\n\n${preferences.map(item => `- ${item}`).join("\n")}\n\nI understand I can unsubscribe at any time.`);
    window.location.href = `mailto:admin@cornerstonedigital.dev?subject=${subject}&body=${body}`;
  });
}

async function shareCurrent(type) {
  const slug = location.hash.split("/").pop();
  const article = articles.find(a => a.slug === slug);
  const canonical = `${location.origin}${location.pathname}#/article/${slug}`;
  if (type === "native" && navigator.share) {
    try { await navigator.share({ title: article.title, text: article.deck, url: canonical }); } catch (_) { return; }
  } else {
    const copy = type === "x" ? `${article.title}\n\n${article.deck}\n\n${canonical}` : canonical;
    await navigator.clipboard.writeText(copy);
    showToast(type === "x" ? "X post draft copied" : "Article link copied");
  }
}

function showToast(message) {
  toast.textContent = message; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

const searchDialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#search-input");
document.querySelector("#search-button").addEventListener("click", () => { searchDialog.showModal(); setTimeout(() => searchInput.focus(), 50); });
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const matches = query ? articles.filter(a => `${a.title} ${a.deck} ${a.category}`.toLowerCase().includes(query)) : [];
  document.querySelector("#search-results").innerHTML = query ? (matches.map(a => `<a class="search-result" href="#/article/${a.slug}"><small>${a.category}</small><h3>${a.title}</h3></a>`).join("") || `<p class="empty-state">No matching dispatches.</p>`) : "";
});
document.querySelector("#search-results").addEventListener("click", () => searchDialog.close());
document.querySelector("#menu-button").addEventListener("click", (event) => {
  const menu = document.querySelector("#mobile-menu"); menu.classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", String(menu.classList.contains("open")));
});
document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", route);
route();
