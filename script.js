var playerScore = 0;
var computerScore = 0;

var resultDiv = document.getElementById('result');
var scoreDiv = document.getElementById('score');

document.getElementById('rock').addEventListener('click', function() {
    playRound('rock');
});
document.getElementById('paper').addEventListener('click', function() {
    playRound('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors');
});

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    var computerSelection = computerPlay();
    var result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    } else {
        computerScore++;
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }

    resultDiv.textContent = result;
    scoreDiv.textContent = 'Player Score: ' + playerScore + ' - Computer Score: ' + computerScore;

    if (playerScore === 5) {
        alert('Congratulations! You won the game!');
        resetGame();
    } else if (computerScore === 5) {
        alert('Sorry, you lost the game. Try again!');
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDiv.textContent = '';
    scoreDiv.textContent = '';
}
