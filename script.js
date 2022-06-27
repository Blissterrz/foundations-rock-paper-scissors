//Function to random select an option for the computer
function computerPlay(){
    let ranNum = Math.floor(Math.random() * 3);
    console.log(ranNum);
    if (ranNum === 0) {
        return 'rock'
    } else if (ranNum === 1) {
        return 'paper'
    } else  return 'scissors'   
}


//Fucntion to allow the user to select their option.
function userPlay(){
    let userSelect = prompt("Enter rock, paper or scissors.");
    if (userSelect.toLowerCase() === 'rock') {
        return 'rock'
    } else if (userSelect.toLowerCase() === 'paper') {
        return 'paper'
    } else if (userSelect.toLowerCase() === 'scissors') {
        return 'scissors'
    } else {
        alert('Do you not know how to play rock paper scissors or something? Try again.');
        return userPlay();
    }
    
}

//Funtion to play a single round
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

//Function to initiate the game and keep track of the scores
function game(){
    let userPoints = 0;
    let computerPoints = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result.slice(0,5) === 'You w')  {
            userPoints += 1
        } else if (result.slice(0,5) === 'You l') {
            computerPoints += 1;
        } else {
            ties += 1
        }
        console.log(result);
     }
     console.log('User: ' + userPoints +  ' ' + 'Computer: ' + computerPoints);
     if (userPoints>computerPoints) {
        console.log("You have won!")
     } else if (computerPoints>userPoints) {
        console.log("You have lost.")
     } else console.log('It was a tie!')
}
