// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well
function conversionDogYears(input, number) {
  input = prompt("Enter D for conversion to dog years or H to human years. ");
  switch (input) {
    case "D":
      number = parseInt(prompt("Enter a number:"));
      if (Number.isNaN(number)) {
        alert("Please enter a valid number.");
      } else {
        let conversion = number * 7;
        return conversion;
      }
      break;
    case "H":
      number = parseInt(prompt("Enter a number:"));
      if (Number.isNaN(number)) {
        alert("Please enter a valid number.");
      } else {
        let formula = parseInt(number / 7);
        return ` dog has ${formula} years. `;
      }
      break;
    default:
      return "Invalid input";
  }
}
console.log(conversionDogYears());
