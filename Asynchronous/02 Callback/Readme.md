# 02 - Callback

## Apa itu Callback?

**Callback** adalah **fungsi yang dikirim sebagai argumen/parameter ke fungsi lain**, lalu dipanggil (di-"call back") oleh fungsi tersebut setelah suatu proses selesai.

Di JavaScript, fungsi adalah **first-class citizen**, artinya fungsi bisa diperlakukan seperti nilai biasa: disimpan ke variabel, dikirim sebagai parameter, atau dikembalikan dari fungsi lain. Inilah yang membuat konsep callback bisa terjadi.

## Analogi

Bayangkan kamu menitip cucian ke laundry. Kamu bilang ke petugas: *"Kalau sudah selesai, telepon saya ya."* Nomor telepon kamu itu ibarat **callback** — petugas laundry (fungsi utama) akan "memanggil balik" kamu (menjalankan fungsi callback) setelah pekerjaannya (mencuci) selesai.

## Callback Sederhana (Synchronous)

Callback tidak selalu berarti asynchronous. Callback juga bisa dipanggil langsung/synchronous, contohnya pada `array.forEach()` atau `array.map()`.

## Callback untuk Asynchronous

Yang lebih sering dibahas adalah callback untuk menangani proses **asynchronous**, misalnya menunggu hasil `setTimeout`, request ke server, atau membaca file.

## Pola Error-First Callback

Di Node.js, ada konvensi yang disebut **error-first callback**: parameter pertama callback selalu diperuntukkan untuk error (kalau ada), parameter berikutnya untuk data hasil.

```js
function ambilData(callback) {
  // callback(error, data)
}
```

Kalau tidak ada error, parameter pertama diisi `null`.

## Kekurangan Callback

Callback bekerja dengan baik untuk 1 proses asynchronous. Tapi kalau ada **banyak proses asynchronous yang berurutan** (proses B baru bisa jalan setelah proses A selesai, dst), maka callback akan bersarang (nested) semakin dalam. Ini disebut **Callback Hell**, yang akan dibahas di materi berikutnya.

## Poin Penting

- Callback = fungsi yang dikirim sebagai parameter, dipanggil belakangan oleh fungsi lain
- Callback bisa synchronous (langsung dipanggil) atau asynchronous (dipanggil setelah proses selesai)
- Konvensi umum di Node.js: **error-first callback** → `callback(error, data)`
- Callback adalah fondasi dasar sebelum memahami Promise dan Async/Await

Lanjut ke → [03 Callback Hell](../03%20Callback%20Hell/Readme.md)
