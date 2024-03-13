function doMath(operator) {
    if(operator === '+') {
        return function (num1, num2) {
            return num1 + num2;
        }
    }
    else if(operator === '*') {
        return function (num1, num2) {
            return num1 * num2;
        }
    }
    else if(operator === '-') {
        return function (num1, num2) {
            return num1 - num2;
        }
    }
    else if(operator === '/') {
        return function (num1, num2) {
            return num1 / num2;
        }
    }
    else if(operator === '**') {
        return function (num1, num2) {
            return num1 ** num2;
        }
    }
}
const power = doMath('**')
const sum = doMath('+')
const divide = doMath('/')

console.log(power(3,2));
console.log(sum(3,2));

const arr = [2, 1, 3, 4];