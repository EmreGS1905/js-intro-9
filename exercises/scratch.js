const firstPos = (arr) => {
    for (num of arr) {
        if (num > 0) return num;
    }
}
    
console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -9, 10, -5]));
console.log(firstPos([1, 2, -9, 10, -5]));

const lastNeg = (arr) => {
    const arrNeg = arr.filter( x => x < 0);
    return arrNeg[arrNeg.length-1];
}
// another way
const lastNeg = (array) => {
    const arr1 = array.reverse()
    for (num of arr1) {
        if (num < 0 ) return num;
    }
   
}

console.log(lastNeg([0, 3, -9, 5, 8]))
console.log(lastNeg([-2, 3, -97, 7, -5]))
console.log(lastNeg([2, 3, 17, 7, -2]))

// Task 3
const firstLongest = (arr) => {
    let longest = arr[0];
    for (word of arr) {
        if(word.length > longest.length) longest = word;
    }return longest
}
console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));

// Task 4 
const lastShortest = (arr) => {
    let last = arr[0];
    for(word of arr) {
        if(word.length <= last.length) last = word;

    }return last;
}
const lastShortest = (arr) => arr.reduce((x,y) => y.length <= x.length ? y : x)
console.log(lastShortest(["redness", "blue", "yellow",'red', "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));

// Task 5
const max = (arr) => Math.max(...arr);
console.log(max([0, 3, -9, 5, 8]));
console.log(max([0, -2, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));

// Task 6 
const min = (arr) => Math.min(...arr);
console.log(min([0, 3, -9, 5, 8]));
console.log(min([0, 3, -9, 5, -99]));
console.log(min([0, -2, -7, 10, -5]));
console.log(min([1, 2, 3, -2]));

// Task 7 

const commonElements = (arr1, arr2) =>{
    const arr3 = []
    for (num of arr1) {
        if(arr2.includes(num)) arr3.push(num)
    }return arr3
}
console.log(commonElements([10,20,30,50,70], [20,50,70]));
console.log(commonElements([30,50,70], [20,100,300]));
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));
