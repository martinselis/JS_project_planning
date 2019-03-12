const PubSub = require('../helpers/pub_sub.js');
const SquareView = require('./square_view.js')
const LeaderboardView = require('./leaderboard_view.js')

const MasterView = function(element) {
  this.element = element;
}

MasterView.prototype.bindEvents = function () {
  PubSub.subscribe('DataLoad:images-ready', (event) => {
    const allData = event.detail;
    this.renderImages(allData.images)
    this.renderLeaderboard(allData.leaderboard)
  })

  PubSub.subscribe('GameLogic:clear-cards', (event) => {
    const cards = event.detail;
    this.clearSquares(cards)
  })

  PubSub.subscribe('DataLoad:set-difficulty', (event) => {
    const level = event.detail ;
    if (level == 10) {
      this.element.classList.add("fivexfive")
    } else if (level == 12) {
      this.element.classList.add("sixxsix")
    }
  });
};


MasterView.prototype.clearSquares = function (cards) {
  for (const card of cards) {
    const cardsToHide = document.getElementsByClassName(card.value)
    for (const locatedCard of cardsToHide) {
      setTimeout(() => {
        locatedCard.classList.remove("show");
      }, 1000)
    }
  }
};

MasterView.prototype.renderImages = function (imageData) {
  imageData.forEach((image) => {
    const squareView = new SquareView(this.element, image);
    squareView.render();
  })
};

MasterView.prototype.renderLeaderboard =  function(leaderboardData) {
  const leaderDiv = document.querySelector('#leaderboard')
  const leaderboard = new LeaderboardView(leaderDiv, leaderboardData);
  leaderboard.render();

};


module.exports = MasterView;
