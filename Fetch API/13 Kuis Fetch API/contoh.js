// ============================================================
// 13 - Kuis Fetch API
// ============================================================
// File ini tidak memerlukan koneksi internet - berisi ringkasan
// konsep yang diuji di Readme.md.

console.log("Ringkasan konsep yang diuji di kuis ini:");
console.log("1. fetch() selalu mengembalikan Promise (bukan data langsung)");
console.log("2. response.ok perlu dicek manual untuk status HTTP gagal");
console.log("3. body pada POST wajib diproses JSON.stringify()");
console.log("4. Promise.all() menjalankan fetch secara paralel");
console.log("5. AbortController membatalkan fetch dengan error bernama AbortError");
console.log("6. clearTimeout() wajib dipanggil di finally pada pola fetch+timeout");

console.log("\nBuka Readme.md di folder ini untuk mengerjakan 6 soalnya!");
