const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const restartBtn = document.getElementById("restartBtn");
let playerScore = 0;
let computerScore = 0;

//FOR RESTART

restartBtn.addEventListener('click', ()=> {
window.location.reload();
});


function endGame(playerScore, computerScore){
    if(playerScore === 5){
        resultDisplay.textContent = "You won the game!! Rematch?"
        restartBtn.style.visibility = 'visible';
    }else if(computerScore === 5){
        resultDisplay.textContent = "You lost the game... Rematch?"
        restartBtn.style.visibility = 'visible';
    };
}

//GAME

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!"
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    
    resultDisplay.classList.remove("greenShadow", "redShadow");

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenShadow");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redShadow"); 
            computerScore++;
            computerScoreDisplay.textContent = computerScore;   
            break;
    }
     
    endGame(playerScore, computerScore);

}