const PubSub = require('../helpers/pub_sub.js')

const LeaderboardView = function(leaderboardDiv, leaderboardData) {
  this.leaderboard = leaderboardDiv;
  this.leaderboardData = leaderboardData
}

LeaderboardView.prototype.bindEvents = function () {
  PubSub.subscribe('LeaderboardView:sort-method', (event) => {
    if (event.detail === "clicks") {
      this.sortByClicks()
    } else {
      this.sortByTime()
    }
  })
};

LeaderboardView.prototype.render = function () {
  this.bindEvents()

  const leaderHeaderDiv = document.createElement("div")
  const leaderTitle = this.createElement("h2", "Leaderboard")
  leaderHeaderDiv.classList.add('leaderdiv')
  leaderHeaderDiv.appendChild(leaderTitle)
  this.leaderboard.appendChild(leaderHeaderDiv)

  const nameDiv = document.createElement("div");
  const nameTitle = this.createElement("h3", "Player")
  nameDiv.appendChild(nameTitle)
  nameDiv.classList.add("leaderboardTitles")
  this.leaderboard.appendChild(nameDiv)

  const clickDiv = document.createElement("div");
  const clicks = this.createElement("h3", "Clicks")
  clickDiv.appendChild(clicks)
  console.log(this)
  clickDiv.addEventListener('click', function() {
    const target = this.children[0].textContent.toLowerCase()
    PubSub.publish('LeaderboardView:sort-method', target)
  })
  clickDiv.classList.add("leaderboardTitles")

  this.leaderboard.appendChild(clickDiv)

  const timeDiv = document.createElement("div");
  const time = this.createElement("h3", "Time")
  timeDiv.appendChild(time)
  timeDiv.addEventListener('click', function() {
    const target = this.children[0].textContent.toLowerCase()
    PubSub.publish('LeaderboardView:sort-method', target)
  })

  timeDiv.classList.add("leaderboardTitles")

  this.leaderboard.appendChild(timeDiv)
  this.sortByClicks()

};


LeaderboardView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element)
  newElement.textContent = text;
  return newElement;
};

LeaderboardView.prototype.renderLeaderboard = function (data) {

  const allEntries = document.querySelectorAll('.score')

  for(const element of allEntries) {
    this.leaderboard.removeChild(element)
  }

  this.leaderboardData.forEach((entry) => {
    const nameDiv = document.createElement("div")
    const name = this.createElement("li", entry.name)
    nameDiv.classList.add("score")
    nameDiv.appendChild(name)
    this.leaderboard.appendChild(nameDiv)

    const clicksDiv = document.createElement("div")
    const clicks = this.createElement("li", entry.clicks)
    clicksDiv.classList.add("score")
    clicksDiv.appendChild(clicks)
    clicksDiv.addEventListener('click', this.sortByClicks)
    this.leaderboard.appendChild(clicksDiv)

    const timeDiv = document.createElement("div")
    const time = this.createElement("li", `${entry.time} sec`)
    timeDiv.classList.add("score")
    timeDiv.appendChild(time)

    this.leaderboard.appendChild(timeDiv)
  })
}

LeaderboardView.prototype.sortByClicks = function () {
  this.leaderboardData.sort((a, b) => {
    return a.clicks - b.clicks
  })
  this.renderLeaderboard(this.leaderboardData)

};

LeaderboardView.prototype.sortByTime = function () {
  this.leaderboardData.sort((a, b) => {
    return a.time - b.time
  })
  this.renderLeaderboard(this.leaderboardData)

};

module.exports = LeaderboardView;
