// Good example to practice and be good at it

function names(fullname) {
    let inits = '';
    let fname = fullname.split(" ")
    for (i = 0 ; i < fname.length ; i++) {
        inits += fname[i][0];
        
    }
    return inits;
}
console.log(names('Sampiyon Galatasaray'));
console.log(names('Ali Veli Forty Nine Fifty'));

// checking if the string countains any vowels

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function vowelCheck (string) {
   
    for (i = 0 ; i < vowels.length; i++) {
         console.log(string.includes(vowels[i]));
    }
   
}
(vowelCheck('Aeker'));



function addSum(arr, target) {
    for (i=0 ; i < arr.length; i++) {
        for (j=0; j < arr.length ; j++) {
            if (arr[i] + arr[j] == target )
            return `${(arr[i])} + ${arr[j]} = ${target}`;
        }
        
    }
    return false;
    }
    console.log( addSum([19, 30, 5, 7,21], 26));
    console.log( addSum([19, 30, 5, 7,2, 4], 34));
    console.log( addSum([40, 30, 5, 7,2, 4], 12));
    console.log( addSum([40, 3, 5, 7,2, 4], 52));