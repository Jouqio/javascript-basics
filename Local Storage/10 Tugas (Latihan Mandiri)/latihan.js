/*
  ===============================================
  LATIHAN MANDIRI - LOCAL STORAGE JAVASCRIPT
  ===============================================
  Isi setiap function di bawah ini sesuai instruksi pada Readme.md.
  Jangan lihat kunci-jawaban.js dulu sebelum mencoba sendiri!

  PENTING: localStorage hanya tersedia di browser.
  Buka file "latihan.html" di browser untuk menjalankan kode ini,
  lalu lihat hasilnya di DevTools -> Console (F12).
*/

// ===== Soal 1 — localStorage Dasar =====
function simpanNamaPengguna(nama) {
  // TODO: simpan "nama" ke localStorage dengan key "namaPengguna"
}

function ambilNamaPengguna() {
  // TODO: kembalikan nama dari localStorage, atau "Tamu" jika belum ada
}


// ===== Soal 2 — Menghitung Jumlah Kunjungan =====
function hitungKunjungan() {
  // TODO: ambil jumlah kunjungan dari localStorage (key: "jumlahKunjungan"),
  // tambah 1, simpan kembali, lalu kembalikan nilai terbaru
  // jika belum ada data, mulai dari 1
}


// ===== Soal 3 — Menyimpan Object dengan JSON =====
function simpanPengaturan(pengaturan) {
  // TODO: simpan object "pengaturan" ke localStorage (key: "pengaturan") pakai JSON.stringify()
}

function ambilPengaturan() {
  // TODO: ambil & JSON.parse() data pengaturan dari localStorage
  // jika belum ada, kembalikan { tema: "terang", bahasa: "en" }
}


// ===== Soal 4 — Keranjang Belanja Sederhana =====
function tambahKeKeranjang(namaProduk, harga) {
  // TODO: tambahkan { namaProduk, harga } ke array di localStorage (key: "keranjang")
}

function hitungTotalBelanja() {
  // TODO: kembalikan total harga semua produk di keranjang
}


// ===== Soal 5 — Function Helper Aman (Gabungan) =====
function simpanDataAman(key, data) {
  // TODO: bungkus localStorage.setItem(key, JSON.stringify(data)) dengan try...catch
  // kembalikan true jika berhasil, false jika gagal
}

function ambilDataAman(key, nilaiDefault) {
  // TODO: bungkus JSON.parse(localStorage.getItem(key)) dengan try...catch
  // kembalikan nilaiDefault jika data null atau gagal di-parse
}


// ===== Soal 6 — Tantangan: Wishlist dengan Cek Duplikat =====
function tambahKeWishlist(idProduk) {
  // TODO: tambahkan idProduk ke array wishlist (key: "wishlist") di localStorage
  // JANGAN tambahkan jika idProduk sudah ada di dalam wishlist
}


// ===============================================
// AREA PENGUJIAN - Jalankan lewat latihan.html
// ===============================================
function jalankanSemuaTes() {
  console.log("--- Soal 1 ---");
  simpanNamaPengguna("Budi");
  console.log("Nama pengguna:", ambilNamaPengguna()); // "Budi"

  console.log("--- Soal 2 ---");
  console.log("Kunjungan ke-:", hitungKunjungan()); // 1 (pertama kali)
  console.log("Kunjungan ke-:", hitungKunjungan()); // 2 (kedua kali)

  console.log("--- Soal 3 ---");
  simpanPengaturan({ tema: "gelap", bahasa: "id" });
  console.log("Pengaturan:", ambilPengaturan()); // { tema: "gelap", bahasa: "id" }

  console.log("--- Soal 4 ---");
  localStorage.removeItem("keranjang"); // reset dulu untuk testing
  tambahKeKeranjang("Buku", 50000);
  tambahKeKeranjang("Pulpen", 5000);
  console.log("Total belanja:", hitungTotalBelanja()); // 55000

  console.log("--- Soal 5 ---");
  console.log("Simpan aman:", simpanDataAman("tesAman", { a: 1 })); // true
  console.log("Ambil aman:", ambilDataAman("tesAman", {})); // { a: 1 }
  console.log("Ambil default (belum ada):", ambilDataAman("tidakAda", "default")); // "default"

  console.log("--- Soal 6 ---");
  localStorage.removeItem("wishlist"); // reset dulu untuk testing
  tambahKeWishlist(101);
  tambahKeWishlist(102);
  tambahKeWishlist(101); // duplikat, seharusnya tidak ditambahkan lagi
  console.log("Wishlist:", JSON.parse(localStorage.getItem("wishlist"))); // [101, 102]
}
