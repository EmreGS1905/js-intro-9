const {generateRandomNumber}

console.log(1);


for (let i = 50 ; i >= 0 ; i-=10)
console.log(i)

for (let i = 100 ; i >= 0 ; i--) {
    console.log(i)
}

for (let i = 0 ; i <= 250 ;  i+=5) {
     console.log(i/5);
}

for (let i = 0 ; i <= 10 ;  i++) {
    console.log(i*5);
}
let output = 0;
for (let i = 10 ; i <= 15 ; i++) {
    output+= i;
}
console.log(output)
let school = 'TechGlobal School';
let count = 0;
for (i = 0 ; i < school.length ; i++) {
    if(school[i] === 'o') count+=1;
}
console.log(count)

let num1 = Math.floor(Math.random() * (11) +10);
for (i = 1 ; i <= num1; i++) {
    if(i % 2 !== 0) console.log (i) 
}

let num2 = Math.floor(Math.random() * (10) +1);
let num3 = Math.floor(Math.random() * (10) +1);
let numMin = Math.min(num2, num3);
let numMax = Math.max(num2, num3);
for (i = numMin ; i <= numMax; i++) {
    console.log(i);
}
console.log(num2, num3);