# 13. Latihan dan Quiz

Selamat! Kamu sudah mempelajari semua materi dasar **DOM Manipulation** di JavaScript. Sekarang saatnya menguji pemahamanmu.

> 💡 Tips: Kerjakan dulu di `latihan-index.html` + `latihan-script.js` tanpa melihat `jawaban.js`, baru cocokkan.

## 📝 Bagian A: Quiz Pilihan Ganda (Konsep)

**1. Method manakah yang mengembalikan SEMUA elemen yang cocok dengan sebuah CSS selector?**
- a) `querySelector()`
- b) `getElementById()`
- c) `querySelectorAll()`
- d) `getElementByClass()`

**2. Apa perbedaan utama `textContent` dan `innerHTML`?**
- a) Tidak ada bedanya
- b) `innerHTML` memproses tag HTML, `textContent` menganggapnya sebagai teks biasa
- c) `textContent` lebih lambat dari `innerHTML`
- d) `innerHTML` hanya bisa dipakai untuk membaca, tidak bisa mengubah

**3. Properti apa yang digunakan untuk mengakses atribut custom seperti `data-id`?**
- a) `element.attributes.id`
- b) `element.dataset.id`
- c) `element.customData.id`
- d) `element.getData("id")`

**4. Apa yang dilakukan `event.preventDefault()` saat dipanggil di dalam handler submit form?**
- a) Menghapus form dari halaman
- b) Mencegah perilaku default (reload halaman saat form disubmit)
- c) Membatalkan semua event listener lain
- d) Mengosongkan seluruh input form

**5. Apa itu Event Delegation, dan kenapa berguna untuk elemen dinamis?**
- a) Memasang event listener di setiap elemen satu per satu
- b) Memasang satu event listener di elemen parent, memanfaatkan event bubbling, sehingga tetap bekerja untuk elemen yang ditambahkan belakangan
- c) Menghapus semua event listener sekaligus
- d) Event yang hanya bisa dipakai sekali

*(Kunci jawaban ada di bagian bawah file ini)*

## 💻 Bagian B: Latihan Coding

Buka `latihan-index.html` di browser, lalu kerjakan bagian yang bertanda `// TULIS KODE DI SINI` pada `latihan-script.js`.

### Soal 1: Ubah Warna Saat Diklik
Ada sebuah `<div id="kotak-soal1">` di halaman. Buat program agar background-nya berubah warna biru (`classList`) setiap kali div tersebut diklik (toggle).

### Soal 2: Hitung Jumlah Karakter (Real-time)
Ada `<input id="input-soal2">` dan `<p id="counter-soal2">`. Buat program yang menampilkan jumlah karakter yang sudah diketik secara real-time, contoh: "5 karakter".

### Soal 3: Tambah Item ke Daftar Belanja
Ada input `#input-soal3`, tombol `#btn-soal3`, dan `<ul id="daftar-soal3">`. Buat program agar saat tombol diklik, teks di input ditambahkan sebagai `<li>` baru ke dalam daftar, lalu input dikosongkan. Jangan tambahkan jika input kosong.

### Soal 4: Hapus Item dengan Event Delegation
Lanjutkan soal 3: setiap `<li>` yang ditambahkan harus punya tombol "Hapus" di sampingnya. Gunakan **event delegation** (satu listener di `<ul>`) agar tombol hapus tetap berfungsi untuk item yang ditambahkan belakangan.

### Soal 5: Validasi Form Sederhana
Ada form `#form-soal5` dengan input `#nama-soal5` dan `#umur-soal5`, serta `<p id="error-soal5">`. Saat disubmit (`preventDefault()`), validasi:
- Nama tidak boleh kosong
- Umur harus diisi angka dan minimal 17

Jika valid, tampilkan pesan sukses di `#error-soal5` dengan warna hijau. Jika tidak, tampilkan pesan error dengan warna merah.

## 🎯 Tantangan Bonus

### Soal 6: Toggle Show/Hide Password
Buat input password dengan tombol "👁 Tampilkan". Saat tombol diklik, ubah `type` input dari `"password"` menjadi `"text"` (dan sebaliknya) menggunakan `setAttribute`.

---

## 🔑 Kunci Jawaban Quiz Pilihan Ganda

<details>
<summary>Klik untuk melihat jawaban</summary>

1. **c) `querySelectorAll()`** — mengembalikan NodeList dari semua elemen yang cocok
2. **b)** — `innerHTML` merender tag sebagai HTML, `textContent` menampilkannya sebagai teks apa adanya
3. **b) `element.dataset.id`** — untuk atribut `data-id`, `data-nama`, dll
4. **b)** — mencegah reload halaman (perilaku default form) saat submit
5. **b)** — memanfaatkan event bubbling agar 1 listener di parent bisa menangani banyak/elemen dinamis

</details>

Kunci jawaban soal coding ada di file `jawaban.js` (dan `jawaban-index.html` untuk strukturnya) di folder ini — coba kerjakan dulu sendiri ya! 💪
