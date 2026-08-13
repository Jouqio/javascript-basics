# 01. Pengantar Modularisasi

> Apa itu modularisasi, masalah apa yang diselesaikannya, dan kenapa setiap developer JavaScript wajib memahaminya.

## Tujuan Pembelajaran

- Memahami apa itu modularisasi kode
- Mengetahui masalah yang muncul jika kode tidak dimodularisasi
- Mengenal istilah 'module' dalam konteks JavaScript

## Apa itu Modularisasi?

**Modularisasi** adalah praktik memecah kode menjadi bagian-bagian kecil yang disebut **module**, masing-masing fokus pada satu tanggung jawab, lalu dihubungkan kembali saat dibutuhkan. Bayangkan seperti Lego — daripada satu balok raksasa yang sulit diubah, kamu punya banyak balok kecil yang bisa disusun ulang, diganti, atau dipakai di proyek lain.

Dalam JavaScript, satu module biasanya = **satu file**. File itu bisa berisi fungsi, variabel, class, atau data yang **diekspor** supaya bisa dipakai file lain lewat proses **impor**.

## Masalah yang Muncul Tanpa Modularisasi

Bayangkan seluruh aplikasi ditulis dalam **satu file raksasa** berisi ribuan baris — pengaturan, tampilan, logika bisnis, koneksi database, semuanya bercampur. Beberapa masalah nyata yang muncul:

- **Variabel bentrok (naming collision)** — dua bagian kode tanpa sadar memakai nama variabel yang sama, saling menimpa.
- **Sulit dicari** — mencari satu fungsi di antara ribuan baris kode itu melelahkan.
- **Sulit dipakai ulang** — kalau butuh satu fungsi kecil di proyek lain, harus copy-paste seluruh bagian yang relevan (dan risikonya, ikut menyalin bug).
- **Sulit dites** — sulit menguji satu bagian logika secara terisolasi kalau semuanya saling terjalin.
- **Sulit dikerjakan tim** — kalau satu file dikerjakan banyak orang sekaligus, konflik perubahan (merge conflict) jadi sering terjadi.

```js
// Bayangkan file tunggal raksasa seperti ini (disederhanakan)
var nama = "Toko Buku";

function hitungTotal(harga, qty) {
  return harga * qty;
}

// ... 500 baris kemudian, di bagian lain file yang sama ...

var nama = "Sistem Login"; // Oops! variabel "nama" tertimpa tanpa disadari

function hitungTotal(a, b) {
  return a - b; // Oops! fungsi hitungTotal juga tertimpa dengan logika yang beda!
}

// Sekarang kode yang memanggil hitungTotal() untuk toko buku
// akan mendapat hasil yang salah, karena definisinya sudah tertimpa.
```

> **Perhatian:** Contoh di atas sengaja disederhanakan, tapi bug seperti ini **sungguhan terjadi** pada aplikasi besar yang tidak dimodularisasi — dan sangat sulit dilacak karena penyebabnya bisa berada ratusan baris jauhnya dari gejalanya.

## Solusi: Pecah Jadi Module Terpisah

Dengan modularisasi, setiap bagian kode punya **ruang lingkupnya (scope) sendiri**. Variabel dan fungsi di satu module **tidak akan bentrok** dengan module lain, kecuali sengaja diekspor dan diimpor.

Materi 02 akan membahas bagaimana developer JavaScript menyelesaikan masalah ini **sebelum** module resmi ada di bahasa ini, dan materi 03–04 akan membahas dua sistem module resmi yang dipakai sampai sekarang: **CommonJS** dan **ES Modules**.

## Latihan

Sebutkan dua masalah nyata yang bisa terjadi jika sebuah aplikasi ditulis dalam satu file JavaScript raksasa tanpa modularisasi sama sekali.

<details>
<summary>Lihat Jawaban</summary>

Contoh jawaban yang valid: 1) Variabel atau fungsi dengan nama sama bisa saling menimpa tanpa disadari (naming collision) karena semuanya berbagi satu ruang lingkup global. 2) Kode jadi sulit dipakai ulang di proyek lain karena semuanya saling terjalin dalam satu file, sehingga sulit memisahkan bagian yang dibutuhkan saja.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file [contoh.js](./contoh.js) pada folder ini.

[Sejarah Modularisasi JavaScript →](../02 Sejarah Modularisasi JavaScript/Readme.md)
