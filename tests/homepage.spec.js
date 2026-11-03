
const { test, expect } = require('@playwright/test');

test('TC-001 - Verify application homepage', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto('https://the-internet.herokuapp.com/');

    // Step 2: Verify page title
    await expect(page).toHaveTitle('The Internet');

    // Step 3: Verify main heading
    await expect(page.locator('h1')).toHaveText('Welcome to the-internet');

});
