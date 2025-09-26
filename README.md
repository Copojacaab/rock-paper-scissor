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

