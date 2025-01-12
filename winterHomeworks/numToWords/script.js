$(document).ready(function () {
  let inputBox = $("#inputBox");
  let wordBox = $("#wordBox");

  inputBox.on("input", function () {
    let input = inputBox.val().trim();
    console.log(input);
    let number = parseInt(input);

    if (isNaN(number) || number < 0 || number > 1e6) {
      wordBox.text("Please enter a valid number (0-1,000,000).");
      return;
    }
    let wordRepresentation = translate(number);
    wordBox.text(wordRepresentation);
  });
  let singleDigitNums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teenNums = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function translateSmallNum(num) {
    let word = "";
    if (num >= 100) {
      word += singleDigitNums[Math.floor(num / 100)] + " hundred ";
      num %= 100;
    }
    if (num >= 20) {
      word += tens[Math.floor(num / 10) - 2] + " ";
      num %= 10;
    }
    if (num >= 10) {
      word += teenNums[num - 10] + " ";
      num = 0;
    }
    if (num > 0) {
      word += singleDigitNums[num] + " ";
    }
    return word.trim();
  }
  function translate(number) {
    if (number === 0) {
      return "zero";
    }
    let word = ""; 
    
    if (number >= 1e6) {
      word += translateSmallNum(Math.floor(number / 1e6)) + " million ";
      number %= 1e6;
    }
    if (number >= 1e3) {
      word += translateSmallNum(Math.floor(number / 1e3)) + " thousand ";
      number %= 1e3;
    }
    if (number > 0) {
      word += translateSmallNum(number);
    }

    return word.trim();
  }
});
