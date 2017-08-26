
function Player(name) {
  this.name = name;
  this.totalRoll = 0;
  this.totalScore = 0;
};

Player.prototype.score = function(roll) {
  if (roll === 1) {
    this.totalRoll = 0;
    alert('Rolled a One! Next Player Turn...');
    $('.p1,.p2').toggle();
    playerAI();
  } else {
    this.totalRoll = this.totalRoll + roll;
  }
};

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function playerAI() {
  var diceRoll1 = Math.floor(Math.random() * (6) + 1);
  var diceRoll2 = Math.floor(Math.random() * (6) + 1);
  if (diceRoll1 === 1) {
    computer.totalRoll = 0;
    alert('Rolled a One! Next Player Turn...');
    $('.p1,.p2').toggle();
    return;
  } else if (diceRoll2 === 1) {
    computer.totalRoll = 0;
    alert('Rolled a One! Next Player Turn...');
    $('.p1,.p2').toggle();
    return;
  } else {
    computer.score(diceRoll1);
    alert('Computer rolled: ' + diceRoll1);
    wait(500);
    computer.score(diceRoll2);
    alert('Computer rolled: ' + diceRoll2);
    wait(500);
    alert('Computer scored: ' + computer.totalRoll);
    computer.totalScore += computer.totalRoll;
    if (computer.totalScore >= 50) {
      $('.computerWins').show();
      $('.p2').hide();
      $('.computerPlayerScores').hide();
      return;
    } else if (computer.totalScore < player1.totalScore -10) {

    } else {
      $("#totalComputerScore").text(computer.totalScore);
      computer.totalRoll = 0;
      $('#currentRoll2').text(0);
      $('#currentTotal2').text(0);
      $('.p1,.p2').toggle();
    }
  }
}

var player1 = new Player('Player One');
var computer = new Player('Computer Player');
// logic for user interface
$(document).ready(function(){
  $("#totalPlayerScore").text(0);
  $("#totalComputerScore").text(0);
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    var diceRoll1 = Math.floor(Math.random() * (6) + 1);
    player1.score(diceRoll1);
    $('#currentRoll1').text(diceRoll1);
    $('#currentTotal1').text(player1.totalRoll);
  });

  $('#hold1').click(function() {
    player1.totalScore += player1.totalRoll;
    if (player1.totalScore >= 50) {
      $('.playerOneWins').show();
      $('.p1').hide();
      $('.computerPlayerScores').hide();
    } else {
      $("#totalPlayerScore").text(player1.totalScore);
      player1.totalRoll = 0;
      $('#currentRoll1').text(0);
      $('#currentTotal1').text(0);
      $('.p1,.p2').toggle();
      playerAI();
    }
  });

  $('.playAgain').click(function(event) {
    location.href = location.href;
  });
});
