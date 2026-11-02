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

 await page.click('text=Add/Remove Elements');

 await page.waitForTimeout(3000);

 await page.click('text=Add Element');
 await page.waitForTimeout(3000);
 
await page.click('text=delete');


await browser.close();
 
})();