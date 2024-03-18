// reduce() method
const numbers = [4, 10, 3, 0, -2, -5, 1];
const sum = numbers.reduce((total, amount) => total + amount);
console.log(sum);
const average = numbers.reduce((total, amount) => total + amount) / numbers.length;
console.log(average);
const product = numbers.reduce((total, amount) => total * amount);
console.log(product); 

const fruits = ['Orange', 'Apple', 'Kiwi', 'Pineapple', 'Melon'];
console.log(fruits.reduce((total, fruit) => {
    if(fruit.toLowerCase().includes('apple')) return total+=1 
    else return total;
}, 0));
console.log(fruits.reduce((total, fruit) => {
    if(fruit.toLowerCase().includes('i')) return total+=1
    else return total;
}, 0 ));
console.log(fruits.reduce((total, fruit) => {
    if(fruit.toLowerCase().endsWith('e')) return total+=1
    else return total;
}, 0 ));

function arr (array) {
    return Math.max(...array)
}
console.log(arr([4, 6, 3, 33]))


const product1 = (...args) => {
    if(args.length === 0) return 0 ;
 return args.reduce((a,b) => a * b);
}
console.log(product1());
console.log(product1(5));
console.log(product1(2, 5));
console.log(product1(2, 5, 3));