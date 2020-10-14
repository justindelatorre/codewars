/* https://www.codewars.com/kata/523a86aa4230ebb5420001e1
 *
 * Write a function that will find all the anagrams of a word from a list.
 * You will be given two inputs: a word and an array with words. You should
 * return an array of all the anagrams or an empty array if there are none.
 */

// INPUT(S)
// - String, representing a target word
// - Array, containing words to evaluate
//   - Will each array element contain only a single word, or strings that may
//     hold multiple words? (Single word per element.)
//   - Will all words to be considered be elements, or can some be object values?
//     (Some may be values.)
//
// OUTPUT(S)
// - Array, containing anagrams from second argument, or empty if none exist
//
// REQUIREMENTS / NOTES
// - Write a function that takes a string and an array of word strings and return an array
//   of words from the latter that are anagrams of the former.
// - Return an empty array if either argument is empty.
// - Ignore case when comparing anagrams.
//
// CLARIFICATIONS
// - Should the function be able to handle non-string arguments for the first argument
//   and/or non-array elements for the second? (Always expect a string and array in order.)
// - How should the function handle empty strings for the first argument? (Return [].)
// - How should the function handle empty arrays for the second argument? (Return [].)
// - Can we assume that the array argument will always contain strings? (Yes.)
// - What characters will be found in either the first or second argument? (Only letters.)
// - Should anagrams consider letter case, e.g., 'Anna' => 'naan'? (Ignore case.)
//   [TODO: Downcase when comparing.]
//
// EXAMPLES
// console.log(anagrams('Anna', ['Nana', 'naan', 'aa', 'nan', 'NaN'])); // ['Nana', 'naan']
// console.log(anagrams('basketball', ['xylophone', 'fruit', 'bag'])); // []
// console.log(anagrams('Anna', ['Nana', 'aa', 'foo': 'naan'])); // ['Nana', 'naan']
// console.log(anagrams('Anna', [])); // []
// console.log(anagrams('', ['Nana', 'naan', 'aa', 'nan', 'NaN'])); // []
//
// DATA STRUCTURE(S)
// - Array, which enables element sorting and accessing object values
//
// ALGORITHM
// - Guard cases:
//   - Return [] if either argument is empty
// - Initialize variable and set to downcased version of first argument
// - Initialize variable and set to empty string to hold anagrams
// - Loop through each element in second argument:
//   - Compare downcased target to downcased current element:
//     - Split each into an array of characters
//     - Sort those characters
//     - Join each respective resulting array
//     - Compare the resulting strings
//   - Add the orignal version of current element to anagram array
// - Return anagram array

function anagrams(target, words) {
  if (target.length === 0 || words.length === 0) {
    return []; 
  }
  
  const downcasedTarget = target.toLowerCase().split('').sort().join('');
  let anagrams = [];
  Object.values(words).forEach(word => {
    let compareWord = word.toLowerCase().split('').sort().join('');
    if (compareWord === downcasedTarget) {
      anagrams.push(word);
    }
  });
  
  return anagrams;
}

// Generic Cases
console.log(anagrams('Anna', ['Nana', 'naan', 'aa', 'nan', 'NaN'])); // ['Nana', 'naan']
// 'Anna' => 'anna' => 'aann'
// 'nana' => 'aann', 'naan' => 'aann', 'aa' => 'aa', 'nan' => 'ann', 'nan' => 'ann'
// ['Nana', 'naan']
console.log(anagrams('basketball', ['xylophone', 'fruit', 'bag'])); // []

// Considering array object properties
let someArray = ['Nana', 'aa'];
someArray.foo = 'naan';
console.log(anagrams('Anna', someArray)); // ['Nana', 'naan']

console.log(anagrams('Anna', [])); // []
console.log(anagrams('', ['Nana', 'naan', 'aa', 'nan', 'NaN'])); // []
