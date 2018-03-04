# BBC Tech Test

## Technical Questions:

1.  We're looking for people with a real passion for collaboratively creating great software. Please give an example of a software component you have designed and written from concept to deployment, outlining the steps you took. (1000 character limit)

2.  Using the example that you provided above, tell us about a significant decision you made to solve a technical challenge. Give details of technologies that you chose and why you chose them. (1000 character limit)

3.  Using the example that you provided above, tell us about how you ensured your software was fit for purpose and of high quality. What did you learn and what would you do differently next time to do a better job? (1000 character limit)

## Technical Challenge

### BBC Coding Kata - Roman Numerals

The purpose of this exercise is not simply to solve the problem; instead, we are interested in how you approach the problem.
Please complete the coding exercise and then submit the code listing to your email contact at the BBC. Please explain your approach, assumptions made, or caveats to your solution and add these to the email.

We are particularly interested in the following:

* Code quality
* Code readability
* Testing

#### The problem

In whatever language you prefer, write a class that implements the following interface (example given in Java):

```java
public interface RomanNumeralGenerator {
   public String generate(int number);
}
```

For example, see the following sample inputs and outputs:

```
1 = “I”
5 = “V”
10 = “X”
20 = “XX”
3999 = “MMMCMXCIX”
```

Caveat: Only support numbers between 1 and 3999
For an in-depth description of Roman Numerals, see http://en.wikipedia.org/wiki/Roman_numerals
