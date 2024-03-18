// Team Chicago Players

function teamChicago (fullname, age, position, skills) {
    this.name = fullname;
    this.age = age;
    this.position = position;
    this.skills = skills 
}

teamChicago.prototype.specialInfo = function() {
    console.log(`This player ${this.name} is ${this.skills} that makes a difference in the game`);
}

const player1 = new teamChicago('Emre Akman', 44, 'midfield', 'unpredictable');
const player2 = new teamChicago('Maher A', 39, 'midfield', 'allah yardimcimiz olsun');
const player3 = new teamChicago('Akin Kaya', '?' , 'multipositions', 'coming soon');
player1.specialInfo();
player2.specialInfo();
player3.specialInfo();