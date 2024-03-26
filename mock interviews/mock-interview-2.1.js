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
    const vowels = ['a', 'e', 'i', 'o', 'u'];
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



