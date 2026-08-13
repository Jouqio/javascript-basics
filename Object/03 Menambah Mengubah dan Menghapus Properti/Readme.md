# 03 - Menambah, Mengubah, dan Menghapus Properti

## Object Bersifat Mutable

Berbeda dengan tipe data primitif (Number, String, dll) yang **immutable** (tidak bisa diubah), Object bersifat **mutable** — isinya **bisa diubah langsung** setelah dibuat, meskipun object tersebut dideklarasikan dengan `const`.

```js
const user = { nama: "Andi" };
user.nama = "Budi"; // BISA! walaupun pakai const
console.log(user); // { nama: "Budi" }
```

**Penting**: `const` pada object hanya mengunci **referensinya** (tidak bisa di-assign ulang ke object baru), tapi **isinya tetap bisa diubah**.

```js
const user = { nama: "Andi" };
user = { nama: "Citra" }; // ERROR! tidak bisa assign ulang variabel const
```

## Menambah Properti Baru

Cukup tulis nama key baru (belum ada sebelumnya) dan berikan nilainya:

```js
let user = { nama: "Andi" };
user.email = "andi@email.com"; // properti baru otomatis ditambahkan
user["umur"] = 25;                // bisa juga pakai bracket notation
```

## Mengubah Nilai Properti yang Sudah Ada

Kalau key-nya **sudah ada**, maka menulis ulang akan **mengganti nilainya**, bukan menambah baru:

```js
let user = { nama: "Andi", umur: 20 };
user.umur = 21; // nilai umur diubah dari 20 jadi 21
```

## Menghapus Properti

Gunakan keyword `delete`:

```js
let user = { nama: "Andi", umur: 20, email: "andi@email.com" };
delete user.email;
console.log(user); // { nama: "Andi", umur: 20 } -> email sudah hilang
```

## Mengecek Apakah Properti Ada

### Menggunakan `in`
```js
console.log("nama" in user); // true
console.log("alamat" in user); // false
```

### Menggunakan `hasOwnProperty()`
```js
console.log(user.hasOwnProperty("nama")); // true
```

Kedua cara ini lebih **aman** daripada sekadar mengecek `if (user.nama)`, karena kalau nilainya `0`, `""`, atau `false` (nilai falsy tapi valid), pengecekan `if (user.nama)` akan salah menganggapnya "tidak ada".

## Poin Penting

- Object bersifat mutable — isinya bisa diubah walaupun dideklarasikan dengan `const`
- `const` pada object hanya mengunci referensi, bukan isinya
- Menambah/mengubah properti cukup dengan `obj.key = nilai`
- Menghapus properti dengan `delete obj.key`
- Gunakan `in` atau `.hasOwnProperty()` untuk mengecek keberadaan properti secara aman

Lanjut ke → [04 Method dan this](../04%20Method%20dan%20this/Readme.md)
