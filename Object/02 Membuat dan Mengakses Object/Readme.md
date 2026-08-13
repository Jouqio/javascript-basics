# 02 - Membuat dan Mengakses Object

## Cara Membuat Object

### 1. Object Literal (Paling Umum)
Cara paling sering dipakai — langsung menulis `{}` beserta isinya.

```js
let user = {
  nama: "Andi",
  email: "andi@email.com",
};
```

### 2. Menggunakan `new Object()`
Cara lain yang lebih jarang dipakai (lebih verbose):

```js
let user = new Object();
user.nama = "Andi";
user.email = "andi@email.com";
```

Untuk pemula, **selalu gunakan object literal (`{}`)** karena lebih ringkas dan menjadi standar penulisan modern.

### 3. Object Kosong
Kadang kita ingin membuat object kosong terlebih dahulu, lalu mengisinya belakangan:

```js
let dataForm = {};
dataForm.nama = "Citra";
```

## Dua Cara Mengakses Properti

### 1. Dot Notation (`.`)
Cara paling umum dan paling sering dipakai:

```js
console.log(user.nama); // "Andi"
```

**Syarat**: nama key harus valid sebagai nama variabel (tidak boleh ada spasi, tidak dimulai angka, dll).

### 2. Bracket Notation (`[]`)
Wajib dipakai ketika:
- Nama key mengandung spasi atau karakter khusus
- Nama key disimpan dalam **variabel** (dinamis)

```js
let data = {
  "nomor telepon": "08123456789", // key ada spasi, HANYA bisa diakses dengan bracket notation
};
console.log(data["nomor telepon"]); // "08123456789"
// console.log(data.nomor telepon); // ERROR! tidak valid dengan dot notation

let namaKey = "nama";
console.log(user[namaKey]); // "Andi" -> berguna kalau nama key berasal dari variabel
```

## Mengakses Properti yang Tidak Ada

Kalau kita mencoba mengakses properti yang **tidak ada** di dalam object, hasilnya adalah `undefined`, bukan error.

```js
console.log(user.alamat); // undefined (properti tidak ada, tidak error)
```

## Kapan Pakai Dot Notation vs Bracket Notation?

| Situasi | Gunakan |
|---|---|
| Nama key sudah pasti dan valid | Dot notation (`.`) — lebih ringkas dan mudah dibaca |
| Nama key ada spasi/karakter khusus | Bracket notation (`[]`) — wajib |
| Nama key berasal dari variabel (dinamis) | Bracket notation (`[]`) — wajib |

## Poin Penting

- Cara paling umum membuat object: **object literal** (`{}`)
- Dot notation (`obj.key`) untuk akses yang simpel dan langsung
- Bracket notation (`obj["key"]` atau `obj[variabel]`) untuk key yang mengandung spasi/karakter khusus, atau saat key-nya dinamis
- Mengakses properti yang tidak ada menghasilkan `undefined`, bukan error

Lanjut ke → [03 Menambah, Mengubah, dan Menghapus Properti](../03%20Menambah%20Mengubah%20dan%20Menghapus%20Properti/Readme.md)
