// ============================================================
// 01 - Pengantar Asynchronous JavaScript
// ============================================================

// --- Contoh 1: kode synchronous ---
console.log("Satu");
console.log("Dua");
console.log("Tiga");

// --- Contoh 2: kode asynchronous ---
console.log("Mulai");

setTimeout(() => {
  console.log("Selesai menunggu 2 detik");
}, 2000);

console.log("Lanjut tanpa menunggu");

// --- Latihan: tebak dulu urutan outputnya sebelum menjalankan ---
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
