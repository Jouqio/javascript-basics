# 09. Quiz Array

Kerjakan soal berikut untuk menguji pemahamanmu. Jawaban ada di paling bawah
(jangan diintip dulu sebelum mencoba! 😉).

## Bagian A — Pilihan Ganda

**1. Manakah method berikut yang bersifat mutable (mengubah array asli)?**
a. `map()`
b. `filter()`
c. `push()`
d. `slice()`

**2. Apa hasil dari kode berikut?**
```js
const arr = [1, 2, 3];
const hasil = arr.map((n) => n * 2);
console.log(arr);
```
a. `[2, 4, 6]`
b. `[1, 2, 3]`
c. `undefined`
d. Error

**3. Method mana yang digunakan untuk meringkas array menjadi satu nilai?**
a. `filter()`
b. `map()`
c. `reduce()`
d. `forEach()`

**4. Apa yang terjadi jika lupa memberi nilai awal pada `reduce()` untuk array kosong?**
a. Hasilnya `0`
b. Hasilnya `undefined`
c. Muncul Error
d. Hasilnya array kosong

**5. Manakah cara yang benar untuk menambah elemen ke array secara immutable?**
a. `arr.push(item)`
b. `arr[arr.length] = item`
c. `const baru = [...arr, item]`
d. `arr.unshift(item)`

## Bagian B — Essay Singkat

**6.** Jelaskan perbedaan antara `map()` dan `forEach()`, beserta kapan masing-masing sebaiknya digunakan.

**7.** Mengapa pola immutable array penting saat bekerja dengan `state` di React?

**8.** Diberikan array berikut, tuliskan kode untuk menghitung **rata-rata nilai** menggunakan `reduce()`:
```js
const nilai = [80, 90, 70, 100, 60];
```

## Bagian C — Praktik Kode

**9.** Diberikan data berikut:
```js
const karyawan = [
  { nama: "Andi", gaji: 5000000, departemen: "IT" },
  { nama: "Budi", gaji: 4000000, departemen: "HR" },
  { nama: "Citra", gaji: 6000000, departemen: "IT" },
  { nama: "Dewi", gaji: 4500000, departemen: "Finance" },
];
```
Tuliskan kode untuk:
- a. Menghitung **total gaji** karyawan departemen **IT** saja.
- b. Membuat array baru berisi **nama karyawan** yang gajinya di atas 4.500.000.
- c. Menaikkan gaji seluruh karyawan departemen **HR** sebesar 10% (immutable).

---

## 🔑 Kunci Jawaban Bagian A

1. c — `push()`
2. b — `[1, 2, 3]` (array asli tidak berubah karena `map()` immutable)
3. c — `reduce()`
4. c — Muncul Error (`Reduce of empty array with no initial value`)
5. c — `const baru = [...arr, item]`

## 💡 Contoh Jawaban Bagian C

```js
// 9a
const totalGajiIT = karyawan
  .filter((k) => k.departemen === "IT")
  .reduce((total, k) => total + k.gaji, 0);

// 9b
const namaGajiTinggi = karyawan
  .filter((k) => k.gaji > 4500000)
  .map((k) => k.nama);

// 9c
const karyawanBaru = karyawan.map((k) =>
  k.departemen === "HR" ? { ...k, gaji: k.gaji * 1.1 } : k
);
```

---
⬅️ [Rangkuman Array](../08%20Rangkuman%20Array/readme.md) | 🏠 [Kembali ke Daftar Isi](../Readme.md)

🎉 Selamat! Kamu telah menyelesaikan modul pembelajaran Array (fokus Immutable Array).
