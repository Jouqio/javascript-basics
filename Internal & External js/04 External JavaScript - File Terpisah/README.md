# 04. External JavaScript (File Terpisah)

## Apa itu External JavaScript?

External JavaScript adalah kode JS yang ditulis di **file `.js`
terpisah**, lalu dihubungkan ke HTML lewat atribut `src` pada tag
`<script>`.

**File `index.html`:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Contoh</title>
</head>
<body>
  <h1>Halo!</h1>
  <script src="app.js"></script>
</body>
</html>
```

**File `app.js`** (file terpisah, folder yang sama):
```js
console.log("Ini JavaScript external");
alert("Halo dari file app.js!");
```

Perhatikan: tag `<script>` di HTML **gak ada isinya** — cuma nunjuk
ke file lain lewat `src="app.js"`.

## Kelebihan (Kenapa Ini Paling Direkomendasikan)

1. **Bisa dipakai ulang** — satu file `.js` bisa dihubungkan ke
   banyak halaman HTML sekaligus
2. **Rapi & terorganisir** — HTML fokus ke struktur, JS fokus ke
   logic, gampang dicari kalau mau edit
3. **Browser bisa nge-*cache*** — kalau user buka halaman lain yang
   pakai file `.js` yang sama, browser gak perlu download ulang,
   jadinya lebih cepat
4. **Kerja tim lebih gampang** — orang yang ngurus HTML/desain gak
   perlu bentrok sama orang yang ngurus logic JavaScript
5. Bisa pakai fitur `async`/`defer` untuk ngatur waktu loading
   (dibahas di folder `06`)

## Atribut `src`

Nilai `src` bisa berupa:
- **Relative path** — path relatif dari lokasi file HTML, contoh:
  `src="app.js"` atau `src="js/app.js"` (kalau file-nya di dalam
  folder `js/`)
- **Absolute URL** — link lengkap ke file di internet, contoh
  dipakai buat load library dari CDN:
  `src="https://cdn.jsdelivr.net/npm/nama-library"`

## Kekurangan

- Butuh 1 request tambahan buat download file-nya (biasanya gak
  masalah, apalagi dengan caching)
- Kalau path `src` salah ketik, script gak kebaca — dan gak selalu
  ada pesan error yang jelas di HTML (dibahas lebih detail di
  folder `09`)

📄 Lihat: [`contoh.html`](./contoh.html) dan [`contoh.js`](./contoh.js) — dua file ini SALING TERHUBUNG, coba buka contoh.html di browser.
