// ================================================
// Contoh 1: Object.freeze() Dasar
// ================================================
console.log("--- Object.freeze() ---");
const user = Object.freeze({ nama: "Andi", umur: 20 });
console.log("Sebelum mencoba diubah:", user);

user.umur = 25;              // diabaikan
user.email = "andi@x.com";   // diabaikan, tidak ditambahkan
delete user.nama;             // diabaikan, tidak terhapus

console.log("Setelah mencoba diubah/ditambah/dihapus:", user);
// Hasilnya tetap { nama: "Andi", umur: 20 } -> TIDAK BERUBAH SAMA SEKALI


// ================================================
// Contoh 2: Mengecek Object Sudah Frozen atau Belum
// ================================================
console.log("\n--- Object.isFrozen() ---");
console.log("user sudah frozen?", Object.isFrozen(user)); // true

let objBiasa = { a: 1 };
console.log("objBiasa sudah frozen?", Object.isFrozen(objBiasa)); // false


// ================================================
// Contoh 3: freeze() Hanya Shallow (Dangkal)
// ================================================
console.log("\n--- Freeze Hanya Shallow ---");
const data = Object.freeze({
  nama: "Budi",
  alamat: { kota: "Bontang" },
});

data.alamat.kota = "Samarinda"; // BERHASIL diubah! alamat tidak ikut di-freeze
console.log("data.alamat.kota:", data.alamat.kota); // "Samarinda" -> berubah!

console.log("data (level pertama) frozen?", Object.isFrozen(data));         // true
console.log("data.alamat (level kedua) frozen?", Object.isFrozen(data.alamat)); // false


// ================================================
// Contoh 4: Deep Freeze Sederhana (Rekursif)
// ================================================
console.log("\n--- Deep Freeze (Rekursif) ---");
function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]); // panggil rekursif untuk object di dalamnya
    }
  });
  return Object.freeze(obj);
}

const dataDalam = deepFreeze({
  nama: "Citra",
  alamat: { kota: "Bontang" },
});

dataDalam.alamat.kota = "Samarinda"; // sekarang diabaikan, karena sudah di-deep-freeze
console.log("dataDalam.alamat.kota:", dataDalam.alamat.kota); // tetap "Bontang"


// ================================================
// Contoh 5: Immutable Update Pattern dengan Spread Operator
// ================================================
console.log("\n--- Immutable Update Pattern ---");
const userLama = { nama: "Dedi", umur: 20 };

// SALAH (mutasi langsung, TIDAK dianjurkan):
// userLama.umur = 21;

// BENAR: buat object BARU dengan perubahan
const userBaru = { ...userLama, umur: 21 };

console.log("userLama:", userLama); // { nama: "Dedi", umur: 20 } -> tetap sama
console.log("userBaru:", userBaru); // { nama: "Dedi", umur: 21 } -> data baru


// ================================================
// Contoh 6: Studi Kasus - Update Data Tanpa Mengubah Data Asli
// ================================================
console.log("\n--- Studi Kasus: Update Keranjang Belanja ---");
const keranjangAwal = Object.freeze({
  namaToko: "Toko Elektronik Jaya",
  items: Object.freeze(["Mouse", "Keyboard"]),
  totalHarga: 250000,
});

// Fungsi untuk "menambah item" tanpa mengubah data asli
function tambahItem(keranjang, itemBaru, hargaBaru) {
  return {
    ...keranjang, // salin semua properti lama
    items: [...keranjang.items, itemBaru], // buat array BARU dengan item tambahan
    totalHarga: keranjang.totalHarga + hargaBaru,
  };
}

const keranjangBaru = tambahItem(keranjangAwal, "Monitor", 1500000);

console.log("Keranjang awal (tidak berubah):", keranjangAwal);
console.log("Keranjang baru (ada tambahan):", keranjangBaru);
