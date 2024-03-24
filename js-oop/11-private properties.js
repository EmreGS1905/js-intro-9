class Author {
    // private properties 
    fname;
    lname

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

const author1 = new Author('John', 'Doe');
console.log(author1);