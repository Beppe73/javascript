/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
  return radiusLength * radiusLength * PI; // Correzione della formula: π * r^2
}

// Prende il raggio dalla riga di comando
const inputRadius = process.argv[2];

// Calcola l'area del cerchio
const newArea = circleArea(inputRadius);

// Stampa il risultato
console.log(`L'area del cerchio è ${newArea}`);