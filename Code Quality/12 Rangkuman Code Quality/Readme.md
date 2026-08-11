# 12. Rangkuman Code Quality

## Peta Konsep Keseluruhan Materi

```
CODE QUALITY
│
├── 1. Pengantar Code Quality
│     └── Correctness, Readability, Consistency, Maintainability
│
├── 2. Type System dalam JavaScript
│     └── Dynamically & Weakly Typed, Type Coercion, === vs ==
│
├── PEMAHAMAN & PENGECEKAN TIPE
│   ├── 3. JSDoc (dokumentasi + tipe via komentar)
│   ├── 4. Flow (static type checker via anotasi kode)
│   └── 5. TypeScript (superset JS dengan static typing penuh)
│
├── KONSISTENSI GAYA KODE
│   ├── 6. Style Guide (aturan penulisan: Airbnb, Google, StandardJS)
│   └── 7. Linter (ESLint) & Formatter (Prettier) — penegakan otomatis
│
└── PENGUJIAN (TESTING)
    ├── 8. Pengujian Program (Unit, Integration, E2E, AAA Pattern)
    ├── 9. Testing dalam Node.js (node:test, Jest)
    ├── 10. Testing dalam Bun (bun:test)
    └── 11. Strategi Terbaik Susun Testing (Piramida, FIRST, Mocking, CI/CD)
```

## Ringkasan Tiap Bab

### 1. Pengantar Code Quality
Code Quality mengukur kode dari sisi kebenaran, keterbacaan, konsistensi, kemudahan dipelihara, performa, dan keamanan.

### 2. Type System dalam JavaScript
JavaScript bersifat *dynamically & weakly typed*, sehingga rawan *type coercion*. Gunakan `===`/`!==` untuk keamanan perbandingan.

### 3. JSDoc
Menambahkan tipe & dokumentasi lewat komentar `/** */` tanpa mengubah `.js` menjadi bahasa lain. Bisa diaktifkan type-checking-nya dengan `// @ts-check`.

### 4. Flow
Static type checker dengan anotasi tipe langsung di kode (`// @flow`), butuh Babel untuk menghapus anotasi sebelum dijalankan. Popularitasnya kini menurun.

### 5. TypeScript
Superset JavaScript dengan static typing penuh (interface, generic, enum). Dikompilasi (`tsc`) menjadi JavaScript murni. Standar industri saat ini.

### 6. Style Guide
Kesepakatan aturan penulisan kode (penamaan, indentasi, tanda kutip, dll.), contohnya Airbnb, Google, StandardJS.

### 7. Code Convention dengan Linter
**ESLint** menegakkan aturan & mendeteksi bug potensial; **Prettier** merapikan format. Dikombinasikan dengan **Husky + lint-staged** agar berjalan otomatis sebelum commit.

### 8. Pengujian Program
Testing memastikan kode benar secara fungsi. Tiga jenis utama: **Unit**, **Integration**, **E2E**, dengan pola penulisan **Arrange–Act–Assert**.

### 9. Testing dalam Node.js
Bisa memakai modul bawaan `node:test` (tanpa instalasi) atau **Jest** (lebih lengkap fiturnya, populer di industri).

### 10. Testing dalam Bun
Bun punya test runner bawaan `bun:test` dengan API mirip Jest, sangat cepat, dan mendukung TypeScript secara native tanpa konfigurasi tambahan.

### 11. Strategi Terbaik Susun Testing
Ikuti **piramida testing**, prinsip **FIRST**, uji perilaku bukan detail implementasi, uji kasus normal/batas/error, dan otomatiskan lewat **CI/CD**.

## Alur Kerja Ideal dalam Proyek Nyata

```
1. Tulis kode dengan tipe yang jelas (JSDoc / TypeScript)
        ↓
2. Jalankan Linter (ESLint) + Formatter (Prettier)
        ↓
3. Tulis Unit Test untuk logika penting (Jest / node:test / bun:test)
        ↓
4. Jalankan test otomatis di CI/CD sebelum merge ke branch utama
        ↓
5. Review kode oleh tim (code review) sebelum deploy
```

## Checklist Code Quality Sebelum Merge/Deploy

- [ ] Kode sudah diberi tipe (JSDoc/TypeScript) untuk fungsi-fungsi penting.
- [ ] Tidak ada error/warning dari Linter.
- [ ] Format kode sudah konsisten (Prettier).
- [ ] Ada unit test untuk logika inti, dengan skenario normal, batas, dan error.
- [ ] Semua test lulus (`pass`) sebelum digabungkan.
- [ ] Kode sudah direview oleh rekan tim (jika bekerja dalam tim).

## Poin Penting

Code Quality bukan satu alat tunggal, melainkan **kombinasi kebiasaan dan alat bantu**: pemahaman tipe data yang baik, dokumentasi yang jelas, konsistensi gaya lewat linter, dan pengujian yang menyeluruh. Semua ini bekerja sama untuk menghasilkan kode yang **benar, mudah dibaca, dan mudah dipelihara** dalam jangka panjang.

Selanjutnya, uji pemahamanmu lewat **Kuis: Code Quality** di bab terakhir!

---
⬅️ [11. Strategi Terbaik Susun Testing](11-strategi-terbaik-susun-testing.md) | ➡️ [13. Kuis: Code Quality](13-kuis-code-quality.md)