# 09. Promise.all() dan Promise.allSettled()

> Menjalankan banyak operasi asynchronous secara paralel dan menunggu semuanya selesai bersamaan.

## Tujuan Pembelajaran

- Menjalankan beberapa Promise secara paralel dengan Promise.all()
- Memahami perilaku 'fail-fast' pada Promise.all()
- Menggunakan Promise.allSettled() saat semua hasil tetap dibutuhkan walau ada yang gagal

## Kenapa Perlu Paralel?

Chaining di materi 08 cocok untuk operasi yang saling **bergantung** (urutan penting). Tapi jika beberapa permintaan data **tidak saling bergantung**, menjalankannya satu-satu justru membuang waktu. `Promise.all()` menjalankan semuanya **bersamaan**.

```js
const p1 = ambilData("/api/produk");
const p2 = ambilData("/api/kategori");
const p3 = ambilData("/api/promo");

Promise.all([p1, p2, p3])
  .then(([produk, kategori, promo]) => {
    console.log(produk, kategori, promo);
  })
  .catch((error) => {
    console.log("Salah satu gagal:", error);
  });
```

## Sifat 'Fail-Fast'

```js
Promise.all([
  Promise.resolve("A"),
  Promise.reject("Gagal di B"),
  Promise.resolve("C"),
]).then((hasil) => {
  console.log(hasil); // tidak akan tercapai
}).catch((error) => {
  console.log(error); // "Gagal di B"
});
```

> **Perhatian:** `Promise.all()` bersifat *fail-fast*: begitu **salah satu** Promise reject, seluruh `Promise.all()` langsung reject — walau Promise lain sebenarnya masih berjalan atau bahkan berhasil.

## Promise.allSettled(): Tetap Tunggu Semua

Jika kamu tetap butuh **semua** hasil, baik yang berhasil maupun gagal, gunakan `Promise.allSettled()`. Ia tidak pernah reject — tiap hasil punya status `fulfilled` atau `rejected`.

```js
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("Gagal di B"),
  Promise.resolve("C"),
]).then((hasil) => {
  hasil.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log("Berhasil:", item.value);
    } else {
      console.log("Gagal:", item.reason);
    }
  });
});
```

> **Tips:** `Promise.all()` saat semua data wajib berhasil demi UI berfungsi. `Promise.allSettled()` saat kegagalan sebagian data masih bisa ditoleransi, misalnya memuat beberapa widget dashboard independen.

## Latihan

Tiga permintaan API dijalankan paralel. Salah satunya gagal, tapi kamu tetap ingin menampilkan dua data lain yang berhasil. Method mana yang dipakai?

<details>
<summary>Lihat Jawaban</summary>

`Promise.allSettled()`, karena metode ini tidak langsung gagal total hanya karena satu Promise reject — kamu bisa memfilter hasil yang `status === "fulfilled"` untuk ditampilkan.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Promise Chaining](../08 Promise Chaining/Readme.md) | [Async/Await Dasar →](../10 Async Await Dasar/Readme.md)
