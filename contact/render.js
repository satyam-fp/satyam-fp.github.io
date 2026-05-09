const c = window.CONTENT;
const root = document.getElementById("root");

const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));

const promptLine = (cmd) =>
  `<div class="prompt-line"><span class="prompt">$</span><span class="prompt-cmd">${esc(cmd)}</span></div>`;

root.innerHTML = `
  ${promptLine("cd ~/contact")}
  <p class="block dim">best way to reach me is email or x. i usually reply within a day.</p>

  ${promptLine("cat methods.txt")}
  <div class="section">
    <div class="row">
      <span class="k">email</span>
      <span class="v"><a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a> <span class="dim">[primary]</span></span>
    </div>
    <div class="row">
      <span class="k">x</span>
      <span class="v"><a href="${esc(c.contact.x)}">${esc(c.contact.x)}</a></span>
    </div>
    <div class="row">
      <span class="k">github</span>
      <span class="v"><a href="${esc(c.contact.github)}">${esc(c.contact.github)}</a></span>
    </div>
    <div class="row">
      <span class="k">linkedin</span>
      <span class="v"><a href="${esc(c.contact.linkedin)}">${esc(c.contact.linkedin)}</a></span>
    </div>
    <div class="row">
      <span class="k">blog</span>
      <span class="v"><a href="${esc(c.contact.blog)}">${esc(c.contact.blog)}</a></span>
    </div>
  </div>

  ${promptLine("cd ..")}
  <div class="section">
    <div class="row"><span class="k"></span><span class="v"><a href="../">← back to ~/satyam</a></span></div>
  </div>

  <div class="prompt-line"><span class="prompt">$</span><span class="cursor"></span></div>
`;
