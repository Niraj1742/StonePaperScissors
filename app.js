let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIDX = Math.floor(Math.random() * 3);
    return options[randIDX];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play Again.";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        console.log("you lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
    }
    updateScoreDisplay();
};

const updateScoreDisplay = () => {
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
};

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
