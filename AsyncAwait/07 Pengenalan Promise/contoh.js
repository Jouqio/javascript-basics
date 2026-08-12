// ============================================================
// 07 - Pengenalan Promise
// ============================================================

// --- Contoh 1: membuat dan mengonsumsi Promise ---
const cekUmur = new Promise((resolve, reject) => {
  const umur = 20;
  setTimeout(() => {
    if (umur >= 18) {
      resolve("Diizinkan masuk");
    } else {
      reject("Ditolak, belum cukup umur");
    }
  }, 1000);
});

cekUmur
  .then((hasil) => console.log("Berhasil:", hasil))
  .catch((error) => console.log("Gagal:", error));

// --- Latihan: cekKoneksi ---
const cekKoneksi = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Terhubung");
  }, 1000);
});
cekKoneksi.then((status) => {
  console.log(status);
});
