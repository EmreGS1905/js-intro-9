const student1 = {
    firstName: 'Emre',
    lastName: 'Akman',
    age: 99,
    address: 'Aurora'
};
console.log(student1);
console.log(student1.firstName);
console.log(student1.age);

console.log(student1.height);

student1.address = 'Chicago';
console.log(student1);
console.log(student1['age']);

//Adding a new property
student1.favColor = 'blue';
console.log(student1);

//Deleting a property
delete student1.address;
console.log(student1);
