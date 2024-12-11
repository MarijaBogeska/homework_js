//Write a function that takes an integer minutes and converts it to seconds.
//convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
function minutesToSeconds(input) {
  let minutes = prompt("Enter a minutes:");
  input = Number.parseInt(minutes);
  let seconds = input * 60;
  if (typeof input === "number") {
    return seconds;
  } else {
    return NaN;
  }
}
console.log(minutesToSeconds());