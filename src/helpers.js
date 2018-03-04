const validateNumber = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return NaN;
  } else {
    return Number(num);
  }
};

module.exports = { validateNumber };
