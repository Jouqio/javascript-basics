# 02. let dan const

> Dua cara baru mendeklarasikan variabel di ES6, menggantikan var yang punya banyak masalah.

## Tujuan Pembelajaran

- Memahami perbedaan var, let, dan const
- Memahami konsep block scope
- Mengetahui kapan memakai let dan kapan memakai const

## Masalah dengan var

Sebelum ES6, satu-satunya cara mendeklarasikan variabel adalah `var`. Masalahnya, `var` bersifat **function-scoped**, bukan **block-scoped** — artinya ia "bocor" keluar dari blok `{ }` seperti `if` atau `for`.

```js
if (true) {
  var pesan = "Halo dari dalam blok";
}
console.log(pesan); // "Halo dari dalam blok" - padahal harusnya tidak bisa diakses!

for (var i = 0; i < 3; i++) {}
console.log(i); // 3 - variabel i "bocor" keluar dari loop
```

> **Perhatian:** Perilaku `var` yang bocor ini sering menyebabkan bug yang sulit dilacak, terutama pada kode yang panjang. Inilah alasan utama `let` dan `const` diperkenalkan.

## let: Variabel yang Bisa Diubah

`let` bersifat **block-scoped** — hanya bisa diakses di dalam blok `{ }` tempat ia dideklarasikan. Nilainya boleh diubah (di-*reassign*) setelah dideklarasikan.

```js
if (true) {
  let pesan = "Halo dari dalam blok";
  console.log(pesan); // OK, masih di dalam blok
}
// console.log(pesan); // Error! pesan tidak dikenal di luar blok

let umur = 20;
umur = 21; // boleh diubah
console.log(umur); // 21
```

## const: Variabel yang Tidak Bisa Diubah

`const` juga block-scoped, tapi nilainya **tidak boleh di-reassign** setelah dideklarasikan. Wajib diberi nilai awal saat dideklarasikan.

```js
const PI = 3.14;
// PI = 3.14159; // Error! Assignment to constant variable.

const nama = "Syauqi";
console.log(nama);
```

> **Perhatian:** `const` mencegah *reassignment*, bukan mencegah perubahan isi objek/array. Lihat contoh berikutnya.

## const pada Objek dan Array

Ini poin yang sering bikin bingung pemula: `const` pada objek/array tetap mengizinkan **isinya** diubah, karena yang tidak boleh berubah hanyalah referensi variabelnya, bukan isinya.

```js
const user = { nama: "Syauqi", umur: 20 };
user.umur = 21; // BOLEH - mengubah isi objek
console.log(user); // { nama: "Syauqi", umur: 21 }

// user = { nama: "Lain" }; // Error! Ini baru reassignment, tidak boleh

const angka = [1, 2, 3];
angka.push(4); // BOLEH - mengubah isi array
console.log(angka); // [1, 2, 3, 4]
```

> **Tips:** Aturan praktis: **selalu pakai `const` secara default**. Ganti ke `let` hanya jika kamu memang tahu variabelnya akan di-reassign nanti (misalnya counter di loop). Hindari `var` sepenuhnya pada kode baru.

## Latihan

Kode berikut punya bug karena salah pilih antara `let`/`const`. Temukan dan perbaiki:

```js
const total = 0;
for (let i = 1; i <= 5; i++) {
  total = total + i; // error di sini
}
console.log(total);
```

<details>
<summary>Lihat Jawaban</summary>

Bug-nya: `total` dideklarasikan dengan `const` padahal nilainya diubah di dalam loop (`total = total + i`). Karena `const` tidak boleh di-reassign, ini akan error. Perbaikan: ganti `const total = 0` menjadi `let total = 0`.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Pengantar ES6+](../01 Pengantar ES6+/Readme.md) | [Template Literals →](../03 Template Literals/Readme.md)
