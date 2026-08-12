// ============================================
// 02. IF STATEMENT
// ============================================

// Contoh 1: Kondisi bernilai true
let nilai = 80;

if (nilai >= 75) {
  console.log("Kamu lulus!");
}
// Output: Kamu lulus!


// Contoh 2: Kondisi bernilai false (kode di dalam if dilewati)
let nilaiKedua = 60;

if (nilaiKedua >= 75) {
  console.log("Kamu lulus!");
}
console.log("Program selesai");
// Output: Program selesai
// ("Kamu lulus!" tidak dicetak karena kondisinya false)


// Contoh 3: If untuk cek status login sederhana
let sudahLogin = true;

if (sudahLogin) {
  console.log("Selamat datang kembali!");
}


// Contoh 4: If untuk cek angka genap
let angka = 8;

if (angka % 2 === 0) {
  console.log(angka + " adalah angka genap");
}


// Contoh 5: Kesalahan umum - pakai "=" bukan "==="
let umur = 20;

// SALAH (jangan ditiru):
// if (umur = 18) { ... }  <- ini mengubah nilai umur, bukan membandingkan

// BENAR:
if (umur === 18) {
  console.log("Umur tepat 18 tahun");
} 
console.log("Umur saat ini:", umur); // umur tetap 20, tidak berubah


// Coba sendiri:
// Ubah nilai variabel "nilai", "angka", atau "umur" di atas,
// lalu jalankan ulang untuk melihat bagaimana hasilnya berubah.
