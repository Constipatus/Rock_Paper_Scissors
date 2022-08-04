
/*Function to randomly generate Rock, Paper, or Scissors, to be used as the game input later*/
function getComputerChoice() {
    let computerChoices = ['Rock', 'Paper', 'Scissors']
    let randIndex = Math.floor(Math.random() * computerChoices.length);
    if (randIndex===0) {
        result = "Rock";
    } else if (randIndex===1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result

}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();

/*Determine scores earned based on the selection of the player verse the 
randomly generated selection of the computer*/

function playRound(playerSelection, computerSelection)  {
    switch (true) {
        case playerSelection==='Rock' && computerSelection==='Rock':
            alert ("You both chose Rock, It's a tie!")
            break;
        case playerSelection==='Rock' && computerSelection==='Paper':
            alert ("Paper beats Rock, you lose this one!")
            break;
        case playerSelection==='Rock' && computerSelection==='Scissors':
            alert ("Rock beats Scissors, you win a point!")
            break;
        case playerSelection==='Paper' && computerSelection==='Rock':
            alert ("Paper beats Rock, you win a point!")
            break;
        case playerSelection==='Paper' && computerSelection==='Paper':
            alert ("You both chose Paper, It's a tie!")
            break;
        case playerSelection==='Paper'  && computerSelection==='Scissors':
            alert ("Scissors beats Paper, you lose this one!")
            break;
        case playerSelection==='Scissors' && computerSelection==='Rock':
            alert ("Rock beats Scissors, you lose this one!")
            break;
        case playerSelection==='Scissors' && computerSelection==='Paper':
            alert ("Scissors beats paper, you win a point!")
            break;
        case playerSelection==='Scissors'  && computerSelection==='Scissors':
            alert ("You both chose Scissors, It's a tie!")
            break;       
    }
}

/*Score Keeping Loop in order to track points gained by player vs computer, first to 5 wins*/

for (let i = 0; i <5;i++) {

}

let playerPrompt = prompt("Rock? Paper? Or Scissors");

/*Use a pop-up window to let the user type in their choice and have it 
determine winner against the computer*/
if (playerPrompt.toLowerCase() === "rock") {
    console.log(playRound("Rock",computerSelection));    
} else if (playerPrompt.toLowerCase() === "paper") {
    console.log(playRound("Paper", computerSelection));
} else if (playerPrompt.toLowerCase() === "scissors") {
    console.log(playRound("Scissors", computerSelection))
} else {
    alert ("Oh no, a typo, try again")
}