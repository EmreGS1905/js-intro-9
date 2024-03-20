class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        
    }

}

class Customer extends Person {
    constructor (fname, lname, age, id) {
        super(fname, lname, age);
        this.id = id;
        
    }
}