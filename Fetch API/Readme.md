# Fetch API — Materi Pembelajaran JavaScript

Kumpulan materi untuk mempelajari **Fetch API di JavaScript** — cara resmi berkomunikasi dengan server lewat HTTP request (GET, POST, PUT, DELETE) — disusun dalam 13 topik berurutan ditambah satu tugas gabungan. Materi ditulis khusus untuk **pemula**, dimulai dari konsep dasar `fetch()` sampai pola-pola tingkat lanjut seperti membatalkan request dan menangani timeout.

Setiap topik ada di folder tersendiri berisi:
- **`Readme.md`** — penjelasan konsep, tujuan pembelajaran, tips/peringatan, dan latihan (dengan jawaban yang bisa dibuka/tutup).
- **`contoh.js`** — semua contoh kode topik tersebut, siap dijalankan langsung lewat `node contoh.js`.

## Daftar Materi

| # | Folder | Fokus |
|---|--------|-------|
| 01 | [Pengantar Fetch API](./01%20Pengantar%20Fetch%20API/Readme.md) | Apa itu fetch(), kenapa selalu mengembalikan Promise |
| 02 | [GET Request Dasar](./02%20GET%20Request%20Dasar/Readme.md) | Mengambil data dari server |
| 03 | [Menangani Response](./03%20Menangani%20Response/Readme.md) | status, ok, headers, .json() vs .text() |
| 04 | [Error Handling pada Fetch](./04%20Error%20Handling%20pada%20Fetch/Readme.md) | Error jaringan vs status HTTP gagal |
| 05 | [POST Request](./05%20POST%20Request/Readme.md) | Mengirim data baru ke server |
| 06 | [Request Headers dan Content-Type](./06%20Request%20Headers%20dan%20Content-Type/Readme.md) | Metadata request/response |
| 07 | [PUT dan DELETE Request](./07%20PUT%20dan%20DELETE%20Request/Readme.md) | Memperbarui dan menghapus data (CRUD) |
| 08 | [Async Await dengan Fetch](./08%20Async%20Await%20dengan%20Fetch/Readme.md) | Pola fetch yang bersih dan bisa dipakai ulang |
| 09 | [Query Parameters dan URLSearchParams](./09%20Query%20Parameters%20dan%20URLSearchParams/Readme.md) | Menyusun URL pencarian dengan aman |
| 10 | [Multiple Requests Paralel dengan Promise.all](./10%20Multiple%20Requests%20Paralel%20dengan%20Promise.all/Readme.md) | Fetch bersamaan supaya lebih cepat |
| 11 | [Membatalkan Request dengan AbortController](./11%20Membatalkan%20Request%20dengan%20AbortController/Readme.md) | Menghentikan fetch yang sedang berjalan |
| 12 | [Menangani Timeout pada Fetch](./12%20Menangani%20Timeout%20pada%20Fetch/Readme.md) | Batas waktu tunggu otomatis |
| 13 | [Kuis Fetch API](./13%20Kuis%20Fetch%20API/Readme.md) | 6 soal untuk menguji pemahaman |
| 14 | [Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md) | Proyek GitHub User Explorer yang menggabungkan semua materi |

## Cara Belajar

1. Ikuti urutan folder `01` → `14`, karena setiap materi dibangun di atas materi sebelumnya.
2. Baca `Readme.md` di tiap folder untuk penjelasan konsepnya.
3. Buka terminal di folder yang sama, lalu jalankan contohnya:
   ```bash
   node contoh.js
   ```
4. **Pastikan komputer terhubung internet** — hampir semua contoh melakukan request sungguhan ke API publik (kebanyakan `api.github.com`, dan `jsonplaceholder.typicode.com` khusus di materi 05–07).
5. Kerjakan bagian **Latihan** di akhir tiap `Readme.md` sebelum membuka jawabannya.
6. Setelah materi 13 (kuis), kerjakan **[14 Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md)** — proyek "GitHub User Explorer" yang memaksa kamu memakai GET, error handling, query params, Promise.allSettled, AbortController, dan timeout dalam satu alur kode. Tugas ini disediakan sebagai starter (`tugas.js`) dengan TODO, tanpa kunci jawaban — dikerjakan mandiri.

## Prasyarat

Materi ini mengasumsikan pembaca sudah familiar dengan **dasar JavaScript**, terutama **Promise dan async/await** (kalau belum, disarankan pelajari dulu materi seri "Async/Await" sebelum masuk ke sini — Fetch API dibangun sepenuhnya di atas konsep Promise). Untuk menjalankan file `.js`, dibutuhkan [Node.js versi 18 ke atas](https://nodejs.org) (fetch sudah built-in sejak versi itu) — cek dengan `node --version`.

## Struktur Proyek

```
Fetch API/
├── 01 Pengantar Fetch API/
│   ├── Readme.md
│   └── contoh.js
├── 02 GET Request Dasar/
│   ├── Readme.md
│   └── contoh.js
├── ...
├── 13 Kuis Fetch API/
│   ├── Readme.md
│   └── contoh.js
├── 14 Tugas Gabungan/
│   ├── Readme.md
│   └── tugas.js          <- starter, TODO, tanpa solusi
└── Readme.md
```

## Catatan Teknis

- Seluruh contoh kode adalah **JavaScript murni (vanilla)**, memakai `fetch()` bawaan Node.js/browser — tanpa library tambahan seperti Axios.
- Materi 01–04 dan 06–13 memakai **GitHub REST API** (`api.github.com`) — publik, gratis, tidak butuh API key untuk permintaan dasar, tapi punya **rate limit** sekitar 60 request/jam untuk pengguna anonim. Kalau muncul pesan rate limit, tunggu beberapa saat.
- Materi 05–07 (POST/PUT/DELETE) memakai **[JSONPlaceholder](https://jsonplaceholder.typicode.com)** — API publik yang memang dibuat khusus untuk latihan menulis data, karena datanya tidak benar-benar tersimpan (aman dicoba berkali-kali).
- Semua contoh sudah diverifikasi sintaksnya valid (`node --check`), dan sebagian dites langsung terhadap API sungguhan untuk memastikan pola kodenya benar.
- File `14 Tugas Gabungan/tugas.js` sengaja dibiarkan berupa kerangka (TODO) — runner di bagian bawah tetap bisa dijalankan tanpa error meski fungsi belum diisi.
