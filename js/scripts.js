$(document).ready(function() {
  $("#usertext form").submit(function(event) {
    event.preventDefault();

    var answerInput = $("input#answer").val();
    var result = answerInput.toUpperCase();
    $("#answertext").text(result);
    $("#result").show();

  });
});
