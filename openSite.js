const { chromium } = require('playwright');

(async () => {

  // Starta browser
  const browser = await chromium.launch({
    headless: false
  });

  // Ny sida
  const page = await browser.newPage();

  // Gå till sidan
  await page.goto('https://the-internet.herokuapp.com');

  // Vänta lite så man ser sidan
  await page.waitForTimeout(5000);

  // Stäng browser
  await browser.close();

})();