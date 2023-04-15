// palindrome
// Write a function that takes a string and returns true if the string is a palindrome and false if it is not.  Include spaces and punctuation in determining if the string is a palindrome.

function palindrome(str) {
  // Good luck!
  var strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("car"));
