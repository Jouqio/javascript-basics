# 11 - Studi Kasus dan Optimasi Loop

## Memilih Jenis Loop yang Tepat

Setelah mempelajari semua jenis loop, berikut adalah panduan ringkas untuk **memilih loop yang paling sesuai** dengan situasi:

| Situasi | Loop yang Disarankan |
|---|---|
| Jumlah perulangan sudah pasti/diketahui | `for` |
| Perlu index untuk perhitungan (misalnya loncat 2 index) | `for` |
| Jumlah perulangan tidak pasti, bergantung kondisi | `while` |
| Harus dijalankan minimal 1 kali sebelum cek kondisi | `do...while` |
| Iterasi pada array/string, hanya butuh nilainya | `for...of` |
| Iterasi pada key object | `for...in` (atau `Object.entries()` + `for...of`) |
| Transformasi data array menjadi array baru | `.map()` |
| Menyaring sebagian data array | `.filter()` |
| Meringkas array jadi satu nilai (total, rata-rata, dll) | `.reduce()` |
| Sekadar "melakukan sesuatu" per elemen, tanpa perlu array baru | `.forEach()` |
| Butuh berhenti di tengah proses (break) | Loop biasa (`for`, `while`, `for...of`), bukan method array |

## Tips Optimasi Loop

### 1. Simpan `.length` di Variabel untuk Loop yang Sangat Sering Dijalankan

Untuk loop yang dijalankan **jutaan kali** (jarang terjadi di aplikasi biasa, tapi penting untuk kasus performa kritis), menyimpan `.length` di variabel bisa sedikit membantu, karena `.length` dihitung ulang setiap iterasi kalau ditulis langsung di kondisi:

```js
let arr = [1, 2, 3, /* ...banyak data... */];

// Sedikit lebih optimal untuk data SANGAT besar
for (let i = 0, panjang = arr.length; i < panjang; i++) {
  // proses arr[i]
}
```

**Catatan**: untuk kebanyakan aplikasi sehari-hari, perbedaan performa ini **sangat kecil dan tidak signifikan** — jangan terlalu terobsesi dengan micro-optimization di awal belajar. Fokus dulu pada **kode yang benar dan mudah dibaca**.

### 2. Hindari Nested Loop yang Tidak Perlu

Kalau bisa menyelesaikan masalah tanpa nested loop (misalnya dengan `Map`/`Set` untuk pencarian lebih cepat), performa akan jauh lebih baik untuk data besar. Ini adalah topik lanjutan (struktur data & algoritma) yang bisa dipelajari setelah menguasai dasar loop ini.

### 3. Keluar Sesegera Mungkin dengan `break`

Kalau tujuan loop adalah **mencari sesuatu**, selalu gunakan `break` (atau `.find()`/`.some()`) begitu hasil ditemukan, daripada memproses seluruh data yang tersisa tanpa perlu.

### 4. Pilih Method Array yang Tepat, Jangan Berlebihan Chaining

```js
// Kurang efisien: looping array 2 kali terpisah
let hasil1 = data.filter((x) => x > 10);
let hasil2 = hasil1.map((x) => x * 2);

// Sedikit lebih ringkas (walau secara performa mirip)
let hasil = data.filter((x) => x > 10).map((x) => x * 2);

// Kalau performa SANGAT kritis, gabungkan jadi satu loop manual
let hasilManual = [];
for (let x of data) {
  if (x > 10) {
    hasilManual.push(x * 2);
  }
}
```

Untuk kebanyakan kasus, **keterbacaan kode lebih penting daripada micro-optimization**. Optimasi sebaiknya dilakukan **setelah** terbukti ada masalah performa nyata (jangan premature optimization).

## Studi Kasus Komprehensif

Lihat file `contoh.js` untuk beberapa studi kasus lengkap yang menggabungkan berbagai jenis loop:

1. **Sistem Absensi Sederhana** — menggabungkan `for`, `filter`, dan `reduce`
2. **Validasi Form Bertingkat** — menggunakan `for...of` dengan `break`
3. **Generate Laporan dari Data Transaksi** — kombinasi `map`, `filter`, `reduce`
4. **Pencarian Efisien dengan Early Exit** — perbandingan performa `break` vs tanpa `break`

## Poin Penting

- Pilih jenis loop berdasarkan kebutuhan: jumlah pasti (`for`), kondisi (`while`), transformasi data (`map`/`filter`/`reduce`)
- Optimasi performa penting untuk data besar, tapi jangan mengorbankan keterbacaan kode di awal belajar
- Gunakan `break` atau method seperti `.find()` untuk keluar sesegera mungkin saat mencari data
- Hindari nested loop yang tidak perlu untuk data besar

Lanjut ke → [12 Tugas Latihan](../12%20Tugas%20Latihan/Readme.md)
