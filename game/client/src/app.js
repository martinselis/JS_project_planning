const MasterView = require('./views/master_view.js')
const DataLoad = require('./model/data_load.js')
const GameLogic = require('./model/game_logic.js')
const PlayerInfoView = require('./views/player_info_view.js')
const WinnerView = require('./views/winner_view.js')

document.addEventListener('DOMContentLoaded', () => {

  const playerElement = document.querySelector('#playerInfo');
  const playerInfoView = new PlayerInfoView(playerElement);
  playerInfoView.bindEvents();

  const masterDiv = document.querySelector('.master_grid');
  const masterView = new MasterView(masterDiv);
  masterView.bindEvents();

  const gameLogic = new GameLogic();
  gameLogic.bindEvents();

  const dataLoad = new DataLoad();
  dataLoad.bindEvents();

  const winnerElement = document.querySelector('#winner_message')
  const winnerView = new WinnerView(winnerElement)
  winnerView.bindEvents()
})
