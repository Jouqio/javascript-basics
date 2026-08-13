// ============================================================
// 12 - Praktik Terbaik Modularisasi
// ============================================================
// File ini mendemonstrasikan prinsip-prinsip lewat simulasi
// (tidak memakai import/export sungguhan, fokus pada konsepnya).

// --- Prinsip 1: fungsi murni, mudah diuji ---
function hitungDiskon(harga, persenDiskon) {
  return harga - (harga * persenDiskon) / 100;
}
console.log("Harga setelah diskon 20% dari 100000:", hitungDiskon(100000, 20));

// --- Prinsip 2: efek samping ditunda, bukan otomatis ---
let koneksiCache = null;
function simulasiKoneksiDatabase() {
  console.log("(Simulasi) Menghubungkan ke database...");
  return { query: (sql) => `Hasil dari: ${sql}` };
}
function dapatkanKoneksi() {
  if (!koneksiCache) {
    koneksiCache = simulasiKoneksiDatabase(); // baru jalan saat benar-benar dipanggil
  }
  return koneksiCache;
}
console.log("\nSebelum ambilDataAman() dipanggil, belum ada koneksi dibuat.");
function ambilDataAman() {
  return dapatkanKoneksi().query("SELECT * FROM users");
}
console.log(ambilDataAman());

// --- Prinsip 3: checklist self-review ---
const checklist = [
  "Setiap module punya satu tanggung jawab yang jelas",
  "Tidak ada efek samping tersembunyi saat file di-import",
  "Fungsi murni dipisahkan dari fungsi yang bergantung sumber luar",
  "Nama file dan fungsi jelas menggambarkan isinya",
  "Antarmuka publik seminimal mungkin",
];
console.log("\nChecklist praktik terbaik modularisasi:");
checklist.forEach((item, i) => console.log(`${i + 1}. ${item}`));
