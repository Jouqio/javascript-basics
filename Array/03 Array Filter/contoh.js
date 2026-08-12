// ============================================
// 03. ARRAY FILTER - Contoh Kode
// ============================================

// --- Contoh Dasar ---
const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter((n) => n % 2 === 0);
console.log("angka asli:", angka); // tidak berubah
console.log("genap:", genap); // [2, 4, 6]

// --- Filter Angka (nilai kelulusan) ---
const nilai = [55, 80, 90, 40, 70];
const lulus = nilai.filter((n) => n >= 60);
console.log("\nnilai lulus (>= 60):", lulus); // [80, 90, 70]

// --- Filter Object Berdasarkan Properti ---
const mahasiswa = [
  { nama: "Andi", jurusan: "Informatika" },
  { nama: "Budi", jurusan: "Sipil" },
  { nama: "Citra", jurusan: "Informatika" },
];

const infoStudent = mahasiswa.filter((m) => m.jurusan === "Informatika");
console.log("\nMahasiswa Informatika:", infoStudent);

// --- Filter dengan Banyak Kondisi ---
const produk = [
  { nama: "Laptop", harga: 8000000, stok: 5 },
  { nama: "Mouse", harga: 50000, stok: 0 },
  { nama: "Keyboard", harga: 150000, stok: 10 },
];

const tersediaDanMurah = produk.filter((p) => p.stok > 0 && p.harga < 1000000);
console.log("\nProduk tersedia & murah:", tersediaDanMurah);

// --- Menghapus Elemen Secara Immutable ---
const todos = ["Belajar", "Olahraga", "Tidur"];
const tanpaOlahraga = todos.filter((t) => t !== "Olahraga");
console.log("\ntodos asli:", todos); // tetap utuh
console.log("tanpaOlahraga:", tanpaOlahraga);

// --- Kesalahan Umum: Lupa Return ---
const salah = angka.filter((n) => {
  n % 2 === 0; // tidak ada return -> selalu undefined -> array kosong
});
console.log("\nContoh salah (lupa return):", salah); // []

const benar = angka.filter((n) => {
  return n % 2 === 0;
});
console.log("Contoh benar (ada return):", benar); // [2, 4, 6]

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Ambil angka yang lebih besar dari 10
const dataAngka = [12, 5, 8, 130, 44];
const lebihDari10 = dataAngka.filter((n) => n > 10);
console.log("\nJawaban No 1:", lebihDari10);

// 2. Filter user yang aktif === true
const user = [
  { nama: "Andi", aktif: true },
  { nama: "Budi", aktif: false },
  { nama: "Citra", aktif: true },
];
const userAktif = user.filter((u) => u.aktif === true);
console.log("Jawaban No 2:", userAktif);

// 3. Fungsi hapusItem menggunakan filter()
function hapusItem(array, itemYangDihapus) {
  return array.filter((item) => item !== itemYangDihapus);
}
const daftarBelanja = ["Susu", "Roti", "Telur"];
console.log("Jawaban No 3:", hapusItem(daftarBelanja, "Roti"));
console.log("Array asli tetap:", daftarBelanja);
