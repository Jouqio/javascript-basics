// ============================================================
// utils/tanggal.mjs
// ============================================================

export function formatTanggal(tanggal) {
  const opsi = { day: "numeric", month: "long", year: "numeric" };
  return new Date(tanggal).toLocaleDateString("id-ID", opsi);
}
