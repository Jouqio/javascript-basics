// ============================================================
// services/perpustakaan.mjs
// Baca Readme.md di folder ini untuk penjelasan lengkap tiap requirement.
// Lengkapi setiap fungsi di bawah ini sesuai TODO masing-masing.
// Jangan ubah nama fungsi yang sudah diekspor, agar tugas.mjs
// tetap bisa memanggilnya.
// ============================================================

import Buku from "../models/Buku.mjs";

// State privat - TIDAK diekspor, hanya bisa diubah lewat fungsi
// di bawah ini (materi 11 - Module Scope dan Enkapsulasi).
let koleksi = [];

// ------------------------------------------------------------
// 1. tambahBuku(judul, penulis)  -> materi 04/05 (default import Buku)
// ------------------------------------------------------------
// TODO: Buat instance baru dari class Buku (judul, penulis),
// masukkan ke dalam array `koleksi`, lalu kembalikan buku tersebut.
export function tambahBuku(judul, penulis) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 2. pinjamBuku(judul)  -> materi 11 (Module Scope dan Enkapsulasi)
// ------------------------------------------------------------
// TODO: Cari buku di `koleksi` berdasarkan judul (persis sama).
// Jika ditemukan DAN tersedia === true, set tersedia = false lalu
// kembalikan true. Jika tidak ditemukan atau sudah dipinjam,
// kembalikan false. INGAT: koleksi hanya boleh diubah lewat fungsi
// ini dan kembalikanBuku() di bawah, tidak diekspor langsung.
export function pinjamBuku(judul) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 3. kembalikanBuku(judul)  -> materi 11 (Module Scope dan Enkapsulasi)
// ------------------------------------------------------------
// TODO: Kebalikan dari pinjamBuku - cari buku berdasarkan judul,
// jika ditemukan dan sedang tersedia === false, set tersedia = true
// lalu kembalikan true. Selain itu kembalikan false.
export function kembalikanBuku(judul) {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 4. daftarBukuTersedia()  -> materi 12 (fungsi murni, mudah diuji)
// ------------------------------------------------------------
// TODO: Kembalikan array baru berisi semua buku di `koleksi`
// yang tersedia === true. Jangan mengubah array koleksi aslinya.
export function daftarBukuTersedia() {
  // TODO: implementasikan
}

// ------------------------------------------------------------
// 5. daftarBukuDipinjam()  -> materi 12 (fungsi murni, mudah diuji)
// ------------------------------------------------------------
// TODO: Kembalikan array baru berisi semua buku di `koleksi`
// yang tersedia === false.
export function daftarBukuDipinjam() {
  // TODO: implementasikan
}
