# 06. Destructuring Array dan Object

> Cara singkat mengambil nilai dari array atau properti dari objek langsung ke variabel terpisah.

## Tujuan Pembelajaran

- Melakukan destructuring pada array
- Melakukan destructuring pada objek, termasuk rename dan default value
- Menggunakan destructuring pada parameter fungsi

## Masalah Mengambil Data Cara Lama

Sebelum ES6, mengambil beberapa nilai dari array atau objek harus dilakukan satu per satu, berulang-ulang menyebut nama array/objeknya.

```js
var koordinat = [10, 20];
var x = koordinat[0];
var y = koordinat[1];

var user = { nama: "Syauqi", umur: 20 };
var nama = user.nama;
var umur = user.umur;

console.log(x, y, nama, umur);
```

## Destructuring Array

Dengan destructuring, nilai array bisa langsung "dibongkar" ke variabel-variabel terpisah sesuai urutannya, memakai tanda kurung siku `[ ]`.

```js
const koordinat = [10, 20];
const [x, y] = koordinat;
console.log(x, y); // 10 20

// Melewati elemen dengan koma kosong
const warna = ["merah", "hijau", "biru"];
const [, kedua] = warna;
console.log(kedua); // hijau

// Menukar nilai dua variabel tanpa variabel bantu
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

## Destructuring Object

Untuk objek, nama variabel harus **sama dengan nama properti** (bukan berdasarkan urutan seperti array), memakai tanda kurung kurawal `{ }`.

```js
const user = { nama: "Syauqi", umur: 20, kota: "Bontang" };
const { nama, umur } = user;
console.log(nama, umur); // Syauqi 20

// Rename variabel dengan titik dua
const { nama: namaLengkap } = user;
console.log(namaLengkap); // Syauqi

// Default value jika properti tidak ada
const { profesi = "Belum diisi" } = user;
console.log(profesi); // Belum diisi
```

## Destructuring Bersarang (Nested)

```js
const mahasiswa = {
  nama: "Syauqi",
  kampus: {
    nama: "STITEK Bontang",
    jurusan: "Teknik Informatika",
  },
};

const {
  nama,
  kampus: { jurusan },
} = mahasiswa;

console.log(nama, jurusan); // Syauqi Teknik Informatika
```

## Destructuring pada Parameter Fungsi

Ini salah satu pemakaian paling umum di kode nyata: destructuring langsung di parameter fungsi, sangat berguna saat fungsi menerima objek konfigurasi.

```js
// Tanpa destructuring
function tampilkanUserLama(user) {
  console.log(user.nama + " - " + user.kota);
}

// Dengan destructuring parameter
function tampilkanUser({ nama, kota }) {
  console.log(`${nama} - ${kota}`);
}

tampilkanUser({ nama: "Syauqi", kota: "Bontang", umur: 20 });
// Syauqi - Bontang
```

> **Tips:** Destructuring parameter sangat umum dipakai di React (props) dan kode modern lainnya karena membuat fungsi langsung menunjukkan properti apa saja yang dibutuhkan.

## Latihan

Diberikan objek berikut, ambil `judul` dan `penulis` dengan destructuring, lalu beri default value `"Anonim"` untuk `penulis` jika tidak ada:

```js
const buku = { judul: "Laskar Pelangi" };
```

<details>
<summary>Lihat Jawaban</summary>

```js
const buku = { judul: "Laskar Pelangi" };
const { judul, penulis = "Anonim" } = buku;
console.log(judul, penulis); // Laskar Pelangi Anonim
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Default Parameters](../05 Default Parameters/Readme.md) | [Spread dan Rest Operator →](../07 Spread dan Rest Operator/Readme.md)
