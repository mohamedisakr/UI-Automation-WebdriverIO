const page = require("../pages/internet.page");
describe("Interacting with elements", () => {
  it("Get text for element", () => {
    browser.url("/");
    let text = $("#page-footer").getText();
    console.log(text);
    page.getLiText();
  });
});

// describe("Interacting with elements", () => {
//   it("Get text for element", () => {
//     browser.url("/");
//     let text = $("h2").getText();
//     console.log(text);
//   });
// });
