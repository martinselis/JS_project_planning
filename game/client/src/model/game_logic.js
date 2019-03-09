const PubSub = require('../helpers/pub_sub.js')

const GameLogic = function() {
  this.tally = 0;
  this.cards = [];
}

GameLogic.prototype.bindEvents = function () {
  PubSub.subscribe('')
};

module.exports = GameLogic;
