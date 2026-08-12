# 14. Tugas Gabungan — Simulasi Pemesanan Online

> Satu proyek kecil yang memaksa kamu memakai **semua konsep dari materi 01–12** dalam satu alur nyata: callback, `setTimeout`/`clearTimeout`, `Promise`, `async/await`, `try/catch`, dan `Promise.all`.

Ini bukan materi baca-baca — kerjakan langsung di `tugas.js`. Tidak ada kunci jawaban di file ini karena tugas ini dirancang untuk dikerjakan sendiri; kalau ingin melihat pola serupa (tapi bukan solusi identik), lihat kembali **[12 Studi Kasus Async Await](../12%20Studi%20Kasus%20Async%20Await/Readme.md)**.

## Skenario

Kamu membangun simulasi backend sederhana untuk proses **pemesanan online**, dari pengguna menambahkan barang ke keranjang sampai pesanan terkirim. Semua "permintaan ke server" disimulasikan dengan `setTimeout`, bukan request jaringan sungguhan — jadi tugas ini tetap bisa dikerjakan dan diuji sepenuhnya lewat `node tugas.js`.

## Requirement

Kerjakan berurutan. Tiap langkah memakai konsep dari materi tertentu — dicantumkan di dalam kurung.

1. **`validasiKeranjang(itemArray)`** *(materi 02 – Callback)*
   Fungsi yang menerima array item dan sebuah callback. Callback dipanggil dengan `true` jika array tidak kosong, `false` jika kosong. Gunakan `setTimeout` 300ms untuk mensimulasikan validasi.

2. **`hitungTotal(itemArray)`** *(materi 07 – Promise)*
   Kembalikan `Promise` yang resolve dengan total harga semua item setelah 500ms. Setiap item punya bentuk `{ nama, harga, qty }`.

3. **`cekStok(namaBarang)`** *(materi 07/09 – Promise & Promise.all)*
   Kembalikan `Promise` yang resolve `true`/`false` (tersedia atau tidak) setelah delay acak 200–600ms. Panggil fungsi ini untuk **semua barang di keranjang secara paralel** menggunakan `Promise.all()` — jangan berurutan.

4. **`prosesPembayaran(total)`** *(materi 10/11 – async/await & error handling)*
   Fungsi `async` yang mensimulasikan pembayaran. Jika `total` lebih dari `1000000`, `reject` dengan pesan `"Limit pembayaran terlampaui"`. Jika tidak, `resolve` dengan `{ status: "sukses", kodeTransaksi: ... }` setelah 700ms.

5. **`batalkanJikaTimeout(promise, detikTimeout)`** *(materi 04/05 – setTimeout & clearTimeout)*
   Fungsi pembantu yang membatalkan proses jika `promise` tidak selesai dalam `detikTimeout` detik. Gunakan `setTimeout` untuk membuat "Promise timeout", lalu gabungkan dengan `Promise.race()` (fitur baru — cari tahu sendiri caranya, mirip `Promise.all` tapi mengambil hasil **tercepat**). Pastikan timer dibatalkan dengan `clearTimeout` begitu `promise` asli selesai duluan, supaya tidak ada timer menggantung.

6. **`prosesPesanan(itemArray)`** *(materi 12 – menggabungkan semua)*
   Fungsi `async` utama yang menjalankan seluruh alur secara berurutan sesuai kebutuhan (mana yang harus berurutan, mana yang boleh paralel — putuskan sendiri berdasarkan ketergantungan datanya):
   - Validasi keranjang tidak kosong (langkah 1). Jika kosong, lempar error `"Keranjang kosong"`.
   - Hitung total harga (langkah 2).
   - Cek stok semua barang secara paralel (langkah 3). Jika ada satu saja yang `false`, lempar error `"Stok tidak mencukupi"`.
   - Proses pembayaran (langkah 4), dibungkus `batalkanJikaTimeout` dengan batas 3 detik (langkah 5).
   - Bungkus seluruh proses dengan `try/catch/finally` — `finally` mencetak `"Proses pemesanan selesai"` apa pun hasilnya.
   - Jika semua berhasil, cetak ringkasan pesanan (nama barang, total harga, kode transaksi).

## Kriteria Penilaian (self-check)

- [ ] Tidak ada nested callback lebih dari 2 level (hindari callback hell — pakai Promise/async-await).
- [ ] Semua operasi independen (seperti cek stok tiap barang) dijalankan paralel, bukan berurutan.
- [ ] Setiap `await` berada dalam jangkauan `try/catch`.
- [ ] Tidak ada *unhandled promise rejection* saat `node tugas.js` dijalankan (baik skenario sukses maupun gagal).
- [ ] Timer yang dibuat untuk keperluan timeout selalu dibersihkan dengan `clearTimeout`.
- [ ] Kode mengikuti clean code: nama fungsi/variabel jelas, tidak ada duplikasi logic yang bisa digabung jadi satu fungsi.

## Cara Menguji

Jalankan dua skenario di `tugas.js`:

```bash
node tugas.js
```

1. **Skenario sukses** — keranjang berisi barang dengan stok tersedia dan total di bawah 1.000.000.
2. **Skenario gagal** — coba minimal dua jenis kegagalan berbeda (mis. keranjang kosong, stok habis, atau total melebihi limit) dan pastikan pesan error yang tepat muncul, serta `"Proses pemesanan selesai"` tetap tercetak di `finally`.

## Bantuan

Kalau mentok, baca ulang secara berurutan:
`07 Pengenalan Promise` → `09 Promise.all dan Promise.allSettled` → `10 Async Await Dasar` → `11 Error Handling dengan Try Catch` → `12 Studi Kasus Async Await`. Semua pola yang dibutuhkan di tugas ini sudah pernah dicontohkan di materi-materi tersebut — tugas ini hanya menggabungkannya dalam satu alur.

---

[← Kuis Async Await](../13%20Kuis%20Async%20Await/Readme.md)
