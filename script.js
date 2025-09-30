// UI
function createUI(){
    const divBtn = document.createElement('div');
    

    const btnRock = document.createElement('button');
    const btnPaper = document.createElement('button');
    const btnScissor = document.createElement('button');
    btnRock.textContent = 'Pick Rock';
    btnPaper.textContent = 'Pick Paper';
    btnScissor.textContent = 'Pick Scissors';

    btnRock.id = 'rock_button';
    btnPaper.id = 'paper_button';
    btnScissor.id = 'scissor_button';

    divBtn.appendChild(btnRock);
    divBtn.appendChild(btnPaper);
    divBtn.appendChild(btnScissor);

    document.body.appendChild(divBtn);

    const divScore = document.createElement('div');
    document.body.appendChild(divScore);
    return {btnRock, btnPaper, btnScissor, divBtn, divScore};
}

const uiElements = createUI();

// GAME
const possibleChoice = ['rock','paper', 'scissor'];
let computerScore = 0;
let humanScore = 0;

function updateScore(divScore, humanScore, computerScore){
    divScore.textContent = 'Punteggio giocatore: ' + humanScore + ' | ' + 'Punteggio computer: ' + computerScore;
}

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

function printWinner(ui){
    const winner = computerScore > humanScore ? 'computer' : 'human';
    ui.divScore.textContent = 'We have a winner ' + winner;
    
    // per disabilitare i bottoni dopo la vittoria
    ui.btnRock.disabled = true;
    ui.btnPaper.disabled = true;
    ui.btnScissor.disabled = true;
}

function playRound(human, ui){
    let computer = computerChoice();
    console.log(computer + ' vs ' + human);
    // pareggio, restituisco null per indicare di rifare il round
    if (computer === human){'tie';
        updateScore(ui.divScore, humanScore, computerScore);
        return;
    }

    // controllo casistica
    if (
        (human === 'rock' && computer === 'scissor') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissor' && computer === 'paper')
    ){
        humanScore++;
    }else{
        computerScore++;
    }

    updateScore(ui.divScore, humanScore, computerScore);

    if(humanScore >= 5 || computerScore >= 5){
        printWinner(ui);
    }
    return;
}

function addEventListener(ui){
    ui.btnRock.addEventListener('click', () => {
        playRound(possibleChoice[0],ui);
    });
    
    ui.btnPaper.addEventListener('click' ,() =>{
        playRound(possibleChoice[1], ui);
    });

    ui.btnScissor.addEventListener('click', () => {
        playRound(possibleChoice[2], ui);
    });
}


addEventListener(uiElements);

updateScore(uiElements.divScore, humanScore ,computerScore);


