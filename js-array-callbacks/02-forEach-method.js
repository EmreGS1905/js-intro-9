const names = ['John', 'Jane', 'Alex', 'Max'];

names.forEach((name) => console.log(name))
names.forEach((name) => console.log(name[0]))
names.forEach((name) => console.log(name.toUpperCase()))
names.forEach((name) => {
    if(name.startsWith('J')) console.log(name)
}); 
let count = 0;
names.forEach(name => {
    if(name.length === 4) count++;
});
console.log(count);
const newOne = [];
const numbers = [5, 10, 3, 0, -2];
numbers.forEach( number => console.log(number));
numbers.forEach( number => {
    console.log(number % 2 === 0);
    
})
numbers.forEach(number => {
    newOne.push(number*3)
})
console.log(newOne)
const newArr = [];
numbers.forEach(number => {
    if(number % 2 === 0) newArr.push(number)
})
console.log(newArr);

const newArr2 = numbers