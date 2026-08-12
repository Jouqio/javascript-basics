# 11 - Tugas Latihan

Setelah mempelajari materi 01–10, saatnya menguji pemahamanmu dengan latihan berikut. Kerjakan langsung di file `soal.js` pada bagian yang sudah ditandai `// TODO`.

## Soal 1 — Number (Level: Mudah)

Buat fungsi `hitungLuasLingkaran(jariJari)` yang mengembalikan luas lingkaran (rumus: `π × r × r`, gunakan `Math.PI`), dibulatkan 2 angka desimal dengan `toFixed(2)`.

## Soal 2 — String (Level: Mudah)

Buat fungsi `formatNamaLengkap(namaDepan, namaBelakang)` yang mengembalikan nama lengkap dengan huruf awal kapital di setiap kata, menggunakan **template literal**. Contoh: `formatNamaLengkap("budi", "santoso")` → `"Budi Santoso"`.

## Soal 3 — Boolean (Level: Mudah-Sedang)

Buat fungsi `bolehMasuk(umur, punyaTiket)` yang mengembalikan `true` jika umur >= 17 **dan** punya tiket, selain itu `false`. Gunakan operator logika `&&`.

## Soal 4 — Null vs Undefined (Level: Sedang)

Buat fungsi `cekStatusData(nilai)` yang mengembalikan:
- `"Data belum diisi"` jika nilai adalah `undefined`
- `"Data sengaja dikosongkan"` jika nilai adalah `null`
- `"Data terisi"` jika nilai lainnya

## Soal 5 — Array (Level: Sedang)

Diberikan array nilai ujian siswa: `[70, 85, 60, 90, 55, 78]`. Buat kode yang:
1. Menyaring (filter) nilai yang **lulus** (>= 70)
2. Mengubah (map) nilai lulus tersebut menjadi predikat: `>= 90` → `"A"`, `>= 80` → `"B"`, sisanya → `"C"`
3. Menghitung (reduce) rata-rata dari nilai yang lulus saja

## Soal 6 — Object (Level: Sedang)

Buat object `produk` dengan properti `nama`, `harga`, `stok`. Buat method `.info()` di dalam object tersebut yang mencetak kalimat: `"Produk [nama] tersedia [stok] pcs dengan harga Rp[harga]"`.

## Soal 7 — Type Conversion/Coercion (Level: Menantang)

Diberikan dua input dari form (selalu berupa string): `"120"` dan `"35"`. Buat fungsi `jumlahkanInput(input1, input2)` yang mengembalikan hasil penjumlahan yang **benar** (bukan hasil penggabungan string).

## Soal 8 — typeof (Level: Menantang)

Buat fungsi `validasiUmur(nilai)` yang:
- Mengecek dengan `typeof` apakah `nilai` bertipe number
- Jika bukan number, kembalikan `"Umur harus berupa angka"`
- Jika number tapi negatif, kembalikan `"Umur tidak boleh negatif"`
- Jika valid, kembalikan `"Umur valid: " + nilai`

## Cara Mengerjakan

1. Buka file `soal.js`
2. Cari bagian bertanda `// TODO: Soal X`
3. Tulis kode kamu di bawahnya
4. Jalankan dengan `node soal.js` untuk mengecek hasilnya

## Tips

- Jangan terburu-buru melihat solusi. Coba kerjakan sendiri dulu berdasarkan materi 01–10.
- Kalau stuck, baca ulang materi yang relevan sebelum mencoba lagi.
- Latihan ini dirancang untuk melatih pemahaman konsep tipe data, bukan hafalan sintaks.

Selamat mengerjakan! 💪
