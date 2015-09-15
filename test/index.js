var test = require('tape');

test('Default score is 0', function(assert) {
  var game = new BowlingGame();
  assert.equal(game.score(), 0);
  assert.end();
});
