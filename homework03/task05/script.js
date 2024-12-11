// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50
function animals(chickens, cows, pigs) {
  let input01 = prompt("Enter a number of chickens:");
  chickens = Number.parseInt(input01);
  let input02 = prompt("Enter a number of cows:");
  cows = Number.parseInt(input02);
  let input03 = prompt("Enter a number of pigs:");
  pigs = Number.parseInt(input03);
  let chickensLegs = chickens * 2;
  let cowsLegs = cows * 4;
  let pigsLegs = pigs * 4;
  let numberOfLegs = chickensLegs + cowsLegs + pigsLegs;
  if (typeof chickens && typeof cows && typeof pigs === "number") {
    return numberOfLegs;
  } else {
    return NaN;
  }
}
console.log(animals());
// console.log(animals(1, 2, 3));
