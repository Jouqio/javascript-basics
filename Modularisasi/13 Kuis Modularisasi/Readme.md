# 13. Kuis: Modularisasi

> Uji pemahamanmu dari materi 01–12 sebelum lanjut ke Tugas Gabungan.

## Tujuan Pembelajaran

- Menguji pemahaman sejarah modularisasi dan CommonJS
- Menguji pemahaman ES Modules, barrel file, dan interoperability
- Menguji pemahaman praktik terbaik modularisasi

## Soal Dasar (Sejarah, CommonJS, Export)

**Soal 1.** Apa tujuan utama IIFE pada era sebelum ada sistem module resmi di JavaScript?

- Mempercepat eksekusi kode
- Membuat scope tersendiri agar variabel tidak bocor ke global scope
- Menggantikan fungsi biasa sepenuhnya
- Menghubungkan ke database

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Membuat scope tersendiri agar variabel tidak bocor ke global scope**

IIFE (Immediately Invoked Function Expression) dipakai untuk membuat scope tersendiri, sehingga variabel di dalamnya tidak mencemari scope global — cikal bakal konsep module scope modern.
</details>

**Soal 2.** Manakah pasangan syntax yang benar untuk CommonJS?

- import/export
- require()/module.exports
- include()/return
- load()/module.output

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: require()/module.exports**

CommonJS memakai require() untuk mengimpor dan module.exports untuk mengekspor. import/export adalah syntax ES Modules.
</details>

**Soal 3.** Apa perbedaan utama named export dan default export?

- Tidak ada perbedaan, keduanya identik
- Named export boleh banyak per file dengan nama tetap saat import, default export maksimal satu dengan nama bebas saat import
- Default export hanya bisa dipakai di CommonJS
- Named export tidak butuh kata kunci export

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Named export boleh banyak per file dengan nama tetap saat import, default export maksimal satu dengan nama bebas saat import**

Satu file boleh punya banyak named export (nama harus sama saat import, kecuali di-rename dengan `as`), tapi maksimal satu default export (nama bebas ditentukan saat import).
</details>

## Soal Lanjutan (Barrel File, Interoperability, Best Practices)

**Soal 4.** Apa fungsi utama sebuah barrel file (index.mjs)?

- Menjalankan seluruh aplikasi
- Mengumpulkan dan meng-ekspor ulang isi dari beberapa file dalam folder yang sama, jadi satu pintu masuk
- Mengganti seluruh sistem module
- Menghapus file yang tidak dipakai

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Mengumpulkan dan meng-ekspor ulang isi dari beberapa file dalam folder yang sama, jadi satu pintu masuk**

Barrel file bertugas mengumpulkan dan meng-ekspor ulang (re-export) isi dari beberapa module kecil dalam satu folder, sehingga file lain cukup mengimpor dari satu titik saja.
</details>

**Soal 5.** Kenapa `require()` di CommonJS tidak bisa langsung memuat file ES Modules?

- Karena ES Modules tidak bisa diekspor
- Karena require() bersifat synchronous, sedangkan ES Modules dirancang untuk dimuat secara asynchronous
- Karena file .mjs tidak boleh berisi fungsi
- Sebenarnya bisa, tidak ada batasan apa pun

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Karena require() bersifat synchronous, sedangkan ES Modules dirancang untuk dimuat secara asynchronous**

require() bekerja secara synchronous (blocking), sedangkan ES Modules dirancang untuk loading asynchronous. CommonJS harus memakai dynamic import() untuk memuat ES Modules.
</details>

**Soal 6.** Sebuah module langsung terhubung ke database begitu file-nya di-import, sebelum fungsi apa pun dipanggil. Prinsip praktik terbaik apa yang dilanggar?

- Single Responsibility
- Menghindari efek samping tersembunyi saat file di-import
- Barrel file
- Circular dependency

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Menghindari efek samping tersembunyi saat file di-import**

Efek samping (seperti koneksi database) sebaiknya baru terjadi saat fungsi yang relevan benar-benar dipanggil, bukan otomatis saat file di-import — ini melanggar prinsip menghindari efek samping tersembunyi.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file [contoh.js](./contoh.js) pada folder ini.

[← Praktik Terbaik Modularisasi](../12 Praktik Terbaik Modularisasi/Readme.md) | [Tugas Gabungan →](../14%20Tugas%20Gabungan/Readme.md)
