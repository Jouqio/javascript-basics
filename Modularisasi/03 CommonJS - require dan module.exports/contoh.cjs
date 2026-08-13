// ============================================================
// 03 - CommonJS: require() dan module.exports
// ============================================================
// File ini memakai ekstensi .cjs agar dikenali sebagai CommonJS.
// Jalankan dengan: node contoh.cjs

const matematika = require("./matematika.cjs");

// --- Contoh 1: memakai module hasil require ---
console.log("Tambah:", matematika.tambah(2, 3));
console.log("Kurang:", matematika.kurang(5, 2));

// --- Contoh 2: destructuring langsung saat require ---
const { tambah } = require("./matematika.cjs");
console.log("Tambah (destructuring):", tambah(10, 5));

// --- Latihan: format.cjs ---
const format = require("./format.cjs");
console.log("Kapital:", format.kapital("halo dunia"));
console.log("Potong:", format.potong("Belajar Modularisasi JavaScript", 15));
