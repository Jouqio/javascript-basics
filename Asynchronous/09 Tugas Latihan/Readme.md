# 09 - Tugas Latihan

Setelah mempelajari materi 01–08, saatnya menguji pemahamanmu dengan latihan berikut. Kerjakan langsung di file `soal.mjs` pada bagian yang sudah ditandai `// TODO`.

## Soal 1 — Callback (Level: Mudah)

Buat fungsi `hitungLuasPersegiPanjang(panjang, lebar, callback)` yang:
- Mensimulasikan proses hitung dengan `setTimeout` selama 500ms
- Memanggil `callback(error, hasil)` dengan pola **error-first callback**
- Jika `panjang` atau `lebar` bernilai negatif, panggil callback dengan error `"Ukuran tidak boleh negatif"`

## Soal 2 — Promise (Level: Mudah-Sedang)

Ubah fungsi `cekStokBarang(namaBarang, stokTersedia)` (sudah disediakan versi callback-nya) menjadi versi **Promise**, yang resolve dengan pesan `"Stok X tersedia"` jika stok > 0, dan reject dengan `"Stok X habis"` jika stok = 0.

## Soal 3 — Promise Chaining (Level: Sedang)

Gunakan fungsi-fungsi berikut yang sudah disediakan:
- `bukaTokoOnline()` → resolve dengan nama toko
- `tambahProduk(namaToko)` → resolve dengan daftar produk
- `hitungTotalHarga(daftarProduk)` → resolve dengan total harga

Rangkai ketiganya dengan **Promise chaining** (`.then()`), lalu tampilkan hasil akhirnya dan tangani error dengan `.catch()`.

## Soal 4 — Async/Await (Level: Sedang)

Kerjakan ulang **Soal 3**, tapi kali ini gunakan **async/await** dengan `try...catch` untuk penanganan error. Bandingkan mana yang menurutmu lebih mudah dibaca!

## Soal 5 — Paralel dengan Promise.all (Level: Menantang)

Diberikan fungsi `ambilRatingProduk(idProduk)` yang mensimulasikan pengambilan rating sebuah produk (dengan delay acak). Buat fungsi `ambilSemuaRating(daftarId)` yang mengambil rating **beberapa produk sekaligus secara paralel** (bukan berurutan) menggunakan `Promise.all()`, lalu kembalikan rata-rata semua rating.

## Soal 6 — Analisis Event Loop (Level: Menantang, tanpa kode)

Tanpa menjalankan kode terlebih dahulu, tuliskan (di komentar) urutan output yang menurutmu benar dari potongan kode di bagian akhir `soal.mjs`. Setelah itu, jalankan kodenya dan cocokkan jawabanmu!

## Cara Mengerjakan

1. Buka file `soal.mjs`
2. Cari bagian bertanda `// TODO: Soal X`
3. Tulis kode kamu di bawahnya
4. Jalankan dengan `node soal.mjs` untuk mengecek hasilnya

## Tips

- Jangan terburu-buru melihat solusi. Coba kerjakan sendiri dulu berdasarkan materi 01–08.
- Kalau stuck, baca ulang materi yang relevan sebelum melihat contoh solusi.
- Latihan ini dirancang untuk melatih pemahaman konsep, bukan hafalan sintaks.

Selamat mengerjakan! 💪
