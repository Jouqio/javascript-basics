/**
 * TODO:
 * 1. Buatlah variabel bernama `fullName` bertipe string yang menyimpan nama lengkap Anda,
 *    gunakan salah satu dari tiga jenis tanda kutip (single quote, double quote, atau backticks).
 *
 * 2. Buatlah variabel bernama `greeting` menggunakan template literals (backticks) yang menyisipkan
 *    nilai `fullName` ke dalam kalimat dengan format:
 *    "Halo, nama saya (fullName)!"
 *
 *    Contoh: Jika `fullName` bernilai 'Fulan', maka `greeting` harus bernilai:
 *    "Halo, nama saya Fulan!"
 *
 * 3. Buatlah variabel bernama `birthYear` bertipe number yang menyimpan tahun lahir Anda.
 *
 * 4. Buatlah variabel bernama `currentYear` bertipe number yang menyimpan tahun sekarang (2026).
 *
 * 5. Buatlah variabel bernama `age` yang menyimpan hasil pengurangan `currentYear` dengan `birthYear`.
 *
 * 6. Buatlah variabel bernama `invalidNumber` yang menyimpan hasil konversi string 'Dicoding'
 *    menjadi tipe number menggunakan fungsi `Number()`. Perhatikan nilai apa yang dihasilkan.
 *
 * 7. Buatlah variabel bernama `isAdult` bertipe boolean yang bernilai `true` jika `age` lebih besar
 *    atau sama dengan 18, dan `false` jika sebaliknya. Gunakan operator perbandingan, jangan tulis
 *    manual true/false.
 *
 * 8. Buatlah variabel bernama `isEligibleToVote` yang menyimpan hasil dari operator logika AND (`&&`)
 *    antara `isAdult` dan sebuah variabel boolean `hasKTP` yang bernilai `true`.
 *
 * 9. Tampilkan seluruh variabel di atas (`fullName`, `greeting`, `birthYear`, `currentYear`, `age`,
 *    `invalidNumber`, `isAdult`, `isEligibleToVote`) menggunakan `console.log`.
 */

// 1. Variabel string nama lengkap
const fullName = "Fulan";

// 2. Template literals menyisipkan fullName
const greeting = `Halo, nama saya ${fullName}!`;

// 3. Tahun lahir
const birthYear = 2000;

// 4. Tahun sekarang
const currentYear = 2026;

// 5. Umur (hasil pengurangan)
const age = currentYear - birthYear;

// 6. Konversi string non-angka ke number -> NaN
const invalidNumber = Number("Dicoding");

// 7. Boolean dari operator perbandingan
const isAdult = age >= 18;

// 8. Operator logika AND
const hasKTP = true;
const isEligibleToVote = isAdult && hasKTP;

// 9. Menampilkan seluruh variabel
console.log(fullName); // Fulan
console.log(greeting); // Halo, nama saya Fulan!
console.log(birthYear); // 2000
console.log(currentYear); // 2026
console.log(age); // 26
console.log(invalidNumber); // NaN
console.log(isAdult); // true
console.log(isEligibleToVote); // true
