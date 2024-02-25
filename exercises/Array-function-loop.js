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