/* https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/ruby
 *
 * In this kata, you've to count lowercase letters in a given string and 
 * return the letter count in an object with 'letter' as key and count as 
 * 'value'.
 */

// INPUT(S)
// - String
//
// OUTPUT(S)
// - Object, containing a count of the lowercase letters in the given
//   string, where the object property keys are the letters and the
//   object property values are each letter's respective counts
//
// REQUIREMENTS / NOTES
// - Returned object must include key-value pairs representing the
//   lowercase letters in a given string and their respective counts
//
// CLARIFICATIONS
// - How should the function treat uppercase letters? (Ignore them.)
// - How should the function treat non-alphabetic characters? (Ignore them.)
// - How should the function treat empty strings? (Return an empty object.)
// - How should the function treat non-string arguments? (Return undefined.)
// - How should the function handle too few arguments passed? (Return undefined.)
// - How should the function handle too many arguments passed? (Ignore them.)
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
// console.log(countLowerCase('abc')); // { a: 1, b: 1, c: 1 }
// console.log(countLowerCase('AbC')); // { b: 1 }
// console.log(countLowerCase('ab c')); // { a: 1, b: 1, c: 1 }
// console.log(countLowerCase('A%')); // {}
// console.log(countLowerCase('')); // {}
// console.log(countLowerCase(42)); // undefined
// console.log(countLowerCase()); // undefined
// console.log(countLowerCase('abc', 42)); // { a: 1, b: 1, c: 1 }
//
// DATA STRUCTURE(S)
// - Object, which enables key-value pairs
//
// ALGORITHM
// - Guard cases:
//   - If argument string is empty, return {}
//   - If argument is not a string or is undefined, return undefined
// - Initialize variable and assign to empty object (`counts`)
// - Loop through characters in argument string
//   - If current character is a lowercase letter:
//     - If character is not in `counts`, set `counts`[character] to 1
//     - Else, increment count by one
//   - Else, continue
// - Return `counts`

function countLowerCase(string) {
  if (typeof string !== 'string') {
    return;
  } else if (string.length === 0) { // Might not be necessary
    return {};
  }

  let counts = {};
  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];
    if (/[a-z]/.test(currentChar)) {
      if (!counts[currentChar]) {
        counts[currentChar] = 1;
      } else {
        counts[currentChar] += 1;
      }
    } else {
      continue;
    }
  }

  return counts;
}

// Generic Cases
console.log(countLowerCase('abc')); // { a: 1, b: 1, c: 1 }
console.log(countLowerCase('AbC')); // { b: 1 }
console.log(countLowerCase('ab c')); // { a: 1, b: 1, c: 1 }

// Edge Cases
console.log(countLowerCase('A%')); // {}
console.log(countLowerCase('')); // {}
console.log(countLowerCase(42)); // undefined
console.log(countLowerCase()); // undefined
console.log(countLowerCase('abc', 42)); // { a: 1, b: 1, c: 1 }
