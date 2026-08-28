// ==========================================================================
// Ayansh Turns Five | Royal Celestial Galaxy & Stardust Gold Engine
// ==========================================================================

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function getCountdownParts(targetMs, nowMs = Date.now(), endMs) {
  const remaining = Math.max(0, targetMs - nowMs);
  const isConcluded = endMs ? nowMs >= endMs : false;

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
    expired: targetMs - nowMs <= 0,
    concluded: isConcluded,
  };
}

function formatPart(value) {
  return String(value).padStart(2, "0");
}

export function updateEventTexts(state) {
  const isConcluded = state === "concluded";
  const isHappening = state === "happening";

  // Body status class
  if (document.body) {
    document.body.classList.toggle("is-event-concluded", isConcluded);
    document.body.classList.toggle("is-event-happening", isHappening);
    document.body.classList.toggle("is-event-upcoming", !isConcluded && !isHappening);
  }

  // Hero festive badge
  const heroBadge = document.querySelector("[data-hero-badge]");
  if (heroBadge) {
    if (isConcluded) {
      heroBadge.innerHTML = '<span class="sparkle-icon">✨</span><span>CELEBRATION CONCLUDED · THANK YOU!</span><span class="sparkle-icon">✨</span>';
    } else if (isHappening) {
      heroBadge.innerHTML = '<span class="sparkle-icon">🎉</span><span>CELEBRATION IN PROGRESS</span><span class="sparkle-icon">🎉</span>';
    } else {
      heroBadge.innerHTML = '<span class="sparkle-icon">✨</span><span>YOU ARE CORDIALLY INVITED</span><span class="sparkle-icon">✨</span>';
    }
  }

  // Hero invitation line
  const heroLine = document.querySelector("[data-hero-line]");
  if (heroLine) {
    if (isConcluded) {
      heroLine.innerHTML = "Five years of high-fives, adventurous laughs, and endless wonder.<br />Heartfelt thanks to everyone who celebrated Ayansh's milestone and showered him with love and blessings!";
    } else if (isHappening) {
      heroLine.innerHTML = "Five years of high-fives, adventurous laughs, and endless wonder.<br />The celebration is happening right now! Join us for cake, games, and joyous moments!";
    } else {
      heroLine.innerHTML = "Five years of high-fives, adventurous laughs, and endless wonder.<br />Join our constellation of loved ones for an unforgettable evening under the stars!";
    }
  }

  // Hero primary CTA text
  const primaryCtaText = document.querySelector("[data-primary-cta-text]");
  if (primaryCtaText) {
    if (isConcluded) {
      primaryCtaText.textContent = "View Celebration Highlights";
    } else if (isHappening) {
      primaryCtaText.textContent = "View Party Schedule";
    } else {
      primaryCtaText.textContent = "View Celebration Details";
    }
  }

  // Hero secondary CTA
  const secondaryCta = document.querySelector("[data-secondary-cta]");
  const secondaryCtaText = document.querySelector("[data-secondary-cta-text]");
  if (secondaryCta) {
    if (isConcluded) {
      secondaryCta.href = "https://wa.me/919696687334?text=Hi%2C%20sending%20lots%20of%20love%20and%20blessings%20to%20Ayansh%20on%20turning%205%21%20%F0%9F%8E%82%E2%9C%A8";
      if (secondaryCtaText) secondaryCtaText.textContent = "Share Wishes on WhatsApp";
    } else if (isHappening) {
      secondaryCta.href = "https://wa.me/919696687334?text=Hi%2C%20joining%20the%20celebration%20right%20now%21%20%F0%9F%8E%89";
      if (secondaryCtaText) secondaryCtaText.textContent = "Connect on WhatsApp";
    } else {
      secondaryCta.href = "https://wa.me/919696687334?text=Hi%2C%20we%27ll%20be%20joining%20Ayansh%27s%20birthday%20celebration%21%20%F0%9F%8E%89";
      if (secondaryCtaText) secondaryCtaText.textContent = "RSVP via WhatsApp";
    }
  }

  // Section pill & title
  const highlightsPillText = document.querySelector("[data-highlights-pill-text]");
  if (highlightsPillText) {
    highlightsPillText.textContent = isConcluded ? "CHERISHED MEMORIES" : isHappening ? "LIVE HIGHLIGHTS" : "CELESTIAL HIGHLIGHTS";
  }

  const highlightsTitle = document.querySelector("[data-highlights-title]");
  if (highlightsTitle) {
    if (isConcluded) {
      highlightsTitle.innerHTML = "A Magical Evening<br /><em>We Celebrated Together</em>";
    } else if (isHappening) {
      highlightsTitle.innerHTML = "A Magical Evening<br /><em>In Full Swing</em>";
    } else {
      highlightsTitle.innerHTML = "A Magical Evening<br /><em>Among The Stars</em>";
    }
  }

  const highlightsLead = document.querySelector("[data-highlights-lead]");
  if (highlightsLead) {
    if (isConcluded) {
      highlightsLead.textContent = "Stardust treats, delicious feast, music & galactic games, balloons, and treasured moments. Thank you for showering Ayansh with endless love, blessings, and warm smiles!";
    } else if (isHappening) {
      highlightsLead.textContent = "Delicious feast, heartwarming music, cake cutting, and cheerful memories happening right now with our beloved friends and family!";
    } else {
      highlightsLead.textContent = "Stardust treats, delicious feast, music & galactic games, balloons, and treasured moments. We cannot wait to celebrate Ayansh's milestone with our closest friends and family!";
    }
  }

  // When card sub info
  const whenSubInfo = document.querySelector("[data-when-sub-info]");
  if (whenSubInfo) {
    if (isConcluded) {
      whenSubInfo.innerHTML = "<strong>Celebrated on Oct 19, 2026</strong> · 7:30 PM – 11:00 PM";
    } else if (isHappening) {
      whenSubInfo.innerHTML = "<strong>Happening Tonight</strong> · 7:30 PM – 11:00 PM";
    } else {
      whenSubInfo.innerHTML = "<strong>7:30 PM – 11:00 PM</strong> · Dinner &amp; Cake Cutting";
    }
  }

  // Quick actions section title
  const actionTitle = document.querySelector("[data-action-grid-title]");
  if (actionTitle) {
    actionTitle.textContent = isConcluded ? "Memories & Stay Connected" : "Quick Actions & RSVP";
  }

  // Action WhatsApp
  const actionWaSmall = document.querySelector("[data-action-wa-small]");
  const actionWaStrong = document.querySelector("[data-action-wa-strong]");
  const actionWaLink = document.querySelector("[data-action-wa-link]");
  if (actionWaLink) {
    if (isConcluded) {
      actionWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20sending%20photos%20and%20wishes%20for%20Ayansh%27s%20birthday%21%20%F0%9F%8E%89%F0%9F%92%96";
      if (actionWaSmall) actionWaSmall.textContent = "SHARE THE JOY";
      if (actionWaStrong) actionWaStrong.textContent = "Send Wishes & Photos";
    } else if (isHappening) {
      actionWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20joining%20the%20celebration%20right%20now%21%20%F0%9F%8E%89";
      if (actionWaSmall) actionWaSmall.textContent = "JOIN THE FUN";
      if (actionWaStrong) actionWaStrong.textContent = "Connect on WhatsApp";
    } else {
      actionWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20we%27ll%20be%20joining%20Ayansh%27s%20birthday%20celebration%21%20%F0%9F%8E%89";
      if (actionWaSmall) actionWaSmall.textContent = "LET US KNOW";
      if (actionWaStrong) actionWaStrong.textContent = "RSVP on WhatsApp";
    }
  }

  // Action Calendar
  const actionCalSmall = document.querySelector("[data-action-cal-small]");
  const actionCalStrong = document.querySelector("[data-action-cal-strong]");
  if (actionCalSmall && actionCalStrong) {
    if (isConcluded) {
      actionCalSmall.textContent = "EVENT COMPLETED";
      actionCalStrong.textContent = "Celebrated Oct 19, 2026";
    } else if (isHappening) {
      actionCalSmall.textContent = "HAPPENING TODAY";
      actionCalStrong.textContent = "7:30 PM – 11:00 PM";
    } else {
      actionCalSmall.textContent = "DON'T MISS IT";
      actionCalStrong.textContent = "Add to Calendar";
    }
  }

  // Closing footer
  const closingTitle = document.querySelector("[data-closing-title]");
  if (closingTitle) {
    if (isConcluded) {
      closingTitle.textContent = "Thank You for Making Ayansh's Birthday So Special! 💖";
    } else if (isHappening) {
      closingTitle.textContent = "Let's Make Tonight Truly Unforgettable! 🎉";
    } else {
      closingTitle.textContent = "We Can’t Wait to Celebrate With You!";
    }
  }

  const closingContactText = document.querySelector("[data-closing-contact-text]");
  if (closingContactText) {
    if (isConcluded) {
      closingContactText.textContent = "Share your photos, videos, or heartfelt wishes with us:";
    } else if (isHappening) {
      closingContactText.textContent = "For directions or any assistance tonight, reach out to us:";
    } else {
      closingContactText.textContent = "For any assistance, please reach out to us:";
    }
  }

  const closingWaLink = document.querySelector("[data-closing-wa-link]");
  const closingWaText = document.querySelector("[data-closing-wa-text]");
  if (closingWaLink) {
    if (isConcluded) {
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20sending%20wishes%20and%20photos%20for%20Ayansh%21%20%F0%9F%8E%82%E2%9C%A8";
      if (closingWaText) closingWaText.textContent = "Share Memories & Chat on WhatsApp";
    } else if (isHappening) {
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20reaching%20out%20during%20Ayansh%27s%20birthday%20celebration%21%20%F0%9F%8E%89";
      if (closingWaText) closingWaText.textContent = "Chat with Us on WhatsApp";
    } else {
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20we%27ll%20be%20joining%20Ayansh%27s%20birthday%20celebration%21%20%F0%9F%8E%89";
      if (closingWaText) closingWaText.textContent = "Chat with Us on WhatsApp";
    }
  }
}

export function initializeCountdown() {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const targetAttr = countdown.getAttribute("data-target") || "2026-10-19T19:30:00+05:30";
  const endAttr = countdown.getAttribute("data-end") || "2026-10-19T23:00:00+05:30";
  const targetMs = Date.parse(targetAttr);
  const endMs = Date.parse(endAttr);

  const daysEl = countdown.querySelector("[data-days]");
  const hoursEl = countdown.querySelector("[data-hours]");
  const minutesEl = countdown.querySelector("[data-minutes]");
  const secondsEl = countdown.querySelector("[data-seconds]");
  const messageEl = countdown.querySelector("[data-countdown-message]");
  const kickerEl = countdown.querySelector(".countdown-kicker");

  let lastState = null;

  const update = () => {
    const now = Date.now();
    const parts = getCountdownParts(targetMs, now, endMs);

    if (daysEl) daysEl.textContent = formatPart(parts.days);
    if (hoursEl) hoursEl.textContent = formatPart(parts.hours);
    if (minutesEl) minutesEl.textContent = formatPart(parts.minutes);
    if (secondsEl) secondsEl.textContent = formatPart(parts.seconds);

    let currentState = "upcoming";

    if (parts.concluded || now >= endMs) {
      currentState = "concluded";
      countdown.classList.add("is-finished", "is-concluded");
      if (kickerEl) kickerEl.textContent = "CELEBRATION CONCLUDED";
      if (messageEl) {
        messageEl.textContent = "✨ Thank You for Celebrating with Ayansh! 💖";
      }
    } else if (parts.expired) {
      currentState = "happening";
      countdown.classList.add("is-finished");
      countdown.classList.remove("is-concluded");
      if (kickerEl) kickerEl.textContent = "HAPPENING NOW";
      if (messageEl) {
        messageEl.textContent = "🎉 It's Celebration Time! Let's Party! 🎂";
      }
    } else {
      currentState = "upcoming";
      countdown.classList.remove("is-finished", "is-concluded");
      if (kickerEl) kickerEl.textContent = "COUNTDOWN TO CELEBRATION";
    }

    if (currentState !== lastState) {
      lastState = currentState;
      updateEventTexts(currentState);
    }

    return parts.concluded || (parts.expired && now >= endMs);
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

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
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
    "#ffd56b", // Stardust Gold
    "#38bdf8", // Aurora Cyan
    "#8b5cf6", // Nebula Purple
    "#ffeaa7", // Champagne Light
    "#f59e0b", // Solar Flare Amber
    "#ff758c", // Cosmic Rose
    "#60a5fa", // Astral Sky Blue
    "#ffffff", // Supernova White
  ];

  let particles = [];
  let isRunning = false;

  class Particle {
    constructor(x, y, isBurst = false) {
      this.x = x;
      this.y = y;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.size = Math.random() * 9 + 5;
      
      const rand = Math.random();
      if (rand > 0.6) {
        this.shape = "star";
      } else if (rand > 0.3) {
        this.shape = "rect";
      } else {
        this.shape = "circle";
      }

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

      if (this.shape === "star") {
        drawStar(context, 0, 0, 5, this.size * 0.8, this.size * 0.4);
      } else if (this.shape === "rect") {
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
    triggerBtn.addEventListener("click", () => {
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

export function initializeCopyAddress() {
  const copyBtn = document.getElementById("copy-address-btn");
  const copyText = document.getElementById("copy-btn-text");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const addr = "Ice & Spice Restaurant, Aliganj, Lucknow, Uttar Pradesh";
    const onSuccess = () => {
      copyBtn.classList.add("is-copied");
      if (copyText) copyText.textContent = "Copied! ✓";
      setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        if (copyText) copyText.textContent = "Copy Address";
      }, 2500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(onSuccess, () => {
        onFallback(addr, onSuccess);
      });
    } else {
      onFallback(addr, onSuccess);
    }
  });

  function onFallback(addr, cb) {
    const input = document.createElement("input");
    input.value = addr;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    if (cb) cb();
  }
}

// Global browser init
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        initializeCountdown();
        initializeConfetti();
        initializeCopyAddress();
      },
      { once: true }
    );
  } else {
    initializeCountdown();
    initializeConfetti();
    initializeCopyAddress();
  }
}
