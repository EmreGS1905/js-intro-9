// P07 - Capitalise a string
const capitalize = (str) => {
   let a1= str[0].toUpperCase() + str.slice(1, str.indexOf(' '));
    let a2 = str.at(str.indexOf(' ') +1).toUpperCase() + str.slice(str.indexOf(' ')+2)
    return a1 + ' ' + a2;
}
console.log(capitalize('huseyin emre akman'));
const arr = []
const capitalizeArrEle = (str) => {
    let a1 = str.split(' ');
    for (const string of a1) {
        arr.push(string[0].toUpperCase() + string.slice(1));
        
    } return arr.join(' ')
}
console.log(capitalizeArrEle('emre akman oley'))

// check if the number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(8));
console.log(isEven(7));