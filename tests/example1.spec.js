import { test, expect } from '@playwright/test';

test.use({ browserName: 'chromium', headless: false });

test('test', async ({ page }) => {
  await page.goto('https://www.adp.com/');
  await page.getByLabel('ADP', { exact: true }).getByRole('link', { name: 'What We Offer' }).click();
  await page.getByLabel('ADP', { exact: true }).getByRole('link', { name: 'Time & Attendance' }).click();
  await page.getByLabel('ADP', { exact: true }).getByRole('link', { name: 'Talent' }).click();
  await page.getByLabel('ADP', { exact: true }).getByRole('link', { name: 'Who We Serve' }).click();
  await page.getByRole('link', { name: 'Why ADP' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#Login div').filter({ hasText: 'Select' }).nth(3).click();
  await page.getByText('My former employer uses ADP').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#findMeV_fn_textBox').fill('Vamsi');
  await page.locator('#findMeV_ln_textBox').fill('Nayunipati');
});
