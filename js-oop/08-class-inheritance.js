// AFTER ES6

class Person {
    constructor () {

    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }
}

class Programmer extends Person {
    code() {
        console.log('CODE');
    }
}

const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();

class Singer extends Person {
    sing() {
        console.log("SINGS A SONG")
    }
}
const singer_Muslum = new Singer();
singer_Muslum.eat();
singer_Muslum.sleep();
singer_Muslum.sing();