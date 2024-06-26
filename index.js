let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

const random = Math.floor(Math.random() * 100) + 1; 

const num3 = 16;
const num4 = 6;
const mod = num3 % num4;

 let numbers = [5, 10, 20, 6];

 let max = numbers.reduce( (acc, val) => {
    return acc > val ? acc : val;
 });

 console.log("numbers", max);