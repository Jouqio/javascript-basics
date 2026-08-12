# 05. Array Reduce — `reduce()`

## Apa itu `reduce()`?

`reduce()` adalah method array yang **immutable**, digunakan untuk
**meringkas** seluruh elemen array menjadi **satu nilai** (bisa berupa angka,
string, object, atau array baru).

```js
const angka = [1, 2, 3, 4];
const total = angka.reduce((acc, n) => acc + n, 0);

console.log(total); // 10
console.log(angka); // [1, 2, 3, 4] (tidak berubah)
```

## Sintaks

```js
array.reduce((accumulator, elemen, index, arrayAsli) => {
  return accumulatorBaru;
}, nilaiAwal);
```

- `accumulator` — hasil yang "dibawa" dari iterasi sebelumnya
- `elemen` — elemen array saat ini
- `nilaiAwal` — nilai awal `accumulator` (sangat disarankan selalu diisi)

## Cara Kerja (Step by Step)

```js
const angka = [1, 2, 3, 4];
angka.reduce((acc, n) => acc + n, 0);

// Iterasi 1: acc = 0, n = 1 -> return 1
// Iterasi 2: acc = 1, n = 2 -> return 3
// Iterasi 3: acc = 3, n = 3 -> return 6
// Iterasi 4: acc = 6, n = 4 -> return 10
// Hasil akhir: 10
```

## Contoh: Menjumlahkan Total Harga

```js
const keranjang = [
  { nama: "Buku", harga: 20000 },
  { nama: "Pensil", harga: 5000 },
  { nama: "Tas", harga: 75000 },
];

const totalHarga = keranjang.reduce((acc, item) => acc + item.harga, 0);
console.log(totalHarga); // 100000
```

## Contoh: Mengelompokkan Data (Group By)

```js
const siswa = [
  { nama: "Andi", kelas: "A" },
  { nama: "Budi", kelas: "B" },
  { nama: "Citra", kelas: "A" },
];

const kelompok = siswa.reduce((acc, s) => {
  const key = s.kelas;
  acc[key] = acc[key] ? [...acc[key], s.nama] : [s.nama];
  return acc;
}, {});

console.log(kelompok);
// { A: ["Andi", "Citra"], B: ["Budi"] }
```

## Contoh: Meratakan Array Bersarang (Flatten)

```js
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);

console.log(flat); // [1, 2, 3, 4, 5]
```

## Bonus: Membuat `map()` dan `filter()` Sendiri dengan `reduce()`

```js
// map versi manual
const mapManual = (arr, fn) =>
  arr.reduce((acc, item) => [...acc, fn(item)], []);

console.log(mapManual([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

// filter versi manual
const filterManual = (arr, fn) =>
  arr.reduce((acc, item) => (fn(item) ? [...acc, item] : acc), []);

console.log(filterManual([1, 2, 3, 4], (n) => n % 2 === 0)); // [2, 4]
```

## Kesalahan Umum

```js
// ❌ Lupa nilai awal, bisa menyebabkan hasil tidak terduga pada array kosong
const kosong = [];
kosong.reduce((acc, n) => acc + n); // Error: Reduce of empty array with no initial value

// ✅ Selalu sertakan nilai awal
kosong.reduce((acc, n) => acc + n, 0); // 0
```

## 📝 Latihan

1. Diberikan array angka, cari nilai **maksimum** menggunakan `reduce()` (tanpa `Math.max`).
2. Diberikan array kata, gabungkan menjadi satu kalimat (string) menggunakan `reduce()`.
3. Diberikan array transaksi `{ jenis: "masuk"/"keluar", jumlah }`, hitung saldo akhir menggunakan `reduce()`.

---
⬅️ [Array Map](../04%20Array%20Map/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Kombinasi Filter Map Reduce](../06%20Kombinasi%20Filter%20Map%20Reduce/readme.md)
