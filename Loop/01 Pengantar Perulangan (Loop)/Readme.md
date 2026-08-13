# 01 - Pengantar Perulangan (Loop)

## Apa itu Loop?

**Loop (perulangan)** adalah struktur kontrol dalam pemrograman yang memungkinkan kita **menjalankan sebuah blok kode berulang kali**, tanpa harus menulis kode yang sama berkali-kali secara manual.

## Analogi Sederhana

Bayangkan kamu diminta menyapa 100 orang di sebuah ruangan. Tanpa loop, kamu harus menulis:

```js
console.log("Halo orang ke-1");
console.log("Halo orang ke-2");
console.log("Halo orang ke-3");
// ...ditulis manual sampai 100 kali!
```

Dengan loop, cukup ditulis sekali dengan aturan "ulangi 100 kali":

```js
for (let i = 1; i <= 100; i++) {
  console.log(`Halo orang ke-${i}`);
}
```

## Kenapa Loop Penting?

1. **Menghindari pengulangan kode (DRY - Don't Repeat Yourself)** — tidak perlu menulis baris kode yang sama berkali-kali
2. **Efisien untuk data dalam jumlah besar** — memproses ratusan/ribuan data tanpa menulis manual satu per satu
3. **Fondasi hampir semua program** — hampir semua aplikasi (dari sederhana sampai kompleks) menggunakan loop untuk memproses data, menampilkan daftar, validasi, dll

## Kapan Loop Dipakai?

- Menampilkan daftar produk di toko online
- Memvalidasi banyak input form sekaligus
- Menghitung total dari kumpulan angka
- Mencari data tertentu dari banyak data
- Membuat pola/gambar sederhana (misalnya piramida bintang)
- Mengulang animasi atau permainan (game loop)

## Jenis-jenis Loop di JavaScript

JavaScript menyediakan beberapa jenis loop, masing-masing punya kegunaan yang cocok untuk situasi berbeda:

| Jenis Loop | Cocok untuk |
|---|---|
| `for` | Perulangan dengan jumlah yang **sudah diketahui/dihitung** |
| `while` | Perulangan yang bergantung pada **kondisi**, jumlah tidak pasti |
| `do...while` | Sama seperti `while`, tapi **pasti dijalankan minimal 1 kali** |
| `for...of` | Perulangan pada **array, string**, dan iterable lainnya (cara modern) |
| `for...in` | Perulangan pada **key object** |
| `forEach`, `map`, `filter`, `reduce` | Method array modern, alternatif loop untuk mengolah data array |

Setiap jenis loop ini akan dibahas satu per satu secara mendalam di materi-materi berikutnya.

## Komponen Umum dalam Loop

Hampir semua loop memiliki 3 komponen dasar:

1. **Inisialisasi** — nilai awal sebelum loop dimulai (misalnya `let i = 0`)
2. **Kondisi** — syarat yang menentukan apakah loop masih boleh berjalan (misalnya `i < 10`)
3. **Update/Increment** — perubahan nilai di setiap akhir iterasi (misalnya `i++`)

Loop akan terus berjalan **selama kondisi bernilai `true`**, dan berhenti begitu kondisi menjadi `false`.

## Poin Penting

- Loop = struktur kontrol untuk menjalankan kode berulang kali tanpa menulis manual
- Membantu menghindari pengulangan kode dan efisien untuk data besar
- JavaScript punya beberapa jenis loop: `for`, `while`, `do...while`, `for...of`, `for...in`, serta method array modern
- Loop pada umumnya punya 3 komponen: inisialisasi, kondisi, dan update

Lanjut ke → [02 For Loop](../02%20For%20Loop/Readme.md)
