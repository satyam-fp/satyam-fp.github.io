const c = window.CONTENT;
const root = document.getElementById("root");

const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

const promptLine = (cmd) =>
  `<div class="prompt-line"><span class="prompt">$</span><span class="prompt-cmd">${esc(cmd)}</span></div>`;

const STATUS_LABEL = {
  active: "active",
  exploring: "exploring",
  shipped: "shipped",
  archived: "archived"
};

const renderProject = (p) => `
  <article class="project-card" id="${esc(p.slug)}">
    ${promptLine(`cat ${p.slug}.md`)}
    <h2 class="project-title">
      <span class="title-line">${esc(p.title)}</span>
      <span class="status status-${esc(p.status)}">${esc(STATUS_LABEL[p.status] || p.status)}</span>
    </h2>
    <div class="project-meta"><span class="dim">${esc(p.period || "")}</span></div>
    <p class="block">${esc(p.details || p.summary || "")}</p>
    ${p.stack && p.stack.length ? `
      <div class="row"><span class="k">stack</span><span class="v">${p.stack.map(s => `<span class="tag">${esc(s)}</span>`).join(" ")}</span></div>
    ` : ""}
    ${p.highlights && p.highlights.length ? `
      ${promptLine("tail highlights/")}
      <ul class="bullet">
        ${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}
      </ul>
    ` : ""}
    ${p.links && p.links.length ? `
      ${promptLine("ls links/")}
      <ul class="bullet">
        ${p.links.map(l => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join("")}
      </ul>
    ` : ""}
  </article>
`;

const groups = [
  { key: "active",    label: "active/",    statuses: ["active"] },
  { key: "exploring", label: "exploring/", statuses: ["exploring"] },
  { key: "shipped",   label: "shipped/",   statuses: ["shipped"] },
  { key: "archived",  label: "archived/",  statuses: ["archived"] }
];

const groupedSections = groups
  .map(g => {
    const items = c.projects.filter(p => g.statuses.includes(p.status));
    if (!items.length) return "";
    return `
      <section class="proj-group">
        ${promptLine(`ls ${g.label}`)}
        <div class="project-grid">
          ${items.map(renderProject).join("")}
        </div>
      </section>
    `;
  })
  .join("");

root.innerHTML = `
  ${promptLine("cd ~/projects")}
  <p class="block dim">things i'm building. active first, then exploring, then anything that has shipped or been archived.</p>

  ${groupedSections}

  ${promptLine("cd ..")}
  <div class="section">
    <div class="row"><span class="k"></span><span class="v"><a href="../">← back to ~/satyam</a></span></div>
  </div>

  <div class="prompt-line"><span class="prompt">$</span><span class="cursor"></span></div>
`;

if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
}
