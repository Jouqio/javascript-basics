// ================================================
// Contoh 1: Urutan Eksekusi - Synchronous vs Microtask vs Macrotask
// ================================================
console.log("--- Contoh 1 ---");
console.log("A (synchronous)");

setTimeout(() => console.log("B (macrotask - setTimeout)"), 0);

Promise.resolve().then(() => console.log("C (microtask - promise)"));

console.log("D (synchronous)");

// Coba tebak urutannya SEBELUM menjalankan kode ini!
// Jawaban di akhir file ini.


// ================================================
// Contoh 2: Beberapa microtask vs macrotask
// ================================================
setTimeout(() => {
  console.log("\n--- Contoh 2 ---");
  console.log("1. Mulai contoh 2");

  setTimeout(() => console.log("4. macrotask kedua (setTimeout)"), 0);

  Promise.resolve()
    .then(() => console.log("2. microtask pertama"))
    .then(() => console.log("3. microtask kedua (chaining tetap microtask)"));

  console.log("1.5 masih synchronous, dijalankan sebelum semua di atas");
}, 500);


// ================================================
// Contoh 3: async/await juga memakai microtask queue
// ================================================
setTimeout(async () => {
  console.log("\n--- Contoh 3 ---");
  console.log("Mulai");

  async function tunggu() {
    console.log("Sebelum await");
    await null; // walaupun langsung selesai, tetap masuk microtask queue
    console.log("Setelah await (ini adalah microtask)");
  }

  tunggu();
  console.log("Ini dijalankan SEBELUM 'Setelah await' walau ditulis SETELAHNYA");
}, 1000);


// ================================================
// PENJELASAN URUTAN CONTOH 1:
// ================================================
// Urutan output yang benar: A, D, C, B
//
// 1. "A" -> synchronous, langsung tercetak
// 2. setTimeout(B) -> didaftarkan ke Web/Node API, B masuk macrotask queue
//    (walau delay-nya 0ms, TETAP harus antre, tidak langsung jalan)
// 3. Promise.resolve().then(C) -> C masuk microtask queue
// 4. "D" -> synchronous, langsung tercetak (call stack masih ada kode ini)
// 5. Call stack sekarang KOSONG (semua kode synchronous sudah selesai)
// 6. Event loop cek microtask queue dulu -> jalankan "C"
// 7. Microtask queue sudah kosong, baru event loop ambil dari macrotask queue -> jalankan "B"
//
// Hasil akhir: A, D, C, B
