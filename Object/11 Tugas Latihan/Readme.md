# 11 - Tugas Latihan

Setelah mempelajari materi 01–10, saatnya menguji pemahamanmu dengan latihan berikut. Kerjakan langsung di file `soal.js` pada bagian yang sudah ditandai `// TODO`.

## Soal 1 — Membuat dan Mengakses Object (Level: Mudah)

Buat object `buku` dengan properti `judul`, `penulis`, `tahunTerbit`. Tampilkan informasi buku tersebut dalam satu kalimat menggunakan template literal.

## Soal 2 — Menambah/Mengubah/Menghapus Properti (Level: Mudah)

Diberikan object `mahasiswa = { nama: "Sinta", nim: "12345" }`. Tambahkan properti `jurusan` dengan nilai `"Teknik Informatika"`, lalu ubah `nim` menjadi `"67890"`, lalu hapus properti `nim`. Tampilkan hasil object di setiap tahap.

## Soal 3 — Method dan `this` (Level: Sedang)

Buat object `rekening` dengan properti `saldo` (mulai dari 0) dan dua method:
- `setor(jumlah)` — menambah saldo
- `tarik(jumlah)` — mengurangi saldo, tapi **tidak boleh sampai minus** (kalau jumlah tarik melebihi saldo, tampilkan pesan `"Saldo tidak cukup"` dan saldo tidak berubah)

Gunakan `this` di dalam kedua method tersebut.

## Soal 4 — Object Bersarang (Level: Sedang)

Buat object `sekolah` dengan properti `nama` dan `kepalaSekolah`, di mana `kepalaSekolah` adalah object bersarang dengan properti `nama` dan `nomorHP`. Akses `kepalaSekolah.nomorHP` dengan aman menggunakan optional chaining, seandainya `kepalaSekolah` mungkin `undefined`.

## Soal 5 — Perulangan pada Object (Level: Sedang)

Diberikan object nilai berikut:
```js
let nilaiMapel = { matematika: 75, fisika: 60, kimia: 88, biologi: 92 };
```
Gunakan `Object.entries()` untuk mencetak setiap mapel beserta status **"Lulus"** (nilai >= 70) atau **"Tidak Lulus"**.

## Soal 6 — Object Reference dan Copy (Level: Menantang)

Diberikan object `dataAsli = { nama: "Rian", skor: [80, 90, 70] }`. Buat **shallow copy** bernama `dataSalinan` menggunakan spread operator, lalu ubah `dataSalinan.nama` menjadi `"Budi"`. Jelaskan (lewat komentar) kenapa `dataAsli.skor` tetap **ikut berubah** kalau kamu mengubah isi array `skor` melalui `dataSalinan`.

## Soal 7 — Immutable Object (Level: Menantang)

Buat object `konfigurasiAplikasi` berisi properti `namaAplikasi` dan `versi`, lalu bekukan dengan `Object.freeze()`. Coba ubah `versi`-nya, lalu buktikan (dengan `console.log`) bahwa nilainya tidak berubah.

## Soal 8 — Destructuring (Level: Menantang)

Buat fungsi `tampilkanTiket({ nama, tujuan, kelas = "Ekonomi" })` yang mencetak: `"[nama] memesan tiket ke [tujuan] kelas [kelas]"`. Panggil fungsi ini dengan 2 data berbeda, satu tanpa properti `kelas` (untuk menguji nilai default).

## Cara Mengerjakan

1. Buka file `soal.js`
2. Cari bagian bertanda `// TODO: Soal X`
3. Tulis kode kamu di bawahnya
4. Jalankan dengan `node soal.js` untuk mengecek hasilnya

## Tips

- Jangan terburu-buru melihat solusi. Coba kerjakan sendiri dulu berdasarkan materi 01–10.
- Kalau stuck, baca ulang materi yang relevan sebelum mencoba lagi.
- Latihan ini dirancang untuk melatih pemahaman konsep object, bukan hafalan sintaks.

Selamat mengerjakan! 💪
