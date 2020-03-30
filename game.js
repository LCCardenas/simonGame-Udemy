var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;
var randomNumber;

$(document).on("keydown", function() {
  if (!started) {
    title = $("h1").text("Level 1");
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(nextSequence(), 1000);
    }
  } else {
    gameOver();
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  randomNumber = Math.floor(Math.random() * (3 + 1));
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  var currentIdButton = "#" + currentColor;
  $(currentIdButton).addClass("pressed");
  setTimeout(function() {
    $(currentIdButton).removeClass("pressed");
  }, 150);
}

function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  title = $("h1").text("Game Over, Press Any Key to Restart");
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
