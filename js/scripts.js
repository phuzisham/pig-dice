
// logic for user interface
$(document).ready(function(){
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(diceRoll);
  });
  $('#p2Form').submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(diceRoll);
  });
});
