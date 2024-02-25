const {generateRandomNumber} = require('../utils/MathHelper.js')

let n1 = generateRandomNumber(1, 12) 
console.log('Randomly generated number is = ' + n1)
    if (n1 === 1 || n1 === 2 || n1 === 12) {
        console.log('Winter')
    } else if (n1 === 3 || n1 === 4 || n1 === 5) {
        console.log('Spring')
    }else if (n1 === 6 || n1 === 7 || n1 === 8) {
        console.log('Summer')
    }else {
        console.log('Fall')
    }
