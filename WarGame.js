suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
valueDict = {"A": 14, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13}; 
                                                                                                                                //variables to assign cards

class Card {                        
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (let countSuits = 0; countSuits < 4; countSuits++) {
            for(let countValues = 0; countValues < 13; countValues++) {
                this.cards.push(new Card(suits[countSuits], values[countValues]));
            }
        }                                                                                       //Deck is made of 52 cards(value, suits) array 
    }

    shuffle() {
        for (var i = this.cards.length - 1; i > 0; i--) {                //function shuffle cards 
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}

class Player {
    constructor(cards) {
        this.cards = cards;             //player will take the card from top of the deck and add points accordingly.
        this.points = 0;
    }

    addPoint() {
        this.points++;
    }

    playCard() {
        return this.cards.pop();   
    }
}

class Game {
    constructor() {
        this.originalDeck = new Deck();
        this.originalDeck.shuffle();

        this.player1 = new Player(this.originalDeck.cards.slice(0, 26));      //split the deck between 2 players. 
        this.player2 = new Player(this.originalDeck.cards.slice(26));
    }

    play() {
        for (var roundNumber = 0; roundNumber < 26; roundNumber++) {         //there are 26 cards in each player's deck, meaning there will be 26 rounds. 
            let card1 = this.player1.playCard();
            let card2 = this.player2.playCard();

            if(valueDict[card1.value] > valueDict[card2.value]) {
                console.log(`Player 1's ${card1.value} of ${card1.suit} beats Player 2's ${card2.value} of ${card2.suit}`);
                this.player1.addPoint();
            }
            else if(valueDict[card2.value] > valueDict[card1.value]) {
                console.log(`Player 2's ${card2.value} of ${card2.suit} beats Player 1's ${card1.value} of ${card1.suit}`);
                this.player2.addPoint();
            }
            else {
                console.log(`Player 1's ${card1.value} of ${card1.suit} tied with Player 2's ${card2.value} of ${card2.suit}`);  //results of each round
            }
        }

        if(this.player1.points > this.player2.points) {
            console.log(`Player 1 wins the game with ${this.player1.points} points!`);         //results of the game
        }
        else if (this.player2.points > this.player1.points) {
            console.log(`Player 2 wins the game with ${this.player2.points} points!`);
        }
        else {
            console.log("The game is a tie.");
        }

    }
}

war = new Game();        //play the game! 
war.play();

