# 07. Menghubungkan Banyak File JavaScript

## Boleh Pakai Lebih dari Satu File

Satu halaman HTML boleh punya banyak tag `<script src="...">`
sekaligus:

```html
<script src="utils.js"></script>
<script src="main.js"></script>
```

## Urutan Itu Penting!

Kalau `main.js` butuh fungsi yang ada di `utils.js`, maka
**`utils.js` harus dimuat lebih dulu** — tag `<script>`-nya harus
ditulis lebih dulu juga.

**Salah (urutan kebalik):**
```html
<script src="main.js"></script>
<script src="utils.js"></script>
```
`main.js` akan error kalau dia langsung memanggil fungsi dari
`utils.js`, karena `utils.js` belum sempat dimuat.

**Benar:**
```html
<script src="utils.js"></script>
<script src="main.js"></script>
```

## Kesalahan yang Sering Muncul

```
Uncaught ReferenceError: sapaUser is not defined
```

Ini biasanya artinya: fungsi `sapaUser` ada di file lain, tapi file
itu belum dimuat (atau urutannya salah) saat file yang memanggilnya
dijalankan.

## Kalau Banyak Banget File-nya?

Untuk proyek kecil, cara di atas (banyak tag `<script>` berurutan)
masih oke. Untuk proyek besar, biasanya dipakai **module bundler**
(seperti Vite atau Webpack) yang otomatis mengatur urutan &
menggabungkan file — tapi itu topik tersendiri di luar cakupan
materi ini.

📄 Lihat: [`contoh.html`](./contoh.html), [`utils.js`](./utils.js), dan [`main.js`](./main.js)
