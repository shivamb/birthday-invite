import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("contains a complete dependency-free invitation project", () => {
  const requiredFiles = [
    "index.html",
    "styles.css",
    "script.js",
    "assets/shreya-birthday.webp",
    "assets/shreya-turns-three.ics",
  ];

  for (const file of requiredFiles) {
    assert.equal(
      existsSync(new URL(file, projectRoot)),
      true,
      `${file} should exist`,
    );
  }

  const html = readFileSync(new URL("index.html", projectRoot), "utf8");
  assert.match(html, /Shreya Turns Three \| Birthday Invitation/i);
  assert.match(html, /Ice &amp; Spice Restaurant/i);
  assert.match(html, /https:\/\/maps\.app\.goo\.gl\/E6jdKA1MRbC3WBb38/i);
  assert.match(html, /https:\/\/wa\.me\/919696687334/i);
  assert.match(html, /data-countdown/i);
  assert.match(html, /script\.js/i);
});

test("calculates countdown values and clamps at zero", async () => {
  const { getCountdownParts } = await import(
    new URL("script.js", projectRoot)
  );
  const target = Date.parse("2026-08-19T19:30:00+05:30");
  const oneDayTwoHoursThreeMinutesFourSeconds =
    ((1 * 24 + 2) * 60 * 60 + 3 * 60 + 4) * 1000;

  assert.deepEqual(
    getCountdownParts(target, target - oneDayTwoHoursThreeMinutesFourSeconds),
    { days: 1, hours: 2, minutes: 3, seconds: 4, expired: false, concluded: false },
  );
  assert.deepEqual(getCountdownParts(target, target + 1), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: true,
    concluded: false,
  });

  const end = Date.parse("2026-08-19T23:00:00+05:30");
  assert.deepEqual(getCountdownParts(target, end + 1000, end), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: true,
    concluded: true,
  });
});

test("exports updateEventTexts for dynamic lifecycle states", async () => {
  const { updateEventTexts } = await import(
    new URL("script.js", projectRoot)
  );
  assert.equal(typeof updateEventTexts, "function");
});
