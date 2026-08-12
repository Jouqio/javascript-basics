# 07. Pengenalan Promise

> Objek yang mewakili nilai yang belum tersedia sekarang, tapi dijanjikan akan tersedia di masa depan.

## Tujuan Pembelajaran

- Memahami tiga status Promise: pending, fulfilled, rejected
- Membuat Promise sendiri dengan resolve dan reject
- Mengonsumsi Promise dengan .then() dan .catch()

## Apa itu Promise?

`Promise` adalah objek yang mewakili hasil dari operasi asynchronous yang **belum tentu selesai sekarang**. Sebuah Promise selalu berada di salah satu dari tiga status:

- **pending** — belum selesai, masih menunggu.
- **fulfilled** — berhasil, punya nilai hasil (di-*resolve*).
- **rejected** — gagal, punya alasan kegagalan (di-*reject*).

## Membuat Promise Sendiri

`resolve` dipanggil saat operasi berhasil, `reject` dipanggil saat gagal. Keduanya hanya boleh dipanggil **salah satu**, dan hanya **sekali**.

```js
const cekUmur = new Promise((resolve, reject) => {
  const umur = 20;

  setTimeout(() => {
    if (umur >= 18) {
      resolve("Diizinkan masuk");
    } else {
      reject("Ditolak, belum cukup umur");
    }
  }, 1000);
});
```

## Mengonsumsi Promise

```js
cekUmur
  .then((hasil) => {
    console.log("Berhasil:", hasil);
  })
  .catch((error) => {
    console.log("Gagal:", error);
  });

// Setelah 1 detik -> "Berhasil: Diizinkan masuk"
```

> **Tips:** Promise menyelesaikan masalah callback hell (materi 03) dengan menyediakan cara standar untuk menangani sukses (`.then`) dan gagal (`.catch`) tanpa nested callback.

## Latihan

Buat Promise bernama `cekKoneksi` yang resolve dengan pesan `"Terhubung"` setelah 1 detik, lalu konsumsi dengan `.then()`.

<details>
<summary>Lihat Jawaban</summary>

```js
const cekKoneksi = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Terhubung");
  }, 1000);
});

cekKoneksi.then((status) => {
  console.log(status); // "Terhubung"
});
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← setInterval() dan clearInterval()](../06 setInterval dan clearInterval/Readme.md) | [Promise Chaining →](../08 Promise Chaining/Readme.md)
