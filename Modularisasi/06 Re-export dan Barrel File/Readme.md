# 06. Re-export dan Barrel File

> Menggabungkan banyak module kecil lewat satu file 'pintu masuk' agar impor di tempat lain jadi lebih rapi.

## Tujuan Pembelajaran

- Memahami apa itu barrel file (index.js/index.mjs sebagai pintu masuk)
- Melakukan re-export dari beberapa module sekaligus
- Mengetahui kapan barrel file membantu, kapan justru merepotkan

## Masalah: Import Berantakan dari Banyak File

Bayangkan folder `utils/` berisi banyak file kecil: `format.mjs`, `validasi.mjs`, `tanggal.mjs`. Tanpa barrel file, kode yang memakainya harus mengimpor satu-satu dari path yang berbeda-beda.

```js
// Tanpa barrel file - berantakan, harus tahu struktur folder detail
import { formatRupiah } from "./utils/format.mjs";
import { validasiEmail } from "./utils/validasi.mjs";
import { formatTanggal } from "./utils/tanggal.mjs";
```

## Solusi: Barrel File (index.mjs)

**Barrel file** adalah satu file (biasa dinamai `index.mjs` atau `index.js`) yang tugasnya **hanya** mengumpulkan dan meng-*ekspor ulang* (re-export) isi dari file-file lain dalam folder yang sama — menjadi satu "pintu masuk" tunggal.

```js
// --- utils/index.mjs (barrel file) ---
export { formatRupiah } from "./format.mjs";
export { validasiEmail } from "./validasi.mjs";
export { formatTanggal } from "./tanggal.mjs";

// --- di file lain, sekarang jadi jauh lebih rapi ---
import { formatRupiah, validasiEmail, formatTanggal } from "./utils/index.mjs";

// Bahkan bisa dipersingkat lagi karena Node.js otomatis mencari index.mjs
// di dalam folder jika path yang di-import adalah folder:
import { formatRupiah, validasiEmail, formatTanggal } from "./utils/";
```

## Re-export Semua Sekaligus dengan *

Kalau ingin meng-ekspor ulang **semua** named export dari sebuah file tanpa menuliskannya satu per satu, pakai `export * from`.

```js
// --- utils/index.mjs versi lebih ringkas ---
export * from "./format.mjs";
export * from "./validasi.mjs";
export * from "./tanggal.mjs";
```

> **Perhatian:** `export * from` hanya meng-ekspor ulang **named export**, bukan default export. Kalau salah satu file punya default export yang juga ingin diteruskan, harus ditulis eksplisit: `export { default as NamaBaru } from "./file.mjs"`.

## Kapan Barrel File Membantu, Kapan Merepotkan

Barrel file sangat membantu untuk folder berisi **banyak fungsi utilitas kecil yang saling terkait** (seperti contoh `utils/` di atas). Tapi untuk proyek sangat besar, barrel file kadang membuat proses build lebih lambat (karena semua file ikut ter-*load* meski cuma butuh satu fungsi kecil) dan bisa memicu masalah **circular dependency** (dibahas di materi 08) jika dipakai sembarangan antar modul yang saling bergantung.

> **Tips:** Aturan praktis: pakai barrel file untuk folder utilitas/helper yang stabil dan sering dipakai bersamaan. Untuk module besar yang jarang dipakai penuh sekaligus, pertimbangkan impor langsung dari file aslinya.

## Latihan

Folder `bentuk/` berisi tiga file: `lingkaran.mjs` (named export `luasLingkaran`), `persegi.mjs` (named export `luasPersegi`), `segitiga.mjs` (named export `luasSegitiga`). Tulis isi `bentuk/index.mjs` sebagai barrel file yang meng-ekspor ulang ketiganya memakai `export * from`.

<details>
<summary>Lihat Jawaban</summary>

```js
// bentuk/index.mjs
export * from "./lingkaran.mjs";
export * from "./persegi.mjs";
export * from "./segitiga.mjs";
```

Dipakai dengan:

```js
import { luasLingkaran, luasPersegi, luasSegitiga } from "./bentuk/index.mjs";
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [utils/format.mjs](./utils/format.mjs), [utils/validasi.mjs](./utils/validasi.mjs), [utils/tanggal.mjs](./utils/tanggal.mjs), [utils/index.mjs](./utils/index.mjs), [bentuk/lingkaran.mjs](./bentuk/lingkaran.mjs), [bentuk/persegi.mjs](./bentuk/persegi.mjs), [bentuk/segitiga.mjs](./bentuk/segitiga.mjs), [bentuk/index.mjs](./bentuk/index.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← Named Export vs Default Export](../05 Named Export vs Default Export/Readme.md) | [Import Dinamis (Dynamic Import) →](../07 Import Dinamis (Dynamic Import)/Readme.md)
