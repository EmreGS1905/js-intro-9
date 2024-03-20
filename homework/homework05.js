// Task 1
const countPos = (array) => array.filter( (x) =>  x > 0).length;

console.log(countPos([-45, 0, 0, 34, 5, 67,5]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

// Task 2
const countA = (string) => string.split('').filter((x) => x.toLowerCase().includes('a')).length;
 
console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA("Cypress"));

//Task 3
function countVowels (string) {
    let count = 0;
    let vowels = 'AEIOUaeiou';
    for(let i = 0 ; i < string.length ; i++) {
        if(vowels.includes(string[i])) count++
    } return count;      
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

// Task 3 - single line
const countVowels = (str) =>  str.split('').filter( x => 'aeiouAEIOU'.includes(x)).length;

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

// Task 4 
function countConsonants (string) {
    let futureCons = string.length;
    let vowels = 'AEIOUaeiou';
    for(let i = 0 ; i < string.length ; i++) {
        if(vowels.includes(string[i])) futureCons--
    } 
    return futureCons;      
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Task4 single line
const countConsonants = (str) => str.split('').filter( x => !'aeiou'.includes(x)).length;
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Task 5
const countWords = (string) => string.trim().split(' ').length;
console.log(countWords("    Javascript is fun       "));
console.log(countWords('Cypress is an UI automation tool.  '));
console.log(countWords('1 2 3 4'));

// Task 6
const factorial = (number) => {
    let total = 1;
    for (let i = number ; i > 0 ; i--) {
         total *= i;
    } return total;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

// Task 7
const isPalindrome = (string) => string.toLowerCase() === string.split('').reverse().join('').toLowerCase();

console.log(isPalindrome('Hello'));
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab a'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));

// Task 8 
const countMultipleWords = (array) => array.filter(word => word.trim().includes(' ')).length;

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

// Task 9
//const count3OrLess = (str) => str.split(' ').filter( x => x.length <= 3 && x.length > 0).length;
const count3OrLess = (str) => str.split(' ').reduce((x,y) => y.length <= 3 && y.length > 0? x + 1 : x, 0);
console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));

// Task 10 
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2 ; i < num; i++) {
        if(num % i === 0) return false
    } return true;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

// Task 11 
function add(arr1, arr2) {
    const longerArr = Math.max(arr1.length, arr2.length);
    const sum = [];

    for (let i = 0; i < longerArr; i++) {
        const firstArr = arr1[i] || 0;
        const secondArr = arr2[i] || 0;
    
        sum[i] = firstArr + secondArr
    }
    return sum;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));
// Task 11 - 2
const add = (arr1, arr2) => arr1.map ((x , y) => x + arr2[y] || x)
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

// Task 12

const removeExtraSpaces = (string) => string.split(' ').filter( x => x.length > 0).join(' ');

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

// Task 13
function findClosestTo10 (array) {
    
    const newArr = array.filter ( x => x !== 10);
    const arrayDiff = newArr.map( x => Math.abs(10 - x));
    let closest = arrayDiff.indexOf(Math.min(...arrayDiff)) 
    return newArr[closest]
    
}

console.log(findClosestTo10([10,-13, 5,70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([ 0, -1, -2])); 

// Task 14

function isEmailValid (string) {
    const noMoreThan2 = string.split('').filter( x => x !== '@');
    if (string.indexOf(' ') !== -1) {
        return false;
    }
    if (string.split('').length - noMoreThan2.length !== 1) {
        return false;
    }
    if(string.slice(0, string.indexOf('@')).length < 2 || string.slice(string.indexOf('@')+1, string.indexOf('.')).length < 2) {
        return false;
    }
    if(string.slice(string.indexOf('.')+1).length < 2 || string.indexOf('.') === -1){
        return false;
    } return true;
}

console.log(isEmailValid(''));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com") )
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid('johndoe@a.com'))
console.log(isEmailValid('johndoe@@gmail.com'))
console.log(isEmailValid('johndoe@gmail.com'))

// Task 15
function isPasswordValid (string) {
    const arrPass = string.split('');
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0 ; i < arrPass.length ; i++) {
        
        if (arrPass.length < 8 || arrPass.length > 16) {
            return false;
        }
        if(string === string.toLowerCase()) {
            return false;
        }
        if(string === string.toUpperCase()) {
            return false;
        }
        
        
    } return true;
}

console.log(isPasswordValid(''));
console.log(isPasswordValid('abcd'));
console.log(isPasswordValid('abcd1234'));
console.log(isPasswordValid('Abcd1234'))
console.log(isPasswordValid('Chicago12345US!#$%'))
console.log(isPasswordValid('Abcd1234$'))
console.log(isPasswordValid('Chicago123$'))
console.log(isPasswordValid('Test1234#'))