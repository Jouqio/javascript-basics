# 01. Pengantar Conditional Statement

## Apa itu Conditional Statement?

**Conditional Statement** (Pernyataan Kondisional) atau sering disebut **Percabangan** adalah struktur dalam pemrograman yang digunakan untuk **membuat keputusan**. Program akan menjalankan blok kode tertentu **hanya jika** suatu syarat (kondisi) bernilai `true` (benar), dan bisa menjalankan blok kode lain jika kondisi bernilai `false` (salah).

Bayangkan dalam kehidupan sehari-hari, kamu sering mengambil keputusan berdasarkan kondisi:

> "**JIKA** hari ini hujan, **MAKA** aku bawa payung. **JIKA TIDAK**, aku tidak bawa payung."

Itulah persis cara kerja conditional statement dalam kode!

## Kenapa Conditional Statement Penting?

Tanpa conditional statement, program hanya bisa menjalankan kode dari atas ke bawah secara berurutan, tanpa bisa "berpikir" atau menyesuaikan hasil berdasarkan situasi. Padahal hampir semua aplikasi butuh logika seperti ini, contohnya:

- Cek apakah user sudah **login** atau belum
- Cek apakah **umur** cukup untuk mendaftar
- Cek apakah **nilai ujian** lulus atau tidak
- Cek apakah **stok barang** masih ada sebelum checkout

## Jenis-jenis Conditional Statement di JavaScript

JavaScript menyediakan beberapa cara untuk membuat percabangan:

| Jenis | Kegunaan |
|-------|----------|
| `if` | Menjalankan kode jika satu syarat terpenuhi |
| `if...else` | Menjalankan kode A jika syarat benar, kode B jika salah |
| `if...else if...else` | Menangani banyak kemungkinan kondisi |
| `switch` | Alternatif rapi untuk banyak pilihan nilai yang spesifik |
| ternary operator (`? :`) | Cara singkat menulis if-else sederhana |

Semua jenis ini akan kita pelajari satu per satu di folder-folder berikutnya.

## Contoh Sederhana

```js
let hujan = true;

if (hujan) {
  console.log("Bawa payung");
} else {
  console.log("Tidak perlu bawa payung");
}

// Output: Bawa payung
```

Lihat file `pengantar.js` di folder ini untuk contoh lebih lengkap.

## Konsep Kunci: Boolean

Conditional statement selalu bergantung pada nilai **boolean**, yaitu nilai yang hanya bisa `true` atau `false`. Sebuah kondisi seperti `umur >= 18` akan dievaluasi oleh JavaScript menjadi `true` atau `false`, lalu program memutuskan kode mana yang akan dijalankan.

➡️ Lanjut ke materi berikutnya: **02 If Statement**
