// BEFORE ES6
// Create a template with constructor function
function Person () {
}
Person.prototype.eat = function () {
    console.log('EAT');
}
Person.prototype.sleep = function () {
    console.log('SLEEP');
}
function Programmer () {
}
// Inherit all the Person methods into Programmer
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
    console.log('CODE');
}
const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();

function Singer () {
}
Singer.prototype = Object.create(Person.prototype);
Singer.prototype.sing = function () {
    console.log('SING');
}
const singer_first = new Singer();
singer_first.sing();
singer_first.eat();
singer_first.sleep();





