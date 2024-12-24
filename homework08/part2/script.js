// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let array = [1, 2, 3, 4, 5];
let contentDiv = document.querySelector("#content");
let contentForSum = document.querySelector("#sum");
function printArray(array, element) {
  element.innerHTML = "";
  let content = "<ul>";
  for (let i = 0; i < array.length; i++) {
    content += `<li> ${array[i]}</li>`;
  }
  content += "</ul>";
  element.innerHTML = content;
}
printArray(array, contentDiv);

function printSum(array, element) {
  element.innerHTML = "";
  let content = `<p> Sum:`;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      content += " +";
    }
    sum += array[i];
    content += ` ${array[i]}`;
  }
  content += `= ${sum}`;
  content += `</p>`;
  element.innerHTML = content;
}
printSum(array, contentForSum);
