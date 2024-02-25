function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* let r1 = generateRandomNumber(1,10)
console.log(r1)
if (r1 % 2 === 0) {
    console.log('EVEN');
} else {
    console.log('ODD')
} */

let r3 = generateRandomNumber(-10,10);
console.log(`The random number is ${r3}`)
if (r3 > 0 ) {
    console.log("POSITIVE");
} else if (r3 < 0) {
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

