/* task 5.    Write a function that takes an array of numbers and
 returns the sum of all the numbers.
 Test the function with different arrays.*/

 let array = [1,2,2,7,9,4];

 function sum(array) {
    let sum = 0;
    for (let i = 0; i <= array.length-1; i++){
       sum += array[i];
    }
    return sum;
 }

 console.log(sum(array));
