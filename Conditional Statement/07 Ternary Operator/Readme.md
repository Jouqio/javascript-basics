# 07. Ternary Operator

## Apa itu Ternary Operator?

**Ternary Operator** (disebut juga *conditional operator*) adalah cara **singkat** untuk menulis `if...else` sederhana dalam **satu baris**. Disebut "ternary" karena punya **3 bagian**: kondisi, nilai jika benar, dan nilai jika salah.

## Syntax

```js
kondisi ? nilaiJikaTrue : nilaiJikaFalse;
```

## Perbandingan dengan If Else

```js
// Menggunakan if...else
let umur = 20;
let status;

if (umur >= 18) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}

console.log(status); // Dewasa
```

```js
// Menggunakan ternary operator (lebih singkat)
let umur = 20;
let status = umur >= 18 ? "Dewasa" : "Anak-anak";

console.log(status); // Dewasa
```

Kedua kode di atas menghasilkan output yang **sama persis**, tapi ternary operator jauh lebih ringkas.

## Contoh Lain

```js
let nilai = 75;
let hasil = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log(hasil); // Lulus
```

```js
let angka = 7;
console.log(angka % 2 === 0 ? "Genap" : "Ganjil"); // Ganjil
```

Ternary operator juga sering dipakai langsung di dalam `console.log()` atau ditempelkan ke dalam string, karena ia adalah sebuah **ekspresi** yang menghasilkan nilai.

## Ternary Bertingkat (Nested Ternary) — Gunakan dengan Hati-hati

```js
let nilai = 75;
let grade = nilai >= 90 ? "A" 
          : nilai >= 80 ? "B" 
          : nilai >= 70 ? "C" 
          : "D";

console.log(grade); // C
```

Ternary bertingkat **bisa** digunakan, tapi jika terlalu banyak, kode menjadi **sulit dibaca**. Untuk kasus dengan banyak kemungkinan, lebih baik gunakan `if...else if` atau `switch` (lihat materi **Best Practices**).

## Kapan Menggunakan Ternary Operator?

✅ **Cocok digunakan** ketika:
- Kondisinya sederhana (hanya 2 kemungkinan)
- Hasilnya langsung dipakai untuk mengisi sebuah variabel
- Kamu ingin kode lebih ringkas dan mudah dibaca dalam satu baris

❌ **Sebaiknya hindari** ketika:
- Kondisi/logikanya kompleks
- Kamu butuh menjalankan **banyak baris kode**, bukan hanya menghasilkan satu nilai
- Ternary dibuat bertingkat sampai lebih dari 2 level (sulit dibaca)

```js
// KURANG BAIK: ternary dipaksa untuk banyak aksi (bisa, tapi tidak disarankan)
umur >= 18 ? (console.log("Dewasa"), console.log("Boleh mendaftar")) : console.log("Anak-anak");

// LEBIH BAIK: gunakan if...else biasa untuk kasus seperti ini
if (umur >= 18) {
  console.log("Dewasa");
  console.log("Boleh mendaftar");
} else {
  console.log("Anak-anak");
}
```

➡️ Lanjut ke materi berikutnya: **08 Logical Operator**
