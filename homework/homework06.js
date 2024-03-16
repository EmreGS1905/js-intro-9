// Task 1
const noSpace = (string) => string.split(' ').join('')

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("  Hello  "));
console.log(noSpace(" Hello World "));
console.log(noSpace("Tech Global"));

// Task 2 
function replaceFirstLast (string) {
    let str = string.trim();
    if (str.length < 2) return ' ';
    let newStr = str.at(-1) + str.slice(1, str.length -1) + str.at(0); 
    return newStr;
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("  A  "));

