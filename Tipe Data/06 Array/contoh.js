// ================================================
// Contoh 1: Membuat Array dan Mengakses Elemen
// ================================================
console.log("--- Dasar Array ---");
let buah = ["Apel", "Jeruk", "Mangga"];
console.log("Array buah:", buah);
console.log("Elemen index 0:", buah[0]); // Apel
console.log("Elemen index 1:", buah[1]); // Jeruk
console.log("Elemen index 3 (tidak ada):", buah[3]); // undefined
console.log("Panjang array:", buah.length); // 3


// ================================================
// Contoh 2: Array Bersifat Mutable
// ================================================
console.log("\n--- Array Mutable ---");
buah[0] = "Nanas";
console.log("Setelah diubah:", buah); // ["Nanas", "Jeruk", "Mangga"]


// ================================================
// Contoh 3: Menambah/Menghapus Elemen
// ================================================
console.log("\n--- Push, Pop, Unshift, Shift ---");
let angka = [2, 3, 4];
console.log("Awal:", angka);

angka.push(5); // tambah di akhir
console.log("Setelah push(5):", angka); // [2, 3, 4, 5]

angka.pop(); // hapus elemen terakhir
console.log("Setelah pop():", angka); // [2, 3, 4]

angka.unshift(1); // tambah di awal
console.log("Setelah unshift(1):", angka); // [1, 2, 3, 4]

angka.shift(); // hapus elemen pertama
console.log("Setelah shift():", angka); // [2, 3, 4]


// ================================================
// Contoh 4: forEach - Menjalankan Fungsi untuk Setiap Elemen
// ================================================
console.log("\n--- forEach ---");
let namaBuah = ["Apel", "Jeruk", "Mangga"];
namaBuah.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});


// ================================================
// Contoh 5: map - Transformasi Setiap Elemen
// ================================================
console.log("\n--- map ---");
let daftarAngka = [1, 2, 3, 4, 5];
let dikali2 = daftarAngka.map((n) => n * 2);
console.log("Angka asli:", daftarAngka);
console.log("Dikali 2:", dikali2); // [2, 4, 6, 8, 10]


// ================================================
// Contoh 6: filter - Menyaring Elemen
// ================================================
console.log("\n--- filter ---");
let genapSaja = daftarAngka.filter((n) => n % 2 === 0);
console.log("Angka genap saja:", genapSaja); // [2, 4]


// ================================================
// Contoh 7: reduce - Meringkas Jadi Satu Nilai
// ================================================
console.log("\n--- reduce ---");
let total = daftarAngka.reduce((jumlah, n) => jumlah + n, 0);
console.log("Total semua angka:", total); // 15


// ================================================
// Contoh 8: find dan includes
// ================================================
console.log("\n--- find & includes ---");
let dataSiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
];

let siswaLulus = dataSiswa.find((siswa) => siswa.nilai >= 75);
console.log("Siswa pertama yang lulus:", siswaLulus);

console.log("Mengandung angka 3?", daftarAngka.includes(3)); // true


// ================================================
// Contoh 9: Studi Kasus - Menghitung Rata-rata Nilai Siswa yang Lulus
// ================================================
console.log("\n--- Studi Kasus: Nilai Siswa ---");
let siswaLulusSaja = dataSiswa.filter((siswa) => siswa.nilai >= 75);
let namaSiswaLulus = siswaLulusSaja.map((siswa) => siswa.nama);
let rataRataLulus =
  siswaLulusSaja.reduce((total, siswa) => total + siswa.nilai, 0) / siswaLulusSaja.length;

console.log("Siswa yang lulus:", namaSiswaLulus);
console.log("Rata-rata nilai siswa yang lulus:", rataRataLulus);
