var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[nextSequence()];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * (3 + 1));
  playSound("sounds/" + buttonColors[randomNumber] + ".mp3");
  return randomNumber;
}

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour)
  .fadeOut(100)
  .fadeIn(100);

$(".btn").click(function(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
  animatePress(userChosenColour);
});

function playSound(name) {
  var audio = new Audio(name);
  audio.play();
}

function animatePress(currentColor) {
  //   $("#" + currentColor).addClass("pressed");

  var currentIdButton = "#" + currentColor;
  $(currentIdButton).addClass("pressed");
  setTimeout(function() {
    $(currentIdButton).removeClass("pressed");
  }, 250);
}
