# 06 - Perulangan pada Object

## Kenapa Perlu Perulangan Khusus untuk Object?

Perulangan `for` biasa (seperti pada array) **tidak bisa langsung dipakai** untuk object, karena object tidak punya index angka berurutan seperti array. Karena itu, JavaScript menyediakan cara-cara khusus untuk melakukan perulangan (looping) pada object.

## 1. `for...in` — Looping Melalui Setiap Key

`for...in` adalah cara paling dasar untuk melakukan perulangan pada object, memberikan **nama key** di setiap iterasi.

```js
let siswa = { nama: "Rina", umur: 21, jurusan: "Teknik Informatika" };

for (let key in siswa) {
  console.log(key, "->", siswa[key]); // gunakan bracket notation untuk ambil value dari key
}
```

**Catatan penting**: `for...in` juga bisa mengambil properti yang "diwariskan" (inherited) dari prototype, sehingga kadang perlu dikombinasikan dengan `hasOwnProperty()` untuk keamanan tambahan (walaupun untuk object literal biasa jarang jadi masalah).

## 2. `Object.keys()` — Ambil Semua Key sebagai Array

```js
let keys = Object.keys(siswa);
console.log(keys); // ["nama", "umur", "jurusan"]
```

Karena hasilnya berupa **array**, kita bisa memakai semua method array (`.map()`, `.filter()`, `.forEach()`, dll):

```js
Object.keys(siswa).forEach((key) => {
  console.log(key, "->", siswa[key]);
});
```

## 3. `Object.values()` — Ambil Semua Value sebagai Array

```js
let values = Object.values(siswa);
console.log(values); // ["Rina", 21, "Teknik Informatika"]
```

## 4. `Object.entries()` — Ambil Semua Pasangan [key, value]

Method ini paling fleksibel karena mengembalikan array berisi pasangan `[key, value]`, cocok dipakai bersama destructuring:

```js
let entries = Object.entries(siswa);
console.log(entries);
// [["nama","Rina"], ["umur",21], ["jurusan","Teknik Informatika"]]

Object.entries(siswa).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

## Perbandingan Ringkas

| Cara | Hasil | Kapan Dipakai |
|---|---|---|
| `for...in` | Iterasi langsung, memberi key | Kalau ingin looping paling sederhana |
| `Object.keys()` | Array berisi key | Kalau hanya butuh nama-nama key |
| `Object.values()` | Array berisi value | Kalau hanya butuh nilai-nilainya |
| `Object.entries()` | Array berisi [key, value] | Kalau butuh key DAN value sekaligus, cocok untuk `.map()`/`.filter()` |

## Poin Penting

- Object tidak bisa di-loop dengan `for` biasa seperti array
- `for...in` = cara paling dasar, iterasi berdasarkan key
- `Object.keys()`, `Object.values()`, `Object.entries()` mengembalikan **array**, sehingga bisa memakai method array (`.map()`, `.filter()`, dll)
- `Object.entries()` paling fleksibel karena memberikan key dan value sekaligus

Lanjut ke → [07 Object Reference dan Copy](../07%20Object%20Reference%20dan%20Copy/Readme.md)
