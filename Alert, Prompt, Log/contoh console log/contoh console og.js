// ============================================
// CONTOH: console.log()
// Jalankan dengan: node contoh-console-log.js
// (atau paste ke Console browser dengan tekan F12)
// ============================================

// 1. Menampilkan teks sederhana
console.log("Halo, dunia!");

// 2. Menampilkan beberapa nilai sekaligus (dipisah koma)
console.log("Nama:", "Budi", "Umur:", 20, "Aktif:", true);

// 3. Menampilkan hasil dari sebuah perhitungan
let a = 5;
let b = 3;
console.log("Hasil penjumlahan:", a + b);

// 4. Menampilkan isi variabel pakai template literal
let nama = "Syauqi";
console.log(`Halo, ${nama}! Selamat belajar JavaScript.`);

// 5. Variasi: console.error() dan console.warn()
console.error("Ini pesan error (biasanya tampil merah di Console)");
console.warn("Ini pesan peringatan (biasanya tampil kuning di Console)");

// 6. Bonus: console.table() — cocok buat data terstruktur
console.table([
  { nama: "Budi", nilai: 90 },
  { nama: "Ani", nilai: 85 },
]);
