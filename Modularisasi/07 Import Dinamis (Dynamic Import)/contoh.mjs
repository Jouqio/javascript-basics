// ============================================================
// 07 - Import Dinamis (Dynamic Import)
// ============================================================
// Jalankan dengan: node contoh.mjs

// --- Contoh 1: dynamic import dasar ---
async function muatFiturSaatDibutuhkan() {
  console.log("Sebelum modul dimuat...");
  const modul = await import("./fitur-berat.mjs");
  console.log("Modul berhasil dimuat!");
  modul.fiturBerat();
}
await muatFiturSaatDibutuhkan();

// --- Contoh 2: conditional loading berdasarkan kondisi ---
async function muatBerdasarkanBahasa(kodeBahasa) {
  let modul;
  if (kodeBahasa === "id") {
    modul = await import("./bahasa/indonesia.mjs");
  } else {
    modul = await import("./bahasa/inggris.mjs");
  }
  console.log(modul.sapaan);
}
console.log("\nSapaan berdasarkan bahasa:");
await muatBerdasarkanBahasa("id");
await muatBerdasarkanBahasa("en");

// --- Latihan: muatModulOpsional dengan error handling ---
async function muatModulOpsional(namaFitur) {
  try {
    const modul = await import(`./fitur/${namaFitur}.mjs`);
    return modul;
  } catch (error) {
    console.log("Fitur tidak tersedia:", namaFitur);
    return null;
  }
}

console.log("\nMemuat fitur yang ada:");
const laporan = await muatModulOpsional("laporan");
console.log(laporan?.buatLaporan());

console.log("\nMemuat fitur yang TIDAK ada:");
await muatModulOpsional("fitur-tidak-ada");
