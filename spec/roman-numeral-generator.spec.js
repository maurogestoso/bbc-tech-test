const { generate } = require("../src/roman-numeral-generator");

describe("generate", () => {
  it("is a function", () => {
    expect(typeof generate).toBe("function");
  });
});
