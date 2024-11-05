//digunakann untuk perulangan sebuah object karena dia dapat melakukan iterasi ke seluruh data di dalam objek.

const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

//for in tidak perlu menuliskan nilai variabel di awal atau melakukan increment. for in akan melakukan perulangan di dalam item yang ada di dalam object. (contoh pada object person)