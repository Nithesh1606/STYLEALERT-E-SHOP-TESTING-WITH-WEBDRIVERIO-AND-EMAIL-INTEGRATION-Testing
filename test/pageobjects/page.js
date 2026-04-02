const { browser } = require('@wdio/globals')
const Env = require('./env')

module.exports = class Page extends Env {

    constructor(browser) {
        super(browser);
    }

    async delayInSec(seconds) {
        await browser.pause(1000*seconds);
    }

    async open() {
        await this.url();
        await browser.maximizeWindow();
    }

}
