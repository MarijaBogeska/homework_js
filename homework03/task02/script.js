// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2
function nextNum(input) {
  let number = prompt("Enter a number:");
  input = Number.parseInt(number);
  if (typeof input === "number") {
    return input + 1;
  } else {
    return NaN;
  }
}
console.log(nextNum());
