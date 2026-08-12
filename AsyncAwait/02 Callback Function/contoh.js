// ============================================================
// 02 - Callback Function
// ============================================================

// --- Contoh 1: fungsi dasar sebagai callback ---
function sapa(nama) {
  console.log("Halo, " + nama);
}
function proses(callback) {
  callback("Syauqi");
}
proses(sapa); // Halo, Syauqi

// --- Contoh 2: callback synchronous vs asynchronous ---
[1, 2, 3].forEach((angka) => {
  console.log("Sync:", angka * 2);
});

setTimeout(() => {
  console.log("Async: dijalankan setelah 1 detik");
}, 1000);

// --- Contoh 3: fungsi kustom yang menerima callback ---
function ambilData(id, onSelesai) {
  setTimeout(() => {
    const data = { id: id, nama: "Produk " + id };
    onSelesai(data);
  }, 1000);
}
ambilData(7, (data) => {
  console.log("Data diterima:", data);
});

// --- Latihan: hitungMundur ---
function hitungMundur(detik, selesai) {
  setTimeout(() => {
    selesai();
  }, detik * 1000);
}
hitungMundur(3, () => {
  console.log("Waktu habis!");
});
