//Task 1 
const hasLowerCase = (string) => string.toUpperCase() !== string;
console.log(hasLowerCase(''));
console.log(hasLowerCase('JAVASCRIPT'));
console.log(hasLowerCase('hello'));
console.log(hasLowerCase('125$'));
console.log(hasLowerCase('a'));

// Task 2
const noZero = (array) => array.filter( x => x !== 0);
console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));

// Task 3
const numberAndSquare = (arr) => arr.map( x => [x , x**2]);
console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

// Task 4 
const containsValue = (arr, str) => arr.includes(str);
console.log(containsValue(['abc', 'foo', 'javascript'] , 'hello'));
console.log(containsValue(['abc', 'def', '123'] , 'Abc'));
console.log(containsValue(['abc', 'def', '123', 'Javascript', 'Hello'] , '123'));

// Task 5
const reverseSentence = (str) => {
    if(str.split(' ').length < 2) return `There is not enough words`
    return str.split(' ').reverse().join(' ')
}
console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence('This is a sentence'));

// Task 6 
const removeStringSpecialDigits = (str) => { 
    const arr =str.split('');
    return arr.filter( x => x >= 'a' && x <= 'z' || x >='A' && x <='Z' || x === ' ').join('');
}
console.log(removeStringSpecialDigits('123Javascript #$%is fun'));
console.log(removeStringSpecialDigits('Cypress'));
console.log(removeStringSpecialDigits('Automation123#$%'));

// Task 7 
const removeArraySpecialDigits = (strArr) => {
    const newArr = strArr.join(' ').split('')
    return newArr.reduce((str, x) => x >= 'a' && x <= 'z' || x >='A' && x <='Z' || x === ' '? str += x : str, '').split(' ');
}
  
console.log(removeArraySpecialDigits(['123Javascript', '#$%is' ,'fun']));
console.log(removeArraySpecialDigits(['Cypress', '123$%', '###']));
console.log(removeArraySpecialDigits(['Automation', '123#$%tool']));

// Task 8 
const getCommons = (arr1, arr2) => {
    const arr3 = [];
    for(const ele of arr1) {
        for(const word of arr2) {
            if(word === ele) arr3.push(word)
        }
    }return [...new Set(arr3)];
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); 
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); 	
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); 

// Task 9
const noXInVariables = (arr) => {
    const newArr = arr.join(' ').split('');
    const newArr2 = newArr.reduce((str, char) => char.toLowerCase() !== 'x' ? str += char : str, '' ).split(' ').filter(x => x);
    return newArr2.map( ele => isNaN(parseInt(ele)) ? ele : parseInt(ele))
} 
console.log(noXInVariables(['abc', 123, '#$%']));
console.log(noXInVariables(['xyz', 123, '#$%']));
console.log(noXInVariables(['x', 123, '#$%']));
console.log(noXInVariables(['xyXyXy', 'Xx', 'ABC']));

