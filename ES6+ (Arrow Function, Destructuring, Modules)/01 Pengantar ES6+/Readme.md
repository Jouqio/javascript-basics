# 01. Pengantar ES6+

> Apa itu ES6+, kenapa penting dipelajari, dan bagaimana cara mencobanya.

## Tujuan Pembelajaran

- Memahami apa itu ECMAScript dan ES6
- Mengetahui fitur-fitur utama yang dibawa ES6 dan versi setelahnya
- Bisa menjalankan kode ES6+ di Node.js maupun browser

## Apa itu ECMAScript dan ES6?

**ECMAScript (ES)** adalah standar resmi yang menjadi dasar bahasa JavaScript. **ES6**, juga disebut **ES2015**, adalah pembaruan besar standar ini yang dirilis tahun 2015 — pembaruan paling signifikan sejak JavaScript pertama kali dibuat.

Setelah ES6, standar ini diperbarui **setiap tahun** (ES2016, ES2017, dst). Karena itu istilah **ES6+** dipakai untuk merujuk ke semua fitur modern JavaScript sejak ES6 sampai versi terbaru — bukan cuma ES6 itu sendiri.

## Kenapa ES6+ Penting?

Sebelum ES6, banyak hal sederhana di JavaScript terasa berbelit — mendeklarasikan variabel, menulis fungsi, atau bekerja dengan objek. ES6+ membawa syntax yang **lebih singkat, lebih aman, dan lebih mudah dibaca**.

- **Sebelum ES6**: `var`, function biasa, penggabungan string pakai `+`.
- **Sejak ES6**: `let`/`const`, arrow function, template literal, destructuring, class, module, dan banyak lagi.

Hampir semua kode JavaScript modern — termasuk React, Vue, Node.js — ditulis dengan syntax ES6+. Menguasainya adalah syarat wajib sebelum lanjut ke framework apa pun.

## Cara Mencoba Kode ES6+

Ada dua cara paling praktis untuk mencoba semua contoh di materi ini:

1. **Node.js** — install dari [nodejs.org](https://nodejs.org), lalu jalankan file dengan `node namafile.js` dari terminal.
2. **Console browser** — tekan `F12` di Chrome/Firefox, buka tab *Console*, lalu ketik/tempel kode langsung di sana.

Semua `contoh.js` di paket materi ini sudah diuji berjalan lewat Node.js, jadi kamu tinggal `node contoh.js` di tiap folder.

```js
// Cek versi Node.js kamu lewat terminal:
// node --version

// Contoh kecil fitur ES6+ untuk pemanasan:
const nama = "Syauqi";
const sapa = (nama) => `Halo, ${nama}! Selamat belajar ES6+.`;

console.log(sapa(nama));
```

> **Tips:** Materi 02–12 akan membahas fitur-fitur di atas satu per satu dari yang paling dasar, dimulai dari `let` dan `const` di materi berikutnya.

## Latihan

Sebutkan dua alasan kenapa developer JavaScript modern hampir selalu menulis kode dengan syntax ES6+, bukan syntax lama (ES5).

<details>
<summary>Lihat Jawaban</summary>

1) Syntax ES6+ lebih ringkas dan mudah dibaca (contoh: arrow function, template literal, destructuring). 2) Hampir semua tools dan framework modern (React, Vue, Node.js) mengasumsikan dan memanfaatkan fitur ES6+, jadi menguasainya adalah dasar wajib.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[let dan const →](../02 let dan const/Readme.md)
