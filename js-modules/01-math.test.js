const { generateRandomNumber, minOfArray, maxOfArray} = require('./../utils/MathHelper.js')


/*
Genereate 5 random numbers between 10 and 25 both inclusive
find min and max
*/

let r1 = generateRandomNumber(10, 25);
let r2 = generateRandomNumber(10, 25);
let r3 = generateRandomNumber(10, 25);
let r4 = generateRandomNumber(10, 25);
let r5 = generateRandomNumber(10, 25);

console.log(r1, r2, r3, r4, r5)
console.log(minOfArray([r1, r2, r3, r4, r5]));
console.log(maxOfArray([r1, r2, r3, r4, r5]));
