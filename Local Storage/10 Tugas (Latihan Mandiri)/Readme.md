# 10. Tugas (Latihan Mandiri)

Sekarang saatnya **mempraktikkan** semua yang sudah dipelajari! Kerjakan latihan berikut **tanpa melihat kunci jawaban** terlebih dahulu. Tulis kodemu langsung di file `latihan.js`, lalu jalankan lewat file `latihan.html` di browser untuk mengecek hasilnya (karena `localStorage` hanya tersedia di lingkungan browser, **bukan** Node.js).

## Cara Mengerjakan

1. Buka file `latihan.js`, isi setiap function sesuai instruksi (bagian `// TODO`)
2. Buka file `latihan.html` di browser (bukan lewat Node.js) untuk menjalankan dan mengecek hasilnya
3. Buka DevTools (F12) → tab **Console** untuk melihat hasil `console.log`
4. Bandingkan dengan kunci jawaban di `kunci-jawaban.js` setelah selesai mencoba sendiri

## Daftar Soal Latihan

### Soal 1 — localStorage Dasar
Buat function `simpanNamaPengguna(nama)` yang menyimpan `nama` ke localStorage dengan key `"namaPengguna"`, dan function `ambilNamaPengguna()` yang mengembalikan nama tersebut (atau `"Tamu"` jika belum ada).

### Soal 2 — Menghitung Jumlah Kunjungan
Buat function `hitungKunjungan()` yang setiap kali dipanggil akan **menambah 1** ke counter kunjungan yang tersimpan di localStorage (key: `"jumlahKunjungan"`), lalu mengembalikan nilai counter terbaru. Jika belum ada data, mulai dari `1`.

### Soal 3 — Menyimpan Object dengan JSON
Buat function `simpanPengaturan(pengaturan)` yang menerima sebuah object (misalnya `{ tema: "gelap", bahasa: "id" }`) dan menyimpannya ke localStorage dengan key `"pengaturan"` menggunakan `JSON.stringify()`. Buat juga function `ambilPengaturan()` yang mengembalikan object tersebut (gunakan `JSON.parse()`), atau object default `{ tema: "terang", bahasa: "en" }` jika belum ada data.

### Soal 4 — Keranjang Belanja Sederhana
Buat function `tambahKeKeranjang(namaProduk, harga)` yang menambahkan produk baru (object `{ namaProduk, harga }`) ke dalam array keranjang belanja yang tersimpan di localStorage (key: `"keranjang"`). Buat juga function `hitungTotalBelanja()` yang mengembalikan **total harga** semua produk di keranjang.

### Soal 5 — Function Helper Aman (Gabungan)
Buat dua function helper generik: `simpanDataAman(key, data)` yang membungkus `JSON.stringify()` dengan `try...catch`, dan `ambilDataAman(key, nilaiDefault)` yang membungkus `JSON.parse()` dengan `try...catch` — jika terjadi error saat parsing, kembalikan `nilaiDefault`.

### Soal 6 — Tantangan: Wishlist dengan Cek Duplikat
Buat function `tambahKeWishlist(idProduk)` yang menambahkan `idProduk` ke dalam array wishlist di localStorage (key: `"wishlist"`), **tapi jangan menambahkan** jika `idProduk` tersebut **sudah ada** di dalam wishlist (hindari duplikat).

## Tips Mengerjakan

- Kerjakan **satu per satu**, jangan terburu-buru
- Gunakan DevTools → Application → Local Storage untuk memeriksa data secara visual
- Jangan lupa `JSON.stringify()`/`JSON.parse()` untuk data object/array
- Jika stuck, coba baca ulang materi terkait di folder sebelumnya (01-09)

Selamat mengerjakan! 💪
