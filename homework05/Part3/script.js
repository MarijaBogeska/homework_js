// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"
function message(array) {
  let print = "";
  for (let i = 0; i < array.length; i++) {
    print = print + array[i] + " ";
  }
  return print;
}
let array01 = ["jas", "sum", "marija"];
console.log(message(array01));
