$(document).ready(function () {
  let inputs = [];
  let lastInput = "";
  let displayInput = $("#input");
  let displayOperation = $("#result");

  function showOnDisplay() {
    displayInput.text(inputs.join(" ") + (lastInput || ""));
  }

  $(".number").click(function () {
    let value = $(this).val();
    lastInput += parseFloat(value);
    showOnDisplay();
  });

  $(".operators").click(function () {
    let value = $(this).val();
    if (lastInput) {
      inputs.push(parseFloat(lastInput));
      lastInput = "";
    }
    if (inputs.length > 0 && typeof inputs[inputs.length - 1] !== "string") {
      inputs.push(value);
    }
    showOnDisplay();
  });

  $("#dot").click(function () {
    if (!lastInput.includes(".")) {
     if(lastInput === ""){
      lastInput="0.";
     } else{
      lastInput+="."
     }
     showOnDisplay();
    }
  });

  $("#reset").click(function () {
    displayInput.text("");
    displayOperation.text(" ");
    lastInput = "";
    inputs = [];
  });

  $("#delete").click(function () {
    if (lastInput) {
      lastInput = lastInput.slice(0, -1);
    } else if (inputs.length > 0) {
      inputs.pop();
    }
    showOnDisplay();
  });

  $("#equal").click(function () {
    if (lastInput) {
      inputs.push(parseFloat(lastInput));
      lastInput = "";
    }
    displayOperation.text(inputs.join(" ") + (lastInput || "") + "=");

    let result = calculate(inputs);
    displayInput.text(result);
    inputs = [result];
    function calculate(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === "*" || array[i] === "/") {
          let operator = array[i];
          let leftNum = array[i - 1];
          let rightNum = array[i + 1];
          let result =
            operator === "*" ? leftNum * rightNum : leftNum / rightNum;
          array.splice(i - 1, 3, result);
          i--;
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (array[i] === "+" || array[i] === "-") {
          let operator = array[i];
          let leftNum = array[i - 1];
          let rightNum = array[i + 1];
          let result =
            operator === "+" ? leftNum + rightNum : leftNum - rightNum;
          array.splice(i - 1, 3, result);
          i--;
        }
      }
      return array[0];
    }
  });
});
