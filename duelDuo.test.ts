
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw displays choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(3000)
});

test('add to duo', async () => {
    const add = await driver.findElement(By.className('bot-btn'))
    await add.click()
    await driver.sleep(4000)
});