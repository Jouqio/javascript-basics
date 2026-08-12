// ============================================================
// 09 - Promise.all dan Promise.allSettled
// ============================================================

// --- Contoh 1: Promise.all fail-fast ---
Promise.all([
  Promise.resolve("A"),
  Promise.reject("Gagal di B"),
  Promise.resolve("C"),
])
  .then((hasil) => console.log("all() berhasil:", hasil))
  .catch((error) => console.log("all() gagal:", error));

// --- Contoh 2: Promise.allSettled tetap menunggu semua ---
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("Gagal di B"),
  Promise.resolve("C"),
]).then((hasil) => {
  hasil.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log("Berhasil:", item.value);
    } else {
      console.log("Gagal:", item.reason);
    }
  });
});

// --- Contoh 3: menjalankan operasi async paralel ---
function ambilData(nama, ms) {
  return new Promise((resolve) => setTimeout(() => resolve(nama + " siap"), ms));
}
Promise.all([
  ambilData("Produk", 300),
  ambilData("Kategori", 500),
  ambilData("Promo", 200),
]).then((hasil) => console.log(hasil));
