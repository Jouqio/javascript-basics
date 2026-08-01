## Function

Apa itu function dan masalah yang dapat dipecahkan oleh function? Mari kita cari tahu bersama-sama!

Apakah Anda cukup familier dengan skala suhu, seperti celsius, fahrenheit, kelvin, dan reaumur? Dalam masa belajar di sekolah, kita pasti pernah diajarkan cara melakukan konversi skala suhu. Misalnya, angka suhu berskala celsius diubah menjadi suhu berskala fahrenheit, diubah menjadi suhu berskala reaumur, atau lainnya. Ada rumus yang menjadi panduan perubahannya. Kita ambil satu contoh rumus mengubah skala suhu celsius ke fahrenheit.

---

9 / 5 \* {angka_suhu_celsius} + 32;

---

Kita tinggal terapkan saja rumus di atas dalam program JavaScript. Misalnya, kita memiliki angka suhu 90 derajat celsius dan ingin diubah ke skala suhu fahrenheit.

---

const temperatureInCelsius = 90;
const temperatureInFahrenheit = 9 / 5 \* temperatureInCelsius + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);

/_ Output:
Hasil konversi: 194
_/

---

Jika program di atas dijalankan, kita akan mendapat nilai 194 sebagai angka suhu berskala fahrenheit. Keren!

Nah, tidak berhenti sampai di sana saja. Kita punya tugas untuk mengubah beberapa angka suhu celsius lainnya ke fahrenheit juga. Misalnya, kita memiliki angka 50 °C, 70 °C, dan 100 °C yang perlu dikonversi. Apa yang akan kita lakukan? Copas atau copy-paste menjadi opsi solusi. Artinya, kita akan punya lima statement atau baris kode untuk memproses perhitungan.

---

let temperatureInCelsius;
let temperatureInFahrenheit;

temperatureInCelsius = 50;
temperatureInFahrenheit = 9 / 5 \* temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 122

temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 \* temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158

temperatureInCelsius = 100;
temperatureInFahrenheit = 9 / 5 \* temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 212

---

## Deklarasi Function

Pembuatan function sebetulnya mirip dengan pembuatan variabel. Dalam variabel, nilai dapat kita akses dengan menyebutkan nama variabelnya. Hal ini karena memang kita menyimpan atau mengikat nilai dalam variabel tersebut. Sebuah function juga diikat dalam sebuah nama function. Dengan kata lain, nama function tersebut adalah identifier.

Keyword “function” harus selalu disertakan ketika mendeklarasikan function. Berikutnya, keyword tersebut diikuti dengan identifier. Ini mirip seperti variabel, kita dapat memberi nama sesuai dengan kebutuhan. Setelah itu, kita tuliskan parentheses (tanda kurung) untuk mendefinisikan parameter-parameter yang diperlukan dan function body. Apa itu parameter? Sebelum itu, kami jelaskan function body dahulu.

Function body berisi sekumpulan statement atau perintah yang akan dieksekusi oleh interpreter. Ia dibungkus dengan tanda kurung kurawal buka-tutup (curly braces). Di sinilah kita dapat mengelompokkan kode-kode untuk melakukan penyederhanaan dan dapat dipanggil kapan pun developer butuhkan. Dengan kata lain, kelompok kode ini adalah tugas yang perlu dieksekusi dan diselesaikan oleh function ketika dipanggil.

Ada kalanya tugas function memerlukan input data agar dapat diproses, bukan? Ini mirip seperti function console.log ketika menampilkan data ke console karena ada data input yang diberikan. Nah, input data itulah yang disebut dengan parameter. Kita akan mengupas lebih lanjut tentang penanganan parameter ini pada materi berikutnya.

Mari kita ambil kasus sebelumnya. Kita tahu bahwa implementasi rumus untuk konversi angka suhu berskala celsius ke fahrenheit seperti berikut.

---

9 / 5 \* {angka_suhu_celsius} + 32;

---

Untuk mencapai kode yang lebih simpel dan bersih karena akan digunakan berulang kali, kita dapat membungkusnya dengan function.

---

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

---

Membuat function dalam JavaScript sangat mudah, kan? Kali ini, kita tinggal memanggil function tersebut saja untuk mendapatkan angka hasil konversi suhu. Namun, jika program di atas dijalankan, tidak ada hasil apa pun yang akan tampak. Apakah ada yang tahu alasannya? Ya, sebabnya adalah belum kita jalankan.

## Pemanggilan Function

Pada materi sebelumnya, kita sudah belajar cara membuat function dalam JavaScript. Teknik yang sangat menarik untuk meningkatkan keterbacaan kode. Kita juga sudah berhasil membuatkan function untuk melakukan konversi skala suhu dari celsius ke fahrenheit. Namun, bagaimana menjalankannya? Ayo, mari kita bahas.

Melakukan deklarasi function tidak meminta JavaScript untuk menjalankannya. Lagi-lagi ini mirip dengan variabel, kita perlu menyebutkan identifier untuk memanggilnya. Itu artinya kita tinggal sebut namanya saja, dong? Benarkah? Markicob (mari kita coba).

Untuk menjalankan tugas function, sebutkan function identifier dan diikuti dengan parentheses. Pemanggilan function ini akan menjalankan seluruh kode dalam function body atau semua statement di antara curly braces ketika mendeklarasikan function.

---

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = (9 / 5) \* temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);

}

const temperatureInCelsius = 90;

// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelciusToFahrenheit]

// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi: 194

---

## Parameter dan Argument

Sebagaimana telah dijelaskan pada materi Deklarasi Function, sekumpulan kode dalam function body bisa saja membutuhkan data agar tugas diproses dengan baik. Salah satu contoh nyatanya adalah convertCelsiusToFahrenheit. Perhatikan kembali kode berikut.

---

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

---

Ketika memanggil function yang memiliki parameter, kita menentukan nilai dalam parentheses. Ini pernah dilakukan sebelumnya

---

const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);

---

Nilai yang diberikan dalam parentheses saat pemanggilan function, ia disebut sebagai argument. Argument ini bisa berasal dari nilai yang langsung dimasukkan atau nilai yang tersimpan dari variabel.

---

// Langsung memasukkan nilai
convertCelsiusToFahrenheit(100);

// Memasukkan nilai dengan variabel
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);

---

Dengan cara ini, kita dapat mencari angka suhu berskala fahrenheit dari celsius berdasarkan parameter function convertCelsiusToFahrenheit, berapa pun angka suhu celsius yang kita masukkan. Lebih fleksibel, bukan? Memang benar bahwa function adalah fitur yang sangat powerful dalam bahasa pemrograman.

## Default Parameter

Tahukah Anda bahwa argument dapat bernilai undefined jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil? Lalu, apa yang akan terjadi jika function body tetap dijalankan dalam keadaan seperti itu? Mari kita lihat bersama.

---

function convertCelsiusToFahrenheit(temperature) {
const temperatureInFahrenheit = (9 / 5) \* temperature + 32;
console.log('Hasil konversi:', temperatureInFahrenheit);
}

convertCelsiusToFahrenheit();

/_ Output:
Hasil konversi: NaN
_/

---

Wah, hasilnya adalah NaN (Not-a-Number). Anda masih ingat dengan nilai ini, kan? Nilai tersebut hadir karena salah satu operan dalam proses kalkulasi bukan bertipe number ataupun numerik, tetapi undefined. Nah, ini adalah masalah nyata yang tidak kita inginkan dan perlu diselesaikan.

Sebetulnya, hal ini bisa kita selesaikan menggunakan conditional statement. Kita bisa periksa bahwa jika argument bernilai undefined, jangan lakukan proses kalkulasi.

---

function convertCelsiusToFahrenheit(temperature) {
if (temperature !== undefined) { // <-- conditional statement (perintah kondisional)
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);

}
}

---

Namun, kita akan membahas conditional statement pada materi terpisah.

JavaScript memiliki solusi lain untuk mengatasinya jika tidak ada nilai apa pun yang disertakan ketika pemanggilan function. Ia adalah default parameter. Fitur ini memungkinkan parameter function memiliki nilai yang telah ditentukan atau default value jika ia tidak diberikan argument atau nilai apa pun.

Berikut caranya.

---

function convertCelsiusToFahrenheit(temperature = 50) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

Simpel saja. Kita tambahkan sintaksis assignment (=) dan diikuti dengan nilai default-nya. Dengan cara ini, parameter akan bernilai default value.

convertCelsiusToFahrenheit();

/_ Output:
Hasil konversi: 122
_/

---

Bagaimana jika kita ingin mengubah nilainya? Tenang, kita dapat memberikan nilai argument seperti biasanya. Masukkan saja nilai argument dalam parentheses saat function dijalankan. Nilai tersebut akan menggantikan default value.

Jika mau, Anda dapat bermain langsung pada interactive code berikut.

---

function convertCelsiusToFahrenheit(temperature = 50) {
const temperatureInFahrenheit = 9 / 5 \* temperature + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
}

// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122

// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

---

Itu adalah penerapan parameter pada function sebagai input data.
