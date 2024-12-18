// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.
// diffMaxMin([44, 32, 86, 19]) ➞ 67
// // Smallest number is 19, biggest is 86.
// Notes
// Don't forget to return the result.
// Try using Infinity and -Infinity
function diffMaxMin(array){
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<array.length;i++){
        if(array[i]<min){
            min=array[i];
        }else if(array[i]>max){
            max=array[i];
        }
    }
    return max-min;
}
let array=[10,4,1,-10,-50,32,21];
console.log(diffMaxMin(array));