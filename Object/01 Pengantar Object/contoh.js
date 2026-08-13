// ================================================
// Contoh 1: Membuat Object Sederhana
// ================================================
console.log("--- Object Sederhana ---");
let siswa = {
  nama: "Rina",
  umur: 21,
  jurusan: "Teknik Informatika",
};
console.log(siswa);
console.log("Tipe data object:", typeof siswa); // "object"


// ================================================
// Contoh 2: Tanpa Object vs Dengan Object
// ================================================
console.log("\n--- Tanpa Object (berantakan) ---");
let namaSiswa = "Budi";
let umurSiswa = 20;
let jurusanSiswa = "Sistem Informasi";
console.log(namaSiswa, umurSiswa, jurusanSiswa);
// Masalah: tidak jelas kalau ketiga variabel ini SATU kesatuan data

console.log("\n--- Dengan Object (rapi) ---");
let siswa2 = {
  nama: "Budi",
  umur: 20,
  jurusan: "Sistem Informasi",
};
console.log(siswa2);
// Lebih jelas: ini adalah SATU data siswa dengan 3 atribut


// ================================================
// Contoh 3: Perbandingan Array vs Object
// ================================================
console.log("\n--- Array vs Object ---");

// Array: cocok untuk data berurutan tanpa label khusus
let daftarBuah = ["Apel", "Jeruk", "Mangga"];
console.log("Array (akses via index):", daftarBuah[0]); // "Apel"

// Object: cocok untuk data dengan atribut yang jelas
let buah = { nama: "Apel", warna: "Merah", harga: 15000 };
console.log("Object (akses via key):", buah.nama); // "Apel"


// ================================================
// Contoh 4: Object Bisa Menyimpan Berbagai Tipe Data
// ================================================
console.log("\n--- Object dengan Berbagai Tipe Data ---");
let produk = {
  nama: "Laptop Gaming",      // string
  harga: 15000000,             // number
  tersedia: true,               // boolean
  diskon: null,                  // null
  kategori: ["elektronik", "komputer"], // array
  spesifikasi: {                 // object di dalam object (nested)
    ram: "16GB",
    penyimpanan: "512GB SSD",
  },
};
console.log(produk);


// ================================================
// Contoh 5: Studi Kasus - Mengelompokkan Data Terkait
// ================================================
console.log("\n--- Studi Kasus: Data Kendaraan ---");
let mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2023,
  warna: "Hitam",
};

console.log(`${mobil.merk} ${mobil.model} tahun ${mobil.tahun}, warna ${mobil.warna}`);
