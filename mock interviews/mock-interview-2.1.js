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
    let fChar = str.trim().at(0);
    let lChar = str.trim().at(-1);
    let middle = str.trim().slice(1, str.length - 1);
    return lChar + middle + fChar;
}
console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Hello     '));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('   A    '));



