// ============================================================
// user.mjs
// SENGAJA circular dengan pesanan.mjs untuk mendemonstrasikan masalahnya
// ============================================================

import { hitungTotalPesanan } from "./pesanan.mjs";

export function tampilkanRingkasan(namaUser) {
  const total = hitungTotalPesanan(namaUser);
  return `${namaUser} - Total belanja: Rp${total}`;
}
