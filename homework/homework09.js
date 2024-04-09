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
const countOccurrencesOfCharacters = (string) => {
    const array = string.split('');
    let stringOfCount = "";
    let count = 1;
    for(let i = 0; i < array.length; i++) {
    if(array[i] === array[i + 1]) count++;
    else {
    stringOfCount += count + array[i];
    count = 1;
    }
}
    return stringOfCount;
}

console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www" ));

// Task 6

const fibonacciSeries1 = (n) => {
    const arrayFibonacci = [0];
    let initSum = 0;
    let prevSum = 1;
    let currSum = 1;
    if( n === 1) return [0];
    else {
        for(let i = 1; i < n; i++) { 
        arrayFibonacci.push(currSum);
        currSum = initSum + prevSum;  
        initSum = prevSum;
        prevSum = currSum;
        }
    }
    return arrayFibonacci;
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

// Task 7 

const fibonacciSeries2 = (n) => {
    const arrayFibonacci = [0];
    let initSum = 0;
    let prevSum = 1;
    let currSum = 1;
    if( n === 1) return 0;
    else {
        for(let i = 1; i < n; i++) { 
        arrayFibonacci.push(currSum);  
        currSum = initSum + prevSum;
        initSum = prevSum;
        prevSum = currSum;
        }
    }
    return arrayFibonacci[n - 1];
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(3));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));

// Task 8 

const findUniques = (arr1, arr2) => {
    const arr3 = [...new Set(arr1), ...new Set(arr2)];
    const arr4 = [];
    for(const el of arr3) {
        if(arr3.indexOf(el) === arr3.lastIndexOf(el)) arr4.push(el)
    }
return arr4;
    }

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2])); 

// Task 9 

const isPowerOf3 = (number) => {
    if(number === 1) return true;
    for(let i = 3; i <= number ; i *= 3) {
        if(number === i) return true;
    }
    return false;
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

