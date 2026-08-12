// ============================================================
// 13 - Kuis Async Await (kode pendukung untuk Soal 1)
// ============================================================
// Jalankan file ini untuk memverifikasi jawabanmu pada Soal 1 di Readme.md

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

// Coba tebak urutannya dulu sebelum menjalankan file ini!
