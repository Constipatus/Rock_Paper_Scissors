
/*Sets the score to 0 as a basis to start the rounds*/
let playerScore=0
let computerScore=0

/*Function to randomly generate Rock, Paper, or Scissors, to be used as the computer input later*/
function getComputerChoice() {
    let computerChoices = ['Rock', 'Paper', 'Scissors']
    let randIndex = Math.floor(Math.random() * computerChoices.length);
    if (randIndex===0) {
        result = "rock";
    } else if (randIndex===1) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result
}
/*The prompt alert to ask for the players decision*/

//const playerSelection = getPlayerChoice();
//const computerSelection = getComputerChoice();


/*Compares selections of player to computer to round results*/
const playRock = document.querySelector('#rock')
const playPaper = document.querySelector('#paper')
const playScissors = document.querySelector('#scissors')

/*Determine scores earned based on the selection of the player verse the 
randomly generated selection of the computer*/

function playRound()  {
    if (playerSelection===computerSelection) {
        alert ("You tied! Try Again!")
    } else if (playerSelection==='Rock' && computerSelection==='Paper') {
        alert ("Your rock became a present via paper, crud!")
    } else if (playerSelection==='Rock' && computerSelection==='Scissors') {
        alert ("Your rock has has these scissors bent out of shape, Nice!")
    } else if (playerSelection==='Paper' && computerSelection==='Rock') {
        alert ("Your paper has crumbled the rock. Woohoo!")
    } else if (playerSelection==='Paper' && computerSelection==='Scissors') {
        alert ("Your paper can't shred a tear cuz.. of.. scissors.. doh")
    } else if (playerSelection==='Scissors' && computerSelection==='Paper') {
        alert ("Your scissors snipped a snappy victory over paper, Grats")
    } else if (playerSelection==='Scissors' && computerSelection==='Rock') {
        alert ("Your scissors couldn't cut it here with this rock, oh no")
    }}
    
    



playRock.addEventListener('click', function (e) {
    playerSelection = 'Rock';
    computerSelection = getComputerChoice();
    playRound();
})

playPaper.addEventListener('click', function (e) {
    playerSelection = 'Paper'
    computerSelection = getComputerChoice();
    playRound()
})

playScissors.addEventListener('click', function (e) {
    playerSelection = 'Scissors'
    computerSelection = getComputerChoice();
    playRound()
})






/*Conditions for the victory or loss screen*/
