# 02 - Number

## Apa itu Number?

**Number** adalah tipe data untuk **angka** — baik itu bilangan bulat (integer) maupun bilangan desimal (float). Berbeda dengan beberapa bahasa pemrograman lain yang membedakan `int` dan `float`, JavaScript **hanya punya satu tipe Number** untuk semua jenis angka.

```js
let bilanganBulat = 10;
let bilanganDesimal = 3.14;
let bilanganNegatif = -25;
```

## Operasi Matematika Dasar

JavaScript menyediakan operator matematika standar:

| Operator | Fungsi | Contoh | Hasil |
|---|---|---|---|
| `+` | Penjumlahan | `5 + 3` | `8` |
| `-` | Pengurangan | `5 - 3` | `2` |
| `*` | Perkalian | `5 * 3` | `15` |
| `/` | Pembagian | `5 / 3` | `1.666...` |
| `%` | Sisa bagi (modulus) | `5 % 3` | `2` |
| `**` | Pangkat | `5 ** 2` | `25` |

## Nilai Khusus pada Number

### `NaN` (Not a Number)
Muncul ketika operasi matematika menghasilkan sesuatu yang **bukan angka yang valid**, misalnya membagi string dengan angka yang tidak bisa dikonversi.

```js
console.log("halo" / 2); // NaN
```

Hal unik: `NaN` **tidak pernah sama dengan dirinya sendiri**!
```js
console.log(NaN === NaN); // false
```
Untuk mengecek apakah suatu nilai NaN, gunakan `Number.isNaN()`.

### `Infinity` dan `-Infinity`
Muncul ketika hasil perhitungan melebihi batas angka yang bisa direpresentasikan, misalnya membagi dengan 0.

```js
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
```

## Masalah Ketelitian Desimal (Floating Point)

Karena cara komputer menyimpan angka desimal, terkadang muncul hasil yang "tidak pas":

```js
console.log(0.1 + 0.2); // 0.30000000000000004 (bukan 0.3!)
```

Ini **bukan bug** dari JavaScript, tapi karakteristik umum dari semua bahasa pemrograman yang memakai standar IEEE 754 untuk floating point. Solusinya biasanya dengan pembulatan (`toFixed()`) saat menampilkan hasil ke user.

## Method Berguna untuk Number

| Method | Fungsi |
|---|---|
| `Number.isInteger(x)` | Cek apakah bilangan bulat |
| `Number.isNaN(x)` | Cek apakah NaN |
| `x.toFixed(n)` | Membulatkan ke n angka desimal (hasil berupa string) |
| `Math.round(x)` | Membulatkan ke bilangan bulat terdekat |
| `Math.floor(x)` | Membulatkan ke bawah |
| `Math.ceil(x)` | Membulatkan ke atas |
| `Math.random()` | Menghasilkan angka acak antara 0 dan 1 |

## Poin Penting

- JavaScript hanya punya satu tipe Number untuk semua jenis angka (bulat maupun desimal)
- `NaN` muncul dari operasi matematika yang tidak valid, dan `NaN !== NaN`
- `Infinity`/`-Infinity` muncul dari pembagian dengan 0
- Hati-hati dengan ketelitian desimal (floating point), gunakan `toFixed()` untuk pembulatan tampilan

Lanjut ke → [03 String](../03%20String/Readme.md)
