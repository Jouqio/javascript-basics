// ============================================================
// utils/format.mjs
// JANGAN diubah. Contoh named export (materi 04) sederhana
// untuk memformat tampilan data buku.
// ============================================================

export function formatBuku(buku) {
  return `"${buku.judul}" oleh ${buku.penulis} - ${buku.tersedia ? "Tersedia" : "Dipinjam"}`;
}
