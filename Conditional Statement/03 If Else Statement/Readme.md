# 03. If Else Statement

## Apa itu `if...else`?

`if...else` digunakan ketika kamu ingin menjalankan **satu blok kode jika kondisi benar**, dan **blok kode lain jika kondisi salah**. Ini adalah pengembangan dari `if` biasa yang hanya punya satu jalur.

## Syntax

```js
if (kondisi) {
  // dijalankan jika kondisi bernilai true
} else {
  // dijalankan jika kondisi bernilai false
}
```

## Contoh Dasar

```js
let umur = 16;

if (umur >= 18) {
  console.log("Kamu boleh membuat SIM");
} else {
  console.log("Kamu belum boleh membuat SIM");
}

// Output: Kamu belum boleh membuat SIM
```

Karena `umur >= 18` bernilai `false` (16 tidak >= 18), maka blok `else` yang dijalankan.

## Analogi

> "**JIKA** lampu lalu lintas hijau, **MAKA** jalan. **JIKA TIDAK (else)**, berhenti."

```js
let lampu = "merah";

if (lampu === "hijau") {
  console.log("Jalan");
} else {
  console.log("Berhenti");
}
// Output: Berhenti
```

## Kenapa `if...else` Lebih Baik daripada Dua `if` Terpisah?

Bandingkan dua pendekatan berikut:

```js
// Cara 1: Dua if terpisah (kurang efisien)
let skor = 90;
if (skor >= 60) {
  console.log("Lulus");
}
if (skor < 60) {
  console.log("Tidak lulus");
}

// Cara 2: if...else (lebih baik)
if (skor >= 60) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}
```

Dengan `if...else`, JavaScript **hanya mengevaluasi satu kondisi**, lalu otomatis tahu bahwa kondisi lainnya pasti kebalikannya. Ini lebih efisien dan lebih jelas maksudnya.

## Poin Penting

- `else` **tidak punya kondisi sendiri** — dia otomatis dijalankan jika kondisi `if` bernilai `false`.
- Setiap `if` maksimal punya **satu `else`**.
- Jika kamu butuh lebih dari 2 kemungkinan, gunakan `else if` (materi selanjutnya).

➡️ Lanjut ke materi berikutnya: **04 Else If Statement**
