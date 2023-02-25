const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keydown(function () {

    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {

    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        // console.log("correct");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        $("body")
            .addClass("game-over");

        $("#level-title")
            .text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        playSound("wrong");

        startOver();
    }

}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("h1#level-title").text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $(`div#${randomChosenColor}`)
        .fadeIn(100).fadeOut(100).fadeIn(100); // flash effect

    playSound(randomChosenColor);

}

function startOver() {

    level = 0;
    gamePattern = [];
    started = false;

}

function playSound(name) {

    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();

}

// arrow function

const animatePress = (currentColor) => {

    $(`.${currentColor}`)
        .fadeOut(100).fadeIn(100).addClass("pressed");

    setTimeout(function () {
        $(`.${currentColor}`)
            .removeClass("pressed");
    }, 100);

}