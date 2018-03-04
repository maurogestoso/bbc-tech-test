/* eslint-disable no-console */
const { generate } = require("./roman-numeral-generator");
const { validateNumber, isOutOfRange } = require("./helpers");

const argument = process.argv[2];
const number = validateNumber(argument);

if (isNaN(number)) {
  console.error(
    `Argument ${argument} is invalid. Please provide a number between 1 and 3999`
  );
} else if (isOutOfRange(number)) {
  console.error(
    `Argument ${number} is out of range. Please provide a number between 1 and 3999`
  );
} else {
  const numeral = generate(number);
  console.log(`The Roman Numeral for ${number} is ${numeral}`);
}
