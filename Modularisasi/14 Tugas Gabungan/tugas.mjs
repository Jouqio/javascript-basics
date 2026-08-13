// ============================================================
// 14 - Tugas Gabungan: Sistem Perpustakaan Modular
// ============================================================
// File runner ini JANGAN diubah. Tugasmu ada di:
//   -> services/perpustakaan.mjs
// Baca Readme.md di folder ini untuk penjelasan lengkap.
//
// Jalankan dengan: node tugas.mjs

import {
  tambahBuku,
  pinjamBuku,
  kembalikanBuku,
  daftarBukuTersedia,
  daftarBukuDipinjam,
} from "./services/perpustakaan.mjs";
import { formatBuku } from "./utils/index.mjs"; // diimpor lewat barrel file

async function jalankanSemuaSkenario() {
  console.log("=== 1. Tambah Buku ===");
  tambahBuku("Laskar Pelangi", "Andrea Hirata");
  tambahBuku("Bumi Manusia", "Pramoedya Ananta Toer");
  tambahBuku("Negeri 5 Menara", "Ahmad Fuadi");
  console.log("Jumlah buku tersedia setelah ditambah:", (daftarBukuTersedia() ?? []).length);

  console.log("\n=== 2. Pinjam Buku ===");
  console.log("Pinjam 'Bumi Manusia':", pinjamBuku("Bumi Manusia"));
  console.log("Pinjam buku yang tidak ada:", pinjamBuku("Buku Fiktif"));
  console.log("Pinjam 'Bumi Manusia' lagi (harusnya gagal, sudah dipinjam):", pinjamBuku("Bumi Manusia"));

  console.log("\n=== 3. Daftar Buku Tersedia vs Dipinjam ===");
  const tersedia = daftarBukuTersedia() ?? [];
  const dipinjam = daftarBukuDipinjam() ?? [];
  console.log("Tersedia:");
  tersedia.forEach((b) => console.log(" -", formatBuku(b)));
  console.log("Dipinjam:");
  dipinjam.forEach((b) => console.log(" -", formatBuku(b)));

  console.log("\n=== 4. Kembalikan Buku ===");
  console.log("Kembalikan 'Bumi Manusia':", kembalikanBuku("Bumi Manusia"));
  console.log("Jumlah tersedia setelah dikembalikan:", (daftarBukuTersedia() ?? []).length);

  console.log("\n=== 5. Bonus: Dynamic Import untuk Laporan Opsional ===");
  try {
    const modulLaporan = await import("./laporan.mjs");
    const laporan = modulLaporan.buatLaporanKoleksi(
      (daftarBukuTersedia() ?? []).length,
      (daftarBukuDipinjam() ?? []).length
    );
    console.log(laporan);
  } catch (error) {
    console.log("Gagal memuat modul laporan:", error.message);
  }
}

jalankanSemuaSkenario();
