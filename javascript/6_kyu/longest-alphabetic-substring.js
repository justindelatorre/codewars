/* https://www.codewars.com/kata/5a7f58c00025e917f30000f1
 *
 * Find the longest substring in alphabetical order.
 *
 * Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is 
 * "aaaabbbbctt".
 *
 * If there are multiple solutions, return the one that appears first.
 */

// INPUT(S)
// - String, consisting of lower case letters and at least one letter long
//
// OUTPUT(S)
// - String, representing the longest substring within the argument whose 
//   characters are alphabetical
//
// REQUIREMENTS / NOTES
// - If there are multiple alphabetical substrings of the same length, return
//   the one that comes first
// - Substrings with non-letters should be ignored
// - Non-string arguments and too few arguments should return undefined
// - Empty string arguments should return ''
//
// CLARIFICATIONS
// - How should the function handle empty strings? (Return '')
// - How should the function handle non-letter characters?
//   (Function should only consider substrings with letters.)
// - How should the function handle non-string arguments? (Return undefined.)
// - How should the function handle too few arguments? (Return undefined)
// - How should the function handle too many arguments? (Ignore extras.)
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
// console.log(longestAlphabeticSubstring('abcda')); // 'abcd'
// console.log(longestAlphabeticSubstring('abcdefghiz')); // 'abcdefghiz'
// console.log(longestAlphabeticSubstring('a')); // 'a'
// console.log(longestAlphabeticSubstring('abcdef@hiz')); // 'abcdef'
// console.log(longestAlphabeticSubstring('')); // ''
// console.log(longestAlphabeticSubstring(42)); // undefined
// console.log(longestAlphabeticSubstring()); // undefined
// console.log(longestAlphabeticSubstring('abcdefghiz', 'foo')); // 'abcdefghiz'
//
// DATA STRUCTURE(S)
// - Array, to hold substring possibilities
// - String, which enables use of regex
//
// ALGORITHM
// - Step 1: Guard case(s):
//   - Return undefined if argument is not a string or there are too few
//     arguments
//   - Return '' if the argument is an empty string
// - Step 2: Get all letter-based substrings
//   - Initialize variable and set to length of argument string (`length`)
//   - Initialize variable and set to empty array (`substrings`)
//   - Define an outer loop from 0 to less than `length` (`idx1`):
//     - Define an inner loop from 1 to less than `length` (`idx2`):
//       - Push the substring of the argument string starting at `idx1` and 
//         ending at `idx2`
//   - Return substrings containing ONLY letters
// - Step 3: Get only alphabetic substrings
//   - Loop through each character in the substring, starting at index 1
//     - If the current character is not greater than the previous, return
//       false
//   - Return true
// - Step 4: Get longest alphabetic substring from array of substrings
//   - Initialize a variable to track longest alphabetic substring length
//     `longestLength` and set to 0
//   - Initialize a variable to track longest alphabetic substring 
//     `longestSubstring` and set to ''
//   - Loop through all substrings generated:
//     - If the current substring is alphabetic and is longer than 
//       `longestLength`, set `longestLength` to that length and 
//       `longestSubstring` to that substring
//   - Return `longestSubstring`

function isAlphabetic(string) {
  for (let idx = 1; idx < string.length; idx += 1) {
    if (string[idx] < string[idx - 1]) {
      return false;
    }
  }
  
  return true;
}

function getSubstrings(string) {
  let length = string.length;
  let substrings = [];
  
  for (let idx1 = 0; idx1 < length; idx1 += 1) {
    for (let idx2 = 0; idx2 < length; idx2 += 1) {
      let substring = string.substring(idx1, idx2 + 1);
      if (!/[^A-Za-z]+/.test(substring)) {
        substrings.push(substring); 
      }
    }
  }
  
  return substrings.filter(isAlphabetic);
}

function longestAlphabeticSubstring(string) {
  if (typeof string !== 'string' || string === undefined) {
    return; 
  } else if (string.length === 0) {
    return ''; 
  }
  
  let substrings = getSubstrings(string);
  let longestLength = 0;
  let longestSubstring;
  substrings.forEach(substring => {
    if (substring.length > longestLength) {
      longestLength = substring.length;
      longestSubstring = substring;
    }
  });
  
  return longestSubstring;
}

// Generic Cases
console.log(longestAlphabeticSubstring('abcda')); // 'abcd'
console.log(longestAlphabeticSubstring('abcdefghiz')); // 'abcdefghiz'
console.log(longestAlphabeticSubstring('a')); // 'a'

// Edge Cases
console.log(longestAlphabeticSubstring('abcdef@bca')); // 'abcdef'
console.log(longestAlphabeticSubstring('')); // ''
console.log(longestAlphabeticSubstring(42)); // undefined
console.log(longestAlphabeticSubstring()); // undefined
console.log(longestAlphabeticSubstring('abcdefghiz', 'foo')); // 'abcdefghiz'
