/* https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/ruby
 *
 * Given a string of integers, return the number of odd-numbered 
 * substrings that can be formed.
 */

// INPUT(S)
// - String, of integers
//
// OUTPUT(S)
// - Number, representing count of odd-numbered substrings that can be 
//   formed from the given string
//
// REQUIREMENTS / NOTES
// - Given a string of integers, return the count of odd-numbered 
//   substrings within the given string.
// - "Odd-numbered substring": a substring of digits that, when
//   converted to a Number data type, represents an odd number
//
// CLARIFICATIONS
// - Will the given argument always contain only integers? (No.)
// - Will the given argument ever represent a negative integer? (No.)
// - How should the function handle empty strings? (Return 0.)
// - How should the function handle non-string arguments?
//   (Return undefined.)
// - How should the function handle too few (< 1) arguments?
//   (Return undefined.)
// - How should the function handle too many (> 1) arguments? (Ignore 
//   them.)
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
// console.log(countOddSubstrings('123')); // 1, 3, 23, 123 => 4
// console.log(countOddSubstrings('12#')); // 1 => 1
// console.log(countOddSubstrings('')); // 0
// console.log(countOddSubstrings(42)); // undefined
// console.log(countOddSubstrings()); // undefined
// console.log(countOddSubstrings('123', false)); // 4
//
// DATA STRUCTURE(S)
// - Array, to store all possible substrings and enable looping through
//   each possible substring
//
// ALGORITHM
// - Guard cases: 
//   - Return 0 if string is empty
//   - Return undefined if:
//     - Argument is not a string or is not given
// - Step 1: Get all substrings from given string
//   - Initialize variable and assign to empty array to hold substrings
//   - Initialize outer loop starting from 0 to the length of argument
//     - Initialize inner loop starting from 1 to length of argument
//       - Push the resulting substring from outer index to inner index if
//         the string only contains digits and convert them to numbers
//   - Return the array of substrings
// - Step 2: Get odd substrings
//   - Get odd substrings and count them

function getSubstrings(string) {
  let substrings = [];
  for (let idx1 = 0; idx1 < string.length; idx1 += 1) {
    for (let idx2 = 1; idx2 < string.length + 1; idx2 += 1) {
      let substring = string.substring(idx1, idx2);
      if (!/[\D]/.test(substring) && substring.length > 0) {
        substrings.push(Number(substring));
      }
    }
  }

  return substrings; 
}

function countOddSubstrings(string) {
  if (typeof string !== 'string') {
    return;
  } else if (string.length === 0) {
    return 0;
  }

  let substrings = getSubstrings(string);
  return substrings.filter(substring => substring % 2 === 1).length;
}

// Generic Cases
console.log(countOddSubstrings('123')); // 1, 3, 23, 123 => 4

// Edge Cases
console.log(countOddSubstrings('12#')); // 1 => 1
console.log(countOddSubstrings('')); // 0
console.log(countOddSubstrings(42)); // undefined
console.log(countOddSubstrings()); // undefined
console.log(countOddSubstrings('123', false)); // 4
