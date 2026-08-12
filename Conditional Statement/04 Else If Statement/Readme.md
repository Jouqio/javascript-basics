# 04. Else If Statement

## Apa itu `else if`?

`if...else` hanya bisa menangani **2 kemungkinan** (benar atau salah). Tapi bagaimana jika ada **lebih dari 2 kemungkinan**? Di sinilah `else if` digunakan — untuk mengecek beberapa kondisi secara berurutan.

## Syntax

```js
if (kondisi1) {
  // dijalankan jika kondisi1 true
} else if (kondisi2) {
  // dijalankan jika kondisi1 false, tapi kondisi2 true
} else if (kondisi3) {
  // dijalankan jika kondisi1 & kondisi2 false, tapi kondisi3 true
} else {
  // dijalankan jika SEMUA kondisi di atas false
}
```

Kamu bisa menambahkan `else if` sebanyak yang dibutuhkan.

## Contoh: Konversi Nilai Angka ke Huruf

```js
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai: A");
} else if (nilai >= 80) {
  console.log("Nilai: B");
} else if (nilai >= 70) {
  console.log("Nilai: C");
} else if (nilai >= 60) {
  console.log("Nilai: D");
} else {
  console.log("Nilai: E");
}

// Output: Nilai: C
```

## Cara Kerja (Urutan Pengecekan)

JavaScript mengecek kondisi **dari atas ke bawah**, dan **berhenti** begitu menemukan kondisi pertama yang bernilai `true`:

1. `nilai >= 90` → `75 >= 90` → `false`, lanjut ke bawah
2. `nilai >= 80` → `75 >= 80` → `false`, lanjut ke bawah
3. `nilai >= 70` → `75 >= 70` → `true` ✅ → jalankan `console.log("Nilai: C")`, lalu **berhenti** (tidak mengecek kondisi selanjutnya lagi)

## ⚠️ Urutan Kondisi Itu Penting!

Perhatikan contoh yang **salah** berikut ini:

```js
let nilai = 95;

// SALAH: urutan kondisi terbalik
if (nilai >= 60) {
  console.log("Nilai: D");   // ini akan langsung tereksekusi lebih dulu!
} else if (nilai >= 90) {
  console.log("Nilai: A");
}

// Output: Nilai: D  <- SALAH! Seharusnya A
```

Karena `95 >= 60` sudah `true` di pengecekan pertama, kondisi `nilai >= 90` **tidak pernah dicek lagi**. Karena itu, saat menggunakan rentang angka, **selalu urutkan dari yang paling ketat/besar ke yang paling longgar/kecil**.

## Kapan Menggunakan `else if` vs `switch`?

- Gunakan `else if` ketika kondisinya berupa **rentang nilai** atau **ekspresi logika yang kompleks** (misal `nilai >= 90`, `umur > 17 && punyaKTP`).
- Gunakan `switch` ketika kamu membandingkan **satu variabel** dengan **beberapa nilai spesifik** (akan dibahas di materi berikutnya).

➡️ Lanjut ke materi berikutnya: **05 Nested If Statement**
