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
    let mid =  array.slice([1], [array.length - 1])
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
