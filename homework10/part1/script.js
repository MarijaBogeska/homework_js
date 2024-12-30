$(document).ready(function () {
  let input = $("input");
  let btn = $("button");
  let message = $("#message");

  btn.click(function () {
    let greetingMessage = input.val();
    message.text(`Hello there ${greetingMessage}`);
  });
});
