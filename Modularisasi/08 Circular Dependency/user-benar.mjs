// ============================================================
// user-benar.mjs
// Versi yang sudah diperbaiki - hanya bergantung ke pesanan-benar.mjs,
// TIDAK ada arah balik lagi
// ============================================================

import { hitungTotalPesanan } from "./pesanan-benar.mjs";

export function tampilkanRingkasan(namaUser) {
  return `${namaUser} - Total belanja: ${hitungTotalPesanan(namaUser)}`;
}
