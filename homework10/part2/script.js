$(document).ready(function () {
  let textInp = $("#text");
  let colorInp = $("#color");
  let btn = $("button");
  let errorMessage = $("#errorMessage");

  btn.click(function () {
    let text = textInp.val();
    let color = colorInp.val();
    errorMessage.text("");
    if (!text || !CSS.supports("color", color)) {
      errorMessage.text("Invalid input");
    } else {
      let newH1 = $("<h1></h1>").text(text).css("color", color);
      $("button").after(newH1);
    }
  });
});
