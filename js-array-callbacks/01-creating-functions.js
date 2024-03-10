function product1(num1, num2) {
    return num1*num2;
}
console.log(product1(5,6));

const product2 = function (num1, num2) {
    return num1 * num2;
}

const product3 = (num1, num2) => num1*num2;

console.log(product3(3,5));
console.log(product3(2,0));
console.log(product3(4,3));

const upperCaseName = (string) => string.toUpperCase();
console.log(upperCaseName('John'))
console.log(upperCaseName('TechGlobal'))