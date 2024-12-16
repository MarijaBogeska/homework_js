// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
function validateNumber(array) {
  for (let i = 0; i < array.length; i++) {
    let num = parseInt(array[i]);
    if (Number.isNaN(num)) {
      return "Invalid input";
    } 
  }
  return sum(array);

}
let array01 = [1, 3, 8, 5];
console.log(validateNumber(array01));
let array02= [1," ",3,5];
console.log(validateNumber(array02));
