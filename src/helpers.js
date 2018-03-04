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

module.exports = { validateNumber, isOutOfRange };
