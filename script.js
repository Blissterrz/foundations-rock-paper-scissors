// The code for the rock paper scissors game.

function computerPlay(){
    let ranNum = Math.floor(Math.random() * 3);
    console.log(ranNum);
    if (ranNum === 0) {
        return 'rock'
    } else if (ranNum === 1) {
        return 'paper'
    } else  return 'scissors'   
}

function userPlay(){
    let userSelect = prompt("Enter rock, paper or scissors.");
    if (userSelect.toLowerCase() === 'rock') {
        return 'rock'
    } else if (userSelect.toLowerCase() === 'paper') {
        return 'paper'
    } else if (userSelect.toLowerCase() === 'scissors') {
        return 'scissors'
    } else alert('Do you not know how to play rock paper scissors or something?')
}

function playRound(){
    let computerPick = computerPlay();
    let userPick = userPlay();
    if (userPick === computerPick) {
        return "it's a tie!"
    } else if (userPick === 'rock' && computerPick === 'paper') {
        return 'You lose! paper beats rock.'
    } else if (userPick === 'rock' && computerPick === 'scissors') {
        return 'You win! rock beats scissors.'
    } else if (userPick === 'paper' && computerPick === 'rock') {
        return 'You win! paper beats rock.'
    } else if (userPick === 'paper' && computerPick === 'scissors') {
        return 'You lose! scissors beats paper.'
    } else if (userPick === 'scissors' && computerPick === 'paper') {
        return 'You Win! scissors beats paper.'
    }  else if (userPick === 'scissors' && computerPick === 'rock') {
        return 'You lose! rock beats scissors.'
    }
}