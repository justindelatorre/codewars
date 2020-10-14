/* https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
 *
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an 
 * array or list of integers.
 */

// INPUT(S)
// - Array, containing integers
//
// OUTPUT(S)
// - Number, representing the largest sum that can be found among all CONTIGUOUS subarrays derived from
//   the argument array
//
// REQUIREMENTS / NOTES
// - Write a function that takes an array of integers and returns the greatest sum that can be calculated
//   from a subarray consisting of contiguous elements from the original array.
//   - Contiguous: Adjacent to each other
//
// CLARIFICATIONS
// - Should the function expect other argument data types? (No.)
// - Will the argument array always contain integer elements? (Yes.)
// - Can a contiguous subarray be of length 1? (Must be 2 or longer.)
// - Subsequence applies to elements only, and not array object properties? (Yes. Ignore properties.)
// - How should the function handle empty arrays? (Return 0.)
// - Does sum refer to the actual value (considers negative less than positive) or absolute value? 
//   (Actual.) -24 < 8
// - Can I assume that the correct number of arguments will always be given, i.e., one array? (Yes.)
// - Can a contiguous subsequence be of the same length as the original array? (Yes.)
// - What if multiple subsequences have the same sum? (Keep the shortest, then the earliest.)
//
// EXAMPLES
// console.log(maxSum([1, 1, 1])); // [1, 1, 1] => 3
// console.log(maxSum([0, 0, 1, 1, -4)); // [1, 1]
// console.log(maxSum([-4, -1, -1, 0, 0])); // [0, 0]
// console.log(maxSum([])); // 0
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal and reduction
//
// ALGORITHM
// - Step 1: Get all possible subarrays 2 elements or longer from original array
//   - Initialize empty array to hold subarrays
//   - Initialize outer loop starting at 0 until less than length of argument (`inner`)
//     - Initialize inner loop starting at 1 until less than or equal to length of argument (`outer`)
//       - If the subarray of the original array from `inner` to `outer` (exclusive) is 2 elements or 
//         longer, push subarray to subarray array
//   - Return subarray array
// - Step 2: Create way to sum elements in an array
//   - Loop through each element and add each to a running total
// - Step 3: Find the subarray that sums to the largest sum
//   - Initialize a variable to track largest sum
//   - Loop through each subarray:
//     - If sum of element of current subarray are greater than current largest sum:
//       - Set largest sum to current sum
//   - Return largest sum

function getSubArrays(array) {
  let subArrays = [];
  for (let inner = 0; inner < array.length; inner += 1) {
    for (let outer = 1; outer <= array.length + 1; outer += 1) {
      let subArray = array.slice(inner, outer);
      if (subArray.length >= 2) {
        subArrays.push(subArray); 
      }
    }
  }
  
  return subArrays;
}

function sum(array) {
  return array.reduce((total, current) => total + current, 0); 
}


function maxSum(array) {
  let subArrays = getSubArrays(array);
  let largestSum = 0;
  subArrays.forEach(subArray => {
    let currentSum = sum(subArray);
    if (currentSum > largestSum) {
      largestSum = currentSum; 
    }
  });
  
  return largestSum;
}

// Generic Cases
console.log(maxSum([1, 1, 1])); // [1, 1, 1] => 3
console.log(maxSum([0, 0, 1, 1, -4])); // [1, 1] => 2
console.log(maxSum([-4, -1, -1, 0, 0])); // [0, 0] => 0
console.log(maxSum([0, 0, 0, 0, -1])); // [0, 0] => 0
console.log(maxSum([])); // 0
