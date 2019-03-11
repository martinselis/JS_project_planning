const PubSub = require('../helpers/pub_sub.js')

const GameLogic = function() {
  this.tally = 0;
  this.cards = [];
  this.level = 0;
}

GameLogic.prototype.bindEvents = function () {
  PubSub.subscribe('SquareView:card-clicked', (event) => {
    const card = event.detail;
    this.verifyMatch(card);
  })

  PubSub.subscribe('MasterView:set-level', (event) => {
    this.level = event.detail;
  })

  PubSub.subscribe('DataLoad:set-difficulty', (event) => {
    this.level = event.detail;
})
};

GameLogic.prototype.verifyMatch = function (card) {
  if (this.cards.length == 1) {
    if (this.cards[0].value == card.value) {
      console.log('match')
      this.tally += 1;
      this.cards = [];
      if (this.level == this.tally) {
        console.log('You won')
        const finish = Date.now();
        PubSub.publish('GameLogic:game-complete', finish)
      }
    } else {
      this.cards.push(card)
      PubSub.publish('GameLogic:clear-cards', this.cards)
      this.cards = [];
    }
  } else {
    console.log('first card. adding to array')
    this.cards.push(card)
  }
}

module.exports = GameLogic;
