// ============================================
// CONTOH: Internal JavaScript (versi standalone)
// File ini cuma buat referensi logic-nya. Internal JS
// SEBENARNYA ditulis di dalam tag <script> pada file HTML.
// Buka contoh.html di browser untuk lihat versi aslinya.
// ============================================

console.log("Script internal dimulai");

let nama = "Pelajar";
console.log("Halo, " + nama + "! Ini ditulis dari script internal.");

// Bagian ini bisa dijalankan langsung lewat: node contoh.js
// (karena bagian ini cuma pakai console.log, bukan document.*)
//
// Bandingkan dengan contoh.html: di sana ada baris tambahan yang
// mengubah teks di halaman lewat document.getElementById(), yang
// HANYA bisa jalan di browser karena butuh DOM (struktur halaman).
