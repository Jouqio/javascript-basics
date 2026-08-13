// ================================================
// Contoh 1: Object Disalin sebagai Referensi
// ================================================
console.log("--- Object sebagai Referensi ---");
let obj1 = { nilai: 10 };
let obj2 = obj1; // obj2 menyalin REFERENSI, bukan isi

console.log("Sebelum:", obj1, obj2);
obj2.nilai = 99;
console.log("Setelah obj2 diubah:");
console.log("obj1:", obj1); // { nilai: 99 } -> IKUT BERUBAH!
console.log("obj2:", obj2); // { nilai: 99 }


// ================================================
// Contoh 2: Perbandingan dengan Primitif (disalin sebagai NILAI)
// ================================================
console.log("\n--- Primitif sebagai Nilai ---");
let a = 10;
let b = a;
b = 20;
console.log("a =", a, ", b =", b); // a = 10, b = 20 -> a TIDAK ikut berubah


// ================================================
// Contoh 3: Perbandingan Object dengan ===
// ================================================
console.log("\n--- Perbandingan Object dengan === ---");
let objA = { nilai: 10 };
let objB = { nilai: 10 };
console.log("objA === objB ->", objA === objB); // false, walau isinya sama!

let objC = objA;
console.log("objA === objC ->", objA === objC); // true, karena referensi SAMA


// ================================================
// Contoh 4: Shallow Copy dengan Spread Operator
// ================================================
console.log("\n--- Shallow Copy dengan Spread ---");
let asli = { nama: "Andi", umur: 20 };
let salinan = { ...asli }; // object BARU, independen

salinan.umur = 25;
console.log("asli:", asli);       // { nama: "Andi", umur: 20 } -> TIDAK berubah
console.log("salinan:", salinan); // { nama: "Andi", umur: 25 }

console.log("asli === salinan ->", asli === salinan); // false, referensi berbeda


// ================================================
// Contoh 5: Shallow Copy dengan Object.assign()
// ================================================
console.log("\n--- Shallow Copy dengan Object.assign() ---");
let salinan2 = Object.assign({}, asli);
salinan2.nama = "Budi";
console.log("asli:", asli);         // tetap "Andi"
console.log("salinan2:", salinan2); // "Budi"


// ================================================
// Contoh 6: Masalah Shallow Copy dengan Object Bersarang
// ================================================
console.log("\n--- Masalah Shallow Copy pada Nested Object ---");
let user = { nama: "Citra", alamat: { kota: "Bontang" } };
let salinanUser = { ...user };

salinanUser.alamat.kota = "Samarinda"; // mengubah object bersarang
console.log("user.alamat.kota:", user.alamat.kota); // "Samarinda"! IKUT BERUBAH
console.log("salinanUser.alamat.kota:", salinanUser.alamat.kota); // "Samarinda"

// Ini terjadi karena "alamat" masih berbagi referensi yang SAMA
console.log("user.alamat === salinanUser.alamat ->", user.alamat === salinanUser.alamat); // true!


// ================================================
// Contoh 7: Deep Copy dengan structuredClone()
// ================================================
console.log("\n--- Deep Copy dengan structuredClone() ---");
let userAsli = { nama: "Dedi", alamat: { kota: "Balikpapan" } };
let deepCopyUser = structuredClone(userAsli); // menyalin SEMUA level

deepCopyUser.alamat.kota = "Jakarta";
console.log("userAsli.alamat.kota:", userAsli.alamat.kota);     // "Balikpapan", TIDAK berubah!
console.log("deepCopyUser.alamat.kota:", deepCopyUser.alamat.kota); // "Jakarta"


// ================================================
// Contoh 8: Studi Kasus - Bug Umum karena Reference
// ================================================
console.log("\n--- Studi Kasus: Bug karena Reference ---");
function tambahDiskon(produk) {
  produk.harga = produk.harga * 0.9; // sengaja mengubah langsung objek yang diterima
  return produk;
}

let produkAsli = { nama: "Sepatu", harga: 200000 };
let produkDiskon = tambahDiskon(produkAsli);

// BUG: produkAsli IKUT BERUBAH walaupun kita hanya ingin membuat versi diskon!
console.log("produkAsli.harga:", produkAsli.harga);   // 180000, seharusnya tetap 200000!
console.log("produkDiskon.harga:", produkDiskon.harga); // 180000

// Solusi: buat salinan dulu sebelum diubah, supaya produk asli tidak ikut berubah
function tambahDiskonAman(produk) {
  let salinanProduk = { ...produk }; // shallow copy
  salinanProduk.harga = salinanProduk.harga * 0.9;
  return salinanProduk;
}

let produkAsli2 = { nama: "Tas", harga: 300000 };
let produkDiskon2 = tambahDiskonAman(produkAsli2);
console.log("\nSetelah diperbaiki:");
console.log("produkAsli2.harga:", produkAsli2.harga);   // 300000, TETAP sama
console.log("produkDiskon2.harga:", produkDiskon2.harga); // 270000
