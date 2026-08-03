# Menggunakan Module dalam Modularisasi JavaScript

Ringkasan materi tentang cara menggunakan (mengekspor dan mengimpor) module secara praktik, serta cara mengaktifkan ES Module (ESM) di Node.js maupun browser.

## Daftar Isi

- [Pengantar](#pengantar)
- [Mengekspor Variable](#mengekspor-variable)
- [Mengekspor Function](#mengekspor-function)
- [Mengimpor Variable](#mengimpor-variable)
- [Mengimpor Function](#mengimpor-function)
- [Menggunakan Modularisasi ESM di Node.js](#menggunakan-modularisasi-esm-di-nodejs)
- [Menggunakan Modularisasi ESM di Browser](#menggunakan-modularisasi-esm-di-browser)
- [Ringkasan Perbandingan](#ringkasan-perbandingan)

## Pengantar

Setelah memahami konsep dasar `import` dan `export`, materi ini membahas praktik langsung menggunakan module di JavaScript — mulai dari mengekspor variable/function hingga cara mengaktifkan ESM di Node.js dan browser.

## Mengekspor Variable

Di berkas `module.mjs`, variable dapat langsung diekspor menggunakan keyword `export`. Berlaku untuk berbagai tipe data, seperti string maupun array.

```js
// module.mjs
export const name = "Dicoding";
export const favoriteFood = ["pizza", "pasta", "sushi"];
```

## Mengekspor Function

Cara mengekspor function tidak jauh berbeda dengan variable.

```js
// module.mjs
export const name = "John";
export const favoriteFood = ["pizza", "pasta", "sushi"];

export function sayHi(name) {
  console.log(`Hi, ${name}!`);
}
```

Agar tidak perlu menuliskan `export` di setiap nilai, kita bisa mengekspornya sekaligus di **akhir berkas**:

```js
// module.mjs
const name = "John";
const favoriteFood = ["pizza", "pasta", "sushi"];

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

export { name, favoriteFood, sayHi };
```

## Mengimpor Variable

Buat berkas baru, misalnya `index.mjs`, untuk mengimpor nilai dari `module.mjs`.

```js
// index.mjs
import { name, favoriteFood } from "./module.mjs";

console.log(name);
console.log(favoriteFood);
```

Kita juga bisa mengimpor dengan **import alias** — hasilnya tetap sama, hanya beda penamaan:

```js
import { name, favoriteFood as food } from "./module.mjs";

console.log(name);
console.log(food);
```

## Mengimpor Function

Function diimpor dengan cara yang sama seperti variable (named import):

```js
import { name, favoriteFood as food, sayHi } from "./module.mjs";

console.log(name);
console.log(food);
sayHi(name);
```

Jika ingin mengimpor **seluruh nilai** dari suatu module, gunakan `import *` agar lebih ringkas:

```js
import * as user from "./module.mjs";

console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);
```

## Menggunakan Modularisasi ESM di Node.js

ESModule (ESM) merupakan fitur yang relatif baru di Node.js, sehingga membutuhkan konfigurasi tambahan agar `import`/`export` tidak error. Ada dua cara:

### 1. Mengubah Ekstensi Berkas

Ubah ekstensi dari `.js` menjadi **`.mjs`**. Ini memberitahu Node.js bahwa berkas tersebut menggunakan ESM.

- ✅ Sederhana untuk project kecil.
- ⚠️ Tidak praktis jika project memiliki banyak berkas, karena harus diubah satu per satu.

### 2. Menambahkan Konfigurasi di `package.json`

Cara ini menghindari kebutuhan mengganti ekstensi satu per satu.

1. Buka (atau buat) `package.json` — bisa dibuat dengan `npm init -y` jika belum ada.
2. Tambahkan baris berikut:

```json
{
  "type": "module"
}
```

> Cara inilah yang digunakan sepanjang modul pembelajaran ini. Pilih salah satu cara sesuai kebutuhan project.

## Menggunakan Modularisasi ESM di Browser

ESM tidak hanya berlaku di Node.js, tapi juga bisa digunakan langsung di **browser** — kabar baik khususnya untuk Front-End Developer.

**Cara mengaktifkan**, tambahkan atribut `type="module"` pada tag `<script>`:

```html
<script src="./esmodule.js" type="module"></script>
```

**Fallback untuk browser lama** yang belum mendukung ESM, gunakan atribut `nomodule`:

```html
<script nomodule src="fallback.js"></script>
```

Atribut `nomodule` memberitahu browser untuk memuat `fallback.js` jika ESM tidak didukung.

**Inline ESM** juga dimungkinkan, tanpa perlu berkas terpisah:

```html
<script type="module">
  import App from "./app.js";
  console.log(App);
</script>
```

## Ringkasan Perbandingan

| Konteks                   | Cara Mengaktifkan ESM                          | Catatan                                             |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| Node.js — per berkas      | Ubah ekstensi menjadi `.mjs`                   | Sederhana, tapi kurang efisien untuk banyak berkas  |
| Node.js — level project   | Tambahkan `"type": "module"` di `package.json` | Direkomendasikan untuk project dengan banyak berkas |
| Browser — berkas terpisah | `<script src="..." type="module">`             | Perlu fallback `nomodule` untuk browser lama        |
| Browser — inline          | `<script type="module"> ... </script>`         | Tidak perlu berkas terpisah                         |

**Poin penting terkait import:**

| Teknik       | Sintaks                        | Kegunaan                                           |
| ------------ | ------------------------------ | -------------------------------------------------- |
| Named import | `import { x } from '...'`      | Mengimpor nilai spesifik berdasarkan nama          |
| Import alias | `import { x as y } from '...'` | Mengubah nama saat import, hasil tetap sama        |
| Import \*    | `import * as obj from '...'`   | Mengimpor semua nilai sekaligus sebagai satu objek |
