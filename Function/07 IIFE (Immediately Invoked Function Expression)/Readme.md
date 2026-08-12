# 07. IIFE (Immediately Invoked Function Expression)

## Apa itu IIFE?

**IIFE** (dibaca "iffy") adalah singkatan dari **Immediately Invoked Function Expression** — yaitu function yang **langsung dijalankan (dieksekusi)** tepat setelah ia didefinisikan, tanpa perlu dipanggil terpisah.

```javascript
(function () {
  console.log("Saya langsung dijalankan!");
})();
```

Perhatikan strukturnya:
1. `(function () { ... })` → function dibungkus tanda kurung, membuatnya menjadi **Function Expression**
2. `()` di akhir → tanda kurung tambahan yang **langsung memanggil (invoke)** function tersebut

## Kenapa Harus Dibungkus Tanda Kurung?

Jika kita tulis `function () {...}()` tanpa kurung pembungkus, JavaScript akan bingung dan menganggapnya sebagai **Function Declaration** (yang wajib punya nama) — sehingga akan error.

```javascript
// ❌ SALAH - Syntax Error
function () {
  console.log("Error!");
}();

// ✅ BENAR - dibungkus kurung agar dianggap Function Expression
(function () {
  console.log("Berhasil!");
})();
```

## Variasi Penulisan IIFE

```javascript
// Gaya 1 - kurung penutup di luar
(function () {
  console.log("Gaya 1");
})();

// Gaya 2 - kurung invoke di dalam
(function () {
  console.log("Gaya 2");
}());

// Dengan Arrow Function
(() => {
  console.log("Gaya 3 - Arrow IIFE");
})();

// Dengan parameter
(function (nama) {
  console.log("Halo, " + nama);
})("Budi");
```

## Kenapa IIFE Berguna?

### 1. Membuat Scope Privat (Menghindari Polusi Variabel Global)

Variabel yang dideklarasikan **di dalam** IIFE **tidak bisa diakses dari luar**, sehingga tidak akan bentrok dengan variabel lain di scope global.

```javascript
(function () {
  const rahasia = "Data privat";
  console.log(rahasia);
})();

console.log(typeof rahasia); // "undefined" - tidak bisa diakses dari luar!
```

### 2. Menjalankan Kode Setup/Inisialisasi Sekali Saja

Cocok untuk kode yang **hanya perlu dijalankan sekali** saat program dimulai, seperti setup konfigurasi.

```javascript
const aplikasi = (function () {
  console.log("Inisialisasi aplikasi...");
  const versi = "1.0.0";
  return { versi: versi }; // hanya bagian ini yang "diekspos" ke luar
})();

console.log(aplikasi.versi); // "1.0.0"
```

### 3. Module Pattern (Konsep Dasar Sebelum ES6 Modules)

Sebelum JavaScript punya sistem module bawaan (`import`/`export`), IIFE sering dipakai untuk membuat **module pattern** — menyembunyikan detail implementasi dan hanya mengekspos apa yang perlu diakses dari luar.

```javascript
const kalkulator = (function () {
  let hasil = 0; // variabel privat, tidak bisa diakses langsung dari luar

  return {
    tambah: function (n) { hasil += n; return hasil; },
    kurang: function (n) { hasil -= n; return hasil; },
    getHasil: function () { return hasil; }
  };
})();

console.log(kalkulator.tambah(5));  // 5
console.log(kalkulator.tambah(3));  // 8
console.log(kalkulator.hasil);      // undefined (variabel privat, tidak terekspos)
```

## Apakah IIFE Masih Relevan di JavaScript Modern?

Dengan hadirnya `let`/`const` (yang punya **block scope**) dan **ES6 Modules** (`import`/`export`), kebutuhan IIFE untuk membuat scope privat sudah **berkurang**. Namun, IIFE tetap berguna untuk:

- Menjalankan kode inisialisasi sekali saja
- Kode yang berjalan di lingkungan tanpa module system (misalnya script langsung di HTML)
- Memahami konsep dasar **closure** dan **scope** di JavaScript

Buka `contoh.html` untuk melihat IIFE dalam aksi, termasuk module pattern sederhana.

➡️ Lanjut ke materi berikutnya: **08. Recursive Function**
