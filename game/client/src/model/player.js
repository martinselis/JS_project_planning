const PubSub = require('../helpers/pub_sub.js');

const Player = function (playerData) {
  this.name = playerData.name;
  this.difficulty = playerData.difficulty;
  this.clickCount = 0;
  this.startTime = 0;
  this.endTime = 0;
}


Player.prototype.generateGame = function () {
  const playerView = document.querySelector('#player_info');
  document.body.removeChild(playerView);
  PubSub.publish('Player:player-ready', this.difficulty)
  this.startTime = Date.now();
  this.bindEvents();
};

Player.prototype.bindEvents = function () {
  PubSub.subscribe('GameLogic:game-complete', (event) => {
    const finishTime = event.detail;
    this.endTime = finishTime;
    let completionTime = this.endTime - this.startTime;
    completionTime = completionTime / 1000;
    console.log(`You completed the game in ${completionTime} seconds`)
  })

  PubSub.subscribe('SquareView:increment-clicks', (event) => {
    this.clickCount += 1;
    console.log('click count:', this.clickCount)
  })

  PubSub.subscribe('GameLogic:game-complete', (event) => {
    console.log('final click count:', this.clickCount)

  })
};

module.exports = Player;
