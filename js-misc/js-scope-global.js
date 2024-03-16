function findClosestTo10 (array) {
    
    
    const arrayDiff = newArr.map( x => Math.abs(10 - x));
    let closest = arrayDiff.indexOf(Math.min(...arrayDiff)) 
    return newArr[closest]
    
}

function secondMax (array) {
    if (array.length < 2) return array.join('');
let ar1 = [...new Set(array)];
let arMax = Math.max(...ar1)
let a2 = ar1.filter( x => x < arMax)
return (Math.max(...a2))
    
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]))



const ar1 = [1,1 , 5,4, 7,7 ,7]
let ar2 = [...new Set(ar1)];
let arMax = Math.max(...ar2)
let a3 = ar2.filter( x => x < arMax)
console.log(Math.max(...a3))

console.log(arMax);

const b1 = [4, 5, 5, 7, 7];
let b2 = b1.filter(x => x <7)
console.log(b2)

const factorial = (arr) => arr.reduce( (x , y)=> x * (y-1))
console.log(factorial([3]))
