// Task 1
let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

console.log(sentence1.slice(7, 12).toUpperCase());
console.log(sentence2.slice(0, 4) + sentence2.slice(14, 15).toUpperCase() + sentence2.slice(15,20));
console.log(sentence3.replace("don't",''));

// Task 2

/* let s3 = '';
console.log(s3[(s3.length/2)-1]+ s3[s3.length/2]);    */            

// Task 5

/* let s4 = 'JavaScript';

console.log(s4.slice(0,2));
console.log(s4.slice(-2));
console.log(s4.slice(2, -2)); */

//Task 9 
let s8 = 'I like Apple';
console.log(s8.replaceAll(" ", "" ).length);
// Task 10

// Task 6 

let str1 = '12abBA12';
console.log(str1.slice(0,2) === str1.slice(-2))

// Task 7 
let str2 = 'AEmreA';
let str3 = 'BAkmanB';
console.log(str2.slice(1,str2.length-1) +  str3.slice(1, str3.length - 1));


