require('dotenv').config()
const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()
chromium.use(stealth)
chromium.launch({ headless: false, launchOptions: {args: ["--use-gl=egl"]}, timeout: 240000, expect: { timeout: 240000 }, use: { actionTimeout: 240000 }, globalTimeout: 60*60*1000, timeout: 5 * 60 * 1000, use: { navigationTimeout: 240000 }, viewport: { width: 1280, height: 720 } }).then(async browser => {
  const page = await browser.newPage()
  await page.goto(process.env.URL, { timeout: 120000 });
  await page.click('#onetrust-accept-btn-handler', { timeout: 120000 });
  await page.click('#hnf-header-profile a[data-tracking-label="profile"]', { timeout: 120000 });
  await page.click('a[data-cy="header-button"]', { timeout: 120000 });
  await page.locator('#username').fill(process.env.USER_EMAIL, { timeout: 120000 });
  await page.locator('#password').fill(process.env.USER_PASS, { timeout: 120000 });
  await page.click('button[type="submit"]', { timeout: 120000 });
  await page.click('li[data-hej-neutral-greeting="Hej!"]', { timeout: 240000 });
  await page.screenshot({ path: 'evidence.png' });
  await page.click('a[data-cy="header-button"]', { timeout: 240000 });
  await browser.close();
})
