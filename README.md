## Technical Challenge

### Instructions

Node.js version used: v9.2.1

To run the test suite: install dependencies and run the NPM `test` script:

```
npm install
npm test
```

### Initial thoughts

* This kata reminded me of a problem I solved before: calculating change using the minimum amount of coins. In that problem I traverse the array of valid coins (sorted in descending order of value) and take the value from the target amount whenever the value of the current coin is less than or equal to it.

* This approach worked exactly the same for Roman Numerals because I also had a fix set of symbols that I could traverse in descending order of value.

* I wrote my unit tests in order of complexity of numerals to be generated even though the algorithm worked from the start. Having a thorough suite of tests allowed me to refactor my code with confidence later on.

* To implement the subtractive notation I could have implemented logic to limit the repetition of consecutive symbols to 3, but it would have made the code unnecessarily complex. Since the number of "special cases" was small, I decided to add them to the array of numerals and call it a day. If the number of "special cases" was larger or could increase over time, it would be worth adding logic to check them dynamically.

* Although a Java interface was provided as a spec, I implemented it as a method in a Node.js module for simplicity and because it felt more idiomatic to JavaScript, comparable to methods like the ones from the `Math` object.

### Final implementation

* I refactored my initial implementation to use the `reduce` method since it suited my use case perfectly.
* The functional programming approach, the use of simple mathematical operations and helper functions improves readability in comparison with the original implementation.

### Validating edge cases and invalid input

* The `generate` method returns an empty string when a numeral can't be generated. I decided on this implementation to avoid breaking the users' code if they decided to compose this function and treat its return value as a string.

* Interestingly, [according the Wikipedia page](https://en.wikipedia.org/wiki/Roman_numerals#Zero), returning `null` would have been historically correct 😁

* I wrote 2 little helper functions to validate the type and the range of the input, improving the readability of the main method.

* The method only generates numerals if passed a number or a string that can be parsed as a number. Even though other JS types can be coerced to a number, I decided on this implementation to enforce best practices. Having said that, this could be easily changed by refactoring the `validateNumber` helper function.
