// you need to create selectors to update the scores and the moves being displayed
// you also need a selector for your move selection buttons
// you need a random selection function for your computer to pick a move each turn
// you need to update the display area to show your move for each turn
// you need a function for win/loss/tie scenarios
// you need an if/else if/else statement for each case of the game and to invoke the correct functions in each case



function choice(){
let choice = Math.floor(Math.random() * 3);
if (choice === 0){
  return 'rock';
} else if (choice === 1){
  return 'paper';
} else {
  return 'scissors';
}
}

function game(user, computer){
 
  if (user === computer) {
    return "it's a tie!";
  } else if (user === 'rock' && computer === 'paper'){
    return "you lose, computer wins!";
  } else if (user === 'paper' && computer === 'scissors'){
    return "you lose, computer wins!";
  } else if (user === 'scissors' && computer === 'rock'){
    return "you lose, computer wins!";
  } else {
    return "you win, computer loses!";
  }
   
}


let computerChoice = '';
let userChoice = 0
//console.log(game(1,computerChoice));

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const human = document.getElementById("human");

let winner = document.getElementById("winner");
let humanScore = 0;
let computerScore = 0;

function processPage(userChoice, computerChoice){
    //let winner = document.getElementById("winner");
    winner.innerHTML = game(userChoice,computerChoice);
    if(winner.innerHTML === "you lose, computer wins!"){
        computerScore += 1;
    } else if(winner.innerHTML === "you win, computer loses!"){
        humanScore += 1;
    } else {

    }

    if(computerChoice === 'rock'){
        computer.className = "fas fa-hand-rock";
    } else if(computerChoice === 'paper'){
        computer.className = "fas fa-hand-paper";
    } else if (computerChoice === 'scissors'){
        computer.className = "fas fa-hand-scissors";
    }
    document.getElementById("humanScore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = computerScore;

}

rock.onclick = function() {
    userChoice = 'rock';
    computerChoice = choice();
    processPage(userChoice, computerChoice);
    human.className = "fas fa-hand-rock";
}

paper.onclick = function() {
    userChoice = 'paper';
    computerChoice = choice();
    processPage(userChoice, computerChoice);
    human.className = "fas fa-hand-paper";
}
scissors.onclick = function() {
    userChoice = 'scissors';
    computerChoice = choice();
    processPage(userChoice, computerChoice);
    human.className = "fas fa-hand-scissors";
}