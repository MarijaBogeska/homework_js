// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

// Examples
// transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
// transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
// transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
// Notes
// Don't forget to return the result.
function transform(array) {
  let newArray = [];
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result = array[i] + 1;
      newArray.push(result);
    } else {
      result = array[i] - 1;
      newArray.push(result);
    }
  }
  return newArray;
}
let array = [3, 3, 4, 3];
console.log(transform(array));
