# 13. Latihan dan Quiz

Selamat! Kamu sudah mempelajari semua materi dasar **Variable Assignment** di JavaScript. Sekarang saatnya menguji pemahamanmu dengan latihan soal dan quiz berikut.

> 💡 Tips: Coba kerjakan dulu tanpa melihat kunci jawaban di file `jawaban.js`. Setelah selesai, baru cocokkan hasilnya!

## 📝 Bagian A: Quiz Pilihan Ganda (Konsep)

**1. Apa perbedaan utama antara `let` dan `const`?**
- a) `let` hanya untuk angka, `const` hanya untuk teks
- b) `const` tidak bisa di-assign ulang nilainya, `let` bisa
- c) Tidak ada perbedaan
- d) `const` hanya bisa dipakai di dalam fungsi

**2. Apa hasil dari kode berikut?**
```js
console.log(nama);
var nama = "Budi";
```
- a) Error
- b) "Budi"
- c) `undefined`
- d) `null`

**3. Apakah kode berikut valid?**
```js
const daftar = [1, 2, 3];
daftar.push(4);
```
- a) Tidak valid, akan error karena `daftar` adalah const
- b) Valid, karena isi array masih bisa diubah meski variabelnya const
- c) Valid, tapi hasilnya selalu kosong
- d) Tidak valid, push() tidak ada di JavaScript

**4. Apa hasil dari `"5" + 3`?**
- a) `8`
- b) `"53"`
- c) Error
- d) `undefined`

**5. Variabel yang dideklarasikan dengan `let` di dalam blok `if { }` bisa diakses dari...**
- a) Di mana saja dalam file
- b) Hanya di dalam blok `if` tersebut
- c) Hanya di dalam fungsi yang membungkusnya
- d) Tidak bisa diakses sama sekali, bahkan di dalam blok itu sendiri

*(Kunci jawaban ada di bagian bawah file ini)*

## 💻 Bagian B: Latihan Coding

Kerjakan soal-soal berikut di file `latihan.js` yang sudah disediakan (ada template kosong dengan komentar `// TULIS KODE DI SINI`).

### Soal 1: Deklarasi dan Assignment Dasar
Buat 3 variabel: `namaToko` (const, berisi nama toko), `stokBarang` (let, berisi angka), dan `hargaSatuan` (const, berisi angka). Cetak ketiganya ke console dengan format yang jelas.

### Soal 2: Praktik Assignment Operator
Buat variabel `saldo` bernilai awal `100000`. Kurangi `saldo` sebesar `25000` (belanja), lalu tambah `saldo` sebesar `50000` (top up), menggunakan compound assignment operator (`-=` dan `+=`). Cetak saldo akhir.

### Soal 3: Cek Tipe Data
Buat 4 variabel dengan tipe data berbeda: `string`, `number`, `boolean`, dan `null`. Gunakan `typeof` untuk mencetak tipe data masing-masing ke console.

### Soal 4: Scope Variable
Buat sebuah fungsi bernama `hitungLuasPersegi` yang menerima parameter `sisi`, mendeklarasikan variabel lokal `luas` di dalamnya (`luas = sisi * sisi`), lalu me-return nilai `luas`. Coba akses variabel `luas` di luar fungsi dan amati apa yang terjadi (boleh pakai try-catch untuk menangkap errornya).

### Soal 5: Destructuring
Diberikan object berikut:
```js
const produk = { nama: "Laptop", harga: 8000000, stok: 5 };
```
Gunakan **object destructuring** untuk mengekstrak `nama` dan `harga` ke dalam variabel, lalu cetak dalam format: `"Laptop seharga Rp8000000"`.

### Soal 6: Type Conversion
Diberikan variabel berikut (semuanya string, seolah dari input form):
```js
let hargaInput = "25000";
let jumlahInput = "4";
```
Konversi keduanya ke number, lalu hitung dan cetak totalnya (`harga * jumlah`).

## 🎯 Tantangan Bonus (Lebih Sulit)

### Soal 7: Swap Tanpa Variabel Bantu
Diberikan `let a = "kiri"` dan `let b = "kanan"`. Tukar nilai keduanya **hanya dengan 1 baris kode** menggunakan array destructuring, lalu cetak hasilnya.

### Soal 8: Simulasi Perhitungan dengan const yang Berisi Object
Buat `const keranjang = { items: [], total: 0 }`. Tanpa mengganti seluruh object `keranjang`, tambahkan sebuah item ke `keranjang.items` (misal `"Buku"`) dan update `keranjang.total` menjadi `50000`. Cetak hasil akhir `keranjang`.

---

## 🔑 Kunci Jawaban Quiz Pilihan Ganda

<details>
<summary>Klik untuk melihat jawaban</summary>

1. **b)** — `const` tidak bisa di-assign ulang, `let` bisa
2. **c) `undefined`** — karena hoisting, deklarasi `var` diangkat ke atas tapi nilainya belum ada
3. **b)** — array/object dengan `const` tetap bisa diubah isinya, hanya tidak bisa di-assign ulang seluruhnya
4. **b) `"53"`** — number dikonversi jadi string lalu digabung (type coercion)
5. **b)** — `let` memiliki block scope, hanya bisa diakses di dalam blok `{ }` tempat ia dideklarasikan

</details>

Untuk kunci jawaban soal coding, lihat file `jawaban.js` di folder ini — tapi coba kerjakan sendiri dulu ya! 💪
