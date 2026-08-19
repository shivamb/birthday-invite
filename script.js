// ==========================================================================
// Shreya Turns Three | Birthday Celebration Countdown & Interactive Confetti
// ==========================================================================

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function getCountdownParts(targetMs, nowMs = Date.now()) {
  const remaining = Math.max(0, targetMs - nowMs);

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
    expired: targetMs - nowMs <= 0,
  };
}

function formatPart(value) {
  return String(value).padStart(2, "0");
}

export function initializeCountdown() {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const targetAttr = countdown.getAttribute("data-target") || "2026-08-19T19:30:00+05:30";
  const targetMs = Date.parse(targetAttr);

  const daysEl = countdown.querySelector("[data-days]");
  const hoursEl = countdown.querySelector("[data-hours]");
  const minutesEl = countdown.querySelector("[data-minutes]");
  const secondsEl = countdown.querySelector("[data-seconds]");
  const messageEl = countdown.querySelector("[data-countdown-message]");

  const update = () => {
    const parts = getCountdownParts(targetMs, Date.now());

    if (daysEl) daysEl.textContent = formatPart(parts.days);
    if (hoursEl) hoursEl.textContent = formatPart(parts.hours);
    if (minutesEl) minutesEl.textContent = formatPart(parts.minutes);
    if (secondsEl) secondsEl.textContent = formatPart(parts.seconds);

    if (parts.expired) {
      countdown.classList.add("is-finished");
      if (messageEl) {
        messageEl.textContent = "🎉 It's Celebration Time! Let's Party! 🎂";
      }
    } else {
      countdown.classList.remove("is-finished");
    }

    return parts.expired;
  };

  // Run immediately on call
  update();

  // Run interval every second
  const timer = setInterval(() => {
    if (update()) {
      clearInterval(timer);
    }
  }, SECOND);
}

export function initializeConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener(
    "resize",
    () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    },
    { passive: true }
  );

  const colors = [
    "#f5cf6d", // Gold
    "#ff758c", // Coral Rose
    "#ffeaa7", // Champagne
    "#00cec9", // Aqua
    "#fd79a8", // Pink
    "#a29bfe", // Purple
    "#55efc4", // Mint
    "#ffffff", // White
  ];

  let particles = [];
  let isRunning = false;

  class Particle {
    constructor(x, y, isBurst = false) {
      this.x = x;
      this.y = y;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.size = Math.random() * 8 + 6;
      this.shape = Math.random() > 0.4 ? "rect" : "circle";

      const angle = isBurst
        ? Math.random() * Math.PI * 2
        : (Math.random() * Math.PI) / 2 + Math.PI / 4;
      const speed = isBurst ? Math.random() * 8 + 3 : Math.random() * 3 + 1.5;

      this.vx = Math.cos(angle) * speed;
      this.vy = isBurst ? Math.sin(angle) * speed - 5 : Math.sin(angle) * speed + 1;
      this.gravity = 0.12;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 8;
      this.opacity = 1;
      this.decay = Math.random() * 0.008 + 0.004;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.98;
      this.rotation += this.rotationSpeed;
      this.opacity -= this.decay;
      return this.opacity > 0 && this.y < height + 50;
    }

    draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.rotate((this.rotation * Math.PI) / 180);
      context.globalAlpha = Math.max(0, this.opacity);
      context.fillStyle = this.color;

      if (this.shape === "rect") {
        context.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
      } else {
        context.beginPath();
        context.arc(0, 0, this.size / 2.5, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    }
  }

  function launchConfetti(originX = width / 2, originY = height / 3, count = 80) {
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(originX, originY, true));
    }
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(animate);
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles = particles.filter((p) => {
      const alive = p.update();
      if (alive) p.draw(ctx);
      return alive;
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      isRunning = false;
    }
  }

  // Interactive Confetti Button
  const triggerBtn = document.getElementById("confetti-trigger");
  if (triggerBtn) {
    triggerBtn.addEventListener("click", (e) => {
      const rect = triggerBtn.getBoundingClientRect();
      launchConfetti(rect.left + rect.width / 2, rect.top, 100);
    });
  }

  // Initial celebratory burst
  setTimeout(() => {
    launchConfetti(width * 0.3, height * 0.25, 45);
    launchConfetti(width * 0.7, height * 0.25, 45);
  }, 600);
}

// Global browser init
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        initializeCountdown();
        initializeConfetti();
      },
      { once: true }
    );
  } else {
    initializeCountdown();
    initializeConfetti();
  }
}
