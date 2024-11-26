/* task 5.    Write a function that takes an array of numbers and
 returns the sum of all the numbers.
 Test the function with different arrays.*/

 let array = [563, 105, 987, 423, 621, 334, 735, 295, 492, 843, 116, 743, 850, 688, 914, 389, 257, 401, 633, 924, 516, 364, 33, 287, 548, 953, 842, 827, 169, 684, 283, 297, 897, 405, 208, 100, 981, 68, 268, 440, 933, 816, 634, 888, 354, 832, 661, 245, 450]
 ;

 function sum(array) {
    let sum = 0;
    for (let i = 0; i <= array.length-1; i++){
       sum += array[i];
    }
    return sum;
 }

 console.log(sum(array));
