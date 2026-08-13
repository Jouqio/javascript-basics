# 11. Module Scope dan Enkapsulasi

> Memahami bahwa setiap module punya ruang lingkupnya sendiri, dan bagaimana ini menciptakan enkapsulasi otomatis.

## Tujuan Pembelajaran

- Memahami bahwa setiap module (file) punya scope tersendiri
- Membedakan variabel privat (tidak diekspor) dan publik (diekspor)
- Menggunakan module scope untuk menyembunyikan detail implementasi

## Setiap Module Punya Scope-nya Sendiri

Ini keuntungan besar sistem module modern dibanding era "banyak tag `<script>`" di materi 02: **setiap file otomatis punya scope tersendiri**, tanpa perlu trik IIFE manual. Variabel yang dideklarasikan di satu module **tidak akan pernah bocor** ke module lain, kecuali sengaja diekspor.

```js
// --- counter.mjs ---
let hitung = 0; // variabel ini PRIVAT terhadap module ini

export function tambah() {
  hitung++;
  return hitung;
}

export function ambilNilai() {
  return hitung;
}

// --- di file lain ---
import { tambah, ambilNilai } from "./counter.mjs";

console.log(tambah()); // 1
console.log(tambah()); // 2
console.log(ambilNilai()); // 2

// console.log(hitung); // Error! `hitung` tidak dikenal di sini,
// karena tidak pernah diekspor - inilah ENKAPSULASI.
```

## Enkapsulasi: Menyembunyikan Detail Implementasi

**Enkapsulasi** berarti menyembunyikan detail "cara kerja di dalam" dan hanya mengekspos "apa yang boleh dipakai dari luar". Ini konsep yang sama seperti Module Pattern di materi 02, tapi sekarang jadi otomatis lewat sistem module.

Manfaat enkapsulasi: kamu bebas mengubah detail implementasi di dalam module **tanpa merusak kode lain** yang memakainya, selama antarmuka publik (yang diekspor) tetap sama.

```js
// --- validasiPassword.mjs ---

// Detail implementasi - PRIVAT, bebas diubah kapan saja
const PANJANG_MINIMAL = 8;
const POLA_ANGKA = /[0-9]/;

function cekPanjang(password) {
  return password.length >= PANJANG_MINIMAL;
}

function cekAdaAngka(password) {
  return POLA_ANGKA.test(password);
}

// Antarmuka publik - PUBLIK, inilah yang dipakai module lain
export function passwordValid(password) {
  return cekPanjang(password) && cekAdaAngka(password);
}
```

> **Tips:** Kalau suatu saat aturan validasi berubah (misal menambah syarat huruf kapital), kode di module lain yang memakai `passwordValid()` **tidak perlu diubah sama sekali** — mereka hanya peduli hasilnya `true`/`false`, bukan bagaimana cara mengeceknya.

## State Privat dengan Closure

Kombinasi module scope + closure memungkinkan module menyimpan **state (data) privat** yang tetap terjaga antar pemanggilan fungsi, mirip seperti "variabel milik objek" tapi dalam skala module.

```js
// --- bankAccount.mjs ---
let saldo = 0; // state privat, hanya bisa diubah lewat fungsi yang diekspor

export function setor(jumlah) {
  saldo += jumlah;
  return saldo;
}

export function tarik(jumlah) {
  if (jumlah > saldo) {
    throw new Error("Saldo tidak cukup");
  }
  saldo -= jumlah;
  return saldo;
}

export function cekSaldo() {
  return saldo;
}

// Module lain HANYA bisa mengubah saldo lewat setor()/tarik(),
// tidak bisa langsung mengubah variabel saldo secara sembarangan.
```

## Latihan

Kenapa menyimpan `saldo` sebagai variabel privat di dalam module (seperti contoh `bankAccount.mjs` di atas) dianggap lebih aman dibanding mengekspornya langsung sebagai `export let saldo = 0`?

<details>
<summary>Lihat Jawaban</summary>

Kalau `saldo` diekspor langsung, module mana pun yang meng-import-nya bisa **mengubah nilainya secara langsung dan sembarangan** (misalnya `saldo = -999999`), melewati semua validasi yang seharusnya ada di fungsi `setor()`/`tarik()`. Dengan menjaga `saldo` tetap privat dan hanya mengekspos fungsi-fungsi yang sudah tervalidasi, module memaksa semua perubahan data melalui "pintu resmi" yang sudah diberi aturan — inilah inti dari enkapsulasi.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [counter.mjs](./counter.mjs), [validasiPassword.mjs](./validasiPassword.mjs), [bankAccount.mjs](./bankAccount.mjs), [contoh.mjs](./contoh.mjs) pada folder ini.

[← Mengatur Struktur Folder Modular](../10 Mengatur Struktur Folder Modular/Readme.md) | [Praktik Terbaik Modularisasi →](../12 Praktik Terbaik Modularisasi/Readme.md)
