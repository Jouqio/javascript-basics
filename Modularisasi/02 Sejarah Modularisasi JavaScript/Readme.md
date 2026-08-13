# 02. Sejarah Modularisasi JavaScript

> Bagaimana developer menyelesaikan masalah modularisasi sebelum JavaScript punya sistem module resmi.

## Tujuan Pembelajaran

- Memahami masalah pada era 'banyak file, banyak tag <script>'
- Memahami pola IIFE (Immediately Invoked Function Expression) sebagai solusi awal
- Memahami Module Pattern sebagai penyempurnaan IIFE

## Era Awal: Banyak Tag <script>

Sebelum ada sistem module resmi, cara paling umum memecah kode JavaScript di browser adalah menaruh banyak file lewat banyak tag `<script>` di HTML.

```js
<!-- index.html -->
<script src="util.js"></script>
<script src="produk.js"></script>
<script src="app.js"></script>
```

> **Perhatian:** Masalahnya: semua file di atas berbagi **satu scope global yang sama**, persis seperti masalah di materi 01. Urutan tag `<script>` juga harus benar-benar tepat, karena `app.js` bisa saja butuh sesuatu dari `util.js` yang belum dimuat.

## Solusi Awal: IIFE (Immediately Invoked Function Expression)

Developer lalu memakai trik: membungkus kode dalam fungsi yang **langsung dipanggil saat itu juga**. Karena JavaScript function punya scope sendiri, variabel di dalamnya tidak akan bocor ke scope global.

```js
(function () {
  var pesanRahasia = "Ini tidak bisa diakses dari luar";

  function bantu() {
    return pesanRahasia;
  }

  console.log(bantu());
})();

// console.log(pesanRahasia); // Error! pesanRahasia tidak ada di scope global
```

> **Tips:** Nama IIFE berasal dari cara penulisannya: **I**mmediately **I**nvoked **F**unction **E**xpression — fungsi yang "segera dipanggil" begitu didefinisikan, ditandai tanda kurung `()` di akhir.

## Penyempurnaan: Module Pattern

IIFE murni hanya menyembunyikan variabel, tapi tidak bisa "mengekspor" apa pun keluar. **Module Pattern** menyempurnakannya: IIFE tetap dipakai untuk privasi, tapi mengembalikan (`return`) sebuah objek berisi apa saja yang ingin diekspos ke luar — sisanya tetap privat.

```js
var KalkulatorModule = (function () {
  // --- bagian privat, tidak bisa diakses dari luar ---
  let riwayat = [];

  function catatRiwayat(operasi) {
    riwayat.push(operasi);
  }

  // --- bagian publik, diekspos lewat return ---
  return {
    tambah: function (a, b) {
      const hasil = a + b;
      catatRiwayat(`${a} + ${b} = ${hasil}`);
      return hasil;
    },
    lihatRiwayat: function () {
      return riwayat;
    },
  };
})();

console.log(KalkulatorModule.tambah(2, 3)); // 5
console.log(KalkulatorModule.lihatRiwayat()); // ["2 + 3 = 5"]
// console.log(KalkulatorModule.riwayat); // undefined - tidak bisa diakses langsung!
```

> **Tips:** Pola ini adalah cikal bakal konsep **enkapsulasi module** (dibahas lebih dalam di materi 11) — memisahkan bagian "dalam" (privat) dari bagian "antarmuka publik" yang sengaja diekspos. Sistem module modern (CommonJS, ES Modules) pada dasarnya menyelesaikan masalah yang sama dengan cara yang jauh lebih rapi dan standar.

## Latihan

Kenapa IIFE murni (tanpa Module Pattern) dianggap kurang lengkap sebagai solusi modularisasi, meski berhasil menyembunyikan variabel dari scope global?

<details>
<summary>Lihat Jawaban</summary>

Karena IIFE murni hanya menyembunyikan (mengisolasi) variabel, tapi tidak menyediakan cara resmi untuk mengekspos sebagian fungsi/data ke luar agar bisa dipakai module lain. Module Pattern menyempurnakannya dengan mengembalikan (`return`) sebuah objek berisi apa saja yang sengaja ingin diekspos, sehingga ada pemisahan jelas antara bagian privat dan publik.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file [contoh.js](./contoh.js) pada folder ini.

[← Pengantar Modularisasi](../01 Pengantar Modularisasi/Readme.md) | [CommonJS — require() dan module.exports →](../03 CommonJS - require dan module.exports/Readme.md)
