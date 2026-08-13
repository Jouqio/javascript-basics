# 07. Scope Variable

## Apa itu Scope?

**Scope** adalah **jangkauan/wilayah** di mana sebuah variabel bisa **diakses** dalam kode. Variabel yang dideklarasikan di satu scope **tidak selalu** bisa diakses dari scope lain.

## 1. Global Scope

Variabel yang dideklarasikan **di luar** semua fungsi/blok memiliki **global scope** — bisa diakses dari **mana saja** dalam file tersebut.

```js
let namaGlobal = "Saya global"; // global scope

function tampilkan() {
  console.log(namaGlobal); // bisa diakses dari dalam fungsi
}

tampilkan(); // Saya global
console.log(namaGlobal); // Saya global, bisa diakses dari luar juga
```

## 2. Function Scope

Variabel yang dideklarasikan **di dalam fungsi** hanya bisa diakses **di dalam fungsi tersebut**.

```js
function contoh() {
  let namaLokal = "Saya lokal"; // function scope
  console.log(namaLokal); // bisa diakses di dalam fungsi
}

contoh(); // Saya lokal
console.log(namaLokal); // ERROR! namaLokal tidak terdefinisi di luar fungsi
```

## 3. Block Scope (`let` dan `const`)

Variabel yang dideklarasikan dengan `let`/`const` di dalam **blok** (`{ }` — seperti di dalam `if`, `for`, `while`) hanya bisa diakses **di dalam blok tersebut**.

```js
if (true) {
  let pesan = "Halo dari dalam blok if";
  console.log(pesan); // bisa diakses
}

console.log(pesan); // ERROR! pesan tidak terdefinisi di luar blok if
```

## Perbandingan `var` vs `let`/`const` dalam Hal Scope

`var` **tidak menghormati** block scope — ia hanya mengenal function scope, sehingga bisa "bocor" keluar dari blok `if`/`for`:

```js
if (true) {
  var pakaiVar = "saya var";
  let pakaiLet = "saya let";
}

console.log(pakaiVar); // "saya var" -> BISA diakses (bocor keluar blok!)
console.log(pakaiLet); // ERROR! -> TIDAK BISA diakses (block scope bekerja dengan benar)
```

Inilah salah satu alasan utama kenapa `let`/`const` lebih disarankan dibanding `var` — perilakunya lebih **konsisten dan bisa diprediksi**.

## Nested Scope (Scope Bersarang)

Scope bisa bersarang, dan scope yang lebih dalam **bisa mengakses** variabel dari scope di luarnya (tapi tidak sebaliknya):

```js
let luar = "Saya di luar";

function fungsiLuar() {
  let tengah = "Saya di tengah";

  function fungsiDalam() {
    let dalam = "Saya di dalam";

    console.log(luar);  // bisa akses (scope luar)
    console.log(tengah); // bisa akses (scope tengah)
    console.log(dalam);  // bisa akses (scope sendiri)
  }

  fungsiDalam();
  console.log(dalam); // ERROR! dalam tidak terdefinisi di sini
}

fungsiLuar();
```

## Variable Shadowing

Jika variabel dengan **nama yang sama** dideklarasikan di scope yang lebih dalam, ia akan **"menutupi" (shadow)** variabel dengan nama sama di scope luar, **hanya di dalam scope tersebut**:

```js
let warna = "merah";

function tampilkanWarna() {
  let warna = "biru"; // shadowing: menutupi "warna" di scope luar, HANYA di dalam fungsi ini
  console.log(warna); // biru
}

tampilkanWarna();
console.log(warna); // merah, variabel di luar TIDAK berubah
```

## Kenapa Scope Penting?

1. **Mencegah konflik nama variabel** antar bagian kode yang berbeda
2. **Enkapsulasi** — data yang bersifat "internal" pada sebuah fungsi tidak bisa diakses/diubah sembarangan dari luar
3. Membantu **mengelola memori** — variabel di dalam function scope akan dibersihkan setelah fungsi selesai dijalankan

➡️ Lanjut ke materi berikutnya: **08 Hoisting**
