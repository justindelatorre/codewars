/* https://www.codewars.com/kata/5202ef17a402dd033c000009
 *
 * A string is considered to be in title case if each word in the string is either (a) capitalised (that is, 
 * only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely 
 * into lower case unless it is the first word, which is always capitalised.
 * 
 * Write a function that will convert a string into title case, given an optional list of exceptions (minor
 * words). The list of minor words will be given as a string with each word separated by a space. Your
 * function should ignore the case of the minor words string -- it should behave in the same way even if the
 * case of the minor word string is changed.
 * 
 * Title Case:
 * - Every word is capitalized, except those considered to be an exception.
 * - First word is always capitalized, even if the actual word is an exception.
 */

// INPUT(S)
// - String, representing the title to be capitalized
// - String, representing the exception words, which will not be lowercased
//
// OUTPUT(S)
// - String, which represents the original converted into title case given the exceptions words
//
// "the lion king", "the lion" => "The lion King"
//
// REQUIREMENTS / NOTES
// - Write a function that takes a string, representing a title, and another string, containing exception
//   words, and return a string that converts the first argument into title case, which is defined as
//   the first word capitalized, and every other word that is not an exception captialized as well. Exception
//   words should remain lowercase in the output string.
// - Return undefined if:
//   - The first argument is not given
// - Return and empty string is the first argument is an empty string
// - Return the first argument capitalized if the second argument is either empty or not given
//
// CLARIFICATIONS
// - Will either argument string contain non-letter or non-space characters? (No.)
// - How should the function handle empty string arguments for either argument?
//   (Empty first argument strings should return ''. Empty second argument strings should capitalize
//   the first argument as if there were no exception words.)
// - How should the function handle non-string arguments for either argument? (If either argument is
//   not a string, return undefined.)
// - How should the function handle non-existent arguments for either argument? (If the first argument is
//   missing, return undefined. If the second argument is missing, capitalize the first as is there were
//   no exception words.)
//
// POTENTIAL EDGE CASES
// - Generic cases: Have all explicit cases been covered?
// - Input types: How should the function handle inputs of different data types?
//   - How should the function handle a function passed as an argument?
// - Special values:
//   - If argument is a number, how does it handle 0, fractions, NaN,
//     Infinity?
//   - If argument is a string/array/object, how does it handle emptiness?
//   - If argument is an array, how does it handle <empty item>s or object
//     properties?
// - Invalid inputs: How should the function handle arguments of the correct
//   type but invalid values?
// - Argument and parameter mismatch:
//   - How should the function handle being passed too few arguments?
//   - How should the function handle being passed too many arguments?
// - Does the problem statement contain any "if"'s?
//   - If there is a conditional requirement, have both sides of the condition
//     been represented?
// - (Remember, don't test more than one requirement per test case!)
//
// EXAMPLES
// console.log(convertToTitleCase('the lion king', 'the lion')); // 'The lion King'
// console.log(convertToTitleCase('the lion king', 'the')); // 'The Lion King'
// console.log(convertToTitleCase('the lion king', '')); // 'The Lion King'
// console.log(convertToTitleCase('the lion king')); // 'The Lion King'
// console.log(convertToTitleCase('', 'the lion')); // ''
// console.log(convertToTitleCase(exceptions: 'the lion')); // undefined
// console.log(convertToTitleCase()); // undefined
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and is the product of string splitting
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if:
//     - Either argument is not a string
//   - Return '' if the first argument is empty
// - Initialize variable and set to first argument split by ' ' (`titleWords`)
// - Initialize variable and set to second argument split by ' ' (`exceptionWords`)
// - Loop through each word in title
//   - If exception words includes current word, lowercase it
//   - Else, capitalize it
// - Return the result of joining all the modified words

function convertToTitleCase(title, exceptions) {
  if (title !== undefined && exceptions === undefined) {
    exceptions = '';
  } else if (typeof title !== 'string' || typeof exceptions !== 'string') {
    return;
  } else if (title.length === 0) {
    return '';
  }

  let titleWords = title.split(' ');
  let exceptionWords = exceptions.split(' ').map(exception => exception.toLowerCase());
  return titleWords.map((word, idx) => {
    let currentWord = word.toLowerCase();
    if (idx === 0) {
      return currentWord[0].toUpperCase() + currentWord.slice(1);
    } else if (exceptionWords.includes(currentWord)) {
      return currentWord.toLowerCase();
    } else {
      return currentWord[0].toUpperCase() + currentWord.slice(1);
    }
  }).join(' ');
}

// Generic Cases
console.log(convertToTitleCase('the lion king', 'the lion')); // 'The lion King'
console.log(convertToTitleCase('the Lion king', 'the lion')); // 'The lion King'
console.log(convertToTitleCase('the lion king', 'the')); // 'The Lion King'

// // Edge Cases
console.log(convertToTitleCase('the lion king', '')); // 'The Lion King'
console.log(convertToTitleCase('the lion king')); // 'The Lion King'
console.log(convertToTitleCase('', 'the lion')); // ''
console.log(convertToTitleCase()); // undefined
console.log(convertToTitleCase(42, 42)); // undefined
console.log(convertToTitleCase('the lion king', 42)); // undefined
console.log(convertToTitleCase(42, 'the lion')); // undefined
