const PubSub = require('../helpers/pub_sub');

const MasterView = function (container) {
  this.container = container;
}

// Subscribe to all cards ready
MasterView.prototype.setupEventListeners = function() {
  PubSub.subscribe('DataLoad:cards-ready', (evt) => {
    const items = evt.detail;
    this.renderCards(items);
  });
};

// Sends render to square view to allow all cards ready
MasterView.prototype.renderCards = function(items){
  items.forEach((item) => this.renderCards(item));
}

// Subscribe to reset if not match method.
//
// Subscribe to match tally and publish the Game Won message

module.exports = MasterView
