// ============================================
// 04. ELSE IF STATEMENT
// ============================================

// Contoh 1: Konversi nilai angka ke huruf
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai: A");
} else if (nilai >= 80) {
  console.log("Nilai: B");
} else if (nilai >= 70) {
  console.log("Nilai: C");
} else if (nilai >= 60) {
  console.log("Nilai: D");
} else {
  console.log("Nilai: E");
}
// Output: Nilai: C


// Contoh 2: Kategori umur
let umur = 25;

if (umur < 13) {
  console.log("Kategori: Anak-anak");
} else if (umur < 18) {
  console.log("Kategori: Remaja");
} else if (umur < 60) {
  console.log("Kategori: Dewasa");
} else {
  console.log("Kategori: Lansia");
}
// Output: Kategori: Dewasa


// Contoh 3: Kesalahan umum - urutan kondisi terbalik
let nilaiSalah = 95;

// SALAH: kondisi longgar diletakkan duluan
if (nilaiSalah >= 60) {
  console.log("(SALAH) Nilai: D");
} else if (nilaiSalah >= 90) {
  console.log("(SALAH) Nilai: A - tidak akan pernah tercapai!");
}
// Output: (SALAH) Nilai: D  <- padahal seharusnya A

// BENAR: kondisi paling ketat diletakkan duluan
if (nilaiSalah >= 90) {
  console.log("(BENAR) Nilai: A");
} else if (nilaiSalah >= 60) {
  console.log("(BENAR) Nilai: D");
}
// Output: (BENAR) Nilai: A


// Contoh 4: Menentukan level BMI (Body Mass Index) sederhana
let bmi = 23.5;

if (bmi < 18.5) {
  console.log("Berat badan kurang");
} else if (bmi < 25) {
  console.log("Berat badan normal");
} else if (bmi < 30) {
  console.log("Kelebihan berat badan");
} else {
  console.log("Obesitas");
}
// Output: Berat badan normal


// Coba sendiri:
// Ubah nilai "nilai", "umur", atau "bmi" untuk melihat hasil yang berbeda.
