import _ from "lodash";

const data = {
    cards: [
      { id: 0, name: "Ace" },
      { id: 1, name: "2" },
      { id: 2, name: "3" },
      { id: 3, name: "4" },
      { id: 4, name: "5" },
      { id: 5, name: "6" },
      { id: 6, name: "7" },
      { id: 7, name: "8" },
      { id: 8, name: "9" },
      { id: 9, name: "10" },
      { id: 10, name: "Jack" },
      { id: 11, name: "Queen" },
      { id: 12, name: "King" }
    ],
    suits: [
      { name: "Hearts", symbol: "bi-suit-heart", id: 0 }, 
      { name: "Spades", symbol: "bi-suit-spade", id: 1 }, 
      { name: "Clubs", symbol: "bi-suit-club", id: 2 }, 
      { name: "Diamonds", symbol: "bi-suit-diamond", id: 3 }
    ],
  };

  function getDeck() {
    let cards = [];
    _.forEach(data.cards, (card, index) => {
      _.forEach(data.suits, (suit) => {
        cards.push({ id: cards.length, name: card.name, suit: suit });
      });
    });
    return cards;
  }

  const deck = getDeck();
  
  export default deck;
  