// ============================================================
// 02 - let dan const
// ============================================================

// --- Contoh 1: masalah var yang "bocor" dari blok ---
if (true) {
  var pesanVar = "Halo dari var";
}
console.log("var bocor keluar blok:", pesanVar);

// --- Contoh 2: let bersifat block-scoped ---
if (true) {
  let pesanLet = "Halo dari let";
  console.log("Di dalam blok:", pesanLet);
}
// console.log(pesanLet); // Ini akan error jika di-uncomment

let umur = 20;
umur = 21; // boleh diubah
console.log("umur setelah diubah:", umur);

// --- Contoh 3: const tidak boleh di-reassign ---
const PI = 3.14;
console.log("PI:", PI);
// PI = 3.14159; // Ini akan error jika di-uncomment

// --- Contoh 4: const pada objek/array tetap bisa diubah isinya ---
const user = { nama: "Syauqi", umur: 20 };
user.umur = 21; // boleh
console.log("User setelah diubah:", user);

const angka = [1, 2, 3];
angka.push(4); // boleh
console.log("Array setelah push:", angka);

// --- Latihan: perbaiki bug const/let ---
let total = 0; // sudah diperbaiki dari const menjadi let
for (let i = 1; i <= 5; i++) {
  total = total + i;
}
console.log("Total 1-5:", total);
