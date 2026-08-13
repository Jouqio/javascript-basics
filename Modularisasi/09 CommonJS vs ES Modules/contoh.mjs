// ============================================================
// 09 - CommonJS vs ES Modules
// ============================================================
// File ini sendiri adalah ES Module (.mjs), dan mendemonstrasikan
// cara ES Module memuat file CommonJS.
// Jalankan dengan: node contoh.mjs

// --- Contoh: ES Module mengimpor CommonJS ---
// (matematika.cjs dipakai lagi dari materi 03, disalin ke folder ini)
import matematika from "./matematika.cjs";
console.log("Mengimpor CommonJS dari ES Module:");
console.log("Tambah:", matematika.tambah(2, 3));

// --- Contoh: dynamic import (cara CommonJS SEHARUSNYA memuat ES Module) ---
async function contohDynamicImport() {
  const modul = await import("./file-esm.mjs");
  console.log("\nMemuat ES Module lewat dynamic import:");
  console.log("Default export:", modul.default);
  console.log("Named export:", modul.pesan);
}
await contohDynamicImport();
