
const { test, expect } = require('@playwright/test');

test('Playwright opens a website successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await expect(page).toHaveTitle(/The Internet/);

  console.log('SUCCESS: Playwright opened the website.');
});
