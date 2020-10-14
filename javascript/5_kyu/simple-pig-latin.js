/* https://www.codewars.com/kata/520b9d2ad5c005041100000f
 * 
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks 
 * untouched.
 */

// INPUT(S)
// - String, consisting of words to convert to Pig Latin
//   - Pig Latin: Taking a word, moving its first letter to the end of the word, then appending "ay"
//
// OUTPUT(S)
// - String, representing the Pig Latin version of the given argument
//
// REQUIREMENTS / NOTES
// - Write a function that takes a string and transforms each word in the string as follows:
//   - Take the first letter of the word and move it to the end
//   - Append 'ay' after
// - Each letter in the new string should maintain its case from the original
//
// CLARIFICATIONS
// - Should I expect any non-string input types? (No. All arguments given will be strings.)
// - How should the function handle empty strings? (Return ''.)
// - How should the function address letter case, e.g., should letter case be maintained? (Yes.)
// - Will the argument strings given contain any other characters besides letters, spaces, and punctuation? (No.)
//
// EXAMPLES
// console.log(simplePigLatin('hello')); // 'ellohay'
// console.log(simplePigLatin('Hello')); // 'elloHay'
// console.log(simplePigLatin('Hello world!')); // 'elloHay orldway!'
// console.log(simplePigLatin('Hello world! How are you?')); // 'elloHay orldway! owHay reaay ouyay?'
// console.log(simplePigLatin('')); // ''
// console.log(simplePigLatin('!@#$')); // '!@#$'
//
// DATA STRUCTURE(S)
// - Strings, which enable index references and concatenation
// - Arrays, which enable element iteration and mapping
//
// ALGORITHM
// - Guard cases:
//   - Return empty string if argument is empty string
//   - Return original string if argument does not contain letters
// - Extract each word from the argument string and store in an array
// - Convert each word in that array to its Pig Latin equivalent
// - Replace each word in the original string with its Pig Latin equivalent
//   - Initialize a variable and set it to the return value of replacing the first word in the original string
//   - Loop through each word in the word array and replace the current word with its Pig Latin equivalent
// - Return the resulting string

function simplePigLatin(string) {
  if (typeof string === 'string' && string.length === 0) {
    return ''; 
  } else if (!/[A-Za-z]/g.test(string)) {
    return string;
  }
  
  const SUFFIX = 'ay';
  
  return string.replace(/\w+/g, (word) => {
    return word.slice(1) + word[0] + SUFFIX;
  });
}

// Generic Cases
console.log(simplePigLatin('hello')); // 'ellohay'
console.log(simplePigLatin('Hello')); // 'elloHay'
console.log(simplePigLatin('This is my string')); // 'hisTay siay ymay tringsay'
console.log(simplePigLatin('Hello world!')); // 'elloHay orldway!'
console.log(simplePigLatin('Hello world! How are you?')); // 'elloHay orldway! owHay reaay ouyay?'
console.log(simplePigLatin('')); // ''
console.log(simplePigLatin('!@#$')); // '!@#$'
