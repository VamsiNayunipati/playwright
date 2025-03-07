// // @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// const {chromium} = require('playwright');

// (async() => {
//   //inside this block
//   const browser = await chromium.launch({
//     headless:false,
//     devtools: true,
    
//   });
//   const page = await browser.newPage();
//   await page.goto("https://adp.com");
//   await page.waitForTimeout(60000); 
//   await page.screenshot({path: `ea.png`})
//   await browser.close();
// })();


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.adp.com/');
  await page.getByLabel('ADP', { exact: true }).getByRole('link', { name: 'What We Offer' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#Login div').filter({ hasText: 'Select' }).nth(3).click();
  await page.getByText('My current employer uses ADP').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('heading', { name: 'Sign in to ADP®' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('hello');
  await page.getByRole('checkbox', { name: 'Remember user ID' }).click();
  await page.getByTestId('verifUseridBtn').click();
});