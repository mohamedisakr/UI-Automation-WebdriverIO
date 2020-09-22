describe("Interacting with elements", () => {
  it("Get text for element", () => {
    browser.url("/");
    let text = $("h2").getText();
    console.log(text);
  });
});
