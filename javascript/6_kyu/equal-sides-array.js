/* https://www.codewars.com/kata/5679aa472b8f57fb8c000047
 *
 * You are going to be given an array of integers. Your job is to take that array and find an index N where 
 * the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there 
 * is no index that would make this happen, return -1.
 */

// INPUT(S)
// - Array, consisting of integers
//
// OUTPUT(S)
// - Number, such that that number index equalizes two "sides" of an array at that index
//   - Equal: Sum of integers to the left of index N is equal to sum of integers to the right of index N
//   - If "balance" isn't possible, return - 1
//
// REQUIREMENTS / NOTES
// 
//
// CLARIFICATIONS
// - Should the function handle non-array arguments? (No. All arguments will be arrays.)
// - How should the function handle empty arrays? (Return -1.)
// - Will argument arrays contain any other number values besides integers, e.g. NaN, Infinity, etc.? (No.)
// - Can an array be "balanced" if all of its elements sum to 0? (Yes, consider this balanced. Return 0.)
//   LEFT SIDE [-1, 1] RIGHT SIDE
// - Does "to the left" or "to the right" include the index being evaluated, or is the value at this
//   index removed from calculation? (Remove it from calculation.)
// - In cases where there are multiple balance points/indexes, which one should be returned?
//   (The first one.)
//
// EXAMPLES
// console.log(getBalancedIndex([1, 4, 1])); // 1
// console.log(getBalancedIndex([1, 0, 0, 0, 1])); // 1
// console.log(getBalancedIndex([-3, -1, 0, -2, -2])); // 2 
// console.log(getBalancedIndex([0])); // 0
// console.log(getBalancedIndex([1, 0])); // -1 (not possible)
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and reduction
//
// ALGORITHM
// - Step 1: Sum all the elements of an arbitrary array
//   - Loop through each element in a given array and add them to a running total
// - Step 2: Check for "balance"
//   - Loop through the indexes of a given array
//     - Calculate the sum of the subarray from idx 0 to current index, exclusive
//     - Calculate the sum of the subarray from (current index + 1) to end of array
//     - Return current index if both sums are equal
//   - Return -1

function getArraySum(array) {
  return array.reduce((total, current) => total + current, 0);
}

function getBalancedIndex(array) {
  if (getArraySum(array) === 0) {
    return 0; 
  }
  
  for (let idx = 0; idx < array.length; idx += 1) {
    let leftSideSum = getArraySum(array.slice(0, idx));
    let rightSideSum = getArraySum(array.slice(idx + 1));
    if (leftSideSum === rightSideSum) {
      return idx; 
    }
  }
  
  return -1;
}

// Generic Cases
console.log(getBalancedIndex([1, 4, 1])); // 1
console.log(getBalancedIndex([1, 0, 0, 0, 1])); // 1
console.log(getBalancedIndex([-3, -1, 0, -2, -2])); // 2 
console.log(getBalancedIndex([0])); // 0
console.log(getBalancedIndex([1, 0])); // 0
console.log(getBalancedIndex([1, 0, 2])); // -1
