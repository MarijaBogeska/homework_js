let input = prompt("Write your birth year:");
let year = parseInt(input);
let formulaOfZodiac = (year - 4) % 12;
if (Number.isNaN(year)) {
  alert("Write a valid year");
} else {
  if (formulaOfZodiac == 0) {
    alert("Your chinese zodiac is Rat");
  } else if (formulaOfZodiac == 1) {
    alert("Your chinese zodiac is Ox");
  } else if (formulaOfZodiac == 2) {
    alert("Your chinese zodiac is Tiger");
  } else if (formulaOfZodiac == 3) {
    alert("Your chinese zodiac is Rabbit");
  } else if (formulaOfZodiac == 4) {
    alert("Your chinese zodiac is Dragon");
  } else if (formulaOfZodiac == 5) {
    alert("Your chinese zodiac is Snake");
  } else if (formulaOfZodiac == 6) {
    alert("Your chinese zodiac is Horse");
  } else if (formulaOfZodiac == 7) {
    alert("Your chinese zodiac is Goat");
  } else if (formulaOfZodiac == 8) {
    alert("Your chinese zodiac is Monkey");
  } else if (formulaOfZodiac == 9) {
    alert("Your chinese zodiac is Rooster");
  } else if (formulaOfZodiac == 10) {
    alert("Your chinese zodiac is Dog");
  } else if (formulaOfZodiac == 11) {
    alert("Your chinese zodiac is Pig");
  }
}
