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



