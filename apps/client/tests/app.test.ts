import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('input[placeholder="Search by name"]').fill('Mario');
  await page.waitForTimeout(2000)
  await page.locator('[href="/product/1"]').click();
  await page.pause()
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});