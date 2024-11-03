temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194