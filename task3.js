/*
 task3.Write a program that takes a number as input and determines 
if it is even or odd using an if statement. in javascript
*/
let num = 6;

if(num%2  == 0) {
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}


// OR 

(num % 2 === 0)? console.log(`${num} is even`) : console.log(`${num} is odd`);
    