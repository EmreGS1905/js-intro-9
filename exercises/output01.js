console.log('Favorite Fruits:\nPineapple\nGrapes\nMango');
console.log('');
console.log('QA stands for "Quality Assurance", an umbrella term for testing a product.');
console.log('');
console.log('"The only way to do great work is love what you do"\nSteve Jobs');


// helal 

let a = 'I like Javascript';
let output = '';
let arr = a.split('');
console.log(arr)
for (let i = arr.length-1 ; i >= 0; i--) {
    output += arr[i]
}console.log(output)


let newone = output.split(' ').reverse().join(' ')
console.log(newone)