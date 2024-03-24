// find a number if it is even 

let n1 = Math.floor(Math.random() * (10) + 1);
console.log(n1);
console.log(n1 % 2 === 0);

// find a number if it is odd

let n2 = Math.floor(Math.random() * (10) + 1);
console.log(n2);
console.log(n2 % 2 !== 0);

// find a number if it is positive or not

let n3 = Math.floor(Math.random() * (11) - 5);
console.log(n3);
console.log(n3 > 0);

// find a number if is negative or not

let n4 = Math.floor(Math.random() * (10) - 5);
console.log(n4)
console.log( `The number is less than 0: ${n4 < 0}`);

// find a number if it is divisible by 5 

let n5 = Math.floor(Math.random() * (50) + 1);
console.log(n5);
console.log(`The number divisible by 5: ${n5 % 5 === 0}`);

// find a number if it is divisible by 7

let n6 = Math.floor(Math.random() * (50) + 1);
console.log(n6);
console.log(`The number is divisible by 7: ${ n6 % 7 === 0}`);

// calculate the sum of 2 random numbers

let n7 = Math.floor(Math.random() * (10) + 1);
let n8 = Math.floor(Math.random() * (10) + 1);
console.log(n7 , n8);
console.log(`The sum of the 2 random numbes : ${n7+n8}`);

// calculate the absolute difference between 2 random numbers

let n9 = Math.floor(Math.random() * (10) + 1);
let n10 = Math.floor(Math.random () * (10) + 1);
console.log(n9 , n10);
console.log(`The absolute difference of 2 random numbers: ${Math.abs(n9 - n10)}`);

// calculate product pf 2 numbers

let num1 = Math.floor(Math.random () * (10) + 1);
let num2 = Math.floor(Math.random () * (10) + 1);
console.log(num1 , num2);
console.log(`The product of the numbers: ${num1 * num2}`);

// calculate square of a number 

let num3 = Math.floor(Math.random () * (10) + 1);
console.log(num3);
console.log(`The square of the number: ${num3**2}`);

// calculate the cube of a number 

let num4 = Math.floor(Math.random() * (10) + 1);
console.log(num4);
console.log(`The cube of the number: ${num4 ** 3}`);

// convert miles to kilometers

let num5 = Math.floor(Math.random() * (10) + 1);
console.log(`${num5} miles: ${(num5 * 1.6).toFixed(2)} kilometers`);

//convert kilograms to pounds 

let num6 = Math.floor(Math.random() * (100) + 1);
console.log(`${num6} kilograms: ${(num6 * 2.2).toFixed(2)} pounds`);