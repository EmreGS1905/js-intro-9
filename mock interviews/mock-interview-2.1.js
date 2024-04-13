// returns the given word tripled if string length is even or doubled if the string length is odd

const doubleOrTripleWord = (string) => {
    if(string.length % 2 === 0) return  string.repeat(3);
    else return string.repeat(2);
};
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));

//Write a function named as firstlastWord() takes a string word and returns first and last words 
const firstlastWord = (str) => {
    const newArr = str.split(' ');
    const newArr1 = newArr[0] + newArr[newArr.length - 1]
    return newArr1;
    
};
console.log(firstlastWord('Hello World'));
console.log(firstlastWord('I like Javascript'));
console.log(firstlastWord('Hello'));
console.log(firstlastWord(''));
console.log(firstlastWord('    '));

// Write a function named hasVowel() takes string and returns true if string has a vowel or false

const hasVowel = (str) => {
    const vowels = 'aeiou';
    for(const char of str.toLowerCase()) {
        if(vowels.includes(char)) return true;
    }return false;
}
   
console.log(hasVowel(''));
console.log(hasVowel('Javascript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
console.log(hasVowel('ABC'));

//Start Vowel
//Write a function named as startVowel() takes string and returns true or false
const startVowel = (str) => {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(str.at(0));
}
console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel('   '));
console.log(startVowel('123'));

// Average of Edges - return average of min and max
const averageOfEdges = (n1, n2, n3) => (Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2;
console.log(averageOfEdges(0,0,0));
console.log(averageOfEdges(0,0,6));
console.log(averageOfEdges(-2,-2,10));
console.log(averageOfEdges(-3,15,-3));
console.log(averageOfEdges(10,13,20));

// Swap First and Last Characters
const replaceFirstLast = (str) => {
    if(str.trim().length < 2) return ' '; 
    return str.at(-1) + str.slice(1, -1) + str[0];
}
console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('   A    '));

// Swap First and Last 4 characters
const swap4 = (str) => {
    if (str.length < 8) return '';
    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}
console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4('    '));
console.log(swap4('Apple'));

// Swap first and last words 
const swapFirstLastWord = (str) => {
    if(str.trim().split(' ').length < 2) return '';
    return str.slice(str.lastIndexOf(' ')).trim() + str.slice(str.indexOf(' '), str.lastIndexOf(' ')) + ' ' + str.slice(0, str.indexOf(' '));
}
console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like Javascript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord(' '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello  '));

// Count positive numbers 
const countPos = (arr) => arr.filter( x => x > 0).length;
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

// Find Even numbers
const getEvens = (n1, n2) => {
    let max = Math.max(n1, n2);
    let min = Math.min(n1, n2);
    const arr = [];
    for(let i = min; i <= max; i++) {
        if( i % 2 === 0) arr.push(i)
    }return arr;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

// Find Numbers Divisible by 5
const getMultipleOf5 = (n1, n2) => {
    let array = [];
    if(n1 > n2) {
    for(let i = n1; i >= n2  ; i--) {
        if( i % 5 === 0) array.push(i);
    }return array;
} else {
    for(let i = n1; i <= n2 ; i++) {
        if( i % 5 === 0) array.push(i);
    }return array;
}
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

//Count negative numbers
const countNeg = (array) => array.filter( x => x < 0).length;
console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 123]));
console.log(countNeg([0, -1, -2, -3]));

// Count A
const countA = (str) => str.split('').filter( x => x.toLowerCase() === 'a').length;
console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for quality Assurance'));
console.log(countA('Cypress'));

// Count Words 
const countWords = (str) => str.trim().split(' ').length;
console.log(countWords('    Javascript is fun   '));
console.log(countWords('Cypress is an UI automation tool.'));
console.log(countWords('1 2 3 4'));

// Factorial
const factorial = (number) => {
    let total = 1;
    for(let i = 1 ; i <= number; i++) {
        total *= i
    }return total;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

// Count 3 or less , return the words less than 3 characters or less
const count3OrLess = (str) => str === ''? 0: str.split(' ').filter( x => x.length <= 3).length;

console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));

// Remove Extra Spaces
const removeExtraSpaces = (str) => str.trim().split(' ').filter( x => x !== '' ).join(' ');

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('    Hello  World '));
console.log(removeExtraSpaces('    JavaScript is    fun'));
console.log(removeExtraSpaces(''));

// Middle Number
const middleInt = (num1, num2, num3) => {
    if(num1 >= num2 && num1 <= num3) return num1;
    else if (num2 >= num1 && num2 <= num3) return num2;
    else return num3;
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// first duplicate element
const firstDuplicate = (arr) => {
    for (const ele of arr) {
        if(arr.indexOf(ele) !== arr.lastIndexOf(ele)) return ele;
        
    }return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

//find all duplicate elements
const getDuplicates = (arr) =>{
    const newArr = arr.filter( x => arr.indexOf(x) !== arr.lastIndexOf(x));
    return [...new Set(newArr)]
}

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));

// count Vowels
const countVowels = (str) => {
    const vowels = 'aeiou'
    let str1 = '';
    for(const ele of str) {
        if(vowels.includes(ele.toLowerCase())) str1+= ele;
    } return str1.length;
}

console.log(countVowels('Hello'));
console.log(countVowels('JavaScript is fun'));
console.log(countVowels(''));

// Reverse String Words
const reverseStringWords = (str) => {
return str.trim().split('').reverse().join('').split(' ').reverse().join(' ');
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like Javascript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords(" "));

//Count consonants
const countConsonants = (str) => {
    let vowels ='aeiou';
    let count = 0;
    for (const char of str) {
        if(!vowels.includes(char.toLowerCase())) count+= 1
    } return count;
}
console.log(countConsonants('Hello'));
console.log(countConsonants('Hello World'));
console.log(countConsonants('JavaScript is fun'));
console.log(countConsonants(''));

// Count multiple words
const countMultipleWords = (arr) => arr.filter( x => x.trim().includes(' ')).length;

console.log(countMultipleWords(["foo", "", " ", "foo bar", " foo" ]));
console.log(countMultipleWords(["foo", "bar", "foobar", " foobar "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", " foo bar "]));
console.log(countMultipleWords([]));

// Fizz Buzz
function fizzBuzz (n1, n2) {
    const str = [];
    for (let i = Math.min(n1, n2) ; i <= Math.max(n1, n2); i++) {

        if (i % 3 === 0 && i % 5 === 0) str.push('FizzBuzz')
        else if (i % 3 === 0) str.push('Fizz');
        else if (i % 5 === 0) str.push('Buzz');
        else str.push(i) ;
        
    }
    return str.join('|');
}
 console.log(fizzBuzz(13,18));
 console.log(fizzBuzz(12,5));
 console.log(fizzBuzz(5,5));
 console.log(fizzBuzz(9,6));

 // Palindrome
 const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

 console.log(isPalindrome('Hello'));
 console.log(isPalindrome('Kayak'));
 console.log(isPalindrome('civic'));
 console.log(isPalindrome('abba'));
 console.log(isPalindrome('ab a'));
 console.log(isPalindrome('123454321'));
 console.log(isPalindrome('A'));
 console.log(isPalindrome(''));

 // Prime Number
const isPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2) return true ;
    for(let i = 2 ; i < number; i++) {
        if(number % i === 0) return false;
        else return true;
    } 
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

// Add two arrays

function add(arr1, arr2) {
    const result = [];
    const arrLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < arrLength; i++) {
        const sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }

    return result;
}
console.log(add([3,0,0,7,5] , [6,3,2]));
console.log(add([10,3,6,3,2] , [6,8,3,0,0,7,5,10,34]));
console.log(add([-5,6,-3,11] , [5,-6,3,-11]));

// No Elements with A
const noA = (arr) => arr.map( x => x.toLowerCase().startsWith('a') ? '###' : x);

console.log(noA(['javascript', 'hello', '123', 'xyz']));
console.log(noA(['apple', '123', 'ABC', 'javascript']));
console.log(noA(['apple', 'abc', 'ABC', 'Alex', 'A']));

// No Elements Divisible by 3 and 5 
const no3and5 = (array) => {
    
    return array.map (x => {
        if(x % 3 === 0 && x % 5 === 0) return 101;
        else if(x % 3 === 0) return 100;
        else if(x % 5 === 0) return 99;
        else return x;    
    } 
) 
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

// No Elements Equals 13

//Remove Duplicates 

const removeDuplicate = (arr) => [...new Set (arr)];

console.log(removeDuplicate([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicate([1, 2, 5, 2, 3]));
console.log(removeDuplicate([0, -1, -2, -2, -1]));
console.log(removeDuplicate(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicate(["1", '2','3', '2', '3']));