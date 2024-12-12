// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well
function conversionHumanToDogYears(input) {
  input = parseInt(prompt("Enter dog's age based on human years"));
  if (Number.isNaN(input)) {
    alert("Please enter a valid number.");
  } else {
    let conversion = input * 7;
    return conversion;
  }
}
function conversionDogToHumanYears(input) {
  input = parseInt(prompt("Enter dog's age based on dog years"));
  if (Number.isNaN(input)) {
    alert("Please enter a valid number.");
  } else {
    let formula = parseInt(input / 7);
    return ` dog has ${formula} years. `;
  }
}
console.log(conversionHumanToDogYears());
console.log(conversionDogToHumanYears());
