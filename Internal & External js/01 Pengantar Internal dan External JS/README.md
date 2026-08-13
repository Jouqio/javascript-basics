# 01. Pengantar Internal dan External JS

## Apa itu "Internal" dan "External" JS?

JavaScript butuh "tempat tinggal" supaya bisa dijalankan browser. Ada
**3 cara** menulis kode JavaScript supaya nempel ke halaman HTML:

1. **Inline** — ditulis langsung di dalam atribut tag HTML
2. **Internal** — ditulis di dalam tag `<script>` di file HTML yang sama
3. **External** — ditulis di file `.js` terpisah, dihubungkan lewat `<script src="...">`

Ketiganya menghasilkan JavaScript yang sama-sama JALAN — bedanya cuma
di **cara nulis dan nyimpennya**. Tapi pilihan ini penting banget
karena ngaruh ke: kerapian kode, kemudahan maintenance, performa
loading halaman, dan kemudahan kerja bareng tim.

## Analogi

Bayangin kamu lagi nulis resep masakan:

- **Inline** = nulis catatan kecil di setiap bungkus bumbu ("pakai 1
  sendok, aduk rata") — praktis buat 1-2 bumbu, tapi kalau bumbunya
  banyak, dapur jadi berantakan penuh coretan.
- **Internal** = nulis semua resep di satu buku catatan yang emang
  khusus buat masakan itu — lebih rapi, tapi bukunya cuma bisa
  dipakai buat masakan itu doang.
- **External** = nulis resep di kartu resep terpisah yang bisa
  dipinjem, dipakai ulang buat masakan lain, bahkan dibagi ke teman
  yang mau masak hal sama.

## Preview Singkat

| Cara | Ditulis di | Dipakai ulang? | Direkomendasikan? |
|---|---|---|---|
| Inline | Atribut HTML (`onclick`, dst) | Tidak | ❌ Sebisa mungkin dihindari |
| Internal | Tag `<script>` di file HTML | Tidak (per halaman) | ⚠️ Boleh, untuk kode pendek/khusus |
| External | File `.js` terpisah | Ya | ✅ Paling direkomendasikan |

Ketiganya akan dibahas detail satu-satu di folder `02`, `03`, dan `04`.

## Kenapa Ini Penting Dipelajari dari Awal?

Sebelum belajar konsep JavaScript yang lebih rumit (variabel, fungsi,
DOM, dst), penting untuk tahu dulu **di mana** kode itu akan hidup.
Kebiasaan menulis JavaScript dengan cara yang rapi sejak awal bakal
jauh lebih mudah dibanding harus "membongkar ulang" kebiasaan lama
di kemudian hari.

📄 Lihat: [`contoh.js`](./contoh.js) untuk gambaran singkat ketiganya dalam bentuk kode.
