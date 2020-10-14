/* https://www.codewars.com/kata/5264d2b162488dc400000001
 *
 * Write a function that takes in a string of one or more words, and returns the same string, but
 * with all five or more letter words reversed (Just like the name of this Kata). Strings passed
 * in will consist of only letters and spaces. Spaces will be included only when more than one word
 * is present.
 */

// INPUT(S)
// - String, consisting of only letters and spaces
//
// OUTPUT(S)
// - String, representing the original argument with words longer than four letters reversed (all shorter
//   words remain the same)
//
// REQUIREMENTS / NOTES
// - Reverse all five-letter or longer strings in an argument and return the result.
// - Preserve punctuation and letter casing.
// - Return '' if the argument is an empty string.
//
// CLARIFICATIONS
// - How should the function handle empty strings? (Return ''.)
// - How should the function treat letter case, e.g., should it be maintained? (Yes, maintain it.)
// - How should punctuation be handled, e.g., should it be preserved? (Yes.)
// - Will any of the individual words be contractions, e.g, "shouldn't"? (No.)
//
// EXAMPLES
// console.log(spinWords('Hello')); // 'olleH'
// console.log(spinWords('Hello world!')); 'olleH dlrow!'
// console.log(spinWords('foo')); // 'foo'
// console.log(spinWords('Whats the matter with Kansas?')); // 'stahW the rettam with sasnaK?'
// console.log(spinWords(''));
//
// DATA STRUCTURE(S)
// - Strings, which enable regular expressions
//
// ALGORITHM
// - Find every word in the given string that is five characters or longer
// - Replace those words with their reversed counterparts
// - Return the resulting string

function spinWords(string) {
  return string.replace(/\w{5,}/g, (word) => {
    return word.split('').reverse().join('');
  });
}

// Generic Cases
console.log(spinWords('Hello')); // 'olleH'
console.log(spinWords('Hello world!')); 'olleH dlrow!'
console.log(spinWords('foo')); // 'foo'
console.log(spinWords('Whats the matter with Kansas?')); // 'stahW the rettam with sasnaK?'

// Edge Cases
console.log(spinWords(''));
