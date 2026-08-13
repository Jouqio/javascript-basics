// ================================================
// Contoh 1: Object Bersifat Mutable (walau pakai const)
// ================================================
console.log("--- Object Mutable ---");
const user = { nama: "Andi" };
console.log("Sebelum:", user);

user.nama = "Budi"; // BISA diubah walaupun const!
console.log("Sesudah:", user);

// Yang TIDAK BISA: assign ulang variabel const ke object baru
// user = { nama: "Citra" }; // <- kalau baris ini di-uncomment, akan ERROR:
// "TypeError: Assignment to constant variable."
console.log("(Baris di atas jika di-uncomment akan menghasilkan error assignment const)");


// ================================================
// Contoh 2: Menambah Properti Baru
// ================================================
console.log("\n--- Menambah Properti ---");
let profil = { nama: "Andi" };
console.log("Sebelum:", profil);

profil.email = "andi@email.com";
profil["umur"] = 25; // bisa juga pakai bracket notation
console.log("Sesudah ditambah:", profil);


// ================================================
// Contoh 3: Mengubah Nilai Properti yang Sudah Ada
// ================================================
console.log("\n--- Mengubah Properti ---");
let siswa = { nama: "Rina", umur: 20 };
console.log("Sebelum:", siswa);

siswa.umur = 21; // nilai umur diganti
console.log("Sesudah diubah:", siswa);


// ================================================
// Contoh 4: Menghapus Properti
// ================================================
console.log("\n--- Menghapus Properti ---");
let dataLengkap = { nama: "Andi", umur: 20, email: "andi@email.com" };
console.log("Sebelum:", dataLengkap);

delete dataLengkap.email;
console.log("Sesudah dihapus:", dataLengkap);


// ================================================
// Contoh 5: Mengecek Keberadaan Properti dengan 'in'
// ================================================
console.log("\n--- Mengecek dengan 'in' ---");
let produk = { nama: "Mouse", stok: 0 }; // stok = 0 (falsy tapi valid!)

console.log("'nama' in produk ->", "nama" in produk); // true
console.log("'harga' in produk ->", "harga" in produk); // false

// Perbandingan dengan cara yang KURANG aman
console.log("\nKenapa 'in' lebih aman dari if biasa:");
console.log("if (produk.stok) ->", Boolean(produk.stok)); // false, SALAH menganggap stok tidak ada!
console.log("'stok' in produk ->", "stok" in produk);       // true, ini yang BENAR (stok memang ada, nilainya 0)


// ================================================
// Contoh 6: Mengecek dengan hasOwnProperty()
// ================================================
console.log("\n--- hasOwnProperty() ---");
console.log(produk.hasOwnProperty("nama")); // true
console.log(produk.hasOwnProperty("harga")); // false


// ================================================
// Contoh 7: Studi Kasus - Update Profil User
// ================================================
console.log("\n--- Studi Kasus: Update Profil ---");
let profilUser = {
  nama: "Dewi",
  email: "dewi_lama@email.com",
  statusVerifikasi: false,
};

function updateEmail(user, emailBaru) {
  if ("email" in user) {
    user.email = emailBaru;
    console.log(`Email berhasil diupdate menjadi: ${user.email}`);
  }
}

function verifikasiAkun(user) {
  user.statusVerifikasi = true;
  console.log("Akun berhasil diverifikasi!");
}

function hapusAkun(user) {
  delete user.email;
  delete user.statusVerifikasi;
  console.log("Data sensitif akun telah dihapus:", user);
}

updateEmail(profilUser, "dewi_baru@email.com");
verifikasiAkun(profilUser);
console.log("Profil setelah update:", profilUser);
hapusAkun(profilUser);
