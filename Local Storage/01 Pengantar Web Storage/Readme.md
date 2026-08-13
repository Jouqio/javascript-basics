# 01. Pengantar Web Storage

## Apa itu Web Storage?

**Web Storage** adalah fitur bawaan browser yang memungkinkan kita **menyimpan data langsung di sisi client (browser pengguna)**, tanpa perlu server atau database eksternal. Data ini tersimpan dalam bentuk **key-value** (pasangan kunci dan nilai), mirip seperti object sederhana.

Web Storage adalah bagian dari **Web API** yang disediakan oleh browser, dan terdiri dari dua jenis:

| Jenis | Kepanjangan | Bertahan Sampai Kapan? |
|---|---|---|
| `localStorage` | Local Storage | **Permanen** — tetap ada meski browser ditutup, sampai dihapus manual |
| `sessionStorage` | Session Storage | **Sementara** — hilang saat tab/browser ditutup |

Modul ini akan fokus membahas **`localStorage`** secara mendalam, dan juga membahas `sessionStorage` sebagai perbandingan di materi 04.

## Kenapa Butuh Web Storage?

Sebelum ada Web Storage, developer web hanya mengandalkan **cookies** untuk menyimpan data di browser. Namun cookies punya banyak keterbatasan:

- Kapasitas sangat kecil (hanya ~4KB)
- Ikut terkirim ke server di **setiap request** HTTP (boros bandwidth)
- API-nya rumit untuk dipakai (harus parsing string manual)

`localStorage` hadir untuk mengatasi masalah tersebut, dengan:

- Kapasitas jauh lebih besar (**~5-10MB** tergantung browser)
- **Tidak** ikut terkirim ke server (murni tersimpan di browser)
- API yang **sederhana** dan mudah digunakan

## Kapan Web Storage Berguna?

- Menyimpan **preferensi pengguna** (contoh: mode gelap/terang, bahasa pilihan)
- Menyimpan **data sementara** aplikasi (contoh: isi keranjang belanja, draft form)
- Membuat aplikasi web yang bisa **bekerja offline** sederhana (data tetap ada meski tidak online)
- Menyimpan **token autentikasi** (dengan catatan keamanan tertentu, akan dibahas di materi 08)
- Membuat aplikasi kecil seperti **To-Do List** tanpa backend/database

## Karakteristik Penting `localStorage`

| Karakteristik | Penjelasan |
|---|---|
| Bertahan permanen | Data tetap ada meski browser/komputer di-restart, sampai dihapus manual |
| Per-origin (per domain) | Data hanya bisa diakses oleh halaman dengan **domain, protokol, dan port yang sama** |
| Hanya menyimpan **string** | Semua data disimpan sebagai teks (string), termasuk angka dan boolean |
| Synchronous (blocking) | Operasi baca/tulis terjadi **langsung**, tidak seperti Promise/async |
| Bisa diakses lewat DevTools | Bisa dilihat & diedit manual di tab "Application" pada DevTools browser |

## Objek Global `localStorage`

`localStorage` adalah sebuah **object global** yang otomatis tersedia di setiap halaman web (seperti `window` atau `document`), tanpa perlu import apapun.

```javascript
console.log(localStorage); // Storage {length: 0}
console.log(typeof localStorage); // "object"
```

Materi selanjutnya akan membahas method-method utama untuk **menyimpan**, **mengambil**, **menghapus**, dan **mengosongkan** data di `localStorage`.

Buka `contoh.html` untuk melihat objek `localStorage` langsung dari browser (buka juga DevTools → tab Application → Local Storage untuk melihat datanya secara visual).

➡️ Lanjut ke materi berikutnya: **02. localStorage Dasar**
