// ================================================
// Contoh 1: Object Literal (Cara Paling Umum)
// ================================================
console.log("--- Object Literal ---");
let user = {
  nama: "Andi",
  email: "andi@email.com",
};
console.log(user);


// ================================================
// Contoh 2: Menggunakan new Object()
// ================================================
console.log("\n--- new Object() ---");
let user2 = new Object();
user2.nama = "Wati";
user2.email = "wati@email.com";
console.log(user2);
// Perhatikan: hasilnya SAMA dengan object literal, tapi cara ini lebih verbose (panjang)


// ================================================
// Contoh 3: Object Kosong, Diisi Belakangan
// ================================================
console.log("\n--- Object Kosong ---");
let dataForm = {};
console.log("Sebelum diisi:", dataForm);

dataForm.nama = "Citra";
dataForm.umur = 19;
console.log("Setelah diisi:", dataForm);


// ================================================
// Contoh 4: Dot Notation vs Bracket Notation
// ================================================
console.log("\n--- Dot Notation vs Bracket Notation ---");
console.log("Dot notation:", user.nama);       // "Andi"
console.log("Bracket notation:", user["nama"]); // "Andi" -> hasil sama


// ================================================
// Contoh 5: Key dengan Spasi - HARUS Bracket Notation
// ================================================
console.log("\n--- Key dengan Spasi ---");
let data = {
  "nomor telepon": "08123456789",
  "kode pos": "75311",
};

console.log(data["nomor telepon"]); // "08123456789"
// data.nomor telepon; // Ini akan ERROR kalau dicoba, karena dot notation tidak bisa untuk key ber-spasi


// ================================================
// Contoh 6: Bracket Notation dengan Key Dinamis (dari variabel)
// ================================================
console.log("\n--- Key Dinamis ---");
let namaKey = "email";
console.log(user[namaKey]); // "andi@email.com"

// Contoh praktis: fungsi yang menerima nama field secara dinamis
function ambilProperti(obj, key) {
  return obj[key];
}
console.log(ambilProperti(user, "nama"));  // "Andi"
console.log(ambilProperti(user, "email")); // "andi@email.com"


// ================================================
// Contoh 7: Mengakses Properti yang Tidak Ada
// ================================================
console.log("\n--- Properti Tidak Ada ---");
console.log(user.alamat); // undefined, TIDAK error


// ================================================
// Contoh 8: Studi Kasus - Membuat dan Membaca Data Produk
// ================================================
console.log("\n--- Studi Kasus: Data Produk ---");
let produk = {
  nama: "Keyboard Mekanik",
  harga: 450000,
  "kategori utama": "Aksesoris Komputer", // key dengan spasi
};

console.log(`Nama: ${produk.nama}`);
console.log(`Harga: Rp${produk.harga}`);
console.log(`Kategori: ${produk["kategori utama"]}`); // wajib bracket notation
