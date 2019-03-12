const LeaderboardView = function(leaderboardDiv, leaderboardData) {
  this.leaderboard = leaderboardDiv;
  this.leaderboardData = leaderboardData
}

LeaderboardView.prototype.render = function () {
  const h1Div = document.createElement("div")
  const h1 = this.createElement("h1", "Leaderboard");
  h1Div.classList.add("leaderboardTitle")
  h1Div.appendChild(h1)
  this.leaderboard.appendChild(h1Div);

  const name = document.createElement("div");
  const nameTitle = this.createElement("h3", "Player")
  name.appendChild(nameTitle)
  this.leaderboard.appendChild(name)
};

LeaderboardView.prototype.createElement = function (element, text) {
  const newElement = document.createElement(element)
  newElement.textContent = text;
  return newElement;

};

module.exports = LeaderboardView;
