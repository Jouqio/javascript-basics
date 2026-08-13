# 05. Posisi Tag Script (Head vs Body)

## Kenapa Posisi `<script>` Penting?

Browser membaca (parsing) HTML **dari atas ke bawah**, baris demi
baris. Kalau ada tag `<script>` yang mencoba mengakses elemen HTML
yang **belum dibaca** browser, JavaScript-nya akan **gagal** —
biasanya muncul error seperti:

```
Cannot read properties of null (reading 'textContent')
```

## Contoh Masalahnya

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    // salah: elemen <p id="output"> BELUM ADA saat baris ini jalan,
    // karena <head> dibaca duluan, sebelum <body>
    document.getElementById("output").textContent = "Halo!";
  </script>
</head>
<body>
  <p id="output">Ini akan error</p>
</body>
</html>
```

Ketika browser sampai di `<script>` yang ada di `<head>`, elemen
`<p id="output">` di `<body>` **belum terbaca sama sekali** — jadi
`document.getElementById("output")` menghasilkan `null`, dan baris
setelahnya error.

## Solusi 1 (Tradisional): Taruh Script di Akhir `<body>`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contoh</title>
</head>
<body>
  <p id="output">Ini akan berhasil</p>

  <!-- Script ditaruh PALING BAWAH, setelah semua elemen HTML -->
  <script>
    document.getElementById("output").textContent = "Halo!";
  </script>
</body>
</html>
```

Karena script dibaca PALING TERAKHIR, semua elemen HTML di atasnya
udah pasti ada duluan. Ini pola paling umum dipakai, terutama di
kode-kode lama.

## Solusi 2 (Modern): Atribut `defer`

Taruh script di `<head>`, tapi tambahkan atribut `defer` — nanti
dibahas detail di folder `06`. Solusi ini lebih disukai di proyek
modern karena browser bisa mulai download script dari awal (lebih
cepat), tapi baru DIJALANKAN setelah HTML selesai dibaca.

## Ringkasan

| Posisi | Aman diakses elemen HTML? | Kapan cocok dipakai |
|---|---|---|
| `<head>` tanpa `defer`/`async` | ❌ Tidak | Hindari, kecuali script-nya gak butuh akses elemen HTML |
| Akhir `<body>` | ✅ Ya | Pola klasik, paling umum & aman |
| `<head>` dengan `defer` | ✅ Ya | Pola modern, direkomendasikan untuk external script |

📄 Lihat: [`contoh-head-bermasalah.html`](./contoh-head-bermasalah.html), [`contoh-body-benar.html`](./contoh-body-benar.html), dan [`contoh.js`](./contoh.js)
