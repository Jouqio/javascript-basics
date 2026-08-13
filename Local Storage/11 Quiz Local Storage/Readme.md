# 11. Quiz Local Storage

Uji pemahamanmu tentang materi Local Storage dengan quiz berikut. Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah!

---

## Bagian A — Pilihan Ganda

**1. Apa perbedaan utama antara `localStorage` dan `sessionStorage`?**
a. `localStorage` lebih cepat dari `sessionStorage`
b. `localStorage` bertahan permanen, `sessionStorage` hilang saat tab ditutup
c. `sessionStorage` bisa menyimpan object langsung, `localStorage` tidak
d. Tidak ada bedanya, keduanya identik

**2. Method apa yang digunakan untuk menyimpan data ke localStorage?**
a. `localStorage.save()`
b. `localStorage.put()`
c. `localStorage.setItem()`
d. `localStorage.write()`

**3. Apa yang dikembalikan `getItem()` jika key yang dicari tidak ditemukan?**
a. `undefined`
b. `null`
c. String kosong `""`
d. Error

**4. Kenapa kita perlu `JSON.stringify()` saat menyimpan object ke localStorage?**
a. Agar data lebih ringkas
b. Karena localStorage hanya bisa menyimpan string
c. Karena JSON lebih aman
d. Tidak perlu, object bisa disimpan langsung

**5. Apa yang terjadi jika kita menyimpan angka `20` ke localStorage lalu mengambilnya kembali?**
a. Tetap bertipe number
b. Berubah menjadi boolean
c. Berubah menjadi string "20"
d. Terjadi error

**6. Apakah `sessionStorage` dibagikan antar tab pada domain yang sama?**
a. Ya, selalu dibagikan
b. Tidak, setiap tab punya sessionStorage sendiri-sendiri
c. Hanya dibagikan jika menggunakan Chrome
d. Tergantung ukuran data

**7. Apa kelebihan utama Cookies dibanding localStorage untuk data autentikasi?**
a. Cookies punya kapasitas lebih besar
b. Cookies bisa diatur `httpOnly` sehingga tidak bisa diakses JavaScript (lebih aman dari XSS)
c. Cookies lebih mudah digunakan di JavaScript
d. Cookies otomatis terenkripsi

**8. Kapan event `storage` akan terpicu?**
a. Setiap kali localStorage berubah, termasuk di tab yang melakukan perubahan itu sendiri
b. Hanya di tab LAIN yang membuka domain sama, saat localStorage berubah dari tab lain
c. Hanya saat browser pertama kali dibuka
d. Event `storage` tidak pernah terpicu otomatis

**9. Apa risiko keamanan utama dari menyimpan token autentikasi di localStorage?**
a. Data akan otomatis terhapus
b. Data rentan dicuri lewat serangan XSS karena bisa diakses semua JavaScript di halaman
c. Data akan otomatis terkirim ke semua server
d. localStorage tidak mendukung penyimpanan token

**10. Apa fungsi `JSON.parse()` dalam konteks localStorage?**
a. Mengubah object menjadi string sebelum disimpan
b. Menghapus data dari localStorage
c. Mengubah string JSON yang diambil dari localStorage kembali menjadi object/array
d. Mengecek apakah data valid

---

## Bagian B — Essay Singkat

**11.** Jelaskan dengan kata-katamu sendiri, kenapa pola "Load → Ubah → Save" selalu diperlukan saat mengelola array data (misalnya daftar tugas) di localStorage?

**12.** Buatlah contoh kode function `simpanFavorit(idProduk)` yang menyimpan `idProduk` ke dalam array `"produkFavorit"` di localStorage, dengan aman menggunakan `JSON.stringify()`/`JSON.parse()`.

**13.** Sebutkan minimal 3 hal yang **sebaiknya tidak** disimpan di localStorage, dan jelaskan alasannya secara singkat.

---

## Kunci Jawaban

<details>
<summary>Klik untuk melihat jawaban (Bagian A)</summary>

1. b — localStorage permanen, sessionStorage hilang saat tab ditutup
2. c — `localStorage.setItem()`
3. b — `null`
4. b — Karena localStorage hanya bisa menyimpan string
5. c — Berubah menjadi string "20"
6. b — Tidak, setiap tab punya sessionStorage sendiri-sendiri
7. b — Cookies bisa `httpOnly` sehingga lebih aman dari XSS
8. b — Hanya di tab LAIN yang membuka domain sama
9. b — Data rentan dicuri lewat serangan XSS
10. c — Mengubah string JSON kembali menjadi object/array

</details>

<details>
<summary>Klik untuk melihat panduan jawaban (Bagian B)</summary>

**11.** localStorage tidak mendukung "partial update" (mengubah sebagian data saja) — kita harus selalu mengambil **seluruh array** yang tersimpan, mengubahnya di memori JavaScript (menambah/menghapus/mengubah item), lalu menyimpan **seluruh array** itu kembali untuk menggantikan data lama secara utuh.

**12.**
```javascript
function simpanFavorit(idProduk) {
  const favorit = JSON.parse(localStorage.getItem("produkFavorit")) || [];
  if (!favorit.includes(idProduk)) {
    favorit.push(idProduk);
    localStorage.setItem("produkFavorit", JSON.stringify(favorit));
  }
}
```

**13.** Contoh hal yang sebaiknya tidak disimpan di localStorage:
- **Token autentikasi/session** → rentan dicuri lewat serangan XSS karena bisa diakses semua JavaScript di halaman
- **Password (bahkan yang di-hash)** → tetap berisiko jika ada celah keamanan pada aplikasi
- **Data kartu kredit/informasi finansial** → sangat sensitif, sebaiknya ditangani oleh server dengan enkripsi yang layak
- **Data pribadi sensitif (NIK, data medis)** → melanggar prinsip keamanan data pribadi jika tersimpan tanpa proteksi memadai

</details>

---

**Skor kamu:** Hitung berapa jawaban benar dari 10 soal pilihan ganda.
- 9-10 benar → 🌟 Sangat menguasai materi Local Storage!
- 6-8 benar → 👍 Cukup baik, coba ulas lagi materi yang masih ragu
- < 6 benar → 📖 Sebaiknya baca ulang materi 01-09 sebelum lanjut

Selamat, kamu telah menyelesaikan seluruh materi **Local Storage** dalam JavaScript! 🎉
