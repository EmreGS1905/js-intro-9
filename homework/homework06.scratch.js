// Task 1
const noSpace = (string) => string.split(' ').join('')

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("  Hello  "));
console.log(noSpace(" Hello World "));
console.log(noSpace("Tech Global"));

// Task 2
function replaceFirstLast (string) {
    let str = string.trim();
    if (str.length < 2) return ' ';
    let newStr = str.at(-1) + str.slice(1, str.length -1) + str.at(0); 
    return newStr;
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("  A  "));

// Task 3 
let vowels = ['a', 'e', 'i', 'o', 'u' ];
const hasVowel = (string) => {
    for (const vowel of vowels) {
        return string.toLowerCase().includes(vowel);
    }
}
// Alternative solution with RegEx: const hasVowel = (string) => /[aeiou]/i.test(string);  
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

// Task 4 
function checkAge (number) {
    let year = 2023;
    if (year - number > 0 && year - number < 16  ) console.log('AGE IS NOT ALLOWED');
    else if (year - number >= 16 && year - number <= 120) console.log('AGE IS ALLOWED');
    else console.log('AGE IS NOT VALID');
}
(checkAge(2015));
(checkAge(2007));
(checkAge(2050));
(checkAge(1920));
(checkAge(1800));

// Task 5
const averageOfEdges = (n1, n2, n3) => (Math.max(n1,n2,n3) + Math.min(n1,n2,n3)) / 2;

console.log(averageOfEdges(0,0,0));
console.log(averageOfEdges(0,0,6));
console.log(averageOfEdges(-2,-2,10));
console.log(averageOfEdges(-3,15,-3));
console.log(averageOfEdges(10,13,20));

// Task 6 
const noA = (arrStr) => arrStr.map( x => x[0].toLowerCase() === 'a'? x = '###' : x);

console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

const noA1 = (arrStr) => {
    for (let i = 0 ; i < arrStr.length; i++) {
        if(arrStr[i][0].toLowerCase() === 'a') arrStr[i] = '###'
    }return arrStr
    } 

console.log(noA1(["javascript", "hello", "123", "xyz"])); 
console.log(noA1(["apple", "123", "ABC", "javascript"]));
console.log(noA1(["apple", "abc", "ABC", "Alex", "A"]));

const noA2 = (arrStr) => {
    for ( word of arrStr) {
       if( word[0].toLowerCase() === 'a')  word = '###';
         
    }return arrStr }

console.log(noA2(["javascript", "hello", "123", "xyz"])); 
console.log(noA2(["apple", "123", "ABC", "javascript"]));
console.log(noA2(["apple", "abc", "ABC", "Alex", "A"]));

// Task 7 
const no3and5 = (array) => {
     return array.map( (x) => { if(x % 5 === 0 && x % 3 === 0) {
        return x = 101;
     } else if (x % 3 === 0) {
     return  x = 100 ;
    } else if (x % 5 === 0) {
        return  x = 99;
    }else return x;
})}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

// Task 8 
function cPrimes (num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }return true;
}

const countPrimes = (numbers) => {
    let count = 0;
    for (const num of numbers) {
      if(cPrimes(num) === true) count ++
    }return count;
        
}
console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));





//Task 9 
const removeDuplicates = (array) => [...new Set(array)];

console.log(removeDuplicates([10,20,35,20,35,60,70,60]));
console.log(removeDuplicates([1,2,5,2,3]));
console.log(removeDuplicates([0,-1,-2,-2,-1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(['1', '2', '3','2', '3']));

// Task 9 - 1
const removeDuplicates1 = (array) => {
    const duplicates = [];
    for(const ele of array) {
        if(duplicates.indexOf(ele) === -1)duplicates.push(ele)
    }return duplicates;
}
console.log(removeDuplicates1([10,20,35,20,35,60,70,60]));
console.log(removeDuplicates1([1,2,5,2,3]));
console.log(removeDuplicates1([0,-1,-2,-2,-1]));
console.log(removeDuplicates1(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates1(['1', '2', '3','2', '3']));

//Task 10 
function isDateFormatValid (string) {
    let newString = string.split('/').join('');
    if(newString > 12319999) return false;
    if (newString.length !== 8) return false;
    return(!isNaN(newString))

}
console.log(isDateFormatValid(''));
console.log(isDateFormatValid('15/30/2020'));
console.log(isDateFormatValid('10-30-2020'));
console.log(isDateFormatValid('10.30.2020'));
console.log(isDateFormatValid('5/30/2020'));
console.log(isDateFormatValid('05/30/2020'));
console.log(isDateFormatValid('10/2/2020'));
console.log(isDateFormatValid('10/02/2020'));

// Task 11
const secondMax = (array) => {
    
    let min = -Infinity;
    const arrMax = Math.max(...array);
    if (array.length < 2) return array[0];
    for (let i = 0 ; i < array.length; i++) {
        if(array[i] > min && array[i] < arrMax) min = array[i]
    }return min;
}
console.log(secondMax([ 7, 4, 4, 23, 23, 23,]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

// Task 12
const secondMin = (array) => {
    if(array.length < 2) return array.join('');
   const newArr = [...new Set(array)]
    newArr.sort((a, b) => a-b)
    return newArr[1]
}  

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])) 
console.log(secondMin([3, 4, 5, 6])); 
console.log(secondMin([10])); 

//Task 13 -Not my work - From 250+ killer JS one liners book - by Hernando Abella
// I couldn't figure this out , so trying to understand how this guy did 
const mostRepeated = (arr) => arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1,acc));

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]) )


let a = "14/45/2024";
let b = a.split('/');
console.log(b.length)
if (b.length !== 8) console.log(false)
console.log(!(isNaN(b)))

const ar3 = []
const ar1 = [1, 2, 2, 2, 8, 8 ,5];
    const ar2 = ar1.filter((x , y) => 
    ar1.indexOf(x) === y)

console.log(ar2)
console.log(ar1)

console.log(ar1.indexOf(8))


const d = arr => arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1,acc));
console.log(d([4, 7, 4, 4, 4, 23,23,23]))

const mostrep = arr => {
    let count1 = 0
    arr.forEach( ele => ele = ele , count1++)

}
console.log(mostrep([4, 7, 4, 4, 4, 23,23,23]))

const c = [1, 5, 5, 8, 9,8,8,8];
const e = c.reduce( (x,y) => x = y );
console.log(e)

const sum = c.reduce((a, b) => (a[b] = a[b]+2,a));
console.log(sum)

let st = '152';
let as = 198;
console.log(st>as)

