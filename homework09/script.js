// Create a dynamic table
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let btn = document.getElementById("btn").addEventListener("click", function () {
  let contentDiv = document.querySelector("#tableDiv");
  contentDiv.innerHTML = "";

  let inputs = document.getElementsByTagName("input");
  let rows = parseInt(inputs[0].value);
  let columns = parseInt(inputs[1].value);
  let content = `<table border="1" style="border-collapse: collapse; margin: 20px;">`;

  for (let i = 1; i <= rows; i++) {
    content += `<tr>`;
    for (let j = 1; j <= columns; j++) {
      content += `<td style="padding:10px;">Row-${i} Column-${j}</td>`;
    }
    content += `</tr>`;
  }
  content += `</table>`;

  contentDiv.innerHTML = content;

  console.log(inputs[0].value);
});
