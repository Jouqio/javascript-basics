# 08 - Immutable Object

## Apa itu Immutable Object?

**Immutable** artinya **tidak bisa diubah**. Seperti sudah dibahas di materi sebelumnya, object di JavaScript **secara default bersifat mutable** (bisa diubah isinya). Materi ini membahas cara-cara membuat object **immutable (tidak bisa diubah)**, dan kenapa itu penting.

## Kenapa Immutability Penting?

1. **Mencegah bug tak terduga** — data tidak akan berubah "diam-diam" oleh bagian kode lain
2. **Kode lebih mudah diprediksi** — kita bisa yakin data tidak berubah tanpa sepengetahuan kita
3. **Memudahkan debugging** — kalau data ternyata berubah, kita tahu itu bukan karena bug immutability
4. **Best practice di banyak framework modern** (React, Redux, dll) — sering mensyaratkan data immutable untuk mendeteksi perubahan (state) dengan efisien

## `Object.freeze()` — Membekukan Object

`Object.freeze()` membuat object **tidak bisa diubah, ditambah, atau dihapus propertinya**.

```js
const user = Object.freeze({ nama: "Andi", umur: 20 });

user.umur = 25;        // diabaikan (tidak error di mode normal, tapi tidak berpengaruh)
user.email = "andi@x.com"; // diabaikan, properti tidak ditambahkan
delete user.nama;       // diabaikan, properti tidak terhapus

console.log(user); // { nama: "Andi", umur: 20 } -> TIDAK BERUBAH SAMA SEKALI
```

**Catatan penting**: di **strict mode** (`"use strict"` atau di dalam module/class), mencoba mengubah object yang di-freeze akan menghasilkan **error**, bukan diabaikan diam-diam.

## Cek Object Sudah Frozen atau Belum

```js
console.log(Object.isFrozen(user)); // true
```

## Peringatan: `Object.freeze()` Hanya Shallow (Dangkal)!

Sama seperti shallow copy, `Object.freeze()` **hanya membekukan level pertama**. Object bersarang di dalamnya **masih bisa diubah**!

```js
const data = Object.freeze({
  nama: "Budi",
  alamat: { kota: "Bontang" },
});

data.alamat.kota = "Samarinda"; // BERHASIL diubah! karena alamat tidak ikut di-freeze
console.log(data.alamat.kota); // "Samarinda"
```

Untuk membekukan **semua level (deep freeze)**, kita perlu menulis fungsi rekursif sendiri, atau memakai library seperti `Immer` di proyek besar.

## Pendekatan Lain: "Immutable by Convention" dengan Spread Operator

Selain `Object.freeze()`, pendekatan yang **lebih umum dipakai di JavaScript modern** (terutama React) adalah: **jangan pernah mengubah object secara langsung**, tapi selalu **buat object baru** ketika ingin "mengubah" data.

```js
const userLama = { nama: "Citra", umur: 20 };

// SALAH (mutasi langsung):
// userLama.umur = 21;

// BENAR (membuat object baru dengan perubahan):
const userBaru = { ...userLama, umur: 21 };

console.log(userLama); // { nama: "Citra", umur: 20 } -> tidak berubah
console.log(userBaru); // { nama: "Citra", umur: 21 } -> data baru
```

Pola ini disebut **immutable update pattern**, sangat umum dipakai walaupun object aslinya sebenarnya tidak di-freeze.

## Kapan Pakai `Object.freeze()` vs Konvensi Spread?

| Situasi | Gunakan |
|---|---|
| Data konfigurasi/konstanta yang **benar-benar tidak boleh diubah** | `Object.freeze()` |
| State aplikasi yang sering "diperbarui" (React, Redux, dll) | Konvensi spread operator (immutable update pattern) |

## Poin Penting

- `Object.freeze()` mencegah penambahan, pengubahan, dan penghapusan properti object
- `Object.freeze()` hanya bekerja **shallow** (level pertama saja), object bersarang tetap bisa diubah
- Pendekatan yang lebih umum: **jangan mutasi langsung**, buat object baru dengan spread operator saat ingin "mengubah" data
- Immutability membantu mencegah bug, terutama di aplikasi besar/framework modern

Lanjut ke → [09 Destructuring Object](../09%20Destructuring%20Object/Readme.md)
