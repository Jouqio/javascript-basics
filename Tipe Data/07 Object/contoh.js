// ================================================
// Contoh 1: Membuat Object dan Mengakses Properti
// ================================================
console.log("--- Dasar Object ---");
let siswa = {
  nama: "Rina",
  umur: 21,
  jurusan: "Teknik Informatika",
  aktif: true,
};

console.log("Object siswa:", siswa);
console.log("Dot notation:", siswa.nama);        // "Rina"
console.log("Bracket notation:", siswa["umur"]); // 21


// ================================================
// Contoh 2: Bracket Notation dengan Key Dinamis
// ================================================
console.log("\n--- Bracket Notation Dinamis ---");
let namaKey = "jurusan";
console.log(`Nilai dari key "${namaKey}":`, siswa[namaKey]); // "Teknik Informatika"


// ================================================
// Contoh 3: Mengubah, Menambah, dan Menghapus Properti
// ================================================
console.log("\n--- Mengubah Object ---");
siswa.umur = 22; // ubah nilai yang sudah ada
console.log("Setelah umur diubah:", siswa.umur);

siswa.email = "rina@mail.com"; // tambah properti baru
console.log("Setelah tambah email:", siswa);

delete siswa.aktif; // hapus properti
console.log("Setelah hapus 'aktif':", siswa);


// ================================================
// Contoh 4: Object dengan Method
// ================================================
console.log("\n--- Object dengan Method ---");
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  nyalakanMesin: function () {
    console.log(`${this.merk} ${this.model} - Mesin dinyalakan! 🚗`);
  },
};

mobil.nyalakanMesin();


// ================================================
// Contoh 5: Object Bersarang (Nested)
// ================================================
console.log("\n--- Object Nested ---");
let profil = {
  nama: "Ahmad",
  alamat: {
    kota: "Bontang",
    provinsi: "Kalimantan Timur",
  },
  hobi: ["membaca", "coding", "futsal"],
};

console.log("Kota:", profil.alamat.kota);
console.log("Hobi pertama:", profil.hobi[0]);
console.log("Semua hobi:", profil.hobi.join(", "));


// ================================================
// Contoh 6: Object.keys(), Object.values(), Object.entries()
// ================================================
console.log("\n--- Object.keys/values/entries ---");
let produk = {
  nama: "Laptop",
  harga: 8500000,
  stok: 12,
};

console.log("Keys:", Object.keys(produk));     // ["nama", "harga", "stok"]
console.log("Values:", Object.values(produk)); // ["Laptop", 8500000, 12]
console.log("Entries:", Object.entries(produk));
// [["nama","Laptop"], ["harga",8500000], ["stok",12]]

// Menggunakan entries untuk loop key-value sekaligus
Object.entries(produk).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// ================================================
// Contoh 7: Studi Kasus - Data Kontak Sederhana
// ================================================
console.log("\n--- Studi Kasus: Buku Kontak ---");
let bukuKontak = {
  "Andi Wijaya": "081234567890",
  "Budi Santoso": "089876543210",
};

function cariKontak(nama) {
  if (bukuKontak[nama]) {
    console.log(`${nama}: ${bukuKontak[nama]}`);
  } else {
    console.log(`Kontak "${nama}" tidak ditemukan.`);
  }
}

cariKontak("Andi Wijaya");
cariKontak("Citra Dewi");
