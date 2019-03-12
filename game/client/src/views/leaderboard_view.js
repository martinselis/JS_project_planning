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

  this.leaderboardData.forEach((entry) => {
    const nameDiv = document.createElement("div")
    const name = this.createElement("li", entry.name)
    nameDiv.appendChild(name)
    this.leaderboard.appendChild(nameDiv)

    const clicksDiv = document.createElement("div")
    const clicks = this.createElement("li", entry.clicks)
    clicksDiv.appendChild(clicks)
    this.leaderboard.appendChild(clicksDiv)

    const timeDiv = document.createElement("div")
    const time = this.createElement("li", `${entry.time} sec`)
    timeDiv.appendChild(time)
    this.leaderboard.appendChild(timeDiv)
  })

}


LeaderboardView.prototype.sortByClicks = function () {
  this.leaderboardData.sort((a, b) => {
    return a.clicks - b.clicks
  })
};

module.exports = LeaderboardView;
