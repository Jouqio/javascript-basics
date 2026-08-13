// ================================================
// Contoh 1: For...in Dasar pada Object
// ================================================
console.log("--- For...in Dasar ---");
let siswa = { nama: "Rina", umur: 21, jurusan: "Teknik Informatika" };

for (let key in siswa) {
  console.log(key);
}


// ================================================
// Contoh 2: Mendapatkan Value dengan Bracket Notation
// ================================================
console.log("\n--- For...in dengan Value ---");
for (let key in siswa) {
  console.log(`${key} -> ${siswa[key]}`);
}


// ================================================
// Contoh 3: For...in vs For...of pada Array (JANGAN TERTUKAR!)
// ================================================
console.log("\n--- For...in vs For...of pada Array ---");
let arr = ["a", "b", "c"];

console.log("for...in (menghasilkan INDEX sebagai string):");
for (let x in arr) {
  console.log(x, typeof x); // "0" "string", "1" "string", "2" "string"
}

console.log("\nfor...of (menghasilkan VALUE langsung):");
for (let x of arr) {
  console.log(x, typeof x); // "a" "string", "b" "string", "c" "string" (tipe sesuai isinya)
}


// ================================================
// Contoh 4: Masalah for...in pada Array (Kenapa Dihindari)
// ================================================
console.log("\n--- Masalah for...in pada Array ---");
let angka = [10, 20, 30];

console.log("Mencoba menjumlahkan dengan for...in (BERISIKO):");
let totalSalah = "";
for (let i in angka) {
  totalSalah += i; // i adalah STRING index ("0","1","2"), bukan angka!
}
console.log("Hasil penggabungan string index:", totalSalah); // "012", bukan penjumlahan!

console.log("\nVersi BENAR dengan for...of:");
let totalBenar = 0;
for (let n of angka) {
  totalBenar += n; // n adalah angka asli
}
console.log("Hasil penjumlahan benar:", totalBenar); // 60


// ================================================
// Contoh 5: For...in untuk Object Dinamis (Konfigurasi)
// ================================================
console.log("\n--- Studi Kasus: Konfigurasi Aplikasi ---");
let konfigurasi = {
  tema: "gelap",
  bahasa: "id",
  notifikasi: true,
};

for (let pengaturan in konfigurasi) {
  console.log(`${pengaturan}: ${konfigurasi[pengaturan]}`);
}


// ================================================
// Contoh 6: Studi Kasus - Menghitung Jumlah Properti Object
// ================================================
console.log("\n--- Studi Kasus: Hitung Jumlah Properti ---");
let produk = { nama: "Laptop", harga: 8000000, stok: 5, kategori: "elektronik" };

let jumlahProperti = 0;
for (let key in produk) {
  jumlahProperti++;
}
console.log("Jumlah properti:", jumlahProperti); // 4


// ================================================
// Contoh 7: Studi Kasus - Mencari Properti dengan Value Tertentu
// ================================================
console.log("\n--- Studi Kasus: Cari Properti dengan Value Number ---");
let dataCampuran = {
  nama: "Andi",
  umur: 20,
  aktif: true,
  skor: 95,
};

for (let key in dataCampuran) {
  if (typeof dataCampuran[key] === "number") {
    console.log(`${key} adalah angka dengan nilai ${dataCampuran[key]}`);
  }
}
