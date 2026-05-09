const c = window.CONTENT;
const root = document.getElementById("root");

const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

const banner = String.raw`
┌─ ~/satyam ──────────────────────────────────────────────────┐
│                                                             │
│   ███████  █████  ████████ ██    ██  █████  ███    ███      │
│   ██      ██   ██    ██     ██  ██  ██   ██ ████  ████      │
│   ███████ ███████    ██      ████   ███████ ██ ████ ██      │
│        ██ ██   ██    ██       ██    ██   ██ ██  ██  ██      │
│   ███████ ██   ██    ██       ██    ██   ██ ██      ██      │
│                                                             │
│   chief ai officer · mixar  ·  mumbai, india                │
│                                                             │
└─────────────────────────────────────────────────────────────┘`;

const promptLine = (cmd) =>
  `<div class="prompt-line"><span class="prompt">$</span><span class="prompt-cmd">${esc(cmd)}</span></div>`;

const reading = c.reading.map(r =>
  `  <li><span class="dim">[${esc(r.date)}]</span> <span class="title-line">${esc(r.paper)}</span>\n     ${esc(r.note)}</li>`
).join("\n");

root.innerHTML = `
  <pre class="banner">${banner}</pre>

  ${promptLine("whoami")}
  <div class="section">
    <div class="row"><span class="k">name</span><span class="v">${esc(c.name)}</span></div>
    <div class="row"><span class="k">role</span><span class="v">${esc(c.role)}</span></div>
    <div class="row"><span class="k">location</span><span class="v">${esc(c.location)}</span></div>
  </div>

  ${promptLine("cat bio.txt")}
  <p class="block">${esc(c.bio)}</p>

  ${promptLine("ls now/")}
  <ul class="bullet">
    ${c.now.map(n => `<li><span class="title-line">${esc(n.title)}</span>\n   ${esc(n.summary)}</li>`).join("")}
  </ul>

  ${promptLine("git log --oneline work/")}
  <div class="section">
    ${c.work.map(w => `
      <div class="row">
        <span class="k">${esc(w.period.split(" - ")[0])}</span>
        <span class="v"><span class="title-line">${esc(w.company)}</span> <span class="dim">·</span> ${esc(w.role)} <span class="dim">(${esc(w.period)})</span></span>
      </div>
      ${w.notes.map(n => `<div class="row"><span class="k"></span><span class="v dim">- ${esc(n)}</span></div>`).join("")}
    `).join("")}
  </div>

  ${promptLine("cat reading.log")}
  <ul class="bullet">${reading}</ul>

  ${promptLine("tail blog/")}
  <div class="section">
    ${c.posts.length === 0
      ? `<div class="row"><span class="k dim">stdout</span><span class="v dim">empty. first post drops soon. <a href="${esc(c.contact.blog)}">/blog</a> →</span></div>`
      : c.posts
          .slice()
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 3)
          .map(p => `
            <div class="row">
              <span class="k">${esc(p.date)}</span>
              <span class="v"><a href="${esc(c.contact.blog)}${esc(p.slug)}/"><span class="title-line">${esc(p.title)}</span></a> <span class="dim">${esc(p.summary || "")}</span></span>
            </div>`).join("") +
          `<div class="row"><span class="k"></span><span class="v dim">view all <a href="${esc(c.contact.blog)}">/blog</a> →</span></div>`
    }
  </div>

  <div id="contact"></div>
  ${promptLine("contact --all")}
  <div class="section">
    <div class="row"><span class="k">email</span><span class="v"><a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></span></div>
    <div class="row"><span class="k">x</span><span class="v"><a href="${esc(c.contact.x)}">${esc(c.contact.x)}</a></span></div>
    <div class="row"><span class="k">github</span><span class="v"><a href="${esc(c.contact.github)}">${esc(c.contact.github)}</a></span></div>
    <div class="row"><span class="k">linkedin</span><span class="v"><a href="${esc(c.contact.linkedin)}">${esc(c.contact.linkedin)}</a></span></div>
    <div class="row"><span class="k">blog</span><span class="v"><a href="${esc(c.contact.blog)}">${esc(c.contact.blog)}</a></span></div>
  </div>

  <div class="prompt-line"><span class="prompt">$</span><span class="cursor"></span></div>
`;

// Browser tried to scroll to the hash before render.js built the DOM. Re-do it now.
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
}
