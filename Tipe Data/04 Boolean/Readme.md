# 04 - Boolean

## Apa itu Boolean?

**Boolean** adalah tipe data yang **hanya punya 2 kemungkinan nilai**: `true` (benar) atau `false` (salah). Nama "boolean" diambil dari nama matematikawan George Boole.

```js
let sudahLogin = true;
let sudahBayar = false;
```

## Kenapa Boolean Penting?

Boolean adalah dasar dari **pengambilan keputusan (decision making)** dalam program — dipakai di `if`, `while`, dan berbagai kondisi lainnya.

```js
let umur = 20;
let sudahDewasa = umur >= 18; // true

if (sudahDewasa) {
  console.log("Boleh mendaftar");
}
```

## Operator yang Menghasilkan Boolean

### Operator Perbandingan

| Operator | Fungsi | Contoh | Hasil |
|---|---|---|---|
| `===` | Sama dengan (strict) | `5 === 5` | `true` |
| `!==` | Tidak sama dengan (strict) | `5 !== 3` | `true` |
| `>` | Lebih besar | `5 > 3` | `true` |
| `<` | Lebih kecil | `5 < 3` | `false` |
| `>=` | Lebih besar sama dengan | `5 >= 5` | `true` |
| `<=` | Lebih kecil sama dengan | `5 <= 3` | `false` |

**Catatan penting**: Selalu gunakan `===` dan `!==` (strict equality), bukan `==` dan `!=`. Perbedaannya dibahas lebih lanjut di materi 09 (Type Conversion dan Coercion).

### Operator Logika

| Operator | Nama | Fungsi |
|---|---|---|
| `&&` | AND | `true` hanya jika **kedua** sisi `true` |
| `\|\|` | OR | `true` jika **salah satu** sisi `true` |
| `!` | NOT | Membalik nilai boolean |

```js
let punyaKTP = true;
let umurCukup = true;
console.log(punyaKTP && umurCukup); // true (keduanya harus true)

let adaDiskon = false;
let adaVoucher = true;
console.log(adaDiskon || adaVoucher); // true (salah satu true sudah cukup)

console.log(!punyaKTP); // false (dibalik dari true)
```

## Konsep Truthy dan Falsy

Di JavaScript, **semua nilai** (bukan cuma `true`/`false`) bisa dianggap "truthy" (dianggap benar) atau "falsy" (dianggap salah) ketika dievaluasi dalam konteks boolean (misalnya di dalam `if`).

### Nilai yang dianggap Falsy (hanya ada 6):
```
false, 0, "" (string kosong), null, undefined, NaN
```

### Semua nilai lainnya dianggap Truthy, termasuk:
```
"0" (string berisi angka 0), "false" (string), [] (array kosong), {} (object kosong)
```

Ini sering menjebak pemula! Contoh: `[]` (array kosong) dianggap **truthy**, walaupun kelihatannya "kosong".

## Poin Penting

- Boolean hanya punya 2 nilai: `true` dan `false`
- Dasar dari pengambilan keputusan program (`if`, `while`, dll)
- Gunakan `===`/`!==` untuk perbandingan yang aman, hindari `==`/`!=`
- Operator logika: `&&` (AND), `||` (OR), `!` (NOT)
- Konsep truthy/falsy: hanya 6 nilai yang falsy, sisanya truthy

Lanjut ke → [05 Null dan Undefined](../05%20Null%20dan%20Undefined/Readme.md)
