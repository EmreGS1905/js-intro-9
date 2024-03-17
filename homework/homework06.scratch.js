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
const noA = (arrStr) => {
    for (let i = 0 ; i < arrStr.length; i++) {
        if(arrStr[i][0].toLowerCase() === 'a') arrStr[i] = '###'
    }return arrStr
    } 

console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

const noA1 = (arrStr) => {
    for (let word of arrStr) {
        word.startsWith('a'); word = '###';
    } return arrStr
    } 

console.log(noA1(["javascript", "hello", "123", "xyz"])); 
console.log(noA1(["apple", "123", "ABC", "javascript"]));
console.log(noA1(["apple", "abc", "ABC", "Alex", "A"]));