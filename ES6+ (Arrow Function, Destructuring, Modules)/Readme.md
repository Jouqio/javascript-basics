# ES6+ — Materi Pembelajaran JavaScript (Arrow Function, Destructuring, Modules, dan Lainnya)

Kumpulan materi untuk mempelajari **fitur-fitur modern JavaScript sejak ES6 (ES2015)**, dari `let`/`const` sampai `module`, disusun dalam 13 topik berurutan ditambah satu tugas gabungan. Materi ditulis khusus untuk **pemula** — setiap konsep dijelaskan dari masalah yang diselesaikannya, bukan langsung syntax.

Setiap topik ada di folder tersendiri berisi:
- **`Readme.md`** — penjelasan konsep, tujuan pembelajaran, tips/peringatan, dan latihan (dengan jawaban yang bisa dibuka/tutup).
- **`contoh.js`** (atau `contoh.mjs` khusus untuk materi Modules) — semua contoh kode topik tersebut, siap dijalankan langsung lewat `node contoh.js`.

## Daftar Materi

| # | Folder | Fokus |
|---|--------|-------|
| 01 | [Pengantar ES6+](./01%20Pengantar%20ES6+/Readme.md) | Apa itu ECMAScript/ES6, kenapa penting |
| 02 | [let dan const](./02%20let%20dan%20const/Readme.md) | Block scope, menggantikan var |
| 03 | [Template Literals](./03%20Template%20Literals/Readme.md) | Interpolasi string, multi-baris |
| 04 | [Arrow Function](./04%20Arrow%20Function/Readme.md) | Syntax fungsi ringkas, lexical this |
| 05 | [Default Parameters](./05%20Default%20Parameters/Readme.md) | Nilai bawaan pada parameter fungsi |
| 06 | [Destructuring Array dan Object](./06%20Destructuring%20Array%20dan%20Object/Readme.md) | Membongkar array/objek ke variabel |
| 07 | [Spread dan Rest Operator](./07%20Spread%20dan%20Rest%20Operator/Readme.md) | Membentangkan dan mengumpulkan nilai |
| 08 | [Enhanced Object Literals](./08%20Enhanced%20Object%20Literals/Readme.md) | Property/method shorthand, computed property |
| 09 | [Classes di JavaScript](./09%20Classes%20di%20JavaScript/Readme.md) | constructor, extends, super, getter |
| 10 | [Modules (Import dan Export)](./10%20Modules%20%28Import%20dan%20Export%29/Readme.md) | Memecah kode ke banyak file |
| 11 | [Map dan Set](./11%20Map%20dan%20Set/Readme.md) | Struktur data kunci-nilai dan nilai unik |
| 12 | [Optional Chaining dan Nullish Coalescing](./12%20Optional%20Chaining%20dan%20Nullish%20Coalescing/Readme.md) | Akses properti aman, nilai fallback |
| 13 | [Kuis ES6+](./13%20Kuis%20ES6+/Readme.md) | 6 soal untuk menguji pemahaman |
| 14 | [Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md) | Proyek manajemen kontak yang menggabungkan semua materi |

## Cara Belajar

1. Ikuti urutan folder `01` → `14`, karena beberapa materi saling berkaitan (misalnya materi 07 Spread/Rest sering dipakai lagi di materi 11 dan 14).
2. Baca `Readme.md` di tiap folder untuk penjelasan konsepnya.
3. Buka terminal di folder yang sama, lalu jalankan contohnya:
   ```bash
   node contoh.js
   ```
   Khusus materi **10 Modules**, jalankan dengan:
   ```bash
   node contoh.mjs
   ```
4. Kerjakan bagian **Latihan** di akhir tiap `Readme.md` sebelum membuka jawabannya.
5. Setelah materi 13 (kuis), kerjakan **[14 Tugas Gabungan](./14%20Tugas%20Gabungan/Readme.md)** — proyek manajemen kontak sederhana yang memaksa kamu memakai spread/rest, destructuring, optional chaining, Map/Set, class, module, dan enhanced object literal dalam satu alur kode. Tugas ini disediakan sebagai starter (`tugas.mjs`) dengan TODO, tanpa kunci jawaban — dikerjakan mandiri.

## Prasyarat

Materi ini mengasumsikan pembaca sudah familiar dengan **dasar JavaScript** (versi lama/ES5): variabel dengan `var`, function biasa, array, objek, dan operator dasar. Tidak perlu pengalaman sebelumnya dengan fitur ES6+ apa pun — semua dijelaskan dari nol. Untuk menjalankan file `.js`/`.mjs`, dibutuhkan [Node.js](https://nodejs.org) terpasang di komputer (cek dengan `node --version`).

## Struktur Proyek

```
ES6+ (Arrow Function, Destructuring, Modules)/
├── 01 Pengantar ES6+/
│   ├── Readme.md
│   └── contoh.js
├── 02 let dan const/
│   ├── Readme.md
│   └── contoh.js
├── ...
├── 10 Modules (Import dan Export)/
│   ├── Readme.md
│   ├── contoh.mjs
│   ├── modul-matematika.mjs   <- named exports
│   └── konfigurasi.mjs        <- default export
├── ...
├── 13 Kuis ES6+/
│   ├── Readme.md
│   └── contoh.js
├── 14 Tugas Gabungan/
│   ├── Readme.md
│   ├── kontak-model.mjs       <- model class, jangan diubah
│   └── tugas.mjs              <- starter, TODO, tanpa solusi
└── Readme.md
```

## Catatan Teknis

- Seluruh contoh kode adalah **JavaScript murni (vanilla)**, tanpa dependensi eksternal — semua sudah diuji berjalan bersih lewat `node`.
- Materi 10 dan folder 14 memakai ekstensi **`.mjs`** karena memanfaatkan `import`/`export`, yang otomatis dikenali Node.js sebagai ES Module tanpa konfigurasi tambahan. File lain tetap `.js` biasa.
- File `14 Tugas Gabungan/tugas.mjs` sengaja dibiarkan berupa kerangka (TODO) — runner di bagian bawah tetap bisa dijalankan tanpa error meski fungsi belum diisi, sehingga kamu bisa mengisi satu per satu sambil melihat hasilnya berubah.
