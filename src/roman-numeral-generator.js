const generate = number => {
  let result = "";

  NUMERALS.forEach(({ value, symbol }) => {
    while (value <= number) {
      number -= value;
      result += symbol;
    }
  });

  return result;
};

const NUMERALS = [
  { value: 1000, symbol: "M" },
  { value: 500, symbol: "D" },
  { value: 100, symbol: "C" },
  { value: 50, symbol: "L" },
  { value: 10, symbol: "X" },
  { value: 5, symbol: "V" },
  { value: 1, symbol: "I" }
];

module.exports = { generate, NUMERALS };
