// ============================================
// 09. QUIZ ARRAY - Kode Jawaban Bagian C (Praktik)
// ============================================

const karyawan = [
  { nama: "Andi", gaji: 5000000, departemen: "IT" },
  { nama: "Budi", gaji: 4000000, departemen: "HR" },
  { nama: "Citra", gaji: 6000000, departemen: "IT" },
  { nama: "Dewi", gaji: 4500000, departemen: "Finance" },
];

// 9a. Total gaji karyawan departemen IT
const totalGajiIT = karyawan
  .filter((k) => k.departemen === "IT")
  .reduce((total, k) => total + k.gaji, 0);
console.log("9a. Total gaji IT:", totalGajiIT);

// 9b. Nama karyawan yang gajinya di atas 4.500.000
const namaGajiTinggi = karyawan
  .filter((k) => k.gaji > 4500000)
  .map((k) => k.nama);
console.log("9b. Nama gaji > 4.500.000:", namaGajiTinggi);

// 9c. Naikkan gaji seluruh karyawan HR sebesar 10% (immutable)
const karyawanBaru = karyawan.map((k) =>
  k.departemen === "HR" ? { ...k, gaji: k.gaji * 1.1 } : k
);
console.log("9c. karyawan setelah kenaikan gaji HR:", karyawanBaru);
console.log("karyawan asli (tidak berubah):", karyawan);

// ============================================
// BONUS: Jawaban No 8 (Bagian B) - Rata-rata nilai
// ============================================
const nilai = [80, 90, 70, 100, 60];
const rataRata = nilai.reduce((acc, n) => acc + n, 0) / nilai.length;
console.log("\nNo 8. Rata-rata nilai:", rataRata);
