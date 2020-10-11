/* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d 
 *
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their places.
 *
 * Zero isn't an odd number and you don't need to move it. If you have an empty array, you
 * need to return it.
 */

// INPUT(S)
// - Array
//
// OUTPUT(S)
// - Array, sorted according to the stated requirements
//
// REQUIREMENTS / NOTES
// - The function must sort ascending odd numbers, i.e., elements with an odd number
//   value should be sorted relative to the places where those values are in the original
//   array.
// - 0 and even numbers should stay in their original index.
// - If the argument array is empty, return an empty array.
// - Some array elements may be negative and/or non-integers.
// - The function should return a new array.
// - Special numbers, e.g., NaN and Infinity, and non-numbers should be left in their 
//   original place.
//
// CLARIFICATIONS
// - Will any of the array elements be negative? (Yes. => Should check for odd or even.)
// - Will any of the array elements be non-integer numbers? (Yes. => Leave in place.)
// - Should the function return the original array (mutated) or a new array? (New array.)
// - How should the function handle non-number type elements? (Leave them in their place.)
// - How should the function handle elements that are special numbers like NaN and 
//   Infinity? (Leave them in their place.)
// - How should the function handle non-array arguments? (Return undefined.)
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
// - [1, 2, 5, 4, 3, 6] => [1, 2, 3, 4, 5, 6]
// - [5, 2, 1, 2, 3, 2] => [1, 2, 3, 2, 5, 6]
// 
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and sorting
//
// ALGORITHM
// - Guard cases:
//   - If argument is not an array, return undefined
//   - If argument is an empty array, return []
// - Part 1: Grab all the odd elements in the original array
//   - Initialize variable and assign to empty array `odds`
//   - Filter argument array for odd elements: must be typeof 'number' and remainder 1 
//     when dividing by 2
//   - Assign resulting array to `odds`
//   - Sort array from smallest to largest
// - Part 2: Map values from original array according to "odd-ness"
//   - Map through all elements in original array:
//     - If the element is odd, return the element shifted from `odds`
//     - Else, return the current element
//   - Return the result
//

function isOdd(element) {
  return typeof element === 'number' && element % 2 === 1; 
}

function oddSort(array) {
  if (!Array.isArray(array)) {
    return; 
  }
  
  if (array.length === 0) {
    return []; 
  }
  
  let odds = array.filter(isOdd).sort((a, b) => a - b);
  
  return array.map(element => {
    if (isOdd(element)) {
      return odds.shift(); 
    } else {
      return element; 
    }
  });
}

// Generic Cases
console.log(oddSort([1, 2, 5, 4, 3, 6])); // [1, 2, 3, 4, 5, 6]
console.log(oddSort([5, 2, 1, 0, 3, 2])); // [1, 2, 3, 0, 5, 2]
console.log(oddSort([5, NaN, 1, Infinity, 3, 'foo'])); // [1, NaN, 3, Infinity, 5, 'foo']

// Edge Cases
console.log(oddSort([])); // []
console.log(oddSort('foo')); // undefined
