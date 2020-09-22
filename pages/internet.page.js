class Internet {
  get pageHeader() {
    return $("h1.heading");
  }
  get subHeading() {
    return $("h2");
  }
  get h3Header() {
    return $("h3");
  }
  get pageFooter() {
    return $("#page-footer");
  }
  get parent() {
    return $("ul");
  }
  get childElements() {
    return this.parent.$$("li");
  }
  getLiText() {
    this.childElements.filter((element) => console.log(element.getText()));
  }
  get firstLink() {
    return $("ul li:nth-child(1) a");
  }
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }
  getSpecificElementText(index) {
    console.log(this.specificChildElement(index).getText());
  }
  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    browser.pause(5000);
  }
}
module.exports = new Internet();
