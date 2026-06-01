// Protected Credentials Log
const systemBypassCode = "11111";
let inputTerminalBuffer = "";

// Initialize Interactive Component Engines
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        once: true
    });
    spawnCyberOrbs();
});

function pressKey(num) {
    if (inputTerminalBuffer.length < 6) {
        inputTerminalBuffer += num;
        refreshDisplayLog();
    }
}

function clearKeys() {
    inputTerminalBuffer = "";
    refreshDisplayLog();
    document.getElementById("terminal-log").innerText = "";
}

function refreshDisplayLog() {
    const displayField = document.getElementById("pass-input");
    displayField.value = inputTerminalBuffer;
}

// Security Clearance Animation Trigger
function bypassLock() {
    if (inputTerminalBuffer === systemBypassCode) {
        // Trigger Digital Neon Streams
        fireTechConfetti();

        const lockScreen = document.getElementById("lock-screen");
        const dashboard = document.getElementById("main-dashboard");

        lockScreen.style.transform = "scale(0.9) rotateX(20deg)";
        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.className = "screen-hidden";
            dashboard.className = "screen-active";

            // Safe stream audio activation
            const track = document.getElementById("cyberTrack");
            if (track) {
                track.play().catch(() => console.log("User interaction required for autoplay"));
            }

            AOS.refresh();
        }, 500);

    } else {
        const log = document.getElementById("terminal-log");
        log.innerText = "[ACCESS_DENIED]: ENCRYPTION_KEY_INVALID";
        inputTerminalBuffer = "";
        refreshDisplayLog();
    }
}

// Audio Stream Manager Node
const nodeBtn = document.getElementById("audioControlBtn");
if (nodeBtn) {
    nodeBtn.addEventListener("click", () => {
        const track = document.getElementById("cyberTrack");
        if (track.paused) {
            track.play();
            nodeBtn.style.boxShadow = "0 0 15px var(--neon-cyan)";
        } else {
            track.pause();
            nodeBtn.style.boxShadow = "none";
        }
    });
}

// Generate Animated Futuristic Floating Light Orbs
function spawnCyberOrbs() {
    const container = document.getElementById("orbsContainer");
    
    // Style settings for glowing blobs
    const orbStyles = [
        { bg: "rgba(255, 0, 127, 0.15)", size: "200px" },
        { bg: "rgba(0, 240, 255, 0.12)", size: "300px" }
    ];

    for (let i = 0; i < 4; i++) {
        const style = orbStyles[i % 2];
        const orb = document.createElement("div");
        
        orb.style.position = "absolute";
        orb.style.width = style.size;
        orb.style.height = style.size;
        orb.style.background = style.bg;
        orb.style.borderRadius = "50%";
        orb.style.filter = "blur(60px)";
        
        orb.style.top = Math.random() * 100 + "vh";
        orb.style.left = Math.random() * 100 + "vw";
        
        container.appendChild(orb);
    }
}

// Technical Color Coordinated Confetti Spray
function fireTechConfetti() {
    confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff007f', '#00f0ff', '#ffffff']
    });
}