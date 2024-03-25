// returns the given word tripled if string length is even or doubled if the string length is odd

const doubleOrTripleWord = (string) => {
    if(string.length % 2 === 0) return  string.repeat(3);
    else return string.repeat(2);
};
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));