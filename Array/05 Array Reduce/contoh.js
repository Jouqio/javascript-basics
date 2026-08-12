// ============================================
// 05. ARRAY REDUCE - Contoh Kode
// ============================================

// --- Contoh Dasar ---
const angka = [1, 2, 3, 4];
const total = angka.reduce((acc, n) => acc + n, 0);
console.log("angka asli:", angka); // tidak berubah
console.log("total:", total); // 10

// --- Menjumlahkan Total Harga ---
const keranjang = [
  { nama: "Buku", harga: 20000 },
  { nama: "Pensil", harga: 5000 },
  { nama: "Tas", harga: 75000 },
];
const totalHarga = keranjang.reduce((acc, item) => acc + item.harga, 0);
console.log("\nTotal harga keranjang:", totalHarga); // 100000

// --- Mengelompokkan Data (Group By) ---
const siswa = [
  { nama: "Andi", kelas: "A" },
  { nama: "Budi", kelas: "B" },
  { nama: "Citra", kelas: "A" },
];

const kelompok = siswa.reduce((acc, s) => {
  const key = s.kelas;
  acc[key] = acc[key] ? [...acc[key], s.nama] : [s.nama];
  return acc;
}, {});
console.log("\nKelompok siswa per kelas:", kelompok);

// --- Meratakan Array Bersarang (Flatten) ---
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
console.log("\nArray hasil flatten:", flat); // [1, 2, 3, 4, 5]

// --- Bonus: Membuat map() & filter() Sendiri dengan reduce() ---
const mapManual = (arr, fn) => arr.reduce((acc, item) => [...acc, fn(item)], []);
console.log("\nmapManual:", mapManual([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

const filterManual = (arr, fn) =>
  arr.reduce((acc, item) => (fn(item) ? [...acc, item] : acc), []);
console.log("filterManual:", filterManual([1, 2, 3, 4], (n) => n % 2 === 0)); // [2, 4]

// --- Kesalahan Umum: Lupa Nilai Awal ---
try {
  const kosong = [];
  kosong.reduce((acc, n) => acc + n); // Error: no initial value
} catch (err) {
  console.log("\nError tanpa nilai awal:", err.message);
}
console.log("Dengan nilai awal (aman):", [].reduce((acc, n) => acc + n, 0)); // 0

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Cari nilai maksimum tanpa Math.max
const dataAngka = [4, 9, 2, 15, 7];
const maksimum = dataAngka.reduce((max, n) => (n > max ? n : max), dataAngka[0]);
console.log("\nJawaban No 1 - Maksimum:", maksimum);

// 2. Gabungkan array kata menjadi satu kalimat
const kata = ["Belajar", "Array", "itu", "menyenangkan"];
const kalimat = kata.reduce((acc, k) => (acc === "" ? k : `${acc} ${k}`), "");
console.log("Jawaban No 2 - Kalimat:", kalimat);

// 3. Hitung saldo akhir dari transaksi masuk/keluar
const transaksi = [
  { jenis: "masuk", jumlah: 100000 },
  { jenis: "keluar", jumlah: 30000 },
  { jenis: "masuk", jumlah: 50000 },
];
const saldoAkhir = transaksi.reduce((saldo, t) => {
  return t.jenis === "masuk" ? saldo + t.jumlah : saldo - t.jumlah;
}, 0);
console.log("Jawaban No 3 - Saldo akhir:", saldoAkhir);
