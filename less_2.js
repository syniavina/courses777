let webdriver = require('selenium-webdriver');

let browser = new webdriver.Builder().
    withCapabilities({'browserName': 'chrome' }).build();
browser.manage().timeoutSeconds(10);



browser.get('https://www.google.ru/');
browser.findElement(webdriver.By.name('q'));
console.log("q was found");

browser.findElement(webdriver.By.className('MiYK0e')).click();
console.log('MiYK0e was found');

browser.findElement(webdriver.By.id('K32')).click();
console.log('K32 was found');

