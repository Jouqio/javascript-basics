// ============================================
// 02. VAR, LET, CONST
// ============================================

// --- 1. let: nilai bisa diubah ---
let umur = 20;
console.log("Umur awal:", umur);

umur = 21; // boleh diubah
console.log("Umur setelah diubah:", umur);


// --- 2. const: nilai TIDAK bisa diubah ---
const PI = 3.14;
console.log("Nilai PI:", PI);

try {
  PI = 3.14159; // akan error
} catch (error) {
  console.log("Error saat mengubah const:", error.message);
}


// --- 3. const wajib diisi nilai saat dideklarasikan ---
// const namaKosong; // <- ini akan SyntaxError jika di-uncomment


// --- 4. var: cara lama, bisa dideklarasikan ulang (berbahaya) ---
var kota = "Jakarta";
var kota = "Bandung"; // tidak error, tapi bisa menimpa tanpa sadar
console.log("Kota (var, dideklarasikan ulang):", kota);


// --- 5. let TIDAK BOLEH dideklarasikan ulang di scope yang sama ---
let nama = "Budi";
try {
  eval("let nama = 'Andi';"); // pakai eval supaya tidak menghentikan seluruh file saat demo
} catch (error) {
  console.log("Error deklarasi ulang let:", error.message);
}


// --- 6. Perbedaan scope: var (function scope) vs let (block scope) ---
if (true) {
  var xVar = 10;
  let yLet = 20;
}

console.log("xVar di luar blok if:", xVar); // 10, var "bocor" keluar blok
try {
  console.log(yLet); // akan ReferenceError
} catch (error) {
  console.log("Error akses yLet di luar blok:", error.message);
}


// --- 7. Rekomendasi praktis ---
const namaAplikasi = "TodoApp"; // tidak berubah -> const
let jumlahTugas = 0;            // akan berubah -> let

jumlahTugas = jumlahTugas + 1;
jumlahTugas = jumlahTugas + 1;
console.log("Nama aplikasi:", namaAplikasi);
console.log("Jumlah tugas:", jumlahTugas); // 2


// Coba sendiri:
// Ubah nilai "umur" atau "jumlahTugas" untuk melihat let bekerja,
// lalu coba ubah PI untuk melihat error const.
