const projects = [
    {
        title: "Euro Live",
        desc: "Live football scores & stats with real-time updates.",
        stack: "HTML • CSS • JavaScript",
        link: "https://euro-live.vercel.app",
        image: "images/euro-live/1.png"
    }
];

// ─── Typing config ───
const CHAR_SPEED  = 18;
const LINE_DELAY  = 250;
const BLOCK_DELAY = 450;

const terminal = document.getElementById("terminal");

let queue     = [];
let currentLine = "";
let charIndex = 0;
let lineIndex = 0;

/* Build terminal output lines */
function buildLines() {
    queue.push(`<span class="cmd">$ ls projects</span>\n\n`);

    projects.forEach(p => {
        queue.push(
`<div class="project">
<span class="project-title">&gt; ${p.title}</span>
<span class="label">  description:</span> <span class="value">${p.desc}</span>
<span class="label">  stack:</span>       <span class="value">${p.stack}</span>
${p.link
    ? `<span class="label">  link:</span>        <a class="project-link" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.link}</a>`
    : ""}
</div>\n`
        );
    });
}

function typeChar() {
    if (lineIndex >= queue.length) {
        terminal.innerHTML += `\n<span class="cmd">$ </span><span class="cursor"></span>`;
        return;
    }

    const line = queue[lineIndex];

    if (charIndex < line.length) {
        currentLine += line[charIndex];
        terminal.innerHTML = queue.slice(0, lineIndex).join("") + currentLine;
        charIndex++;
        setTimeout(typeChar, CHAR_SPEED);
    } else {
        currentLine = "";
        charIndex   = 0;
        lineIndex++;
        setTimeout(typeChar, lineIndex === 1 ? LINE_DELAY : BLOCK_DELAY);
    }
}

buildLines();
typeChar();
