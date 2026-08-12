// ============================================
// 04. ARRAY MAP - Contoh Kode
// ============================================

// --- Contoh Dasar ---
const angka = [1, 2, 3];
const dikali2 = angka.map((n) => n * 2);
console.log("angka asli:", angka); // tidak berubah
console.log("dikali2:", dikali2); // [2, 4, 6]

// --- map() vs forEach() ---
console.log("\n=== map() vs forEach() ===");
const hasilMap = [1, 2, 3].map((n) => n * 2);
console.log("hasilMap (array baru):", hasilMap); // [2, 4, 6]

const hasilForEach = [1, 2, 3].forEach((n) => n * 2);
console.log("hasilForEach (undefined):", hasilForEach); // undefined

// --- Transformasi Struktur Data ---
const users = [
  { id: 1, firstName: "Andi", lastName: "Saputra" },
  { id: 2, firstName: "Budi", lastName: "Santoso" },
];

const namaLengkap = users.map((u) => `${u.firstName} ${u.lastName}`);
console.log("\nNama lengkap:", namaLengkap);

// --- Immutable Update pada Object di Dalam Array ---
const produk = [
  { id: 1, nama: "Kaos", harga: 100000 },
  { id: 2, nama: "Celana", harga: 200000 },
];

const produkBaru = produk.map((p) =>
  p.id === 2 ? { ...p, harga: p.harga * 1.1 } : p
);
console.log("\nproduk asli:", produk); // tidak berubah
console.log("produkBaru:", produkBaru); // harga id 2 naik 10%

// --- Mengekstrak Satu Properti Saja ---
const mahasiswa = [
  { nama: "Andi", nim: "001" },
  { nama: "Budi", nim: "002" },
];
const daftarNim = mahasiswa.map((m) => m.nim);
console.log("\ndaftarNim:", daftarNim);

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Ubah celsius ke fahrenheit: (C * 9/5) + 32
const celsius = [0, 20, 37, 100];
const fahrenheit = celsius.map((c) => (c * 9) / 5 + 32);
console.log("\nJawaban No 1:", fahrenheit);

// 2. Buat array baru berisi harga setelah diskon 15%
const daftarProduk = [
  { nama: "Buku", harga: 50000 },
  { nama: "Pulpen", harga: 5000 },
];
const hargaDiskon = daftarProduk.map((p) => ({
  ...p,
  harga: p.harga * 0.85,
}));
console.log("Jawaban No 2:", hargaDiskon);

// 3. Buat array object { nama, panjang } dari array nama
const namaArr = ["Andi", "Budianto", "Ci"];
const infoNama = namaArr.map((nama) => ({ nama, panjang: nama.length }));
console.log("Jawaban No 3:", infoNama);
