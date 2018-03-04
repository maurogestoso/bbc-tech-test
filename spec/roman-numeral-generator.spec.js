const { generate } = require("../src/roman-numeral-generator");

describe("generate", () => {
  it("generates numerals for all the individual symbols", () => {
    expect(generate(1)).toBe("I");
    expect(generate(5)).toBe("V");
    expect(generate(10)).toBe("X");
    expect(generate(50)).toBe("L");
    expect(generate(100)).toBe("C");
    expect(generate(500)).toBe("D");
    expect(generate(1000)).toBe("M");
  });

  it("generates numerals with multiple symbols for multiples of [1, 10, 100, 1000]", () => {
    expect(generate(2)).toBe("II");
    expect(generate(3)).toBe("III");
    expect(generate(20)).toBe("XX");
    expect(generate(30)).toBe("XXX");
    expect(generate(200)).toBe("CC");
    expect(generate(300)).toBe("CCC");
    expect(generate(2000)).toBe("MM");
    expect(generate(3000)).toBe("MMM");
  });

  it("generates numerals using subtractive notation instead of 4 consecutive symbols", () => {
    expect(generate(4)).toBe("IV");
    expect(generate(9)).toBe("IX");
    expect(generate(40)).toBe("XL");
    expect(generate(90)).toBe("XC");
    expect(generate(400)).toBe("CD");
    expect(generate(900)).toBe("CM");
  });

  it("generates numerals for arbitrarily complex numbers", () => {
    expect(generate(8)).toBe("VIII");
    expect(generate(38)).toBe("XXXVIII");
    expect(generate(88)).toBe("LXXXVIII");
    expect(generate(99)).toBe("XCIX");
    expect(generate(267)).toBe("CCLXVII");
    expect(generate(754)).toBe("DCCLIV");
    expect(generate(1989)).toBe("MCMLXXXIX");
    expect(generate(2018)).toBe("MMXVIII");
    expect(generate(3999)).toBe("MMMCMXCIX");
  });

  it("returns an empty string when passed an argument with an invalid type", () => {
    expect(generate(true)).toBe("");
    expect(generate([])).toBe("");
    expect(generate({})).toBe("");
    expect(generate(function() {})).toBe("");
    expect(generate(null)).toBe("");
    expect(generate()).toBe("");
  });

  it("returns an empty string when passed a number outside range [1, 3999]", () => {
    expect(generate(-42)).toBe("");
    expect(generate(0)).toBe("");
    expect(generate(4000)).toBe("");
  });
});
