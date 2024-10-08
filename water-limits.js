/* celsius-to-fahrenheit.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  const celsiusInput = process.argv[2]; // Ottieni il terzo input dalla lista degli argomenti
  const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
  
  console.log(`${celsiusInput} gradi Celsius = ${fahrenheitValue} gradi Fahrenheit`);