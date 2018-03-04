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
});
