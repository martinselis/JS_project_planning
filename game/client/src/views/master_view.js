const PubSub = require('../helpers/pub_sub.js');


const MasterView = function(element) {
  this.element = element;
}

MasterView.prototype.bindEvents = function () {
  PubSub.subscribe('DataLoad:images-ready', (event) => {
    console.log(event.detail)
  })
};

module.exports = MasterView;
