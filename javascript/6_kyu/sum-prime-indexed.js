/* https://www.codewars.com/kata/59f38b033640ce9fc700015b
 *
 * In this Kata, you will be given an integer array and your task is to return
 * the sum of elements occupying prime-numbered indices.
 *
 * The first element of the array is at index 0.
 */


// INPUT(S)
// - Array, containing integers
//
// OUTPUT(S)
// - Number, representing the sum of the elements of the argument array
//
// REQUIREMENTS / NOTES
// - Function should sum together the elements in the PRIME-NUMBERED INDICES within
//   the given array
// - Prime numbers are numbers whose factors are ONLY 1 and that number, e.g.,
//   2, 3, 5, 7, 11...
//   - 0 and 1 are not prime numbers
//   - Negative numbers are not prime numbers
//
// CLARIFICATIONS
// - How should the function handle special Number values, e.g., Infinity, NaN? 
//   (Assume these will not be given.)
// - How should the function handle non-Number elements?
//   (If a non-Number element is present, return undefined.)
// - How should the function handle empty array arguments? (Return 0.)
// - How should the function handle a non-Array arguments? (Return undefined.)
// - How should the function handle too few arguments (< 1)? (Return undefined.)
// - How should the function handle too many arguments (> 1)? (Ignore the extras.)
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
// console.log(sumOfPrimeIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 21
// console.log(sumOfPrimeIndices([0, 0, 1, 1, 0, 1, 0, 1, 0])); // 4
// console.log(sumOfPrimeIndices([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); // 21
// console.log(sumOfPrimeIndices([])); // 0
// console.log(sumOfPrimeIndices([1, 'foo', 3])); // undefined
// console.log(sumOfPrimeIndices('foo')); // undefined
// console.log(sumOfPrimeIndices()); // undefined
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and reducing
//
// ALGORITHM
// - Step 1: Determine how to identify a prime number
//   - Guard case: If argument is less than 2, return false
//   - Loop from 2 to the argument number (exclusive):
//     - If the argument % current loop number === 0, return false
//   - Return true
// - Step 2: Guard cases
//   - Return undefined if:
//     - Argument is undefined
//     - Argument is not an array
//   - Return 0 if argument is empty array
// - Step 2 (remember guard case for non-number elements)
//   - Initialize a variable and assign to 0 (`sum`)
//   - Loop through array elements, adding an element to the accumulator
//     if the index is prime
//     - Guard case: If any argument is not a Number, return undefined
//   - Return `sum`

function isPrime(number) {
  if (number < 2) {
    return false; 
  }
  
  for (let current = 2; current < number; current += 1) {
    if (number % current === 0) {
      return false; 
    }
  }
  
  return true;
}

function sumOfPrimeIndices(array) {
  if (array === undefined || !Array.isArray(array)) {
    return undefined;    
  } else if (array.length === 0) {
    return 0; 
  }
  
  let sum = 0;
  for (let idx = 0; idx < array.length; idx += 1) {
    let current = array[idx];
    if (typeof current !== 'number') {
      return undefined; 
    } else if (isPrime(idx)) {
      sum += current; 
    }
  }
  
  return sum;
}

// Generic Cases
console.log(sumOfPrimeIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 21
console.log(sumOfPrimeIndices([0, 0, 1, 1, 0, 1, 0, 1, 0])); // 4

// Edge Cases
console.log(sumOfPrimeIndices([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); // 21
console.log(sumOfPrimeIndices([])); // 0
console.log(sumOfPrimeIndices([1, 'foo', 3])); // undefined
console.log(sumOfPrimeIndices('foo')); // undefined
console.log(sumOfPrimeIndices()); // undefined
