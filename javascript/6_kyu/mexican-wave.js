/* https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 *
 * In this simple Kata your task is to create a function that turns a string into a Mexican 
 * Wave. You will be passed a string and you must return that string in an array where an 
 * uppercase letter is a person standing up.
 */

// INPUT(S)
// - String, of characters
//
// OUTPUT(S)
// - Array, containing a snapshot of the argument string in various steps of a Mexican wave
//
// REQUIREMENTS / NOTES
// - Each "snapshot" should reflect the current character "waving", e.g., standing up, which 
//   means capitalized, if possible
//
// CLARIFICATIONS
// - Will the argument string only consist of lowercase letters? (No. It can consist of
//   other characters as well.)
// - How should the function handle non-lowercase letter characters? (It should represent them 
//   in their original form at their original position.)
// - How should the function handle string arguments with no lowercase letters? (It should
//   return an array with a single element: the string as-is.)
// - How should the function handle empty strings? (It should return an array with an empty
//   string in it.)
// - How should the function handle non-string arguments? (It should return undefined.)
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
// console.log(mexicanWave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
// console.log(mexicanWave('a')); // ['A']
// console.log(mexicanWave('ab3d)); // ['Ab3d', 'aB3d', 'ab3d', 'ab3D']
// console.log(mexicanWave(0)); // undefined
// console.log(mexicanWave('')); // ['']
// console.log(mexicanWave('1234')); // ['1234']
//
// DATA STRUCTURE(S)
// - Array, which enables index traversal
// - String, to track wave status
//
// ALGORITHM
// - Guard cases:
//   - If argument is not a string, return undefined
//   - If argument does not contain lowercase letters, return an array with the argument
//     string as its only element
// - Initialize variable and set it to empty array (`wave`)
// - Initialize variable and set it to length of argument string (`length`)
// - Loop `length` times using a for loop:
//   - Initialize variable and set it to empty string (`currentWave`)
//   - Loop through each character `currentChar` in the argument string:
//     - If the index of `currentChar` matches the loop number of the outer loop,
//       concat its uppercase version to `currentWave`
//     - Else, concat the character as-is
//   - Push `currentWave` to `wave`
// - Return `wave`

function mexicanWave(string) {
  if (typeof string !== 'string') {
    return; 
  }
  
  if (!/[a-z]+/.test(string)) {
    return [string]; 
  }
  
  let wave = [];
  let length = string.length;
  
  for (let idx = 0; idx < length; idx += 1) {
    let currentWave = '';
    string.split('').forEach((currentChar, charIdx) => {
      if (charIdx === idx) {
        currentWave += currentChar.toUpperCase(); 
      } else {
        currentWave += currentChar; 
      }
    });
    wave.push(currentWave);
  }
  
  return wave;
}

// Generic Cases
console.log(mexicanWave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
console.log(mexicanWave('a')); // ['A']
console.log(mexicanWave('ab3d')); // ['Ab3d', 'aB3d', 'ab3d', 'ab3D']

// Edge Cases
console.log(mexicanWave(0)); // undefined
console.log(mexicanWave('')); // ['']
console.log(mexicanWave('1234')); // ['1234']
