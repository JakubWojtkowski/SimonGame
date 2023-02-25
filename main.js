const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 65) {
        $("h1#level-title").text("Game started").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
});

$("div.btn").click(function () {
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`div#${randomChosenColor}`).fadeOut(100).fadeIn(100); // flash effect
    var audio = new Audio(`./sounds/${randomChosenColor}.mp3`);
    audio.play();
}

function playSound(colorName) {
    var audio = new Audio(`./sounds/${colorName}.mp3`);
    audio.play();
}

const animatePress = (currentColor) => {
    $(`.${currentColor}`).addClass("pressed");
}