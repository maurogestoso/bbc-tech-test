# BBC Tech Test

## Table of Contents
- [Technical Questions](https://github.com/maurogestoso/bbc-tech-test#technical-questions)
  - [Question #1](https://github.com/maurogestoso/bbc-tech-test#question-1)
  - [Question #2](https://github.com/maurogestoso/bbc-tech-test#question-2)
  - [Question #3](https://github.com/maurogestoso/bbc-tech-test#question-3)
- [Technical Challenge](https://github.com/maurogestoso/bbc-tech-test#technical-challenge)
  - [Usage](https://github.com/maurogestoso/bbc-tech-test#usage)
  - [Test Suite](https://github.com/maurogestoso/bbc-tech-test#test-suite)
  - [Thoughts](https://github.com/maurogestoso/bbc-tech-test#main-thoughts)

## Technical Questions:

1.  We're looking for people with a real passion for collaboratively creating great software. Please give an example of a software component you have designed and written from concept to deployment, outlining the steps you took. (1000 character limit)

2.  Using the example that you provided above, tell us about a significant decision you made to solve a technical challenge. Give details of technologies that you chose and why you chose them. (1000 character limit)

3.  Using the example that you provided above, tell us about how you ensured your software was fit for purpose and of high quality. What did you learn and what would you do differently next time to do a better job? (1000 character limit)

### Answers

#### Question #1

I built a video lectures delivery platform for students of our part-time course. The requirements were:

* Users should be able to sign in with their GitHub accounts and be automatically assigned to their corresponding cohort.
* Teachers should be able to easily publish new content to a cohort according to their progress
* Videos were already hosted on Vimeo and text content on GH repos
* The deadline for the start of the course was fairly tight, so speed of development and the ability to user test the platform ASAP were key

Steps:

* Gathered requirements
* Having easy access to both kinds of users (admins and students) allowed me to write very accurate user stories
* Drew up the data models and the flow of data fetching from 3rd party APIs
* Wireframed the views
* Spiked the Github integration since it was a critical requirement
* Implemented a prototype of the student side first and gave it to some students to "beta test"
* Implemented the admin side
* Refactored, fixed bugs, polished styling

#### Question #2

Speed of development of a working prototype and ease of maintenance where critical requirements for the project. We decided on React for the front-end and Firebase for the back-end, authentication and database.

React allowed us to quickly build our views out of reusable components. We didn't need state management solutions such as Redux since the data flow was fairly straight-forward. We wrapped calls to the Firebase database in our own functions, with a similar API to an ODM like mongoose, which we were familiar with.

Firebase allowed us to have a continuous and very simple deployment process, and since the auth service and the database are integrated, maintenance was completely centralised.

The workflow of the admin side revolves around data stored in our GH organisation (student teams, lecture repos), so instead of duplicating information in our database, we used GH as our "source of truth". This simplified the admin workflow, since most actions could be done through GH itself.

#### Question #3

Good practices:

* Developed a prototype quickly and made heavy use of students as testers. This proved invaluable for finding bugs, improving UX and browser compatibility.

* Testing of our state management and authentication functions.

* Agile practices:
  * Used GH Projects as our Kanban board
  * Separation of work back/front end, code reviews and constant communication (2 devs) allowed for rapid development in parallel

Things to improve:

* Writing documentation was sacrificed over speed. This made handover harder.
* Using GH as a sort of CMS worked well, but it made handling more specific flows more complicated. Putting more data in our DB would have saved unnecessary trips to GH's API and would have enabled better caching.
* Firebase auth integration simplified things a lot, but its integrated DB solution was too simple. If we followed the previous point, we would have used a better suited DB like MongoDB and benefit from richer features (such as schemas using mongoose).

[Back to top 👆](https://github.com/maurogestoso/bbc-tech-test#bbc-tech-test)

## Technical Challenge

- Node.js version used: v9.2.1
- NPM version used: v5.6.0

### Usage

To generate a roman numeral through the command line interface, run the NPM `generate` script and pass it a number as an argument:

```
npm run generate <decimal_number>
```

#### Example

```
npm run generate 42
```

Will output: `The Roman Numeral for 42 is XLII`

#### Test suite

To run the test suite: install dependencies and run the NPM `test` script:

```
npm install
npm test
```

### Main thoughts

* This kata reminded me of a problem I solved before: calculating change using the minimum amount of coins. In that problem I traverse the array of valid coins (sorted in descending order of value) and take the value from the target amount whenever the value of the current coin is less than or equal to it.

* This approach worked exactly the same for Roman Numerals because I also had a fix set of symbols that I could traverse in descending order of value.

* I wrote my unit tests in order of complexity of numerals to be generated even though the algorithm worked from the start. Having a thorough suite of tests allowed me to refactor my code with confidence later on.

* To implement the subtractive notation I could have implemented logic to limit the repetition of consecutive symbols to 3, but it would have made the code unnecessarily complex. Since the number of "special cases" was small, I decided to add them to the array of numerals and call it a day. If the number of "special cases" was larger or could increase over time, it would be worth adding logic to check them dynamically.

* Although a Java interface was provided as a spec, I implemented it as a method in a Node.js module for simplicity and because it felt more idiomatic to JavaScript, comparable to methods like the ones from the `Math` object.

* I wrote a simple command line interface for reviewers to quickly test the functionality.

### Final implementation

* I refactored my initial implementation to use the `reduce` method since it suited my use case perfectly.
* The functional programming approach, the use of simple mathematical operations and helper functions improves readability in comparison with the original implementation.

### Validating edge cases and invalid input

* The `generate` method returns an empty string when a numeral can't be generated. I decided on this implementation to avoid breaking the users' code if they decided to compose this function and treat its return value as a string.

* Interestingly, [according the Wikipedia page](https://en.wikipedia.org/wiki/Roman_numerals#Zero), returning `null` for zero would have been historically correct 😁

* I wrote 2 little helper functions to validate the type and the range of the input, improving the readability of the main method.

* The method only generates numerals if passed a number or a string that can be parsed as a number. Even though other JS types can be coerced to a number, I decided on this implementation to enforce best practices. Having said that, this could be easily changed by refactoring the `validateNumber` helper function.

[Back to top 👆](https://github.com/maurogestoso/bbc-tech-test#bbc-tech-test)
