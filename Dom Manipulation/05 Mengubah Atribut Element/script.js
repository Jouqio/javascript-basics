// ============================================
// 05. MENGUBAH ATRIBUT ELEMENT
// ============================================

const gambar = document.querySelector("#foto-utama");

// --- 1. getAttribute: membaca atribut ---
console.log("src saat ini:", gambar.getAttribute("src"));
console.log("alt saat ini:", gambar.getAttribute("alt"));

// --- 2. setAttribute: mengubah/menambah atribut ---
const btnUbahGambar = document.querySelector("#btn-ubah-gambar");

btnUbahGambar.addEventListener("click", function () {
  gambar.setAttribute("src", "https://placehold.co/300x150/38bdf8/0f172a?text=Gambar+Baru");
  gambar.setAttribute("alt", "Deskripsi gambar setelah diganti");
  console.log("Gambar berhasil diganti via setAttribute");
});


// --- 3. Mengakses atribut umum lewat properti langsung ---
console.log("gambar.src (properti langsung):", gambar.src);


// --- 4. dataset: mengelola atribut data-* ---
const notif = document.querySelector("#notif");
console.log("Status dibaca (awal):", notif.dataset.dibaca);

notif.addEventListener("click", function () {
  if (notif.dataset.dibaca === "false") {
    notif.dataset.dibaca = "true";
    notif.style.opacity = "0.5";
    notif.textContent = "✅ Sudah dibaca";
    console.log("Notifikasi ditandai sudah dibaca");
  }
});


// --- 5. dataset pada tombol produk ---
const tombolProduk = document.querySelector("#btn-produk");
console.log("ID produk:", tombolProduk.dataset.id);
console.log("Nama produk:", tombolProduk.dataset.nama);

tombolProduk.addEventListener("click", function () {
  console.log(
    "Membeli produk:",
    tombolProduk.dataset.nama,
    "dengan ID:",
    tombolProduk.dataset.id
  );
});


// Coba sendiri:
// Klik tombol "Ganti Gambar" dan notifikasi untuk melihat
// setAttribute dan dataset bekerja secara langsung di halaman.
