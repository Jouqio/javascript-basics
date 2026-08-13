# 09. Kesalahan Umum dan Cara Debug

## 1. Salah Path di Atribut `src`

```html
<!-- Typo nama file -->
<script src="scrpit.js"></script>

<!-- Salah folder, padahal file-nya ada di dalam folder js/ -->
<script src="app.js"></script>
```

**Gejala:** Gak ada perubahan sama sekali, seolah-olah script-nya
gak jalan, tapi HTML-nya gak nunjukin error apapun.

**Cara cek:** Buka tab **Network** di DevTools (F12), reload
halamannya, cari file `.js` yang dimaksud. Kalau statusnya **404**,
artinya path-nya salah.

## 2. Mengakses Elemen HTML yang Belum Ada

```html
<head>
  <script>
    document.getElementById("judul").textContent = "Halo!"; // error
  </script>
</head>
<body>
  <h1 id="judul">Judul Asli</h1>
</body>
```

**Gejala:** Muncul error di Console:
```
Cannot read properties of null (reading 'textContent')
```

**Solusi:** Pindahkan script ke akhir `<body>`, atau tambahkan
atribut `defer` (lihat folder `05` dan `06`).

## 3. Lupa Menutup Tag `<script>` dengan Benar

```html
<!-- salah: script gak boleh self-closing -->
<script src="app.js" />

<!-- benar: harus ada tag penutup terpisah -->
<script src="app.js"></script>
```

Beda dengan tag seperti `<img>` atau `<input>`, tag `<script>`
**wajib** punya penutup `</script>` sendiri, walaupun dipakai
sebagai external script yang isinya kosong.

## 4. Konflik Nama Variabel/Fungsi Antar File

```js
// file1.js
let hitung = 10;

// file2.js
let hitung = 20; // error: sudah dideklarasikan
```

**Gejala:** `Uncaught SyntaxError: Identifier 'hitung' has already
been declared`

**Solusi:** Beri nama yang lebih spesifik (`hitungTotal`,
`hitungDiskon`, dst), atau bungkus kode dalam fungsi supaya
variabelnya gak "bocor" ke scope global.

## 5. Urutan File Salah (Dibahas Detail di Folder 07)

**Gejala:** `Uncaught ReferenceError: namaFungsi is not defined`

**Solusi:** Pastikan file yang berisi fungsi/variabel yang dipakai
sudah dimuat lebih dulu (tag `<script>`-nya ditulis lebih awal).

## Tips Umum Buat Debug

1. **Selalu buka Console (F12)** — 90% masalah JavaScript kelihatan
   pesan errornya di sana
2. **Baca pesan errornya pelan-pelan** — biasanya udah kasih tau
   nama file dan baris berapa yang bermasalah
3. **Cek tab Network** kalau curiga file `.js`-nya gak kebaca
4. **Refresh halaman dengan cache dikosongkan** (Ctrl+Shift+R) kalau
   udah edit file tapi perubahannya gak muncul-muncul

📄 Lihat: [`contoh-salah.html`](./contoh-salah.html) vs [`contoh-benar.html`](./contoh-benar.html)
