const expect = chai.expect;


describe('new Deck', function(){
    it('should have 52 cards', function(){
        let testDeck = new Deck()
        expect(testDeck.cards.length).to.equal(52);
    });
});

describe("Game", function() { 
    it ('should add points each round to the player with a higher ranked card' , function() {
        var player1 = new Player;
        expect(player1.addPoint).to.equal(1)
        });
});

