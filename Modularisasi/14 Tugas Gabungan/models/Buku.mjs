// ============================================================
// models/Buku.mjs
// Model dasar untuk Tugas Gabungan - JANGAN diubah.
// Menggabungkan konsep: default export (materi 04/05)
// ============================================================

export default class Buku {
  constructor(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
    this.tersedia = true;
  }
}
