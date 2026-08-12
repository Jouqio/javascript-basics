# 01. Pengantar DOM

## Apa itu DOM?

**DOM (Document Object Model)** adalah cara browser merepresentasikan halaman HTML sebagai **struktur objek** yang bisa dibaca dan diubah oleh JavaScript. Saat browser memuat file HTML, ia akan membangun DOM dari HTML tersebut, lalu JavaScript bisa "berbicara" dengan DOM itu untuk mengubah tampilan halaman **tanpa perlu reload halaman**.

## DOM Tree

HTML memiliki struktur bertingkat (nested), dan DOM merepresentasikannya sebagai **pohon (tree)**. Contoh HTML berikut:

```html
<body>
  <h1>Judul</h1>
  <p>Ini paragraf</p>
</body>
```

Direpresentasikan sebagai DOM Tree:

```
document
  └── html
        └── body
              ├── h1 ("Judul")
              └── p ("Ini paragraf")
```

Setiap tag HTML menjadi sebuah **node** (simpul) dalam pohon ini. Node inilah yang bisa kita akses dan ubah lewat JavaScript.

## Objek `document`

`document` adalah **pintu masuk utama** untuk mengakses DOM dari JavaScript. Semua interaksi dengan DOM dimulai dari objek `document`.

```js
console.log(document); // Mencetak seluruh dokumen HTML
console.log(document.title); // Judul halaman (dari tag <title>)
console.log(document.body); // Elemen <body>
```

## Kenapa DOM Manipulation Penting?

Tanpa DOM manipulation, halaman web hanya bisa **statis** — apa yang tertulis di HTML, itulah yang tampil, tanpa bisa berubah. Dengan DOM manipulation, kita bisa membuat halaman **interaktif**, contohnya:

- Menampilkan/menyembunyikan elemen saat tombol diklik
- Validasi form secara real-time
- Menambah item baru ke daftar (misal: to-do list) tanpa reload
- Mengubah warna/tampilan berdasarkan interaksi user

## Cara Menghubungkan JavaScript ke HTML

Ada 2 cara umum menghubungkan file `.js` ke `.html`:

```html
<!-- Diletakkan di dalam <head>, dengan atribut "defer" -->
<head>
  <script src="script.js" defer></script>
</head>

<!-- ATAU diletakkan di akhir sebelum </body> (tanpa "defer") -->
<body>
  ...
  <script src="script.js"></script>
</body>
```

**Kenapa ini penting?** Jika script diletakkan di `<head>` **tanpa** `defer`, JavaScript akan dijalankan **sebelum** HTML selesai dimuat — sehingga elemen yang ingin diakses **belum ada**, dan akan menghasilkan `null`. Atribut `defer` memastikan script baru dijalankan **setelah** seluruh HTML selesai di-parse.

## Coba Sendiri

Buka file `index.html` di folder ini menggunakan browser, lalu buka DevTools (`F12`) → tab **Console** untuk melihat hasil `console.log` dari `script.js`.

➡️ Lanjut ke materi berikutnya: **02 DOM Selection**
