import test, { chromium, expect, firefox } from "@playwright/test";

test('navigate to Red Bus and Flipkart', async () => {

    const browser = await chromium.launch({ channel: 'msedge', headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    page.goto('https://www.redbus.in')
    await page.waitForTimeout(3000)
    console.log('Page URL is - ' + page.url())
    console.log('Page title is - ' + await page.title())

    const browser2 = await firefox.launch({ headless: false })
    const constant2 = await browser2.newContext()
    const page2 = await constant2.newPage()

    await page2.goto('https://www.flipkart.com')
    await page.waitForTimeout(3000)
    console.log('Page URL is - ' + page2.url())
    console.log('Page title is - ' + await page2.title())
}) 