/* https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
 *
 * Write a function named firstNonRepeating that takes an input, and returns the first character that is not repeated 
 * anywhere in the argument.
 */

// INPUT(S)
// - String, Number, or Array
//   - String:
//     - Empty strings? (Return undefined.)
//     - What is a valid character? (All characters are valid.)
//   - Number:
//     - How should the function handle NaN, Infinity, fractions, etc.? (Only positive integers will be given.)
//   - Array:
//     - What data types will array elements be? (String characters and number digits.)
//     - How should the function handle empty arrays? (Return undefined.)
//     - Does an <empty item> count as a "character" or "digit"? (No.)
//     - Should the function consider array object properties as valid characters or digits? (No.)
//
// OUTPUT(S)
// - Either a String or Number, whatever the data type of the repeating character is.
//
// REQUIREMENTS / NOTES
// - Create a function that takes either a String, Number, or Array as an argument and returns the FIRST character or digit that
//   is not repeated in the argument, with the output being the same data type as non-repeating value.
// - Non-letter and non-digit characters are considered valid characters.
// - Return undefined if:
//   - Argument is not a String, Number, or Array
//   - String is empty
//   - Array is empty
//   - No arguments are provided
//
// CLARIFICATIONS
// - What are the valid input data types? (String, Number, Array. All else are invalid, so return undefined.)
// - In what format should the output be? (The same data type as the non-repeating character.)
//   - Ex:
//     - 'aabccdd' => 'b'
//     - 'aabccd' => 'b'
//     - '#$%@#$%' => '@'
//     - 11233 => 2 (number)
//     - [1, 1, 2, 3, 3] => 2 (number, because element is number)
// - How should the function handle too few or too many arguments? (Too few: Return undefined. Too many: Ignore extras.)
//
// EXAMPLES
// console.log(firstNonRepeating('aabccdd')); // 'b'
// console.log(firstNonRepeating('aabccd')); // 'b'
// console.log(firstNonRepeating('#$%@#$%')); // '@'
// console.log(firstNonRepeating(11233)); // 2
// console.log(firstNonRepeating([1, 1, 2, 3, 3])); // 2
// console.log(firstNonRepeating(false)); // undefined
// console.log(firstNonRepeating('')); // undefined
// console.log(firstNonRepeating([])); // undefined
// console.log(firstNonRepeating()); // undefined
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and filtering of elements
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if:
//     - Argument is not a String, Number, or Array
//     - Argument is an empty String or Array
// - If argument is not an array, coerce into an array:
//   - If string, split into an array of characters
//   - If number, coerce to string then split into array of digit characters
//     - Map all string digits back to number type digits
// - Filter resulting array for elements that show up only once
// - Return the first element in the filtered array, in its original data type

function firstNonRepeating(input) {
  if (typeof input !== 'string' && typeof input !== 'number' && !Array.isArray(input)) {
    return;
  } else if (input.length === 0) {
    return; 
  }
  
  let holderArray;
  if (typeof input === 'string') {
    holderArray = input.split('');
  } else if (typeof input === 'number') {
    holderArray = String(input).split('').map(digitString => Number(digitString));
  } else { // input is an array
    holderArray = input; 
  }
  
  let oneInstance = [];
  holderArray.forEach(outerElement => {
    if (holderArray.filter(innerElement => outerElement === innerElement).length === 1) {
      oneInstance.push(outerElement);
    }
  });
  
  return oneInstance[0];
}

// Generic Cases
console.log(firstNonRepeating('aabccdd')); // 'b'
console.log(firstNonRepeating('aabccd')); // 'b'
console.log(firstNonRepeating('#$%@#$%')); // '@'
console.log(firstNonRepeating(11233)); // 2
// '11233' => ['1', '1', '2', '3', '3'] => [1, 1, 2, 3, 3] => [2][0] => 2
console.log(firstNonRepeating([1, 1, 2, 3, 3])); // 2

// Edge Cases
console.log(firstNonRepeating(false)); // undefined
console.log(firstNonRepeating('')); // undefined
console.log(firstNonRepeating([])); // undefined
console.log(firstNonRepeating()); // undefined
