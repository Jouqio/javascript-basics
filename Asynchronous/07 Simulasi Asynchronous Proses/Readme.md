# 07 - Simulasi Asynchronous Proses

## Tujuan Materi Ini

Setelah memahami Callback, Promise, dan Async/Await secara teori, materi ini fokus pada **simulasi kasus-kasus nyata** yang sering ditemui dalam pengembangan aplikasi, menggunakan `setTimeout()` untuk mensimulasikan proses yang butuh waktu (seolah-olah request ke server, membaca file, atau proses berat lainnya).

## Kenapa Simulasi, Bukan Request Asli?

Di dunia nyata kita biasanya memakai `fetch()` untuk ambil data dari API, atau modul seperti `fs` di Node.js untuk membaca file. Tapi supaya materi ini **fokus ke konsep asynchronous-nya** (tanpa perlu koneksi internet/API key/dsb), kita mensimulasikan proses tersebut dengan `setTimeout()` yang punya "delay" acak/tetap, mirip seperti proses asli yang butuh waktu.

## Kasus yang Disimulasikan

Di `contoh.mjs`, ada beberapa simulasi:

1. **Simulasi Loading Data** — seperti loading spinner saat menunggu data dari server
2. **Simulasi Antrian Tugas (Task Queue)** — beberapa tugas diproses satu per satu secara berurutan
3. **Simulasi Proses dengan Kemungkinan Gagal** — seperti request API yang kadang gagal (misalnya koneksi timeout)
4. **Simulasi Progress Bar** — proses yang melaporkan progres bertahap (0% → 100%)

## Kenapa Ini Penting?

Latihan ini menjembatani antara **teori** (Promise, async/await) dengan **penerapan nyata**, karena hampir semua aplikasi modern (web, mobile, atau backend) pasti melibatkan proses seperti:

- Mengambil data dari server/database
- Upload/download file
- Login/autentikasi
- Proses pembayaran
- Loading gambar/media

Semua proses di atas sifatnya **asynchronous** dan butuh penanganan yang benar supaya aplikasi tetap responsif.

## Poin Penting

- `setTimeout()` dipakai untuk mensimulasikan proses nyata yang butuh waktu
- Simulasi ini melatih pola pikir menangani proses asynchronous di dunia nyata
- Semua teknik (callback, promise, async/await) bisa dipakai untuk kasus yang sama — pilih yang paling sesuai kebutuhan

Lanjut ke → [08 Event Loop](../08%20Event%20Loop/Readme.md)
