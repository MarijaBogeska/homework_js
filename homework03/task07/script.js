// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function plural(input) {
  input = prompt("Enter a word:");
  return input.endsWith("s");
}
console.log(plural());
