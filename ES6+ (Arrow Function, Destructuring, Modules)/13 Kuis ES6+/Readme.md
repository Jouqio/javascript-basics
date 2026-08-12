# 13. Kuis: ES6+

> Uji pemahamanmu dari materi 01–12 sebelum lanjut ke Tugas Gabungan.

## Tujuan Pembelajaran

- Menguji pemahaman let/const, arrow function, dan destructuring
- Menguji pemahaman spread/rest, class, dan module
- Menguji pemahaman optional chaining dan nullish coalescing

## Soal Dasar (let/const, Arrow Function, Destructuring)

**Soal 1.** Apa yang terjadi jika variabel dideklarasikan dengan `const` lalu dicoba di-reassign?

- Nilai berubah tanpa masalah
- Terjadi error saat runtime
- Nilai menjadi undefined
- Program berhenti tanpa pesan error

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Terjadi error saat runtime**

`const` mencegah reassignment. Mencoba mengubah nilainya setelah deklarasi awal akan menghasilkan TypeError saat runtime.
</details>

**Soal 2.** Manakah cara penulisan arrow function dengan implicit return yang benar untuk fungsi yang mengembalikan `a * b`?

- (a, b) => { a * b }
- (a, b) => a * b
- (a, b) -> a * b
- function(a, b) => a * b

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: (a, b) => a * b**

Implicit return hanya perlu ekspresi tanpa kurung kurawal dan tanpa kata kunci return: `(a, b) => a * b`.
</details>

**Soal 3.** Diberikan `const { nama: n = "Tamu" } = {}`, apa nilai `n`?

- undefined
- null
- "Tamu"
- Error

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: "Tamu"**

Karena objeknya kosong (tidak ada properti nama), destructuring memakai default value "Tamu" yang sudah ditentukan.
</details>

## Soal Lanjutan (Rest/Spread, Nullish Coalescing, Modules)

**Soal 4.** Manakah yang merupakan REST operator (bukan spread) dari kode berikut: `function f(a, ...b) {}`?

- a
- ...b
- f
- Tidak ada

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: ...b**

`...b` di posisi parameter fungsi mengumpulkan sisa argumen menjadi array — ini adalah rest operator, bukan spread.
</details>

**Soal 5.** Apa perbedaan utama `??` dibanding `||` saat memberi nilai fallback?

- Tidak ada perbedaan, keduanya identik
- ?? hanya menganggap null/undefined sebagai alasan fallback, || juga menganggap 0/""/false sebagai alasan fallback
- ?? hanya bisa dipakai pada angka
- || lebih baru daripada ??

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: ?? hanya menganggap null/undefined sebagai alasan fallback, || juga menganggap 0/""/false sebagai alasan fallback**

`??` (nullish coalescing) lebih ketat: hanya null/undefined yang memicu fallback. `||` juga memicu fallback untuk semua nilai falsy seperti 0, string kosong, dan false.
</details>

**Soal 6.** Import seperti apa yang dipakai untuk mengambil `export default konfigurasi;` dari file lain?

- import { konfigurasi } from './file.mjs'
- import konfigurasi from './file.mjs'
- import * konfigurasi from './file.mjs'
- require('./file.mjs').konfigurasi

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: import konfigurasi from './file.mjs'**

Default export diimpor tanpa kurung kurawal, dan namanya boleh bebas ditentukan saat import.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Optional Chaining (?.) dan Nullish Coalescing (??)](../12 Optional Chaining dan Nullish Coalescing/Readme.md) | [Tugas Gabungan →](../14%20Tugas%20Gabungan/Readme.md)
