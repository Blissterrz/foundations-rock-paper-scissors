//UI
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const feed = document.querySelector('.feed');
const playerScoreFeed = document.querySelector('.score.player');
const computerScoreFeed = document.querySelector('.score.computer');
const resetBtn = document.querySelector('.reset');
    
//Function to random select an option for the computer
    function computerPlay(){
        let ranNum = Math.floor(Math.random() * 3);
        if (ranNum === 0) {
            return 'rock'
        } else if (ranNum === 1) {
            return 'paper'
        } else  return 'scissors'   
    }

//Function to play a single round
function playRound(playerPick){
    let computerPick = computerPlay();
    if (playerPick === computerPick) {
        return "it's a tie!"
    } else if (playerPick === 'rock' && computerPick === 'paper') {
        return 'You lose! paper beats rock.'
    } else if (playerPick === 'rock' && computerPick === 'scissors') {
        return 'You win! rock beats scissors.'
    } else if (playerPick === 'paper' && computerPick === 'rock') {
        return 'You win! paper beats rock.'
    } else if (playerPick === 'paper' && computerPick === 'scissors') {
        return 'You lose! scissors beats paper.'
    } else if (playerPick === 'scissors' && computerPick === 'paper') {
        return 'You Win! scissors beats paper.'
    }  else if (playerPick === 'scissors' && computerPick === 'rock') {
        return 'You lose! rock beats scissors.'
    }
}

//Initialization for game function
let result = ''
let playerScore = 0;
let computerScore = 0;

//Function to figure out winner and calculate score
function game (result) {
    if(playerScore >= 5) {
        feed.textContent = 'You have won, click reset to play again.'
    } else if (computerScore >=  5) {
        feed.textContent = 'You have lost, click reset to play again.'
    } else {
    if(result.slice(0,5) == 'You w') {
        playerScore += 1;
        feed.textContent = result;
    } else if (result.slice(0,5) == 'You l') {
        computerScore += 1;
        feed.textContent = result;
    } else {
        feed.textContent = result;
    };
    playerScoreFeed.textContent = playerScore;
    computerScoreFeed.textContent = computerScore;
    }
}

//Clicks to play the game
rock.addEventListener('click', (e) => {
    let result = playRound('rock');
    game(result);
});
paper.addEventListener('click', (e) => {
    let result = playRound('paper');
    game(result);
});
scissors.addEventListener('click', (e) => {
    let result = playRound('scissors');
    game(result);
});

//Reset button
resetBtn.addEventListener('click', (e) => {
    playerScore= 0;
    computerScore =0;
    feed.textContent = 'Pick an option to start the game';
    playerScoreFeed.textContent = playerScore;
    computerScoreFeed.textContent = computerScore;
});