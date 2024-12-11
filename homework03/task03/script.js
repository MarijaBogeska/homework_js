// Write a function that converts hours into seconds.
function hoursToSeconds(input) {
  let number = prompt("Enter hours:");
  input = Number.parseInt(number);
  let seconds = input * 3600;
  if (typeof input === "number") {
    return seconds;
  } else {
    return NaN;
  }
}
console.log(hoursToSeconds());