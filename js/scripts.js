
function Player(name) {
  this.name = name;
  this.totalRoll = 0;
};

Player.prototype.score = function(roll) {
  if (roll === 1) {
    this.totalRoll = 0;
  } else {
    this.totalRoll = this.totalRoll + roll;
  }
};
var player1 = new Player('Player One');
var player2 = new Player('Player Two');
// logic for user interface
$(document).ready(function(){
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    var name1 = $('#p1Input').val();
    var diceRoll1 = Math.floor(Math.random() * (7 - 1) + 1);
    player1.score(diceRoll1);
    $("#output1").append(diceRoll1 + '<br>');
    $("#output1").append(player1.totalRoll + '<br>');
  });
  $('#p2Form').submit(function(event) {
    event.preventDefault();
    var name2 = $('#p2Input').val();
    var diceRoll2 = Math.floor(Math.random() * (7 - 1) + 1);
    player2.score(diceRoll2);
    $("#output2").append(diceRoll2 + '<br>');
    $("#output2").append(player2.totalRoll + '<br>');
  });
});
