# AGENTS.md — Ayansh Turns Five Birthday Invitation Project

This document provides context, architectural guidelines, technical conventions, and verification workflows for AI agents operating on this repository.

---

## 🎯 Project Overview

This repository branch contains the codebase for **Ayansh Turns Five**, a fast, lightweight, dependency-free static birthday celebration web application hosted at [http://ayansh.hostapp.in](http://ayansh.hostapp.in).

The application delivers an interactive, mobile-responsive invitation experience with real-time countdown, celebration lifecycle state transitions, physics-based confetti particle simulation, WhatsApp RSVP integration, calendar file download, and map navigation.

---

## 🏗️ Architecture & Philosophy

1. **100% Dependency-Free Vanilla Stack**:
   - Standard semantic **HTML5**, modern **CSS3** (custom properties, keyframe animations, flexbox/grid), and **ES Modules JavaScript**.
   - Do **NOT** introduce heavy build frameworks, UI libraries (React/Vue), or CSS frameworks (Tailwind/Bootstrap) unless explicitly requested by the user.

2. **Dual-Layer Script Initialization**:
   - `index.html` contains semantic markup and a self-contained inline script fallback to prevent flash of unstyled content (FOUC) and ensure immediate countdown rendering.
   - `script.js` acts as an ES Module exporting pure utility functions (`getCountdownParts`, `updateEventTexts`, etc.) used both in the browser and in the Node.js test suite.
   - **Agent Rule**: When modifying countdown calculations or state messages, ensure changes in `script.js` and `index.html` remain consistent.

3. **Event Lifecycle Engine**:
   The application transitions across 3 lifecycle states based on current time ($T_{\text{now}}$):
   - **Upcoming (`now < 2026-10-19T19:30:00+05:30`)**: Active countdown, RSVP CTAs, party details, calendar download.
   - **Happening Now (`19:30 <= now < 23:00`)**: Party in progress banner, schedule highlights, live WhatsApp coordination.
   - **Concluded (`now >= 2026-10-19T23:00:00+05:30`)**: Heartfelt thank-you banners, photo/video sharing prompts, memory highlights.

---

## 📁 Repository Structure

```
.
├── AGENTS.md                     # AI agent guidelines & architectural documentation
├── CNAME                         # Custom domain mapping (ayansh.hostapp.in)
├── README.md                     # Project overview and specifications
├── package.json                  # Test runner scripts (Node.js test runner)
├── index.html                    # Semantic HTML markup, metadata, SEO & inline fallback
├── styles.css                    # Design tokens, responsive layouts, animations & glassmorphism
├── script.js                     # ES Module: Countdown engine, canvas confetti & lifecycle updater
├── assets/
│   ├── favicon.svg               # Vector browser favicon
│   ├── og-image.jpg              # High-resolution social media preview image (Open Graph / Twitter)
│   ├── ayansh-birthday.webp      # Optimized WebP hero portrait (5th birthday)
│   └── ayansh-turns-five.ics     # Standard RFC-5545 iCalendar event invite
└── tests/
    └── project.test.mjs          # Automated test suite (Node.js built-in runner)
```

---

## 📅 Event Constants & Configuration

When making updates, ensure alignment with the official event parameters:

| Parameter | Value |
| :--- | :--- |
| **Celebrant** | Ayansh (5th Birthday) |
| **Start Timestamp** | `2026-10-19T19:30:00+05:30` (Monday, Oct 19, 2026, 7:30 PM IST) |
| **End Timestamp** | `2026-10-19T23:00:00+05:30` (Monday, Oct 19, 2026, 11:00 PM IST) |
| **Timezone** | Indian Standard Time (IST / `Asia/Kolkata` / `UTC+05:30`) |
| **Venue** | Ice & Spice Restaurant, Aliganj, Lucknow, Uttar Pradesh |
| **Google Maps Link** | `https://maps.app.goo.gl/E6jdKA1MRbC3WBb38` |
| **Contact / Phone** | `+91 96966 87334` |
| **WhatsApp Direct** | `https://wa.me/919696687334` |
| **Domain** | `http://ayansh.hostapp.in` |

---

## 🎨 Visual & Styling Guidelines

- **Typography**: Google Fonts (`Playfair Display` for serif headings, `Great Vibes` for script accents, `Plus Jakarta Sans` for body copy).
- **Color Palette**:
  - Primary Background: Midnight Sapphire & Royal Navy gradient (`#030a16` to `#061325`).
  - Accent / Gold: Warm champagne, radiant gold, and vibrant sapphire tones (`#f5cf6d`, `#ffd700`, `#3b82f6`).
  - Glass / Cards: Translucent dark overlays with subtle backdrop blurs and gold borders.
- **Animations**:
  - CSS keyframes for floating balloons (gold, sapphire, champagne), twinkle sparkles, and ambient glow pulses.
  - HTML5 Canvas confetti with physics (gravity, rotation, velocity decay, and color randomization).
- **Responsive Design**: Ensure full touch responsiveness across mobile (320px+), tablet, and desktop viewports.

---

## 🧪 Testing & Verification Workflow

Always verify changes using the built-in Node.js test runner:

```bash
# Run unit and integration tests
npm test
```

### Test Suite Scope (`tests/project.test.mjs`):
1. **Asset & File Verification**: Checks existence of essential assets (`index.html`, `styles.css`, `script.js`, `.webp`, `.ics`).
2. **Countdown Logic**: Validates mathematical calculations, timezone clamping at zero, and lifecycle status flags (`expired`, `concluded`).
3. **Module Exports**: Ensures `getCountdownParts` and `updateEventTexts` are exported properly for external consumption.

---

## 🤖 Guidelines for AI Agents

1. **Preserve Performance & Zero-Dependency Model**:
   - Do not add npm runtime dependencies. Keep scripts vanilla and ultra-lightweight.
   - Keep images optimized (WebP format for photos, SVG for vectors).
2. **Timezone Awareness**:
   - Always parse and compute timestamps against IST (`+05:30`).
   - Avoid local system timezone discrepancies by using explicit ISO-8601 strings with timezone offsets.
3. **SEO & Metadata Integrity**:
   - Maintain Open Graph (`og:*`), Twitter Card (`twitter:*`), and canonical URL metadata inside `<head>` in `index.html`.
4. **Code Quality & Validation**:
   - Run `npm test` after any modifications to verify zero regressions.
