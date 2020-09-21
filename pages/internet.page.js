class internet {
  get pageHeader() {
    // get pageHeader() { return $('h1.heading') }
    return $("h1.heading");
  }
  get subHeading() {
    return $("h2");
  }
  get pageFooter() {
    return $("#page-footer");
  }
}
module.exports = new internet();
