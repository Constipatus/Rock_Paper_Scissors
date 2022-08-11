
/*Sets the score to 0 as a basis to start the rounds*/
let playerScore=0
let computerScore=0;

const wins = document.querySelector('#winPoints');
const losses = document.querySelector('#lossPoints');

const results = document.querySelector('#resultText')



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
//const computerSelection = getComputerChoice();


/*Compares selections of player to computer to round results*/

/*Determine scores earned based on the selection of the player verse the 
randomly generated selection of the computer*/

function playRound()  {
    if (playerScore===5||computerScore===5) {
        return
    } else if (playerSelection===computerSelection) {
        resultText.textContent = "You tied! Try Again!"
    } else if (playerSelection==='Rock' && computerSelection==='Paper') {
        ++computerScore
        resultText.textContent = "Your ROCK became a present via PAPER, crud!"
    } else if (playerSelection==='Rock' && computerSelection==='Scissors') {
        ++playerScore
        resultText.textContent = "Your ROCK has these SCISSORS bent out of shape, Nice!"
    } else if (playerSelection==='Paper' && computerSelection==='Rock') {
        ++playerScore
        resultText.textContent = "Your PAPER has crumpled over the ROCK. Woohoo!"
    } else if (playerSelection==='Paper' && computerSelection==='Scissors') {
        ++computerScore
        resultText.textContent = "Your PAPER can't shred a tear cuz.. of.. SCISSORS.. doh"
    } else if (playerSelection==='Scissors' && computerSelection==='Paper') {
        ++playerScore
        resultText.textContent = "Your SCISSORS snipped a snappy victory over PAPER, Grats"
    } else if (playerSelection==='Scissors' && computerSelection==='Rock') {
        ++computerScore
        resultText.textContent = "Your SCISSORS couldn't cut it here with this ROCK, oh no"
    }
    wins.textContent = `${playerScore}`;
    losses.textContent = `${computerScore}`;
    
    if (playerScore===5) {
        resultText.textContent = "You win this match! Woop!"
    } else if (computerScore===5) {
        resultText.textContent = "Major efforts but no avail, you lost the match!"
    }
}
    
    
const playRock = document.querySelector('#rock')
playRock.addEventListener('click', () => {
    playerSelection='Rock';
    computerSelection=getComputerChoice();
    playRound();
})

const playPaper = document.querySelector('#paper')
playPaper.addEventListener('click', () => {
    playerSelection='Paper';
    computerSelection=getComputerChoice();
    playRound();
})

const playScissors = document.querySelector('#scissors')
playScissors.addEventListener('click', () => {
    playerSelection='Scissors';
    computerSelection=getComputerChoice();
    playRound();
})





/*Conditions for the victory or loss screen*/
