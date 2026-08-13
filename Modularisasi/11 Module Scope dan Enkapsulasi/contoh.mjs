// ============================================================
// 11 - Module Scope dan Enkapsulasi
// ============================================================
// Jalankan dengan: node contoh.mjs

import { tambah, ambilNilai } from "./counter.mjs";
import { passwordValid } from "./validasiPassword.mjs";
import { setor, tarik, cekSaldo } from "./bankAccount.mjs";

// --- Contoh 1: module scope otomatis (counter.mjs) ---
console.log("Counter:", tambah(), tambah(), tambah());
console.log("Nilai akhir:", ambilNilai());

// --- Contoh 2: enkapsulasi validasi password ---
console.log("\nPassword 'abc123XY' valid?", passwordValid("abc123XY"));
console.log("Password 'abc' valid?", passwordValid("abc"));

// --- Contoh 3: state privat dengan closure (bankAccount.mjs) ---
console.log("\nSetor 100000:", setor(100000));
console.log("Setor 50000:", setor(50000));
console.log("Tarik 30000:", tarik(30000));
console.log("Saldo akhir:", cekSaldo());

try {
  tarik(999999);
} catch (error) {
  console.log("Error saat tarik berlebihan:", error.message);
}
