# 06. Atribut `async` dan `defer`

## Berlaku Hanya untuk External Script

Atribut `async` dan `defer` **cuma berpengaruh pada script yang
punya `src`** (external). Keduanya gak ngaruh sama sekali kalau
dipasang di script internal (yang isinya langsung ditulis di antara
`<script>...</script>`).

## Cara Kerja Tanpa Atribut (Default / Normal)

```html
<script src="app.js"></script>
```

- Browser **berhenti** membaca HTML
- Download `app.js` sampai selesai
- **Jalankan** `app.js` sampai selesai
- Baru lanjut membaca sisa HTML

Ini disebut **blocking** — mirip sifat `alert()`, tapi levelnya di
proses loading halaman, bukan di interaksi user.

## Atribut `async`

```html
<script src="app.js" async></script>
```

- Browser **tetap lanjut** membaca HTML sambil download `app.js` di
  belakang layar (gak blocking saat download)
- Begitu file-nya **selesai didownload**, browser langsung
  **berhenti sejenak** dan menjalankannya — walau proses baca HTML
  belum selesai
- Kalau ada beberapa script `async`, **urutan eksekusinya gak
  terjamin** — siapa cepat download, dia duluan dijalankan

Cocok untuk script yang **berdiri sendiri**, gak butuh script lain,
dan gak butuh DOM lengkap (misalnya: script analytics/tracking).

## Atribut `defer`

```html
<script src="app.js" defer></script>
```

- Browser **tetap lanjut** membaca HTML sambil download `app.js` di
  belakang layar (sama seperti `async`)
- Tapi baru **dijalankan SETELAH** seluruh HTML selesai dibaca
- Kalau ada beberapa script `defer`, urutannya **terjamin sesuai
  urutan penulisan tag** di HTML

Ini yang paling sering direkomendasikan untuk script yang butuh
akses elemen HTML lengkap, sebagai alternatif modern dari "taruh
script di akhir body" (folder `05`).

## Tabel Perbandingan

| | Normal (tanpa atribut) | `async` | `defer` |
|---|---|---|---|
| Blocking saat parsing HTML? | Ya | Tidak | Tidak |
| Kapan dijalankan | Langsung saat ketemu tag | Begitu selesai didownload | Setelah HTML selesai dibaca |
| Urutan eksekusi terjamin? | Ya (sesuai urutan tag) | Tidak | Ya (sesuai urutan tag) |
| Cocok untuk | Script kecil/kritikal | Script mandiri (analytics dll) | Script yang butuh DOM & urutan (kebanyakan kasus) |

## Catatan Soal Contoh di Folder Ini

Ketiga file `.html` di folder ini memuat file `.js` yang SAMA
(`pesan.js`), cuma beda atribut di tag `<script>`-nya. Karena file
lokal biasanya kecil dan dibuka langsung dari komputer (bukan lewat
internet), perbedaan waktu loadingnya gak akan kerasa signifikan.
Perbedaan sungguhan baru terasa jelas di website nyata dengan file
JS yang besar atau koneksi internet yang lambat — tapi konsep dan
urutan eksekusinya tetap sama.

📄 Lihat: [`contoh-normal.html`](./contoh-normal.html), [`contoh-async.html`](./contoh-async.html), [`contoh-defer.html`](./contoh-defer.html), dan [`contoh.js`](./contoh.js)
