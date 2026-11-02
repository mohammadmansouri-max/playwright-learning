
const { test, expect } = require('@playwright/test');

test('logs in and reaches the secure area', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/secure/);

  await expect(
  page.getByRole('heading', { name: 'Secure Area', exact: true })
).toBeVisible();

  await expect(
    page.getByText('You logged into a secure area!')
  ).toBeVisible();
});


