// ============================================
// 06. KOMBINASI FILTER, MAP, REDUCE - Contoh Kode
// ============================================

// --- Studi Kasus: Data Produk Toko ---
const produk = [
  { nama: "Laptop", kategori: "Elektronik", harga: 8000000, stok: 3 },
  { nama: "Mouse", kategori: "Elektronik", harga: 50000, stok: 0 },
  { nama: "Meja", kategori: "Furnitur", harga: 500000, stok: 5 },
  { nama: "Keyboard", kategori: "Elektronik", harga: 150000, stok: 10 },
];

// Total nilai stok untuk kategori "Elektronik" yang masih tersedia
const totalNilaiStok = produk
  .filter((p) => p.kategori === "Elektronik" && p.stok > 0) // saring
  .map((p) => p.harga * p.stok) // ubah jadi nilai stok
  .reduce((total, nilai) => total + nilai, 0); // jumlahkan

console.log("produk asli (tidak berubah):", produk);
console.log("Total nilai stok Elektronik:", totalNilaiStok); // 25.500.000

// --- Studi Kasus: Diskon dan Rata-rata ---
const transaksi = [
  { produk: "Baju", harga: 100000 },
  { produk: "Celana", harga: 150000 },
  { produk: "Topi", harga: 30000 },
];

const transaksiDiskon = transaksi.map((t) => ({ ...t, harga: t.harga * 0.9 }));
const totalSetelahDiskon = transaksiDiskon.reduce((acc, t) => acc + t.harga, 0);
const rataRataSetelahDiskon = totalSetelahDiskon / transaksiDiskon.length;

console.log("\ntransaksiDiskon:", transaksiDiskon);
console.log("Rata-rata setelah diskon:", rataRataSetelahDiskon);

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Ambil mahasiswa dengan nilai >= 75, ubah jadi { nama, predikat: "Lulus" },
//    lalu hitung jumlah yang lulus dengan reduce()
const mahasiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 70 },
];

const mahasiswaLulus = mahasiswa
  .filter((m) => m.nilai >= 75)
  .map((m) => ({ nama: m.nama, predikat: "Lulus" }));

const jumlahLulus = mahasiswaLulus.reduce((acc) => acc + 1, 0);

console.log("\nJawaban No 1 - Mahasiswa lulus:", mahasiswaLulus);
console.log("Jawaban No 1 - Jumlah lulus:", jumlahLulus);

// 2. Hitung total pendapatan dari pesanan berstatus "selesai"
const pesanan = [
  { status: "selesai", total: 200000 },
  { status: "batal", total: 150000 },
  { status: "selesai", total: 100000 },
];

const totalPendapatan = pesanan
  .filter((p) => p.status === "selesai")
  .reduce((acc, p) => acc + p.total, 0);

console.log("\nJawaban No 2 - Total pendapatan:", totalPendapatan);

// 3. Refactor for-loop biasa menjadi filter().map().reduce()

// Versi for-loop biasa:
function totalGajiITLoop(karyawan) {
  let total = 0;
  for (let i = 0; i < karyawan.length; i++) {
    if (karyawan[i].departemen === "IT") {
      total += karyawan[i].gaji;
    }
  }
  return total;
}

// Versi filter().reduce():
function totalGajiITFP(karyawan) {
  return karyawan
    .filter((k) => k.departemen === "IT")
    .reduce((acc, k) => acc + k.gaji, 0);
}

const karyawan = [
  { nama: "Andi", departemen: "IT", gaji: 5000000 },
  { nama: "Budi", departemen: "HR", gaji: 4000000 },
  { nama: "Citra", departemen: "IT", gaji: 6000000 },
];

console.log("\nJawaban No 3 - versi loop:", totalGajiITLoop(karyawan));
console.log("Jawaban No 3 - versi FP  :", totalGajiITFP(karyawan));
