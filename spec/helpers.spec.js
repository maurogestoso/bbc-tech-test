const h = require("../src/helpers");

describe("validateNumber", () => {
  it("returns the passed number", () => {
    expect(h.validateNumber(-3)).toBe(-3);
    expect(h.validateNumber(42)).toBe(42);
    expect(h.validateNumber(4.2)).toBe(4.2);
  });
  it("returns a number when passed a string that can be parsed as a number", () => {
    expect(h.validateNumber("-3")).toBe(-3);
    expect(h.validateNumber("42")).toBe(42);
    expect(h.validateNumber("4.2")).toBe(4.2);
  });
  it("returns NaN when passed a string that cannot be parsed as a number", () => {
    expect(h.validateNumber("invalid")).toBeNaN();
    expect(h.validateNumber("42nope")).toBeNaN();
    expect(h.validateNumber("$4.99")).toBeNaN();
  });
  it("returns NaN when passed a value of type other than 'string' or 'number'", () => {
    expect(h.validateNumber([])).toBeNaN();
    expect(h.validateNumber({})).toBeNaN();
    expect(h.validateNumber(function() {})).toBeNaN();
    expect(h.validateNumber(true)).toBeNaN();
    expect(h.validateNumber(null)).toBeNaN();
    expect(h.validateNumber(undefined)).toBeNaN();
  });
});
