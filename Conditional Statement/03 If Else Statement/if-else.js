// ============================================
// 03. IF ELSE STATEMENT
// ============================================

// Contoh 1: Cek syarat umur membuat SIM
let umur = 16;

if (umur >= 18) {
  console.log("Kamu boleh membuat SIM");
} else {
  console.log("Kamu belum boleh membuat SIM");
}
// Output: Kamu belum boleh membuat SIM


// Contoh 2: Analogi lampu lalu lintas
let lampu = "merah";

if (lampu === "hijau") {
  console.log("Jalan");
} else {
  console.log("Berhenti");
}
// Output: Berhenti


// Contoh 3: Cek kelulusan
let skor = 90;

if (skor >= 60) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}
// Output: Lulus


// Contoh 4: Cek angka genap atau ganjil
let angka = 7;

if (angka % 2 === 0) {
  console.log(angka + " adalah angka genap");
} else {
  console.log(angka + " adalah angka ganjil");
}
// Output: 7 adalah angka ganjil


// Contoh 5: Cek stok barang sebelum checkout
let stok = 0;

if (stok > 0) {
  console.log("Barang tersedia, silakan checkout");
} else {
  console.log("Maaf, stok habis");
}
// Output: Maaf, stok habis


// Coba sendiri:
// Ubah nilai "umur", "lampu", "skor", "angka", atau "stok"
// lalu jalankan ulang untuk melihat hasil yang berbeda.
