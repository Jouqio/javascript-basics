// ============================================================
// format.mjs
// Module ketiga - solusi menghindari circular dependency
// ============================================================

export function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}
