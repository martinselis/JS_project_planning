const PubSub = require('../helpers/pub_sub.js');

const SquareView = function(container, data) {
  this.container = container;
  this.url = data.url;
  this.id = data.id;
  this.value = data.value;
}

SquareView.prototype.render = function () {
  const squareDiv = this.createDiv();
  const newImg = this.createImage();
  squareDiv.appendChild(newImg);
  this.addClickEvent(squareDiv)
  this.container.appendChild(squareDiv);

  this.displayCard(squareDiv)

  setTimeout(() => {
    this.hideCard(squareDiv)
  }, 3000)
};

SquareView.prototype.createDiv = function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  return newDiv
};

SquareView.prototype.createImage = function () {
  const img = document.createElement("img");
  img.src = this.url;
  img.classList.add("hidden")
  img.classList.add(this.value)
  return img
};

SquareView.prototype.addClickEvent = function (squareDiv) {
  squareDiv.addEventListener('click', (event) => {
    const card = event.target
    this.displayCard(card)

    const data = {value: this.value, id: this.id}

    PubSub.publish('SquareView:increment-clicks', 1);
    PubSub.publish('SquareView:card-clicked', data)

  })
};

SquareView.prototype.displayCard = function (card) {
  if(card.children[0]) {
    card.children[0].classList.add("show")
  }
};

SquareView.prototype.hideCard = function (card) {
  card.children[0].classList.remove("show")
};

module.exports = SquareView;
