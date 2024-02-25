//Absolute Difference
function findAbsoluteDifference (num1, num2) {
    console.log(Math.abs(num1 - num2));
}
findAbsoluteDifference(5,90);
findAbsoluteDifference(5,0);

//Is Odd
let isOdd = (num) => {
    if (num % 2 == 1) return true;
    else return false;
}
console.log(isOdd(8));
console.log(isOdd(99));

//Is Even
let isEven = (num) => {
    if( num % 2 == 0)
    console.log(true)
    else 
    console.log(false)
}
isEven(9);
isEven(10);

// Is Positive

function isPositive (number) {
    if (number > 0 ) return true;
    else return false;

}
console.log(isPositive(9));
console.log(isPositive(-6));