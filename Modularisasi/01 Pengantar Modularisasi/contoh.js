// ============================================================
// 01 - Pengantar Modularisasi
// ============================================================
// File ini TIDAK memakai import/export - murni mendemonstrasikan
// masalah yang diselesaikan oleh modularisasi.

// --- Simulasi masalah: variabel & fungsi tertimpa dalam satu scope ---
function simulasikanMasalahTanpaModul() {
  var nama = "Toko Buku";
  function hitungTotal(harga, qty) {
    return harga * qty;
  }
  console.log("Sebelum tertimpa:", nama, "- total:", hitungTotal(10000, 3));

  // Bagian kode lain, tanpa sengaja pakai nama yang sama
  var nama2 = "Sistem Login"; // di file asli, ini akan menimpa `nama` jika ditulis ulang
  function hitungTotal2(a, b) {
    return a - b;
  }

  console.log("Contoh berbeda logika, nama variabel sama secara konsep:", nama2, hitungTotal2(10, 3));
}
simulasikanMasalahTanpaModul();

// --- Ilustrasi solusi: setiap "modul" punya scope sendiri lewat function ---
function moduleTokoBuku() {
  const nama = "Toko Buku";
  function hitungTotal(harga, qty) {
    return harga * qty;
  }
  return { nama, hitungTotal };
}

function moduleSistemLogin() {
  const nama = "Sistem Login";
  function hitungTotal(a, b) {
    return a - b;
  }
  return { nama, hitungTotal };
}

const tokoBuku = moduleTokoBuku();
const sistemLogin = moduleSistemLogin();

console.log("\nDengan pemisahan scope:");
console.log(tokoBuku.nama, "- total:", tokoBuku.hitungTotal(10000, 3));
console.log(sistemLogin.nama, "- hasil:", sistemLogin.hitungTotal(10, 3));
console.log("Kedua 'nama' dan 'hitungTotal' TIDAK saling bentrok lagi.");
