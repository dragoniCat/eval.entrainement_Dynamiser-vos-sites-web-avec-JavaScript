// Variables
let player1 = true;
let player2 = false;
let global1 = document.querySelector(".global1");
let global2 = document.querySelector(".global2");
let current1 = document.querySelector(".current1");
let current2 = document.querySelector(".current2");
let dice = document.querySelector("#dice");

let rollDice = document.querySelector("#rollDice");
let hold = document.querySelector(".hold");
let newGame = document.querySelector(".newGame");

let randomInt;

// Lancé de dé
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

rollDice.addEventListener("click", function () {
    if (!dice.classList.contains("dice1")){
        diceReset();
    }
    randomInt = getRandomInt(1, 6);
    dice.classList.replace("dice1", `dice${randomInt}`);

    if (player1 === true){
        current1.textContent = randomInt;
        if (parseInt(randomInt) === 1){
            global1.textContent =  parseInt(global1.textContent) + parseInt(current1.textContent);
            current1.textContent = 0;
            player1 = false;
            player2 = true;
        }
    }

    else if (player2 === true){
        current2.textContent = randomInt;
        if (parseInt(randomInt) === 1){
            global2.textContent = parseInt(global2.textContent) + parseInt(current2.textContent);
            current2.textContent = 0;
            player1 = true;
            player2 = false;
        }
    }
});

//Réinitialisation du dé
function diceReset() {
    dice.classList.replace(`dice${randomInt}`, "dice1");
}

// Switch player
hold.addEventListener("click", function switchPlayer() {
    if (player1 === true) {
        global1.textContent =  parseInt(global1.textContent) + parseInt(current1.textContent);
        current1.textContent = 0;
        player1 = false;
        player2 = true;
    }
    else if (player2 === true) {
        global2.textContent = parseInt(global2.textContent) + parseInt(current2.textContent);
        current2.textContent = 0;
        player1 = true;
        player2 = false;
    }
});

// New Game
newGame.addEventListener("click", function newGame() {
    global1.textContent = "00";
    global2.textContent = "00";
    current1.textContent = "00";
    current2.textContent = "00";
    diceReset();
});