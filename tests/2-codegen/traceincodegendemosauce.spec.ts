import { test, expect } from '@playwright/test';
import { snapshot } from 'node:test';

//Added fixture: context.
test('test', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('srinivas');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('k');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('560066');
  await page.locator('[data-test="postalCode"]').press('Tab');
  await page.locator('[data-test="cancel"]').press('Tab');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finished"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.getByRole('button', { name: 'Close Menu' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="secondary-header"]').click(); 
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await context.tracing.stop({ path: 'trace.zip' });

});