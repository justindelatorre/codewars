// 10:07 - 11:02 (Finished at 11:11)
// Create a way to take a value and encode it by four spaces. For example ‘a’ becomes ‘e’.
// 'a' => 'e' => 'a', 'b', 'c', 'd', 'e'
// 1 => 5
// 'z' => 

// INPUT(S)
// - String, Number, or Array
//   - In arrays, valid elements include strings and numbers
//   - Strings:
//     - '' => "Invalid value"
//   - Numbers: 0 and positive integers
//     - Floats: Will not get floats
//     - NaN: invalid value
//     - +/- Infinity: invalid value
//   - Arrays: All arrays given will possess elements
//     - No empty arrays
//     - Return a new array
//
// OUTPUT(S)
// - Return value of the same data type as the argument, unless the argument is invalid. In that case,
//   return "Invalid value."
//
// REQUIREMENTS / NOTES
// - Assume letters (lowercase only) and numbers will wrap-around
//   -123 -> 567
//   - Digits can only go from 0-9
//   - Letters go from 'a' - 'z'
// 
//
// CLARIFICATIONS
// - What does "four spaces" mean? What is a "space"? (Progress four units "forward".)
// - What data type(s) should the function(?) expect? (Strings, Numbers, elements within an array. Any other
//   data types are considered invalid => return "invalid input". Return "invalid input" at the appropriate
//   level, e.g., function-level or array element-level)
// - How should the function handle array "properties"? (No sparse arrays and no array object properties.)
// - What should either the return value or output log or side effect of the function be?
//   (Return in the same format as given for valid inputs. Otherwise, return "invalid input".)
// - How should the function handle too few arguments (< 1)? (Invalid input)
// - How should the function handle too many arguments (> 1)? (Ignore extras.)
// - How should the function treat non-digit, non-letter characters, e.g, '#'? (Any character in a string is
//   "valid", but only letters and digits are rotated.)
//   - 'a1' => 'e5' | 'a1$' => 'e5$'
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
// console.log(encode('a')); // 'e'
// console.log(encode(1)); // 5
// console.log(encode('a1')); // 'e5'
// console.log(encode(['a', 1])); // ['e', 5];
// console.log(encode('z')); // 'd'
// console.log(encode(9)); // 3
// console.log(encode(['z', 9])); // ['d', 3]
// 
// console.log(encode('a1$')); // 'e5$'
// console.log(encode(['a', 'a1$'])); // ['e', 'e5$'] 
// console.log(encode(['a', NaN])); // ['e', "Invalid input"]
// console.log(encode('')); // "Invalid input"
// console.log(encode(NaN)); // "Invalid input"
// console.log(encode(Infinity)); // "Invalid input"
//
// DATA STRUCTURE(S)
// - Array, enable index traversal, individual element manipulation, other abstractions
//
// ALGORITHM
// - Guard cases:
//   - Return 'Invalid input' if:
//     - Argument is a string and is empty
//     - Argument is NaN
//     - Argument is a number and is infinite
// - Sub-problem: Rotating characters
//   - ALPHA[0] -> ALPHA[0 + ROTATION]
//   - ALPHA[25] ('z') -> ALPHA[ALPHA.length - 1] -> ALPHA[29] -> ALPHA[3] -> ALPHA[29 - 26]
//   - Find the corresponding index of the character in the appropriate constant
//   - Add ROTATION (4) to that index and return the element/character at that new index
//     - If the index flows over the length of the corresponding constant, add ROTATE_BACK first, then return
//       the corresponding value
// - Sub-problem: Iterating through each "character/digit/element" and performing rotation
//   - Make sure to remember what the original data type of the argument was
//   - If possible, coerce the argument into a string. Else, keep as an array.
//     - Split the string into individual string elements
//   - Loop through each element and rotate accordingly
//   - If originally a string, join elements together and return that
//   - If originally a number, join elements together, convert back to number, return that
//   - If originally an array, return array with rotated elements
//

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ROTATION = 4;

function rotate(char) {
  let charIndex;
  if (ALPHA.includes(char)) {
    charIndex = ALPHA.indexOf(char);
    charIndex += ROTATION;
    if (charIndex > ALPHA.length - 1) {
      charIndex -= ALPHA.length; 
    }
    return ALPHA[charIndex];
  } else if (NUMBERS.includes(char)) {
    charIndex = NUMBERS.indexOf(char);
    charIndex += ROTATION;
    if (charIndex > NUMBERS.length - 1) {
      charIndex -= NUMBERS.length; 
    }
    return NUMBERS[charIndex];
  } else if (typeof char !== 'string') { // TODO
    return 'Invalid input';
  } else { // No rotation
    return char; 
  }
}

function encode(input) {
  if (typeof input === 'string' && input.length === 0) {
    return 'Invalid input';
  } else if (Number.isNaN(input)) {
    return 'Invalid input';
  } else if (typeof input === 'number' && !isFinite(input)) {
    return 'Invalid input';
  }
  
  let dataType = typeof input;
  let holderArray;
  if (dataType === 'string') {
    holderArray = input.split('');
  } else if (dataType === 'number') {
    holderArray = String(input).split('');
  } else { // input is an array
    holderArray = input; 
  }
  
  let rotatedArray = holderArray.map(element => {
    if (typeof element === 'string') {
      return element.split('').map(rotate).join(''); 
    } else if (typeof element === 'number' && isFinite(element) && !Number.isNaN(element)) {
      return String(element).split('').map(rotate).join('');
    } else {
      return rotate(element);              
    }
  });
  
  if (dataType === 'string') {
    return rotatedArray.join(''); 
  } else if (dataType === 'number') {
    return Number(rotatedArray.join(''));
  } else {
    return rotatedArray;
  }
  
  return "I'm screwed.";
}

// Generic Cases
console.log(encode('a')); // 'e'
console.log(encode(1)); // 5
console.log(encode('a1')); // 'e5'
console.log(encode(['a', 1])); // ['e', 5];
console.log(encode('z')); // 'd'
console.log(encode(9)); // 3
console.log(encode(['z', 9])); // ['d', 3]

// Edge Cases
console.log(encode('a1$')); // 'e5$'
console.log(encode(['a', 'a1$'])); // ['e', 'e5$'] 
console.log(encode(['a', NaN])); // ['e', "Invalid input"]

console.log(encode('')); // "Invalid input"
console.log(encode(NaN)); // "Invalid input"
console.log(encode(Infinity)); // "Invalid input"
// console.log(encode('a?b#c'));// 'e?f#g'

// what are my exact rules
// what are my edge cases
// How do i separate this into smaller problems

// Input type
// special values
// combinations
// invalid inputs
