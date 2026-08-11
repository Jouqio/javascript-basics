# 2. Type System dalam JavaScript

## Apa itu Type System?

**Type System** adalah aturan yang mengatur bagaimana tipe data (angka, teks, boolean, dll.) diperlakukan dalam sebuah bahasa pemrograman. Type System membantu mencegah kesalahan seperti menjumlahkan angka dengan teks yang tidak seharusnya.

## JavaScript: Dynamically Typed & Weakly Typed

JavaScript memiliki dua sifat penting:

### 1. Dynamically Typed (Tipe Dinamis)

Tipe variabel **tidak ditentukan di awal**, dan bisa berubah saat program berjalan.

```javascript
let data = 10;        // number
data = "sepuluh";     // sekarang jadi string
data = true;          // sekarang jadi boolean
```

Berbeda dengan bahasa *statically typed* seperti Java/TypeScript, di mana tipe variabel harus tetap sama.

### 2. Weakly Typed (Tipe Lemah / Loose Typing)

JavaScript akan otomatis **mengonversi tipe data** (disebut *type coercion*) saat operasi dilakukan antar tipe berbeda.

```javascript
console.log("5" + 3);     // "53"  -> angka diubah jadi string
console.log("5" - 3);     // 2     -> string diubah jadi angka
console.log("5" * "2");   // 10
console.log(true + 1);    // 2     -> true dianggap 1
console.log(null + 1);    // 1     -> null dianggap 0
console.log(undefined + 1); // NaN
```

> ⚠️ Type coercion sering menjadi sumber bug jika tidak dipahami dengan baik.

## Tipe Data Primitif di JavaScript

| Tipe | Contoh | Keterangan |
|------|--------|------------|
| `number` | `42`, `3.14` | Angka bulat & desimal |
| `string` | `"halo"` | Teks |
| `boolean` | `true`, `false` | Logika benar/salah |
| `undefined` | `let x;` | Variabel belum diberi nilai |
| `null` | `let x = null;` | Sengaja dikosongkan |
| `bigint` | `123n` | Angka sangat besar |
| `symbol` | `Symbol('id')` | Nilai unik |

Selain itu ada tipe **object** (termasuk array, function, dan object biasa).

## Mengecek Tipe Data: `typeof`

```javascript
typeof 42;          // "number"
typeof "halo";       // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object"  <- ini adalah bug lama JavaScript!
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
```

> 🐛 **Fakta unik:** `typeof null` menghasilkan `"object"`, padahal `null` bukan objek. Ini adalah bug historis JavaScript yang tidak diperbaiki demi menjaga kompatibilitas kode lama.

## Perbandingan `==` vs `===`

- `==` (loose equality): membandingkan nilai **setelah** melakukan type coercion.
- `===` (strict equality): membandingkan nilai **dan** tipe data, tanpa konversi.

```javascript
0 == "0";     // true  (string "0" dikonversi ke number 0)
0 === "0";    // false (tipe berbeda: number vs string)

null == undefined;  // true
null === undefined; // false
```

> ✅ **Best practice:** Selalu gunakan `===` dan `!==` untuk menghindari bug akibat type coercion yang tidak disengaja.

## Kenapa Type System Penting untuk Code Quality?

Karena JavaScript sangat fleksibel dalam hal tipe data, developer harus **disiplin** agar kode tetap dapat diprediksi. Inilah alasan munculnya alat bantu seperti:

- **JSDoc** — anotasi tipe lewat komentar (dibahas di Bab 3).
- **Flow** — pustaka pengecekan tipe (Bab 4).
- **TypeScript** — superset JavaScript dengan tipe statis (Bab 5).

## Latihan Kecil

Tebak hasil dari kode berikut sebelum menjalankannya:

```javascript
console.log(1 + "1");
console.log("10" - "4");
console.log(true == 1);
console.log(true === 1);
console.log([] + []);
console.log([] + {});
```

## Poin Penting

- JavaScript bersifat *dynamically typed* dan *weakly typed*.
- Type coercion bisa menjadi sumber bug tersembunyi.
- Gunakan `===`/`!==` untuk perbandingan yang aman.
- Memahami type system adalah dasar sebelum belajar alat type-checking seperti Flow dan TypeScript.

---
⬅️ [01. Pengantar Code Quality](01-pengantar-code-quality.md) | ➡️ [03. JSDoc, Alat Dokumentasi Kode](03-jsdoc-alat-dokumentasi.md)