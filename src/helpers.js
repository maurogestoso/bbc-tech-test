const validateNumber = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return NaN;
  } else {
    return Number(num);
  }
};

const isOutOfRange = num => {
  const MIN = 1;
  const MAX = 3999;

  return num < MIN || num > MAX;
};

const repeatSymbol = (symbol, times = 1) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += symbol;
  }
  return result;
};

module.exports = { validateNumber, isOutOfRange, repeatSymbol };
