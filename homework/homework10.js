// Task 1

// Task 2

// Task 3

const nthWord = (str, n) => {
    let word = str.split(' ');
    if (n > word.length) return '';
    return word[n - 1];
}

console.log(nthWord('I like Programming Languages', 2));
console.log(nthWord("QA stands for Quality Assurance", 4));
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1));
console.log(nthWord("", 1));

// Task 4

function isArmstrong(number) {
    let sum = 0;
    const arr = number.toString().split('');
    for (const n of arr) {
        sum += n ** arr.length;
    } return sum === number;

}
console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));



// Task 5
function calculateTotalPrice1(items) {

    const priceList = {
        "Apple": 2.00,
        "Orange": 3.29,
        "Mango": 4.99,
        "Pineapple": 5.25

    };

    let totalPrice = 0;
    for (const item in items) {

        if (priceList.hasOwnProperty(item)) {
            const quantity = items[item];
            totalPrice += priceList[item] * quantity;

        }
    }

    return totalPrice.toFixed(2);
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }))
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }))
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }))
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }))

//Task 5

function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
        reversed = (reversed * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed;
}
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

// Task 6
const doubleOrTriple = (arr, boolean) => arr.map( x => boolean ? x * 2 : x * 3);

console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));

// Task 7 
const splitString = (str, n) => {
    if(n > str.length || str.length % n !== 0) return '';
    return str.slice(0, n) + ' ' + str.slice(n);
}
console.log(splitString('Javascript', 5));
console.log(splitString('Java', 2));
console.log(splitString('Automation', 3));
console.log(splitString('Hello', 6));
console.log(splitString('12', 1));