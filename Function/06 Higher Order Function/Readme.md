# 06. Higher Order Function

## Apa itu Higher Order Function?

**Higher Order Function (HOF)** adalah function yang memenuhi **salah satu** (atau kedua) syarat berikut:

1. **Menerima function lain sebagai parameter/argument**, atau
2. **Mengembalikan function lain sebagai hasilnya (return)**

Ini bisa terjadi karena di JavaScript, **function adalah "first-class citizen"** — artinya function bisa diperlakukan sama seperti nilai lain (angka, string, object): disimpan ke variabel, dikirim sebagai argument, atau dikembalikan dari function lain.

## Contoh 1: Function yang Menerima Function Lain (Callback)

```javascript
function prosesData(data, callback) {
  console.log("Memproses data...");
  return callback(data);
}

function gandakan(n) {
  return n * 2;
}

console.log(prosesData(5, gandakan)); // 10
```

Di sini, `prosesData` adalah **Higher Order Function** karena menerima `gandakan` (sebuah function) sebagai argument.

## Contoh 2: Function yang Mengembalikan Function Lain

```javascript
function buatPengali(pengali) {
  return function (angka) {
    return angka * pengali;
  };
}

const kali2 = buatPengali(2);
const kali5 = buatPengali(5);

console.log(kali2(10)); // 20
console.log(kali5(10)); // 50
```

`buatPengali` adalah Higher Order Function karena **mengembalikan function baru**. Konsep ini juga berkaitan dengan **closure** (function "mengingat" nilai `pengali` walau sudah selesai dijalankan).

## Higher Order Function Bawaan JavaScript (Array Methods)

JavaScript sudah menyediakan banyak Higher Order Function bawaan untuk array, yang sangat sering dipakai dalam pemrograman sehari-hari:

### `.map()` — Mengubah Setiap Elemen

```javascript
const angka = [1, 2, 3, 4];
const kuadrat = angka.map((n) => n * n);
console.log(kuadrat); // [1, 4, 9, 16]
```

### `.filter()` — Menyaring Elemen

```javascript
const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter((n) => n % 2 === 0);
console.log(genap); // [2, 4, 6]
```

### `.reduce()` — Mengubah Array Menjadi Satu Nilai

```javascript
const angka = [1, 2, 3, 4];
const total = angka.reduce((akumulator, n) => akumulator + n, 0);
console.log(total); // 10
```

### `.forEach()` — Menjalankan Function untuk Setiap Elemen

```javascript
const buah = ["apel", "jeruk", "mangga"];
buah.forEach((item) => console.log("Buah:", item));
```

## Kenapa Higher Order Function Penting?

- Membuat kode lebih **deklaratif** (fokus pada "apa" yang ingin dilakukan, bukan "bagaimana" caranya secara manual)
- Mengurangi kode berulang (misalnya, tidak perlu menulis `for` loop manual untuk setiap kebutuhan)
- Dasar dari **functional programming** — gaya pemrograman yang semakin populer di JavaScript modern
- Membuat function lebih **fleksibel** dan **reusable** (bisa dipakai ulang dengan logika berbeda-beda lewat callback)

## Perbandingan: `for` Loop Manual vs Higher Order Function

```javascript
// Cara manual dengan for loop
const angka = [1, 2, 3, 4];
const kuadratManual = [];
for (let i = 0; i < angka.length; i++) {
  kuadratManual.push(angka[i] * angka[i]);
}

// Cara dengan Higher Order Function - lebih ringkas & deklaratif
const kuadratHOF = angka.map((n) => n * n);
```

Buka `contoh.html` untuk mencoba `.map()`, `.filter()`, `.reduce()`, dan function generator (`buatPengali`) secara langsung.

➡️ Lanjut ke materi berikutnya: **07. IIFE (Immediately Invoked Function Expression)**
