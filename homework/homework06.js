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


//Task 9
const removeDuplicates = (array) => [...new Set(array)];

console.log(removeDuplicates([10,20,35,20,35,60,70,60]));
console.log(removeDuplicates([1,2,5,2,3]));
console.log(removeDuplicates([0,-1,-2,-2,-1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(['1', '2', '3','2', '3']));

// Task 10 