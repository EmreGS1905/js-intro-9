// Task 1
function firstPos(arr) {
    for (const number of arr) {
        if(number > 0) return number;
    }
}
console.log(firstPos([0, 3, -9,  5, 8]) );
console.log(firstPos([-2, 0, -7, 10, -5]) );
console.log(firstPos([1, 2, 3, -2]) );

// Task 2
const lastNeg = (array) => {
    let negative = 0;
    for (const number of array) {
        if(number < 0) negative = number;
    } return negative;
}
console.log(lastNeg([0, 3, -9,  5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

// Task 3 
function firstLongest (array) {
    let longestword = array[0];
    for (const word of array) {
        if (word.length > longestword.length) longestword = word;
    }return longestword;
}
console.log(firstLongest(["red", "blue", "yellow", "white"])) 	
console.log(firstLongest(["Apple", "Banana", "Orange"]) )
console.log(firstLongest(["purple", "yellow", "orange"]) )

// Task 4
function lastShortest (array) {
    let shortest = array[0];
    for (const word of array) {
        if(word.length <= shortest.length) shortest = word;
    }return shortest;
}
console.log(lastShortest(["red", "blue", "yellow", "white"])); 
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"])); 

// Task 5
function max(array) {
    let maximum = array[0];
    for ( const number of array) {
        if(number > maximum) maximum = number;
    }return maximum;
}
console.log(max([0, 3, -9,  5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));

// Task 5 with nested loop
function m(array) {
    let maxi = 0;
    for (const num of array){
        for(const num1 of array) {
            if (num1 > num) maxi = num1
        } 
    }return maxi
}
console.log(m([0, 3, -9,  5, 8]));
console.log(m([-2, 0, -7, 10, -5]));
console.log(m([1, 2, 3, -2]));

// Task 6
const min = (array) => {
    let mini = array[0];
    for(const number of array) {
        if(number < mini) mini = number;
    }return mini;
}
console.log(min([0, 3,  5, 8])) 	
console.log(min([-2, 0, -7, 10, -5])) 
console.log(min([1, 2, 3, 15]))

// Task 7 with nested loop
function commonElements(arr1, arr2) {
    const output = [];
    for ( const ele1 of arr1) {
        for (const ele2 of arr2) {
            if (ele2 === ele1) output.push(ele2) 
        }
    }return output;
}
console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])) 
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])) 
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]))

// Task 7 
function commonElements(arr1, arr2) {
    const commonE = [];

    for (let i = 0; i < arr1.length; i++) {
       
        if (arr2.includes(arr1[i])) {
            commonE.push(arr1[i]);
        }
    }

    return commonE;
}
console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements([30, 50, 70], [20, 100, 300]));
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));

