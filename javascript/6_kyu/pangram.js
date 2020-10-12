/* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/ruby
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the 
 * sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at 
 * least once (case is irrelevant).
 * 
 * Given a string, detect whether or not it is a pangram.
 */

// INPUT(S)
// - String
//
// OUTPUT(S)
// - Boolean, indicating whether or not the argument is a pangram.
//
// REQUIREMENTS / NOTES
// - Write a function that takes an argument and returns true if it is a pangram, false if not, and undefined
//   if the argument is not a string.
//   - "Pangram": a string in which each letter in the English alphabet is used at least once.
// - Case is irrelevant, which means 'a' and 'A' each count as usage of the letter 'A'.
// - The function should return undefined if the argument is not a string or if there are too few arguments.
//
// CLARIFICATIONS
// - How should an argument's "pangram-ness" be indicated by the function? (Boolean.)
// - How should the function handle empty strings? (Return false.)
// - How should the function handle non-string arguments? (Return undefined.)
// - How should the function handle too few (< 1) arguments? (Return undefined.)
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
// console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
// console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); // true
// console.log(isPangram('abcdefghijklmnopqrstuvwxy')); // false
// console.log(isPangram('abcdefghijklmnopqrstuvwxyz', {})); // true
// console.log(isPangram('abcdefghijklmnopqrstuvwxy', {})); // false
// console.log(isPangram('')); // false
// console.log(isPangram(42)); // undefined
// console.log(isPangram()); // undefined
//
// DATA STRUCTURE(S)
// - Array, to keep track of used letters
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if argument is not a string (or is not provided)
//   - Return false if string is empty
// - Initialize variable and set to empty collector array
// - Loop through each character in argument string
//   - Initialize a variable and assign to lowercased version of current character
//   - If character is a letter
//     - If character is included in array, continue
//     - Else, add character to array
//   - Else, continue
// - Return true if collector array length is 26, otherwise return false

function isPangram(string) {
  if (typeof string !== 'string') {
    return;
  } else if (string.length === 0) {
    return false;
  }

  let used = [];
  string.split('').forEach(char => {
    let currentChar = char.toLowerCase();
    if (/[a-z]/.test(currentChar)) {
      if (!used.includes(currentChar)) {
        used.push(currentChar);
      }
    }
  });

  return used.length === 26;
}

// Generic Cases
console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); // true
console.log(isPangram('abcdefghijklmnopqrstuvwxy')); // false

// Edge Cases
console.log(isPangram('abcdefghijklmnopqrstuvwxyz', {})); // true
console.log(isPangram('abcdefghijklmnopqrstuvwxy', {})); // false
console.log(isPangram('')); // false
console.log(isPangram(42)); // undefined
console.log(isPangram()); // undefined
