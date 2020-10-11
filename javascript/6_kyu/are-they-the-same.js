/* https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript 
 * 
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
 * that checks whether the two arrays have the "same" elements, with the same 
 * multiplicities. "Same" means, here, that the elements in b are the elements in a 
 * squared, regardless of the order.
 */

// INPUT(S)
// - (2) Arrays
//
// OUTPUT(S)
// - Boolean, indicating whether elements in second array are the elements in first
//   array SQUARED, REGARDLESS of the order of the elements in the second array
//
// REQUIREMENTS / NOTES
// - Each element in the second array must correspond to the square of an element in
//   the first array
//
// CLARIFICATIONS
// - Will both arrays be the same length? (Yes.)
// - Will both arrays contain exclusively finite, Integer elements? (Yes.)
// - Must the relationship between elements in both arrays be one-to-one, e.g.,
//   [1, 2, 3] => [1, 4, 9]? (Yes.)
// - How should the function handle either or both arguments being empty or sparse arrays?
//   (Return false in either case.)
// - How should the function handle invalid data types for each argument? (Return 
//   undefined.) 
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
// comp([1, 2, 3], [1, 4, 9]); // true
// comp([], [1]); // []
// comp([1], []); // []
// comp(false, [1]); // undefined
// comp([1], false); // undefined
//
// DATA STRUCTURE(S)
// - Array, which enables indexed iteration
//
// ALGORITHM
// - Guard cases:
//   - If either argument is not an array, return undefined
//   - If either element is an empty array, return []
// - Initialize two variables and set each one to each of the arguments sorted from
//   smallest to largest
// - Initialize variable and set to length of one of the arrays
// - Loop from index 0 to less than length of the arrays:
//   - Return false if the element at the current index in the second array is not
//     equal to the element in the first at that index, squared
// - Return true

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return; 
  }
  
  if (array1.length === 0 || array2.length === 0) {
    return []; 
  }
  
  let firstArraySorted = array1.sort((a, b) => a - b);
  let secondArraySorted = array2.sort((a, b) => a - b);
  let length = array1.length;
  
  for (let idx = 0; idx < length; idx += 1) {
    if (firstArraySorted[idx] ** 2 !== secondArraySorted[idx]) {
      return false; 
    }
  }
  
  return true;
}

// Generic Cases
console.log(comp([1, 2, 3], [1, 4, 9])); // true
console.log(comp([1, 2, 3], [4, 1, 9])); // true
console.log(comp([1, 2, 3], [1, 3, 9])); // false

// Edge Cases
console.log(comp([], [1])); // []
console.log(comp([1], [])); // []
console.log(comp(false, [1])); // undefined
console.log(comp([1], false)); // undefined
// console.log(comp(array1, array2));
