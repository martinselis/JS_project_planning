const PubSub = require('../helpers/pub_sub.js');
const Player = require('../model/player.js')

const PlayerInfoView = function(element) {
  this.element = element;
}

PlayerInfoView.prototype.bindEvents = function () {
  const form = document.querySelector("form")
  form.addEventListener('submit', this.getPlayerData)
}

PlayerInfoView.prototype.getPlayerData = function (event) {
  event.preventDefault();
  const playerData = {
    name: event.target.player.value,
    difficulty: event.target.difficulty.value
  };
  const player = new Player(playerData)
  player.generateGame();
}


module.exports = PlayerInfoView;
