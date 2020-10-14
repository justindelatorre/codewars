// 'whats the matter with kansas?' => 'stahw the rettam with sasnak?'

function scrambleWords(string) {
  let regex = /[a-z]{5,}/gi;
  let wordsToReplace = string.match(regex);
  let wordsReversed = wordsToReplace.map(word => word.split('').reverse().join(''));
  
  let newString = string.replace(wordsToReplace[0], wordsReversed[0]);
  wordsToReplace.forEach((word, idx) => {
    newString = newString.replace(wordsToReplace[idx], wordsReversed[idx]);
  });
  
  return newString;
}

console.log(scrambleWords('whats the matter with kansas?')); // 'stahw the rettam with sasnak?'
