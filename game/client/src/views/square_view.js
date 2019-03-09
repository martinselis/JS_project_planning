const PubSub = require('../helpers/pub_sub');
const MasterView = require('./views/master_view');

const SquareView = function (container) {
  this.container = container
}

//render all cards to grid

//on event listen for flip cards
const cards = document.querySelectorAll(.memory-card);

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));


//publish choosen cards back to the game logic file

module.exports = SquareView
