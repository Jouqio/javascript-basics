// ============================================================
// pesanan.mjs
// SENGAJA circular dengan user.mjs untuk mendemonstrasikan masalahnya
// ============================================================

import { tampilkanRingkasan } from "./user.mjs";

export function hitungTotalPesanan(namaUser) {
  return 150000; // simulasi
}

export function cetakStruk(namaUser) {
  return tampilkanRingkasan(namaUser);
}
