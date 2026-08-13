# 11. Type Conversion dan Coercion

## Apa Bedanya Type Conversion dan Type Coercion?

Keduanya berhubungan dengan **mengubah tipe data**, tapi bedanya:

- **Type Conversion (Explicit)**: kamu **secara sengaja** mengonversi tipe data menggunakan fungsi seperti `Number()`, `String()`, `Boolean()`.
- **Type Coercion (Implicit)**: JavaScript **secara otomatis** mengonversi tipe data di belakang layar, tanpa kamu minta.

## 1. Type Conversion (Eksplisit — Kamu yang Melakukannya)

### Konversi ke Number

```js
let teksAngka = "25";

console.log(Number(teksAngka));   // 25 (tipe number)
console.log(parseInt("25px"));    // 25 (mengambil angka di awal, mengabaikan sisanya)
console.log(parseFloat("3.14")); // 3.14
console.log(+teksAngka);          // 25 (cara singkat, pakai tanda + di depan)

console.log(Number("abc"));       // NaN (Not a Number, karena tidak bisa dikonversi)
```

### Konversi ke String

```js
let angka = 100;

console.log(String(angka));    // "100"
console.log(angka.toString()); // "100"
console.log(angka + "");       // "100" (cara singkat, gabung dengan string kosong)
```

### Konversi ke Boolean

```js
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("teks"));   // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
```

> Lihat kembali materi **Truthy dan Falsy** di modul Conditional Statement untuk daftar lengkap nilai yang dikonversi menjadi `false`.

## 2. Type Coercion (Implisit — Otomatis oleh JavaScript)

JavaScript sering melakukan konversi tipe data **secara otomatis** saat operator digunakan pada tipe data yang berbeda:

```js
console.log("5" + 3);    // "53" (number dikonversi jadi string, lalu digabung)
console.log("5" - 3);    // 2   (string dikonversi jadi number, karena "-" tidak berlaku untuk teks)
console.log("5" * "2");  // 10  (keduanya dikonversi jadi number)
console.log(5 + true);   // 6   (true dikonversi jadi 1)
console.log(5 + false);  // 5   (false dikonversi jadi 0)
console.log("5" == 5);   // true (coercion terjadi karena pakai ==, bukan ===)
```

### Operator `+` Adalah yang Paling Membingungkan

```js
console.log(1 + 2);       // 3   (number + number = penjumlahan)
console.log("1" + 2);     // "12" (string + number = digabung sebagai string)
console.log(1 + "2");     // "12" (number + string = digabung sebagai string)
console.log(1 + 2 + "3"); // "33" (1+2 dihitung dulu jadi 3, baru digabung dengan "3")
console.log("1" + 2 + 3); // "123" (dari kiri ke kanan: "1"+2="12", lalu "12"+3="123")
```

**Aturan penting:** jika salah satu operand dari `+` adalah **string**, hasilnya akan **digabung sebagai string** (bukan dijumlahkan).

## Kenapa Type Coercion Berbahaya?

Type coercion bisa menghasilkan **bug yang sulit dilacak**, terutama saat data berasal dari **input user** atau **API** yang tipenya tidak pasti:

```js
let hargaBarang = "15000"; // dari input form, selalu string
let jumlahBeli = 3;

console.log(hargaBarang * jumlahBeli); // 45000 (OK, karena "*" memaksa konversi ke number)
console.log(hargaBarang + jumlahBeli); // "150003" (SALAH! seharusnya 45003, tapi malah digabung)
```

## 💡 Best Practice: Selalu Konversi Tipe Data Secara Eksplisit

Untuk menghindari bug akibat coercion yang tidak disengaja, **selalu konversi tipe data secara manual** sebelum melakukan operasi, terutama saat berurusan dengan data dari luar (form, API):

```js
let hargaInput = "15000"; // dari form

// Kurang aman: mengandalkan coercion otomatis
let totalTidakAman = hargaInput + 1000; // hasilnya salah jika ada operator "+"

// Lebih aman: konversi eksplisit dulu
let hargaAngka = Number(hargaInput);
let totalAman = hargaAngka + 1000; // hasilnya benar
console.log(totalAman); // 16000
```

## Ringkasan

| Konsep | Siapa yang melakukan | Contoh |
|--------|------------------------|--------|
| Type Conversion | Programmer (sengaja) | `Number("5")`, `String(5)` |
| Type Coercion | JavaScript (otomatis) | `"5" + 3` menjadi `"53"` |

➡️ Lanjut ke materi berikutnya: **12 Best Practices Variable**
