# 13. Kuis: Fetch API

> Uji pemahamanmu dari materi 01–12 sebelum lanjut ke Tugas Gabungan.

## Tujuan Pembelajaran

- Menguji pemahaman dasar fetch, Response, dan POST request
- Menguji pemahaman Promise.all, AbortController, dan timeout
- Mengidentifikasi pola error handling yang benar pada fetch

## Soal Dasar (fetch, Response, POST)

**Soal 1.** Apa yang dikembalikan langsung oleh pemanggilan `fetch(url)`?

- Data JSON secara langsung
- Sebuah Promise yang resolve dengan objek Response
- String kosong
- undefined

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Sebuah Promise yang resolve dengan objek Response**

fetch() selalu mengembalikan Promise yang resolve dengan objek Response, bukan data langsung. Data JSON baru didapat setelah memanggil response.json().
</details>

**Soal 2.** Jika server merespons dengan status 404, apa yang terjadi pada Promise dari fetch()?

- Promise langsung reject
- Promise tetap resolve, tapi response.ok bernilai false
- fetch() melempar error secara otomatis
- Program berhenti total

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Promise tetap resolve, tapi response.ok bernilai false**

fetch() hanya reject karena masalah jaringan. Status HTTP gagal seperti 404/500 tetap membuat Promise resolve normal — response.ok yang bernilai false menandakan kegagalan tersebut.
</details>

**Soal 3.** Kenapa body pada POST request perlu diproses dengan JSON.stringify()?

- Supaya lebih cepat dikirim
- Karena body hanya menerima string, bukan objek JavaScript langsung
- Karena server tidak bisa membaca objek
- Tidak perlu, ini opsional

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Karena body hanya menerima string, bukan objek JavaScript langsung**

Properti body pada opsi fetch hanya menerima string (atau tipe lain seperti FormData), sehingga objek JavaScript harus diubah dulu menjadi string JSON.
</details>

## Soal Lanjutan (Promise.all, AbortController, Timeout)

**Soal 4.** Apa keuntungan utama menggunakan Promise.all() untuk beberapa fetch yang independen?

- Membuat kode lebih pendek saja
- Semua fetch berjalan bersamaan, sehingga total waktu tunggu jadi lebih singkat
- Otomatis menangani semua error tanpa try/catch
- Membatalkan fetch yang gagal secara otomatis

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Semua fetch berjalan bersamaan, sehingga total waktu tunggu jadi lebih singkat**

Dengan Promise.all(), semua fetch dijalankan paralel (bersamaan), sehingga total waktu tunggu setara waktu fetch paling lambat saja, bukan dijumlahkan seperti fetch berurutan.
</details>

**Soal 5.** Apa nama error yang muncul saat sebuah fetch dibatalkan lewat AbortController?

- TimeoutError
- NetworkError
- AbortError
- CancelError

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: AbortError**

Saat fetch dibatalkan lewat controller.abort(), Promise-nya reject dengan error bernama AbortError, yang bisa dicek lewat error.name.
</details>

**Soal 6.** Kenapa clearTimeout() penting dipanggil di blok finally pada pola fetch dengan timeout?

- Supaya kode terlihat lebih rapi
- Untuk menghentikan timer timeout jika fetch sudah selesai lebih dulu, mencegah timer menggantung sia-sia
- Karena wajib secara syntax, tanpa itu kode akan error
- Untuk mempercepat fetch berikutnya

<details>
<summary>Lihat Jawaban</summary>

**Jawaban: Untuk menghentikan timer timeout jika fetch sudah selesai lebih dulu, mencegah timer menggantung sia-sia**

Jika fetch selesai lebih cepat dari batas timeout, timer yang dibuat setTimeout masih akan tetap berjalan di background kalau tidak dibersihkan dengan clearTimeout() — sama seperti materi clearTimeout di seri Async/Await.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Menangani Timeout pada Fetch](../12 Menangani Timeout pada Fetch/Readme.md) | [Tugas Gabungan →](../14%20Tugas%20Gabungan/Readme.md)
