// find if 2 numbers equal or not
let n1 = Math.floor(Math.random() * (3) + 1);
let n2 = Math.floor(Math.random() * (3) + 1);
console.log(`${n1} and ${n2} is equal? ${n1 === n2}`);

// if age is allowed to get drivers license or not

let n3 = Math.floor(Math.random () * (100) + 1);
console.log(`The age is ${n3} , you can get license: ${n3 >= 16}`);

// find the greatest number between 2 random numbers 

let n4 = Math.floor(Math.random () * (10) + 1);
let n5 = Math.floor(Math.random () * (10) + 1);
console.log(`The greatest number between ${n4} and ${n5} : ${Math.max(n4, n5)}`);

// find the greatest number between 3 random numbers

let n6 = Math.floor(Math.random() * (10) + 1);
let n7 = Math.floor(Math.random() * (10) + 1);
let n8 = Math.floor(Math.random() * (10) + 1);
console.log(`The greatest number between ${n6}, ${n7}, ${n8}: ${Math.max(n6,n7,n8)}`);

//find the smallest between 2 random numbers

let n9 = Math.floor(Math.random() * (10) + 1);
let n10 = Math.floor(Math.random() * (10) + 1);
console.log(`The smallest number between ${n9}, ${n10}: ${Math.min(n9,n10)}`);

// find the smallest number between 3 random numbers

let num1 = Math.floor(Math.random() * (10) + 1);
let num2 = Math.floor(Math.random() * (10) + 1);
let num3 = Math.floor(Math.random() * (10) + 1);

console.log(`the smallest number between ${num1}, ${num2}, ${num3}: ${Math.min(num1,num2,num3)}`);

// calculate the average of 3 random numbers

let num4 = Math.floor(Math.random() * (10) + 1);
let num5 = Math.floor(Math.random() * (10) + 1);
let num6 = Math.floor(Math.random() * (10) + 1);
console.log(`the average of ${num4}, ${num5}, ${num6}: ${((num4+num5+num6)/3).toFixed(2)}`);

// calculate the absolute difference between max and min of 3 random numbers

let num7 = Math.floor(Math.random() * (10) + 1);
let num8 = Math.floor(Math.random() * (10) + 1);
let num9 = Math.floor(Math.random() * (10) + 1);
console.log(num7, num8, num9);
console.log(Math.abs(Math.max(num7, num8, num9) - Math.min(num7, num8, num9)));
console.log(`abs dif 3 rndm num: ${Math.abs(Math.max(num7,num8,num9) - Math.min(num7,num8,num9))}`)

// find the quarter of the random number

let num10 = Math.floor(Math.random() * (100) + 1);
console.log(num10)
if (num10 <= 25) console.log('1st quarter');
else if (num10 <= 50) console.log('2nd quarter');
else if (num10 <= 75) console.log('3rd quarter');
else console.log('4th quarter');

// find the midpoint of a random number

let num11 = Math.floor(Math.random() * (100) + 1);
console.log(num11);
if (num11 <= 50 ) console.log('1st half');
else console.log('2nd half');

// find if sum of the 2 random numbers is even or not

let num12 = Math.floor(Math.random() * (10) + 1);
let num13 = Math.floor(Math.random() * (10) + 1);
let total = num12 + num13;
console.log(total, (total % 2 === 0));
// or 
console.log(num12 + num13 , (num12 + num13) % 2 === 0);

// find if product of 2 random numbers is odd or not

let num14 = Math.floor(Math.random() * (10) + 1);
let num15 = Math.floor(Math.random() * (10) + 1);
console.log(num14 * num15, (num14 * num15) % 2 !== 0);

// write a function calculates area of a rectangle

function rectangleArea (x , y) {
    return `The area of the rectangle is ${x * y}`;
}
console.log(rectangleArea(5, 8));

//write a function calculates perimeter of a rectangle

function rectanglePerimeter (x, y) {
    return `The perimeter of the rectangle: ${2*(x+y)}`;
}
console.log(rectanglePerimeter (6, 10));

// write a function calculates area of a square

function squareArea (x) {
    return `the area of the square: ${x*x}`;
}
console.log(squareArea(10));

// write a function calculates perimeter of a square

function squarePerimeter (x) {
    return `the perimeter of the square: ${x*4}`;
}
console.log(squarePerimeter(10));



