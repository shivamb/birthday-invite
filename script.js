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

function initializeCountdown() {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const targetMs = Date.parse(countdown.dataset.target);
  const fields = {
    days: countdown.querySelector("[data-days]"),
    hours: countdown.querySelector("[data-hours]"),
    minutes: countdown.querySelector("[data-minutes]"),
    seconds: countdown.querySelector("[data-seconds]"),
  };
  const message = countdown.querySelector("[data-countdown-message]");

  const render = () => {
    const parts = getCountdownParts(targetMs);

    for (const key of ["days", "hours", "minutes", "seconds"]) {
      if (fields[key]) fields[key].textContent = formatPart(parts[key]);
    }

    if (parts.expired) {
      countdown.classList.add("is-finished");
      if (message) message.textContent = "It’s celebration time!";
    }

    return parts.expired;
  };

  if (render()) return;

  const timer = window.setInterval(() => {
    if (render()) window.clearInterval(timer);
  }, SECOND);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCountdown, {
      once: true,
    });
  } else {
    initializeCountdown();
  }
}
