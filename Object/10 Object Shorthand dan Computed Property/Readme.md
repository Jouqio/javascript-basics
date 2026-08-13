# 10 - Object Shorthand dan Computed Property

## Property Shorthand — Penulisan Lebih Ringkas

Kalau nama variabel **sudah sama persis** dengan nama key yang diinginkan, kita bisa menulisnya lebih singkat tanpa mengulang nama key.

```js
let nama = "Andi";
let umur = 20;

// Cara lama (mengulang nama key = nama variabel)
let user = { nama: nama, umur: umur };

// Cara modern (property shorthand) - lebih ringkas
let userBaru = { nama, umur };

console.log(userBaru); // { nama: "Andi", umur: 20 }
```

Ini sangat berguna ketika kita membuat object dari variabel-variabel yang sudah ada, misalnya hasil dari parameter fungsi.

```js
function buatUser(nama, umur, kota) {
  return { nama, umur, kota }; // lebih ringkas daripada { nama: nama, umur: umur, kota: kota }
}

console.log(buatUser("Budi", 21, "Bontang"));
```

## Method Shorthand (Sudah Dibahas di Materi 04)

Sebagai pengingat, method juga punya bentuk shorthand:

```js
// Cara lama
let obj = { sapa: function () { console.log("Halo"); } };

// Cara modern
let objBaru = { sapa() { console.log("Halo"); } };
```

## Computed Property Names — Nama Key yang Dinamis

**Computed property name** memungkinkan kita menentukan **nama key secara dinamis**, menggunakan nilai dari sebuah variabel atau ekspresi, langsung saat membuat object.

```js
let namaKey = "warnaFavorit";

// Tanpa computed property (harus buat object dulu, baru tambah key)
let obj1 = {};
obj1[namaKey] = "Biru";
console.log(obj1); // { warnaFavorit: "Biru" }

// Dengan computed property (langsung saat membuat object)
let obj2 = {
  [namaKey]: "Biru", // tanda kurung siku menandakan "gunakan NILAI dari variabel ini sebagai nama key"
};
console.log(obj2); // { warnaFavorit: "Biru" }
```

## Kapan Computed Property Berguna?

Sangat berguna ketika nama key **ditentukan saat runtime** (tidak diketahui sebelumnya saat menulis kode), misalnya:

```js
function buatStatistik(namaKategori, jumlah) {
  return {
    [namaKategori]: jumlah, // nama key berasal dari parameter fungsi
  };
}

console.log(buatStatistik("totalPenjualan", 150));
// { totalPenjualan: 150 }

console.log(buatStatistik("totalPengunjung", 500));
// { totalPengunjung: 500 }
```

Computed property juga bisa memakai ekspresi, tidak hanya variabel tunggal:

```js
let index = 1;
let data = {
  [`item${index}`]: "Data pertama", // hasil: { item1: "Data pertama" }
};
console.log(data);
```

## Poin Penting

- Property shorthand: `{ nama }` setara dengan `{ nama: nama }`, kalau nama variabel sama dengan nama key
- Method shorthand: `metode() {}` setara dengan `metode: function() {}`
- Computed property (`[ekspresi]: nilai`) memungkinkan nama key ditentukan secara dinamis
- Sangat berguna saat nama key berasal dari variabel, parameter fungsi, atau hasil ekspresi

Lanjut ke → [11 Tugas Latihan](../11%20Tugas%20Latihan/Readme.md)
