// ============================================================
// 05 - Named Export vs Default Export
// ============================================================
// Jalankan dengan: node contoh.mjs

import Kalkulator, { tambah, versi } from "./kalkulator.mjs";
import kirimNotifikasi, { TIPE_NOTIFIKASI } from "./notifikasi.mjs";

// --- Contoh: menggabungkan default + named import ---
const k = new Kalkulator();
console.log("Hasil hitung (default class):", k.hitung(2, 3, "+"));
console.log("Tambah (named function):", tambah(10, 5));
console.log("Versi (named constant):", versi);

// --- Latihan: notifikasi ---
console.log("\nTipe notifikasi yang tersedia:", TIPE_NOTIFIKASI);
kirimNotifikasi("Modul berhasil dimuat!");
