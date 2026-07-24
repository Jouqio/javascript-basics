## Mengubah Nilai Antar Tipe Data

Saat mengelola sebuah data dalam JavaScript, seringkali kita perlu mengubah nilai dari satu tipe data ke tipe data lain. Proses ini sangat penting karena dalam berbagai situasi, kita perlu menyesuaikan tipe data dengan konteks atau kebutuhan tertentu, baik untuk keperluan perhitungan, perbandingan, maupun manipulasi data.

JavaScript adalah bahasa pemrograman yang dinamis dan fleksibel, ia menyediakan berbagai cara untuk mengonversi tipe data. Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter. Memahami cara konversi tipe data penting agar dapat menulis kode yang efisien, efektif, dan bebas dari kesalahan.

## Konversi Eksplisit

Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer. Berikut adalah beberapa metode umum yang digunakan untuk konversi tipe data secara eksplisit.

*Mengubah ke String*

Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara, yaitu menggunakan fungsi String() dan method .toString(). Berikut adalah contoh dari penggunaan kedua cara tersebut.

main.js

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

Ketika ingin mengubah nilai menjadi string menggunakan String(), Anda harus memberikan nilai yang akan diubah di antara tanda kurung.

Adapun toString() adalah method yang tersedia dalam beberapa tipe data (salah satunya boolean) yang digunakan untuk mengembalikan nilai string berdasarkan nilai referensinya.

*Mengubah ke Number*

Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan dengan menggunakan fungsi Number(). Berikut contoh penggunaannya.

main.js

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14

*Catatan*
Dalam number, nilai boolean direpresentasikan dengan angka 1 dan 0. Boolean true akan diubah menjadi 1, sedangkan false diubah ke 0.

Selain dengan fungsi Number(), ada juga cara yang lebih spesifik, seperti fungsi parseInt() dan parseFloat().

Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer). Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan karakter yang tidak bisa diubah menjadi angka, proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan untuk mengubah nilai string, seperti "20CM", "64px", atau angka dengan satuan lainnya.

*main.js*

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.

*main.js*

const cm = '20.55cm';
const px = '64.23px';

const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

## Mengubah ke Boolean

Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean(). Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean().

*main.js*

const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false