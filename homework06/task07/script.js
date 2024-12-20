// Create a function to multiply all values in an array by the amount of values in that array.

// Examples
// MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// MultiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
// MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
// MultiplyByLength([0]) ➞ ([0])
// Notes
// Don't forget to return the result.
// Try using array Length as a multiplier
function multiplyByLength(array) {
  let newArray = [];
  let j = array.length;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * j;
    newArray.push(array[i]);
  }
  return newArray;
}
let array = [1, 0, 3, 3, 7, 2, 1];
console.log(multiplyByLength(array));
