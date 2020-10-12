/* https://www.codewars.com/kata/55953e906851cf2441000032/train/ruby
 *
 * There is a message that is circulating via public media that claims a reader can easily read a 
 * message where the inner letters of each word are scrambled, as long as the first and last letters 
 * remain the same and the word contains all the letters.
 * 
 * Another example shows that it is quite difficult to read the text where all the letters are reversed 
 * rather than scrambled.
 * 
 * In this kata we will make a generator that generates text in a similar pattern, but instead of 
 * scrambled or reversed, ours will be sorted [alphabetically].
 */

// INPUT(S)
// - String
//
// OUTPUT(S)
// - String, which represents the original string, except that:
//   - First and last character are in the same positions
//   - All other characters in-between are sorted alphabetically
//
// REQUIREMENTS / NOTES
// - Write a function that takes a given string and returns a string that has all the same letters,
//   except that the first and last letters are the same as the original and the letters in-between
//   are sorted alphabetically.
//
// CLARIFICATIONS
// - Will the argument string only contain letters? (No.)
// - Will the string be a single word or consist of multiple words that need to be "scrambled"? (The
//   string may consist of multiple words. The only characters will be letters and spaces.)
// - Should per-letter case be maintained in the output? (Yes.)
// - How should the function handle non-string arguments? (Return undefined.)
// - How should the function handle too few arguments (< 1)? (Return undefined.)
// - How should the function handle too many arguments (> 1)? (Ignore extras.)
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
// console.log(scramble('Lakers')); // 'Laekrs'
// console.log(scramble('Los Angeles Lakers')); // 'Los Aeeglns Laekrs'
// console.log(scramble(824)); // undefined
// console.log(scramble()); // undefined
// console.log(scramble('Lakers', 23)); // 'Laekrs'
//
// DATA STRUCTURE(S)
// - Arrays, which enable index traversal, sorting, and slicing
//
// ALGORITHM
// - Guard cases:
//   - Return undefined if argument is not a string
// - Sub-problem: "Scrambling" individual words
//   - Ex: 'Lakers' => ['L'] + ['a', 'k', 'e', 'r'].sort()  + ['s'] => 'Laekrs'
//   - Initialize variable and set to first letter in word and store in an array
//   - Initialize variable and set to last letter in word and store in an array
//   - Initialize variable and set to intermediate letters in word and store in an array
//   - Sort (in-place) intermediate letters
//   - Concat first + intermediate + last and convert to string
// - Sub-problem: Creating the full string
//   - Split given string by ' '
//   - Loop through array of words from given string:
//     - Generate scrambled version of each word
//   - Return joined string from scrambled words

function scrambleWord(word) {
  let first = [word[0]];
  let last = [word[word.length - 1]];
  let middle = word.substring(1, word.length - 1).split('');
  
  return first.concat(middle.sort()).concat(last).join('');
}

function scramble(string) {
  if (typeof string !== 'string') {
    return;
  }

  let words = string.split(' ');
  return words.map(scrambleWord).join(' ');
}

// Generic Cases
console.log(scramble('Lakers')); // 'Laekrs'
console.log(scramble('Los Angeles Lakers')); // 'Los Aeeglns Laekrs'

// Edge Cases
console.log(scramble(824)); // undefined
console.log(scramble()); // undefined
console.log(scramble('Lakers', 23)); // 'Laekrs'
