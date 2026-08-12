# 01. Pengantar Array

## Apa itu Array?

**Array** adalah struktur data yang digunakan untuk menyimpan **kumpulan nilai**
dalam satu variabel, tersusun secara berurutan (terindeks mulai dari 0).

```js
const buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah[0]); // "Apel"
console.log(buah[1]); // "Jeruk"
console.log(buah.length); // 3
```

## Karakteristik Array di JavaScript

- **Dinamis**: ukurannya bisa bertambah/berkurang, tidak perlu dideklarasikan panjangnya di awal.
- **Heterogen**: satu array boleh berisi tipe data yang berbeda-beda.
- **Terindeks nol (zero-based index)**: elemen pertama berada di indeks `0`.
- **Objek khusus**: di balik layar, array sebenarnya adalah objek (`typeof [] === "object"`).

```js
const campuran = [1, "dua", true, null, { nama: "Budi" }, [1, 2, 3]];
```

## Cara Membuat Array

```js
// 1. Array literal (paling umum digunakan)
const angka = [1, 2, 3];

// 2. Menggunakan constructor Array
const kosong = new Array(5); // array dengan 5 slot kosong

// 3. Array.of()
const satuAngka = Array.of(7); // [7]

// 4. Array.from() — dari iterable/array-like
const huruf = Array.from("abc"); // ["a", "b", "c"]
```

## Mengakses & Mengubah Elemen

```js
const warna = ["merah", "hijau", "biru"];

// Akses
console.log(warna[2]); // "biru"

// Mengubah elemen (ini bersifat mutable, akan dibahas di materi 02)
warna[0] = "kuning";
console.log(warna); // ["kuning", "hijau", "biru"]

// Elemen terakhir
console.log(warna[warna.length - 1]); // "biru"
console.log(warna.at(-1)); // "biru" (cara modern)
```

## Iterasi Array

```js
const angka = [10, 20, 30];

// for klasik
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}

// for...of
for (const n of angka) {
  console.log(n);
}

// forEach
angka.forEach((n, index) => {
  console.log(`Index ${index}: ${n}`);
});
```

## Kenapa Array Penting?

Array adalah salah satu struktur data paling sering dipakai dalam pemrograman
JavaScript—baik untuk menyimpan daftar produk, daftar user, hasil query API,
maupun data untuk ditampilkan di UI (React, Vue, dsb).

## 📝 Latihan

1. Buat array berisi 5 nama hari dalam seminggu, lalu tampilkan hari ke-3 menggunakan `console.log`.
2. Buat array campuran (angka, string, boolean) lalu cetak tipe data setiap elemennya menggunakan `typeof`.
3. Gunakan `Array.from()` untuk mengubah string `"JavaScript"` menjadi array karakter.

---
⬅️ [Kembali ke Daftar Isi](../Readme.md) | ➡️ [Lanjut: Mutable vs Immutable Array](../02%20Mutable%20vs%20Immutable%20Array/readme.md)
