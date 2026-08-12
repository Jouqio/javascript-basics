# Belajar Asynchronous JavaScript untuk Pemula

Folder ini berisi materi pembelajaran dasar pemrograman **Asynchronous JavaScript**, disusun bertahap dari konsep paling dasar sampai simulasi proses asynchronous yang lebih nyata. Setiap folder berisi:

- `Readme.md` → penjelasan materi (teori + kenapa penting + contoh kasus)
- File `.mjs` → contoh kode yang bisa langsung dijalankan

## Cara Menjalankan Kode

Semua contoh memakai ekstensi `.mjs` (ES Module). Jalankan dengan Node.js:

```bash
node namafile.mjs
```

Pastikan Node.js sudah terinstall di komputer kamu. Cek dengan:

```bash
node -v
```

## Daftar Materi

| No | Folder | Topik |
|----|--------|-------|
| 01 | [Pengantar Asynchronous JavaScript](./01%20Pengantar%20Asynchronous%20JavaScript/Readme.md) | Apa itu synchronous vs asynchronous, kenapa JavaScript butuh asynchronous |
| 02 | [Callback](./02%20Callback/Readme.md) | Fungsi sebagai parameter, callback dasar, callback error-first |
| 03 | [Callback Hell](./03%20Callback%20Hell/Readme.md) | Masalah nested callback dan cara membacanya |
| 04 | [Promise](./04%20Promise/Readme.md) | Konsep Promise, state (pending/fulfilled/rejected), `.then()` `.catch()` |
| 05 | [Promise Chaining dan Error Handling](./05%20Promise%20Chaining%20dan%20Error%20Handling/Readme.md) | Merangkai promise, `Promise.all`, penanganan error |
| 06 | [Async dan Await](./06%20Async%20dan%20Await/Readme.md) | Sintaks modern untuk menulis kode asynchronous seperti synchronous |
| 07 | [Simulasi Asynchronous Proses](./07%20Simulasi%20Asynchronous%20Proses/Readme.md) | Simulasi proses nyata: loading data, antrian tugas, delay |
| 08 | [Event Loop](./08%20Event%20Loop/Readme.md) | Cara kerja di balik layar: Call Stack, Task Queue, Microtask Queue |
| 09 | [Tugas Latihan](./09%20Tugas%20Latihan/Readme.md) | Soal latihan untuk menguji pemahaman |

## Urutan Belajar yang Disarankan

```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09
```

Pelajari secara berurutan karena setiap materi dibangun dari materi sebelumnya. Selamat belajar! 
