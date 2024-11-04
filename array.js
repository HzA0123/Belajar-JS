// ini menggunakan Array Constructor

const users = new Array();
console.log(users);

// Ini menggunakan Untuk Array.From

const foo = Array.from('food');
console.log(foo); // Output: ['f', 'o', 'o']


// Array.From bisa digunakna untuk ini juga.

//const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// dan ini jika menggunakan Array Literal

const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']


// ini digunakan untuk memanggil salah satu nilai dari array. (Perlu diingat bahwa nilai dari array di panggil dengan angka mulai dari 0)

console.log(fruits[2]);


// Manipulasi Nilai Array

const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10; // digunakan untuk memanipulasi nilai array ke 2 menjadi 10
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// Untuk Menambahkan nilai array kita bisa menggunakan (push)

const ArrayNambah = [1, 2, 3, 4, 5];
ArrayNambah.push(6);
console.log(ArrayNambah); // Output: [1, 2, 3, 4, 5, 6]

// dan Untuk Menghapus kita bisa gunakan (delete)
const ArrayKurang = ['Android','Data Science', 'Web','Machine Learning']
delete ArrayKurang[2];
console.log (ArrayKurang); //hasilnya [ 'Android', 'Data Science', <1 empty item>, 'Machine Learning' ]


//namun hasilnya masih ada tulisan Elementnya masih ada. (untuk menghilangkan elementnya kita harus gunakan  Mehtod splice().)

const ArrayK = ['Android','Data Science', 'Web','Machine Learning']
ArrayK.splice(1,1);
console.log (ArrayK); //hasilnya [ 'Android', 'Web', 'Machine Learning' ]

// Dan yang terakhir adalah pop dan shift. akan tetapi memiliki kekurangan yaitu adalah shift hanya bisa digunakan untuk menghapus element pertama dan pop hanya bisa di gunakan untuk menghapus element terakhir

const myShiftArray = ['Android', 'Data Science', 'Web'];
myShiftArray.shift();
console.log(myShiftArray); // Output: ['Data Science', 'Web']


const myPopArray = ['Android', 'Data Science', 'Web'];
myPopArray.pop();
console.log(myPopArray); // Output: ["Android", "Data Science"]


// Array destructuring digunakan untuk melihat isi array

const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello


// Reverse Array. Digunakan untuk Membuat Data Di array jadi terbalik / Reverse.

const myReverseArray = ['Android', 'Data Science', 'Web'];
myReverseArray.reverse();
console.log(myReverseArray); // Output: [ 'Web', 'Data Science', 'Android' ]


// Dann ini adalah Sort yaitu mengurutkan data array

const mySortArray = ['Web', 'Android', 'Data Science'];
mySortArray.sort();
console.log(mySortArray); // Output: [ 'Android', 'Data Science', 'Web' ]