
const { test, expect } = require('@playwright/test');

test('Verify the Internet website opens', async ({ page }) => {
  // 1. Open the website
  await page.goto('https://the-internet.herokuapp.com/');

  // 2. Verify the page title
  await expect(page).toHaveTitle('The Internet');

  // 3. Verify the main heading
  await expect(
    page.getByRole('heading', { name: 'Welcome to the-internet' })
  ).toBeVisible();

  console.log('Website title and heading verified!');
});