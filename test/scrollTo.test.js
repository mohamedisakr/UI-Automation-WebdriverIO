const page = require("../pages/internet.page");

//
describe("Scroll to Element", () => {
  //
  it.skip("should scroll to the footer", () => {
    browser.url("/");
    page.pageHeader.waitForDisplayed();
    page.scrollToPageFooter();
    assert.equal(true, page.pageFooter.isDisplayedInViewport());
    browser.pause(4000);
  });

  //
  it("should scroll into view", () => {
    browser.url("/");
    page.pageFooter.scrollIntoView();
    assert.equal(true, page.pageFooter.isDisplayedInViewport());
  });
});
