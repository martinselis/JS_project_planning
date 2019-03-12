const assert = require('assert');
const GameLogic = require('../model/game_logic.js')
const PubSub = require('../helpers/pub_sub.js')

describe('Game Logic', function() {

  let gameLogic;

  beforeEach(function() {
    gameLogic = new GameLogic();
    gameLogic.level = 3;
  })

  it('should match two identical value cards', function() {
    console.log(gameLogic.tally)

    const card1 = {value: 1}
    const card2 = {value: 1}
    gameLogic.verifyMatch(card1)
    gameLogic.verifyMatch(card2)

    const actual = gameLogic.tally;
    const expected = 1

    assert.strictEqual(actual, expected);
  });

  it('should not match two unidentical value cards', function() {
    console.log(gameLogic.tally)

    const card1 = {value: 1}
    const card2 = {value: 2}
    gameLogic.verifyMatch(card1)
    gameLogic.verifyMatch(card2)

    const actual = gameLogic.tally;
    const expected = 0

    assert.strictEqual(actual, expected);
  });

  it('allow recognize when game has been completed', function() {
    console.log(gameLogic.tally)

    const card1 = {value: 1}
    const card2 = {value: 1}

    const card3 = {value: 2}
    const card4 = {value: 2}

    const card5 = {value: 3}
    const card6 = {value: 3}

    gameLogic.verifyMatch(card1)
    gameLogic.verifyMatch(card2)
    gameLogic.verifyMatch(card3)
    gameLogic.verifyMatch(card4)
    gameLogic.verifyMatch(card5)
    gameLogic.verifyMatch(card6)

    const actual = gameLogic.gameWon;
    const expected = "won";

    assert.strictEqual(actual, expected);
  })

})
