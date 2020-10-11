/* https://www.codewars.com/kata/541c8630095125aba6000c00
 *
 * The digital root is the recursive sum of all the digits in a number.
 *
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue 
 * reducing in this way until a single-digit number is produced. The input will be a non-
 * negative integer.
 */

// INPUT(S)
// - Number, a non-negative integer
//
// OUTPUT(S)
// - Number, representing the "digital root" / "recursive sum" of the argument
//
// REQUIREMENTS / NOTES
// - Recursive sum:
//   - If a number has more than 1 digit, add the component digits
//   - If the result has more than 1 digit, add the component digits
//   - Continue this process until the resulting sum has only one digit
// - All arguments will be non-negative integers.
//
// CLARIFICATIONS
// - Will the argument always be of data type number? Should it handle integers that are
//   represented as strings? (It will always be of data type number.)
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
// console.log(getDigitalRoot(99)); // 9
// console.log(getDigitalRoot(143)); // 7
// console.log(getDigitalRoot(9999)); // 9
// console.log(getDigitalRoot(8888)); // 5
// console.log(getDigitalRoot(6789)); // 5
//
// DATA STRUCTURE(S)
// - Array, which enables reducing
//
// ALGORITHM
// - Step 1: Convert the argument into an array of digits
//   - Coerce argument into a string and split it into array of digit strings
//   - Initialize a variable `digits` and assign it to mapped version of digit string array
//     containing the number digit equivalents of said digit strings
// - Step 2: Recursively add digits
//   - Initialize a variable to track the sum of digit addition
//   - While digits is greater than length 1, loop through `digits`:
//     - Accumulate each element by adding all of them in a sum
//     - Re-assign `digits` to the the return value of that sum
// - Step 3: Return result

function getDigits(number) {
  let digitStrings = String(number).split('');
  return digitStrings.map(digitString => Number(digitString));
}

function getDigitalRoot(number) {
  let digitsArray = getDigits(number);
  
  let sum = 0;
  while (digitsArray.length > 1) {
    sum = digitsArray.reduce((total, current) => total + current, 0);
    digitsArray = getDigits(sum);
  }
  
  return sum;
}

// Generic Cases
console.log(getDigitalRoot(99)); // 9
console.log(getDigitalRoot(143)); // 8
console.log(getDigitalRoot(9999)); // 9
console.log(getDigitalRoot(8888)); // 5
console.log(getDigitalRoot(6789)); // 3
