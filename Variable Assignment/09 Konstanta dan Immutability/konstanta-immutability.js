// ============================================
// 09. KONSTANTA DAN IMMUTABILITY
// ============================================

// --- 1. const untuk primitif: benar-benar tidak bisa diubah ---
const angka = 10;
try {
  angka = 20; // akan error
} catch (error) {
  console.log("Error mengubah const primitif:", error.message);
}


// --- 2. const untuk array: ISI bisa diubah, tapi tidak bisa diganti seluruhnya ---
const buah = ["Apel", "Jeruk"];
buah.push("Mangga"); // TIDAK error, isi array boleh diubah
console.log("Array setelah push:", buah);

try {
  buah = ["Baru"]; // akan error, karena mengganti SELURUH array
} catch (error) {
  console.log("Error mengganti seluruh const array:", error.message);
}


// --- 3. const untuk object: ISI bisa diubah, tapi tidak bisa diganti seluruhnya ---
const user = { nama: "Budi", umur: 25 };
user.umur = 26; // TIDAK error, isi object boleh diubah
console.log("Object setelah diubah:", user);

try {
  // Perhatikan: variabel "user" sudah const, jadi ini akan error
  eval("user = { nama: 'Lain' };");
} catch (error) {
  console.log("Error mengganti seluruh const object:", error.message);
}


// --- 4. Object.freeze() untuk immutability total ---
const config = Object.freeze({ apiUrl: "https://api.example.com" });

config.apiUrl = "https://lain.com"; // gagal diam-diam (silent fail), tidak error tapi tidak berubah
console.log("Config setelah dicoba diubah (tetap sama):", config.apiUrl);


// --- 5. Object.freeze() hanya shallow (satu tingkat) ---
const configBersarang = Object.freeze({
  server: { url: "https://api.example.com" }
});

configBersarang.server.url = "https://berhasil-diubah.com"; // ini TETAP bisa berubah!
console.log("Nested object tetap bisa berubah:", configBersarang.server.url);


// --- 6. Praktik yang disarankan: const sebagai default ---
const daftarTugas = []; // referensi tidak berubah, tapi isi boleh
daftarTugas.push("Belajar JavaScript");
daftarTugas.push("Selesaikan project");
console.log("Daftar tugas:", daftarTugas);

let jumlahPercobaan = 0; // nilai akan diganti seluruhnya berkali-kali -> pakai let
jumlahPercobaan = jumlahPercobaan + 1;
jumlahPercobaan = jumlahPercobaan + 1;
console.log("Jumlah percobaan:", jumlahPercobaan);


// Coba sendiri:
// Buat const berisi object/array sendiri, lalu coba ubah isinya
// (harusnya berhasil) dan coba ganti seluruh variabelnya (harusnya error).
