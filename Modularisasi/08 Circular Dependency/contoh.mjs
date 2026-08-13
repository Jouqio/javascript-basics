// ============================================================
// 08 - Circular Dependency
// ============================================================
// Jalankan dengan: node contoh.mjs

// --- Contoh 1: circular dependency (user.mjs <-> pesanan.mjs) ---
console.log("=== Versi BERMASALAH (circular dependency) ===");
const { tampilkanRingkasan } = await import("./user.mjs");
console.log(tampilkanRingkasan("Syauqi"));
// Coba perhatikan: karena hanya ada 1 arah pemakaian di contoh ini
// hasilnya kebetulan tetap benar, tapi pada kasus yang lebih kompleks
// (fungsi saling memanggil balik saat modul PERTAMA KALI dimuat),
// circular dependency seperti ini sangat rawan menghasilkan undefined.

// --- Contoh 2: versi yang sudah diperbaiki (tanpa circular) ---
console.log("\n=== Versi SUDAH DIPERBAIKI (module ketiga: format.mjs) ===");
const { tampilkanRingkasan: tampilkanRingkasanBenar } = await import("./user-benar.mjs");
console.log(tampilkanRingkasanBenar("Syauqi"));
