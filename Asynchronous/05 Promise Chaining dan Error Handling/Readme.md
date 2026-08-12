# 05 - Promise Chaining dan Error Handling

## Apa itu Promise Chaining?

**Promise chaining** adalah teknik merangkai beberapa `.then()` secara berurutan, di mana **setiap `.then()` mengembalikan promise baru**. Ini memungkinkan kita menjalankan proses asynchronous **berurutan** (proses B butuh hasil dari proses A) **tanpa nested seperti callback hell**.

## Cara Kerja Chaining

```js
ambilData()
  .then((data) => prosesData(data))   // hasilnya dilempar ke .then() berikutnya
  .then((hasilProses) => simpanData(hasilProses))
  .then((konfirmasi) => console.log(konfirmasi))
  .catch((error) => console.log("Ada error di salah satu tahap:", error));
```

Kunci pentingnya: **setiap `.then()` harus me-`return` nilai atau promise baru**, supaya `.then()` berikutnya bisa menerima hasilnya.

## Kelebihan Dibanding Callback Hell

Bandingkan dengan folder `03 Callback Hell` — skenario yang sama (login → profil → pesanan → total) bisa ditulis **datar (flat)**, tidak menjorok bertingkat-tingkat, dan **error ditangani di satu tempat** dengan `.catch()`.

## Error Handling dalam Chaining

Kalau salah satu `.then()` di tengah chain melempar error (baik lewat `reject()` atau `throw`), maka:
- Semua `.then()` setelahnya **dilewati (skip)**
- Kode langsung lompat ke `.catch()` terdekat

Ini membuat penanganan error jadi **terpusat**, tidak perlu cek error di setiap tahap seperti pada callback.

## Menjalankan Beberapa Promise Sekaligus

Kadang kita tidak butuh proses berurutan, tapi ingin menjalankan **beberapa proses asynchronous secara bersamaan (paralel)**. Untuk ini ada beberapa method bawaan:

### `Promise.all()`
Menjalankan banyak promise sekaligus, dan **menunggu semuanya selesai**. Kalau salah satu gagal, `Promise.all()` langsung gagal (reject).

```js
Promise.all([promise1, promise2, promise3])
  .then((hasilArray) => console.log(hasilArray))
  .catch((error) => console.log(error));
```

### `Promise.allSettled()`
Mirip `Promise.all()`, tapi **menunggu semua promise selesai** (baik sukses/gagal) tanpa langsung reject kalau ada yang gagal. Hasilnya berupa array status masing-masing promise.

### `Promise.race()`
Mengembalikan hasil dari promise **yang paling cepat selesai** (baik sukses maupun gagal), yang lain diabaikan.

## Poin Penting

- Chaining = merangkai `.then()` berurutan, setiap `.then()` harus `return` nilai/promise
- Error di tengah chain otomatis melompat ke `.catch()` terdekat
- `Promise.all()` → jalankan paralel, tunggu semua, gagal jika salah satu gagal
- `Promise.allSettled()` → jalankan paralel, tunggu semua, tidak peduli gagal/sukses
- `Promise.race()` → ambil hasil tercepat

Lanjut ke → [06 Async dan Await](../06%20Async%20dan%20Await/Readme.md)
