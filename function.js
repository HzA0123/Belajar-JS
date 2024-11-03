
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  let temperatureInCelsius = 90;
  let temperatureIn = 40;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius);
  convertCelsiusToFahrenheit(temperatureIn);

  // Output => Hasil konversi: 194