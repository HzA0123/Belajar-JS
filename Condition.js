const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

//apabila gajian bernilai true maka "Makan di restoran akan di print" dan jika bernilai false maka akan di lewatkan.


const score = 80;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

//apabila nilai lebih dari 80 maka (Selamat, anda lulus ujian!. akan di print), dan jika score kurang dari 80 maka akan di print (Maaf , anda belum lulus ujian.)


//Jika kondisi lebih dari satu maka kita bisa gunakan else if sebagai pilihan.
const hscore = 85;

if (hscore > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (hscore > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}