// Create a function that takes an number and creates array with all numbers till that number.

// Examples
// createArray(5) ➞  [1, 2, 3, 4, 5]
// createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// createArray(-5) ➞  []
// Notes
// Don't forget to return the result.

function arrayOfNumber(number){
    let createArray=[];
    if (typeof number !== "number"){
        return "Invalid input";
    }
    for (let i=1; i<=number;i++){
        createArray.push(i);
    }
    return createArray;
}
console.log(arrayOfNumber(10));