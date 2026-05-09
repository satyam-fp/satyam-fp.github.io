const c = window.CONTENT;
const root = document.getElementById("root");

const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

const promptLine = (cmd) =>
  `<div class="prompt-line"><span class="prompt">$</span><span class="prompt-cmd">${esc(cmd)}</span></div>`;

const sorted = c.posts.slice().sort((a, b) => b.date.localeCompare(a.date));

const list = sorted.length === 0
  ? `<div class="row"><span class="k dim">stdout</span><span class="v dim">no entries. writing soon.</span></div>`
  : sorted.map(p => `
      <div class="row">
        <span class="k">${esc(p.date)}</span>
        <span class="v">
          <a href="${esc(p.slug)}/"><span class="title-line">${esc(p.title)}</span></a>
          ${p.summary ? `<div class="dim">${esc(p.summary)}</div>` : ""}
        </span>
      </div>`).join("");

root.innerHTML = `
  <div class="prompt-line"><span class="prompt">$</span><span class="prompt-cmd">cd ~/blog</span></div>
  <p class="block dim">writing about ml, 3d, and the things i'm building. sorted newest first.</p>

  ${promptLine("ls -lt")}
  <div class="section">${list}</div>

  ${promptLine("cd ..")}
  <div class="section">
    <div class="row"><span class="k"></span><span class="v"><a href="../">← back to ~/satyam</a></span></div>
  </div>

  <div class="prompt-line"><span class="prompt">$</span><span class="cursor"></span></div>
`;
