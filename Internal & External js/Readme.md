# Internal & External JS — Dasar Pemrograman JavaScript

Materi tentang tiga cara menulis dan menghubungkan kode JavaScript ke
halaman HTML: **Inline**, **Internal**, dan **External**. Paham topik
ini dari awal bakal ngebantu kamu nulis kode yang lebih rapi, gampang
di-maintain, dan sesuai standar industri.

## Daftar Isi

| No | Topik | Deskripsi Singkat |
|---|---|---|
| 01 | [Pengantar Internal dan External JS](./01%20Pengantar%20Internal%20dan%20External%20JS/) | Kenalan sama 3 cara menulis JavaScript |
| 02 | [Inline JavaScript](./02%20Inline%20JavaScript/) | JS langsung di atribut HTML |
| 03 | [Internal JavaScript - Tag Script](./03%20Internal%20JavaScript%20-%20Tag%20Script/) | JS di dalam tag `<script>` |
| 04 | [External JavaScript - File Terpisah](./04%20External%20JavaScript%20-%20File%20Terpisah/) | JS di file `.js` terpisah |
| 05 | [Posisi Tag Script](./05%20Posisi%20Tag%20Script/) | Naruh `<script>` di head vs body |
| 06 | [Atribut async dan defer](./06%20Atribut%20async%20dan%20defer/) | Ngatur cara script external dimuat |
| 07 | [Menghubungkan Banyak File JavaScript](./07%20Menghubungkan%20Banyak%20File%20JavaScript/) | Urutan & dependency antar file |
| 08 | [Kapan Pakai Internal vs External](./08%20Kapan%20Pakai%20Internal%20vs%20External/) | Panduan milih, best practice |
| 09 | [Kesalahan Umum dan Cara Debug](./09%20Kesalahan%20Umum%20dan%20Cara%20Debug/) | Masalah yang sering muncul + solusinya |
| 10 | [Rangkuman Internal dan External JS](./10%20Rangkuman%20Internal%20dan%20External%20JS/) | Ringkasan semua materi |
| 11 | [Quiz Internal dan External JS](./11%20Quiz%20Internal%20dan%20External%20JS/) | Uji pemahaman, 10 soal + pembahasan |

## Cara Belajar

1. Buka folder secara berurutan, dari `01` sampai `11`
2. Tiap folder punya `README.md` (materi) — baca dulu teorinya
3. Sebagian besar folder juga punya file contoh kode (`.js` dan/atau
   `.html`) — coba jalankan/buka sendiri
4. File `.html` bisa langsung dibuka di browser (double-click)
5. File `.js` yang gak pakai `alert()`/`prompt()`/DOM bisa langsung
   dijalankan lewat terminal: `node nama-file.js`. File yang pakai
   `alert()`/`prompt()`/DOM harus dibuka lewat browser (Console `F12`
   atau file `.html`-nya)

## Kenapa Ada File `.html` di Beberapa Folder?

Topik ini pada dasarnya membahas **hubungan antara JavaScript dan
HTML** — jadi beberapa contoh (terutama soal Inline, Internal,
External, posisi script, dan async/defer) baru kelihatan jelas kalau
ada file HTML-nya juga, bukan cuma `.js` saja. Setiap folder tetap
punya `README.md` untuk materinya dan `.js` untuk contoh logic-nya,
sesuai konvensi yang biasa dipakai.

Selamat belajar! 
