
/*Sets the score to 0 as a basis to start the rounds*/
let playerScore=0
let computerScore=0

/*Function to randomly generate Rock, Paper, or Scissors, to be used as the computer input later*/
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
/*The prompt alert to ask for the players decision*/

//const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


/*Compares selections of player to computer to round results*/


/*Determine scores earned based on the selection of the player verse the 
randomly generated selection of the computer*/

function playRound(playerSelection, computerSelection)  {
    
    switch (true) {
        case playerSelection==='Rock' && computerSelection==='Rock':
            alert (`"You both chose Rock, It's a tie!" 
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Rock' && computerSelection==='Paper':
            computerScore++
            alert (`"Paper beats Rock, you lose this one!"  
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Rock' && computerSelection==='Scissors':
            playerScore++
            alert (`"Rock beats Scissors, you win a point!" 
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Paper' && computerSelection==='Rock':
            playerScore++
            alert (`"Paper beats Rock, you win a point!"
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Paper' && computerSelection==='Paper':
            alert (`"You both chose Paper, It's a tie!"  
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Paper'  && computerSelection==='Scissors':
            computerScore++
            alert (`"Scissors beats Paper, you lose this one!"  
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Scissors' && computerSelection==='Rock':
            computerScore++;
            alert (`"Rock beats Scissors, you lose this one!"  
            Player Score:${playerScore} Computer Score:${computerScore}`);
            break;
        case playerSelection==='Scissors' && computerSelection==='Paper':
            playerScore++
            alert (`"Scissors beats paper, you win a point!"  
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;
        case playerSelection==='Scissors'  && computerSelection==='Scissors':
            alert (`"You both chose Scissors, It's a tie!" 
            Player Score:${playerScore} Computer Score:${computerScore}`)
            break;       
    }
}

const playerSelect = document.querySelectorAll('.btn');

playerSelect.forEach(btn => btn.addEventListener('click', () =>
    if (playerSelect.id==='rock') {
        if (computerSelection==='rock') {
            alert (`"You both chose Rock, It's a tie!" 
            Player Score:${playerScore} Computer Score:${computerScore}`)                
        } else if (computerSelection==='paper') {
            computerScore++
            alert (`"Paper beats Rock, you lose this one!"  
            Player Score:${playerScore} Computer Score:${computerScore}`)
        } else { 
            playerScore++
            alert (`"Rock beats Scissors, you win a point!" 
            Player Score:${playerScore} Computer Score:${computerScore}`)
        }
    } else (playerSelect.id==='paper') {
        
        }))





/*Conditions for the victory or loss screen*/
