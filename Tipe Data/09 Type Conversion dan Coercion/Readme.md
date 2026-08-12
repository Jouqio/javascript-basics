# 09 - Type Conversion dan Coercion

## Dua Istilah yang Sering Tertukar

### Type Conversion (Konversi Eksplisit)
Mengubah tipe data **secara sengaja**, ditulis langsung oleh programmer.

```js
let angkaString = "123";
let angkaAsli = Number(angkaString); // sengaja diubah jadi Number
console.log(angkaAsli); // 123
```

### Type Coercion (Konversi Implisit/Otomatis)
JavaScript **secara otomatis** mengubah tipe data tanpa diminta, biasanya terjadi saat operasi antar tipe data yang berbeda.

```js
console.log("5" + 3); // "53" -> Number 3 otomatis diubah jadi String, lalu digabung
```

Type coercion inilah yang sering membingungkan dan menjadi sumber bug bagi pemula!

## Type Conversion (Cara Sengaja Mengubah Tipe Data)

### Mengubah ke Number
```js
Number("123");    // 123
Number("123abc"); // NaN (tidak bisa dikonversi, karena ada huruf)
Number("");       // 0
Number(true);      // 1
Number(false);     // 0
parseInt("123px");   // 123 (mengabaikan teks setelah angka)
parseFloat("3.14m"); // 3.14
```

### Mengubah ke String
```js
String(123);   // "123"
String(true);  // "true"
String(null);  // "null"
(123).toString(); // "123" (cara alternatif)
```

### Mengubah ke Boolean
```js
Boolean(1);  // true
Boolean(0);  // false
Boolean(""); // false
Boolean("halo"); // true
```

## Type Coercion (Konversi Otomatis) — Sumber Kebingungan Pemula

### Operator `+` dengan String
Kalau salah satu operand adalah string, `+` akan **menggabungkan (concatenate)**, bukan menjumlahkan:

```js
console.log("5" + 3);   // "53" (string)
console.log(5 + "3");   // "53" (string)
console.log("5" + "3"); // "53" (string)
```

### Operator `-`, `*`, `/` Selalu Memaksa Jadi Number
Berbeda dari `+`, operator lain **selalu** mencoba mengubah operand jadi Number:

```js
console.log("5" - 3);  // 2  (number, "5" diubah jadi 5)
console.log("5" * 2);  // 10 (number)
console.log("10" / 2); // 5  (number)
```

### `==` vs `===` — Kenapa Selalu Pakai `===`

`==` (loose equality) melakukan **type coercion sebelum membandingkan**, sehingga hasilnya sering tidak terduga:

```js
console.log(0 == "0");     // true  (mengejutkan!)
console.log(0 == "");      // true  (mengejutkan!)
console.log(0 == false);   // true  (mengejutkan!)
console.log("" == false);  // true  (mengejutkan!)

console.log(0 === "0");    // false (tipe data berbeda, TIDAK dikonversi)
```

**Aturan emas**: Selalu gunakan `===` dan `!==`, hindari `==` dan `!=`, supaya perbandingan lebih aman dan mudah diprediksi.

## Poin Penting

- Type Conversion = konversi **sengaja** dengan `Number()`, `String()`, `Boolean()`, dll
- Type Coercion = konversi **otomatis** oleh JavaScript, sering jadi sumber bug
- Operator `+` dengan string akan menggabungkan (concatenate); operator lain (`-`,`*`,`/`) memaksa jadi Number
- Selalu gunakan `===`/`!==`, hindari `==`/`!=`, agar terhindar dari perilaku coercion yang tidak terduga

Lanjut ke → [10 Operator typeof](../10%20Operator%20typeof/Readme.md)
