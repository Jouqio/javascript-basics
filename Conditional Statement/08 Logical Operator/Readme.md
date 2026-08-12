# 08. Logical Operator

## Apa itu Logical Operator?

**Logical Operator** (Operator Logika) digunakan untuk **menggabungkan atau membalik** beberapa kondisi boolean menjadi satu hasil boolean. Ini sangat berguna ketika sebuah keputusan bergantung pada **lebih dari satu syarat**.

JavaScript memiliki 3 operator logika utama:

| Operator | Nama | Arti |
|----------|------|------|
| `&&` | AND | Bernilai `true` hanya jika **SEMUA** kondisi `true` |
| `\|\|` | OR | Bernilai `true` jika **SALAH SATU** kondisi `true` |
| `!` | NOT | Membalik nilai boolean (`true` jadi `false`, dan sebaliknya) |

## 1. Operator `&&` (AND)

Digunakan ketika **semua syarat harus terpenuhi**.

```js
let umur = 25;
let punyaKTP = true;

if (umur >= 17 && punyaKTP) {
  console.log("Boleh mencoblos");
} else {
  console.log("Tidak boleh mencoblos");
}
// Output: Boleh mencoblos
```

Tabel kebenaran `&&`:

| A | B | A && B |
|---|---|--------|
| true | true | **true** |
| true | false | false |
| false | true | false |
| false | false | false |

## 2. Operator `||` (OR)

Digunakan ketika **cukup salah satu syarat saja** yang terpenuhi.

```js
let hariLibur = false;
let tanggalMerah = true;

if (hariLibur || tanggalMerah) {
  console.log("Hari ini tidak masuk kerja");
} else {
  console.log("Hari ini tetap masuk kerja");
}
// Output: Hari ini tidak masuk kerja
```

Tabel kebenaran `||`:

| A | B | A \|\| B |
|---|---|--------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | **false** |

## 3. Operator `!` (NOT)

Digunakan untuk **membalik** nilai boolean.

```js
let sudahBayar = false;

if (!sudahBayar) {
  console.log("Silakan lakukan pembayaran terlebih dahulu");
}
// Output: Silakan lakukan pembayaran terlebih dahulu
```

`!sudahBayar` sama artinya dengan "jika **belum** bayar". `!false` menghasilkan `true`.

## Menggabungkan Beberapa Operator Logika

```js
let umur = 20;
let punyaTiket = true;
let dilarangMasuk = false;

if (umur >= 17 && punyaTiket && !dilarangMasuk) {
  console.log("Silakan masuk");
} else {
  console.log("Tidak diizinkan masuk");
}
// Output: Silakan masuk
```

## Mengganti Nested If dengan Logical Operator

Ingat contoh nested if di materi sebelumnya? Kita bisa menyederhanakannya:

```js
// Sebelumnya (nested if)
if (umur >= 17) {
  if (punyaKTP) {
    console.log("Boleh mencoblos");
  }
}

// Disederhanakan dengan &&
if (umur >= 17 && punyaKTP) {
  console.log("Boleh mencoblos");
}
```

Kedua kode di atas menghasilkan **perilaku yang sama**, tapi versi `&&` lebih ringkas dan mudah dibaca.

➡️ Lanjut ke materi berikutnya: **09 Comparison Operator**
