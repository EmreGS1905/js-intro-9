// Task 1
const countPos = (array) => array.filter( (x) =>  x > 0).length;
      
 console.log(countPos([-45, 0, 0, 34, 5, 67]));
 console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
 console.log(countPos([0, -1, -2, -3]));
 
 // Task 2
 const countA = (string) => {
    const newArr = string.split('');
    return newArr.filter(x => x.toLowerCase().includes('a')).length;
 }
console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA("Cypress"));

// Task 3
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

// Task 4
function countConsonants (string) {
    let count = 0;
    let vowels = 'AEIOUaeiou';
    for(let i = 0 ; i < string.length ; i++) {
        if(vowels.includes(string[i])) count++
    } let totalConsonants = string.length - count 
    return totalConsonants;      
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

// Task 5
function countWords (string) {
    const words = string.trim().split(' ');
    return words.length;
}
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
const count3OrLess = (str) => str.split(' ').filter( x => x.length <= 3 && x.length > 0).length;

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
        sum[i] = firstArr + secondArr;
    }
    return sum;
}
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
function findClosestTo10(numbers) {
    let closest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 10) continue;
        if (Math.abs(10 - closest) > Math.abs(10 - numbers[i]) ||
            (Math.abs(10 - closest) === Math.abs(10 - numbers[i]) && numbers[i] < closest)) {
            closest = numbers[i];
        }
    }
    return closest;
}
   

console.log(findClosestTo10([10,-13, ,5, 9, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([ 0, -1, -2])); 



console.log(a.indexOf(' '))
console.log(a.charCodeAt(3))

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
