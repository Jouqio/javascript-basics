// ============================================
// 13. KUNCI JAWABAN LATIHAN CODING
// Cocokkan hasil pengerjaanmu di latihan.js dengan file ini
// ============================================

// ---------- JAWABAN SOAL 1: Cek Bilangan Positif/Negatif/Nol ----------
let angka1 = -5;

if (angka1 > 0) {
  console.log("Positif");
} else if (angka1 < 0) {
  console.log("Negatif");
} else {
  console.log("Nol");
}
// Output: Negatif


// ---------- JAWABAN SOAL 2: Kategori Umur ----------
let umur2 = 15;

if (umur2 < 13) {
  console.log("Anak-anak");
} else if (umur2 <= 17) {
  console.log("Remaja");
} else if (umur2 <= 59) {
  console.log("Dewasa");
} else {
  console.log("Lansia");
}
// Output: Remaja


// ---------- JAWABAN SOAL 3: Cek Tahun Kabisat ----------
let tahun3 = 2024;

if (tahun3 % 4 === 0 && (tahun3 % 100 !== 0 || tahun3 % 400 === 0)) {
  console.log(tahun3 + " adalah tahun kabisat");
} else {
  console.log(tahun3 + " bukan tahun kabisat");
}
// Output: 2024 adalah tahun kabisat

// Uji tambahan:
// 1900: habis dibagi 4, TAPI habis dibagi 100 dan TIDAK habis dibagi 400 -> bukan kabisat
// 2000: habis dibagi 4, habis dibagi 100, TAPI habis dibagi 400 -> kabisat


// ---------- JAWABAN SOAL 4: Konversi Nilai ke Grade (pakai switch) ----------
let nilai4 = 85;
let kategori = Math.floor(nilai4 / 10); // 85 -> 8

switch (kategori) {
  case 10:
  case 9:
    console.log("Grade: A");
    break;
  case 8:
    console.log("Grade: B");
    break;
  case 7:
    console.log("Grade: C");
    break;
  case 6:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: E");
}
// Output: Grade: B


// ---------- JAWABAN SOAL 5: Validasi Form Sederhana ----------
let nama5 = "Ayu";
let email5 = "ayu@email.com";
let umur5 = 20;

if (!nama5) {
  console.log("Nama tidak boleh kosong");
} else if (!email5.includes("@")) {
  console.log("Email tidak valid");
} else if (typeof umur5 !== "number" || umur5 < 17) {
  console.log("Umur tidak memenuhi syarat (minimal 17 tahun)");
} else {
  console.log("Form valid");
}
// Output: Form valid


// ---------- JAWABAN SOAL 6 (BONUS): FizzBuzz ----------
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Output (sebagian):
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...
