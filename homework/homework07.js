
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

// Task 7 - 1 
const arrFactorial = (arr) => { 
    
    const arr1 = []
    for(let i = 0 ; i < arr.length  ; i++) {
        let sum = 1;
        for( let j = arr[i]; j>0; j--) {
            sum *= j
            
        }  arr1.push(sum)
        
    }return arr1
}
console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

// Task 7 - 2
const arrFact = (array) => array.map( x => {
    let sum = 1;
        for (i = x ; i > 0; i--) {
        sum *= i
    }return sum
} 
)
console.log(arrFact([1, 2, 3, 4]));
console.log(arrFact([0, 5]));
console.log(arrFact([5, 0, 6]));
console.log(arrFact([]));

// Task 8 

function categorizeCharacters(string) {
    let letters = '';
    let digits = '';
    let specials = '';

    for (const char of string) {
        if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
            letters += char;
        } else if (char >= '0' && char <= '9') {
            digits += char;
        } else {
            specials += char;
        }
    }

    return [letters, digits, specials];
}
console.log(categorizeCharacters('1234'));
console.log(categorizeCharacters('abc123$#%'));
console.log(categorizeCharacters('12ab$%3c%'));


function calculateTotalPrice2(items) {
    const priceList = {
        "Apple": 2.00,
        "Orange": 3.29,
        "Mango": 4.99,
        "Pineapple": 5.25
    };

    let totalPrice = 0;
    let appleCount = 0;
    let mangoCount = 0;

    for (const item in items) {
        const quantity = items[item];
        const price = priceList[item] * quantity;

        if (item === "Apple") {
            appleCount += quantity;
            const discountApples = Math.floor(appleCount / 2);
            totalPrice += price - (discountApples * priceList["Apple"]);
        } else if (item === "Mango") {
            mangoCount += quantity;
            const freeMangoes = Math.floor(mangoCount / 3);
            totalPrice += price - (freeMangoes * priceList["Mango"]);
        } else {
            totalPrice += price;
        }
    }

    return totalPrice.toFixed(2);
}

    console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 }));
    console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }));
    console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }));
    console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 }));