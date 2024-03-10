// function -find the last occurence of negative number in the array
function negativeNumber (array) {
    for (let i = array.length -1; i >= 0 ; i--) {
        if(array[i] < 0 ) return array[i];
    }
}
console.log(negativeNumber([3, 5, 6,-5 ,5,-6]));
console.log(negativeNumber([-4,3, 5, 6,]));
console.log(negativeNumber([3, 5, 6,-9, 0 ,-1]));

// Write a function takes an array and returns it back with replacing negative number with 0
function replaceNeg (array) {
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] < 0) array[i]= 0;
    }return array
}
console.log(replaceNeg([3, -5, 6]));
console.log(replaceNeg([-10]));
console.log(replaceNeg([1, -10 ,-5 , 9, -8]));

//Write a function countPalindrome() takes a string, returns the number of palindrome words
function countPalindrome (str) {
    let counter = 0;
    let str1 = str.split(' ');
    console.log(str1);
    for (let i = 0 ; i < str1.length ; i++) {
    if( str1[i].toLowerCase() === str1[i].split('').reverse().join('').toLowerCase()) counter++
    } return counter
}
console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"))

// sum the square of numbers in an array
const numArr = [ 10,2,5,6,1];
let sum = 0;
for (const num of numArr) {
   sum += num**2
}
console.log(sum)
const vowels = ['a', 'e', 'i', 'o', 'u'];
function hasV (str) {
    for (i =0 ; i < vowels.length ; i++) {
        if(str.includes(vowels[i])) return true;
    }  return false;
}
console.log(hasV('rerrA'))

for (let i = 0 ; i < str.length ; i++ ){
   
 console.log(str.includes(vowels))
}
console.log(strCheck)

