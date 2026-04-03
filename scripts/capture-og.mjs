#!/usr/bin/env node

/**
 * Captures an OG image (1200×630) by screenshotting the running site.
 *
 * Usage:
 *   node scripts/capture-og.mjs [url]
 *
 * Defaults to http://localhost:4321 if no URL is provided.
 * Outputs to public/images/ogImage.png.
 */

import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import path from "node:path";

const WIDTH = 1200;
const HEIGHT = 630;

const url = process.argv[2] || "http://localhost:4321";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, "..", "public", "images", "ogImage.png");

async function capture() {
  console.log(`Capturing OG image from ${url} …`);

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: WIDTH, height: HEIGHT },
    args: [
      `--window-size=${WIDTH},${HEIGHT}`,
      "--hide-scrollbars",
    ],
  });

  const page = await browser.newPage();

  await page.evaluateOnNewDocument(() => {
    const style = document.createElement("style");
    style.textContent = `
      *::-webkit-scrollbar { display: none !important; }
      * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      html, body {
        overflow: hidden !important;
      }
    `;
    document.documentElement.appendChild(style);
  });

  await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

  await page.waitForFunction(
    () => document.fonts.ready.then(() => true),
    { timeout: 10_000 },
  );

  await page.evaluate(() => {
    document.querySelector("astro-dev-toolbar")?.remove();
  });

  await new Promise((r) => setTimeout(r, 1500));

  await page.screenshot({
    path: outPath,
    type: "png",
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
  });

  await browser.close();
  console.log(`OG image saved to ${outPath}`);
}

capture().catch((err) => {
  console.error("Failed to capture OG image:", err);
  process.exit(1);
});
