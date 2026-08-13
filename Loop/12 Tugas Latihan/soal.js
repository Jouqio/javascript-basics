// ====================================================================
// SOAL 1 — For Loop (Level: Mudah)
// Buat fungsi cetakGanjil(batas) yang mencetak bilangan ganjil 1..batas
// ====================================================================

// TODO: Soal 1 - Tulis kode kamu di sini
function cetakGanjil(batas) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("Soal 1:");
// cetakGanjil(10); // harus mencetak: 1, 3, 5, 7, 9


// ====================================================================
// SOAL 2 — While Loop (Level: Mudah)
// Buat fungsi hitungDigit(angka) menghitung jumlah digit dengan while
// Contoh: hitungDigit(12345) -> 5
// ====================================================================

// TODO: Soal 2 - Tulis kode kamu di sini
function hitungDigit(angka) {
  // ketik jawabanmu di sini
  // Petunjuk: gunakan Math.floor(angka / 10) untuk membuang digit terakhir
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("\nSoal 2 - hitungDigit(12345):", hitungDigit(12345)); // 5
// console.log("Soal 2 - hitungDigit(7):", hitungDigit(7)); // 1


// ====================================================================
// SOAL 3 — Do While Loop (Level: Mudah-Sedang)
// Buat do...while yang cetak 1-5, TETAP jalan minimal 1 kali
// walau variabel awal sengaja dibuat salah (misal mulai dari 10)
// ====================================================================

// TODO: Soal 3 - Tulis kode kamu di sini


// ====================================================================
// SOAL 4 — Break dan Continue (Level: Sedang)
// [12, 7, -3, 25, 0, 18, -9, 30]
// - continue untuk lewati angka negatif
// - break begitu ketemu angka 0
// - cetak angka yang diproses
// ====================================================================

let daftarAngka4 = [12, 7, -3, 25, 0, 18, -9, 30];

// TODO: Soal 4 - Tulis kode kamu di sini


// ====================================================================
// SOAL 5 — Nested Loop (Level: Sedang)
// Buat pola:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ====================================================================

// TODO: Soal 5 - Tulis kode kamu di sini


// ====================================================================
// SOAL 6 — For...of vs For...in (Level: Sedang)
// nilai = [88, 92, 75, 60, 95]
// Gunakan for...of untuk hitung rata-rata
// Jelaskan di komentar kenapa for...in tidak tepat untuk kasus ini
// ====================================================================

let nilai6 = [88, 92, 75, 60, 95];

// TODO: Soal 6 - Tulis kode kamu di sini

// TODO: Tulis penjelasan kamu di sini kenapa for...in tidak tepat:
// Jawaban: _______________


// ====================================================================
// SOAL 7 — Looping Array dengan Method (Level: Menantang)
// 1. Nama produk yang stoknya habis (stok = 0)
// 2. Total nilai inventori (harga x stok, hanya produk stok > 0)
// ====================================================================

let produk7 = [
  { nama: "Laptop", harga: 8000000, stok: 3 },
  { nama: "Mouse", harga: 100000, stok: 0 },
  { nama: "Keyboard", harga: 250000, stok: 5 },
];

// TODO: Soal 7 - Tulis kode kamu di sini
// let produkHabis = ...
// let totalInventori = ...

// Contoh cara mencoba (uncomment setelah mengisi jawaban):
// console.log("\nSoal 7 - Produk habis:", produkHabis);
// console.log("Soal 7 - Total inventori:", totalInventori);


// ====================================================================
// SOAL 8 — Menghindari Infinite Loop (Level: Menantang)
// Kode berikut punya bug infinite loop, perbaiki!
// ====================================================================

// Kode BERMASALAH (jangan dijalankan dulu sebelum diperbaiki):
// let saldo = 100;
// while (saldo > 0) {
//   console.log("Saldo:", saldo);
//   saldo += 10; // BUG: seharusnya mengurangi, bukan menambah!
// }

// TODO: Soal 8 - Tulis versi perbaikan kamu di sini


// ====================================================================
// SOAL 9 — Studi Kasus Gabungan (Level: Menantang)
// analisisNilaiSiswa(daftarNilai) -> { tertinggi, terendah, rataRata, jumlahLulus }
// ====================================================================

// TODO: Soal 9 - Tulis kode kamu di sini
function analisisNilaiSiswa(daftarNilai) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// console.log("\nSoal 9:", analisisNilaiSiswa([80, 65, 90, 55, 100, 72]));
// Harapan hasil: { tertinggi: 100, terendah: 55, rataRata: 77, jumlahLulus: 4 }

// Jalankan file ini dengan: node soal.js
