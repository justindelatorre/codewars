/* https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3
 *
 * You will be given a string and you task is to check if it is possible to convert that 
 * string into a palindrome by removing a single character. If the string is already a 
 * palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing 
 * one character, then return "remove one", otherwise return "not possible". The order of the 
 * characters should not be changed.
 */

// INPUT(S)
// - String
//
// OUTPUT(S)
// - String, depending on a specific situation:
//   - 'OK' if argument string is already a palindrome
//   - 'remove one' if a palindrome can be formed by removing ONLY one letter from the 
//     argument
//   - 'not possible' if it is not possible to remove ONLY one letter and form a palindrome
//
// REQUIREMENTS / NOTES
// - Palindrome: the word is spelled the same forward and backwards
// - The function may only remove one letter when forming a substring
// - Case does not matter (TODO: convert argument to same case)
// - Empty string arguments should return 'OK'
// - Argument strings with non-alphabetic characters should return 'not possible'
// - Non-string arguments should return undefined
//
// CLARIFICATIONS
// - Does case matter when evaluating a palindrome? (No. => convert argument to lowercase)
// - How should the function handle empty strings? (Return 'OK')
// - How should the function handle strings with non-alphabetic characters, like spaces?
//   (Return 'not possible')
// - How should the function handle non-string arguments? (Return undefined)
// 
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
// - Does the problem statement contain any "if"'s?
//   - If there is a conditional requirement, have both sides of the condition
//     been represented?
// - (Remember, don't test more than one requirement per test case!)
//
// EXAMPLES
// console.log(almostPalindrome('abba')); // 'OK'
// console.log(almostPalindrome('abbab')); // 'remove one'
// console.log(almostPalindrome('baba')); // 'remove one'
// console.log(almostPalindrome('abbabb')); // 'not possible'
// console.log(almostPalindrome('')); // 'OK'
// console.log(almostPalindrome('ab ba')); // 'not possible'
// console.log(almostPalindrome(42)); // undefined
//
// DATA STRUCTURE(S)
// - String, which enables substring manipulation
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if argument is not a string
//   - Return 'not possible' if argument string contains non-letter characters
// - Step 1: Get all possible substrings of the argument string one character shorter in 
//   length
//   - Initialize variable `length` and assign to length of argument string
//   - Initialize variable `substrings` and assign to empty array
//   - Create outer loop from 0 to < `length` (`idx1`):
//     - Create inner loop from 0 to < `length` (`idx2`):
//       - Initialize variable `currentSubstring` and assign to substring of argument string
//         from `idx1` to `idx2`
//       - If the length of `currentSubstring` is equal to `length` - 1, push to `substrings`
//   - Return `substrings`
// - Step 2: Check to see if there are any palindromic substrings
//   - Initialize variable and assign to substrings resulting from argument
//   - Loop through each substring:
//     - Return 'remove one' if one is a palindrome
//   - Return 'not possible'

function getSubstrings(string) {
  let length = string.length;
  let substrings = [];
  
  for (let idx1 = 0; idx1 < length; idx1 += 1) {
    for (let idx2 = 0; idx2 < length; idx2 += 1) {
      let currentSubstring =  string.substring(idx1, idx2);
      if (currentSubstring.length === length - 1) {
        substrings.push(currentSubstring); 
      }
    }
  }
  
  return substrings;
}

function almostPalindrome(string) {
  if (typeof string !== 'string') {
    return;    
  }
  
  if (/[^A-Za-z]/.test(string)) {
    return 'not possible';    
  } else if (string.length === 0) {
    return 'OK'; 
  }
  
  let reversedString = string.split('').reverse().join('');
  if (string === reversedString) {
    return 'OK'; 
  }
  
  let substringsArray = getSubstrings(string);
  for (let idx = 0; idx < substringsArray.length; idx += 1) {
    let currentSubstring = substringsArray[idx];
    let reversedSubstring = substringsArray[idx].split('').reverse().join('');
    if (currentSubstring === reversedSubstring) {
      return 'remove one'; 
    }
  }
  
  return 'not possible';
}

// Generic Cases
console.log(almostPalindrome('abba')); // 'OK'
console.log(almostPalindrome('abbab')); // 'remove one'
console.log(almostPalindrome('baba')); // 'remove one'
console.log(almostPalindrome('abbabb')); // 'not possible'

// // Edge Cases
console.log(almostPalindrome('')); // 'OK'
console.log(almostPalindrome('ab ba')); // 'not possible'
console.log(almostPalindrome(42)); // undefined
