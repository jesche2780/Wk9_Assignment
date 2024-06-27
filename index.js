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
// Declared cards number variable by creating an array with each card declared in a deck.

let cardValues = {};
for(let i = 0; i < cards.length; i++) {
    cardValues[cards[i]] = i+2;
}

// Each card number variable is given a value with a for loop that goes through the numbers until the end of the cards array is reached to give each card a hierarchical placement for later evaluation.

const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
let deck = [];

// Declared each suit in a deck and opened an array called "deck" to be filled in with later.

for(let suit of suits) {
    for(let card of cards){
        deck.push({value: cardValues[card], suit: suit, card: card + ' of ' + suit});
    }
}

// Used a "for let of" loop to fill in the above deck with a push action to build the "deck" array with the number and suit of the deck but also to set the "card" "value" to the value of the cardValue set above.

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}

// Using the "Fisher Yates Shuffle" algorithm to randomize the accumulated deck.

let Deck1 = deck.slice(0,25);
let Deck2 = deck.slice(26,51);
let Player1 = 0;
let Player2 = 0;

// "Slicing" the deck in half between two decks and starting the points for each player.

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

// Running a for loop that will go through each array of both decks "i", adding by 1 each time, comparing each ranked card "value" against each other to find the winner and awarding that player with a point
// each time that deck is higher. If both ranked cards' "value" are the same, each player gets a point. 

console.log(`We have a winner! Final points: Player 1 - ${Player1} Player 2 - ${Player2}`)

// Logging to the console the final points results

if(Player1 > Player2) {
    console.log('Player 1 Wins!');
} else if(Player2 > Player1) {
    console.log('Player 2 Wins!');
} else {
    console.log('It\'s a Tie!');
}

// Creating an "else if" statement that will compare which player has the higher points and logs to the console which player wins.

