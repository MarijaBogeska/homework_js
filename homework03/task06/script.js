// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// compare("AB", "CD") ➞ true
// compare("ABC", "DE") ➞ false
// compare("hello", "sedc") ➞ false
function stringsComparation(input01, input02) {
  input01 = prompt("Enter the first string:");
  input02 = prompt("Enter the second string:");
  let lengthOfInput01 = input01.length;
  let lengthOfInput02 = input02.length;
  if (lengthOfInput01 === lengthOfInput02) {
    return true;
  } else {
    return false;
  }
}
console.log(stringsComparation());
