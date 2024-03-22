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

