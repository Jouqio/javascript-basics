# 05 - Null dan Undefined

## Dua Cara "Tidak Ada Nilai" di JavaScript

JavaScript punya **dua** tipe data khusus untuk merepresentasikan "ketiadaan nilai": `undefined` dan `null`. Keduanya sering membingungkan pemula karena sekilas terlihat mirip, padahal maknanya berbeda.

## `undefined` — Belum Diberi Nilai

`undefined` muncul secara **otomatis** ketika:

1. Variabel dideklarasikan tapi **belum diberi nilai**
2. Mengakses properti object yang **tidak ada**
3. Fungsi **tidak me-return apa-apa**
4. Parameter fungsi yang **tidak diisi** saat dipanggil

```js
let x;
console.log(x); // undefined (belum diisi)

let obj = { nama: "Budi" };
console.log(obj.alamat); // undefined (properti tidak ada)

function tanpaReturn() {}
console.log(tanpaReturn()); // undefined
```

## `null` — Sengaja Dikosongkan

`null` **harus diisi secara manual oleh programmer** untuk menandakan **"sengaja tidak ada nilai"** atau "kosong dengan sengaja". Ini berbeda dari `undefined` yang muncul otomatis.

```js
let dataUser = null; // sengaja dikosongkan, misalnya karena user belum login
```

## Analogi Sederhana

Bayangkan sebuah formulir dengan kolom "Nomor HP":

- **`undefined`** = kolom itu **belum pernah disentuh sama sekali**
- **`null`** = kolom itu **sengaja dikosongkan** karena user memang tidak punya nomor HP

## Perbandingan `null` dan `undefined`

```js
console.log(null == undefined);  // true  (loose equality, dianggap "mirip")
console.log(null === undefined); // false (strict equality, tipe data BEDA)

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  <- ini KEANEHAN/bug bersejarah JavaScript!
```

Kenapa `typeof null` menghasilkan `"object"`? Ini adalah **bug yang sudah ada sejak versi JavaScript pertama (1995)**, tapi tidak pernah diperbaiki karena akan merusak banyak kode yang sudah bergantung pada perilaku ini. Jadi ingat: **ini bukan berarti `null` benar-benar bertipe object**, ini murni keanehan historis.

## Kapan Pakai yang Mana?

- Biarkan `undefined` muncul secara alami (jangan sengaja menetapkan variabel ke `undefined`)
- Gunakan `null` ketika kamu **secara sengaja** ingin menyatakan "tidak ada nilai" — misalnya sebagai nilai awal sebelum data diisi dari server

## Poin Penting

- `undefined` = muncul otomatis, artinya "belum diberi nilai"
- `null` = harus diisi manual oleh programmer, artinya "sengaja dikosongkan"
- `null == undefined` → `true`, tapi `null === undefined` → `false` (tipe berbeda)
- `typeof null` menghasilkan `"object"` — ini adalah bug historis JavaScript, bukan aturan yang benar secara logika

Lanjut ke → [06 Array](../06%20Array/Readme.md)
