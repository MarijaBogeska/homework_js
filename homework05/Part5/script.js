// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it
function sumOfMinAndMax(array) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      continue;
    } else if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  let sum = max + min;
  return sum;
}
let array = [9, 2, 3, " kk", false, 4, 1];
console.log(sumOfMinAndMax(array));
