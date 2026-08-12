# 01. Pengantar Function

## Apa itu Function?

**Function (fungsi)** adalah blok kode yang dibuat untuk melakukan **tugas tertentu**, dan bisa **dipanggil (dijalankan) berkali-kali** kapanpun kita butuhkan, tanpa harus menulis ulang kodenya.

Analogi sederhana: bayangkan function seperti **mesin pembuat kopi**. Kamu masukkan bahan (biji kopi, air), tekan tombol (panggil function), lalu keluar hasilnya (secangkir kopi). Mesin yang sama bisa dipakai berkali-kali untuk membuat kopi lagi tanpa perlu membuat mesin baru.

## Kenapa Function Penting?

Tanpa function, kita harus menulis kode yang sama berulang-ulang setiap kali butuh melakukan hal yang sama. Function membuat kode:

- **DRY (Don't Repeat Yourself)** — tidak perlu menulis kode yang sama berulang kali
- **Terorganisir** — setiap function punya tugas yang jelas dan spesifik
- **Mudah di-maintain** — jika ada bug, cukup perbaiki di satu tempat (di dalam function)
- **Mudah dibaca** — nama function bisa menjelaskan apa yang dilakukannya

## Anatomi Sebuah Function

```javascript
function namaFunction(parameter1, parameter2) {
  // isi/body function
  return hasil;
}
```

| Bagian | Penjelasan |
|---|---|
| `function` | Kata kunci untuk mendeklarasikan function |
| `namaFunction` | Nama function (sebaiknya deskriptif, contoh: `hitungLuas`) |
| `(parameter1, parameter2)` | **Parameter** — variabel input yang diterima function |
| `{ ... }` | **Body** — kumpulan kode yang dijalankan saat function dipanggil |
| `return` | Mengembalikan **nilai hasil** dari function (opsional) |

## Membuat & Memanggil Function

```javascript
// 1. Mendefinisikan (membuat) function
function sapa(nama) {
  return "Halo, " + nama + "!";
}

// 2. Memanggil (menjalankan) function
console.log(sapa("Budi")); // Halo, Budi!
console.log(sapa("Ani"));  // Halo, Ani!
```

Perhatikan: kita bisa memanggil `sapa()` **berkali-kali** dengan input (parameter) yang berbeda-beda, tanpa perlu menulis ulang kodenya.

## Parameter vs Argument — Sering Tertukar!

Ini penting dipahami sejak awal:

- **Parameter** → nama variabel yang tertulis **saat mendefinisikan** function
- **Argument** → nilai **sebenarnya** yang dikirim **saat memanggil** function

```javascript
function tambah(a, b) {   // "a" dan "b" adalah PARAMETER
  return a + b;
}

tambah(5, 3);              // 5 dan 3 adalah ARGUMENT
```

## Function Tanpa `return`

Jika function tidak memiliki `return`, function akan otomatis mengembalikan `undefined`.

```javascript
function tampilkanPesan() {
  console.log("Ini pesan, tidak ada return");
}

const hasil = tampilkanPesan(); // Ini pesan, tidak ada return
console.log(hasil); // undefined
```

## Default Parameter

Kita bisa memberi **nilai default** pada parameter, yang akan dipakai jika argument tidak diberikan:

```javascript
function sapa(nama = "Tamu") {
  return "Halo, " + nama + "!";
}

console.log(sapa());        // Halo, Tamu!  (nama tidak diberikan)
console.log(sapa("Rina"));  // Halo, Rina!
```

## Jenis-Jenis Function yang Akan Kita Pelajari

Modul ini akan membahas berbagai **cara membuat function** di JavaScript, masing-masing punya karakteristik dan kegunaan berbeda:

| Jenis | Contoh Singkat |
|---|---|
| Function Declaration | `function namaFn() {}` |
| Function Expression | `const fn = function() {}` |
| Anonymous Function | Function tanpa nama |
| Arrow Function | `const fn = () => {}` |
| Higher Order Function | Function yang menerima/mengembalikan function lain |
| IIFE | Function yang langsung dijalankan setelah dibuat |
| Recursive Function | Function yang memanggil dirinya sendiri |
| Generator Function | Function yang bisa "dijeda" dan dilanjutkan (`function*`) |

Buka `contoh.html` untuk melihat contoh dasar function yang bisa langsung dicoba di browser.

➡️ Lanjut ke materi berikutnya: **02. Function Declaration**
