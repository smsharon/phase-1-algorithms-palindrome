function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.toLowerCase().replace(/[^a-z]/g, '');

  for (let i = 0; i < newWord.length / 2; i++) {
    if (newWord[i] !== newWord[newWord.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase and remove non-letter characters, creating `newWord`.
  2. Loop through the first half of `newWord`.
  3. Compare each character from the beginning with its corresponding character from the end of `newWord`.
  4. If any pair of characters doesn't match, return false (not a palindrome).
  5. If all pairs of characters match, return true (is a palindrome).

  Written Explanation:
  The function `isPalindrome` takes a word as input and checks if it is a palindrome. First, it converts the word to lowercase and removes any non-letter characters using the regular expression `/[^a-z]/g`. This ensures that we only consider the letters for the palindrome check.

  Then, the function uses a loop to compare each character from the beginning of the `newWord` with its corresponding character from the end of the `newWord`. If at any point the characters don't match, the word is not a palindrome, and the function returns `false`. If all pairs of characters match, the word is a palindrome, and the function returns `true`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log(isPalindrome("level"));
  console.log(isPalindrome("car"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
