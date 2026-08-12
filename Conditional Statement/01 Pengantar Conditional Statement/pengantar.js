// ============================================
// 01. PENGANTAR CONDITIONAL STATEMENT
// ============================================

// Contoh 1: Analogi sehari-hari
// "Jika hujan, maka bawa payung"
let hujan = true;

if (hujan) {
  console.log("Bawa payung");
} else {
  console.log("Tidak perlu bawa payung");
}
// Output: Bawa payung


// Contoh 2: Mengecek kondisi dari sebuah nilai
let umur = 20;

if (umur >= 18) {
  console.log("Kamu sudah dewasa");
} else {
  console.log("Kamu belum dewasa");
}
// Output: Kamu sudah dewasa


// Contoh 3: Kondisi yang menghasilkan boolean
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 === 10); // true

// Nilai true/false inilah yang dipakai oleh conditional statement
// untuk memutuskan kode mana yang dijalankan.


// Contoh 4: Tanpa conditional statement (masalah)
// Program berikut akan SELALU mencetak dua-duanya,
// padahal seharusnya hanya salah satu yang relevan.
let nilaiUjian = 40;
console.log("Selamat, kamu lulus!");     // ini tetap tercetak
console.log("Maaf, kamu belum lulus.");  // walau nilainya jelek

// Solusinya adalah dengan conditional statement (akan kita pelajari
// lebih lanjut di file-file berikutnya)
