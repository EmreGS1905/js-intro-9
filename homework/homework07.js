
// Task 1 

const hasUpperCase = (str) => str !== str.toLowerCase();
console.log(hasUpperCase('javascript'));
console.log(hasUpperCase('John'));
console.log(hasUpperCase('John'));
console.log(hasUpperCase('$125.0'));
console.log(hasUpperCase(''));

// Task 2

const noDigit = (str) => {
    const nums = ['0','1','2','3','4','5','6','7','8','9'];
    let newStr = ' ';
    for(const char of str) {
        if(nums.indexOf(char) === -1) newStr += char; 
    }return newStr;
}

console.log(noDigit(''));
console.log(noDigit('Javascript'));
console.log(noDigit('123Hello'));
console.log(noDigit('123Hello World149'));
console.log(noDigit('123Tech456Global149'));

// Task 3 - 1

const noVowel = (str) => {
    let output = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(const char of str) {
        if(!vowels.includes(char.toLowerCase())) output+= char;
    } return output;
}
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

// Task 3 -2
const vowels = ['a', 'e', 'i', 'o', 'u'];
const noVowel1 = (str) => str.split('').reduce((newStr, char) => !vowels.includes(char.toLowerCase())? newStr+=char : newStr, '')
//filter - const noVowel1 = (str) => str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
console.log(noVowel1("TechGlobala"));
console.log(noVowel1("AEOxyz"));
console.log(noVowel1("Javascript"));
console.log(noVowel1(""));
console.log(noVowel1("125$"));

// Task 4
const no13 = (array) => array.map( x => x === 13 ? 0 : x);
console.log(no13([1,2,3,4]));
console.log(no13([13,2,3,]));
console.log(no13([13,13,13,13]));
console.log(no13([]));

// Task 5 - 1 
const middleInt = (n1, n2, n3) => {
    const arr = [n1, n2, n3];
    arr.sort((a,b) => a-b);
    return arr[1]
}
console.log(middleInt(1,2,2));
console.log(middleInt(5,5,8));
console.log(middleInt(5,3,5));
console.log(middleInt(1,1,1));
console.log(middleInt(-1,25,10));

// Task 5 - 2
const middleInt1 = (n1, n2, n3) => {
    if(n1 >= n2 && n1 <= n3) return n1;
    else if(n2 >= n1 && n2 <= n3) return n2;
    else return n3;
}
console.log(middleInt1(1,2,2));
console.log(middleInt1(5,5,8));
console.log(middleInt1(5,3,5));
console.log(middleInt1(1,1,1));
console.log(middleInt1(-1,25,10));

// Task 6 

const sumOfDigits = (str) => str.split('').reduce((sum, num) => num > -Infinity ? Number(num) + sum : sum , 0);
console.log(sumOfDigits('Javascript'));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits('$125.0'));
console.log(sumOfDigits(''));

// Task 7