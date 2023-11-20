/*Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.*/



// Chiedi all'utente il numero di chilometri e l'età del passeggero
const kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

// Calcola il prezzo del biglietto
let prezzoAlKm = 0.21;
let prezzoTotale = kmDaPercorrere * prezzoAlKm;

// Applica gli sconti in base all'età
if (etaPasseggero < 18) {
    // Sconto del 20% per i minorenni
    prezzoTotale -= prezzoTotale * 0.2;
} else if (etaPasseggero >= 65) {
    // Sconto del 40% per gli over 65
    prezzoTotale -= prezzoTotale * 0.4;
}

// Formatto il prezzo finale con massimo due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Stampare il prezzo finale
console.log("Il prezzo totale del viaggio è: €" + prezzoTotale);