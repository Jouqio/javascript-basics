/*
  ===============================================
  KUNCI JAWABAN - LATIHAN MANDIRI LOCAL STORAGE
  ===============================================
  Coba kerjakan latihan.js dulu secara mandiri sebelum melihat file ini!
  Buka lewat browser (bukan Node.js) karena membutuhkan localStorage.
*/

// ===== Soal 1 — localStorage Dasar =====
function simpanNamaPengguna(nama) {
  localStorage.setItem("namaPengguna", nama);
}

function ambilNamaPengguna() {
  return localStorage.getItem("namaPengguna") || "Tamu";
}


// ===== Soal 2 — Menghitung Jumlah Kunjungan =====
function hitungKunjungan() {
  let jumlah = Number(localStorage.getItem("jumlahKunjungan")) || 0;
  jumlah += 1;
  localStorage.setItem("jumlahKunjungan", jumlah);
  return jumlah;
}


// ===== Soal 3 — Menyimpan Object dengan JSON =====
function simpanPengaturan(pengaturan) {
  localStorage.setItem("pengaturan", JSON.stringify(pengaturan));
}

function ambilPengaturan() {
  const data = localStorage.getItem("pengaturan");
  return data ? JSON.parse(data) : { tema: "terang", bahasa: "en" };
}


// ===== Soal 4 — Keranjang Belanja Sederhana =====
function tambahKeKeranjang(namaProduk, harga) {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjang.push({ namaProduk, harga });
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
}

function hitungTotalBelanja() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  return keranjang.reduce((total, item) => total + item.harga, 0);
}


// ===== Soal 5 — Function Helper Aman (Gabungan) =====
function simpanDataAman(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Gagal menyimpan:", error);
    return false;
  }
}

function ambilDataAman(key, nilaiDefault) {
  const data = localStorage.getItem(key);
  if (data === null) return nilaiDefault;
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Gagal parsing:", error);
    return nilaiDefault;
  }
}


// ===== Soal 6 — Tantangan: Wishlist dengan Cek Duplikat =====
function tambahKeWishlist(idProduk) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.includes(idProduk)) {
    wishlist.push(idProduk);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
}


// ===============================================
// AREA PENGUJIAN
// ===============================================
function jalankanSemuaTes() {
  console.log("--- Soal 1 ---");
  simpanNamaPengguna("Budi");
  console.log("Nama pengguna:", ambilNamaPengguna());

  console.log("--- Soal 2 ---");
  console.log("Kunjungan ke-:", hitungKunjungan());
  console.log("Kunjungan ke-:", hitungKunjungan());

  console.log("--- Soal 3 ---");
  simpanPengaturan({ tema: "gelap", bahasa: "id" });
  console.log("Pengaturan:", ambilPengaturan());

  console.log("--- Soal 4 ---");
  localStorage.removeItem("keranjang");
  tambahKeKeranjang("Buku", 50000);
  tambahKeKeranjang("Pulpen", 5000);
  console.log("Total belanja:", hitungTotalBelanja());

  console.log("--- Soal 5 ---");
  console.log("Simpan aman:", simpanDataAman("tesAman", { a: 1 }));
  console.log("Ambil aman:", ambilDataAman("tesAman", {}));
  console.log("Ambil default (belum ada):", ambilDataAman("tidakAda", "default"));

  console.log("--- Soal 6 ---");
  localStorage.removeItem("wishlist");
  tambahKeWishlist(101);
  tambahKeWishlist(102);
  tambahKeWishlist(101);
  console.log("Wishlist:", JSON.parse(localStorage.getItem("wishlist")));
}
