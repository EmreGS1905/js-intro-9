// Write a function which takes an array, returns the first element 
function first(array) {
    return array[0];
}
console.log(first([3, 5, 8]));
console.log(first([0]));

// Write a function takes an array returns the last element
function last(array) {
    return array[array.length-1];
}
console.log(last(['Tech', 'Global']));
console.log(last(['Tic', 'Tac,', 'Toe']));
console.log(last(['Apple']));

// Write a function takes an array and returns it back with replacing negative number with 0
function noNegatives (array) {
    for (i = 0 ; i < array.length; i++) {
       if(array[i] < 0) array[i] = 0; 
       
    }
    return array;
}
console.log(noNegatives([3, -5, 6]));
console.log(noNegatives([-10]));
console.log(noNegatives([1, -10 ,-5 , 9, -8]));

//Write a function takes an array and returns back by swapping first and last elements
function swapEnds (array) {
    let first = array[0];
    let last = array[array.length - 1];
    let mid =  array.slice(1, array.length - 1);
    return (last + ' ' + mid + ' ' + first).replaceAll(',',' ')
}
console.log(swapEnds(['Sampiyon', 'artik' ,'Galatasaray']));
console.log(swapEnds(['Sampiyonluk', 'yakin', 'mesaleleri', 'sari', 'kirmizi']));

// reverse array
const reverseArr = (array) => {
    return array.reverse();
}
console.log(reverseArr([3, 5, 8]));
console.log(reverseArr([10]));
console.log(reverseArr([10, 7, -3, -2]));

// write a function returns sum of first andlast element
function sumFirstLast (array) {
    return array[0] + array[array.length-1];
}
console.log(sumFirstLast([3, 5, 8]));
console.log(sumFirstLast([10]));
console.log(sumFirstLast([10, 3,5, -2]));

// write a function returns true if array has element equal to 10
function has10(array) {
    return array.includes(10);
}
console.log(has10([3]));
console.log(has10([-10, 0, 7]));
console.log(has10([0, 10, 7]));

// write a function returns true if array has an element > than 0
function hasPositive (array) {
    for (i = 0; i < array.length ; i++) {
        if (array[i] > 0) return true;
    }
    return false;
}
console.log(hasPositive([0, 0]));
console.log(hasPositive([0, 0, 8]));
console.log(hasPositive([-10, 0, -5]));

// write a function returns true if array has an element < than 0
const hasNegative = (array) => {
    for(i = 0; i < array.length ; i++) {
        if (array[i] < 0) return true;
    }
    return false;
}
console.log(hasNegative([0, 0]));
console.log(hasNegative([10, 0, 7]));
console.log(hasNegative([3, -5]));

// write a function returns true if all the array elements are multiple of 5

const multipleOfFive = (array) => {
    let counter = 0;
    for (i = 0 ; i < array.length; i++) {
        if (array[i] % 5 === 0) counter+=1;
        
    }
    if (counter === array.length) return true;
    else return false;
}
console.log(multipleOfFive([ 20, 70]));
console.log(multipleOfFive([5, 10, 15, 0, -5]));
console.log(multipleOfFive([ 10, 0, 7]));
console.log(multipleOfFive([ 2, 7]));
console.log(multipleOfFive([ 20, 70, 5]));

// write a function that counts 3s in the array
function count3 (array) {
    let output = 0;
    for(i = 0 ; i < array.length; i++) {
    if(array[i] == 3) output += 1;
    
    }
    return output;
}


console.log(count3([4, 5]));  
console.log(count3([-4, -5, 3]));  
console.log(count3([4, 3, 5,3]));  
console.log(count3([4, 3, 3, 3,5 , 3]));
console.log(count3([3, 4, 3,3, 7, 7, 3]));
console.log(count3([73]));

// write a function takes an array return empty string if elements have length more than 4

function replaceLong (array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 4) array[i] = ''
        }
        return array;
}
console.log(replaceLong(["Tech", "Global"]));
console.log(replaceLong(["Apple"]));

// write a function returns true if any elements starts wit A or a
function hasA(array) {
    for (i = 0 ; i < array.length; i++) {
    if (array[i][0] === "A" || array[i][0] === "a")
    return true
}
    return false;
}
console.log(hasA(["Tech", "Global"]));
console.log(hasA(["Tech", "Alo"]));
console.log(hasA(["aech", "bilo"]));

// write a function takes an array and returns true if no empty elements