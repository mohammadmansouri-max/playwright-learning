const { chromium } = require('playwright');

(async () => {

  // Starta browser
  const browser = await chromium.launch({
    headless: false
  });

  // Skapa context med basic auth
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  // Ny sida
  const page = await context.newPage();

  // Gå till sidan
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  // Vänta så man ser resultatet
  await page.waitForTimeout(5000);

  // Stäng browser
  await browser.close();

})();
