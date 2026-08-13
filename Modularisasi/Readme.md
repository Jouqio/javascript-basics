# Modularisasi — Materi Pembelajaran JavaScript

Kumpulan materi untuk mempelajari **modularisasi kode di JavaScript** — cara memecah program menjadi bagian-bagian kecil yang rapi dan bisa dipakai ulang, dari sejarahnya (IIFE), dua sistem module resmi (CommonJS dan ES Modules), sampai praktik terbaik menyusun proyek besar. Disusun dalam 13 topik berurutan ditambah satu tugas gabungan. Materi ditulis khusus untuk **pemula**, dimulai dari masalah yang diselesaikan modularisasi sebelum masuk ke syntax.

Setiap topik ada di folder tersendiri berisi:
- **`Readme.md`** — penjelasan konsep, tujuan pembelajaran, tips/peringatan, dan latihan (dengan jawaban yang bisa dibuka/tutup).
- **File kode** (`contoh.js`, `contoh.mjs`, atau `contoh.cjs`, tergantung topik) — semua contoh kode topik tersebut, siap dijalankan langsung lewat `node`.

## Daftar Materi

| # | Folder | Fokus |
|---|--------|-------|
| 01 | [Pengantar Modularisasi](./01%20Pengantar%20Modularisasi/Readme.md) | Masalah tanpa modularisasi, apa itu module |
| 02 | [Sejarah Modularisasi JavaScript](./02%20Sejarah%20Modularisasi%20JavaScript/Readme.md) | IIFE, Module Pattern (era sebelum module resmi) |
| 03 | [CommonJS](./03%20CommonJS%20-%20require%20dan%20module.exports/Readme.md) | require() dan module.exports (Node.js) |
| 04 | [ES Modules Dasar](./04%20ES%20Modules%20-%20Export%20dan%20Import%20Dasar/Readme.md) | export/import, named & default |
| 05 | [Named vs Default Export](./05%20Named%20Export%20vs%20Default%20Export/Readme.md) | Kapan pakai yang mana |
| 06 | [Re-export dan Barrel File](./06%20Re-export%20dan%20Barrel%20File/Readme.md) | index.mjs sebagai pintu masuk |
| 07 | [Import Dinamis](./07%20Import%20Dinamis%20(Dynamic%20Import)/Readme.md) | import() sebagai Promise, code splitting |
| 08 | [Circular Dependency](./08%20Circular%20Dependency/Readme.md) | Masalah ketergantungan melingkar & solusinya |
| 09 | [CommonJS vs ES Modules](./09%20CommonJS%20vs%20ES%20Modules/Readme.md) | Perbandingan & interoperability |
| 10 | [Struktur Folder Modular](./10%20Mengatur%20Struktur%20Folder%20Modular/Readme.md) | group by type vs group by feature |
| 11 | [Module Scope dan Enkapsulasi](./11%20Module%20Scope%20dan%20Enkapsulasi/Readme.md) | Variabel privat, state tersembunyi |
| 12 | [Praktik Terbaik Modularisasi](./12%20Praktik%20Terbaik%20Modularisasi/Readme.md) | Single Responsibility, efek samping, testability |
| 13 | [Kuis Modularisasi](./13%20Kuis%20Modularisasi/Readme.md) | 6 soal untuk menguji pemahaman |
| 14 | [Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md) | Proyek Sistem Perpustakaan Modular |

## Cara Belajar

1. Ikuti urutan folder `01` → `14`, karena materi saling berkaitan (misalnya materi 08 Circular Dependency memakai ulang contoh dari materi sebelumnya).
2. Baca `Readme.md` di tiap folder untuk penjelasan konsepnya.
3. Buka terminal di folder yang sama, lalu jalankan file utamanya sesuai yang tertulis di akhir tiap `Readme.md` — perhatikan ekstensinya:
   - **`.js`** — untuk materi yang tidak memakai `import`/`export` (01, 02, 10, 12, 13). Jalankan: `node contoh.js`
   - **`.mjs`** — untuk materi yang memakai ES Modules (04–09, 11). Jalankan: `node contoh.mjs`
   - **`.cjs`** — khusus materi 03 (CommonJS). Jalankan: `node contoh.cjs`
4. Kerjakan bagian **Latihan** di akhir tiap `Readme.md` sebelum membuka jawabannya.
5. Setelah materi 13 (kuis), kerjakan **[14 Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md)** — proyek "Sistem Perpustakaan Modular" yang memaksa kamu memakai default/named export, barrel file, module scope & enkapsulasi, dan dynamic import dalam satu proyek nyata. Hanya satu file yang perlu diisi (`services/perpustakaan.mjs`), dengan TODO dan tanpa kunci jawaban — dikerjakan mandiri.

## Prasyarat

Materi ini mengasumsikan pembaca sudah familiar dengan **dasar JavaScript** (variabel, fungsi, array, objek, class) dan idealnya sudah pernah menyentuh **Promise/async-await** (dibutuhkan untuk memahami materi 07 Dynamic Import). Untuk menjalankan semua file, dibutuhkan [Node.js](https://nodejs.org) terpasang di komputer (cek dengan `node --version`) — tidak butuh koneksi internet sama sekali, semua contoh berjalan sepenuhnya secara lokal.

## Struktur Proyek

```
Modularisasi/
├── 01 Pengantar Modularisasi/
│   ├── Readme.md
│   └── contoh.js
├── 02 Sejarah Modularisasi JavaScript/
│   ├── Readme.md
│   └── contoh.js
├── 03 CommonJS - require dan module.exports/
│   ├── Readme.md
│   ├── contoh.cjs
│   ├── matematika.cjs
│   └── format.cjs
├── 06 Re-export dan Barrel File/
│   ├── Readme.md
│   ├── contoh.mjs
│   ├── utils/            <- named export + barrel file (index.mjs)
│   └── bentuk/            <- latihan barrel file
├── ...
├── 14 Tugas Gabungan/
│   ├── models/Buku.mjs
│   ├── services/perpustakaan.mjs   <- TODO, isi tugasmu di sini
│   ├── utils/
│   ├── laporan.mjs
│   ├── tugas.mjs
│   └── Readme.md
└── Readme.md
```

## Catatan Teknis

- Seluruh contoh kode adalah **JavaScript murni (vanilla)**, tanpa dependensi eksternal, tidak butuh `npm install` apa pun.
- Beberapa materi (03, 06, 08, 09, 11, 14) memakai **lebih dari satu file** dalam satu folder untuk mendemonstrasikan hubungan antar module secara nyata — semuanya sudah dijalankan dan diverifikasi bebas error.
- Materi 08 (Circular Dependency) sengaja menyertakan **dua versi**: versi bermasalah (`user.mjs` + `pesanan.mjs`) dan versi yang sudah diperbaiki (`user-benar.mjs` + `pesanan-benar.mjs` + `format.mjs`) — bandingkan keduanya untuk memahami solusinya.
- File `14 Tugas Gabungan/services/perpustakaan.mjs` sengaja dibiarkan berupa kerangka (TODO) — runner (`tugas.mjs`) tetap bisa dijalankan tanpa error meski fungsi belum diisi, sehingga kamu bisa mengisi satu per satu sambil melihat hasilnya berubah.
