/* https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/ruby
 *
 * Write a function that converts a camel case string into a kebab case.
 */

// INPUT(S)
// - String, written in camelCase, e.g. someVariable
//
// OUTPUT(S)
// - String, written in "kebab case", e.g., kebab-case
//   - Input: someVariable -> Output: some-variable
//   - Input: array1Variable -> Output: array-1-variable
//
// REQUIREMENTS / NOTES
// - Write a function that takes a given string written in camelCase and converts it to kebab-case.
// - Return an empty string if the argument is an empty string.
// - Return undefined if the argument is not a string or if none are provided.
//
// CLARIFICATIONS
// - Will the argument string contain any characters besides alphabetic letters? (Yes. Numbers as well.)
// - How should the function handle empty strings? (Return empty string.)
// - How should the function handle non-string data types? (Return undefined.)
// - How should the function handle too few arguments (< 1)? (Return undefined.)
// - How should the function handle too many (> 1) arguments? (Ignore extras.)
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
// console.log(convertToKebabCase('someVariable')); // 'some-variable'
// console.log(convertToKebabCase('some1Variable')); // 'some-1-variable'
// console.log(convertToKebabCase('some-variable')); // 'some-variable'
// console.log(convertToKebabCase('')); // ''
// console.log(convertToKebabCase()); // undefined
// console.log(convertToKebabCase(42)); // undefined
// console.log(convertToKebabCase('someVariable', true)); // 'some-variable'
//
// DATA STRUCTURE(S)
// - String, which can be re-assigned and concatenated
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if:
//     - Argument is not a string or not present
//   - Return '' if argument string is empty
// - Initialize a variable and assign it to empty string (`kebab`)
// - Loop through each character in the argument string:
//   - If the character is a number or capital letter:
//     - Concatenate '-' to `kebab`
//     - Concatenate lowercase version of character to `kebab`
//   - Else concatenate character to `kebab`
// - Return `kebab`

function convertToKebabCase(string) {
  if (typeof string !== 'string') {
    return;
  } else if (string.length === 0) {
    return '';
  }

  let kebab = '';
  string.split('').forEach(char => {
    if (/[A-Z0-9]/.test(char)) {
      kebab += '-';
      kebab += char.toLowerCase();
    } else {
      kebab += char;
    }
  });

  return kebab;
}

// Generic Cases
console.log(convertToKebabCase('someVariable')); // 'some-variable'
console.log(convertToKebabCase('some1Variable')); // 'some-1-variable'
console.log(convertToKebabCase('some-variable')); // 'some-variable'

// Edge Cases
console.log(convertToKebabCase('')); // ''
console.log(convertToKebabCase()); // undefined
console.log(convertToKebabCase(42)); // undefined
console.log(convertToKebabCase('someVariable', true)); // 'some-variable'
