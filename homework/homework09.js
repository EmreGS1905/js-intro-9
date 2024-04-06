// Task 1
function fizzBuzz1 (number)  {
    if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    else if(number % 3 === 0) return 'Fizz';
    else if (number % 5 === 0) return 'Buzz';
    else return number;
}
console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

// Task 2
function fizzBuzz2 (number) {
    const arr = [];
    for (let i = 1 ; i <= number ; i++){
        if(i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
        else if (i % 3 === 0) arr.push('Fizz');
        else if (i % 5 === 0) arr.push('Buzz')
        else arr.push(i); 
    }return arr;
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));

// Task 3
const findSumNumbers = (str) => {
    let str1 = '';
    for(const char of str) {
        if(char >= 0 && char <= 9) str1+= char;
        else str1+= ' ';
    }
    const arr = str1.split(' ').map( ele => isNaN(parseInt(ele)) ? 0 : parseInt(ele));
    return arr.reduce((x, y) => x + y);
}
console.log(findSumNumbers('abc$'));
console.log(findSumNumbers('a1b4c 6#'));
console.log(findSumNumbers('ab110c045d'));
console.log(findSumNumbers('525'));
console.log(findSumNumbers('3 for 10 dollars'));

// Task 4
const findBiggestNumber = (str) => {
    let str1 = '';
    for(const ele of str) {
        if(ele >= 0 && ele <= 9) str1+= ele;
        else str1 += ' '
    }
    const str2 = str1.split(' ')
    return Math.max(...str2);
}
console.log(findBiggestNumber('abc$'));
console.log(findBiggestNumber('a1b4c 6#'));
console.log(findBiggestNumber('ab110c045d'));
console.log(findBiggestNumber('525'));
console.log(findBiggestNumber('3 for 10 dollars'));

// Task 5 

