const terminal = document.getElementById("terminal");

const projects = [
    {
        title: "Quantum Portfolio",
        desc: "Cyberpunk portfolio with neon UI, terminal layouts, and intentional motion.",
        stack: "HTML • CSS • JavaScript",
        link: "https://example.com",
        image: "images/quantum.png"
    },
    {
        title: "Neon Dashboard",
        desc: "Data-driven dashboard with animated stats and glowing interface.",
        stack: "JavaScript • Charts • CSS",
        image: "images/dashboard.png"
    },
    {
        title: "API Control Panel",
        desc: "Terminal-inspired admin interface for managing system APIs.",
        stack: "Node.js • Express • MongoDB",
        image: "images/api.png"
    }
];
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");

function updatePreview(src) {
    preview.classList.remove("show");

    setTimeout(() => {
        previewImg.src = src;
        preview.classList.add("show");
    }, 150);
}


// typing config (tweak if needed)
const CHAR_SPEED = 18;
const LINE_DELAY = 250;
const BLOCK_DELAY = 450;

let queue = [];
let currentLine = "";
let charIndex = 0;
let lineIndex = 0;

/* build terminal output lines */
function buildLines() {
    queue.push(`<span class="cmd">$ ls projects</span>\n\n`);

    projects.forEach(p => {
        queue.push(
`<div class="project">
<span class="project-title">&gt; ${p.title}</span>
<span class="label">  description:</span> <span class="value">${p.desc}</span>
<span class="label">  stack:</span> <span class="value">${p.stack}</span>
${p.link ? `<span class="label">  open:</span> <a class="link" href="${p.link}" target="_blank">${p.link}</a>` : ""}
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
        terminal.innerHTML = queue
            .slice(0, lineIndex)
            .join("") + currentLine;
        charIndex++;
        setTimeout(typeChar, CHAR_SPEED);
    } else {
        terminal.innerHTML += currentLine;
        currentLine = "";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeChar, lineIndex === 1 ? LINE_DELAY : BLOCK_DELAY);
    }
}

buildLines();
typeChar();
