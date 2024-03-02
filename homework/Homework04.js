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






