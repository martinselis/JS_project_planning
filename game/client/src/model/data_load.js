const PubSub = require('../helpers/pub_sub.js')
const images = require('./images.js')
const shuffle_function = require('./shuffle_function.js')
const DataLoad = function() {

}

DataLoad.prototype.bindEvents = function () {
  PubSub.subscribe('Player:player-ready', (event) => {
    const difficulty = event.detail
    const level = this.setDifficulty(difficulty)
    // publishLevel
   PubSub.publish('DataLoad:images-ready', this.images)
  })

};

DataLoad.prototype.setDifficulty = function (difficulty) {
  console.log('difficulty set')
  if (difficulty === "easy") {
    PubSub.publish('DataLoad:set-difficulty', 8);
    this.setImageCount(8)
  } else if (difficulty === "medium") {
    PubSub.publish('DataLoad:set-difficulty', 10);
    this.setImageCount(10)
  } else {
    PubSub.publish('DataLoad:set-difficulty', 12);
    this.setImageCount(12)
  }

};

DataLoad.prototype.setImageCount = function (setImageCount) {

    const requiredImages = images.splice(0, setImageCount)

    copys = []
    for (const image of requiredImages) {
      const copyImage = {}
      copyImage.id = image.id + setImageCount;
      copyImage.value = image.value;
      copyImage.url = image.url
      copys.push(copyImage)
    }

    this.images = requiredImages;
    this.images.push(copys)
    this.images = this.images.flat();
    this.images = shuffle_function(this.images);
};


module.exports = DataLoad;
