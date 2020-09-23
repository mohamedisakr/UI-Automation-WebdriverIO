const { expect } = require("chai");
const page = require("../pages/internet.page");

//
describe("Interacting with elements", () => {
  //
  it("Get text for element", () => {
    browser.url("/");
    let text = $("#page-footer").getText();
    console.log(text);
    page.getLiText();
  });

  //
  it("Is footer Displayed", () => {
    console.log(page.pageFooter.isDisplayed());
  });

  //
  it("Does the header exist?", () => {
    console.log(page.pageHeader.isExisting());
  });

  //
  it("Is footer in viewport?", () => {
    console.log(page.pageFooter.isDisplayedInViewport());
    // expect(page.pageFooter.isDisplayedInViewport()).to.be.true;
  });

  //
  it("Is Header in viewport", () => {
    console.log(page.pageHeader.isDisplayedInViewport());
  });

  //
  it("Is subheader enabled?", () => {
    console.log(internetPage.subHeading.isEnabled());
  });

  //
  it("Click Element", () => {
    page.clickOnLink();
  });
});
