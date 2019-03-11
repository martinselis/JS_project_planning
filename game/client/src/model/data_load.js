const PubSub = require('../helpers/pub_sub.js')
const images = require('./images.js')
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
};

module.exports = DataLoad;


// this.images = [
//   {id: 1, value: 1, url:"images/1.jpeg"},
//   {id: 2, value: 2, url:"images/2.jpeg"},
//   {id: 3, value: 3, url:"images/3.jpg"},
//   {id: 4, value: 4, url:"images/4.png"},
//   {id: 5, value: 5, url:"images/5.jpg"},
//   {id: 6, value: 6, url:"images/6.jpeg"},
//   {id: 7, value: 7, url:"images/7.png"},
//   {id: 8, value: 8, url:"images/8.jpeg"},
//   {id: 9, value: 1, url:"images/1.jpeg"},
//   {id: 10, value: 2, url:"images/2.jpeg"},
//   {id: 11, value: 3, url:"images/3.jpg"},
//   {id: 12, value: 4, url:"images/4.png"},
//   {id: 13, value: 5, url:"images/5.jpg"},
//   {id: 14, value: 6, url:"images/6.jpeg"},
//   {id: 15, value: 7, url:"images/7.png"},
//   {id: 16, value: 8, url:"images/8.jpeg"}
// ]
