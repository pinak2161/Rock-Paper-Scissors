let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let body = document.querySelector("body");

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let msg = document.getElementById("msg");

let getCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let playGame = (userchoice) => {
    const computerchoice = getCompChoice();
    let userwin;

    switch (userchoice + computerchoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userwin = true;
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            userwin = false;
            break;
        default:
            userwin = null;
            break;
    }

    if (userwin === true) {
        msg.style.backgroundColor = "green";
        msg.innerHTML = `You win! your ${userchoice} beats computers ${computerchoice}`;
        userScore++;
    } else if (userwin === false) {
        msg.style.backgroundColor = "red";
        msg.innerHTML = `You lose! ${computerchoice} beats ${userchoice}`;
        computerScore++;
    } else {
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
        msg.innerHTML = `Its a tie! ${userchoice} and ${computerchoice} are the same`;
    }

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
