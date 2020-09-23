class Internet {
  //
  get pageHeader() {
    return $("h1.heading");
  }

  //
  get subHeading() {
    return $("h2");
  }

  //
  get h3Header() {
    return $("h3");
  }

  //
  get pageFooter() {
    return $("#page-footer");
  }

  //
  get parent() {
    return $("ul");
  }

  //
  get childElements() {
    return this.parent.$$("li");
  }

  //
  getLiText() {
    this.childElements.filter((element) => console.log(element.getText()));
  }

  //
  get firstLink() {
    return $("ul li:nth-child(1) a");
  }

  //
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  //
  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  //
  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    // browser.pause(5000);
    this.h3Header.waitForDisplayed();
  }

  //
  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  //
  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed();
    this.checkboxes(index).click();
  }

  //
  link(index) {
    return $("ul li:nth-child(${index}) a");
  }

  //
  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
  }

  //
  get username() {
    return $("#username");
  }

  //
  get password() {
    return $("#password");
  }

  enterUsername(theUsername) {
    this.username.waitForDisplayed();
    this.username.setValue = theUsername;
  }

  //
  enterPasswor(thePassword) {
    this.password.waitForDisplayed();
    this.password.setValue = thePassword;
  }
}
module.exports = new Internet();
