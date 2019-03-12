const LeaderboardView = function(leaderboardDiv, leaderboardData) {
  this.leaderboard = leaderboardDiv;
  this.leaderboardData = leaderboardData
}

LeaderboardView.prototype.render = function () {
  const nameDiv = document.createElement("div");
  const nameTitle = this.createElement("h3", "Player")
  nameDiv.appendChild(nameTitle)
  nameDiv.classList.add("leaderboardTitles")
  this.leaderboard.appendChild(nameDiv)

  const clickDiv = document.createElement("div");
  const clicks = this.createElement("h3", "Clicks")
  clickDiv.appendChild(clicks)
  clickDiv.classList.add("leaderboardTitles")

  this.leaderboard.appendChild(clickDiv)

  const timeDiv = document.createElement("div");
  const time = this.createElement("h3", "Time")
  timeDiv.appendChild(time)
  timeDiv.classList.add("leaderboardTitles")

  this.leaderboard.appendChild(timeDiv)
  this.renderLeaderboard(this.leaderboardData)

};

LeaderboardView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element)
  newElement.textContent = text;
  return newElement;
};

LeaderboardView.prototype.renderLeaderboard = function (data) {
  this.sortByClicks()

  const nameUl = document.createElement("ul")
  const clicksUl = document.createElement("ul")
  const timeUl = document.createElement("ul")

  this.leaderboardData.forEach((entry) => {
    const name = this.createElement("li", entry.name)
    nameUl.appendChild(name)

    const clicks = this.createElement("li", entry.clicks)
    clicksUl.appendChild(clicks)

    const time = this.createElement("li", `${entry.time} seconds`)
    timeUl.appendChild(time)
  })

  this.leaderboard.appendChild(nameUl)
  this.leaderboard.appendChild(clicksUl)
  this.leaderboard.appendChild(timeUl)


}

LeaderboardView.prototype.sortByClicks = function () {
  this.leaderboardData.sort((a, b) => {
    return a.clicks - b.clicks
  })
};

module.exports = LeaderboardView;
