require('dotenv').config()
const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()
chromium.use(stealth)
chromium.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage()

  await page.goto(process.env.URL);
  await page.click('#onetrust-accept-btn-handler');
  await page.click('#loyalty-modal-button');
  await page.click('a[data-cy="header-button"]');
  await page.locator('#username').fill(process.env.USER_EMAIL);
  await page.locator('#password').fill(process.env.USER_PASS);
  await page.click('button[type="submit"]');
  await page.click('.member-card__name');
  await page.screenshot({ path: 'evidence.png' });
  await page.click('#loyalty-modal-button');
  await page.click('a[data-cy="header-button"]');
  await browser.close();
})