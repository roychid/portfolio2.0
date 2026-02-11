// tsParticles background (fewer particles for contact page)
tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    fpsLimit: 60,
    particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: ["#00ff88","#00ffff","#ff6fff"] },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: { min: 1.5, max: 3.5 } },
        shadow: { enable: true, color: "#00ff88", blur: 5 },
        links: {
            enable: true,
            distance: 120,
            color: "#00ff88",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
        },
        modes: {
            grab: { distance: 140, links: { opacity: 0.6 } },
            push: { quantity: 4 },
        }
    },
    detectRetina: true,
});

// Contact form submit simulation
const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.innerText = "Sending...";
    setTimeout(() => {
        status.innerText = "Message Sent! ✅";
        form.reset();
    }, 1500);
});
