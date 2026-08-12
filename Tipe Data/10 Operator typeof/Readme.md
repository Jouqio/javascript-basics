# 10 - Operator typeof

## Apa itu Operator `typeof`?

`typeof` adalah operator bawaan JavaScript untuk **mengecek tipe data dari suatu nilai**. Hasilnya berupa string yang menyatakan nama tipe datanya.

```js
console.log(typeof 123);      // "number"
console.log(typeof "halo");   // "string"
console.log(typeof true);     // "boolean"
```

## Cara Penulisan

`typeof` bisa ditulis dengan atau tanpa tanda kurung — keduanya valid:

```js
typeof 123;
typeof(123);
```

## Tabel Lengkap Hasil `typeof`

| Nilai | Hasil `typeof` |
|---|---|
| `123` | `"number"` |
| `"halo"` | `"string"` |
| `true` / `false` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` ⚠️ (bug historis, lihat materi 05) |
| `Symbol()` | `"symbol"` |
| `10n` | `"bigint"` |
| `[1, 2, 3]` | `"object"` (array adalah jenis khusus object) |
| `{ a: 1 }` | `"object"` |
| `function(){}` | `"function"` |

## Kenapa `typeof` Penting?

`typeof` sering dipakai untuk:

1. **Validasi input** — memastikan data yang diterima sesuai tipe yang diharapkan
2. **Debugging** — memastikan variabel benar-benar bertipe seperti yang diharapkan
3. **Menghindari error** — mengecek tipe sebelum melakukan operasi tertentu

```js
function tambahAngka(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Input harus berupa angka!");
    return;
  }
  return a + b;
}
```

## Cara Membedakan Array dari Object Biasa

Karena `typeof` untuk array dan object **sama-sama menghasilkan `"object"`**, kita butuh cara lain untuk membedakannya:

```js
let arr = [1, 2, 3];
let obj = { a: 1 };

console.log(typeof arr); // "object" (tidak membantu membedakan)
console.log(typeof obj); // "object"

console.log(Array.isArray(arr)); // true  <- cara yang BENAR mengecek array
console.log(Array.isArray(obj)); // false
```

## Cara Mengecek `null` dengan Benar

Karena `typeof null` menghasilkan `"object"` (bukan `"null"`), gunakan perbandingan langsung untuk mengecek null:

```js
let data = null;
console.log(data === null); // true, cara yang BENAR
```

## Poin Penting

- `typeof` mengembalikan string nama tipe data dari suatu nilai
- Berguna untuk validasi input, debugging, dan menghindari error tipe data
- `typeof null` → `"object"` (bug historis, jangan dipakai untuk cek null)
- `typeof array` → `"object"` juga, gunakan `Array.isArray()` untuk membedakan array dari object biasa

Lanjut ke → [11 Tugas Latihan](../11%20Tugas%20Latihan/Readme.md)
