// ============================================================
// 14 - Tugas Gabungan: Simulasi Pemesanan Online
// ============================================================
// Baca Readme.md di folder ini untuk penjelasan lengkap tiap requirement.
// Lengkapi setiap fungsi di bawah ini sesuai TODO masing-masing.
// Jangan ubah signature fungsi (nama & parameter) agar bagian "Runner"
// di paling bawah tetap bisa memanggilnya.

// ------------------------------------------------------------
// 1. validasiKeranjang(itemArray, callback)  -> materi 02 (Callback)
// ------------------------------------------------------------
// TODO: Gunakan setTimeout 300ms untuk mensimulasikan validasi.
// Panggil callback(true) jika itemArray tidak kosong, callback(false) jika kosong.
function validasiKeranjang(itemArray, callback) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 2. hitungTotal(itemArray)  -> materi 07 (Promise)
// ------------------------------------------------------------
// TODO: Kembalikan Promise yang resolve dengan total harga (harga * qty
// dijumlahkan semua item) setelah delay 500ms.
// Bentuk tiap item: { nama, harga, qty }
function hitungTotal(itemArray) {
  // TODO: implementasikan, return new Promise(...)
}

// ------------------------------------------------------------
// 3. cekStok(namaBarang)  -> materi 07 / 09 (Promise & Promise.all)
// ------------------------------------------------------------
// TODO: Kembalikan Promise yang resolve true/false (tersedia atau tidak)
// setelah delay ACAK antara 200-600ms.
// Gunakan STOK_TERSEDIA di bawah sebagai "database" simulasi.
const STOK_TERSEDIA = new Set(["Keyboard", "Mouse", "Monitor", "Headset"]);

function cekStok(namaBarang) {
  // TODO: implementasikan, return new Promise(...)
  // Petunjuk delay acak: Math.random() * 400 + 200
}

// ------------------------------------------------------------
// 4. prosesPembayaran(total)  -> materi 10 / 11 (async/await & error handling)
// ------------------------------------------------------------
// TODO: Fungsi async. Jika total > 1000000, throw/reject Error dengan pesan
// "Limit pembayaran terlampaui". Jika tidak, resolve setelah 700ms dengan:
// { status: "sukses", kodeTransaksi: "TRX-" + Date.now() }
async function prosesPembayaran(total) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 5. batalkanJikaTimeout(promise, detikTimeout)  -> materi 04 / 05 (setTimeout & clearTimeout)
// ------------------------------------------------------------
// TODO: Kembalikan Promise baru yang:
//   - resolve/reject mengikuti `promise` asli jika selesai duluan
//   - reject dengan Error("Timeout: proses terlalu lama") jika `promise`
//     belum selesai dalam `detikTimeout` detik
// Petunjuk: gunakan Promise.race([...]) dan pastikan clearTimeout dipanggil
// begitu `promise` asli selesai (baik resolve maupun reject), supaya
// timer timeout tidak menggantung di background.
function batalkanJikaTimeout(promise, detikTimeout) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 6. prosesPesanan(itemArray)  -> materi 12 (menggabungkan semua)
// ------------------------------------------------------------
// TODO: Fungsi async utama. Ikuti alur di Readme.md:
//   1) Validasi keranjang tidak kosong -> lempar Error("Keranjang kosong") jika kosong
//   2) Hitung total harga
//   3) Cek stok SEMUA barang secara PARALEL -> lempar Error("Stok tidak mencukupi")
//      jika ada satu saja yang false
//   4) Proses pembayaran, dibungkus batalkanJikaTimeout dengan batas 3 detik
//   5) Bungkus semuanya dengan try/catch/finally
//      -> finally selalu mencetak "Proses pemesanan selesai"
//   6) Jika sukses, cetak ringkasan pesanan (nama barang, total harga, kode transaksi)
async function prosesPesanan(itemArray) {
  // TODO: implementasikan
}

// ============================================================
// Runner - JANGAN diubah, dipakai untuk menguji implementasimu
// ============================================================

const KERANJANG_SUKSES = [
  { nama: "Keyboard", harga: 350000, qty: 1 },
  { nama: "Mouse", harga: 150000, qty: 2 },
];

const KERANJANG_STOK_HABIS = [
  { nama: "Keyboard", harga: 350000, qty: 1 },
  { nama: "Webcam", harga: 200000, qty: 1 }, // tidak ada di STOK_TERSEDIA
];

const KERANJANG_LIMIT_TERLAMPAUI = [
  { nama: "Monitor", harga: 900000, qty: 2 },
];

const KERANJANG_KOSONG = [];

async function jalankanSemuaSkenario() {
  console.log("\n=== Skenario 1: Sukses ===");
  await prosesPesanan(KERANJANG_SUKSES).catch(() => {});

  console.log("\n=== Skenario 2: Keranjang kosong ===");
  await prosesPesanan(KERANJANG_KOSONG).catch(() => {});

  console.log("\n=== Skenario 3: Stok tidak mencukupi ===");
  await prosesPesanan(KERANJANG_STOK_HABIS).catch(() => {});

  console.log("\n=== Skenario 4: Limit pembayaran terlampaui ===");
  await prosesPesanan(KERANJANG_LIMIT_TERLAMPAUI).catch(() => {});
}

jalankanSemuaSkenario();
