// Task 1

let num1 = Math.floor(Math.random()*(100)+1);
let num2 = Math.floor(Math.random()*(100)+1);
let num3 = Math.floor(Math.random()*(100)+1);
console.log(num1, num2, num3)
console.log((num1+num2+num3)/3 >= 50);

// Task 2

let n1 = Math.floor(Math.random()*(3)+1);
let n2 = Math.floor(Math.random()*(3)+1);
let n3 = Math.floor(Math.random()*(3)+1);
console.log(n1, n2, n3);

if (n1 === n2 && n1 === n3) {
    console.log('TRIPLE MATCH');
} else if (n1 !== n2 && n2 !== n3 && n1 !== n3) {
    console.log('NO MATCH');
} else {
    console.log('DOUBLE MATCH');
}

// Task 3

function hasA (str1) {
    return str1.includes('A') || str1.includes('a');
}
console.log(hasA('Tech'));
console.log(hasA('Global'));
console.log(hasA(''));
console.log(hasA('Apple'));

// Task 4 

function  doubleOrTripleWord (str2) {
    if (str2.length % 2 === 0 ) return str2.repeat(3)
    else return str2.repeat(2)
}
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));
console.log(doubleOrTripleWord(''));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('22'));

// Task 5 

let firstWord = (str3) => {
    let word = str3.split(' ');
    return word[0];
    
}
console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord('  '));

// Task 6

function lastWord(str4) {
    
    return str4.slice(str4.lastIndexOf(" ")+1)
}
console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord('Hello'));
console.log(lastWord(''));
console.log(lastWord(' '));

// Task 7 

function firstLastWord (str5) {
    s1 = str5.split(' ');
    s2 = str5.slice(str5.lastIndexOf(' ')+1);
    return s1[0]+s2;
}
console.log(firstLastWord('Hello World'));
console.log(firstLastWord('I like JavaScript'));
console.log(firstLastWord('Hello'));
console.log(firstLastWord(''));
console.log(firstLastWord('  '));

// Task 8 

function startVowel(str6) {
    if(str6.startsWith('a')) return true;
    else if(str6.startsWith('e')) return true;
    else if(str6.startsWith('i')) return true;
    else if(str6.startsWith('o')) return true;
    else if(str6.startsWith('u')) return true;
    else if(str6.startsWith('A')) return true;
    else if(str6.startsWith('E')) return true;
    else if(str6.startsWith('I')) return true;
    else if(str6.startsWith('O')) return true;
    else if(str6.startsWith('U')) return true;
    else return false;
}
console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel('  '));
console.log(startVowel('123'));

// Task 9 

function swap4(str7) {
    if (str7.length > 7) {
    let first4 =  str7.slice(0, 4);
    let last4 = str7.slice(str7.length-4);
    let middle = str7.slice(4, str7.length-4);
    return last4 + middle +first4;
    } else return '';
}
console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4('  '));
console.log(swap4('Apple'));

// Task 10

function swapFirstLastWord (str8) {
    if(str8.trim().split(' ').length > 1) {
    let firstWord = str8.slice(0, str8.indexOf(' '));
    let lastWord = str8.slice(str8.lastIndexOf(' ')+1);
    let middleWord = str8.slice(str8.indexOf(' '), str8.lastIndexOf(' ')+1);
    return lastWord + middleWord + firstWord;
    } else return " "
}
console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like Javascript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord(' '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello '));