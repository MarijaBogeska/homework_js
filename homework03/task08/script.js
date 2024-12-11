// Write a function that validates whether two strings are identical. Make it case insensitive.
function match(input01, input02) {
  input01 = prompt("Enter the first string:");
  input02 = prompt("Enter the second string:");
  return input01.toLowerCase() === input02.toLowerCase();
}
console.log(match());
