// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]
// Notes
// Don't forget to return the result.
// The argument will always be greater than or equal to zero.
function countdown(number) {
  let array = [];
  for (let i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
let num = 5;
console.log(countdown(num));
