# 04. ES Modules — export dan import Dasar

> Sistem module resmi JavaScript sejak ES6, kini menjadi standar modern baik di browser maupun Node.js.

## Tujuan Pembelajaran

- Memahami apa itu ES Modules dan kenapa menjadi standar modern
- Menggunakan named export dan named import
- Menggunakan default export dan default import

## Apa itu ES Modules?

**ES Modules (ESM)** adalah sistem module **resmi** yang menjadi bagian dari standar bahasa JavaScript sejak ES6 (2015) — berbeda dari CommonJS yang merupakan solusi pihak ketiga khusus Node.js. ES Modules memakai kata kunci `export` dan `import`, dan didukung langsung baik di browser modern maupun Node.js (sejak versi 12+).

**Catatan penting:** contoh di materi ini memakai ekstensi `.mjs` agar Node.js langsung mengenalinya sebagai ES Module. Jalankan dengan `node contoh.mjs`.

## Named Export dan Named Import

**Named export** mengekspor beberapa nilai dari satu file, masing-masing dengan nama tertentu — mirip konsepnya dengan `module.exports = { ... }` di CommonJS, tapi dengan syntax resmi bahasa.

File `matematika.mjs` (lihat file terpisah di folder ini):

```js
// --- matematika.mjs ---
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export const PI = 3.14159;
```

## Mengimpor Named Export

Named import **harus** memakai kurung kurawal `{ }`, dan namanya harus **persis sama** dengan yang diekspor (kecuali di-*rename* dengan `as`).

```js
// --- di file lain ---
import { tambah, kurang, PI } from "./matematika.mjs";

console.log(tambah(2, 3)); // 5
console.log(kurang(5, 2)); // 3
console.log(PI);           // 3.14159

// Rename saat import
import { tambah as jumlahkan } from "./matematika.mjs";
console.log(jumlahkan(10, 5)); // 15
```

## Default Export dan Default Import

**Default export** dipakai saat satu file hanya punya **satu** nilai utama yang diekspor. Berbeda dari named export, default import **tidak** memakai kurung kurawal dan namanya **bebas ditentukan** saat import.

```js
// --- konfigurasi.mjs ---
const konfigurasi = {
  namaAplikasi: "Belajar Modularisasi",
  versi: "1.0.0",
};

export default konfigurasi;

// --- di file lain ---
import config from "./konfigurasi.mjs"; // nama bebas
console.log(config.namaAplikasi);
```

> **Tips:** Satu file boleh punya **satu** default export dan **banyak** named export sekaligus — dibahas lebih detail perbandingannya di materi 05.

## Latihan

Tambahkan named export baru bernama `kali(a, b)` di `matematika.mjs` yang mengembalikan hasil perkalian, lalu import dan gunakan di `contoh.mjs`.

<details>
<summary>Lihat Jawaban</summary>

Tambahkan di `matematika.mjs`:

```js
export function kali(a, b) {
  return a * b;
}
```

Lalu di file lain:

```js
import { kali } from "./matematika.mjs";
console.log(kali(4, 5)); // 20
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [matematika.mjs](./matematika.mjs), [konfigurasi.mjs](./konfigurasi.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← CommonJS — require() dan module.exports](../03 CommonJS - require dan module.exports/Readme.md) | [Named Export vs Default Export →](../05 Named Export vs Default Export/Readme.md)
