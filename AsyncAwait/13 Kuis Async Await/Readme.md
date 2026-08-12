# 13. Kuis: Async/Await

> Uji pemahamanmu dari materi 01–12 sebelum lanjut ke Tugas Gabungan.

## Tujuan Pembelajaran

- Menguji pemahaman konsep call stack, Web API, dan event loop
- Menguji pemahaman Promise, async/await, dan error handling
- Mengidentifikasi output kode asynchronous secara mandiri

## Soal Pemahaman Konsep

**Soal 1.** Apa output dari kode berikut secara berurutan?

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

- 1, 2, 3, 4
- 1, 4, 3, 2
- 1, 4, 2, 3
- 1, 3, 4, 2

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: 1, 4, 3, 2**

Kode synchronous (1, 4) selalu jalan duluan. Setelah itu, microtask queue (Promise.then, angka 3) diproses lebih dulu daripada macrotask queue (setTimeout, angka 2).
</details>

**Soal 2.** Fungsi apa yang membatalkan timer yang dibuat oleh `setInterval()`?

- clearTimeout()
- cancelInterval()
- clearInterval()
- stopInterval()

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: clearInterval()**

`clearInterval(id)` digunakan untuk menghentikan interval yang sedang berjalan, dipasangkan dengan ID yang dikembalikan `setInterval()`.
</details>

## Soal Promise & Async/Await

**Soal 3.** Apa yang terjadi jika kata kunci `await` digunakan di luar fungsi `async` (pada kebanyakan lingkungan)?

- Kode tetap berjalan normal
- Terjadi SyntaxError
- Promise otomatis di-resolve
- Runtime akan restart

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Terjadi SyntaxError**

`await` hanya valid di dalam fungsi yang dideklarasikan dengan `async` (kecuali top-level await pada module ES tertentu). Di luar itu akan muncul SyntaxError.
</details>

**Soal 4.** Antara `Promise.all()` dan `Promise.allSettled()`, mana yang tetap menunggu semua Promise selesai walau ada yang reject?

- Promise.all()
- Promise.allSettled()
- Keduanya sama
- Tidak ada keduanya

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Promise.allSettled()**

`Promise.all()` bersifat fail-fast dan langsung reject saat salah satu gagal. `Promise.allSettled()` selalu menunggu semua Promise selesai, apa pun hasilnya.
</details>

**Soal 5.** Bagaimana cara yang benar menangani error dari beberapa `await` dalam satu fungsi async?

- Menambahkan .catch() di belakang setiap await
- Membungkus semua await dalam satu blok try/catch
- Error pada async/await tidak bisa ditangani
- Menggunakan clearTimeout()

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Membungkus semua await dalam satu blok try/catch**

Satu blok try/catch di sekeliling beberapa await sudah cukup untuk menangkap error dari langkah mana pun di dalamnya.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Studi Kasus: Async/Await](../12 Studi Kasus Async Await/Readme.md) | [Tugas Gabungan →](../14%20Tugas%20Gabungan/Readme.md)
