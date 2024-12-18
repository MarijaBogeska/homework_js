// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
// Notes
// Don't forget to return the result.
function reverse(array) {
  let result=[];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]) ;
  }
  return result;
}
let arr = [1, 2, 3, 4];
console.log(arr.length)
console.log(reverse(arr));
