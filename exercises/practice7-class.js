// Task 1
const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

const overAge30 = users.filter( x => x.age > 30).length;
console.log(overAge30);
const chicagoPeople = users.filter(x => x.address.city === 'Chicago').length;
console.log(chicagoPeople);
const peopleIL = users.filter(x => x.address.state === 'IL').length;
console.log(peopleIL);
const gmailUsers = users.filter(x => x.email.endsWith('@gmail.com')).length;
console.log(gmailUsers);
const ageUnder35 = users.filter(x => x.age < 35).map(user => user.firstName);
console.log(ageUnder35);
const avrgAge = users.reduce((sum, x) => sum + x.age, 0) / users.length;
console.log(avrgAge);


const ages = [15, 26, 17, 44 , 31, 5];
const sortNums = ages.sort((a, b) => a-b);
const sumOfAges = ages.reduce((sum, age) => sum + age, 0);
const maxAge = Math.max(...ages);
const maxAge1 = ages.reduce((max, age) => max > age ? max : age);
console.log(sumOfAges);
console.log(maxAge);
console.log(maxAge1);
console.log(sortNums);