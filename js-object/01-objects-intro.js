const person = {
    firstName: 'Emre',
    lastName: 'Akman',
    spouse: 'Dee',
    age: 44,
    favNumber: 5,
    favCities: ['Istanbul', 'Chicago'],
    address: {
        street1: '3664 Gatewwod Ln',
        city: 'Aurora',
        state: 'IL',
        ZIP: 60504
    },
    jobTitle: 'Software Engineer in Test',
    likeJS: true,
    SSN: null 
};

console.log(person);

// other object creating way
const phone = {};
const phone2 = new Object(); 

const mug = {
    price: 10.99,
    color: 'White',
    size: 8
}
console.log(mug);
// getting property values
console.log(mug.price);
console.log(mug.color);
console.log(mug['size']);

//how to add a new property
mug.material = 'Glass';

console.log(mug);
console.log(mug['material']);

// how to remove the property
delete mug.size;
delete mug['material'];

console.log(mug);



