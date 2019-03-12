const PubSub = require('../helpers/pub_sub.js')

const WinnerView = function(element) {
  this.element = element;

}

WinnerView.prototype.bindEvents = function () {

PubSub.subscribe('Player:player-results', (event) => {
  const winnerName = event.detail.name;
  const clicks = event.detail.clicks;
  const time = event.detail.time
  this.render(winnerName, clicks, time)
})

};

WinnerView.prototype.render = function (name, clicks, time) {
  const h2 = this.createElement("h2", `You win ${name}!`)
  this.element.appendChild(h2)

  const newP = this.createElement("p", `You won in ${time} seconds with ${clicks} clicks`)
  this.element.appendChild(newP)
};

WinnerView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element);
  newElement.textContent = text;
  return newElement;
};
module.exports = WinnerView;
