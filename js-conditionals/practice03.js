let mood;

let mock_score = 70;

mood = mock_score >= 70 ? 'GREAT' : 'GOOD'
console.log(mood)

let num = 1;
let letter;
let date = new Date('August 2. 1980')
let day = date.getDay();
switch (day) {
    case 0:
        console.log('WEEKEND');
        break;
    case 6:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY')

}

let r1 = Math.floor(Math.random() * 100) + 1;
switch (r1) {
    case r1 < 26:
        console.log('FIRST');
        break;
    case r1 < 50:
        console.log('SECOND');
        break;
    case r1 < 75 :
        console.log('THIRD');
        break;
    default :
        console.log('FOURTH');
        break;
}
console.log(r1)

