// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
function fullNames(array1, array2) {
  let full = [];
  for (let i = 0; i < array1.length; i++) {
    full.push(i + 1 + "." + " " + array1[i] + " " + array2[i]);
  }
  return full;
}
array1 = ["Marija", "Nikolce", "Bob", "Jill"];
array2 = ["Bogeska", "Spirovski", "Gregory", "Wurtz"];
console.log(fullNames(array1, array2));
