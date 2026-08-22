# Shreya Turns Three | Birthday Invitation Web Application

A fast, lightweight, and dependency-free static birthday celebration web application hosted at [http://shreya.hostapp.in](http://shreya.hostapp.in).

---

## 🌟 Feature List

### 1. Dynamic Event Lifecycle States
The invitation intelligently updates all page texts, call-to-actions, badges, and layout states across the entire event lifecycle:
- **Upcoming State (`now < start`)**:
  - Festive badge: `"✨ YOU ARE CORDIALLY INVITED ✨"`
  - Hero invitation lines welcoming family and friends to the party.
  - Active real-time countdown timer (Days, Hours, Minutes, Seconds).
  - Primary CTA: `"View Celebration Details"`.
  - Secondary CTA: `"RSVP via WhatsApp"`.
  - Action cards & buttons: `"Add to Calendar"`, `"RSVP on WhatsApp"`, `"Find the Venue"`.
  - Closing footer inviting attendance.
- **Happening Now State (`start <= now < end`)**:
  - Festive badge: `"🎉 CELEBRATION IN PROGRESS 🎉"`
  - Countdown kicker: `"HAPPENING NOW"`.
  - Celebratory live party message: `"🎉 It's Celebration Time! Let's Party! 🎂"`.
  - Hero CTA: `"View Party Schedule"`.
  - Live messaging on WhatsApp for quick coordination.
- **Concluded State (`now >= end`)**:
  - Festive badge: `"✨ CELEBRATION CONCLUDED · THANK YOU! ✨"`.
  - Hero copy thanking everyone for celebrating Shreya's 3rd milestone.
  - Countdown kicker: `"CELEBRATION CONCLUDED"`.
  - Countdown banner: `"✨ Thank You for Celebrating with Shreya! 💖"`.
  - Primary CTA: `"View Celebration Highlights"`.
  - Secondary CTA: `"Share Wishes on WhatsApp"`.
  - Highlight section: `"A Magical Evening We Celebrated Together"`.
  - Quick action bar: `"Memories & Stay Connected"` with options to share photos/videos and send blessings on WhatsApp.
  - Closing footer with heartfelt thanks and photo sharing prompts.

---

### 2. Real-Time Clamped Countdown Engine
- Dynamic calculation of days, hours, minutes, and seconds remaining until the celebration start time (`2026-08-19T19:30:00+05:30`).
- Clamps smoothly at `00:00:00:00` without negative numbers.
- Handles time zone transitions with Asia/Kolkata (IST) offset handling.
- Automatic transition to `"HAPPENING NOW"` and `"CELEBRATION CONCLUDED"` (`2026-08-19T23:00:00+05:30`).

---

### 3. Interactive Physics Confetti Engine
- Full-screen HTML5 `<canvas>` celebratory confetti simulation.
- Multi-colored particles (Gold, Coral Rose, Champagne, Aqua, Pink, Purple, Mint, White) with randomized rectangular and circular geometries.
- Gravity, velocity vectors, angular rotation, and natural alpha decay physics.
- Automatic introductory double-burst explosion on page load.
- Interactive **"🎉 Pop Confetti!"** trigger button for guest interactivity.

---

### 4. Visual Aesthetics & Ambient Motion
- **Floating Balloon Animation**: Subtle CSS keyframe-animated floating party balloons in gold, rose, and champagne tones with string elements and organic drift.
- **Ambient Glow Field**: Layered radial glowing light particles creating a warm, magical evening ambiance.
- **Hero Photo Portrait**: Styled portrait frame with gold border glow, subtle radial vignette, and twinkling sparkle overlays.
- **Typography & Color Scheme**: Curated Google Fonts (`Playfair Display`, `Great Vibes`, `Plus Jakarta Sans`) combined with deep night emerald and radiant gold palette.

---

### 5. Interactive RSVP & Quick Action Touch Targets
- **WhatsApp Direct RSVP / Wishes**: One-tap deep links to WhatsApp (`wa.me`) with tailored pre-filled messages for both pre-event RSVPs and post-event photo sharing / blessings.
- **Google Maps Venue Navigation**: Direct links to Ice & Spice Restaurant, Aliganj in Google Maps.
- **Direct Phone Call Access**: `tel:` link for immediate voice call inquiries.
- **One-Click Calendar File (`.ics`)**: Downloadable iCalendar file with venue coordinates, start/end timestamps, and celebration reminders.

---

### 6. Social Media & SEO Optimization
- Comprehensive Open Graph (`og:*`) meta tags for WhatsApp, iMessage, and Facebook rich link preview cards.
- Twitter Cards (`summary_large_image`) for Twitter/X sharing.
- Preloaded hero WebP asset and modern semantic HTML5 structure.

---

### 7. Zero-Dependency & Resilient Architecture
- 100% dependency-free vanilla HTML, CSS, and JavaScript.
- Dual-layer script initialization (ES Module `script.js` + self-contained inline fallback) ensuring zero layout shift or script blocking across all browsers and devices.

---

## 📁 File Structure

```
.
├── CNAME                         # Custom domain mapping (shreya.hostapp.in)
├── index.html                    # Semantic HTML markup, metadata & inline engine
├── styles.css                    # CSS design system, responsive layout & keyframes
├── script.js                     # Countdown logic, confetti canvas & lifecycle updater
├── assets/
│   ├── favicon.svg               # SVG party cake browser favicon
│   ├── og-image.jpg              # High-resolution social preview image
│   ├── shreya-birthday.webp      # Optimized hero portrait
│   └── shreya-turns-three.ics    # Standard iCalendar event invite
├── tests/
│   └── project.test.mjs          # Node.js test suite for files, logic & countdown
├── package.json                  # Test script configuration
└── README.md                     # Documentation and feature specifications
```

---

## 📅 Event Summary

| Detail | Information |
| :--- | :--- |
| **Celebrant** | Shreya (Turning 3 Years Old) |
| **Date** | Wednesday, August 19, 2026 |
| **Time** | 7:30 PM – 11:00 PM IST |
| **Venue** | Ice & Spice Restaurant |
| **Location** | Aliganj, Lucknow, Uttar Pradesh |
| **RSVP / Contact** | +91 96966 87334 |

---

## 🧪 Testing & Verification

Run the test suite using Node.js built-in test runner:

```bash
npm test
```
