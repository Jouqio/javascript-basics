# 14. Tugas Gabungan — Sistem Perpustakaan Modular

> Satu proyek kecil yang memaksa kamu memakai **konsep-konsep inti modularisasi dari materi 01–12**: default export, named export, barrel file, module scope & enkapsulasi, dan dynamic import — semuanya dalam satu alur nyata.

Tugasmu hanya di **satu file**: `services/perpustakaan.mjs`. File-file lain (`models/Buku.mjs`, `utils/format.mjs`, `utils/index.mjs`, `laporan.mjs`, `tugas.mjs`) sudah lengkap — **jangan diubah**, tapi pelajari isinya karena masing-masing adalah contoh kerja dari konsep yang sedang kamu terapkan.

Tidak ada kunci jawaban di file ini karena tugas ini dirancang untuk dikerjakan sendiri.

## Struktur Folder

```
14 Tugas Gabungan/
├── models/
│   └── Buku.mjs           <- default export class Buku (JANGAN diubah)
├── services/
│   └── perpustakaan.mjs   <- TUGASMU ADA DI SINI
├── utils/
│   ├── format.mjs         <- named export formatBuku (JANGAN diubah)
│   └── index.mjs          <- barrel file, contoh kerja (JANGAN diubah)
├── laporan.mjs             <- modul opsional untuk dynamic import (JANGAN diubah)
├── tugas.mjs                <- runner, menjalankan semua skenario (JANGAN diubah)
└── Readme.md
```

Perhatikan bagaimana `models/`, `services/`, dan `utils/` sudah dipisah berdasarkan tanggung jawabnya masing-masing (materi 10 — struktur folder modular), dan `utils/index.mjs` adalah barrel file (materi 06) yang mengumpulkan ekspor dari `format.mjs`.

## Requirement

Lengkapi lima fungsi berikut di `services/perpustakaan.mjs`. Tiap fungsi memakai konsep dari materi tertentu — dicantumkan di dalam kurung.

1. **`tambahBuku(judul, penulis)`** *(materi 04/05 – Default Import)*
   Buat instance baru dari class `Buku` (di-import dari `../models/Buku.mjs`), masukkan ke dalam array `koleksi`, lalu kembalikan buku tersebut.

2. **`pinjamBuku(judul)`** *(materi 11 – Module Scope dan Enkapsulasi)*
   Cari buku di `koleksi` berdasarkan `judul` (persis sama). Jika ditemukan **dan** `tersedia === true`, ubah jadi `tersedia = false` lalu kembalikan `true`. Jika tidak ditemukan atau sudah dipinjam, kembalikan `false`.

3. **`kembalikanBuku(judul)`** *(materi 11 – Module Scope dan Enkapsulasi)*
   Kebalikan dari `pinjamBuku` — jika buku ditemukan dan sedang `tersedia === false`, ubah jadi `tersedia = true` lalu kembalikan `true`. Selain itu kembalikan `false`.

4. **`daftarBukuTersedia()`** *(materi 12 – Fungsi Murni)*
   Kembalikan **array baru** berisi semua buku di `koleksi` yang `tersedia === true`. Jangan mengubah array `koleksi` aslinya (gunakan `.filter()`, bukan `.splice()` atau sejenisnya).

5. **`daftarBukuDipinjam()`** *(materi 12 – Fungsi Murni)*
   Kembalikan array baru berisi semua buku yang `tersedia === false`.

**Penting soal variabel `koleksi`:** variabel ini **sengaja tidak diekspor** — inilah penerapan langsung materi 11 (Module Scope dan Enkapsulasi). Module lain (termasuk `tugas.mjs`) hanya boleh mengubah isi `koleksi` lewat kelima fungsi di atas, tidak pernah mengaksesnya secara langsung.

## Kriteria Penilaian (self-check)

- [ ] Variabel `koleksi` tetap privat — tidak ada `export` untuk variabel itu sendiri, hanya untuk fungsi-fungsi yang memanipulasinya.
- [ ] `daftarBukuTersedia()` dan `daftarBukuDipinjam()` tidak mengubah (memutasi) array `koleksi` asli — keduanya harus berupa fungsi murni.
- [ ] `pinjamBuku()` dan `kembalikanBuku()` mengembalikan `false` dengan benar untuk kasus yang tidak valid (buku tidak ada, atau status sudah sesuai).
- [ ] Semua fungsi tetap diekspor dengan nama persis seperti pada kerangka awal (jangan mengubah nama fungsi).
- [ ] `node tugas.mjs` berjalan tanpa error dari awal sampai akhir.

## Cara Menguji

```bash
node tugas.mjs
```

Runner di `tugas.mjs` akan menjalankan lima skenario berurutan: menambah buku, meminjam (termasuk kasus gagal), menampilkan daftar tersedia/dipinjam lewat `formatBuku` dari barrel file, mengembalikan buku, dan terakhir memuat modul laporan secara **dynamic import** (materi 07) untuk mencetak ringkasan koleksi.

## Bantuan

Kalau mentok, baca ulang materi terkait secara berurutan:
`04 ES Modules Dasar` → `05 Named vs Default Export` → `06 Barrel File` → `11 Module Scope dan Enkapsulasi` → `12 Praktik Terbaik`. Semua pola yang dibutuhkan di tugas ini sudah pernah dicontohkan di materi-materi tersebut — tugas ini hanya menggabungkannya dalam satu proyek nyata.

---

[← Kuis Modularisasi](../13%20Kuis%20Modularisasi/Readme.md)
