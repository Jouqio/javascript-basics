// ============================================
// CONTOH: async vs defer (ringkasan konsep)
// Bukti visualnya ada di 3 file .html (normal/async/defer) --
// buka satu-satu di browser dan cek Console (F12).
//
// Bagian di bawah ini bisa dijalankan lewat: node contoh.js
// ============================================

console.log("=== Tanpa atribut (normal) ===");
console.log("Urutan: baca HTML sampai <script> -> download -> jalankan -> lanjut baca HTML");

console.log("");
console.log("=== async ===");
console.log("Urutan: baca HTML + download bersamaan -> begitu download kelar, LANGSUNG dijalankan (motong proses baca HTML)");

console.log("");
console.log("=== defer ===");
console.log("Urutan: baca HTML + download bersamaan -> baca HTML sampai kelar SEMUA -> baru dijalankan, urut sesuai tag");
