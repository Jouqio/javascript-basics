// ============================================
// CONTOH: prompt()
// prompt() juga fungsi bawaan BROWSER, bukan Node.js.
// Cara menjalankan: buka Console browser manapun (tekan F12),
// lalu copy-paste kode di bawah ini, atau ketik satu per satu.
// ============================================

// 1. Prompt sederhana
let nama = prompt("Siapa nama kamu?");
console.log("Nama kamu:", nama);

// 2. Prompt dengan nilai default (argumen kedua, opsional)
let kota = prompt("Kamu tinggal di kota mana?", "Bontang");
console.log("Kota:", kota);

// 3. Gotcha: hasil prompt() SELALU string, walau user mengetik angka
let umurString = prompt("Umur kamu berapa?");
console.log(umurString + 1);         // salah! nyambung jadi string, misal "201"
console.log(Number(umurString) + 1); // benar, baru dijumlah beneran

// 4. Menangani kasus user menekan Cancel (hasilnya null)
let jawaban = prompt("Setuju lanjut ke materi berikutnya?");
if (jawaban === null) {
  console.log("User membatalkan (klik Cancel)");
} else {
  console.log("User menjawab:", jawaban);
}

// 5. Kombinasi prompt() + alert() — dua arah, lalu satu arah
let namaUser = prompt("Masukkan nama kamu:");
if (namaUser) {
  alert("Halo, " + namaUser + "! Selamat belajar JavaScript.");
}
