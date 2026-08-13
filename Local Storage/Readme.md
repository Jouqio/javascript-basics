#  Local Storage — Dasar Pemrograman JavaScript

Modul pembelajaran ini membahas **Local Storage (Web Storage API)** di JavaScript secara bertahap, dari konsep paling dasar hingga best practice dan keamanan. Materi disusun untuk **pemula**, dengan penjelasan yang jelas, lengkap, dan detail, disertai contoh kode langsung yang bisa dicoba di browser.

##  Daftar Materi

| No | Folder | Topik |
|---|---|---|
| 01 | `01 Pengantar Web Storage` | Apa itu Web Storage, kenapa dibutuhkan |
| 02 | `02 localStorage Dasar` | `setItem`, `getItem`, `removeItem`, `clear` |
| 03 | `03 Menyimpan Data Object dan Array (JSON)` | `JSON.stringify()` dan `JSON.parse()` |
| 04 | `04 sessionStorage` | Penyimpanan sementara per-tab |
| 05 | `05 Perbedaan localStorage, sessionStorage, dan Cookies` | Perbandingan lengkap ketiganya |
| 06 | `06 Storage Event (Sinkronisasi Antar Tab)` | Event `storage` untuk sinkronisasi antar tab |
| 07 | `07 Studi Kasus To-Do List dengan localStorage` | Membangun aplikasi CRUD sederhana |
| 08 | `08 Keamanan dan Keterbatasan localStorage` | Risiko XSS, kapasitas, dan cara amannya |
| 09 | `09 Rangkuman dan Best Practice localStorage` | Ringkasan seluruh materi & tips penggunaan yang baik |
| 10 | `10 Tugas (Latihan Mandiri)` | Latihan soal + kunci jawaban |
| 11 | `11 Quiz Local Storage` | Uji pemahaman dengan soal & kunci jawaban |

##  Struktur Setiap Folder

Setiap folder materi (01-09) berisi:

- **`Readme.md`** → penjelasan konsep lengkap dengan bahasa yang mudah dipahami, disertai tabel perbandingan dan potongan kode
- **`contoh.html`** → contoh kode interaktif yang bisa langsung dibuka & dicoba di browser (tinggal klik dua kali file-nya)

Folder **10 Tugas (Latihan Mandiri)** berisi:
- **`Readme.md`** → daftar soal latihan
- **`latihan.js`** → template kode untuk dikerjakan (bagian `// TODO`)
- **`latihan.html`** → file untuk menjalankan `latihan.js` di browser (localStorage butuh lingkungan browser, tidak bisa lewat Node.js)
- **`kunci-jawaban.js`** → kunci jawaban lengkap (jangan dilihat dulu sebelum mencoba sendiri!)

Folder **11 Quiz Local Storage** berisi:
- **`Readme.md`** → soal pilihan ganda & essay beserta kunci jawaban (collapsible)

##  Cara Belajar

1. Buka folder sesuai urutan nomor (01 → 11)
2. Baca `Readme.md` di setiap folder untuk memahami konsepnya
3. Buka `contoh.html` di browser (klik kanan → *Open with Browser*, atau drag file ke tab browser) untuk mencoba langsung
4. Buka juga **DevTools browser (F12) → tab Application → Local Storage** untuk melihat data yang tersimpan secara visual
5. Coba ubah-ubah kode di `contoh.html` menggunakan text editor untuk bereksperimen
6. Setelah sampai materi 09, kerjakan **Tugas** di folder 10 lewat `latihan.html` (jangan lihat kunci jawaban dulu!)
7. Terakhir, kerjakan **Quiz** di folder 11 untuk menguji pemahaman menyeluruh

##  Target Pembelajaran

Setelah menyelesaikan seluruh modul ini, kamu diharapkan mampu:

- Memahami apa itu Web Storage dan kenapa dibutuhkan
- Menggunakan `setItem()`, `getItem()`, `removeItem()`, `clear()` dengan benar
- Menyimpan dan mengambil data object/array menggunakan `JSON.stringify()`/`JSON.parse()`
- Membedakan `localStorage`, `sessionStorage`, dan Cookies serta kapan menggunakan masing-masing
- Memahami dan menggunakan Storage Event untuk sinkronisasi antar tab
- Membangun aplikasi sederhana (To-Do List) menggunakan localStorage
- Memahami risiko keamanan (XSS) dan menerapkan best practice yang aman

---

*Modul pembelajaran dasar pemrograman JavaScript — fokus Local Storage.*
