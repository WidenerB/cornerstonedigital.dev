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

const workspaceSources = [
  { id: "cornerstone", name: "Cornerstone Verified Events", type: "Shared", scope: "National", trust: "Verified", publication: "Automatic", health: "Current", enabled: true },
  { id: "cherokee", name: "Cherokee County Sheriff", type: "Official feed", scope: "County", trust: "Primary", publication: "Review", health: "Checked 12 min ago", enabled: true },
  { id: "woodstock", name: "Woodstock Police", type: "Web feed", scope: "Local", trust: "Primary", publication: "Review", health: "Checked 28 min ago", enabled: true },
  { id: "intake", name: "Church Security Email", type: "Email intake", scope: "Internal", trust: "Restricted", publication: "Manual", health: "Ready", enabled: true },
  { id: "community", name: "Local community leads", type: "Discovery", scope: "Local", trust: "Discovery only", publication: "Never automatic", health: "Paused", enabled: false }
];

const reviewItems = [
  { id: "RQ-041", source: "Cherokee County Sheriff", trust: "Primary", category: "Local official notice", title: "Traffic plan announced for Saturday civic event", received: "Today, 7:42 a.m.", relevance: "Near usual team arrival route", state: "Relevance screening" },
  { id: "RQ-040", source: "Church Security Email", trust: "Internal", category: "Team observation", title: "Exterior light out near west parking entrance", received: "Yesterday, 9:16 p.m.", relevance: "Building-specific operational item", state: "Editorial review" },
  { id: "RQ-039", source: "Local community leads", trust: "Discovery", category: "Unverified lead", title: "Forwarded report mentioning area vehicle break-ins", received: "Yesterday, 5:08 p.m.", relevance: "Requires an official record or corroboration", state: "Verification pending" }
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
    <span class="signal-time">${signal.updated}</span>
  </div>`).join("");
}

function incidentIdentifier(incident) {
  const chronological = [...publishedIncidents].sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  const sequence = Math.max(chronological.findIndex(item => item.slug === incident.slug) + 1, 1);
  return `EVT-${incident.eventDate.slice(0, 4)}-${String(sequence).padStart(3, "0")}`;
}

function workspacePage() {
  return `<section class="workspace-shell">
    <header class="workspace-masthead">
      <div><p class="workspace-overline">Private church workspace <span>Prototype</span></p><h1>Hillside Church<br><em>Security Brief</em></h1><p>Coverage: Cherokee County, Georgia, nearby counties, and national church events</p></div>
      <aside class="workspace-posture"><span>Current posture</span><strong>Routine</strong><p>No verified condition currently requires changes to normal procedures.</p><dl><div><dt>Last reviewed</dt><dd>August 2, 2026 Â· 8:15 p.m.</dd></div><div><dt>Next gathering</dt><dd>Sunday Â· 9:00 a.m.</dd></div></dl></aside>
    </header>
    <div class="prototype-banner"><strong>Product prototype</strong><span>This static preview demonstrates the tenant workspace. Authentication, tenant isolation, credentials, and private records require the planned backend before production use.</span></div>
    <div class="workspace-grid">
      <section class="workspace-main">
        <div class="workspace-section-head"><div><p class="eyebrow">Since your last review</p><h2>Three items need attention</h2></div><a href="#/review">Open review queue â†’</a></div>
        ${reviewItems.map((item, index) => `<article class="attention-item"><span class="attention-number">0${index + 1}</span><div><div class="item-labels"><span>${item.trust}</span><span>${item.category}</span></div><h3>${item.title}</h3><p>${item.relevance}</p></div><div class="attention-status"><span>${item.state}</span><time>${item.received}</time></div></article>`).join("")}
        <div class="workspace-section-head next-actions"><div><p class="eyebrow">Next gathering</p><h2>Actions for Sunday</h2></div><span class="audience-label">Audience: Security team</span></div>
        <div class="action-list"><label><input type="checkbox" checked><span><strong>Confirm team assignments</strong><small>Completed by David R.</small></span></label><label><input type="checkbox"><span><strong>Check west parking entrance lighting</strong><small>Assigned to facilities team</small></span></label><label><input type="checkbox"><span><stronóŽ·¶‰žËkºwµç}‘¥Øø(€€€€€€€€ñÀ±…ÍÌô‰•å•‰É½Üˆø‘í¥¹¥‘•¹Ð¹±½…Ñ¥½¸¹¥Ñåô°€‘í¥¹¥‘•¹Ð¹±½…Ñ¥½¸¹É•¥½¹ôð½Àø(€€€€€€€€ñ Èø‘í¥¹¥‘•¹Ð¹Ñ¥Ñ±•ôð½ Èø(€€€€€€€€ñÀø‘í¥¹¥‘•¹Ð¹‘•­ôð½Àø(€€€€€€€€ñ‘¥Ø±…ÍÌô‰¥¹¥‘•¹Ðµ…É¡¥Ù”µ…Ñ¥½¹Ìˆøñ„±…ÍÌô‰‰ÕÑÑ½¸‰ÕÑÑ½¸µ‘…É¬ˆ¡É•˜ô‰¥¹¥‘•¹ÑÌ¼‘í¥¹¥‘•¹Ð¹Í±Õô¹¡Ñµ°ˆùI•…¥¹¥‘•¹ÐÉ•½Éð½„øñÍÁ…¸ø‘í¥¹¥‘•¹Ð¹Í½ÕÉ•Ì¹±•¹Ñ¡ôÉ•Ñ…¥¹•Í½ÕÉ•Ìð½ÍÁ…¸øð½‘¥Øø(€€€€€€ð½…ÉÑ¥±”ù€¤¹©½¥¸ ˆˆ¤€è€ñÀ±…ÍÌô‰•µÁÑäµÍÑ…Ñ”ˆù9¼Ù•É¥™¥•¥¹¥‘•¹ÐÉ•½É‘Ì¡…Ù”‰••¸ÁÕ‰±¥Í¡•¸ð½Àùô(€€€€ð½‘¥Øø(€€ð½Í•Ñ¥½¸ù€ì)ô()™Õ¹Ñ¥½¸ÍÑ…¹‘…É‘ÍA…” ¤ì(€É•ÑÕÉ¸€ñÍ•Ñ¥½¸±…ÍÌô‰Á…”µÍ¡•±°ÍÑ…¹‘…É‘ÌµÁ…”ˆø(€€€€ñ‘¥Ø±…ÍÌô‰Á…”µ¥¹ÑÉ¼ˆøñ Äù‘¥Ñ½É¥…°ÍÑ…¹‘…É‘Ìð½ ÄøñÀù!½Ü½É¹•ÈMÑ½¹”¥¥Ñ…°‘¥Í½Ù•ÉÌ°Ù•É¥™¥•Ì°±…‰•±Ì°ÁÕ‰±¥Í¡•Ì°½ÉÉ•ÑÌ°…¹ÁÉ½Ñ•ÑÌ¥¹™½Éµ…Ñ¥½¸¸ð½Àøð½‘¥Øø(€€€€ñ‘¥Ø±…ÍÌô‰ÍÑ…¹‘…É‘ÌµÉ¥ˆø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÄð½ÍÁ…¸øñ Èù±…ÍÍ¥™¥…Ñ¥½¸ð½ ÈøñÀøñÍÑÉ½¹œùY•É¥™¥•¥¹¥‘•¹Ðèð½ÍÑÉ½¹œø½¹™¥Éµ•Ñ¡É½Õ „ÁÉ¥µ…ÉäÉ•½É½ÈÍÑÉ½¹œ¥¹‘•Á•¹‘•¹Ð½ÉÉ½‰½É…Ñ¥½¸¸ð½ÀøñÀøñÍÑÉ½¹œùÉ•‘¥‰±”Ñ¡É•…Ðèð½ÍÑÉ½¹œø„ÍÁ•¥™¥ŒÝ…É¹¥¹œ™É½´…¸…½Õ¹Ñ…‰±”…ÕÑ¡½É¥ÑäÉ•ÅÕ¥É¥¹œÉ•Ù¥•Ü½ÈÁÉ•Á…É…Ñ¥½¸¸ð½ÀøñÀøñÍÑÉ½¹œù•Ù•±½Á¥¹œÍ¥¹…°èð½ÍÑÉ½¹œøÁ½Ñ•¹Ñ¥…±±äÉ•±•Ù…¹Ð¥¹™½Éµ…Ñ¥½¸Ñ¡…ÐÉ•µ…¥¹Ì¥¹½µÁ±•Ñ”¸ð½ÀøñÀøñÍÑÉ½¹œù½¹Ñ•áÐèð½ÍÑÉ½¹œøÁ½±¥ä°Õ±ÑÕÉ…°°½Èµ•‘¥„‘•Ù•±½Áµ•¹ÑÌÝ¥Ñ¡½ÕÐ…¸¥µµ•‘¥…Ñ”Í…™•Ñä¥µÁ±¥…Ñ¥½¸¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÈð½ÍÁ…¸øñ ÈùAÕ‰±¥…Ñ¥½¸…Ñ”ð½ ÈøñÀùÕÑ½µ…Ñ•‘¥Í½Ù•Éä¹•Ù•ÈÁÕ‰±¥Í¡•Ì¸ÁÕ‰±¥Œ¥¹¥‘•¹ÐÉ•ÅÕ¥É•Ì„ÁÉ¥µ…ÉäÍ½ÕÉ”°•áÁ±¥¥ÐÕ¹•ÉÑ…¥¹Ñä±…¹Õ…”°½µÁ±•Ñ••‘¥Ñ½É¥…°É•Ù¥•Ü°…¹„ÕÉÉ•¹ÐµÍÑ…ÑÕÌ±…‰•°¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÌð½ÍÁ…¸øñ Èù…¥É¹•ÍÌð½ ÈøñÀù¸…ÉÉ•ÍÐ½È¡…É”¥Ì¹½Ð„½¹Ù¥Ñ¥½¸¸I•Á½ÉÑÌ‘¥ÍÑ¥¹Õ¥Í …±±•…Ñ¥½¹Ì°½™™¥¥…°ÍÑ…Ñ•µ•¹ÑÌ°½ÕÉÐ™¥¹‘¥¹Ì°…¹…±åÍ¥Ì°…¹•ÍÑ…‰±¥Í¡•™…ÑÌ¸5½Ñ¥Ù”¥Ì¹½Ð¥¹™•ÉÉ•Ý¥Ñ¡½ÕÐ•Ù¥‘•¹”¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÐð½ÍÁ…¸øñ Èù½ÉÉ•Ñ¥½¹Ìð½ ÈøñÀù5…Ñ•É¥…°½ÉÉ•Ñ¥½¹Ì…É”‘…Ñ•…¹•áÁ±…¥¹•¸UÁ‘…Ñ•ÌÁÉ•Í•ÉÙ”Ñ¡”‘¥ÍÑ¥¹Ñ¥½¸‰•ÑÝ••¸Ý¡…ÐÝ…Ì­¹½Ý¸¥¹¥Ñ¥…±±ä…¹Ý¡…ÐÝ…Ì•ÍÑ…‰±¥Í¡•±…Ñ•È¸ð½Àøñ„±…ÍÌô‰É…¥°µ±¥¹¬ˆ¡É•˜ô‰µ…¥±Ñ¼é…‘µ¥¹½É¹•ÉÍÑ½¹•‘¥¥Ñ…°¹‘•ØýÍÕ‰©•Ðõ½ÉÉ•Ñ¥½¸”ÈÁÉ•ÅÕ•ÍÐˆùI•ÅÕ•ÍÐ„½ÉÉ•Ñ¥½¸ƒŠHð½„øð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÔð½ÍÁ…¸øñ ÈùAÉ¥Ù…ä…¹Í…™•Ñäð½ ÈøñÀùAÉ¥Ù…Ñ”…‘‘É•ÍÍ•Ì°Á•ÉÍ½¹…°½¹Ñ…Ð¥¹™½Éµ…Ñ¥½¸°½Á•É…Ñ¥½¹…°Í•ÕÉ¥Ñä‘•Ñ…¥±Ì°…¹Õ¹¹••ÍÍ…ÉäÁ•ÉÍ½¹…°‘…Ñ„…É”•á±Õ‘•¸AÕ‰±¥Œµ¥¹Ñ•É•ÍÐÙ…±Õ”µÕÍÐ½ÕÑÝ•¥ ™½É•Í••…‰±”É¥Í¬¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀØð½ÍÁ…¸øñ Èù9…ÉÉ…Ñ¥Ù”…Õ‘¥Ðð½ ÈøñÀù½Ù•É…”½µÁ…É¥Í½¹Ì±½½¬™½ÈÍ•±•Ñ¥Ù”½¹Ñ•áÐ°ÁÉ•µ…ÑÕÉ”•ÉÑ…¥¹Ñä°…¹±…Ñ•È½ÉÉ•Ñ¥Ù”™…ÑÌ¸¥Í…É••µ•¹Ð½È¥‘•½±½¥…°Í±…¹Ð…±½¹”¥Ì¹•Ù•ÈÑÉ•…Ñ•…ÌÁÉ½½˜½˜½½É‘¥¹…Ñ¥½¸¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀÜð½ÍÁ…¸øñ ÈùM½ÕÉ”¡¥•É…É¡äð½ ÈøñÀøñÍÑÉ½¹œù=™™¥¥…°…¹ÁÉ¥µ…ÉäÉ•½É‘Ìð½ÍÑÉ½¹œø…¹¡½È™…ÑÕ…°±…¥µÌ¸€ñÍÑÉ½¹œùÍÑ…‰±¥Í¡•É•Á½ÉÑ¥¹œð½ÍÑÉ½¹œø…‘‘Ì½ÉÉ½‰½É…Ñ¥½¸…¹½¹Ñ•áÐ¸É•…Ñ½ÉÌ…É”‘¥Í½Ù•ÉäÑ½½±Ì°¹½Ð•Ù¥‘•¹”¸9¼Í½ÕÉ”Ñ¥•ÈÉ•µ½Ù•ÌÑ¡”¹••Ñ¼‘¥ÍÑ¥¹Õ¥Í …¸…±±•…Ñ¥½¸™É½´…¸•ÍÑ…‰±¥Í¡•™…Ð¸ð½Àøð½…ÉÑ¥±”ø(€€€€€€ñ…ÉÑ¥±”øñÍÁ…¸øÀàð½ÍÁ…¸øñ ÈùM½¥…°µ•‘¥„ð½ ÈøñÀùA½ÍÑÌ™É½´½™™¥¥…°…½Õ¹ÑÌ°©½ÕÉ¹…±¥ÍÑÌ°½É…¹¥é…Ñ¥½¹Ì°…¹•å•Ý¥Ñ¹•ÍÍ•Ìµ…äÍÕÉ™…”Ñ¥µ•±ä±•…‘Ì¸½Õ¹Ð¥‘•¹Ñ¥Ñä°‘…Ñ”°½É¥¥¹…°UI0°…¹™¥ÉÍÑ¡…¹‰…Í¥Ì…É”¡•­•ìµ…Ñ•É¥…°±…¥µÌÉ•ÅÕ¥É”¥¹‘•Á•¹‘•¹Ð½ÉÉ½‰½É…Ñ¥½¸‰•™½É”ÁÕ‰±¥…Ñ¥½¸¸ð½Àøð½…ÉÑ¥±”ø(€€€€ð½‘¥Øø(€€ð½Í•Ñ¥½¸ù€ì)ô()™Õ¹Ñ¥½¸ÍÕ‰ÍÉ¥‰•A…” ¤ì(€É•ÑÕÉ¸€ñÍ•Ñ¥½¸±…ÍÌô‰Á…”µÍ¡•±°ÍÕ‰ÍÉ¥‰”µÁ…”ˆø(€€€€ñ‘¥Ø±…ÍÌô‰Á…”µ¥¹ÑÉ¼ˆøñ ÄùMÑ…ä¥¹™½Éµ•ð½ ÄøñÀù¡½½Í”Ñ¡”‰É¥•™¥¹ÌÑ¡…Ðµ…ÑÑ•ÈÑ¼å½Ô¸UÉ•¹Ð¹½Ñ¥•Ì…É”É•Í•ÉÙ•™½ÈÍÁ•¥™¥Œ°Ù•É¥™¥•°…¹…Ñ¥½¹…‰±”¥¹™½Éµ…Ñ¥½¸¸ð½Àøð½‘¥Øø(€€€€ñ™½É´±…ÍÌô‰ÍÕ‰ÍÉ¥ÁÑ¥½¸µ™½É´ˆ¥ô‰ÍÕ‰ÍÉ¥ÁÑ¥½¸µ™½É´ˆø(€€€€€€ñ™¥•±‘Í•Ðøñ±••¹ù	É¥•™¥¹œÁÉ•™•É•¹•Ìð½±••¹ø(€€€€€€€€‘íl‰]••­±ä¥¹Ñ•±±¥•¹”‰É¥•™¥¹œˆ°€‰Y•É¥™¥•¥¹¥‘•¹ÐÉ•Ù¥•ÝÌˆ°€‰1½…°Í…™•Ñä¹½Ñ¥•Ìˆ°€‰I•±¥¥½ÕÌµ±¥‰•ÉÑä…¹Á½±¥äÕÁ‘…Ñ•Ìˆ°€‰%¹Ñ•É¹…Ñ¥½¹…°Á•ÉÍ•ÕÑ¥½¸½Ù•É…”‰t¹µ…À ¡±…‰•°°¥¹‘•à¤€ôø€ñ±…‰•°øñ¥¹ÁÕÐÑåÁ”ô‰¡•­‰½àˆ¹…µ”ô‰ÁÉ•™•É•¹”ˆÙ…±Õ”ôˆ‘í±…‰•±ôˆ€‘í¥¹‘•à€ôôô€À€ü€‰¡•­•ˆ€è€ˆ‰ô€¼ø€ñÍÁ…¸ø‘í±…‰•±ôð½ÍÁ…¸øð½±…‰•°ù€¤¹©½¥¸ ˆˆ¥ô(€€€€€€ð½™¥•±‘Í•Ðø(€€€€€€ñÀùe½ÕÈÍ•±•Ñ¥½¹Ì…É”Á±…•¥¹Ñ¼…¸•µ…¥°™½Èå½ÔÑ¼É•Ù¥•Ü…¹Í•¹¸Q¡¥ÌÁÉ½Ñ½ÑåÁ”‘½•Ì¹½ÐÍÑ½É”å½ÕÈ…‘‘É•ÍÌ½ÈÑÉ…¹Íµ¥Ð…¹åÑ¡¥¹œ…ÕÑ½µ…Ñ¥…±±ä¸ð½Àø(€€€€€€ñ‰ÕÑÑ½¸±…ÍÌô‰‰ÕÑÑ½¸‰ÕÑÑ½¸µ‘…É¬ˆÑåÁ”ô‰ÍÕ‰µ¥ÐˆùAÉ•Á…É”ÍÕ‰ÍÉ¥ÁÑ¥½¸•µ…¥°ð½‰ÕÑÑ½¸ø(€€€€ð½™½É´ø(€€ð½Í•Ñ¥½¸ù€ì)ô()™Õ¹Ñ¥½¸‘…Í¡‰½…É‘I½ÝÌ¡¥Ñ•µÌ¤ì(€É•ÑÕÉ¸¥Ñ•µÌ¹µ…À¡Í¥¹…°€ôø€ñ‘¥Ø±…ÍÌô‰‘…Í¡‰½…ÉµÉ½Üˆø(€€€€ñÍÁ…¸±…ÍÌô‰Í•Ù•É¥ÑäÍ•Ù•É¥Ñä´‘íÍ¥¹…°¹Í•Ù•É¥Ñä¹Ñ½1½Ý•É…Í” ¥ôˆø‘íÍ¥¹…°¹Í•Ù•É¥Ñåôð½ÍÁ…¸ø(€€€€ñ‘¥Øøñ Ìø‘íÍ¥¹…°¹Ñ¥Ñ±•ôð½ ÌøñÀø‘íÍ¥¹…°¹‘•Ñ…¥±ôð½Àøð½‘¥Øø(€€€€ñÍÁ…¸ø‘íÍ¥¹…°¹‘½µ…¥¹ôð½ÍÁ…¸øñÍÁ…¸±…ÍÌôˆ‘íÍ¥¹…°¹ÑÉ•¹€ôôô€‰I¥Í¥¹œˆ€ü€‰ÑÉ•¹µÕÀˆ€è€‰ÑÉ•¹µÍÑ•…‘ä‰ôˆø‘íÍ¥¹…°¹ÑÉ•¹‘ôð½ÍÁ…¸øñÍÁ…¸ûŠHð½ÍÁ…¸ø(€€ð½‘¥Øù€¤¹©½¥¸ ˆˆ¤ñð€ñÀ±…ÍÌô‰•µÁÑäµÍÑ…Ñ”ˆù9¼Í¥¹…±Ìµ…Ñ Ñ¡¥ÌÙ¥•Ü¸ð½Àù€ì)ô()™Õ¹Ñ¥½¸…ÉÑ¥±•A…”¡…ÉÑ¥±”¤ì(€¥˜€ ……ÉÑ¥±”¤É•ÑÕÉ¸¹½Ñ½Õ¹‘A…” ¤ì(€½¹ÍÐÁ…É…É…Á¡Ì€ô…ÉÑ¥±”¹‰½‘ä¹µ…À ¡Ñ•áÐ°¥¹‘•à¤€ôøì(€€€¥˜€¡¥¹‘•à€ôôô€Èñð¥¹‘•à€ôôô€Ô¤É•ÑÕÉ¸€ñ Èø‘íÑ•áÑôð½ Èù€ì(€€€¥˜€¡Ñ•áÐ¹±•¹Ñ €ð€ÄÔÀ€˜˜¥¹‘•à€ø€È¤É•ÑÕÉ¸€ñÀ±…ÍÌô‰ÁÕ±±ÅÕ½Ñ”ˆø‘íÑ•áÑôð½Àù€ì(€€€É•ÑÕÉ¸€ñÀø‘íÑ•áÑôð½Àù€ì(€ô¤¹©½¥¸ ˆˆ¤ì(€É•ÑÕÉ¸€ñ…ÉÑ¥±”±…ÍÌô‰Á…”µÍ¡•±°…ÉÑ¥±”µÁ…”ˆø(€€€€ñ¡•…‘•È±…ÍÌô‰…ÉÑ¥±”µ¡•…‘•Èˆøñ…Í¥‘”±…ÍÌô‰…ÉÑ¥±”µ¡•…‘•Èµ…Í¥‘”ˆøñÀ±…ÍÌô‰•å•‰É½Üˆø‘í…ÉÑ¥±”¹…Ñ•½Éåôð½Àøð½…Í¥‘”øñ‘¥Øø(€€€€€€ñÀ±…ÍÌô‰•å•‰É½Üˆø‘í…ÉÑ¥±”¹…Ñ•½Éåôð½Àøñ Äø‘í…ÉÑ¥±”¹Ñ¥Ñ±•ôð½ ÄøñÀ±…ÍÌô‰…ÉÑ¥±”µ‘•¬ˆø‘í…ÉÑ¥±”¹‘•­ôð½Àø‘íµ•Ñ„¡…ÉÑ¥±”¥ô(€€€€ð½‘¥Øøð½¡•…‘•Èø(€€€€ñ‘¥Ø±…ÍÌô‰…ÉÑ¥±”µ‰½‘äµ±…å½ÕÐˆøñ…Í¥‘”±…ÍÌô‰Í¡…É”µÑ½½±Ìˆø(€€€€€€ñ‰ÕÑÑ½¸±…ÍÌô‰‰ÕÑÑ½¸‰ÕÑÑ½¸µ½ÕÑ±¥¹”ˆ‘…Ñ„µÍ¡…É”ô‰¹…Ñ¥Ù”ˆùM¡…É”…ÉÑ¥±”ð½‰ÕÑÑ½¸ø(€€€€€€ñ‰ÕÑÑ½¸±…ÍÌô‰‰ÕÑÑ½¸‰ÕÑÑ½¸µ½ÕÑ±¥¹”ˆ‘…Ñ„µÍ¡…É”ô‰àˆù½Áä™½È`ð½‰ÕÑÑ½¸ø(€€€€ð½…Í¥‘”øñ‘¥Ø±…ÍÌô‰…ÉÑ¥±”µ‰½‘äˆø‘íÁ…É…É…Á¡Íôð½‘¥Øøð½‘¥Øø(€€ð½…ÉÑ¥±”ù€ì)ô()™Õ¹Ñ¥½¸…‰½ÕÑA…” ¤ì(€É•ÑÕÉ¸€ñÍ•Ñ¥½¸±…ÍÌô‰Á…”µÍ¡•±°ˆøñ‘¥Ø±…ÍÌô‰Á…”µ¥¹ÑÉ¼ˆøñ Äù‰½ÕÐð½ ÄøñÀù½É¹•ÈMÑ½¹”¥¥Ñ…°¥Ì…¸•‘¥Ñ½É¥…°Á±…Ñ™½É´™½ÈÁÕ‰±¥Œµ¥¹Ñ•É•ÍÐ…¹…±åÍ¥Ì°ÁÉ…Ñ¥…°¥¹Ñ•±±¥•¹”°…¹±•…Èµ•å•µ½¹¥Ñ½É¥¹œ¸ð½Àøð½‘¥Øø(€€€€ñ‘¥Ø±…ÍÌô‰…‰½ÕÐµÉ¥ˆøñ‘¥ØøñÀ±…ÍÌô‰•å•‰É½Üˆù=ÕÈÁÕÉÁ½Í”ð½Àøñ Èù5…­”¥µÁ½ÉÑ…¹Ð¥¹™½Éµ…Ñ¥½¸•…Í¥•ÈÑ¼Õ¹‘•ÉÍÑ…¹“ŠQ…¹•…Í¥•ÈÑ¼…Ð½¸¸ð½ ÈøñÀù]”…É”‰Õ¥±‘¥¹œ„ÁÕ‰±¥…Ñ¥½¸Ý¡•É”…ÉÑ¥±•Ì°Í½ÕÉ”¹½Ñ•Ì°…¹±¥Ù”‘…Í¡‰½…É‘Ì…¸É•¥¹™½É”½¹”…¹½Ñ¡•È¸Ù•Éä™½Éµ…ÐÍ¡½Õ±¡•±ÀÉ•…‘•ÉÌ‘¥ÍÑ¥¹Õ¥Í Ý¡…Ð¡…ÁÁ•¹•°Ý¡…Ð¥Ðµ…äµ•…¸°…¹Ý¡…ÐÉ•µ…¥¹ÌÕ¹­¹½Ý¸¸ð½Àøð½‘¥Øø(€€€€ñ‘¥Ø±…ÍÌô‰ÁÉ¥¹¥Á±•Ìˆøñ‘¥Ø±…ÍÌô‰ÁÉ¥¹¥Á±”ˆøñ‘¥Øøñ ÌùM¡½ÜÑ¡”Í½ÕÉ”ð½ ÌøñÀù±…¥µÌÍ¡½Õ±±•…‰…¬Ñ¼•Ù¥‘•¹”Ý¡•¹•Ù•ÈÁ½ÍÍ¥‰±”¸ð½Àøð½‘¥Øøð½‘¥Øøñ‘¥Ø±…ÍÌô‰ÁÉ¥¹¥Á±”ˆøñ‘¥Øøñ Ìù1…‰•°Õ¹•ÉÑ…¥¹Ñäð½ ÌøñÀù=‰Í•ÉÙ•™…Ð°…¹…±åÍ¥Ì°…¹™½É•…ÍÐ…É”‘¥™™•É•¹ÐÑ¡¥¹Ì¸ð½Àøð½‘¥Øøð½‘¥Øøñ‘¥Ø±…ÍÌô‰ÁÉ¥¹¥Á±”ˆøñ‘¥Øøñ ÌùAÉ•™•È‘ÕÉ…‰±”½¹Ñ•áÐð½ ÌøñÀùAÕ‰±¥Í Ý½É¬Ñ¡…ÐÉ•µ…¥¹ÌÕÍ•™Õ°…™Ñ•ÈÑ¡”™¥ÉÍÐÝ…Ù”½˜…ÑÑ•¹Ñ¥½¸¸ð½Àøð½‘¥Øøð½‘¥Øøð½‘¥Øøð½‘¥Øø(€€ð½Í•Ñ¥½¸ù€ì)ô()™Õ¹Ñ¥½¸¹½Ñ½Õ¹‘A…” ¤ìÉ•ÑÕÉ¸€ñÍ•Ñ¥½¸±…ÍÌô‰Á…”µÍ¡•±°ˆøñ‘¥Ø±…ÍÌô‰Á…”µ¥¹ÑÉ¼ˆøñ Äù9½Ð™½Õ¹ð½ ÄøñÀùQ¡…ÐÁ…”¥Í»ŠeÐ¥¸Ñ¡”‘…Í¡‰½…É¸€ñ„±…ÍÌô‰É…¥°µ±¥¹¬ˆ¡É•˜ôˆŒ½Í¥¹…±ÌˆùI•ÑÕÉ¸Ñ¼Ñ¡”M¥¹…°•Í¬ƒŠHð½„øð½Àøð½‘¥Øøð½Í•Ñ¥½¸ù€ìô()™Õ¹Ñ¥½¸É½ÕÑ” ¤ì(€½¹ÍÐÁ…Ñ €ô±½…Ñ¥½¸¹¡…Í ¹Í±¥” Ä¤ñð€ˆ¼ˆì(€¥˜€¡Á…Ñ €ôôô€ˆ¼ˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÝ½É­ÍÁ…•A…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½Í½ÕÉ•Ìˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÍ½ÕÉ•ÍA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½É•Ù¥•Üˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÉ•Ù¥•ÝEÕ•Õ•A…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½ÁÕ‰±¥Œˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÁÕ‰±¥	Õ±±•Ñ¥¹A…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½±…Ñ•ÍÐˆ¤µ…¥¸¹¥¹¹•É!Q50€ô±…Ñ•ÍÑA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½Í¥¹…±Ìˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÍ¥¹…±ÍA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½É…‘…Èˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÉ…‘…ÉA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½Ý••­±äˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÝ••­±åA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½¥¹¥‘•¹ÑÌˆ¤µ…¥¸¹¥¹¹•É!Q50€ô¥¹¥‘•¹ÑÍA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½ÍÑ…¹‘…É‘Ìˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÍÑ…¹‘…É‘ÍA…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½ÍÕ‰ÍÉ¥‰”ˆ¤µ…¥¸¹¥¹¹•É!Q50€ôÍÕ‰ÍÉ¥‰•A…” ¤ì(€•±Í”¥˜€¡Á…Ñ €ôôô€ˆ½…‰½ÕÐˆ¤µ…¥¸¹¥¹¹•É!Q50€ô…‰½ÕÑA…” ¤ì(€•±Í”¥˜€¡Á…Ñ ¹ÍÑ…ÉÑÍ]¥Ñ  ˆ½…ÉÑ¥±”¼ˆ¤¤µ…¥¸¹¥¹¹•É!Q50€ô…ÉÑ¥±•A…”¡…ÉÑ¥±•Ì¹™¥¹¡„€ôø„¹Í±Õœ€ôôôÁ…Ñ ¹ÍÁ±¥Ð ˆ¼ˆ¤¹Á½À ¤¤¤ì(€•±Í”µ…¥¸¹¥¹¹•É!Q50€ô¹½Ñ½Õ¹‘A…” ¤ì(€½¹ÍÐÑ¥Ñ±•Ì€ôì€ˆ¼ˆè€‰!¥±±Í¥‘”¡ÕÉ M•ÕÉ¥Ñä	É¥•˜ˆ°€ˆ½Í½ÕÉ•Ìˆè€‰M½ÕÉ”5…¹…•µ•¹Ðˆ°€ˆ½É•Ù¥•Üˆè€‰I•Ù¥•ÜEÕ•Õ”ˆ°€ˆ½ÁÕ‰±¥Œˆè€‰½É¹•ÉÍÑ½¹”%¹Ñ•±±¥•¹”9•ÑÝ½É¬ˆ°€ˆ½É…‘…Èˆè€‰Q¡É•…ÐI…‘…Èˆ°€ˆ½Ý••­±äˆè€‰]••­±äM•ÕÉ¥Ñä	Õ±±•Ñ¥¸ˆ°€ˆ½¥¹¥‘•¹ÑÌˆè€‰Y•É¥™¥•%¹¥‘•¹ÑÌˆ°€ˆ½Í¥¹…±Ìˆè€‰M¥¹…°•Í¬ˆ°€ˆ½ÍÑ…¹‘…É‘Ìˆè€‰‘¥Ñ½É¥…°MÑ…¹‘…É‘Ìˆôì(€‘½Õµ•¹Ð¹Ñ¥Ñ±”€ô€‘íÑ¥Ñ±•ÍmÁ…Ñ¡tñð€‰%¹Ñ•±±¥•¹”…Í¡‰½…É‰ôð½É¹•ÉÍÑ½¹”¥¥Ñ…±€ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆµ½‰¥±”µµ•¹Ôˆ¤¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” ‰½Á•¸ˆ¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆµ•¹Ôµ‰ÕÑÑ½¸ˆ¤¹Í•ÑÑÑÉ¥‰ÕÑ” ‰…É¥„µ•áÁ…¹‘•ˆ°€‰™…±Í”ˆ¤ì(€Ý¥¹‘½Ü¹ÍÉ½±±Q¼ À°€À¤ì(€‰¥¹‘A…•Ù•¹ÑÌ ¤ì)ô()™Õ¹Ñ¥½¸‰¥¹‘A…•Ù•¹ÑÌ ¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µÍ½ÕÉ”µÑ½±•tˆ¤¹™½É… ¡‰ÕÑÑ½¸€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€½¹ÍÐ¥Í=¸€ô‰ÕÑÑ½¸¹•ÑÑÑÉ¥‰ÕÑ” ‰…É¥„µÁÉ•ÍÍ•ˆ¤€ôôô€‰ÑÉÕ”ˆì(€€€‰ÕÑÑ½¸¹Í•ÑÑÑÉ¥‰ÕÑ” ‰…É¥„µÁÉ•ÍÍ•ˆ°MÑÉ¥¹œ …¥Í=¸¤¤ì(€€€‰ÕÑÑ½¸¹±…ÍÍ1¥ÍÐ¹Ñ½±” ‰½¸ˆ°€…¥Í=¸¤ì(€€€Í¡½ÝQ½…ÍÐ …¥Í=¸€ü€‰M½ÕÉ”•¹…‰±•¥¸Ñ¡¥ÌÁÉ½Ñ½ÑåÁ”ˆ€è€‰M½ÕÉ”Á…ÕÍ•¥¸Ñ¡¥ÌÁÉ½Ñ½ÑåÁ”ˆ¤ì(€ô¤¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µ‘•µ¼µ…Ñ¥½¹tˆ¤¹™½É… ¡‰ÕÑÑ½¸€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøÍ¡½ÝQ½…ÍÐ¡‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹‘•µ½Ñ¥½¸¤¤¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° œ¹µ½‘”µ½ÁÑ¥½¹Ì¥¹ÁÕÑm¹…µ”ô‰Í½ÕÉ”µµ½‘”‰tœ¤¹™½É… ¡¥¹ÁÕÐ€ôø¥¹ÁÕÐ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€ ¤€ôøì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ˆ¹µ½‘”µ½ÁÑ¥½¹Ì±…‰•°ˆ¤¹™½É… ¡±…‰•°€ôø±…‰•°¹±…ÍÍ1¥ÍÐ¹Ñ½±” ‰Í•±•Ñ•ˆ°±…‰•°¹½¹Ñ…¥¹Ì¡¥¹ÁÕÐ¤¤¤ì(€€€Í¡½ÝQ½…ÍÐ ‰½¹™¥ÕÉ…Ñ¥½¸ÁÉ•Ù¥•ÜÕÁ‘…Ñ•ˆ¤ì(€ô¤¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ‰m‘…Ñ„µÁÉ¥¹Ðµ‰Õ±±•Ñ¥¹tˆ¤ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€½¹ÍÐ‘¥Í±½ÍÕÉ•Ì€ôl¸¸¹‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ˆ¹Ý••­±äµ‘¥Í±½ÍÕÉ”ˆ¥tì(€€€½¹ÍÐ½Á•¹MÑ…Ñ•Ì€ô‘¥Í±½ÍÕÉ•Ì¹µ…À¡‘¥Í±½ÍÕÉ”€ôø‘¥Í±½ÍÕÉ”¹½Á•¸¤ì(€€€‘¥Í±½ÍÕÉ•Ì¹™½É… ¡‘¥Í±½ÍÕÉ”€ôøì‘¥Í±½ÍÕÉ”¹½Á•¸€ôÑÉÕ”ìô¤ì(€€€Ý¥¹‘½Ü¹ÁÉ¥¹Ð ¤ì(€€€‘¥Í±½ÍÕÉ•Ì¹™½É…  ¡‘¥Í±½ÍÕÉ”°¥¹‘•à¤€ôøì‘¥Í±½ÍÕÉ”¹½Á•¸€ô½Á•¹MÑ…Ñ•Ím¥¹‘•átìô¤ì(€ô¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µ…Ñ•½Éåtˆ¤¹™½É… ¡‰ÕÑÑ½¸€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µ…Ñ•½Éåtˆ¤¹™½É… ¡ˆ€ôøˆ¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” ‰…Ñ¥Ù”ˆ¤¤ì(€€€‰ÕÑÑ½¸¹±…ÍÍ1¥ÍÐ¹…‘ ‰…Ñ¥Ù”ˆ¤ì(€€€½¹ÍÐ™¥±Ñ•É•€ô‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹…Ñ•½Éä€ôôô€‰±°ˆ€ü…ÉÑ¥±•Ì€è…ÉÑ¥±•Ì¹™¥±Ñ•È¡„€ôø„¹…Ñ•½Éä€ôôô‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹…Ñ•½Éä¤ì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆ…ÉÑ¥±”µ±¥ÍÐˆ¤¹¥¹¹•É!Q50€ô™¥±Ñ•É•¹µ…À¡…ÉÑ¥±•…É¤¹©½¥¸ ˆˆ¤ì(€ô¤¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µÍ¥¹…°µ™¥±Ñ•Étˆ¤¹™½É… ¡‰ÕÑÑ½¸€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µÍ¥¹…°µ™¥±Ñ•Étˆ¤¹™½É… ¡ˆ€ôøˆ¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” ‰…Ñ¥Ù”ˆ¤¤ì(€€€‰ÕÑÑ½¸¹±…ÍÍ1¥ÍÐ¹…‘ ‰…Ñ¥Ù”ˆ¤ì(€€€½¹ÍÐ™¥±Ñ•É•€ô‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹Í¥¹…±¥±Ñ•È€ôôô€‰±°ˆ€üÍ¥¹…±Ì€èÍ¥¹…±Ì¹™¥±Ñ•È¡Ì€ôøÌ¹Í•Ù•É¥Ñä€ôôô‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹Í¥¹…±¥±Ñ•È¤ì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ¥¹…±ÌµÑ…‰±”ˆ¤¹¥¹¹•É!Q50€ô‘…Í¡‰½…É‘I½ÝÌ¡™¥±Ñ•É•¤ì(€ô¤¤ì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µÍ¡…É•tˆ¤¹™½É… ¡‰ÕÑÑ½¸€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøÍ¡…É•ÕÉÉ•¹Ð¡‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹Í¡…É”¤¤¤ì(€½¹ÍÐÉ…‘…É5…É­Í±•µ•¹Ð€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÉ…‘…Èµµ…É­Ìˆ¤ì(€½¹ÍÐÉ…‘…É½µ…¥¸€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÉ…‘…Èµ‘½µ…¥¸ˆ¤ì(€¥˜€¡É…‘…É5…É­Í±•µ•¹Ð€˜˜É…‘…É½µ…¥¸¤ì(€€€½¹ÍÐÍ•±•ÑI…‘…ÉM¥¹…°€ô€¡¥¤€ôøì(€€€€€½¹ÍÐÍ¥¹…°€ôÍ¥¹…±Ì¹™¥¹¡¥Ñ•´€ôø¥Ñ•´¹¥€ôôô¥¤ì(€€€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÉ…‘…Èµ‘•Ñ…¥°ˆ¤¹¥¹¹•É!Q50€ôÉ…‘…É•Ñ…¥°¡Í¥¹…°¤ì(€€€€€É…‘…É5…É­Í±•µ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µÉ…‘…ÈµÍ•±•Ñtˆ¤¹™½É… ¡Á½¥¹Ð€ôøì(€€€€€€€½¹ÍÐ¥ÍM•±•Ñ•€ôÁ½¥¹Ð¹‘…Ñ…Í•Ð¹É…‘…ÉM•±•Ð€ôôô¥ì(€€€€€€€Á½¥¹Ð¹±…ÍÍ1¥ÍÐ¹Ñ½±” ‰Í•±•Ñ•ˆ°¥ÍM•±•Ñ•¤ì(€€€€€€€Á½¥¹Ð¹Í•ÑÑÑÉ¥‰ÕÑ” ‰…É¥„µÁÉ•ÍÍ•ˆ°MÑÉ¥¹œ¡¥ÍM•±•Ñ•¤¤ì(€€€€€ô¤ì(€€€ôì(€€€É…‘…É5…É­Í±•µ•¹Ð¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°•Ù•¹Ð€ôøì(€€€€€½¹ÍÐÁ½¥¹Ð€ô•Ù•¹Ð¹Ñ…É•Ð¹±½Í•ÍÐ ‰m‘…Ñ„µÉ…‘…ÈµÍ•±•Ñtˆ¤ì(€€€€€¥˜€¡Á½¥¹Ð¤Í•±•ÑI…‘…ÉM¥¹…°¡Á½¥¹Ð¹‘…Ñ…Í•Ð¹É…‘…ÉM•±•Ð¤ì(€€€ô¤ì(€€€É…‘…É½µ…¥¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€ ¤€ôøì(€€€€€½¹ÍÐ™¥±Ñ•É•€ôÉ…‘…É½µ…¥¸¹Ù…±Õ”€ôôô€‰±°‘½µ…¥¹Ìˆ€üÍ¥¹…±Ì€èÍ¥¹…±Ì¹™¥±Ñ•È¡Í¥¹…°€ôøÍ¥¹…°¹‘½µ…¥¸€ôôôÉ…‘…É½µ…¥¸¹Ù…±Õ”¤ì(€€€€€½¹ÍÐÍ•±•Ñ•€ô™¥±Ñ•É•¹™¥¹¡Í¥¹…°€ôøÍ¥¹…°¹Í•Ù•É¥Ñä€ôôô€‰±•Ù…Ñ•ˆ¤ñð™¥±Ñ•É•‘lÁtì(€€€€€É…‘…É5…É­Í±•µ•¹Ð¹¥¹¹•É!Q50€ôÉ…‘…É5…É­Ì¡™¥±Ñ•É•°Í•±•Ñ•ü¹¥¤ì(€€€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÉ…‘…Èµ‘•Ñ…¥°ˆ¤¹¥¹¹•É!Q50€ôÉ…‘…É•Ñ…¥°¡Í•±•Ñ•¤ì(€€€ô¤ì(€ô(€½¹ÍÐÍÕ‰ÍÉ¥ÁÑ¥½¹½É´€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍÕ‰ÍÉ¥ÁÑ¥½¸µ™½É´ˆ¤ì(€¥˜€¡ÍÕ‰ÍÉ¥ÁÑ¥½¹½É´¤ÍÕ‰ÍÉ¥ÁÑ¥½¹½É´¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰ÍÕ‰µ¥Ðˆ°•Ù•¹Ð€ôøì(€€€•Ù•¹Ð¹ÁÉ•Ù•¹Ñ•™…Õ±Ð ¤ì(€€€½¹ÍÐÁÉ•™•É•¹•Ì€ôl¸¸¹ÍÕ‰ÍÉ¥ÁÑ¥½¹½É´¹ÅÕ•ÉåM•±•Ñ½É±° ¥¹ÁÕÑm¹…µ”ô‰ÁÉ•™•É•¹”‰té¡•­•œ¥t¹µ…À¡¥¹ÁÕÐ€ôø¥¹ÁÕÐ¹Ù…±Õ”¤ì(€€€½¹ÍÐÍÕ‰©•Ð€ô•¹½‘•UI%½µÁ½¹•¹Ð ‰½É¹•ÈMÑ½¹”¥¥Ñ…°ÍÕ‰ÍÉ¥ÁÑ¥½¸É•ÅÕ•ÍÐˆ¤ì(€€€½¹ÍÐ‰½‘ä€ô•¹½‘•UI%½µÁ½¹•¹Ð¡A±•…Í”ÍÕ‰ÍÉ¥‰”µ”Ñ¼éq¹q¸‘íÁÉ•™•É•¹•Ì¹µ…À¡¥Ñ•´€ôø€´€‘í¥Ñ•µõ€¤¹©½¥¸ ‰q¸ˆ¥õq¹q¹$Õ¹‘•ÉÍÑ…¹$…¸Õ¹ÍÕ‰ÍÉ¥‰”…Ð…¹äÑ¥µ”¹€¤ì(€€€Ý¥¹‘½Ü¹±½…Ñ¥½¸¹¡É•˜€ôµ…¥±Ñ¼é…‘µ¥¹½É¹•ÉÍÑ½¹•‘¥¥Ñ…°¹‘•ØýÍÕ‰©•Ðô‘íÍÕ‰©•Ñô™‰½‘äô‘í‰½‘åõ€ì(€ô¤ì)ô()…Íå¹Œ™Õ¹Ñ¥½¸Í¡…É•ÕÉÉ•¹Ð¡ÑåÁ”¤ì(€½¹ÍÐÍ±Õœ€ô±½…Ñ¥½¸¹¡…Í ¹ÍÁ±¥Ð ˆ¼ˆ¤¹Á½À ¤ì(€½¹ÍÐ…ÉÑ¥±”€ô…ÉÑ¥±•Ì¹™¥¹¡„€ôø„¹Í±Õœ€ôôôÍ±Õœ¤ì(€½¹ÍÐ…¹½¹¥…°€ô€‘í±½…Ñ¥½¸¹½É¥¥¹ô‘í±½…Ñ¥½¸¹Á…Ñ¡¹…µ•ôŒ½…ÉÑ¥±”¼‘íÍ±Õõ€ì(€¥˜€¡ÑåÁ”€ôôô€‰¹…Ñ¥Ù”ˆ€˜˜¹…Ù¥…Ñ½È¹Í¡…É”¤ì(€€€ÑÉäì…Ý…¥Ð¹…Ù¥…Ñ½È¹Í¡…É”¡ìÑ¥Ñ±”è…ÉÑ¥±”¹Ñ¥Ñ±”°Ñ•áÐè…ÉÑ¥±”¹‘•¬°ÕÉ°è…¹½¹¥…°ô¤ìô…Ñ €¡|¤ìÉ•ÑÕÉ¸ìô(€ô•±Í”ì(€€€½¹ÍÐ½Áä€ôÑåÁ”€ôôô€‰àˆ€ü€‘í…ÉÑ¥±”¹Ñ¥Ñ±•õq¹q¸‘í…ÉÑ¥±”¹‘•­õq¹q¸‘í…¹½¹¥…±õ€€è…¹½¹¥…°ì(€€€…Ý…¥Ð¹…Ù¥…Ñ½È¹±¥Á‰½…É¹ÝÉ¥Ñ•Q•áÐ¡½Áä¤ì(€€€Í¡½ÝQ½…ÍÐ¡ÑåÁ”€ôôô€‰àˆ€ü€‰`Á½ÍÐ‘É…™Ð½Á¥•ˆ€è€‰ÉÑ¥±”±¥¹¬½Á¥•ˆ¤ì(€ô)ô()™Õ¹Ñ¥½¸Í¡½ÝQ½…ÍÐ¡µ•ÍÍ…”¤ì(€Ñ½…ÍÐ¹Ñ•áÑ½¹Ñ•¹Ð€ôµ•ÍÍ…”ìÑ½…ÍÐ¹±…ÍÍ1¥ÍÐ¹…‘ ‰Í¡½Üˆ¤ì(€Í•ÑQ¥µ•½ÕÐ  ¤€ôøÑ½…ÍÐ¹±…ÍÍ1¥ÍÐ¹É•µ½Ù” ‰Í¡½Üˆ¤°€ÈÈÀÀ¤ì)ô()½¹ÍÐÍ•…É¡¥…±½œ€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ•…É µ‘¥…±½œˆ¤ì)½¹ÍÐÍ•…É¡%¹ÁÕÐ€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ•…É µ¥¹ÁÕÐˆ¤ì)‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ•…É µ‰ÕÑÑ½¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøìÍ•…É¡¥…±½œ¹Í¡½Ý5½‘…° ¤ìÍ•ÑQ¥µ•½ÕÐ  ¤€ôøÍ•…É¡%¹ÁÕÐ¹™½ÕÌ ¤°€ÔÀ¤ìô¤ì)Í•…É¡%¹ÁÕÐ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¥¹ÁÕÐˆ°€ ¤€ôøì(€½¹ÍÐÅÕ•Éä€ôÍ•…É¡%¹ÁÕÐ¹Ù…±Õ”¹ÑÉ¥´ ¤¹Ñ½1½Ý•É…Í” ¤ì(€½¹ÍÐµ…Ñ¡•Ì€ôÅÕ•Éä€ü…ÉÑ¥±•Ì¹™¥±Ñ•È¡„€ôø€‘í„¹Ñ¥Ñ±•ô€‘í„¹‘•­ô€‘í„¹…Ñ•½Éåõ€¹Ñ½1½Ý•É…Í” ¤¹¥¹±Õ‘•Ì¡ÅÕ•Éä¤¤€èmtì(€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ•…É µÉ•ÍÕ±ÑÌˆ¤¹¥¹¹•É!Q50€ôÅÕ•Éä€ü€¡µ…Ñ¡•Ì¹µ…À¡„€ôø€ñ„±…ÍÌô‰Í•…É µÉ•ÍÕ±Ðˆ¡É•˜ôˆŒ½…ÉÑ¥±”¼‘í„¹Í±ÕôˆøñÍµ…±°ø‘í„¹…Ñ•½Éåôð½Íµ…±°øñ Ìø‘í„¹Ñ¥Ñ±•ôð½ Ìøð½„ù€¤¹©½¥¸ ˆˆ¤ñð€ñÀ±…ÍÌô‰•µÁÑäµÍÑ…Ñ”ˆù9¼µ…Ñ¡¥¹œ‘¥ÍÁ…Ñ¡•Ì¸ð½Àù€¤€è€ˆˆì)ô¤ì)‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆÍ•…É µÉ•ÍÕ±ÑÌˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøÍ•…É¡¥…±½œ¹±½Í” ¤¤ì)‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆµ•¹Ôµ‰ÕÑÑ½¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€¡•Ù•¹Ð¤€ôøì(€½¹ÍÐµ•¹Ô€ô‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆµ½‰¥±”µµ•¹Ôˆ¤ìµ•¹Ô¹±…ÍÍ1¥ÍÐ¹Ñ½±” ‰½Á•¸ˆ¤ì•Ù•¹Ð¹ÕÉÉ•¹ÑQ…É•Ð¹Í•ÑÑÑÉ¥‰ÕÑ” ‰…É¥„µ•áÁ…¹‘•ˆ°MÑÉ¥¹œ¡µ•¹Ô¹±…ÍÍ1¥ÍÐ¹½¹Ñ…¥¹Ì ‰½Á•¸ˆ¤¤¤ì)ô¤ì)‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½È ˆå•…Èˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ô¹•Ü…Ñ” ¤¹•ÑÕ±±e•…È ¤ì)Ý¥¹‘½Ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…Í¡¡…¹”ˆ°É½ÕÑ”¤ì)É½ÕÑ” ¤ì(