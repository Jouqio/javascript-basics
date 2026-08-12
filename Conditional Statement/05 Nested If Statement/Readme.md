# 05. Nested If Statement

## Apa itu Nested If?

**Nested If** artinya **if di dalam if** — yaitu meletakkan satu conditional statement di dalam blok conditional statement lainnya. Ini digunakan ketika kamu perlu mengecek **kondisi tambahan**, tapi hanya setelah kondisi pertama terpenuhi.

## Syntax

```js
if (kondisiLuar) {
  if (kondisiDalam) {
    // dijalankan jika kondisiLuar DAN kondisiDalam sama-sama true
  }
}
```

## Contoh Dasar

```js
let umur = 20;
let punyaKTP = true;

if (umur >= 17) {
  if (punyaKTP) {
    console.log("Kamu boleh mencoblos");
  } else {
    console.log("Kamu perlu membuat KTP dulu");
  }
} else {
  console.log("Umur belum cukup untuk mencoblos");
}

// Output: Kamu boleh mencoblos
```

Di sini, pengecekan `punyaKTP` **hanya dilakukan** jika `umur >= 17` sudah terpenuhi. Kalau umur belum cukup, pengecekan KTP bahkan tidak perlu dilakukan sama sekali.

## Kapan Nested If Dibutuhkan?

Gunakan nested if ketika kondisi kedua **hanya relevan/perlu dicek** setelah kondisi pertama terpenuhi. Contoh nyata:

```js
let sudahLogin = true;
let role = "admin";

if (sudahLogin) {
  if (role === "admin") {
    console.log("Selamat datang, Admin!");
  } else {
    console.log("Selamat datang, User!");
  }
} else {
  console.log("Silakan login terlebih dahulu");
}
```

Mengecek `role` **tidak masuk akal** jika user belum login sama sekali — jadi nested if adalah pilihan yang tepat di sini.

## ⚠️ Hati-hati dengan Nested If yang Terlalu Dalam

Nested if yang bertumpuk terlalu banyak (disebut juga **"pyramid of doom"**) membuat kode sulit dibaca:

```js
// Terlalu dalam, sulit dibaca
if (a) {
  if (b) {
    if (c) {
      if (d) {
        console.log("Selesai");
      }
    }
  }
}
```

### Solusi: Gabungkan dengan Logical Operator

Jika memungkinkan, gabungkan beberapa kondisi menggunakan operator `&&` (AND) agar lebih ringkas (akan dibahas lebih detail di materi **Logical Operator**):

```js
// Lebih ringkas & tetap mudah dibaca
if (a && b && c && d) {
  console.log("Selesai");
}
```

**Aturan praktis:** gunakan nested if hanya jika benar-benar dibutuhkan (misal: kondisi dalam butuh `else` sendiri, atau logikanya memang bertahap). Jika tidak, gabungkan kondisi dengan `&&`.

➡️ Lanjut ke materi berikutnya: **06 Switch Case**
