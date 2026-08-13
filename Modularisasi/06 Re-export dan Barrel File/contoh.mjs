// ============================================================
// 06 - Re-export dan Barrel File
// ============================================================
// Jalankan dengan: node contoh.mjs

import { formatRupiah, validasiEmail, formatTanggal } from "./utils/index.mjs";

// --- Contoh: impor rapi lewat barrel file utils/index.mjs ---
console.log("Format Rupiah:", formatRupiah(150000));
console.log("Validasi email valid:", validasiEmail("syauqi@mail.com"));
console.log("Validasi email invalid:", validasiEmail("bukan-email"));
console.log("Format tanggal:", formatTanggal("2026-08-13"));

// --- Latihan: barrel file bentuk/index.mjs ---
import { luasLingkaran, luasPersegi, luasSegitiga } from "./bentuk/index.mjs";

console.log("\nLuas lingkaran (r=7):", luasLingkaran(7).toFixed(2));
console.log("Luas persegi (sisi=5):", luasPersegi(5));
console.log("Luas segitiga (alas=6, tinggi=4):", luasSegitiga(6, 4));
