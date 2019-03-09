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
};

SquareView.prototype.createDiv = function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square")
  return newDiv
};

SquareView.prototype.createImage = function () {
  const img = document.createElement("img");
  img.src = this.url;
  return img
};

SquareView.prototype.addClickEvent = function (squareDiv) {
  squareDiv.addEventListener('click', (event) => {
    console.log(this.value, this.id);
  })
};

module.exports = SquareView;
