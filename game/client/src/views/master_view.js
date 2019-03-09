const PubSub = require('../helpers/pub_sub.js');
const SquareView = require('../views/square_view.js')

const MasterView = function(element) {
  this.element = element;
}

MasterView.prototype.bindEvents = function () {
  PubSub.subscribe('DataLoad:images-ready', (event) => {
    const imageData = event.detail;
    this.renderImages(imageData)
  })
};

MasterView.prototype.renderImages = function (imageData) {
  imageData.forEach((image) => {
    const squareView = new SquareView(this.element, image);
    squareView.render();
  })
};

module.exports = MasterView;
