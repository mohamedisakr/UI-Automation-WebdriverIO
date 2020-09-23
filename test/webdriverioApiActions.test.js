const page = require("../pages/internet.page");

//
describe("WebdriverIO API Actions", () => {
  //
  it("should hover on figure", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    page.hoverOnFigure(3);
    assert.equal("name: user1", page.getFigureDetailsText(3));
  });

  //
  it("should hover on figure 1", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    page.hoverOnFigure(3);
    assert.equal("name: user1", page.getFigureDetailsText(3));
  });

  //
  it("should hover on figure 2", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    page.hoverOnFigure(4);
    assert.equal("name: user2", page.getFigureDetailsText(4));
  });

  //
  it("should hover on figure 3", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    page.hoverOnFigure(5);
    assert.equal("name: user3", page.getFigureDetailsText(5));
  });

  //
  it("should send keyboard value Enter", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    page.clickTarget();
    page.sendKeysToTarget("Enter");
    assert.equal("You entered: ENTER", page.getResultText());
  });

  //
  it("should send keyboard value BackSpace", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    page.clickTarget();
    page.sendKeysToTarget("Backspace");
    assert.equal("You entered: BACK_SPACE", page.getResultText());
    browser.pause(3000); // to let browser wait for 3 seconds before be closed
  });

  //
  it("should send keyboard value Tab", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    page.clickTarget();
    page.sendKeysToTarget("Tab");
    assert.equal("You entered: TAB", page.getResultText());
  });

  it("should send keyboard value Shift", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    page.clickTarget();
    page.sendKeysToTarget("Shift");
    assert.equal("You entered: SHIFT", page.getResultText());
  });
});
