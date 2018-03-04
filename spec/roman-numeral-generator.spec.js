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
});
