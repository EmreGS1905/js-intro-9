const person = {
    fname: 'emre',
    lname: 'akman',
    age: '44',
    greet() {
        console.log(`My name is ${this.fname}`);
    }
}
person.greet()
console.log(person.age *2 <130)

function Cars (make , model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Cars.prototype.info = function() {
    console.log(`${this.make} ${this.model} has navigation system`);
}

Cars.prototype.fuel = function () {
    console.log(`${this.make} ${this.model} uses unleaded fuel}`);
}
const car1 = new Cars ('Honda', 'Civic', 2016);
const car2 = new Cars ('Mercedes', 'CL500', 2020);

const cars = [car1, car2]
console.log(car1);
car2.info();
car2.fuel();
console.log(cars.filter( x => x.make === 'Mercedes'))
const newer = cars.reduce((newer , current) => current.year > newer.year ? current : newer );
console.log(newer.model)


const ar1 = [5, 6, 3, 7];
let count = 0;
const ar5 = (arr) => arr.reduce( (acc, y)  => ( acc = y ) +1, acc)
console.log(ar5([5, 6, 3, 7,7 ,4, 3,3,3]));



const ar2 = [5, 6, 3, 7];

const player = {
    fname: 'Emre',
    lname: 'Akman',
    age: 44,
    position: {
        a:'midfield',
        b: 'forward'
    },
    goals: 25,
    full ()  {
        return `${this.fname} ${this.lname}`
    }
}
//const play = [player]
//console.log(play.map( (x) => (x.full())))

console.log(player.age)

console.log(player['goals'])

for(const x in player.position) {
    
 console.log(player.position[x]);
}

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


const vowels = ['a', 'e', 'i', 'o', 'u'];

const noVowel1 = (str) => str.split('').filter((char) => !vowels.includes(char.toLowerCase())).join('');

console.log(noVowel1("TechGlobal"));
console.log(noVowel1("AEOxyz"));
console.log(noVowel1("Javascript"));
console.log(noVowel1(""));
console.log(noVowel1("125$"));

const sumOfDigits = (str) => str.split('').filter( x => x > -Infinity)
console.log(sumOfDigits('Javascript'));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits('$125.0'));
console.log(sumOfDigits(''));

const el = (arr) => {
for (i = 0 ; i < arr.length; i++) {
    for (let n )
}
}

el([ 5, 8, 6, 7, 11]);

function arrFactorial(arr) {
    function factorial(n) {
        return (n !== 1) ? n * factorial(n - 1) : 1;
    }

    return arr.map(number => factorial(number));
}
console.log(arrFactorial([ 5, 8, 6, 4, 1]));


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

    for (let char of string) {
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

// HW 6 Task 8 

const countPrimes = (arr) => {return arr.filter( x => {
    
    if (x < 2 ) return false;
    for (let i = 2 ; i < x ; i++) {
        if( x % i === 0) return false
    } return true;
}).length
}
console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));