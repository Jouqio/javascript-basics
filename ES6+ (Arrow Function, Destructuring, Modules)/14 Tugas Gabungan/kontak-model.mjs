// ============================================================
// kontak-model.mjs
// Model dasar untuk Tugas Gabungan - JANGAN diubah.
// Menggabungkan: class (materi 09), module (materi 10),
// default parameter (materi 05), template literal (materi 03)
// ============================================================

export class Kontak {
  constructor(nama, telepon, email = "-") {
    this.nama = nama;
    this.telepon = telepon;
    this.email = email;
  }

  info() {
    return `${this.nama} (${this.telepon}) - ${this.email}`;
  }
}

export default function buatKontak(nama, telepon, email) {
  return new Kontak(nama, telepon, email);
}
