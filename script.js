// Particle.js quantum network effect
tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    fpsLimit: 60,
    particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ["#00ff88","#00ffff","#ff6fff"] },
        shape: { type: "circle" },
        opacity: { value: 0.8 }, // stronger opacity
        size: { value: { min: 1.5, max: 3.5 } }, // slightly bigger
        shadow: { enable: true, color: "#00ff88", blur: 5 }, // neon glow
        links: {
            enable: true,
            distance: 150,
            color: "#00ff88",
            opacity: 0.4, // stronger links
            width: 1
        },
        move: {
            enable: true,
            speed: 0.8, // slightly faster for more energy
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
            grab: { distance: 140, links: { opacity: 0.6 } }, // stronger grab effect
            push: { quantity: 4 },
        }
    },
    detectRetina: true,
});

// Animate stat numbers
const counters = document.querySelectorAll('.number');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(updateCount);
        } else counter.innerText = target.toLocaleString();
    };
    updateCount();
});

// Animate skill bars
const skillBars = document.querySelectorAll('.progress-bar');
skillBars.forEach(bar => {
    const target = bar.getAttribute('data-target');
    setTimeout(()=> { 
        bar.style.width = target; 
        const pct = bar.parentElement.nextElementSibling;
        let val = 0;
        const interval = setInterval(()=>{ 
            if(val >= parseInt(target)) clearInterval(interval); 
            else { val++; pct.innerText = val+'%'; } 
        }, 15);
    }, 600);
});

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown if clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('profileMenu');
    const pic = document.querySelector('.profile-pic');
    if (!menu.contains(e.target) && !pic.contains(e.target)) {
        menu.style.display = 'none';
    }
});
