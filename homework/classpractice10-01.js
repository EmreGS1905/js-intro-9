// Task 1 
class Player {
    constructor (nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }
    getInfo () {
        return `${this.nickName}'s score is ${this.score}` ;
    };
    attack (player) {
        this.score += 1;
        return player.score -= 1;
    }
    damage () {
        this.score -= 1;
    }
}
// Task 2
class SuperPlayer extends Player {
    constructor (nickName, score){
        super(nickName, score);
    }
    superAttack (player) {
        this.score += 2;
        return player.score -=2
    }
}
// Task 3
class HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }
    heal (player) {
        player.score +=1;
    }
}
// Task 4
const player1 = new Player ('Player 1', 5);
const player2 = new Player ('Player 2', 5);
const superPlayer = new SuperPlayer ('Super Player', 3);
const heroPlayer = new HeroPlayer ('Hero Player', 10);

// Task 5
player1.attack(player2);
player1.attack(superPlayer);
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);
heroPlayer.heal(player1);
heroPlayer.heal(player2);
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);
player1.damage();
player2.damage();

// Task 6
const allPlayers = [player1, player2, superPlayer, heroPlayer];
for (const player of allPlayers){
    console.log(player.getInfo());
}
