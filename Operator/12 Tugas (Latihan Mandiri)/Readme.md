# 12. Tugas (Latihan Mandiri)

Sekarang saatnya **mempraktikkan** semua yang sudah dipelajari! Kerjakan latihan berikut **tanpa melihat kunci jawaban** terlebih dahulu. Tulis kodemu langsung di file `latihan.js`, lalu jalankan untuk mengecek hasilnya.

## Cara Mengerjakan

1. Buka file `latihan.js`
2. Isi setiap function sesuai instruksi (bagian `// TODO`)
3. Jalankan file dengan Node.js (`node latihan.js`) atau lihat hasilnya lewat `console.log`
4. Bandingkan dengan kunci jawaban di `kunci-jawaban.js` setelah selesai mencoba sendiri

## Daftar Soal Latihan

### Soal 1 — Operator Aritmatika
Buat function `cekGenapGanjil(angka)` yang mengembalikan string `"genap"` atau `"ganjil"` menggunakan operator modulus (`%`).

### Soal 2 — Operator Perbandingan
Buat function `bandingkanTipe(a, b)` yang mengembalikan sebuah object berisi hasil perbandingan `a == b` dan `a === b`, contoh: `{ looseEqual: true, strictEqual: false }`.

### Soal 3 — Operator Logika
Buat function `bolehMasukWahana(umur, tinggiCm)` yang mengembalikan `true` **hanya jika** umur minimal 12 tahun **DAN** tinggi minimal 140cm.

### Soal 4 — Operator Ternary
Buat function `kategoriBMI(bmi)` yang mengembalikan `"Kurus"` jika bmi < 18.5, `"Normal"` jika bmi antara 18.5-24.9, atau `"Gemuk"` jika bmi >= 25, menggunakan **ternary bersarang**.

### Soal 5 — Operator String (Template Literals)
Buat function `buatKartuNama(nama, jabatan, perusahaan)` yang mengembalikan string menggunakan **Template Literals** dengan format: `"[nama] - [jabatan] di [perusahaan]"`.

### Soal 6 — Operator Modern (?? dan ?.)
Diberikan object berikut:
```javascript
const produk = { nama: "Laptop", diskon: 0, spesifikasi: null };
```
Buat function `ambilInfoProduk(produk)` yang mengembalikan object `{ diskonTampil, ramTampil }`, di mana:
- `diskonTampil` menggunakan `??` agar `diskon: 0` tetap ditampilkan sebagai `0` (bukan tertimpa nilai default)
- `ramTampil` menggunakan `?.` untuk mengambil `produk.spesifikasi?.ram`, dengan default `"Tidak diketahui"` jika `null`

### Soal 7 — Operator Precedence (Tantangan!)
Tanpa menjalankan kode, **tebak dulu** hasil dari ekspresi berikut, baru cocokkan dengan menjalankan `console.log`:
```javascript
console.log(2 + 3 * 4 > 10 && 5 > 3);
console.log(10 - 2 * 3 === 4 || false);
```
Tulis di komentar kode kamu, tebakanmu sebelum menjalankan program.

## Tips Mengerjakan

- Kerjakan **satu per satu**, jangan terburu-buru
- Coba dulu tanpa melihat kunci jawaban
- Gunakan `console.log()` untuk mengecek hasil setiap function yang kamu buat
- Jika stuck, coba baca ulang materi terkait di folder sebelumnya (01-10)

Selamat mengerjakan! 💪
