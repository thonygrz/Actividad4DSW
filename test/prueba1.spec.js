// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('prueba1', function () {

  this.timeout(120000)
  let driver
  let vars
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  it('prueba1', async function () {
    await driver.get("https://ship-this-backoffice.herokuapp.com/")
    await driver.findElement(By.id("input-37")).click()
    await driver.findElement(By.id("input-37")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("input-41")).click()

    await driver.findElement(By.id("input-41")).sendKeys("password")
    await driver.findElement(By.css(".v-btn__content")).click()

    await driver.wait(until.elementLocated(By.css(".dashboard-item:nth-child(5) > .pa-4")), 10000)
    await driver.findElement(By.css(".dashboard-item:nth-child(5) > .pa-4")).click()

    await driver.wait(until.elementLocated(By.css("div:nth-child(1) > .row > .col-sm-6 .v-expansion-panel-header__icon > .v-icon")), 10000)
    await driver.findElement(By.css("div:nth-child(1) > .row > .col-sm-6 .v-expansion-panel-header__icon > .v-icon")).click()

    await driver.wait(until.elementLocated(By.id("input-112")), 20000)
    await driver.findElement(By.id("input-112")).click()

    await driver.wait(until.elementLocated(By.id("input-112")), 20000)
    await driver.findElement(By.id("input-112")).sendKeys(Key.chord(Key.CONTROL, "a"), "8.00");

    await driver.wait(until.elementLocated(By.css(".success > .v-btn__content"), 20000))
    await driver.findElement(By.css(".success > .v-btn__content")).click()

    await driver.wait(until.elementLocated(By.css(".v-snack__content"), 20000))
    assert(await driver.findElement(By.css(".v-snack__content")).getText() == "The actualization have been successfully")

    await driver.quit();
  })
})
