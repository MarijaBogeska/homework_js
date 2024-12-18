// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
// Notes
// Don't forget to return the result.

function check(array, number) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}
let array=[1,2,3,4,5];
let number=3;
console.log(check(array,number));