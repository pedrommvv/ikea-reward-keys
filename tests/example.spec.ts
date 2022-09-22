import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://www.ikea.com/pt/pt/');
  await page.click('#onetrust-accept-btn-handler');
  await page.click('a[href="https://www.ikea.com/pt/pt/profile/login"]');
  await page.click('a[data-cy="header-button"]');
  await page.locator('#username').fill('teste');
  await page.locator('#password').fill('teste');
  await page.click('button[type="submit"]');
  await page.screenshot({ path: 'evidence.png' });
});

  //await page.click('button[data-cy="open-region-picker"]');
  //await page.click('button[data-cy="select-region"]');
  //await page.click('button[data-cy="go-to-website"]');
  //await page.click('button[aria-label="Menu"]');
  //await page.click('a[data-tracking-label="profile"]');
