const { expect } = require("chai");
const page = require("../pages/internet.page");

//
describe("Test element actions", function () {
  //
  it("should click element", () => {
    browser.url("/");
    page.clickOnLink();
    expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest");
  });

  //
  it("should get Text", () => {
    browser.url("/");
    expect(page.getSpecificElementText(1)).equals("A/B Testing");
  });

  //
  it("should click checkbox", () => {
    const index = 1;
    page.clickCheckbox(index);
    expect(page.checkbox(index).isSelected()).equals(true);
  });

  //
  it("should click checkbox", () => {
    page.clickLink(6);
    page.clickCheckbox(1);
    expect(page.checkboxes(1).isSelected()).equals(true);
  });

  //
  it("should uncheck checkox", () => {
    page.clickCheckbox(1);
    expect(page.checkboxes(1).isSelected()).equals(false);
  });

  //
  it("should enter username", () => {
    browser.url("${browser.options.baseUrl}/login");
    page.enterUsername(`Julia`);
    assert.equal(`Julia`, page.username.getValue());
  });

  //
  it("should enter password", () => {
    browser.url("${browser.options.baseUrl}/login");
    page.enterPassword(`Password`);
    assert.equal(`Password`, page.password.getValue());
  });

  //
  it("should clear Value", () => {
    page.username.click();
    page.username.clearValue();
    assert.equal(``, page.username.getValue());
  });
});
