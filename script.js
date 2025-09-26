const possibleChoice = ['rock','paper', 'scissor'];
let computerScore = 0;
let humanScore = 0;
// Logica per la scelta del computer
function computerChoice(maxForRandom, minForRandom){
    let randomValue = Math.floor(Math.random() * (maxForRandom - minForRandom + 1) + minForRandom);
    return possibleChoice[randomValue];
}

// logica per la scelta utente
function humanChoice(choice){
    // check
    if(!(typeof choice === 'string')){
        alert('Inserire un input valido(rock, paper, scissor)');
    }

    // check
    if(!(possibleChoice.includes(choice))) {
        alert('Inserire un input valido(rock, paper scissor)');
    }

    // input sicuramente valido
    return choice;
}

function playRound(computerChoice, humanChoice){
    // pareggio, restituisco null per indicare di rifare il round
    if (computerChoice === humanChoice){
        return 'tie';
    }
    // controllo casistica
    if(computerChoice === possibleChoice[0]){
        if(humanChoice === possibleChoice[1]){
            humanScore +=1;
            return; // so giá come é andata la partita, ritorno alla chiamante
        }
        computerScore += 1;
        return; // so giá come é andata la partita, ritorno alla chiamante
    }
    if(computerChoice === possibleChoice[1]){
        if(humanChoice === possibleChoice[2]){
            humanScore += 1;
            return;
        }
        computerChoice += 1;
        return;
    }
    if (computerChoice === possibleChoice[2]){
        if(humanChoice === possibleChoice[0]){
            humanScore += 1;
            return;
        }
        computerScore += 1;
        return;
    }

}