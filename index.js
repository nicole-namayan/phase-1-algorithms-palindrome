function reverse(word) {
  // 'abc' === 'cba'
 // const wordArray = word.split("");
 // const reversedwordArray = wordArray.reverse();
 // const reversedWord = reversedwordArray.join("");
  //return reversedWord;
  return word.split("").reverse().join('');

} 


function isPalindrome(word) {
   // Write your algorithm here
   //if the word is the same as the one in reverse return true
   //reverse the input string
   const reverseWord = reverse(word)

   //if the input is the same as the reversed input
   if (word === reverseWord) {
     return true
    }else {
      return false
    }

}
/* 
 // if the word is the same as the one in reverse return true
  //reverse the input string
  //if the input is the same as the reversed input
  //return true
  //else 
  //return false
*/

/*
  Add written explanation of your solution here
  //make a function that returns true if a word is palindrome and false if not
 //it means if the word is the same as the one in reverse,return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting:true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
