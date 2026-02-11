// tsParticles background (subtle for skills)
tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    fpsLimit: 60,
    particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ["#00ff88","#00ffff","#ff6fff"] },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: { min: 1, max: 3 } },
        shadow: { enable: true, color: "#ff6fff", blur: 5 },
        links: {
            enable: true,
            distance: 100,
            color: "#ff6fff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
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
            grab: { distance: 120, links: { opacity: 0.5 } },
            push: { quantity: 3 },
        }
    },
    detectRetina: true,
});

// Animate circular progress bars
const skills = document.querySelectorAll('.skill-circle');

skills.forEach(skill => {
    const circle = skill.querySelector('circle:last-child');
    const value = skill.getAttribute('data-percentage');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    let progress = 0;

    const animate = setInterval(() => {
        if(progress >= value) clearInterval(animate);
        else {
            progress++;
            const offset = circumference - (progress / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            skill.querySelector('span').innerText = progress + '%';
        }
    }, 15);
});
