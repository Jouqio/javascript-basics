# 01. Pengantar Asynchronous JavaScript

> Kenapa JavaScript butuh cara berpikir *asynchronous*, dan apa itu single-threaded, call stack, serta event loop.

## Tujuan Pembelajaran

- Memahami bahwa JavaScript bersifat single-threaded
- Membedakan kode synchronous vs asynchronous
- Mengenal istilah call stack, Web API, queue, dan event loop secara garis besar

## Apa itu Synchronous?

JavaScript pada dasarnya berjalan **satu per satu, satu baris demi satu baris, secara berurutan**. Ini disebut *synchronous*. Setiap baris kode harus selesai dulu sebelum baris berikutnya dieksekusi.

Masalahnya, dunia nyata tidak selalu instan. Mengambil data dari server, membaca file, atau menunggu timer butuh **waktu**. Kalau JavaScript menunggu (blocking) setiap operasi ini selesai, seluruh halaman web akan macet total.

```js
console.log("Satu");
console.log("Dua");
console.log("Tiga");

// Output selalu berurutan:
// Satu
// Dua
// Tiga
```

## Apa itu Asynchronous?

*Asynchronous* artinya sebuah operasi bisa 'ditinggal jalan dulu', lalu hasilnya diproses **nanti** ketika sudah siap, tanpa menghentikan baris kode lain.

```js
console.log("Mulai");

setTimeout(() => {
  console.log("Selesai menunggu 2 detik");
}, 2000);

console.log("Lanjut tanpa menunggu");

// Output:
// Mulai
// Lanjut tanpa menunggu
// (2 detik kemudian)
// Selesai menunggu 2 detik
```

> **Tips:** JavaScript tidak berhenti menunggu `setTimeout`. Ia lanjut mengerjakan baris berikutnya, dan callback timer dijalankan belakangan saat waktunya tiba.

## Empat Aktor di Balik Layar

Empat istilah berikut akan terus muncul di semua materi:

- **Call Stack** — tempat kode synchronous dieksekusi, satu per satu, seperti tumpukan piring.
- **Web API** — fitur milik browser/runtime (bukan JavaScript itu sendiri) seperti `setTimeout`, `fetch`, yang mengerjakan tugas di belakang layar.
- **Callback / Microtask Queue** — antrean tempat callback menunggu giliran dijalankan setelah tugasnya di Web API selesai.
- **Event Loop** — 'satpam' yang terus mengecek: kalau call stack kosong, ambil tugas paling depan dari queue dan jalankan.

Materi 02–09 membahas fondasi ini satu per satu sebelum masuk ke `async/await` di materi 10.

## Latihan

Tanpa menjalankan kode, tebak urutan output berikut:

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
```

<details>
<summary>Lihat Jawaban</summary>

Urutannya adalah **A, C, B**. Meski delay-nya 0 milidetik, `setTimeout` tetap dijadwalkan lewat Web API dan baru dieksekusi setelah semua kode synchronous (A dan C) selesai.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[Callback Function →](../02 Callback Function/Readme.md)
