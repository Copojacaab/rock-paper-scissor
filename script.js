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

// GAME
const possibleChoice = ['rock','paper', 'scissor'];
let computerScore = 0;
let humanScore = 0;


function updateScore(divScore, humanScore, computerScore){

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

function playRound(human, ui){
    let computer = computerChoice();
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
    ui.divScore.textContent = "diocane";
}



addEventListener(uiElements);

