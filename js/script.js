// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.


// Chiedo al utente attraverso un prompt il livello di difficotà
const userLevel = prompt('Inserisci un livello (1-2-3)');

// Definisco i vari range data dalla consegna 
let rangeMaxNumber;
if(userLevel === '1') {
    rangeMaxNumber = 100;
}else if(userLevel === '2'){
    rangeMaxNumber = 81;
}else if(userLevel === '3'){
    rangeMaxNumber = 49;
}

// Array di bombe
let bombs = genBombs(16, 1, rangeMaxNumber);
console.log(bombs); 
// Genero 16 bombe del tutto casuali e li inserisco in una array ma non possono essere duplicati   
function genBombs(numElements, rangeMin, rangeMax) {

    const arrayBombs = [];
    while(arrayBombs.length < numElements) {
        // Genero i numeri dal min al max in base ai range
        const bombsElement = randomNumBomb(rangeMin, rangeMax );
        // Inserisco nel array solo i numeri non preesenti nel array
        if(!arrayBombs.includes(bombsElement)) {
            arrayBombs.push(bombsElement);
            
            
        }
        
    }
    return arrayBombs;
}


// Funzione che genera i numeri delle bombe randomiche
function randomNumBomb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Faccio continuare ad inserire un numero al utente finchè non becca una bomba e li inserisco in un array conteneti tutti i numeri che non sono bombe
   // Se becca una bomba faccio terminare il gioco e gli comunico un messaggio che ha perso

// Definisco il massimo dei tentativi in ogni range che l'utente può tentare 
   // Se raggiunge il massimo dei tentativi nei rispettivi range termino il gioco e comunico un messaggio che ha vinto

// Quando termino il gioco comunico al utente il numero corrispettivo delle risposte corrrette ovvero quelle che non contenevano le bombe   