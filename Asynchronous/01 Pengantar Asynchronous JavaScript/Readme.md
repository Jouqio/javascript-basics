# 01 - Pengantar Asynchronous JavaScript

## Apa itu Synchronous?

**Synchronous** artinya kode dijalankan **satu per satu, berurutan, dan menunggu**. Baris kedua baru dijalankan setelah baris pertama selesai. Kalau ada proses yang lama (misalnya baca file besar atau ambil data dari internet), maka **seluruh program akan berhenti/menunggu (blocking)** sampai proses itu selesai.

Bayangkan kamu mengantre di kasir. Kasir hanya bisa melayani 1 orang, dan orang lain harus menunggu sampai orang di depannya selesai. Itulah synchronous.

## Apa itu Asynchronous?

**Asynchronous** artinya kode bisa **berjalan tanpa saling menunggu**. Proses yang lama (misalnya mengambil data dari server) dikerjakan "di belakang layar", sementara program tetap bisa melanjutkan baris kode berikutnya. Ketika proses lama itu selesai, hasilnya baru diproses.

Bayangkan kamu memesan makanan di restoran cepat saji. Kamu memesan, lalu duduk, ngobrol, main HP — kamu **tidak berdiri diam menunggu** di depan kasir. Ketika makanan sudah siap, namamu dipanggil. Itulah asynchronous.

## Kenapa JavaScript Butuh Asynchronous?

JavaScript itu **single-threaded**, artinya hanya punya 1 "jalur" untuk menjalankan kode dalam satu waktu. Kalau semua kode dijalankan secara synchronous, maka:

- Saat mengambil data dari server (butuh waktu beberapa detik), seluruh halaman web akan **freeze/macet**.
- Tombol tidak bisa diklik, animasi berhenti, user tidak bisa berinteraksi.

Dengan asynchronous, JavaScript bisa "menitipkan" pekerjaan yang lama (misalnya request ke server, membaca file, timer) ke browser/Node.js, lalu lanjut mengerjakan baris kode berikutnya. Ketika pekerjaan tadi selesai, hasilnya akan diproses belakangan.

## Contoh Perbandingan Sederhana

Coba jalankan `contoh.mjs` di folder ini, lalu perhatikan urutan hasil di terminal — hasilnya mungkin mengejutkan kalau kamu belum paham asynchronous!

## Fungsi Asynchronous Bawaan JavaScript

Beberapa fungsi bawaan yang sifatnya asynchronous:

- `setTimeout()` → menjalankan kode setelah beberapa waktu
- `setInterval()` → menjalankan kode berulang setiap interval waktu
- `fetch()` → mengambil data dari server/API
- Operasi file di Node.js (`fs.readFile`, dll)

## Poin Penting

- Synchronous = berurutan & saling menunggu (blocking)
- Asynchronous = tidak saling menunggu, proses lama dikerjakan di "belakang layar" (non-blocking)
- JavaScript butuh asynchronous karena sifatnya single-threaded
- Materi selanjutnya (Callback, Promise, Async/Await) adalah **cara-cara** untuk menulis kode asynchronous di JavaScript

Lanjut ke → [02 Callback](../02%20Callback/Readme.md)
