const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullname: function () { 
        console.log(this.first_name, this.last_name);
    },
    info: function () {
        return `${this.first_name}, ${this.last_name} was born in ${this.date_of_birth}`
    }
};

console.log(person.info());
