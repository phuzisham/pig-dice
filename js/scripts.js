$(document).ready(function() {
  $('#playPerson').click(function() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'js/play-person.js');
    document.head.appendChild(script);
    $('.greeting').hide();
    $('.p1').show();
    $('.playerScores').show();
  });
  $('#playComputer').click(function() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'js/play-computer.js');
    document.head.appendChild(script);
    $('.greeting').hide();
    $('.p1').show();
    $('.playerScores').show();
  });
});
