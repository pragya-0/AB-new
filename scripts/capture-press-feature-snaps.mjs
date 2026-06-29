import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outDir = path.resolve("public/assets/pressnews/online-features");

const features = [
  {
    slug: "brilliantread-arijit-interview",
    url: "https://www.brilliantread.com/interview-with-arijit-bhattacharyya-angel-investor-serial-entrepreneur-mentor-tedx-speaker/",
  },
  {
    slug: "thinking-aloud-exclusive-interview",
    url: "https://stage.thinkingaloud.in/index.php?page=6",
  },
  {
    slug: "ask-an-investor-arijit",
    url: "https://www.youtube.com/watch?v=MsrJTktx7HA",
  },
  {
    slug: "success-tales-arijit",
    url: "https://www.youtube.com/watch?v=7q-4E_QpnVg",
  },
  {
    slug: "thinkers360-arijit-profile",
    url: "https://www.thinkers360.com/tl/profiles/view/3513",
  },
  {
    slug: "digitalconfex-arijit-speaker",
    url: "https://digitalconfex.com/speaker/arijit-bhattacharyya/",
  },
  {
    slug: "iimcip-arijit-investor-profile",
    url: "https://www.iimcip.org/our-network/investor/profile?det=MjQ4",
  },
  {
    slug: "diplomatic-club-arijit-profile",
    url: "https://www.thediplomaticclub.org/arijit-bhattacharyya/",
  },
];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const item of features) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });

  try {
    console.log(`Capturing: ${item.slug}`);

    await page.goto(item.url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    await page.waitForTimeout(4500);

    await page
      .locator(
        'button:has-text("Accept"), button:has-text("I Agree"), button:has-text("Got it"), button:has-text("Allow all")'
      )
      .first()
      .click({ timeout: 1500 })
      .catch(() => {});

    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(outDir, `${item.slug}.png`),
      fullPage: false,
    });

    console.log(`Saved: ${item.slug}.png`);
  } catch (error) {
    console.log(`Failed: ${item.slug}`);
    console.log(error.message);
  } finally {
    await page.close();
  }
}

await browser.close();

console.log("Done.");