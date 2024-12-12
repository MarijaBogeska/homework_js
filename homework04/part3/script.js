// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!
let accountMoney = 100;
function cash(number) {
  number = parseInt(prompt("Enter a number:"));
  if (Number.isNaN(number)) {
    alert("invalid input, please enter a number");
  } else {
    if (number > accountMoney) {
      return "Not enough money";
    } else {
      let leftMoney = accountMoney - number;
      return `Successful withdrawal of the amount: ${number}, now you have ${leftMoney} money left.`;
    }
  }
}
console.log(cash());
