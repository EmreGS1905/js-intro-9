
const hasVowel = str => {
    let vow = 'aeiou';
    const string = str.toLowerCase().split('');
    for(let i = 0; i < string.length; i++) {
      if(vow.includes(string[i])) return true;
    }return false

}
console.log(hasVowel('adana'));
console.log(hasVowel('DcD'));
console.log(hasVowel('cyx'));

let a ='adnanaDDDba'
let b = a.toLowerCase().split('')
console.log(b)

for (let i = 1; i <= 100; i++) {
    (i % 7 === 0)) 
}

const arr1 = [33, 44, 23, 55,22, 22,33, 44];
for (const number of arr1) {
    console.log(number)
}

console.log([...new Set(arr1)])

const mostRepeated = (array) => {
    let highestCount = 0;
    let mostReptElement;
       
    for(let i = 0; i < array.length; i++){
        let count = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]) count++;
       }
        if(count > highestCount){
        highestCount = count;
        mostReptElement = array[i]; 
        }
    }
    
   return mostReptElement; 
}



console.log(mostRepeated([4, 7, 4,7, 7, 4, 23, 23,7 ,23,7,23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10, 9, 9]));
console.log(mostRepeated(["TechGlobal"]));
function abc (array) {
for ( i = 0; i < array.length; i++) {
    for (j = 0 ; j < array.length; j++) {
        console.log(array[i] , array[j])
    }
}
}

const countPos = (array) => {
    let count = [];
    for (const num of array) {
        if(num > 0 ) count.push(num)
    } return count.length
} 
console.log(countPos([-45, 0, 0, 34, 5, 67,]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

const countA = (str) => str.toLowerCase().split('').filter( x => x === 'a').length;
console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA("Cypress"));

const counta = (str) => {
    let count = 0;
    
    for (const x of str.toLowerCase()) {
        if(x === 'a') count++
    }return count;
}
console.log(counta('TechGlobal is a QA bootcamp'));
console.log(counta('QA stands for Quality Assurance'));
console.log(counta("Cypress"));

const countVowels = (str) =>  str.split('').filter( x => 'aeiouAEIOU'.includes(x)).length;

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

const countConsonants = (str) => str.split('').filter( x => !'aeiou'.includes(x)).length
    
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

const num = [2, 3, 4, 5,6] //4+6+8+10 = 28
const num1 = [ 3, 1, 8]
//console.log(num.reduce( (x,y) => x + (y*2),0));


console.log(num.map( (x, y) => x + num1[y] || x))
