# Ayansh Turns Five | Birthday Invitation Web Application

A fast, lightweight, and dependency-free static birthday celebration web application hosted at [http://ayansh.hostapp.in](http://ayansh.hostapp.in).

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
  - Hero copy thanking everyone for celebrating Ayansh's 5th milestone.
  - Countdown kicker: `"CELEBRATION CONCLUDED"`.
  - Countdown banner: `"✨ Thank You for Celebrating with Ayansh! 💖"`.
  - Primary CTA: `"View Celebration Highlights"`.
  - Secondary CTA: `"Share Wishes on WhatsApp"`.
  - Highlight section: `"A Magical Evening We Celebrated Together"`.
  - Quick action bar: `"Memories & Stay Connected"` with options to share photos/videos and send blessings on WhatsApp.
  - Closing footer with heartfelt thanks and photo sharing prompts.

---

## 📅 Event Summary

| Detail | Information |
| :--- | :--- |
| **Celebrant** | Ayansh (Turning 5 Years Old) |
| **Date** | Monday, October 19, 2026 |
| **Time** | 7:30 PM – 11:00 PM IST |
| **Venue** | Ice & Spice Restaurant |
| **Location** | Aliganj, Lucknow, Uttar Pradesh |
| **RSVP / Contact** | +91 96966 87334 |
| **Domain** | http://ayansh.hostapp.in |

---

## 📁 File Structure

```
.
├── CNAME                         # Custom domain mapping (ayansh.hostapp.in)
├── index.html                    # Semantic HTML markup, metadata & inline engine
├── styles.css                    # CSS design system, responsive layout & keyframes
├── script.js                     # Countdown logic, confetti canvas & lifecycle updater
├── assets/
│   ├── favicon.svg               # SVG party cake browser favicon
│   ├── og-image.jpg              # High-resolution social preview image
│   ├── ayansh-birthday.webp      # Optimized hero portrait
│   └── ayansh-turns-five.ics     # Standard iCalendar event invite
├── tests/
│   └── project.test.mjs          # Node.js test suite for files, logic & countdown
├── package.json                  # Test script configuration
└── README.md                     # Documentation and feature specifications
```

---

## 🧪 Testing & Verification

Run the test suite using Node.js built-in test runner:

```bash
npm test
```
