// ============================================================
// 12 - Optional Chaining (?.) dan Nullish Coalescing (??)
// ============================================================

// --- Contoh 1: optional chaining ---
const user = { nama: "Syauqi" };
console.log("alamat.kota:", user?.alamat?.kota);
console.log("nama:", user?.nama);

const obj = {};
console.log("metode tidak ada:", obj.metodeTidakAda?.());

const daftar = null;
console.log("elemen array:", daftar?.[0]);

// --- Contoh 2: nullish coalescing vs OR ---
const kuotaOR = 0 || 10;
console.log("0 || 10:", kuotaOR); // 10 (salah secara logika di kasus ini)

const kuotaNullish = 0 ?? 10;
console.log("0 ?? 10:", kuotaNullish); // 0 (benar)

const namaOR = "" || "Tamu";
console.log('"" || "Tamu":', namaOR);

const namaNullish = "" ?? "Tamu";
console.log('"" ?? "Tamu":', namaNullish);

// --- Contoh 3: menggabungkan optional chaining + nullish coalescing ---
const konfigurasi = {
  tampilan: {
    tema: "gelap",
  },
};
const tema = konfigurasi?.tampilan?.tema ?? "terang";
console.log("Tema:", tema);

const bahasa = konfigurasi?.tampilan?.bahasa ?? "id";
console.log("Bahasa:", bahasa);

// --- Latihan: email ---
const data = { pengguna: { nama: "Syauqi" } };
const email = data?.pengguna?.email ?? "tidak ada email";
console.log("Email:", email);
