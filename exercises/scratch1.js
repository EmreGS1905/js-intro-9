class Cars {
    constructor (make, model , color, year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    info () {
        return `This ${this.make} ${this.model} is ${this.color}`
    }
}
const car1 = new Cars ('Honda', 'Civic', 'silver', 2023);
console.log(car1.info());

let vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];
console.log(vegetables.splice(1, 2));

console.log(typeof null)

const a = [2, 5, 7, 8];

console.log(a.splice(1, 0, 'number', 'string'));
console.log(a)

console.log(a.slice(1,3))
console.log(a)

const nums = [2, 5, 7, 8];
console.log(nums.slice(1,3));
console.log(nums.splice(1,2, '6'));
console.log(nums);

const nums1 = [2, 2, 5, 7, 8, 8, 10, 10];
console.log(...new Set (nums1))