// write a function returns the word back doubled

function doubleWord (string) {
    return string+string;
}
console.log(doubleWord('Global'));

// write a function returns the first character of the word

function firstCharacter (string) {
    return string[0];
}
console.log(firstCharacter('Global'));
console.log(firstCharacter('512'));

// write a function returns the first two characters of the word

function firstTwoCharacters(string) {
    return string.slice(0,2);
}
console.log(firstTwoCharacters('Sampiyon'));
console.log(firstTwoCharacters(' '));
console.log(firstTwoCharacters('1'));

// write a function returns the last character of the word

function lastCharacter (string) {
    return string[string.length - 1];
}
console.log(lastCharacter('Hello'));
console.log(lastCharacter(' '));
console.log(lastCharacter('World'));

// write a function returns the last 2 characters of a word

function lastTwoCharacters (string) {
    return string.slice(-2);
}
console.log(lastTwoCharacters('Tech'));
console.log(lastTwoCharacters('Global'));
console.log(lastTwoCharacters(''));
console.log(lastTwoCharacters('1'));

// write a function return the first and the last character of a word

function firstLast (string) {
    if(string.length > 1) return string[0] + string.at(-1);
    else return string
}
console.log(firstLast('Tech'));
console.log(firstLast('Global'));
console.log(firstLast(' '));
console.log(firstLast('1'));
console.log(firstLast('a'));

// write a function returns true if string has least 5 characters

function hasFive(string) {
    return string.length >= 5;
}
console.log(hasFive('abcd'));
console.log(hasFive('12345'));

//write a function and return the middle chartacter of the word

function middle(string) {
    if (string.length % 2 === 0 ) {
        return string.slice((string.length/2)-1, (string.length/2)+1 )
    }
    else if (string.length % 2 !== 0) {
        return string[(string.length-1)/2];
    }
    else return string;
}
console.log(middle('Tech'));
console.log(middle(''));
console.log(middle('abcd'));
console.log(middle('123'));
console.log(middle('12345'));

// find the longer string

function longer(str1, str2) {
    if (str1.length > str2.length) return str1;
    else return str2;
}
console.log(longer('emre', 'akman'));
console.log(longer('huseyin', 'akman'));

// find the shorter string

function shorter (str1, str2) {
    if(str1.length < str2.length) return str1;
    else return str2;
 }
console.log(shorter('emre', 'akman'));
console.log(shorter('huseyin', 'akman'));

// concat two string

function concat(str1 , str2) {
    return str1 + str2;
}
console.log(concat ('hello', 'world'));
console.log(concat ('hello', 'globsl'));
console.log(concat ('', 'globsl'));

// write a function to find out if the word starts with a vowel

function startVowel(str) {
    return 'aeiouAEIOU'.includes(str[0])
}
console.log(startVowel('amre'));
console.log(startVowel('Oemre'));
console.log(startVowel('tAemre'));
console.log(startVowel('Oranyo'));


console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false))
console.log((!true && !false) || 5 * 2 === true * 10)
console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0)
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5))
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1")
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange"))
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false))
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false))
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"))
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true))
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10))
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true))
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true))
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0))
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1))