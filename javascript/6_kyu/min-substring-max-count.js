/* https://www.codewars.com/kata/5491689aff74b9b292000334/train/ruby
 *
 * For a given nonempty string s find a minimum substring t and the maximum 
 * number k, such that the entire string s is equal to t repeated k times.
 */

// INPUT(S)
// - String of characters
//
// OUTPUT(S)
// - Array, containing:
//   - t, a substring from the given string
//   - k, the number of times that substring appears in the given string
// - (k should reflect the maximum number of times ANY substring appears in the
//   given string.)
//
// REQUIREMENTS / NOTES
// - Write a function that takes a given string and outputs an array containing a substring from
//   the given string and a number, such that:
///  - The substring represents the most common substring in the given string
//   - The number represents the count of times said substring appears in the given string currently,
//     e.g., 'ab' appears in 'ababa' three times => ['ab', 3]
// - 
//
// CLARIFICATIONS
// - What characters are considered valid in a substring e.g., alphabetic, digits, others, etc.?
//   (All characters are valid.)
// - Is there a minimum length for the output substring? (Yes, at least two characters.)
// - Should the number of appearances of a substring be reflective of:
//   - How many times a substring can fit within the given string at one time? (Yes.)
//   - How many times a substring can be generated from the current ordering of characters in the string?
//     (No.)
//   - How many times a substring can be generated from any order of characters in the string? (No.)
// - How should the function handle empty strings? (Return ['', 0].)
// - How should the function handle non-string arguments? (Return undefined.)
// - How should the function handle too few arguments (< 1)? (Return undefined.)
// - How should the function handle too many arguments? (Ignore them.)
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
// console.log(countSubstrings('ababab')); // ['ab', 3]
// console.log(countSubstrings('aaaa')); // ['aa', 2]
// console.log(countSubstrings(' $ $')); // [' $', 2]
// console.log(countSubstrings('')); ['', 0]
// console.log(countSubstrings(42)); // undefined
// console.log(countSubstrings()); // undefined
// console.log(countSubstrings('ababab', false)); // ['ab', 3] 
//
// DATA STRUCTURE(S)
// - Array, to track all possible substrings and enable iteration
// - String, to enable regex
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if given argument is not a string
//   - Return ['', 0] if the argument is empty
// - Step 1: Get all substrings from given string two characters or larger
//   - Initialize variable and set to empty array to collect substrings
//   - Initialize an outer loop starting from 0 to less than length of string
//     - Initialize an inner loop starting from 1 to length of string + 1
//       - If substring resulting from first index to second index is longer than 2, push to
//         target array
//   - Return collecting array
// - Step 2: Count the number of times each substring appears in the given string
//   - Initialize a variable to track most common substring
//   - Inititalize variable to track count of times a common substring appears in the given string
//   - Loop through each substring
//     - Count the number of times the current substring appears in the given string
//     - If that number is greater than the current value of the variable tracking count, set
//       count equal to that count and set the common substring to that substring
//   - Return array containing current values for: common substring, count

function getSubstrings(string) {
  let substrings = [];
  for (let outer = 0; outer < string.length; outer += 1) {
    for (let inner = 1; inner < string.length + 1; inner += 1) {
      let substring = string.substring(outer, inner);
      if (substring.length > 1) {
        substrings.push(substring);
      }
    }
  }

  return substrings;
}

function countSubstrings(string) {
  if (typeof string !== 'string') {
    return;
  } else if (string.length === 0) {
    return ['', 0];
  }

  let substrings = getSubstrings(string);
  let largestCount = 0;
  let largestCountSubstring = '';
  substrings.forEach(substring => {
    console.log(substring);
    let regex = new RegExp(substring, 'g');
    console.log(regex);
    let count = string.match(regex).length;
    if (count > largestCount) {
      largestCount = count;
      largestCountSubstring = substring;
    }
  });

  return [largestCountSubstring, largestCount];
}

// Generic Cases
console.log(countSubstrings('ababab')); // ['ab', 3]
console.log(countSubstrings('aaaa')); // ['aa', 2]
console.log(countSubstrings('$$')); // ['$$', 1]

// Edge Cases
console.log(countSubstrings('')); ['', 0]
console.log(countSubstrings(42)); // undefined
console.log(countSubstrings()); // undefined
console.log(countSubstrings('ababab', false)); // ['ab', 3] 
