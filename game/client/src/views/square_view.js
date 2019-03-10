const PubSub = require('../helpers/pub_sub');
// const MasterView = require('./views/master_view')

const SquareView = function (container) {
  this.classList = classList;
  this.container = container
  this.card = card
}

//render all cards to grid
SquareView.prototype.bindEvents = function(){
  this.container = evt.detail;
  this.render()
}

SquareView.prototype.render = function(){
  const container = document.createElement('memory-game');
  this.container.innerHTML = '';
  this.container.appendChild(container);

  const image = this.createCardImage()
  container.appendChild(image)
}

SquareView.prototype.createCardImage = function() {
  const image = document.createElement('img');

  return image
}

//on event listen for flip cards
const cards = document.querySelectorAll('.memory-card')

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));


//publish choosen cards back to the game logic file

module.exports = SquareView
