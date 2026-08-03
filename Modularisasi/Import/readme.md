# Import dalam Modularisasi JavaScript

Ringkasan materi tentang cara meng-import function/method/variable antar modul di JavaScript.

## Daftar Isi

- [Pengantar](#pengantar)
- [Default Import](#default-import)
- [Named Import](#named-import)
- [Import *](#import-)
- [Import Alias](#import-alias)
- [Analogi Sehari-hari](#analogi-sehari-hari)
- [Ringkasan Perbandingan](#ringkasan-perbandingan)

## Pengantar

JavaScript memungkinkan kita menggunakan function/method dari modul lain dengan dua syarat:

1. Function/method tersebut harus di-**import**.
2. Function/method tersebut harus sudah di-**export** dari modul asalnya.

Import dilakukan dengan kata kunci `import`, diikuti nama function/method/variable yang ingin digunakan.

## Default Import

Default import digunakan untuk mengimpor sesuatu yang di-export secara **default** dari sebuah modul.

```js
// main.mjs
import myFunction from './anotherfile.mjs';

myFunction();
```

Ciri khas default import: **nama yang kita gunakan saat import tidak harus sama** dengan nama aslinya di modul sumber.

```js
// main.mjs
import result from './anotherfile.mjs'; // tetap mengimpor myFunction

result();
```

Apa pun nama yang kita tulis, yang ter-import tetaplah function yang di-export default dari modul tersebut.

## Named Import

Digunakan ketika sebuah modul meng-export **banyak** function/method/variable, dan kita ingin mengimpor yang spesifik berdasarkan namanya.

```js
// main.mjs
import { myFunction } from './anotherfile.mjs';

myFunction();
```

Ciri khas named import:

- Nama yang diimpor **harus sesuai** dengan nama aslinya di modul sumber.
- Ditulis di dalam kurung kurawal `{}`.
- Bisa mengimpor lebih dari satu sekaligus.

```js
// main.mjs
import { name, email, age } from './anotherfile.mjs';

console.log(name);
console.log(email);
console.log(age);
```

## Import *

Digunakan ketika function/method/variable yang ingin diimpor dari satu modul **sangat banyak**, sehingga tidak praktis menuliskannya satu per satu dengan named import.

```js
// main.mjs
import * as variable from './anotherfile.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
```

Semua yang di-export dari modul akan tersedia sebagai properti dari objek `variable`.

> **Named import (`{}`) vs Import * (`*`)**
> - `import *` — mengimpor **semua** yang di-export sekaligus, tapi kurang eksplisit (sulit diketahui apa saja yang benar-benar dipakai).
> - `import {}` — lebih **eksplisit**, karena terlihat jelas function/method/variable apa saja yang diimpor.

## Import Alias

Digunakan untuk mengubah nama function/method/variable yang diimpor dari modul lain, biasanya dengan keyword `as`. Berguna untuk:

- Menghindari **konflik nama** ketika ada nama yang sama di beberapa modul.
- Meningkatkan **keterbacaan (readability)** kode.

Contoh masalah: jika `myFunction` ada di dua modul berbeda (`user.mjs` dan `customer.mjs`) dan ingin dipakai bersamaan di `main.mjs`, akan terjadi error karena nama yang sama diimpor dua kali.

Solusinya, gunakan import alias:

```js
// main.mjs
import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();
```

Dengan alias, kita langsung tahu konteks dan asal dari function tersebut — misalnya `userFunction` jelas berasal dari modul `user`.

## Analogi Sehari-hari

Untuk memahami konsep import, bayangkan sedang memasak dan kehabisan bahan, lalu meminjam ke tetangga:

- **Import** — meminjam bahan dari tetangga. Di pemrograman, ini artinya menggunakan kode/fungsi yang sudah dibuat orang lain tanpa perlu membuat dari awal.
- **Named Import** — meminjam barang dengan menyebut nama spesifiknya, misalnya "boleh pinjam wajannya?".
- **Default Import** — meminjam tanpa menyebut nama spesifik, cukup bilang "boleh pinjam bahan utamanya?" — yang dipinjam adalah bahan yang paling umum/utama dari dapur tetangga.

## Ringkasan Perbandingan

| Jenis Import | Sintaks | Kapan Digunakan | Nama Harus Sesuai? |
|---|---|---|---|
| Default Import | `import namaBebas from './file.mjs'` | Modul hanya punya 1 export utama | Tidak |
| Named Import | `import { nama } from './file.mjs'` | Ingin ambil beberapa item spesifik | Ya |
| Import * | `import * as alias from './file.mjs'` | Item yang di-export sangat banyak | Tidak (diakses lewat `alias.nama`) |
| Import Alias | `import { nama as aliasBaru } from './file.mjs'` | Ada konflik nama antar modul | Nama asli tetap harus sesuai |

Catatan: Materi tentang **export** akan dibahas terpisah di materi selanjutnya.