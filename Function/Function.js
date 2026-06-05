//Function
//Function adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi dapat menerima input dalam bentuk parameter dan dapat mengembalikan output setelah menjalankan kode di dalamnya. Fungsi membantu dalam mengorganisir kode, meningkatkan keterbacaan, dan memungkinkan penggunaan kembali kode yang sama di berbagai bagian program.
//digunakan untuk mengorganisir kode, meningkatkan keterbacaan, dan memungkinkan penggunaan kembali kode yang sama di berbagai bagian program. Fungsi dapat didefinisikan dengan menggunakan kata kunci function diikuti dengan nama fungsi, daftar parameter dalam tanda kurung, dan blok kode dalam tanda kurung kurawal. Fungsi dapat dipanggil dengan menggunakan nama fungsi diikuti dengan tanda kurung dan argumen yang sesuai

//contoh penggunaan function dasar
// 1. function declaration
function greet() {
  //mendefinisikan fungsi dengan nama greet, fungsi ini tidak memiliki parameter
  console.log("Hello, World!"); //menampilkan pesan "Hello, World!" di console, menggunakan console.log untuk menampilkan data pada console
}

// 2. function expression
//function expression digunakan untuk mendefinisikan fungsi dengan menyimpan fungsi ke dalam variabel, fungsi ini juga dapat memiliki nama atau anonim, fungsi expression biasanya digunakan untuk membuat fungsi yang hanya akan digunakan sekali atau untuk membuat fungsi yang akan dipanggil setelah didefinisikan
//contoh penggunaan function expression
const greet2 = function () {
  //mendefinisikan fungsi dengan nama greet2, fungsi ini tidak memiliki parameter, menggunakan function expression dengan menyimpan fungsi ke dalam variabel greet2
  console.log("Hello, World!"); //menampilkan pesan "Hello, World!" di console, menggunakan console.log untuk menampilkan data pada console
};

// 3. arrow function
//arrow function adalah cara yang lebih singkat untuk menulis fungsi, menggunakan tanda panah (=>) untuk mendefinisikan fungsi, arrow function juga memiliki beberapa perbedaan dalam hal this dan cara menangani parameter
//contoh penggunaan arrow function
const greet3 = () => {
  //mendefinisikan fungsi dengan nama greet3, fungsi ini tidak memiliki parameter, menggunakan arrow function dengan menyimpan fungsi ke dalam variabel greet3
  console.log("Hello, World!"); //menampilkan pesan "Hello, World!" di console, menggunakan
  //console.log untuk menampilkan data pada console
};

//contoh penggunaan function dengan parameter dan return value
//add digunakan untuk membuat fungsi yang menerima dua parameter yaitu a dan b, dan mengembalikan hasil penjumlahan a dan b
function add(a, b) {
  //mendefinisikan fungsi dengan nama add, fungsi ini memiliki dua parameter yaitu a dan b
  return a + b; //mengembalikan hasil penjumlahan a dan b, menggunakan return untuk mengembalikan nilai dari fungsi
}
const result = add(5, 10); //memanggil fungsi add dengan argumen 5 dan 10, menyimpan hasilnya ke dalam variabel result
console.log(result); //menampilkan nilai result di console, menggunakan console.log untuk menampilkan data pada console

//contoh penggunaan function dengan parameter default
//greet4 digunakan untuk membuat fungsi yang memiliki parameter dengan nilai default, jika tidak ada argumen yang diberikan maka akan menggunakan nilai default
function greet4(name = "Guest") {
  //mendefinisikan fungsi dengan nama greet4, fungsi ini memiliki satu parameter yaitu name dengan nilai default "Guest"
  console.log("Hello, " + name + "!"); //menampilkan pesan "Hello, [name]!" di console, dimana [name] adalah nilai dari parameter name, menggunakan console.log untuk menampilkan data pada console
}

greet4(); //memanggil fungsi greet4 tanpa argumen, sehingga akan menggunakan nilai default "Guest"
greet4("Syauqi"); //memanggil fungsi greet4 dengan argumen "Syauqi", sehingga akan menampilkan pesan "Hello, Syauqi!" di console

//contoh penggunaan function dengan parameter rest
//sum digunakan untuk membuat fungsi yang dapat menerima jumlah argumen yang tidak terbatas, parameter rest akan mengumpulkan semua argumen yang diberikan ke dalam array
function sum(...numbers) {
  //mendefinisikan fungsi dengan nama sum, fungsi ini memiliki parameter rest yaitu ...numbers yang akan mengumpulkan semua argumen yang diberikan ke dalam array numbers
  return numbers.reduce((total, num) => total + num, 0); //mengembalikan hasil penjumlahan semua angka dalam array numbers, menggunakan reduce untuk melakukan penjumlahan semua elemen dalam array
}
const totalSum = sum(1, 2, 3, 4, 5); //memanggil fungsi sum dengan argumen 1, 2, 3, 4, dan 5, menyimpan hasilnya ke dalam variabel totalSum
console.log(totalSum); //menampilkan nilai totalSum di console, menggunakan console.log untuk menampilkan data pada console

//contoh penggunaan function dengan parameter rest dan default
//sum digunakan untuk membuat fungsi yang dapat menerima jumlah argumen yang tidak terbatas, dan juga memberikan nilai default pada parameter jika tidak ada argumen yang diberikan
//multiply adalah fungsi yang menerima parameter factor dan parameter rest numbers, dimana factor memiliki nilai default 1 jika tidak ada argumen yang diberikan, dan numbers akan mengumpulkan semua argumen yang diberikan ke dalam array
function multiply(factor = 1, ...numbers) {
  //mendefinisikan fungsi dengan nama multiply, fungsi ini memiliki satu parameter yaitu factor dan parameter rest yaitu ...numbers yang akan mengumpulkan semua argumen yang diberikan ke dalam array numbers
  return numbers.map((num) => num * factor); //mengembalikan hasil perkalian setiap angka dalam array numbers dengan factor, menggunakan map untuk melakukan operasi pada setiap elemen dalam array
}
const multipliedNumbers = multiply(2, 1, 2, 3); //memanggil fungsi multiply dengan argumen 2, 1, 2, dan 3, menyimpan hasilnya ke dalam variabel multipliedNumbers
console.log(multipliedNumbers); //menampilkan nilai multipliedNumbers di console, menggunakan
//console.log untuk menampilkan data pada console

// 4 . IIFE (Immediately Invoked Function Expression)
//IIFE adalah fungsi anonim yang langsung dipanggil setelah didefinisikan, menggunakan IIFE untuk menjalankan kode secara langsung tanpa harus memanggil fungsi secara terpisah. IIFE biasanya digunakan untuk membuat scope lokal dan menghindari konflik dengan variabel global.
//contoh penggunaan IIFE
(function () {
  //mendefinisikan fungsi anonim yang langsung dipanggil setelah didefinisikan, menggunakan IIFE untuk menjalankan kode secara langsung tanpa harus memanggil fungsi secara terpisah
  console.log("This is an IIFE!"); //menampilkan pesan "This is an IIFE!" di console, menggunakan console.log untuk menampilkan data pada console
})();
