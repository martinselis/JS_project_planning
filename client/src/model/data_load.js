const PubSub = require('../helpers/pub_sub.js')
const images = require('./images.js')
const shuffle_function = require('./shuffle_function.js')
const RequestHelper = require('../helpers/request_helper.js')

const DataLoad = function() {
  this.request = new RequestHelper('/api/scoreboard');

}

DataLoad.prototype.bindEvents = function () {
  PubSub.subscribe('Player:player-ready', (event) => {
    const difficulty = event.detail
    this.difficulty = difficulty;
    const level = this.setDifficulty(difficulty)
    // publishLevel
    this.getLeaderboard()
      .then((result) => {

        const allData = {
          images: this.images,
          leaderboard: this.leaderboard
        };

        PubSub.publish('DataLoad:images-ready', allData)
      })


  })

  PubSub.subscribe('Player:player-results', (event) => {
    const playerData = event.detail;
    playerData.difficulty = this.difficulty;
    this.saveToDatabase(playerData)
    this.getLeaderboard()
      .then((result) => {
        const leaderboard = this.leaderboard;
        PubSub.publish('DataLoad:render-leaderboard', leaderboard)
      })

  })
};

DataLoad.prototype.saveToDatabase = function (playerData) {
  this.request.post(playerData)
};

DataLoad.prototype.getLeaderboard = function () {
  return new Promise((resolve) => {
  this.request.get()
    .then(entries => {
      this.leaderboard = entries;
      this.leaderboard = this.leaderboard.reduce((total, entry) => {
        if (entry.difficulty === this.difficulty) {
          total.push(entry)
        }
        return total
      }, [])
    })
    .then((result) => resolve())
  })
};

DataLoad.prototype.setDifficulty = function (difficulty) {
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
