let num1 = 10;
let num2 = 2;
let num3 = 10.5789828934;

console.log(num1.toString() + num2);
console.log(typeof(num1));

console.log(num1.toString(2)); // verssão binaria

console.log(num3.toFixed(2));

console.log(Number.isInteger(num3));

let temp = num1 * 'Ola';

console.log(Number.isNaN(temp));

let num4 = 0.7;
let num5 = 0.1;

console.log(num4 + num5);

console.log((num4 + num5).toFixed(2));