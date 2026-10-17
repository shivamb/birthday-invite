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
    const badgeStar = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#ffd56b" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    const badgeSparkle = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#ffd56b" aria-hidden="true"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/></svg>';
    const badgeClock = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffd56b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';

    if (isConcluded) {
      heroBadge.innerHTML = '<span class="sparkle-icon">' + badgeStar + '</span><span>CELEBRATION CONCLUDED · THANK YOU!</span><span class="sparkle-icon">' + badgeStar + '</span>';
    } else if (isHappening) {
      heroBadge.innerHTML = '<span class="sparkle-icon">' + badgeClock + '</span><span>CELEBRATION IN PROGRESS</span><span class="sparkle-icon">' + badgeClock + '</span>';
    } else {
      heroBadge.innerHTML = '<span class="sparkle-icon">' + badgeSparkle + '</span><span>YOU ARE CORDIALLY INVITED</span><span class="sparkle-icon">' + badgeSparkle + '</span>';
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
      closingTitle.textContent = "Thank You for Making Ayansh's Birthday So Special!";
    } else if (isHappening) {
      closingTitle.textContent = "Let's Make Tonight Truly Unforgettable!";
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
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20sending%20wishes%20and%20photos%20for%20Ayansh%21";
      if (closingWaText) closingWaText.textContent = "Share Memories & Chat on WhatsApp";
    } else if (isHappening) {
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20reaching%20out%20during%20Ayansh%27s%20birthday%20celebration%21";
      if (closingWaText) closingWaText.textContent = "Chat with Us on WhatsApp";
    } else {
      closingWaLink.href = "https://wa.me/919696687334?text=Hi%2C%20we%27ll%20be%20joining%20Ayansh%27s%20birthday%20celebration%21";
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

  const msgStarSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#ffd56b" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  const msgCakeSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffd56b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path><path d="M12 11V7"></path><path d="M12 4a1 1 0 0 0 0 2"></path></svg>';

  let lastState = null;

  const update = () => {
    const now = Date.now();
    const parts = getCountdownParts(targetMs, now, endMs);

    if (daysEl) daysEl.textContent = formatPart(parts.days);
    if (hoursEl) hoursEl.textContent = formatPart(parts.hours);
    if (minutesEl) minutesEl.textContent = formatPart(parts.minutes);

    if (secondsEl) {
      const nextSec = formatPart(parts.seconds);
      if (secondsEl.textContent !== nextSec) {
        secondsEl.textContent = nextSec;
        const box = secondsEl.closest(".timer-box");
        if (box) {
          box.classList.remove("tick-pulse");
          void box.offsetWidth;
          box.classList.add("tick-pulse");
        }
      }
    }

    let currentState = "upcoming";

    if (parts.concluded || now >= endMs) {
      currentState = "concluded";
      countdown.classList.add("is-finished", "is-concluded");
      if (kickerEl) kickerEl.textContent = "CELEBRATION CONCLUDED";
      if (messageEl) {
        messageEl.innerHTML = '<span class="sparkle-icon">' + msgStarSvg + '</span><span>Thank You for Celebrating with Ayansh!</span><span class="sparkle-icon">' + msgStarSvg + '</span>';
      }
    } else if (parts.expired) {
      currentState = "happening";
      countdown.classList.add("is-finished");
      countdown.classList.remove("is-concluded");
      if (kickerEl) kickerEl.textContent = "HAPPENING NOW";
      if (messageEl) {
        messageEl.innerHTML = '<span class="sparkle-icon">' + msgCakeSvg + '</span><span>It\'s Celebration Time! Let\'s Party!</span><span class="sparkle-icon">' + msgCakeSvg + '</span>';
      }
    } else {
      currentState = "upcoming";
      countdown.classList.remove("is-finished", "is-concluded");
      if (kickerEl) kickerEl.textContent = "COUNTDOWN TO CELEBRATION";
    }

    if (currentState !== lastState) {
      lastState = currentState;
      updateEventTexts(currentState);

      const announcer = document.getElementById("countdown-status-announcer");
      if (announcer) {
        if (currentState === "concluded") {
          announcer.textContent = "The celebration has concluded. Thank you for showering Ayansh with love!";
        } else if (currentState === "happening") {
          announcer.textContent = "The celebration is happening right now!";
        } else {
          announcer.textContent = `Countdown active: ${parts.days} days, ${parts.hours} hours until the party begins.`;
        }
      }
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
      playPopSound();
      playSparkleSound();
    });
  }

  // Expose launchConfetti for other modules (wishing wall, interactive balloons)
  if (typeof window !== "undefined") {
    window.launchConfettiAt = launchConfetti;
  }

  // Initial celebratory burst (respects reduced motion)
  if (
    typeof window !== "undefined" &&
    (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  ) {
    setTimeout(() => {
      launchConfetti(width * 0.3, height * 0.25, 45);
      launchConfetti(width * 0.7, height * 0.25, 45);
    }, 600);
  }
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
      playSuccessSound();
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

// ==========================================================================
// Web Audio API Synthesizer (Zero External Audio Files)
// ==========================================================================
let audioCtx = null;
let isMuted = false;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundMuted() {
  return isMuted;
}

export function playPopSound() {
  if (isMuted || typeof window === "undefined") return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.12);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  } catch (err) {
    // Graceful fallback
  }
}

export function playSparkleSound() {
  if (isMuted || typeof window === "undefined") return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      const start = now + idx * 0.055;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.18, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.3);
    });
  } catch (err) {
    // Graceful fallback
  }
}

export function playSuccessSound() {
  if (isMuted || typeof window === "undefined") return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    [659.25, 880.0].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const start = now + idx * 0.08;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.2, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.24);
    });
  } catch (err) {
    // Graceful fallback
  }
}

export function initializeSoundManager() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const savedMuted = localStorage.getItem("ayansh_sound_muted");
  isMuted = savedMuted === "true";

  const soundBtn = document.getElementById("sound-toggle-btn");
  const soundIcon = document.getElementById("sound-icon");
  const soundLabel = document.getElementById("sound-label");

  const SPEAKER_ON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
  const SPEAKER_OFF_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';

  const updateBtnUI = () => {
    if (!soundBtn) return;
    soundBtn.classList.toggle("is-active", !isMuted);
    soundBtn.setAttribute("aria-pressed", String(!isMuted));
    if (soundIcon) soundIcon.innerHTML = isMuted ? SPEAKER_OFF_SVG : SPEAKER_ON_SVG;
    if (soundLabel) soundLabel.textContent = isMuted ? "Sound Off" : "Sound On";
  };

  updateBtnUI();

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      localStorage.setItem("ayansh_sound_muted", String(isMuted));
      updateBtnUI();
      if (!isMuted) {
        getAudioContext();
        playSparkleSound();
      }
    });
  }

  // Pre-warm audio context on first user pointer or key gesture
  const unlockAudio = () => {
    getAudioContext();
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio, { passive: true, once: true });
  window.addEventListener("keydown", unlockAudio, { passive: true, once: true });
}

// ==========================================================================
// Interactive Floating Balloons
// ==========================================================================
export function initializeInteractiveBalloons() {
  if (typeof document === "undefined") return;

  const balloons = document.querySelectorAll(".floating-balloon.interactive");
  balloons.forEach((balloon) => {
    const handlePop = () => {
      if (balloon.classList.contains("is-popped")) return;
      balloon.classList.add("is-popped");
      playPopSound();

      if (typeof window !== "undefined" && typeof window.launchConfettiAt === "function") {
        const rect = balloon.getBoundingClientRect();
        window.launchConfettiAt(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
      }

      setTimeout(() => {
        balloon.classList.remove("is-popped");
      }, 3500);
    };

    balloon.addEventListener("click", handlePop);
    balloon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handlePop();
      }
    });
  });
}

// ==========================================================================
// 1-Tap Share Invitation
// ==========================================================================
export function initializeShareInvite() {
  if (typeof document === "undefined") return;

  const shareBtn = document.getElementById("share-invite-btn");
  const shareLabel = document.getElementById("share-btn-text");
  if (!shareBtn) return;

  const shareData = {
    title: "Ayansh Turns Five | Birthday Celebration Invitation",
    text: "You are cordially invited to celebrate Ayansh's 5th Birthday on Monday, Oct 19 at Ice & Spice Restaurant, Aliganj! Tap to view details & RSVP:",
    url: (typeof window !== "undefined" && window.location.href) || "http://ayansh.hostapp.in",
  };

  shareBtn.addEventListener("click", async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        playSuccessSound();
        return;
      } catch (err) {
        if (err.name === "AbortError") return;
      }
    }

    const shareUrl = (typeof window !== "undefined" && window.location.href) || "http://ayansh.hostapp.in";
    const onCopied = () => {
      playSuccessSound();
      shareBtn.classList.add("is-active");
      if (shareLabel) shareLabel.textContent = "Copied! ✓";
      setTimeout(() => {
        shareBtn.classList.remove("is-active");
        if (shareLabel) shareLabel.textContent = "Share Invite";
      }, 2500);
    };

    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(onCopied, () => {
        fallbackCopy(shareUrl, onCopied);
      });
    } else {
      fallbackCopy(shareUrl, onCopied);
    }
  });

  function fallbackCopy(text, cb) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    if (cb) cb();
  }
}

// ==========================================================================
// Galaxy Wishing Wall & Guestbook
// ==========================================================================
export const DEFAULT_WISHES = [];

export const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("Ayansh's 5th Birthday Celebration") +
  "&dates=20261019T140000Z/20261019T173000Z" +
  "&details=" +
  encodeURIComponent("Join us for Ayansh's 5th Birthday Celebration! A magical evening of cake cutting, cosmic games, dinner feast, and joyous memories.\n\nVenue: Ice & Spice Restaurant, Aliganj, Lucknow\nWebsite: http://ayansh.hostapp.in") +
  "&location=" +
  encodeURIComponent("Ice & Spice Restaurant, Aliganj, Lucknow, Uttar Pradesh") +
  "&sf=true&output=xml";

export function initializeWishingWall() {
  if (typeof document === "undefined") return;

  const form = document.getElementById("wish-form");
  const authorInput = document.getElementById("wish-author");
  const messageInput = document.getElementById("wish-message");
  const charCounter = document.getElementById("char-counter");
  const wishesGrid = document.getElementById("wishes-grid");
  const statusBanner = document.getElementById("wish-status-banner");
  const waBtn = document.getElementById("wa-wish-btn");
  const chips = document.querySelectorAll(".wish-chip");

  if (!wishesGrid) return;

  const STORAGE_KEY = "ayansh_guest_wishes";

  function getStoredWishes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // Filter out any legacy fake wishes
          return parsed.filter((w) => !w.id || !String(w.id).startsWith("wish-default-"));
        }
      }
    } catch (e) {
      // LocalStorage access fallback
    }
    return DEFAULT_WISHES;
  }

  function saveWishes(wishes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
      // Ignore
    }
  }

  function renderWishCard(wish, isNew = false) {
    const article = document.createElement("article");
    article.className = "wish-card" + (isNew ? " is-new" : "");
    article.id = wish.id || ("wish-" + Math.random().toString(36).substr(2, 9));

    const initial = (wish.author || "Guest").trim().charAt(0).toUpperCase();
    const starSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="#ffd56b" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
    const heartSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="#ff758c" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

    article.innerHTML = `
      <div class="wish-card-header">
        <div class="wish-author-wrap">
          <div class="wish-avatar" aria-hidden="true">${escapeHTML(initial)}</div>
          <strong class="wish-author">${escapeHTML(wish.author)}</strong>
        </div>
        <span class="wish-badge">${heartSvg} <span>${escapeHTML(wish.badge || "Warm Wish")}</span></span>
      </div>
      <p class="wish-message">"${escapeHTML(wish.message)}"</p>
      <div class="wish-footer">
        <span class="wish-time">${escapeHTML(wish.timestamp || "Celebration Guest")}</span>
        <span class="wish-star-icon" aria-hidden="true">${starSvg}</span>
      </div>
    `;
    return article;
  }

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderAll() {
    const wishes = getStoredWishes();
    wishesGrid.innerHTML = "";
    wishes.forEach((w) => {
      wishesGrid.appendChild(renderWishCard(w));
    });
  }

  renderAll();

  // Quick Chips
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const text = chip.getAttribute("data-chip") || chip.textContent.trim();
      if (messageInput) {
        if (!messageInput.value.trim()) {
          messageInput.value = text;
        } else {
          messageInput.value += " " + text;
        }
        updateCharCount();
        messageInput.focus();
        playSparkleSound();
      }
    });
  });

  // Character counter
  function updateCharCount() {
    if (charCounter && messageInput) {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 280`;
    }
  }

  if (messageInput) {
    messageInput.addEventListener("input", updateCharCount);
  }

  // Direct WhatsApp Button click
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const author = (authorInput ? authorInput.value : "").trim() || "A Well-wisher";
      const message = (messageInput ? messageInput.value : "").trim() || "Happy 5th Birthday Ayansh! Wishing you lots of love and joy!";
      const text = `Hi, here is our birthday wish for Ayansh: "${message}" — From: ${author}`;
      const url = `https://wa.me/919696687334?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      playSparkleSound();
    });
  }

  // Form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = (authorInput ? authorInput.value : "").trim();
      const message = (messageInput ? messageInput.value : "").trim();

      if (!author || !message) {
        showStatus("Please enter your name and a warm wish for Ayansh!", "error");
        return;
      }

      const newWish = {
        id: "wish-" + Date.now(),
        author: author,
        message: message,
        badge: "Star Wish",
        timestamp: "Just now",
      };

      const current = getStoredWishes();
      const updated = [newWish, ...current];
      saveWishes(updated);

      const card = renderWishCard(newWish, true);
      wishesGrid.insertBefore(card, wishesGrid.firstChild);

      // Play audio and confetti
      playSparkleSound();
      if (typeof window !== "undefined" && typeof window.launchConfettiAt === "function") {
        const postBtn = document.getElementById("post-wish-btn");
        if (postBtn) {
          const rect = postBtn.getBoundingClientRect();
          window.launchConfettiAt(rect.left + rect.width / 2, rect.top, 80);
        }
      }

      showStatus("Thank you! Your wish is now shining on Ayansh's wall!", "success");

      // Reset form
      if (authorInput) authorInput.value = "";
      if (messageInput) messageInput.value = "";
      updateCharCount();
    });
  }

  function showStatus(text, type) {
    if (!statusBanner) return;
    statusBanner.textContent = text;
    statusBanner.className = `wish-status-banner is-visible is-${type}`;
    setTimeout(() => {
      statusBanner.classList.remove("is-visible");
    }, 4500);
  }
}

// Global browser init
if (typeof document !== "undefined") {
  const initAll = () => {
    initializeCountdown();
    initializeConfetti();
    initializeCopyAddress();
    initializeSoundManager();
    initializeInteractiveBalloons();
    initializeShareInvite();
    initializeWishingWall();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll, { once: true });
  } else {
    initAll();
  }
}

