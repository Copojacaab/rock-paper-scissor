const possibleChoice = ['rock','paper', 'scissor'];
let computerScore = 0;
let humanScore = 0;


// Logica per la scelta del computer
function computerChoice(){
    let randomValue = Math.floor(Math.random() * possibleChoice.length);
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

function playRound(){
    let computer = computerChoice();
    let human = humanChoice(prompt('Inserisci la tua scelta: '));
    console.log(computer + ' vs ' + human);
    // pareggio, restituisco null per indicare di rifare il round
    if (computer === human){
        return 'tie';
    }

    // controllo casistica
    if(computer === possibleChoice[0]){
        if(human === possibleChoice[1]){
            humanScore +=1;
            return; // so giá come é andata la partita, ritorno alla chiamante
        }
        computerScore += 1;
        return; // so giá come é andata la partita, ritorno alla chiamante
    }
    if(computer === possibleChoice[1]){
        if(human === possibleChoice[2]){
            humanScore += 1;
            return;
        }
        computerScore += 1;
        return;
    }
    if (computer === possibleChoice[2]){
        if(human === possibleChoice[0]){
            humanScore += 1;
            return;
        }
        computerScore += 1;
        return;
    }

}

// UI
function createUI(){
    const div = document.createElement('div');
    

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissor = document.createElement('button');
    btnRock.textContent = 'Pick Rock';
    btnPaper.textContent = 'Pick Paper';
    btnScissor.textContent = 'Pick Scissors';

    btnRock.id = 'rock_button';
    btnPaper.id = 'paper_button';
    btnScissor.id = 'scissor_button';

    div.appendChild(btnRock);
    div.appendChild(btnPaper);
    div.appendChild(btnScissor);

    document.body.appendChild(div);
}

function btnEventListener(){
    btnRock.addEventListener()
}
createUI();