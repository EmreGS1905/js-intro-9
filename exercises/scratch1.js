class Cars {
    constructor (make, model , color, year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    info () {
        return `This ${this.make} ${this.model} is ${this.color}`
    }
}
const car1 = new Cars ('Honda', 'Civic', 'silver', 2023);
console.log(car1.info());

let vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];
console.log(vegetables.splice(1, 2));

console.log(typeof null)

const a = [2, 5, 7, 8];

console.log(a.splice(1, 1, 'number', 'string'));
console.log(a)

console.log(a.slice(1,3))
console.log(a)

const nums = [2, 5, 7, 8];
console.log(nums.slice(1,3));
console.log(nums.splice(1,2, '6'));
console.log(nums);

const nums1 = [2, 2, 5, 7, 8, 8, 10, 10];
console.log(...new Set (nums1))

//const noXInVariables = (array) => {
  //  return array.join(' ').split('').filter(char => char.toLowerCase() !== 'x').join('').split(' ').filter(x => x !== '');
//}
const noXInVariables = (array) => {
    const array2 = [];
    for(let i = 0; i < array.length; i++) {
      array2.push(array[i].toString().split('').filter(x => x.toLowerCase() !== 'x').join(''));
    }
      return array2.filter(x => x);
}
console.log(noXInVariables(["abc", 123, "#$%"]));
console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));

const noXInVariables1 = (arr) => {
    const newArr = arr.join(' ').split('');
    newArr.reduce((str, char) => char.toLowerCase() !== 'x' ? str += char : str, '' ).split(' ').filter(x => x);
}
console.log(noXInVariables1(['abc', 123, '#$%']));
console.log(noXInVariables1(['xyz', 123, '#$%']));
console.log(noXInVariables1(['x', 123, '#$%']));
console.log(noXInVariables1(['xyXyXy', 'Xx', 'ABC']));

const ar = [2, 4, 77, 45];
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(ar))