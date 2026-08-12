// ====================================================================
// SOAL 1 — Callback (Level: Mudah)
// Buat fungsi hitungLuasPersegiPanjang(panjang, lebar, callback)
// - Simulasikan proses dengan setTimeout 500ms
// - Gunakan pola error-first callback: callback(error, hasil)
// - Jika panjang/lebar negatif -> callback(new Error("Ukuran tidak boleh negatif"))
// ====================================================================

// TODO: Soal 1 - Tulis kode kamu di sini
function hitungLuasPersegiPanjang(panjang, lebar, callback) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// hitungLuasPersegiPanjang(5, 4, (error, hasil) => {
//   if (error) return console.log("Soal 1 Error:", error.message);
//   console.log("Soal 1 - Luas:", hasil); // harus mencetak 20
// });


// ====================================================================
// SOAL 2 — Promise (Level: Mudah-Sedang)
// Ubah versi callback di bawah menjadi versi PROMISE
// ====================================================================

// Versi callback (sudah disediakan, JANGAN diubah)
function cekStokBarangCallback(namaBarang, stokTersedia, callback) {
  setTimeout(() => {
    if (stokTersedia > 0) {
      callback(null, `Stok ${namaBarang} tersedia`);
    } else {
      callback(new Error(`Stok ${namaBarang} habis`), null);
    }
  }, 500);
}

// TODO: Soal 2 - Buat versi Promise dari fungsi di atas
function cekStokBarang(namaBarang, stokTersedia) {
  // ketik jawabanmu di sini, gunakan "new Promise(...)"
  // manfaatkan cekStokBarangCallback di dalamnya
}

// Contoh cara memanggil (uncomment untuk mencoba):
// cekStokBarang("Sepatu", 10)
//   .then((pesan) => console.log("Soal 2 -", pesan))
//   .catch((error) => console.log("Soal 2 Error -", error.message));


// ====================================================================
// SOAL 3 — Promise Chaining (Level: Sedang)
// Rangkai bukaTokoOnline -> tambahProduk -> hitungTotalHarga
// ====================================================================

function bukaTokoOnline() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Toko Kalimantan Elektronik"), 500);
  });
}

function tambahProduk(namaToko) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Menambahkan produk ke ${namaToko}...`);
      resolve([120000, 250000, 75000]);
    }, 500);
  });
}

function hitungTotalHarga(daftarProduk) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(daftarProduk.reduce((a, b) => a + b, 0));
    }, 500);
  });
}

// TODO: Soal 3 - Rangkai ketiga fungsi di atas dengan .then() chaining
// bukaTokoOnline()
//   .then(...)
//   .then(...)
//   .then((total) => console.log("Soal 3 - Total harga:", total))
//   .catch((error) => console.log("Soal 3 Error -", error));


// ====================================================================
// SOAL 4 — Async/Await (Level: Sedang)
// Kerjakan ulang Soal 3 dengan async/await + try/catch
// ====================================================================

// TODO: Soal 4 - Tulis kode kamu di sini
async function prosesTokoAsync() {
  // ketik jawabanmu di sini, gunakan await + try/catch
  // gunakan fungsi bukaTokoOnline, tambahProduk, hitungTotalHarga yang sudah ada di atas
}

// Panggil fungsi di atas untuk mencoba (uncomment setelah mengisi jawaban):
// prosesTokoAsync();


// ====================================================================
// SOAL 5 — Paralel dengan Promise.all (Level: Menantang)
// Ambil rating BEBERAPA produk sekaligus (paralel), lalu hitung rata-rata
// ====================================================================

function ambilRatingProduk(idProduk) {
  return new Promise((resolve) => {
    const delayAcak = Math.floor(Math.random() * 1000) + 300;
    setTimeout(() => {
      const ratingAcak = (Math.random() * 2 + 3).toFixed(1); // rating 3.0 - 5.0
      resolve({ idProduk, rating: parseFloat(ratingAcak) });
    }, delayAcak);
  });
}

// TODO: Soal 5 - Buat fungsi ambilSemuaRating(daftarId) yang:
// 1. Mengambil rating semua produk di daftarId SECARA PARALEL (pakai Promise.all)
// 2. Mengembalikan rata-rata semua rating (gunakan async/await)
async function ambilSemuaRating(daftarId) {
  // ketik jawabanmu di sini
}

// Contoh cara memanggil (uncomment untuk mencoba):
// ambilSemuaRating([101, 102, 103, 104]).then((rataRata) => {
//   console.log("Soal 5 - Rata-rata rating:", rataRata);
// });


// ====================================================================
// SOAL 6 — Analisis Event Loop (Level: Menantang, tanpa kode)
// Tuliskan tebakanmu di komentar SEBELUM menjalankan kode ini!
// ====================================================================

// TODO: Soal 6 - Tulis tebakan urutan output kamu di sini sebelum menjalankan:
// Tebakan saya: _______________

console.log("Soal 6 - Mulai");

setTimeout(() => console.log("Soal 6 - Ini dari setTimeout"), 0);

Promise.resolve()
  .then(() => console.log("Soal 6 - Ini dari promise pertama"))
  .then(() => console.log("Soal 6 - Ini dari promise kedua"));

console.log("Soal 6 - Selesai (baris terakhir kode synchronous)");

// Jalankan file ini dengan: node soal.mjs
// Cocokkan urutan output asli dengan tebakanmu di atas!
