// ============================================
// 02. MUTABLE VS IMMUTABLE ARRAY - Contoh Kode
// ============================================

// --- Contoh Mutable ---
console.log("=== MUTABLE ===");
const angkaMutable = [1, 2, 3];
angkaMutable.push(4); // array asli langsung berubah
console.log("Setelah push:", angkaMutable); // [1, 2, 3, 4]

// --- Contoh Immutable ---
console.log("\n=== IMMUTABLE ===");
const angkaAsli = [1, 2, 3];
const angkaBaru = [...angkaAsli, 4]; // membuat array baru
console.log("angkaAsli (tidak berubah):", angkaAsli); // [1, 2, 3]
console.log("angkaBaru (array baru)   :", angkaBaru); // [1, 2, 3, 4]

// --- Method Mutable ---
console.log("\n=== Method Mutable (mengubah array asli) ===");
const arrSort = [3, 1, 2];
arrSort.sort();
console.log("Setelah sort():", arrSort); // [1, 2, 3] -> array asli berubah

const arrPop = [1, 2, 3];
arrPop.pop();
console.log("Setelah pop():", arrPop); // [1, 2]

const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(1, 2); // hapus 2 elemen mulai index 1
console.log("Setelah splice(1,2):", arrSplice); // [1, 4, 5]

// --- Method Immutable ---
console.log("\n=== Method Immutable (menghasilkan array baru) ===");
const arrAsli2 = [3, 1, 2];
const arrBaruSort = arrAsli2.slice().sort(); // salin dulu sebelum sort
console.log("arrAsli2 (tidak berubah):", arrAsli2); // [3, 1, 2]
console.log("arrBaruSort:", arrBaruSort); // [1, 2, 3]

// --- Contoh Bug Akibat Mutasi Tidak Sengaja ---
console.log("\n=== Contoh Bug vs Solusi Immutable ===");

function tambahItemBug(daftar, item) {
  daftar.push(item); // mengubah array asli milik pemanggil!
  return daftar;
}

function tambahItemAman(daftar, item) {
  return [...daftar, item]; // array baru, daftar asli tetap aman
}

const daftarAsli = ["A", "B"];
const hasilBug = tambahItemBug(daftarAsli, "C");
console.log("daftarAsli setelah tambahItemBug (ikut berubah!):", daftarAsli);

const daftarAsli2 = ["A", "B"];
const hasilAman = tambahItemAman(daftarAsli2, "C");
console.log("daftarAsli2 setelah tambahItemAman (tetap aman):", daftarAsli2);
console.log("hasilAman (array baru):", hasilAman);

// ============================================
// LATIHAN (kerjakan sendiri di bawah ini)
// ============================================

// 1. Tambahkan "Mangga" ke array buah secara immutable
const buah = ["Apel", "Jeruk"];
const buahBaru = [...buah, "Mangga"];
console.log("\nJawaban No 1 - buah asli:", buah);
console.log("Jawaban No 1 - buahBaru :", buahBaru);

// 2. Urutkan array angka acak secara immutable
const angkaAcak = [5, 3, 8, 1];
const angkaTerurut = angkaAcak.slice().sort((a, b) => a - b);
console.log("\nJawaban No 2 - angkaAcak (tetap):", angkaAcak);
console.log("Jawaban No 2 - angkaTerurut:", angkaTerurut);

// 3. (Essay) Jawab di komentar atau di file terpisah.
