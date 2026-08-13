# 13. Latihan dan Quiz

Selamat! Kamu sudah mempelajari semua materi dasar **OOP (Object-Oriented Programming)** di JavaScript. Sekarang saatnya menguji pemahamanmu dengan latihan soal dan quiz berikut.

> 💡 Tips: Coba kerjakan dulu tanpa melihat kunci jawaban di file `jawaban.js`. Setelah selesai, baru cocokkan hasilnya!

## 📝 Bagian A: Quiz Pilihan Ganda (Konsep)

**1. Apa perbedaan utama antara Object Literal dan Class?**
- a) Tidak ada perbedaan sama sekali
- b) Class adalah "cetakan/blueprint" untuk membuat banyak objek dengan struktur sama, object literal untuk satu objek tunggal
- c) Object literal hanya bisa dipakai di Node.js
- d) Class tidak bisa memiliki method

**2. Apa fungsi keyword `super()` di dalam constructor sebuah child class?**
- a) Menghapus constructor dari parent class
- b) Memanggil constructor dari parent class
- c) Membuat class baru
- d) Mengubah class menjadi private

**3. Manakah dari berikut ini yang merupakan cara mendeklarasikan private field di JavaScript modern?**
- a) `_nama`
- b) `private nama`
- c) `#nama`
- d) `hidden nama`

**4. Apa itu polymorphism dalam konteks OOP?**
- a) Membuat banyak class sekaligus
- b) Satu method dengan nama sama, berperilaku berbeda tergantung objeknya
- c) Menghapus method dari sebuah class
- d) Cara menyimpan banyak data dalam satu variabel

**5. Bagaimana cara mengakses static method bernama `buatBaru()` di dalam class `Produk`?**
- a) `const p = new Produk(); p.buatBaru();`
- b) `Produk.buatBaru();`
- c) `buatBaru(Produk);`
- d) `Produk.prototype.buatBaru();`

*(Kunci jawaban ada di bagian bawah file ini)*

## 💻 Bagian B: Latihan Coding

Kerjakan soal-soal berikut di file `latihan.js` yang sudah disediakan (ada template kosong dengan komentar `// TULIS KODE DI SINI`).

### Soal 1: Membuat Class Dasar
Buat class `Buku` dengan constructor menerima `judul` dan `penulis`. Tambahkan method `info()` yang mencetak `"[judul] oleh [penulis]"`.

### Soal 2: Method dengan Perhitungan
Buat class `Lingkaran` dengan constructor menerima `jariJari`. Tambahkan method `luas()` yang mengembalikan luas lingkaran (`π × r²`), dan method `keliling()` yang mengembalikan keliling (`2 × π × r`). Gunakan `Math.PI`.

### Soal 3: Encapsulation
Buat class `Loker` dengan private field `#kodeAkses`. Constructor menerima `kodeAkses` awal. Tambahkan method `buka(kodeInput)` yang mengembalikan `true` jika `kodeInput` sesuai dengan `#kodeAkses`, dan `false` jika tidak.

### Soal 4: Inheritance
Buat class `Kendaraan` dengan constructor menerima `merek`, dan method `jalan()` yang mencetak `"[merek] sedang berjalan"`. Buat class `Motor` yang **extends** `Kendaraan`, dengan tambahan method `kickstarter()` yang mencetak `"[merek] dinyalakan dengan kickstarter"`.

### Soal 5: Polymorphism
Buat 3 class: `Kucing`, `Anjing`, `Bebek`, masing-masing punya method `bersuara()` dengan suara khasnya masing-masing (bebas). Buat array berisi instance dari ketiga class tersebut, lalu gunakan `.forEach()` untuk memanggil `bersuara()` pada setiap elemen.

### Soal 6: Getter dan Setter
Buat class `Suhu` dengan private field `#celsius`. Tambahkan getter/setter untuk `celsius`, serta getter `fahrenheit` yang menghitung otomatis dari `celsius` (`celsius * 9/5 + 32`).

## 🎯 Tantangan Bonus (Lebih Sulit)

### Soal 7: Sistem Perpustakaan Sederhana
Buat class `Perpustakaan` dengan:
- Private field `#daftarBuku` (array, mulai kosong)
- Method `tambahBuku(judul)` — menambahkan judul ke `#daftarBuku`
- Method `jumlahBuku()` — mengembalikan jumlah buku
- Static property `namaPerpustakaan` bernilai `"Perpustakaan Kota"`

### Soal 8: Static Factory Method
Buat class `Pengguna` dengan constructor menerima `nama` dan `role` (default `"member"`). Tambahkan static method `buatAdmin(nama)` yang mengembalikan instance `Pengguna` baru dengan `role` otomatis `"admin"`.

---

## 🔑 Kunci Jawaban Quiz Pilihan Ganda

<details>
<summary>Klik untuk melihat jawaban</summary>

1. **b)** — Class adalah cetakan untuk banyak objek, object literal untuk satu objek
2. **b)** — `super()` memanggil constructor dari parent class
3. **c) `#nama`** — private field modern menggunakan tanda pagar
4. **b)** — polymorphism berarti satu nama method, banyak bentuk perilaku
5. **b) `Produk.buatBaru();`** — static method diakses lewat nama class, bukan instance

</details>

Untuk kunci jawaban soal coding, lihat file `jawaban.js` di folder ini — tapi coba kerjakan sendiri dulu ya! 💪
