# 08 - Event Loop

## Kenapa Perlu Belajar Event Loop?

Setelah memahami cara **memakai** callback, promise, dan async/await, materi ini menjelaskan **apa yang terjadi di balik layar** — bagaimana JavaScript yang single-threaded bisa menjalankan kode asynchronous. Memahami event loop akan membantu kamu paham **kenapa urutan output kadang tidak sesuai urutan kode ditulis**.

## Komponen Utama

### 1. Call Stack
Tempat JavaScript menjalankan kode secara synchronous, satu per satu, seperti tumpukan (stack). Fungsi yang dipanggil masuk ke stack, dan keluar (pop) setelah selesai dijalankan.

### 2. Web APIs / Node APIs
Ketika ada kode asynchronous seperti `setTimeout`, `fetch`, atau operasi file, JavaScript "menitipkan" pekerjaan itu ke browser (Web API) atau Node.js (Node API), lalu **call stack lanjut mengerjakan baris berikutnya** tanpa menunggu.

### 3. Callback Queue (Task Queue / Macrotask Queue)
Setelah pekerjaan yang dititipkan tadi selesai (misalnya waktu `setTimeout` habis), callback-nya **tidak langsung dijalankan**, tapi masuk ke antrian ini dulu.

### 4. Microtask Queue
Antrian khusus untuk Promise (`.then`, `.catch`, `.finally`) dan `async/await`. **Microtask queue punya prioritas lebih tinggi** dibanding callback queue biasa.

### 5. Event Loop
"Petugas" yang terus-menerus mengecek: *"Apakah call stack sudah kosong?"* Kalau kosong, event loop akan mengambil task dari **microtask queue dulu** (sampai habis), baru kemudian mengambil 1 task dari **callback queue (macrotask)**.

## Urutan Prioritas

```
1. Kode synchronous (call stack) — selalu jalan duluan, sampai stack kosong
2. Semua microtask (Promise, async/await) — dihabiskan semua dulu
3. Baru 1 macrotask (setTimeout, setInterval, dll) — lalu cek microtask lagi
```

## Contoh Kasus Membingungkan

```js
console.log("A");

setTimeout(() => console.log("B"), 0); // macrotask, meski delay 0ms!

Promise.resolve().then(() => console.log("C")); // microtask

console.log("D");
```

Urutan hasilnya: **A, D, C, B** — bukan A, B, C, D!

Kenapa?
1. `"A"` dan `"D"` adalah kode synchronous → langsung dijalankan lewat call stack
2. `Promise.resolve().then(...)` adalah microtask → dijalankan setelah call stack kosong, tapi **sebelum** macrotask
3. `setTimeout(..., 0)` adalah macrotask → walaupun delay-nya 0ms, tetap **antre paling belakang**, setelah semua microtask habis

## Poin Penting

- JavaScript = single-threaded, tapi bisa "asynchronous" berkat Web API/Node API + Event Loop
- Call Stack menjalankan kode synchronous
- Microtask (Promise/async-await) punya prioritas lebih tinggi dari Macrotask (setTimeout/setInterval)
- Event Loop selalu menghabiskan microtask queue dulu sebelum mengambil 1 macrotask
- Memahami ini membantu menjelaskan kenapa urutan `console.log` kadang "tidak sesuai" urutan penulisan kode

Lanjut ke → [09 Tugas Latihan](../09%20Tugas%20Latihan/Readme.md)
