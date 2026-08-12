# 14. Tugas Gabungan — Sistem Manajemen Kontak Sederhana

> Satu proyek kecil yang memaksa kamu memakai **semua fitur ES6+ dari materi 01–12** dalam satu alur nyata: `let`/`const`, template literal, arrow function, default parameter, destructuring, spread/rest, enhanced object literal, class, module, Map/Set, dan optional chaining/nullish coalescing.

Ini bukan materi baca-baca — kerjakan langsung di `tugas.mjs`. Tidak ada kunci jawaban di file ini karena tugas ini dirancang untuk dikerjakan sendiri.

## Skenario

Kamu membangun modul backend sederhana untuk **manajemen kontak** — menyimpan, mencari, mengelompokkan, dan menampilkan daftar kontak. Model dasarnya (`class Kontak`) sudah disediakan di `kontak-model.mjs` — **jangan diubah**, cukup di-*import* di `tugas.mjs`.

Karena tugas ini memakai `import`/`export`, jalankan selalu dengan ekstensi `.mjs`:

```bash
node tugas.mjs
```

## Requirement

Kerjakan berurutan. Tiap fungsi memakai konsep dari materi tertentu — dicantumkan di dalam kurung.

1. **`tambahKontak(daftarKontak, kontak)`** *(materi 07 – Spread Operator)*
   Kembalikan **array baru** hasil menambahkan `kontak` ke `daftarKontak`, **tanpa mengubah array aslinya** (immutability). Gunakan spread operator, bukan `.push()`.

2. **`cariKontak(daftarKontak, kataKunci)`** *(materi 06/12 – Destructuring & Optional Chaining)*
   Cari dan kembalikan kontak pertama yang `nama`-nya mengandung `kataKunci` (case-insensitive, gunakan `.toLowerCase()` dan `.includes()`). Gunakan **optional chaining** saat mengakses `nama` agar tidak error jika ada elemen `null`/`undefined` di dalam array. Jika tidak ketemu, kembalikan `undefined`.

3. **`hapusDuplikatTelepon(daftarKontak)`** *(materi 11 – Set)*
   Kembalikan array kontak baru tanpa duplikat berdasarkan nomor `telepon` (kontak pertama dengan nomor tersebut yang dipertahankan). Gunakan `Set` untuk melacak nomor telepon yang sudah pernah dilihat.

4. **`formatKontak(kontak, format = "lengkap")`** *(materi 03/04/05 – Template Literal, Arrow Function, Default Parameter)*
   Arrow function dengan **default parameter** `format = "lengkap"`. Jika `format === "singkat"`, kembalikan hanya `nama` dan `telepon` (template literal: `"Nama - Telepon"`). Jika `"lengkap"` (default), kembalikan hasil dari `kontak.info()` (lihat `kontak-model.mjs`).

5. **`kelompokkanPerHurufAwal(daftarKontak)`** *(materi 11 – Map)*
   Kembalikan sebuah `Map` di mana kuncinya adalah **huruf pertama nama** (kapital) dan nilainya adalah **array kontak** yang namanya diawali huruf tersebut. Contoh: kunci `"A"` berisi semua kontak yang namanya diawali "A".

6. **`ringkasanKontak(daftarKontak)`** *(materi 08 – Enhanced Object Literals)*
   Kembalikan sebuah objek ringkasan memakai **property shorthand** dan **method shorthand**, berbentuk:
   ```js
   {
     total,              // jumlah kontak (property shorthand dari variabel total)
     tanpaEmail,         // jumlah kontak yang email-nya masih "-"
     tampilkanSemua() {  // method shorthand, return array hasil formatKontak("singkat") untuk semua kontak
       // ...
     }
   }
   ```

## Kriteria Penilaian (self-check)

- [ ] Tidak ada satu pun array/objek asli yang termutasi (diubah langsung) — semua fungsi mengembalikan salinan baru bila perlu.
- [ ] Minimal dipakai satu kali: `Map`, `Set`, spread operator, rest/destructuring, optional chaining, dan nullish coalescing.
- [ ] Semua fungsi memakai arrow function atau method shorthand, bukan `function` biasa (kecuali di dalam `kontak-model.mjs` yang memang sudah class).
- [ ] Kode berjalan tanpa error saat `node tugas.mjs` dijalankan.
- [ ] Tidak ada nama variabel yang ambigu (`data`, `temp`, `x`) — semua deskriptif dalam Bahasa Indonesia atau Inggris yang konsisten.

## Cara Menguji

Jalankan:

```bash
node tugas.mjs
```

Runner di bagian bawah `tugas.mjs` sudah menyiapkan beberapa data kontak contoh (termasuk yang duplikat nomornya) dan memanggil semua fungsi di atas satu per satu. Pastikan setiap output masuk akal — misalnya `hapusDuplikatTelepon` benar-benar mengurangi jumlah kontak jika ada nomor yang sama.

## Bantuan

Kalau mentok, baca ulang materi terkait:
`03 Template Literals` → `06 Destructuring` → `07 Spread dan Rest` → `08 Enhanced Object Literals` → `10 Modules` → `11 Map dan Set` → `12 Optional Chaining dan Nullish Coalescing`. Semua pola yang dibutuhkan di tugas ini sudah pernah dicontohkan di materi-materi tersebut — tugas ini hanya menggabungkannya dalam satu alur.

---

[← Kuis ES6+](../13%20Kuis%20ES6+/Readme.md)
