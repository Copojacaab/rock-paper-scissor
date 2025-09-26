# Rock Paper Scissor

Un gioco giocato contro il computer, semplicemente sasso, carta, forbice.

## Scrivo la logica della scelta del computer

Il computer deve poter scegliere casualmente una opzione tra sasso, carta e forbice.
Creiamo una funzione getComputerChoice che sceglie casualmente tra sasso, carta, forbice (utilizzare la funzione math_random)
testare la funzione nella console per controllare che faccia quello che vogliamo

## Scrivo la logica per prendere la scelta dell'utente

L'utente deve poter scegliere tra le tre opzioni.
Creiamo una funzione getHumanChoice che restituisca una delle scelte valide in base all'input dell'utente
Testare la funzione all'interno della console per controllare che faccia quello che vogliamo

## Tenere traccia dei punteggi

Il gioco deve poter tener traccia dei punteggi, dobbiamo quindi creare due nuove variabili globali per il punteggio utente e del computer

## Scrivere la logica per giocare un singolo roung

Serve una funzione che prenda l'input macchina e l'input utente, "giochi" la partita, decida il vincitore e incrementi il punteggio del vincitore.
Creiamo la nuova funzione playRound che prende due variabili in input: humanChoice e computerChoice.
Ricordarsi di scrivere una stringa su console del tipo "Hai perso. Carta batte Sasso"

## Scrivere la logica per giocare il gioco intero

Ci serve una funzione che faccia giocare 5 round, quindi praticamente deve ripetere cinque volte la scelta dell'umano, la scelta del computer e il playRound

## FLUSSO DI PENSIERI

### Scelta del computer

Voglio lavorare con un array con tre elementi: rock, paper, scissor. Tramite math.random faccio scegliere un elemento casuale tra i tre dell'array. quella sará la scelta del computer. mi salvo la scelta in una variabile che poi devo ritornare alla funzione che gioca il round

#### Pseudocode computer

dichiarazione array con le tre scelte (l'ho messa globale e via)
prendo un valore casuale con math.random tra 0 e 2
picko il valore corrispondente all'interno dell'array e lo restituisco

### Scelta dell'utente

l'utente deve semplicemente poter scegliere tra sasso carta e forbice, magari scrivendo da tastiera r,p,s.

#### Pseudocode umano

controllo se é tipo stringa
controllo se é un input possibile (rock paper scissor)
in entrambi i casi se la risposta é positiva mando messaggio di errore
restituisco la scelta utente, sicuramente valida

### Singolo round

per giocare un singolo round il computer e l'umano devono fare la scelta, dobbiamo combinare le due scelte con tutte le combinazioni possibili e assegnare il punto a chi ha vinto (quindi devo anche dichiarare le variabili globali per i punteggi). Voglio anche implementare la logica per la quale se é un pareggio si continua a giocare il singolo round fino a quando non c'é un vincitore.

#### Psuedocode singolo round

funzione prende due parametri (computerChoice, humanChoice)
chiamo la funzione di computerChoice
chiamo la funzione di humanChoice (questo ciclo lo sposto nella funzione della partita)
if pareggio riparti da capo e scrivi a console (pareggio, carta vs carta)
else
    if computer === rock
        if human === paper allora punto human e esco dal ciclo
        punto computer e esco dal ciclo
    if computer === paper
        if human === scissor allora punto human e esco dal ciclo
        punto computer e esco dal ciclo
    if computer === scissor
        if human === rock allora punto human e esco dal ciclo
        punto computer e esco dal ciclo
