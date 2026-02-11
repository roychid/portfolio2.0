const lines = document.querySelectorAll("[data-text]");
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex >= lines.length) return;

    const el = lines[lineIndex];
    const text = el.getAttribute("data-text");

    if (charIndex < text.length) {
        el.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeLine, 18);
    } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 250);
    }
}

typeLine();
