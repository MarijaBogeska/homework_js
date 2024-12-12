// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object, boolean, number, string, undefined
function typeOfParameter(input) {
  return typeof input;
}
let name = { firstName: "Marija", lastName: "Bogeska" };
console.log(typeOfParameter(name));
let exampleBoolean = 5 < 10;
console.log(typeOfParameter(exampleBoolean));
let num = 7;
console.log(typeOfParameter(num));
let text = "Marija";
console.log(typeOfParameter(text));
let typeUndefined;
console.log(typeOfParameter(typeUndefined));
