const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 65) {
        $("h1#level-title").text("Game started").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
});

$("div.btn").click(function () {
    const userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

function nextSequence() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $(`div#${randomChosenColour}`).fadeOut(100).fadeIn(100); // flash effect
    var audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    audio.play();
}