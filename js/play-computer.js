
function Player(name) {
  this.name = name;
  this.totalRoll = 0;
};

Player.prototype.score = function(roll) {
  if (roll === 1) {
    this.totalRoll = 0;
    alert('Next Player Turn...');
    $('.p1,.p2').toggle();
    playerAI();
  } else {
    this.totalRoll = this.totalRoll + roll;
  }
};

var player1 = new Player('Player One');
var computer = new Player('Computer Player');
var currentScore1 = 0;
var computerScore = 0;

// logic for user interface
$(document).ready(function(){
  $("#totalScore1").text(0);
  $("#totalScore2").text(0);
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    var diceRoll1 = Math.floor(Math.random() * (7 - 1) + 1);
    player1.score(diceRoll1);
    $('#currentRoll1').text(diceRoll1);
    $('#currentTotal1').text(player1.totalRoll);
  });

  $('#hold1').click(function() {
    currentScore1 += player1.totalRoll;
    if (currentScore1 >= 10) {
      $('.playerOneWins').show();
      $('.p1').hide();
      $('.playerScores').hide();
    } else {
      $("#totalScore1").text(currentScore1);
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

function playerAI() {
  var diceRoll1 = Math.floor(Math.random() * (7 - 1) + 1);
  var diceRoll2 = Math.floor(Math.random() * (7 - 1) + 1);
  if (diceRoll1 === 1) {
    computer.totalRoll = 0;
    alert('Next Player Turn...');
    $('.p1,.p2').toggle();
    return;
  } else if (diceRoll2 === 1) {
    computer.totalRoll = 0;
    alert('Next Player Turn...');
    $('.p1,.p2').toggle();
    return;
  } else {
    computer.score(diceRoll1);
    computer.score(diceRoll2);
    computerScore += computer.totalRoll;
    if (computerScore >= 10) {
      $('.playerTwoWins').show();
      $('.p2').hide();
      $('.playerScores').hide();
      return;
    } else {
      $("#totalScore2").text(computerScore);
      computer.totalRoll = 0;
      $('#currentRoll2').text(0);
      $('#currentTotal2').text(0);
      $('.p1,.p2').toggle();
    }
  }
}
