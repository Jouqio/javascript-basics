# 03. CommonJS — require() dan module.exports

> Sistem module pertama yang menjadi standar de facto di Node.js, memakai require() dan module.exports.

## Tujuan Pembelajaran

- Memahami apa itu CommonJS dan kenapa lahir khusus untuk Node.js
- Mengekspor nilai dengan module.exports
- Mengimpor module dengan require()

## Apa itu CommonJS?

**CommonJS (CJS)** adalah sistem module yang dirancang tahun 2009 khusus untuk Node.js — saat itu, JavaScript di browser belum punya sistem module resmi sama sekali. CommonJS memperkenalkan dua kata kunci utama: **`module.exports`** untuk mengekspor, dan **`require()`** untuk mengimpor.

Sampai sekarang, CommonJS **masih sangat umum** ditemukan di proyek Node.js lama maupun banyak package npm, jadi penting dipahami meski ES Modules (materi 04) adalah standar yang lebih baru.

## module.exports: Mengekspor Nilai

Setiap file CommonJS punya objek `module` bawaan. Apa pun yang ditugaskan (assign) ke `module.exports` adalah nilai yang akan didapat file lain saat meng-import module ini.

File `matematika.cjs` (lihat file terpisah di folder ini):

```js
// --- matematika.cjs ---
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

module.exports = {
  tambah,
  kurang,
};
```

## require(): Mengimpor Module

Untuk memakai module lain, panggil `require("path/ke/file")`. Hasilnya adalah nilai yang tadi ditugaskan ke `module.exports` di file tersebut.

```js
// --- di file lain ---
const matematika = require("./matematika.cjs");

console.log(matematika.tambah(2, 3)); // 5
console.log(matematika.kurang(5, 2)); // 3

// Bisa juga langsung destructuring saat require
const { tambah } = require("./matematika.cjs");
console.log(tambah(10, 5)); // 15
```

> **Tips:** Ekstensi `.cjs` dipakai di materi ini supaya Node.js **selalu** mengenali file sebagai CommonJS, bahkan kalau suatu saat proyekmu diatur untuk memakai ES Modules secara default. Di proyek Node.js biasa (tanpa `"type": "module"` di `package.json`), ekstensi `.js` biasa juga otomatis dianggap CommonJS.

## exports (Shortcut) vs module.exports

Node.js juga menyediakan `exports` sebagai referensi pintasan ke `module.exports`. Bisa dipakai untuk menambah properti satu per satu, tapi **tidak bisa** dipakai untuk mengganti keseluruhan objek ekspor.

```js
// Menambah properti satu per satu - BOLEH
exports.tambah = function (a, b) {
  return a + b;
};
exports.kurang = function (a, b) {
  return a - b;
};

// Mengganti seluruh objek dengan exports = {...} - TIDAK akan bekerja!
// exports = { tambah, kurang }; // ini hanya mengganti variabel lokal, bukan module.exports
// Kalau ingin mengganti seluruh objek ekspor, WAJIB pakai module.exports = {...}
```

> **Tips:** Aturan praktis untuk pemula: **selalu pakai `module.exports`**, bukan `exports`, supaya tidak terjebak perilaku membingungkan di atas.

## Latihan

File `format.cjs` perlu mengekspor dua fungsi: `kapital(teks)` yang mengubah huruf pertama jadi kapital, dan `potong(teks, panjang)` yang memotong teks sepanjang `panjang` karakter. Tulis isi file tersebut memakai `module.exports`.

<details>
<summary>Lihat Jawaban</summary>

```js
// format.cjs
function kapital(teks) {
  return teks.charAt(0).toUpperCase() + teks.slice(1);
}

function potong(teks, panjang) {
  return teks.slice(0, panjang);
}

module.exports = { kapital, potong };
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.cjs`) ada di file [matematika.cjs](./matematika.cjs), [contoh.cjs](./contoh.cjs), [format.cjs](./format.cjs) pada folder ini.

[← Sejarah Modularisasi JavaScript](../02 Sejarah Modularisasi JavaScript/Readme.md) | [ES Modules — export dan import Dasar →](../04 ES Modules - Export dan Import Dasar/Readme.md)
