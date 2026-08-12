# Async/Await — Materi Pembelajaran JavaScript

Kumpulan materi untuk mempelajari **pemrograman asynchronous di JavaScript**, dari dasar (`callback`, `setTimeout`) sampai `async/await` dan penanganan error, disusun dalam 13 topik berurutan ditambah satu tugas gabungan.

Setiap topik ada di folder tersendiri berisi:
- **`Readme.md`** — penjelasan konsep, tujuan pembelajaran, tips/peringatan, dan latihan (dengan jawaban yang bisa dibuka/tutup).
- **`contoh.js`** — semua contoh kode topik tersebut, siap dijalankan langsung lewat `node contoh.js`.

## Daftar Materi

| # | Folder | Fokus |
|---|--------|-------|
| 01 | [Pengantar Asynchronous JavaScript](./01%20Pengantar%20Asynchronous%20JavaScript/Readme.md) | Single-threaded, call stack, event loop |
| 02 | [Callback Function](./02%20Callback%20Function/Readme.md) | Fungsi sebagai argumen, callback sync vs async |
| 03 | [Callback Hell](./03%20Callback%20Hell/Readme.md) | Nested callback, pyramid of doom |
| 04 | [JavaScript setTimeout()](./04%20JavaScript%20setTimeout()/Readme.md) | Menjadwalkan eksekusi satu kali |
| 05 | [JavaScript clearTimeout()](./05%20JavaScript%20clearTimeout()/Readme.md) | Membatalkan timer, pola debounce |
| 06 | [setInterval dan clearInterval](./06%20setInterval%20dan%20clearInterval/Readme.md) | Eksekusi berulang dan menghentikannya |
| 07 | [Pengenalan Promise](./07%20Pengenalan%20Promise/Readme.md) | pending / fulfilled / rejected, `.then()` `.catch()` |
| 08 | [Promise Chaining](./08%20Promise%20Chaining/Readme.md) | Merangkai operasi async berurutan |
| 09 | [Promise.all dan Promise.allSettled](./09%20Promise.all%20dan%20Promise.allSettled/Readme.md) | Menjalankan operasi async secara paralel |
| 10 | [Async Await Dasar](./10%20Async%20Await%20Dasar/Readme.md) | `async`, `await`, konversi dari Promise chain |
| 11 | [Error Handling dengan Try Catch](./11%20Error%20Handling%20dengan%20Try%20Catch/Readme.md) | `try/catch/finally` pada kode async |
| 12 | [Studi Kasus Async Await](./12%20Studi%20Kasus%20Async%20Await/Readme.md) | Menggabungkan semua konsep dalam kasus nyata |
| 13 | [Kuis Async Await](./13%20Kuis%20Async%20Await/Readme.md) | 5 soal untuk menguji pemahaman |
| 14 | [Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md) | Proyek simulasi pemesanan online yang menggabungkan semua materi |

## Cara Belajar

1. Ikuti urutan folder `01` → `14`, karena setiap materi dibangun di atas materi sebelumnya.
2. Baca `Readme.md` di tiap folder untuk penjelasan konsepnya.
3. Buka terminal di folder yang sama, lalu jalankan contohnya:
   ```bash
   node contoh.js
   ```
4. Kerjakan bagian **Latihan** di akhir tiap `Readme.md` sebelum membuka jawabannya.
5. Setelah materi 13 (kuis), kerjakan **[14 Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md)** — proyek simulasi pemesanan online yang memaksa kamu memakai callback, Promise, async/await, try/catch, Promise.all, setTimeout, dan clearTimeout dalam satu alur kode. Tugas ini disediakan sebagai starter (`tugas.js`) dengan TODO, tanpa kunci jawaban — dikerjakan mandiri.

## Prasyarat

Materi ini mengasumsikan pembaca sudah familiar dengan dasar JavaScript: variabel, fungsi, array, dan arrow function. Tidak perlu pengalaman sebelumnya dengan `Promise` atau `async/await`. Untuk menjalankan file `.js`, dibutuhkan [Node.js](https://nodejs.org) terpasang di komputer (cek dengan `node --version`).

## Struktur Proyek

```
AsyncAwait/
├── 01 Pengantar Asynchronous JavaScript/
│   ├── Readme.md
│   └── contoh.js
├── 02 Callback Function/
│   ├── Readme.md
│   └── contoh.js
├── ...
├── 13 Kuis Async Await/
│   ├── Readme.md
│   └── contoh.js
├── 14 Tugas Gabungan/
│   ├── Readme.md
│   └── tugas.js          <- starter, TODO, tanpa solusi
└── Readme.md
```

## Catatan Teknis

- Seluruh contoh kode adalah **JavaScript murni (vanilla)**, tanpa dependensi eksternal — semua `contoh.js` sudah diuji berjalan bersih lewat `node contoh.js`.
- Beberapa fungsi seperti `tampilkanLoading()`, `ambilProfil()`, dsb pada materi 11–12 adalah **fungsi simulasi (mock)** yang dibuat agar kode bisa langsung dijalankan tanpa server sungguhan.
- File `14 Tugas Gabungan/tugas.js` sengaja dibiarkan berupa kerangka (TODO) — ini bagian dari latihan, bukan bug.
