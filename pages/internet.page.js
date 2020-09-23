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

  //
  enterUsername(theUsername) {
    this.username.waitForDisplayed();
    this.username.setValue = theUsername;
  }

  //
  enterPasswor(thePassword) {
    this.password.waitForDisplayed();
    this.password.setValue = thePassword;
  }

  //
  figures(index) {
    return $(".example .figure:nth-child(${index}) img");
  }

  //
  figureDetails(index) {
    return $(".example .figure:nth-child(${index}) .figcaption h5");
  }

  /**
   * Hovers over the specified image
   * @param {Number} index the specific index of the image
   */
  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed();
    this.figures(index).moveTo(1, 1);
  }

  /**
   * Returns the text of the figure details
   * @param {Number} index the index of the element
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

  //
  get target() {
    return $(".example #target");
  }

  //
  get result() {
    return $(".example #result");
  }

  /**
   * Clicks the target input field
   */
  clickTarget() {
    this.target.waitForDisplayed();
    this.target.click();
  }

  /**
   * Send keybord keys to Target
   * @param {String} text The keyboard text to enter
   */
  sendKeysToTarget(text) {
    this.target.waitForDisplayed();
    this.target.keys(text);
  }

  /**
   * return the text of the return element
   */
  getResultText() {
    this.result.waitForDisplayed();
    return this.result.getText();
  }

  /**
   * scrolls to the page footer
   */
  scrollToPageFooter() {
    this.pageFooter.moveTo();
  }

  //
  get hereLink() {
    return $(".example a");
  }

  /**
   * Click the "click here" link
   */
  clickHereLink() {
    this.hereLink.waitForDisplayed();
    this.hereLink.click();
  }

  //
  get iframeBody() {
    return $("#tinymce");
  }

  //
  get iframe() {
    return $("#mce_0_ifr"); // #mceu_27 #mce_0_ifr
  }
}
module.exports = new Internet();
