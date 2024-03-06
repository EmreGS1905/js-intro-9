const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};
//returns as arrays
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

for(const key of Object.keys(car)) {
    console.log(key);
}

for(const value of Object.values(car)) {
    console.log(value);
}

for(const entry of Object.entries(car)) {
    console.log(entry);
}
