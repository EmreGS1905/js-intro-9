const sentences = ['Good morning' , 'I like arrays', 'It is Sunday'];
const newSentences = sentences.map(word => word.split(' ')[0]);
console.log(sentences);
console.log(newSentences);

const newSentences1 = sentences.map(sentence => sentence.split(' ').at(-1));
console.log(sentences);
console.log(newSentences1)


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
const newSalaries = salaries.map(salary => parseFloat(salary.toFixed(2)));
console.log(newSalaries);

const numbers = [10, 5, 100, 77, 50, 65, 0];
const newArr = numbers.filter( number => number >= 50);
console.log(newArr);

const fruits = ['Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
const apples = fruits.filter(fruit => fruit.toLowerCase().includes('apple'));
const iFruit = fruits.filter(fruit => fruit.toLowerCase().includes('i'));

console.log(apples);
console.log(apples.length);
console.log(iFruit.length);

const numbers1 = [0, 10, -4, 5, 2, -3];
const firstP = numbers1.find(num => num > 0);
console.log(firstP);

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
console.log(cities.find(city => city.length === 4));
console.log(cities.findLast(city => city.length === 6));
console.log(cities.findIndex(city => city === 'LA'));
console.log(cities.find(city => city.includes('i')));
console.log(cities.findLast(city => city.length === 4));

const numbers2 = [-5, 0, 5, 10, 23, -10];
console.log(numbers2.some(x => x % 5 === 0));
console.log(numbers2.every(x => x > 0));
console.log(numbers2.some(x => x < 0));