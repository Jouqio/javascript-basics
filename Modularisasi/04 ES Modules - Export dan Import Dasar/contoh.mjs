// ============================================================
// 04 - ES Modules: export dan import Dasar
// ============================================================
// Jalankan dengan: node contoh.mjs

import { tambah, kurang, kali, PI } from "./matematika.mjs";
import { tambah as jumlahkan } from "./matematika.mjs";
import konfigurasi from "./konfigurasi.mjs";

// --- Contoh 1: named import ---
console.log("Tambah:", tambah(2, 3));
console.log("Kurang:", kurang(5, 2));
console.log("PI:", PI);

// --- Contoh 2: rename saat import ---
console.log("Jumlahkan (rename):", jumlahkan(10, 5));

// --- Contoh 3: default import ---
console.log("Nama aplikasi:", konfigurasi.namaAplikasi);
console.log("Versi:", konfigurasi.versi);

// --- Latihan: kali() ---
console.log("Kali:", kali(4, 5));
