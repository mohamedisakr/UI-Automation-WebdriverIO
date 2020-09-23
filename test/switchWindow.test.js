const page = require("../pages/internet.page");

//
describe("Switch Window", function () {
  it("Should switch to the next window", () => {
    browser.url(`${browser.options.baseUrl}/windows`);
    page.clickHereLink();

    browser.switchWindow(`${browser.options.baseUrl}/windows/new`);
    // browser.waitUntil(page.h3Header,)
    assert.equal(true, page.h3Header.isExisting());
    assert.equal(true, page.h3Header.isDisplayed());
    assert.equal("New Window", page.h3Header.getText());
    browser.pause(4000);
  });
});
