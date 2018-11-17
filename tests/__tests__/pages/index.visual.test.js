import { browserLangs, cookieLangs, devices, launch } from '../../utils'
import { inspect } from 'util'

describe('index-differencify', () => {
  let done = false
  let lastBrowser
  devices.forEach((device) => {
    browserLangs.forEach((browserLang) => {
      cookieLangs.forEach((cookieLang) => {
        const d = `${device.name}-browser-${browserLang.lang}-cookie-${cookieLang.lang}`
        it(d, async () => {
          const { browser, target, differencify } = await launch(d)
          lastBrowser = browser
          const page = await browser.newPage()
          await page.emulate(device.emulate)
          await page.setCookie(...cookieLang.cookies)
          await page.evaluateOnNewDocument(browserLang.evaluate)
          await page.setExtraHTTPHeaders(browserLang.headers)
          await page.goto(`http://${process.env.WEBHOST || 'localhost'}:3000?d=${d}`)
          const image = await page.screenshot()
          const result = await target.toMatchSnapshot(image)
          expect(result).toBe(true)

          await page.close()
          await browser.close()
          await differencify.cleanup()
        }, 60000)
      })
    })
  })
  afterEach(() => lastBrowser.close())
});