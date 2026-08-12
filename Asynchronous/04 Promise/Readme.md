# 04 - Promise

## Apa itu Promise?

**Promise** adalah objek di JavaScript yang mewakili **"janji"** akan adanya nilai di masa depan — entah itu berhasil (sukses) atau gagal (error) — dari sebuah proses asynchronous.

Promise adalah solusi resmi dari JavaScript untuk mengatasi **Callback Hell**.

## Analogi

Promise itu seperti **nomor antrian** di rumah sakit. Saat kamu daftar, kamu tidak langsung dilayani, tapi diberi nomor antrian (Promise). Nomor itu "menjanjikan" kamu akan dipanggil nanti — entah gilirannya tiba (fulfilled) atau ternyata kamu harus daftar ulang karena ada masalah (rejected).

## 3 State (Kondisi) Promise

Sebuah Promise hanya bisa berada di salah satu dari 3 kondisi:

1. **Pending** → masih dalam proses, belum selesai
2. **Fulfilled** → berhasil, promise "resolved" dengan sebuah nilai
3. **Rejected** → gagal, promise "rejected" dengan sebuah alasan/error

Setelah promise berpindah ke fulfilled atau rejected, statusnya **tidak bisa berubah lagi** (disebut "settled").

## Membuat Promise

```js
const promiseSaya = new Promise((resolve, reject) => {
  // proses asynchronous di sini
  const berhasil = true;

  if (berhasil) {
    resolve("Berhasil!"); // ubah state jadi fulfilled
  } else {
    reject("Gagal!"); // ubah state jadi rejected
  }
});
```

- `resolve(value)` → dipanggil kalau proses berhasil
- `reject(error)` → dipanggil kalau proses gagal

## Menggunakan (Mengonsumsi) Promise

```js
promiseSaya
  .then((hasil) => {
    console.log("Sukses:", hasil);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

- `.then()` → dijalankan kalau promise fulfilled (resolve)
- `.catch()` → dijalankan kalau promise rejected (reject)
- `.finally()` → selalu dijalankan, baik sukses maupun gagal

## Kenapa Promise Lebih Baik dari Callback?

- Kode lebih **datar** (flat), tidak menjorok bertingkat-tingkat
- Penanganan error terpusat lewat `.catch()`, tidak perlu cek error di tiap level
- Bisa dirangkai (chaining) dengan rapi — dibahas di materi 05

## Poin Penting

- Promise = objek yang mewakili hasil proses asynchronous di masa depan
- 3 state: pending, fulfilled, rejected
- `resolve()` untuk sukses, `reject()` untuk gagal
- `.then()` menangani sukses, `.catch()` menangani gagal, `.finally()` selalu jalan

Lanjut ke → [05 Promise Chaining dan Error Handling](../05%20Promise%20Chaining%20dan%20Error%20Handling/Readme.md)
