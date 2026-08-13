# 08. Hoisting

## Apa itu Hoisting?

**Hoisting** adalah perilaku JavaScript yang secara internal **"mengangkat" deklarasi** variabel dan fungsi ke **bagian paling atas** dari scope-nya, **sebelum kode benar-benar dijalankan**. Ini adalah konsep yang cukup unik dan sering membingungkan pemula.

**Penting:** yang di-hoisting hanyalah **deklarasinya**, bukan **nilainya** (inisialisasi).

## Hoisting pada `var`

```js
console.log(nama); // undefined (BUKAN error!)
var nama = "Budi";
console.log(nama); // Budi
```

Kode di atas sebenarnya diperlakukan JavaScript seperti ini "di belakang layar":

```js
var nama; // deklarasi diangkat ke atas (hoisting)
console.log(nama); // undefined, karena belum diberi nilai
nama = "Budi"; // baru di sini nilai diberikan
console.log(nama); // Budi
```

## Hoisting pada `let` dan `const`: Temporal Dead Zone

`let` dan `const` **juga di-hoisting**, tapi berbeda dengan `var` — mereka berada di **"Temporal Dead Zone" (TDZ)**, area di mana variabel **sudah "ada"** tapi **belum bisa diakses** sampai baris deklarasinya benar-benar dieksekusi.

```js
console.log(umur); // ReferenceError: Cannot access 'umur' before initialization
let umur = 25;
```

```js
console.log(skor); // ReferenceError: Cannot access 'skor' before initialization
const skor = 100;
```

## Perbandingan Perilaku Hoisting

| Keyword | Di-hoisting? | Sebelum deklarasi diakses | 
|---------|---------------|------------------------------|
| `var` | ✅ Ya | `undefined` (tidak error) |
| `let` | ✅ Ya (tapi di TDZ) | `ReferenceError` |
| `const` | ✅ Ya (tapi di TDZ) | `ReferenceError` |

## Hoisting pada Function Declaration

Fungsi yang dideklarasikan dengan `function` keyword **juga di-hoisting**, dan **bisa dipanggil sebelum deklarasinya** ditulis di kode:

```js
sapa(); // "Halo!" -> BISA dipanggil meski dipanggil sebelum deklarasi

function sapa() {
  console.log("Halo!");
}
```

Namun, **function expression** (fungsi yang disimpan dalam variabel) **tidak** bisa dipanggil sebelum deklarasinya, karena mengikuti aturan hoisting variabelnya (`var`/`let`/`const`):

```js
sapaLagi(); // ERROR! (jika pakai let/const) atau "sapaLagi is not a function" (jika pakai var)

const sapaLagi = function () {
  console.log("Halo lagi!");
};
```

## Kenapa Hoisting Penting Dipahami?

Meski hoisting adalah perilaku internal JavaScript, memahaminya membantu kita **menghindari bug** yang membingungkan, seperti mengakses variabel yang ternyata masih `undefined` tanpa disadari.

## 💡 Best Practice: Selalu Deklarasikan Variabel di Awal Scope

Untuk menghindari kebingungan akibat hoisting, biasakan untuk **selalu mendeklarasikan variabel sebelum digunakan**, di bagian paling atas dari scope-nya:

```js
// Kurang baik (mengandalkan hoisting, membingungkan)
console.log(total); // undefined
var total = 100;

// Lebih baik (deklarasi eksplisit sebelum dipakai)
let total = 100;
console.log(total); // 100
```

Kebiasaan ini, ditambah dengan **selalu menggunakan `let`/`const`** (bukan `var`), akan membuat kode kamu jauh lebih aman dari bug terkait hoisting.

➡️ Lanjut ke materi berikutnya: **09 Konstanta dan Immutability**
