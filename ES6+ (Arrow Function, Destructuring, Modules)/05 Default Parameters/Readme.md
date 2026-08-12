# 05. Default Parameters

> Memberi nilai bawaan pada parameter fungsi, sehingga fungsi tetap aman dipanggil tanpa argumen lengkap.

## Tujuan Pembelajaran

- Memahami masalah parameter undefined pada fungsi
- Menulis default parameter dengan syntax ES6+
- Menggunakan ekspresi atau parameter lain sebagai nilai default

## Masalah Parameter yang Tidak Diisi

Kalau fungsi dipanggil dengan argumen yang kurang, parameter yang tidak diisi bernilai `undefined`. Sebelum ES6, ini harus dicek manual satu per satu.

```js
function sapa(nama) {
  nama = nama || "Tamu"; // cara lama memberi nilai default
  return "Halo, " + nama;
}

console.log(sapa("Syauqi")); // Halo, Syauqi
console.log(sapa());         // Halo, Tamu
```

> **Perhatian:** Cara lama `nama || "Tamu"` punya bug tersembunyi: jika `nama` diisi nilai falsy seperti `0`, `""`, atau `false`, nilai itu akan tetap diganti ke default — padahal sengaja diisi.

## Default Parameter ES6+

Sekarang nilai default bisa ditulis langsung di deklarasi parameter, dan **hanya aktif jika argumen benar-benar `undefined`** (tidak diisi sama sekali) — bukan berdasarkan falsy/truthy seperti cara lama.

```js
function sapa(nama = "Tamu") {
  return `Halo, ${nama}`;
}

console.log(sapa("Syauqi")); // Halo, Syauqi
console.log(sapa());         // Halo, Tamu
console.log(sapa(0));        // Halo, 0 -- beda dengan cara lama!
```

## Beberapa Default Parameter Sekaligus

```js
function buatAkun(nama, peran = "member", aktif = true) {
  return { nama, peran, aktif };
}

console.log(buatAkun("Syauqi"));
// { nama: "Syauqi", peran: "member", aktif: true }

console.log(buatAkun("Admin1", "admin"));
// { nama: "Admin1", peran: "admin", aktif: true }
```

## Default Parameter Bisa Berupa Ekspresi

Nilai default tidak harus berupa nilai statis — boleh berupa ekspresi, pemanggilan fungsi, bahkan memakai parameter lain yang sudah dideklarasikan sebelumnya.

```js
function hargaSetelahPajak(harga, pajak = harga * 0.1) {
  return harga + pajak;
}

console.log(hargaSetelahPajak(100000));     // 110000 (pajak dihitung otomatis)
console.log(hargaSetelahPajak(100000, 5000)); // 105000 (pajak custom)
```

> **Tips:** Default parameter membuat fungsi lebih aman dipanggil dengan argumen yang kurang lengkap, tanpa perlu pengecekan manual di dalam badan fungsi.

## Latihan

Buat fungsi `buatProduk(nama, harga, stok = 0)` yang mengembalikan objek `{ nama, harga, stok }`. Panggil dua kali: sekali dengan stok diisi, sekali tanpa mengisi stok.

<details>
<summary>Lihat Jawaban</summary>

```js
function buatProduk(nama, harga, stok = 0) {
  return { nama, harga, stok };
}

console.log(buatProduk("Buku", 25000, 10));
// { nama: 'Buku', harga: 25000, stok: 10 }

console.log(buatProduk("Pensil", 3000));
// { nama: 'Pensil', harga: 3000, stok: 0 }
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Arrow Function](../04 Arrow Function/Readme.md) | [Destructuring Array dan Object →](../06 Destructuring Array dan Object/Readme.md)
