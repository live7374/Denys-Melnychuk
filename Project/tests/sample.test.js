const puppeteer = require ('puppeteer')

describe (' My First Puppeteer test ', function () {
    it ('should launch the browser', async function () {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 10,
            devtools: false,
        })
        const page = await browser.newPage()
        await page.goto('http://reddit.com/')
        // await page.waitFor(3000)
        await page.waitForSelector('h1')
        const title = await page.title()
        const text = await page.$eval('h1', element => element.textContent)
        console.log('TITLE: ' + title)
        console.log('TEXT: ' + text)
        await browser.close()

    })
})