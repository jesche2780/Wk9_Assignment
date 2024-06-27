/*

Project: WAR

Suggested classes:
Card, Deck, Player
What properties and methods they would include?

Notes:
No user input needed the entire game should play out instantly without any user input inside of the browser's console.
Nothing needs to happen that's special when there is a tie in a round.

When completed, the game should do the following:
 - Deal 26 Cards to each Player from a Deck of 52 cards.
 - Iterate through the turns where each Player plays a Card.
 - The Player who played the higher card is awarded a point.
     - Ties result in zero points for both Players.
 - After all cards have been played, display the score and declare the winner.

 How to play WAR (altered to follow the above objective):
 Goal is to get the most points.

 1. Deal all the cards evenly among the players, usually two (26 cards).
 2. Players should place their stack of cards face down in front of them (cards will be unknown).
 3. Players simultaneously reveal the top card of their deck. The player with the higher card is given a point.
        The card hierarchy follows this schema:
            [2,3,4,5,6,7,8,9,J,Q,K,A]
 4. Players continue flipping their next card and repeating the process until all cards have been played.
 5. The winner is declared, whoever has the most points.

--------------------- Code is below -----------------------*/

let cards = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];

let cardValues = {};
for(let i = 0; i < cards.length; i++) {
    cardValues[cards[i]] = i+2;
}

const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
let deck = [];

for(let suit of suits) {
    for(let card of cards){
        deck.push({value: cardValues[card], suit: suit, card: card + ' of ' + suit});
    }
}

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}

let Deck1 = deck.slice(0,25);
let Deck2 = deck.slice(26,51);
let Player1 = 0;
let Player2 = 0;

console.log("Cards have been shuffled! Let's Play War!");

for (let i = 0; i < 25; i++) {
    console.log(`Round ${i+1}: Player 1 - ${Deck1[i].card}; Player 2 - ${Deck2[i].card}`);
    if(Deck1[i].value > Deck2[i].value){
        Player1 +=1;
        console.log('Player 1 Wins 1 Point!');
    } else if (Deck1[i].value < Deck2[i].value) {
        Player2 +=1;
        console.log('Player 2 Wins 1 point!');
    } else {
        Player1 +=1;
        Player2 +=1;
        console.log('Both Player 1 and Player 2 Win 1 Point');
    }
}

console.log(`We have a winner! Final points: Player 1 - ${Player1} Player 2 - ${Player2}`)

if(Player1 > Player2) {
    console.log('Player 1 Wins!');
} else if(Player2 > Player1) {
    console.log('Player 2 Wins!');
} else {
    console.log('It\'s a Tie!');
}



