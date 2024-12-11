// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. Example remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainderFrom2Num(num01, num02) {
  let firstNumber = prompt("Enter the first number:");
  let secondNumber = prompt("Enter the second number:");
  num01 = Number.parseInt(firstNumber);
  num02 = Number.parseInt(secondNumber);
  let remainder = num01 % num02;
  if (typeof num01 && typeof num02 === "number") {
    return remainder;
  } else {
    return NaN;
  }
}
console.log(remainderFrom2Num());
