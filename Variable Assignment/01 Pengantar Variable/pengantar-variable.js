// ============================================
// 01. PENGANTAR VARIABLE
// ============================================

// Contoh 1: Variabel sebagai "kotak berlabel"
let uangSaku = 50000;
console.log(uangSaku); // 50000


// Contoh 2: Berbagai jenis data dalam variabel
let nama = "Sari";
let umur = 25;
let sudahMenikah = false;

console.log(nama);          // Sari
console.log(umur);          // 25
console.log(sudahMenikah);  // false


// Contoh 3: Mengubah nilai variabel
let skor = 0;
console.log("Skor awal:", skor); // 0

skor = 10;
console.log("Skor setelah diubah:", skor); // 10

skor = skor + 5; // mengubah berdasarkan nilai sebelumnya
console.log("Skor setelah ditambah:", skor); // 15


// Contoh 4: Variabel dalam kasus nyata - menghitung total belanja
let namaUser = "Andi";
let umurUser = 30;
let hargaBarang = 15000;
let jumlahBeli = 3;
let totalHarga = hargaBarang * jumlahBeli;

console.log("Nama:", namaUser);
console.log("Umur:", umurUser);
console.log("Total belanja:", totalHarga); // 45000


// Contoh 5: Tanpa variabel (masalah - harus menulis ulang nilai)
console.log(15000 * 3); // 45000
console.log(15000 * 3); // sama, tapi harus tulis ulang jika ingin dipakai lagi
// Dengan variabel, cukup tulis "totalHarga" untuk memakainya lagi di mana saja


// Coba sendiri:
// Ubah nilai "uangSaku", "nama", "umur", atau "hargaBarang"
// lalu jalankan ulang untuk melihat bagaimana hasilnya berubah.
