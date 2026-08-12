// ================================================
// Contoh 1: Synchronous (berurutan, saling menunggu)
// ================================================
console.log("--- Contoh Synchronous ---");
console.log("1. Mulai masak nasi");
console.log("2. Nasi matang");
console.log("3. Mulai makan");

// Perhatikan: hasilnya PASTI urut 1, 2, 3
// karena setiap baris menunggu baris sebelumnya selesai


// ================================================
// Contoh 2: Asynchronous (tidak saling menunggu)
// ================================================
console.log("\n--- Contoh Asynchronous ---");
console.log("1. Pesan makanan di restoran");

// setTimeout mensimulasikan proses yang butuh waktu (misal: memasak)
setTimeout(() => {
  console.log("3. Makanan sudah siap, dipanggil kasir");
}, 2000); // 2000 ms = 2 detik

console.log("2. Sambil menunggu, duduk dan main HP");

// Coba tebak sebelum dijalankan: urutan mana yang muncul duluan?
// Jalankan dengan: node contoh.mjs
//
// Hasilnya:
// 1. Pesan makanan di restoran
// 2. Sambil menunggu, duduk dan main HP
// 3. Makanan sudah siap, dipanggil kasir   <-- muncul PALING TERAKHIR
//
// Padahal "3. Makanan sudah siap" ditulis SEBELUM "2. Sambil menunggu" di kode!
// Ini membuktikan bahwa setTimeout() tidak membuat program berhenti/menunggu.
// Program tetap lanjut ke baris berikutnya, dan kode di dalam setTimeout
// baru dijalankan setelah waktu (2 detik) selesai.
