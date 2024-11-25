/* task4.    Create a simple menu using a switch statement 
hat allows users to choose between different operations 
(e.g., addition, subtraction, multiplication).*/

let a = 5;
let num1 =8;
let num2 =4;

 switch(a){

    case 1 : 
         console.log(`sum is ${num1 + num2}`);
         break;
    case 2 : 
         console.log(`subtraction is ${num1 - num2}`);
         break;
    case 3 : 
         console.log(`product is ${num1 * num2}`);
         break;
    case 4 : 
         console.log(`ratio is ${num1 / num2}`);
         break;
    default :
         console.log(`this operation is not supported`);
         break;
 }