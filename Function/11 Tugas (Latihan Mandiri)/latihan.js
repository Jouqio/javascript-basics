/*
  ===============================================
  LATIHAN MANDIRI - FUNCTION JAVASCRIPT
  ===============================================
  Isi setiap function di bawah ini sesuai instruksi pada Readme.md.
  Jangan lihat kunci-jawaban.js dulu sebelum mencoba sendiri!
  Jalankan file ini dengan: node latihan.js
*/

// ===== Soal 1 — Function Declaration =====
function hitungKeliling(panjang, lebar) {
  // TODO: kembalikan keliling persegi panjang
  // rumus keliling = 2 * (panjang + lebar)
}

console.log("Soal 1:", hitungKeliling(5, 3)); // seharusnya: 16


// ===== Soal 2 — Function Expression =====
const hitungDiskon = function (harga, persenDiskon) {
  // TODO: kembalikan harga setelah dipotong diskon
  // contoh: hitungDiskon(100000, 10) -> 90000
};

console.log("Soal 2:", hitungDiskon(100000, 10)); // seharusnya: 90000


// ===== Soal 3 — Arrow Function =====
// TODO: ubah menjadi arrow function dengan implicit return
const kuadrat = function (n) {
  return n * n;
};

console.log("Soal 3:", kuadrat(6)); // seharusnya: 36


// ===== Soal 4 — Higher Order Function =====
const siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ani", nilai: 60 },
  { nama: "Rina", nilai: 90 },
  { nama: "Dedi", nilai: 55 }
];

// TODO: gunakan .filter() untuk mendapatkan siswa dengan nilai >= 70
const siswaLulus = [];

// TODO: gunakan .map() untuk mengambil nama-nama siswa yang lulus
const namaSiswaLulus = [];

console.log("Soal 4:", namaSiswaLulus); // seharusnya: ["Budi", "Rina"]


// ===== Soal 5 — IIFE =====
// TODO: buat IIFE dengan variabel privat "counter" dan return object { tambah, reset }
const counterApp = null; // ganti dengan IIFE

// console.log("Soal 5:", counterApp.tambah()); // seharusnya: 1
// console.log("Soal 5:", counterApp.tambah()); // seharusnya: 2
// console.log("Soal 5:", counterApp.reset());  // seharusnya: 0


// ===== Soal 6 — Recursive Function =====
function hitungPangkat(basis, pangkat) {
  // TODO: hitung basis^pangkat secara REKURSIF (tanpa ** atau Math.pow)
  // ingat: base case-nya adalah saat pangkat === 0 (hasilnya 1)
}

console.log("Soal 6:", hitungPangkat(2, 4)); // seharusnya: 16


// ===== Soal 7 — Generator Function =====
function* generatorGenap() {
  // TODO: yield bilangan genap secara berurutan (2, 4, 6, 8, ...) tanpa henti
}

// TODO: ambil 5 nilai pertama dari generatorGenap() dan simpan ke array "lima_genap_pertama"
const lima_genap_pertama = [];

console.log("Soal 7:", lima_genap_pertama); // seharusnya: [2, 4, 6, 8, 10]


// ===== Soal 8 — Gabungan (Tantangan!) =====
function buatValidator(minPanjang) {
  // TODO: kembalikan sebuah function baru yang menerima "str"
  // dan mengembalikan true/false berdasarkan panjang str vs minPanjang
}

const validatorPassword = buatValidator(8);
console.log("Soal 8a:", validatorPassword ? validatorPassword("12345") : "belum selesai");       // seharusnya: false
console.log("Soal 8b:", validatorPassword ? validatorPassword("password123") : "belum selesai"); // seharusnya: true
