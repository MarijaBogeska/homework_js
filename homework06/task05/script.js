// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
// negate([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get an empty array, return an empty array: []

function negating(array) {
  let negativeArray = [];
  for (let i = 0; i < array.length; i++) {
    let result = array[i] * -1;
    negativeArray.push(result);
  }
  return negativeArray;
}
let array = [-1, 2, -3, 4];
console.log(negating(array));
