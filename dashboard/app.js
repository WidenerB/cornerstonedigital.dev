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
  { id: "PHY-104", severity: "Watch", title: "House-of-worship safety advisories", detail: "Maintain routine awareness of verified law-enforcement and denominational safety notices.", domain: "Physical safety", updated: "Manual review", trend: "Steady", confidence: "Medium", horizon: "Ongoing", source: "Official safety advisories", angle: 240, radius: 45 },
  { id: "POL-218", severity: "Info", title: "Religious-liberty policy calendar", detail: "Track hearings, court dates, and public comment windows without treating policy activity as a safety threat.", domain: "Policy", updated: "Manual review", trend: "Steady", confidence: "High", horizon: "30 days", source: "Court and legislative calendars", angle: 315, radius: 70 },
  { id: "ONL-307", severity: "Info", title: "Online narrative and impersonation watch", detail: "Potential threats require account verification, preserved evidence, and independent corroboration.", domain: "Online safety", updated: "Manual review", trend: "Steady", confidence: "Medium", horizon: "Ongoing", source: "Multi-source media monitor", angle: 28, radius: 62 },
  { id: "WXR-411", severity: "Watch", title: "Local severe-weather readiness", detail: "Check official local alerts before services and review shelter and congregation communication plans.", domain: "Weather", updated: "Check locally", trend: "Variable", confidence: "High", horizon: "72 hours", source: "National Weather Service", angle: 102, radius: 48 },
  { id: "CAR-509", severity: "Info", title: "Community-care guidance", detail: "Review relevant public-health guidance before changing congregational care practices.", domain: "Community care", updated: "Manual review", trend: "Steady", confidence: "High", horizon: "30 days", source: "Public health bulletins", angle: 172, radius: 72 }
];

const publishedIncidents = window.CSD_CONTENT?.incidents || [];

const bulletinLanes = [
  { status: "Monitor", tone: "watch", title: "Physical safety", detail: "Keep normal layered security in place and route specific concerns to local law enforcement.", source: "FBI national releases", href: "https://www.fbi.gov/feeds/national-press-releases" },
  { status: "Check locally", tone: "info", title: "Severe weather", detail: "Conditions are local. Review active alerts before services, travel, and outdoor ministry events.", source: "National Weather Service", href: "https://www.weather.gov/alerts" },
  { status: "Review controls", tone: "info", title: "Cybersecurity", detail: "Maintain account recovery, backups, multifactor authentication, and a clear phishing-report process.", source: "CISA advisories", href: "https://www.cisa.gov/news-events/cybersecurity-advisories" }
];

const weeklyBulletin = window.CSD_CONTENT?.bulletins?.[0] || {
  issue: "Week ending August 2, 2026",
  periodStart: "2026-07-27",
  periodEnd: "2026-08-02",
  publishedAt: "2026-08-02",
  posture: "Routine",
  headline: "No new verified public event; local readiness remains the priority",
  summary: "No newly verified incident entered the public archive during this seven-day period. The latest retained incident remains contained, and the available record does not support a broader national pattern.",
  actions: [
    "Confirm weekend safety-team assignments and emergency-service roles.",
    "Check official local weather and emergency notices before gatherings.",
    "Review account recovery, multifactor authentication, and phishing reporting.",
    "Escalate specific threats to law enforcement rather than amplifying them online."
  ]
};

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
    <span class="signal-time">${signal.updated}</span>
  </div>`).join("");
}

function incidentIdentifier(incident) {
  const chronological = [...publishedIncidents].sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  const sequence = Math.max(chronological.findIndex(item => item.slug === incident.slug) + 1, 1);
  return `EVT-${incident.eventDate.slice(0, 4)}-${String(sequence).padStart(3, "0")}`;
}

function homePage() {
  return `<section class="bulletin-hero">
      <div class="bulletin-heading">
        <div class="bulletin-kicker"><span>Church safety threat bulletin</span><time datetime="2026-08-02">August 2, 2026</time></div>
        <p class="eyebrow">Public intelligence brief</p>
        <h1>Routine vigilance.<br><em>Clear next steps.</em></h1>
        <p class="bulletin-deck">A source-conscious readiness brief for churches and ministry teams. This bulletin does not assert a verified nationwide church-specific threat; local conditions and official instructions always take priority.</p>
        <div class="bulletin-actions"><a class="button bulletin-button" href="#/incidents">Review verified incidents</a><a class="bulletin-text-link" href="#/weekly">Read weekly bulletin →</a><a class="bulletin-text-link" href="#/standards">How verification works →</a></div>
      </div>
      <aside class="posture-card" aria-label="Current public posture: level one of five, routine">
        <span>Current public posture</span>
        <div class="posture-reading"><strong>1</strong><div><em>of 5</em><b>Routine</b></div></div>
        <div class="posture-scale" aria-hidden="true"><i class="active"></i><i></i><i></i><i></i><i></i></div>
        <p>No active nationwide alert is being published here. Continue normal awareness and verify local conditions.</p>
      </aside>
    </section>
    <section class="bulletin-notice" aria-label="Bulletin status"><span class="bulletin-dot"></span><strong>Public status</strong><p>Manually reviewed bulletin. New discoveries remain private until verified and approved.</p><span>Next update: when verified conditions change</span></section>
    <section class="bulletin-content bulletin-incident-section bulletin-incident-priority">
      <div class="bulletin-section-heading"><div><p class="eyebrow">Verified record</p><h2>Latest incident review</h2></div><p>Location, identifiers, and trend context are presented up front. A contained event is not presented as an active alert.</p></div>
      ${featuredIncidentCard() || `<p class="empty-state">No verified incident record is currently published.</p>`}
    </section>
    <section class="bulletin-content">
      <div class="bulletin-section-heading"><div><p class="eyebrow">Operational picture</p><h2>What ministry teams should know now</h2></div><p>National monitoring is context—not a substitute for local police, emergency management, weather, or public-health instructions.</p></div>
      <div class="bulletin-lanes">${bulletinLanes.map(lane => `<article class="bulletin-lane">
        <div class="bulletin-lane-top"><span class="severity severity-${lane.tone}">${lane.status}</span><span>Official source</span></div>
        <h3>${lane.title}</h3><p>${lane.detail}</p>
        <a href="${lane.href}" target="_blank" rel="noreferrer">${lane.source} ↗</a>
      </article>`).join("")}</div>
    </section>
    <section class="bulletin-content bulletin-two-column">
      <div class="bulletin-actions-panel"><p class="eyebrow">Readiness checklist</p><h2>Four actions for this week</h2><ol>
        <li><span>01</span><p>Confirm who calls emergency services and who meets responding officers.</p></li>
        <li><span>02</span><p>Review entrances, exits, parking coverage, and reunification procedures.</p></li>
        <li><span>03</span><p>Check official weather and local emergency notices before gatherings.</p></li>
        <li><span>04</span><p>Remind staff and volunteers what to report, where to report it, and what not to amplify online.</p></li>
      </ol></div>
      <aside class="bulletin-source-note"><p class="eyebrow">Confidence note</p><h2>What this bulletin does—and does not—say</h2><p><strong>Established:</strong> the published incident record on this page passed the source and editorial gates.</p><p><strong>Monitoring:</strong> the lanes above are continuing readiness categories, not claims of active attacks.</p><p><strong>Not established:</strong> no nationwide threat level is inferred from social posts, headlines, or a single uncorroborated report.</p><a class="rail-link" href="#/signals">Open monitoring lanes →</a></aside>
    </section>`;
}

function latestPage() {
  const categories = ["All", ...new Set(articles.map(a => a.category))];
  return `<section class="page-shell"><div class="page-intro"><h1>Latest</h1><p>Essays, explainers, and field notes for people who want useful context—not another stream of reactions.</p></div>
    <div class="filter-bar" aria-label="Filter articles">${categories.map((cat, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("")}</div>
    <div class="article-grid all-articles" id="article-list">${articles.map(articleCard).join("")}</div></section>`;
}

function signalsPage() {
  return `<section class="page-shell"><div class="page-intro"><h1>Signal desk</h1><p>A working view of continuing monitoring lanes across physical safety, public information, policy, weather, and community care.</p></div>
    <p class="eyebrow">Supporting monitoring lanes — no automated public alerts</p>
    <div class="dashboard-summary">
      <div class="summary-stat"><span>Monitoring lanes</span><strong>${signals.length}</strong></div>
      <div class="summary-stat"><span>Elevated public alerts</span><strong>${signals.filter(s => s.severity === "Elevated").length}</strong></div>
      <div class="summary-stat"><span>Domains</span><strong>${new Set(signals.map(s => s.domain)).size}</strong></div>
      <div class="summary-stat"><span>Posture</span><strong>Routine</strong></div>
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
      <div><dt>Update mode</dt><dd>${signal.updated}</dd></div>
    </dl>`;
}

function featuredIncidentCard() {
  const incident = publishedIncidents[0];
  if (!incident) return "";
  const date = new Date(`${incident.eventDate}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const location = `${incident.location.city}, ${incident.location.region}`;
  const eventId = incidentIdentifier(incident);
  const trendAssessment = publishedIncidents.length < 3 ? "No trend established" : "Developing comparison set";
  const primary = incident.sources.find(source => source.type === "primary") || incident.sources[0];
  const secondary = incident.sources.find(source => source !== primary);
  return `<article class="featured-incident">
    <div class="featured-incident-label">
      <span class="incident-status-dot"></span><span>Verified incident review</span><span class="featured-event-id">${eventId}</span><time>${date}</time>
    </div>
    <dl class="featured-incident-readout"><div><dt>Location</dt><dd>${location}</dd></div><div><dt>Identifier</dt><dd>${eventId}</dd></div><div><dt>Status</dt><dd>${categoryLabel(incident.currentStatus)}</dd></div><div><dt>Trend assessment</dt><dd>${trendAssessment}</dd></div></dl>
    <div class="featured-incident-body">
      <div><p class="incident-location">${location}</p><h2>${incident.title}</h2><span class="incident-outcome">${incident.outcome}</span></div>
      <div class="incident-summary">
        <p>${incident.deck}</p>
        <p><strong>Preparedness note:</strong> ${incident.responseLessons[0]}</p>
        <div class="featured-identifiers" aria-label="Event identifiers">${incident.categories.map(category => `<span>${categoryLabel(category)}</span>`).join("")}</div>
        <div class="incident-sources">
          ${primary ? `<a href="${primary.url}" target="_blank" rel="noreferrer">${primary.publisher} ↗</a>` : ""}
          ${secondary ? `<a href="${secondary.url}" target="_blank" rel="noreferrer">${secondary.publisher} ↗</a>` : ""}
          <a href="incidents/${incident.slug}.html">Full incident record →</a>
        </div>
      </div>
    </div>
  </article>`;
}

function readableIncidentDate(value) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function orderedIncidents() {
  return [...publishedIncidents].sort((a, b) => b.eventDate.localeCompare(a.eventDate));
}

function categoryLabel(value) {
  return value.replaceAll("-", " ").replace(/\b\w/g, letter => letter.toUpperCase());
}

function eventLedger() {
  const events = orderedIncidents();
  if (!events.length) return `<p class="empty-state">No verified security events have been published.</p>`;
  return events.map(incident => {
    const date = new Date(`${incident.eventDate}T12:00:00Z`);
    const sourceNames = incident.sources.map(source => source.publisher).join(" · ");
    const eventId = incidentIdentifier(incident);
    return `<article class="security-event" data-severity="${incident.severityAtEvent}">
      <time class="security-event-date" datetime="${incident.eventDate}"><span>${date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}</span><strong>${date.getUTCDate()}</strong><small>${date.getUTCFullYear()}</small></time>
      <div class="security-event-body">
        <div class="security-event-meta"><span class="event-id">${eventId}</span><span class="severity severity-${incident.severityAtEvent}">${incident.severityAtEvent}</span><span>${incident.location.city}, ${incident.location.region}</span><span>${incident.currentStatus}</span></div>
        <h2>${incident.title}</h2>
        <p>${incident.deck}</p>
        <div class="security-event-tags">${incident.categories.map(category => `<span>${categoryLabel(category)}</span>`).join("")}</div>
      </div>
      <div class="security-event-action"><span class="source-status"><i aria-hidden="true"></i>${incident.sources.length} retained source${incident.sources.length === 1 ? "" : "s"}</span><small>${sourceNames}</small><a class="button button-dark" href="incidents/${incident.slug}.html">View record <span aria-hidden="true">→</span></a></div>
    </article>`;
  }).join("");
}

function trendCards() {
  const events = orderedIncidents();
  const contained = events.filter(incident => incident.currentStatus === "contained" || incident.currentStatus === "resolved").length;
  const categories = events.flatMap(incident => incident.categories || []);
  const categoryCounts = categories.reduce((counts, category) => ({ ...counts, [category]: (counts[category] || 0) + 1 }), {});
  const leadingCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
  const cards = [
    { label: "Verified event volume", value: String(events.length), trend: events.length < 3 ? "Sample too small for a directional trend" : "Compare against the prior reporting period" },
    { label: "Most represented domain", value: leadingCategory ? categoryLabel(leadingCategory) : "None", trend: events.length < 2 ? "Single-event representation only" : "Review for recurrence and geographic spread" },
    { label: "Contained or resolved", value: `${contained} of ${events.length}`, trend: contained === events.length && events.length ? "No active status in the public event ledger" : "Review current-status labels" }
  ];
  return cards.map(card => `<article class="trend-card"><span>${card.label}</span><strong>${card.value}</strong><p>${card.trend}</p></article>`).join("");
}

function radarPage() {
  const events = orderedIncidents();
  const latestUpdate = events[0]?.updatedAt ? readableIncidentDate(events[0].updatedAt.slice(0, 10)) : "No public update";
  const activeEvents = events.filter(event => !["contained", "resolved"].includes(event.currentStatus)).length;
  return `<section class="page-shell event-ledger-page">
    <header class="radar-command">
      <div class="radar-command-copy"><p class="readout-live"><i aria-hidden="true"></i>Public intelligence readout</p><h1>Threat radar</h1><p>Verified security events, presented newest first. Dates, status, location, and the essential assessment remain visible at a glance.</p></div>
      <div class="radar-command-stamp"><span>Current public posture</span><strong>${activeEvents ? "Review active records" : "Routine monitoring"}</strong><time>Updated ${latestUpdate}</time><small>Verified public records only</small></div>
    </header>
    <div class="radar-overview" aria-label="Threat radar overview">
      <div><strong>${events.length}</strong><span>Verified events</span></div>
      <div><strong>${activeEvents}</strong><span>Active status</span></div>
      <div><strong>${events.length < 3 ? "Limited" : "Developing"}</strong><span>Trend confidence</span></div>
    </div>
    <section class="trend-section" aria-labelledby="trend-heading"><div class="readout-section-head"><div><span>01 / Assessment</span><h2 id="trend-heading">What the record supports</h2></div><p>Counts reflect this site’s verified public archive, not the total number of events nationwide.</p></div><div class="trend-grid">${trendCards()}</div></section>
    <section class="event-ledger" aria-labelledby="event-ledger-heading"><div class="readout-section-head"><div><span>02 / Event ledger</span><h2 id="event-ledger-heading">Important security events</h2></div><p>Newest first. Published after source verification, uncertainty review, and editorial approval.</p></div><div class="ledger-column-head" aria-hidden="true"><span>Date</span><span>Verified event and assessment</span><span>Source record</span></div>${eventLedger()}</section>
    <div class="radar-method"><p><strong>Trend standard:</strong> an event may be important without representing a trend. Recurrence, geography, method, target type, outcome, and later-established facts are compared before directional language is used.</p></div>
  </section>`;
}

function weeklyPage() {
  const events = orderedIncidents();
  const periodEvents = events.filter(incident => incident.eventDate >= weeklyBulletin.periodStart && incident.eventDate <= weeklyBulletin.periodEnd);
  const latest = events[0];
  return `<article class="page-shell weekly-page">
    <header class="weekly-header"><div><p class="eyebrow">${weeklyBulletin.issue}</p><h1>Weekly security bulletin</h1><p>${weeklyBulletin.headline}</p></div><div class="weekly-issue"><span>Public posture</span><strong>${weeklyBulletin.posture}</strong><time datetime="${weeklyBulletin.publishedAt}">Issued ${readableIncidentDate(weeklyBulletin.publishedAt)}</time></div></header>
    <div class="weekly-summary">
      <div><span>New verified events</span><strong>${periodEvents.length}</strong></div>
      <div><span>Verified archive</span><strong>${events.length}</strong></div>
      <div><span>Trend confidence</span><strong>${events.length < 3 ? "Limited" : "Developing"}</strong></div>
    </div>
    <section class="weekly-lead"><p class="eyebrow">Executive summary</p><h2>${weeklyBulletin.headline}</h2><p>${weeklyBulletin.summary}</p><button class="button button-outline" type="button" data-print-bulletin>Print bulletin</button></section>
    <div class="weekly-disclosures">
      <details class="weekly-disclosure"><summary><div><span>01</span><h2>What changed this week</h2></div><span class="disclosure-toggle" aria-hidden="true"></span></summary><div class="weekly-disclosure-body"><p class="eyebrow">Evidence and confidence</p><p>${periodEvents.length ? `${periodEvents.length} verified event record${periodEvents.length === 1 ? " was" : "s were"} added during this bulletin period.` : "No new incident passed the public verification and publication gates during this bulletin period."}</p><p>Discovery volume is not treated as event volume. Unverified feed items and social leads remain outside this public summary.</p></div></details>
      <details class="weekly-disclosure"><summary><div><span>02</span><h2>Carry-forward record</h2></div><span class="disclosure-toggle" aria-hidden="true"></span></summary><div class="weekly-disclosure-body"><p class="eyebrow">Latest retained event</p><h3>${latest ? latest.title : "No verified incident retained"}</h3><p>${latest ? `${latest.outcome}. ${latest.reportedNotEstablished?.[0] || "No additional uncertainty note is available."}` : "The public archive does not currently contain a verified incident."}</p>${latest ? `<a class="rail-link" href="incidents/${latest.slug}.html">Read the source record →</a>` : ""}</div></details>
      <details class="weekly-disclosure"><summary><div><span>03</span><h2>Trend review</h2></div><span class="disclosure-toggle" aria-hidden="true"></span></summary><div class="weekly-disclosure-body"><p class="eyebrow">Assessment</p><h3>No broader pattern established</h3><p>The current public sample is too small for claims about national direction, frequency, or motive. Physical-safety preparedness remains relevant because it is actionable even when event volume is low.</p><p>Coverage framing, source diversity, geography, and later corrections remain part of the manual narrative audit.</p></div></details>
      <details class="weekly-disclosure"><summary><div><span>04</span><h2>Recommended actions</h2></div><span class="disclosure-toggle" aria-hidden="true"></span></summary><div class="weekly-disclosure-body"><p class="eyebrow">This week’s checklist</p><ol class="weekly-actions">${weeklyBulletin.actions.map(action => `<li>${action}</li>`).join("")}</ol></div></details>
    </div>
    <aside class="weekly-sources"><div><p class="eyebrow">Monitoring references</p><h2>Start with official sources</h2></div><div><a href="https://www.fbi.gov/feeds/national-press-releases" target="_blank" rel="noreferrer">FBI national releases ↗</a><a href="https://www.weather.gov/alerts" target="_blank" rel="noreferrer">National Weather Service alerts ↗</a><a href="https://www.cisa.gov/news-events/cybersecurity-advisories" target="_blank" rel="noreferrer">CISA advisories ↗</a><a href="#/standards">Editorial standards →</a></div></aside>
  </article>`;
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
  else if (path === "/weekly") main.innerHTML = weeklyPage();
  else if (path === "/incidents") main.innerHTML = incidentsPage();
  else if (path === "/standards") main.innerHTML = standardsPage();
  else if (path === "/subscribe") main.innerHTML = subscribePage();
  else if (path === "/about") main.innerHTML = aboutPage();
  else if (path.startsWith("/article/")) main.innerHTML = articlePage(articles.find(a => a.slug === path.split("/").pop()));
  else main.innerHTML = notFoundPage();
  const titles = { "/": "Church Safety Threat Bulletin", "/radar": "Threat Radar", "/weekly": "Weekly Security Bulletin", "/incidents": "Verified Incidents", "/signals": "Signal Desk", "/standards": "Editorial Standards" };
  document.title = `${titles[path] || "Intelligence Dashboard"} | Cornerstone Digital`;
  document.querySelector("#mobile-menu").classList.remove("open");
  document.querySelector("#menu-button").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
  bindPageEvents();
}

function bindPageEvents() {
  document.querySelector("[data-print-bulletin]")?.addEventListener("click", () => {
    const disclosures = [...document.querySelectorAll(".weekly-disclosure")];
    const openStates = disclosures.map(disclosure => disclosure.open);
    disclosures.forEach(disclosure => { disclosure.open = true; });
    window.print();
    disclosures.forEach((disclosure, index) => { disclosure.open = openStates[index]; });
  });
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
