// ============================================
// CONTOH: Ilustrasi Masalah Posisi Script
// File ini menjelaskan LOGIC di balik contoh-head-bermasalah.html
// dan contoh-body-benar.html. Buka kedua file .html itu di browser
// (dan cek Console-nya, F12) untuk lihat perbedaannya langsung.
//
// Bagian di bawah ini bisa dijalankan lewat: node contoh.js
// ============================================

console.log("=== Simulasi: Script di HEAD (sebelum body dibaca) ===");
console.log("1. Browser mulai baca <head>");
console.log("2. Browser ketemu <script>, langsung dijalankan");
console.log("3. Script coba akses elemen <p id='output'>... TAPI BELUM ADA!");
console.log("4. Hasilnya: null -> error kalau dipakai .textContent");

console.log(""); // baris kosong pemisah

console.log("=== Simulasi: Script di akhir BODY ===");
console.log("1. Browser baca <head>, lanjut ke <body>");
console.log("2. Semua elemen HTML di <body> selesai dibaca, termasuk <p id='output'>");
console.log("3. Browser baru ketemu <script> di paling akhir");
console.log("4. Script coba akses elemen <p id='output'>... SUDAH ADA, aman!");
