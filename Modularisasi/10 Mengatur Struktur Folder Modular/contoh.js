// ============================================================
// 10 - Mengatur Struktur Folder Modular
// ============================================================
// Materi ini lebih banyak konseptual (lihat Readme.md untuk
// diagram struktur folder). File ini mendemonstrasikan PRINSIP
// pemisahan tanggung jawab lewat simulasi sederhana tanpa
// benar-benar membuat banyak file/folder fisik.

// --- Simulasi struktur "models/" ---
function ModelProduk(nama, harga) {
  return { nama, harga };
}

// --- Simulasi struktur "services/" ---
function ProdukService() {
  const daftarProduk = [];

  function tambahProduk(nama, harga) {
    const produk = ModelProduk(nama, harga);
    daftarProduk.push(produk);
    return produk;
  }

  function totalNilaiInventori() {
    return daftarProduk.reduce((total, p) => total + p.harga, 0);
  }

  return { tambahProduk, totalNilaiInventori };
}

// --- Simulasi struktur "utils/" ---
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// --- Pemakaian, seolah-olah dari index.mjs yang menggabungkan semua ---
const service = ProdukService();
service.tambahProduk("Laptop", 8000000);
service.tambahProduk("Mouse", 150000);

console.log("Total nilai inventori:", formatRupiah(service.totalNilaiInventori()));
console.log("\nCatatan: lihat Readme.md untuk diagram struktur folder");
console.log("'group by type' vs 'group by feature' secara lengkap.");
