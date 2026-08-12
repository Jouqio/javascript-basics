// ============================================================
// 04 - JavaScript setTimeout()
// ============================================================

// --- Contoh 1: argumen tambahan pada setTimeout ---
function tampilkanPesan(nama) {
  console.log(nama + ", waktunya istirahat!");
}
setTimeout(tampilkanPesan, 3000, "Syauqi");

// --- Contoh 2: arrow function ---
setTimeout(() => {
  console.log("3 detik telah berlalu");
}, 3000);

// --- Contoh 3: delay bukan waktu pasti ---
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Output: A, C, B

// --- Latihan: pesanan diproses lalu dikirim ---
console.log("Pesanan diterima");
setTimeout(() => {
  console.log("Pesanan diproses");
}, 2000);
setTimeout(() => {
  console.log("Pesanan dikirim");
}, 4000);
