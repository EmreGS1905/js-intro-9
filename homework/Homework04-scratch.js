// Task 14
const array1 = [5, 8, 13, 1, 2];
const array2 = [9, 3, 67, 1, 0];
const array3 = [];
for ( let i = 0 ; i < array1.length; i++) {
    array3.push(Math.max(array1[i], array2[i]));
   
}
console.log(array1);
console.log(array2);
console.log(array3);

// Task 15
function firstDuplicate (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length ; j++) {
            if(array[i] === array[j]) return array[i]
        } 
    }  return -1;
 }
  
 console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
 console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
 console.log(firstDuplicate([5, '5', 3, 7, 4]));
 console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
 console.log(firstDuplicate([1, 2, 3]));
 console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));


 