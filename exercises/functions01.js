function combineString(string1, string2){
    console.log(string1 , string2);
}
combineString('Emre', 'Akman');
combineString('Sampiyon', 'Galatasaray');

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(5,6);
sum('abc', 'def');
sum(99,101);

function findBigger(num1, num2){
    console.log(Math.max(num1, num2))
}
findBigger(12,33);
findBigger(-3, -9);

function findSmaller (num1 , num2, num3) {
    console.log(Math.min(num1, num2, num3));
}
findSmaller(-34, -45);
findSmaller(45,78,5);

console.log(Math.pow(2,3));
console.log(!isNaN('abc'));
console.log(17/Infinity)
