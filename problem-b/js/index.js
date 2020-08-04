"use strict";

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
function addFour(params) {
  let finalValue = params + 4;
  return finalValue;
}

/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
let twelve = addFour(8);
console.log(twelve);

/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */
let twelveString = addFour("8");
console.log(twelveString);

/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/
function compoundInterest(initialBalance, annualInterest, years) {
  let total = initialBalance * Math.exp(annualInterest * years);
  return total;
}

/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */
function fizzBuzz(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. Watch out 
   for if the letter is not in the Object yet!
   You can test this method with a word like "Mississippi". */
function getLetterFrequencies(word) {
  let result = {};
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i).toString();
    if (letter in result) {
      result[letter.toString()] = result[letter.toString()] + 1;
    } else {
      result[letter.toString()] = 1;
    }
  }
  return result;
}

/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */

let deck = [];
let count = 0;
for (let i = 0; i < 4; i++) {
  for (let k = 2; k <= 14; k++) {
    deck[count] = {};
    if (i == 0) {
      deck[count]["suit"] = "hearts";
    } else if (i == 1) {
      deck[count]["suit"] = "diamonds";
    } else if (i == 2) {
      deck[count]["suit"] = "clubs";
    } else {
      deck[count]["suit"] = "spades";
    }
    deck[count]["rank"] = k;
    count = count + 1;
  }
}

//You can test the below functions by creating e.g., a `pokerHand` array that
//contains five cards from the `deck`.
let pokerHand = [
  { rank: 14, suit: "spades" },
  { rank: 12, suit: "hearts" },
  { rank: 2, suit: "clubs" },
  { rank: 9, suit: "diamonds" },
];

/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */
function containsQueenOfHearts(card) {
  let value = 0;
  for (let i = 0; i < card.length; i++) {
    if (card[i]["suit"] == "hearts" && card[i]["rank"] == 12) {
      value = 1;
    }
  }
  if (value == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(pokerHand[1]);
console.log(pokerHand.length);
console.log(pokerHand[1]["suit"]);
console.log(containsQueenOfHearts(pokerHand));
/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */

function getHighCard(card) {
  let highestValue = 0;
  let validResult = {};
  for (let i = 0; i < card.length; i++) {
    if (card[i]["rank"] > highestValue) {
      highestValue = card[i]["rank"];
      validResult = card[i];
    }
  }
  return validResult;
}
console.log(getHighCard(pokerHand));

/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */

function isFlush(card) {
  let firstSuit = card[0]["suit"];
  for (let i = 1; i < card.length; i++) {
    if (card[i]["suit"] != firstSuit) {
      return false;
    }
  }
  return true;
}

console.log(isFlush(pokerHand));
/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) */

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if (typeof module !== "undefined" && module.exports) {
  /* eslint-disable */
  if (typeof addFour !== "undefined") module.exports.addFour = addFour;
  if (typeof twelveString !== "undefined")
    module.exports.twelveString = twelveString;
  if (typeof compoundInterest !== "undefined")
    module.exports.compoundInterest = compoundInterest;
  if (typeof fizzBuzz !== "undefined") module.exports.fizzBuzz = fizzBuzz;
  if (typeof getLetterFrequencies !== "undefined")
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if (typeof deck !== "undefined") module.exports.deck = deck;
  if (typeof containsQueenOfHearts !== "undefined")
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if (typeof getHighCard !== "undefined")
    module.exports.getHighCard = getHighCard;
  if (typeof isFlush !== "undefined") module.exports.isFlush = isFlush;
}
