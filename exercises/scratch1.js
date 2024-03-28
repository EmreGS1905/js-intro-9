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

