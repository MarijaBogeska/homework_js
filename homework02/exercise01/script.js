let input = prompt("How much money do you have?");
let number = parseInt(input);
if (Number.isNaN(number)) {
  alert("Please enter a valid number");
} else {
  if (number >= 50) {
    alert("You should go out to a dinner and a movie");
  } else if (number >= 35) {
    alert("You should go out to a fine meal.");
  } else if (number >= 12) {
    alert("You should see a movie");
  } else {
    alert("Loooks like you will be watching TV.");
  }
}
