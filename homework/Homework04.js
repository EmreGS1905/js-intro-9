// Task 1
for (let i = 1; i <= 14 ; i++) {
    console.log(i*7)
}

// Task 2
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 2 === 0)
    console.log(i)
}
 // Task 3 
 for (i = 20 ; i >= 10; i--) {
    console.log(i * 5);
 }

 //Task 4
 for (i = 0 ; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i}`);
 }

 //Task 5 
 let output = 0;
 for (let i = 1 ; i <= 10; i++) {
    output += i;
}
console.log(output)

// Task 6
let factorial = 1;
let num = Math.floor(Math.random() * (10) + 1);
console.log(num);
for (i = num; i >= 1; i--) {
    factorial *= i 
}
console.log(factorial);

// Task 7
        for ( let i = 1 ; i < Infinity; i++) {
    let num1 = Math.floor(Math.random() * (100) + 1);
    if(num1 % 5 === 0) {
        console.log(`The random number is ${num1} and it took ${i} attemps to generate it`)
        break;
        }
}

// Task 8 
const countries = ['Germany' , 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);
console.log(countries.sort());

// Task 9 
const cartoon_dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(cartoon_dogs);
console.log(cartoon_dogs.includes('Pluto'));

// Task 10
const cartoon_cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(cartoon_cats.sort());
console.log(cartoon_cats.includes('Garfield') && cartoon_cats.includes('Felix'));

// Task 11
const numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);
for (let i = 0 ; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 12
const things = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(things);
let fLetter = 0;
let word = 0;
for (let i = 0; i < things.length; i++) {
    if(things[i].toLowerCase()[0] === 'b' || things[i].toLowerCase()[0] === 'p') fLetter++;
    if(things[i].toLowerCase().includes('book') || things[i].toLowerCase().includes('pen')) word++;
}
console.log(`Elements starting with 'B' or 'P'= ${fLetter}`);
console.log(`Elements having 'book' or 'pen'= ${word}`);

// Task 13
let ele10 = 0, lessThan10 = 0, moreThan10 = 0;
const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > 10) moreThan10++;
    else if (numbers1[i] < 10) lessThan10++;
    else ele10++;
}
console.log(numbers1);
console.log('Elements that are more than 10 =', moreThan10);
console.log('Elements that are less than 10 =', lessThan10);
console.log(`Elements that are 10 = ${ele10}`);

// Task 14 
const array1 = [5, 8, 13, 1, 2];
const array2 = [9, 3, 67, 1, 0];
const array3 = [];
for ( let i = 0 ; i < array1.length; i++) {
    if (array1[i] > array2[i]) array3[i] = array1[i]
    else array3[i] = array2[i]
}
 console.log('1st array is =', array1);
 console.log('2nd array is =', array2);
 console.log('3rd array is =', array3);

 // Task 15 
 function firstDuplicate (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length ; j++) {
            if(array[i] === array[j]) return array[i]
        } 
    }  return -1
 }
  
 console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
 console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
 console.log(firstDuplicate([5, '5', 3, 7, 4]));
 console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
 console.log(firstDuplicate([1, 2, 3]));
 console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

 // Task 16 ??

  function getDuplicates (array) {   
    const duplicates = [];
    
    for (let i = 0; i < array.length; i++) {
       
        for (let j = i+1; j < array.length ; j++) {
        
            if(array[i] === array[j]) duplicates.push(array[j]);
            
        } 
    } let newDuplicates =[...new Set(duplicates)];
    return newDuplicates;
}
 console.log(getDuplicates([0, -4, -7, 0, 5, 10, -45, -7, 0]));
 console.log(getDuplicates([1,2,5,0,7]));
 console.log(getDuplicates(['A','foo','12','bar','a','a','foo']));
 console.log(getDuplicates(['foo','12',12,'bar','a']));

 
 function reverseStringWord(str) {
   
    let str1 = str.split(' ');
    for (let i = 0; i < str1.length; i++) {
        let revElement = ' ';
        let eachElement = str1[i];
        for(let j = eachElement.length-1 ; j >=0; j--) {
            revElement += eachElement[j];
            
        }str1[i]=revElement
       
    }let revStr = str1.join(' ');
    return revStr;
   

 }
 
console.log(reverseStringWord('Hello World'));
console.log(reverseStringWord('I like Javascript'));
console.log(reverseStringWord('Hello'));
console.log(reverseStringWord(''));
console.log(reverseStringWord(' '));



 // Task 18
 const getEvens = (num1, num2) => {
    const evenNums = [];
    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 === 0) evenNums.push(i)
    } return evenNums;
 }
console.log(getEvens(2,7));
console.log(getEvens(17,5));
console.log(getEvens(4,4));
console.log(getEvens());

// Task 19
const getMultipleOf5 = (num1, num2) => {
    const multi5 = [];
    if (num1 < num2) {
        for (i = num1 ; i <= num2; i++) {
            if(i % 5 === 0) multi5.push(i);
        }
    } else if (num1 > num2) {
        for (i = num1; i >= num2; i--) {
            if(i % 5 === 0) multi5.push(i);
        }
    } else if (num1 === num2) multi5.push(num1);
    return multi5;
}
console.log(getMultipleOf5(3,17));
console.log(getMultipleOf5(23,5));
console.log(getMultipleOf5(5,5));
console.log(getMultipleOf5(2,4));

// Task 20 
function fizzBuzz (n1, n2) {
    let str = ' ';
}




