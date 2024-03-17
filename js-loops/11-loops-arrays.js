const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let output = ' ';
for (i = 0 ; i < cities.length ; i++) {
    if (cities[i].length % 2 !== 0) {
        output = cities[i]  
        break;
    } 
}
console.log(output)

const cities1 = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
const citiesLengthMin5 = [];
for(const city of cities1) {
    if(city.length > 5) citiesLengthMin5.push(city);
}
console.log(citiesLengthMin5)

const citiesIncludesI = [];
const cities2 = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
for (const city of cities2) {
    if ( city.includes('i') || city.includes('I')) citiesIncludesI.push(city)
}
console.log(citiesIncludesI)


