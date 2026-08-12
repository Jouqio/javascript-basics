# 03 - Callback Hell

## Apa itu Callback Hell?

**Callback Hell** (disebut juga "Pyramid of Doom") adalah kondisi ketika kita menggunakan **banyak callback bersarang (nested)** di dalam callback lain, sehingga kode menjadi:

- Menjorok ke kanan terus-menerus (membentuk piramida)
- Susah dibaca
- Susah di-maintain (diubah/diperbaiki)
- Susah menangani error dengan rapi

## Kapan Callback Hell Terjadi?

Callback hell muncul ketika ada **beberapa proses asynchronous yang harus dijalankan berurutan**, di mana proses berikutnya **butuh hasil** dari proses sebelumnya.

Contoh skenario nyata:
1. Login user → dapat token
2. Pakai token untuk ambil profil user
3. Pakai data profil untuk ambil daftar pesanan user
4. Pakai daftar pesanan untuk hitung total belanja

Kalau ditulis dengan callback biasa, setiap proses harus ditulis di dalam callback proses sebelumnya → nested semakin dalam.

## Kenapa Ini Masalah?

1. **Sulit dibaca** — semakin dalam nested-nya, semakin sulit mengikuti alur logika
2. **Sulit menangani error** — setiap level callback butuh pengecekan error sendiri-sendiri
3. **Sulit reuse kode** — logika tercampur dalam struktur bersarang
4. **Sulit debugging** — susah tahu di level mana error terjadi

## Solusi

Masalah ini yang kemudian **melahirkan Promise** (materi 04) dan **Async/Await** (materi 06) sebagai cara menulis kode asynchronous yang lebih rapi, datar (flat), dan mudah dibaca.

## Poin Penting

- Callback Hell = callback bersarang berlapis-lapis akibat proses asynchronous berurutan
- Ciri khasnya: kode menjorok ke kanan seperti piramida terbalik
- Masalah utama: sulit dibaca, sulit maintain, sulit handle error
- Solusi modern: Promise dan Async/Await

Lanjut ke → [04 Promise](../04%20Promise/Readme.md)
