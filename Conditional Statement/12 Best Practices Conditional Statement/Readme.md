# 12. Best Practices Conditional Statement

Setelah memahami semua jenis conditional statement, berikut adalah kumpulan **tips dan praktik terbaik** agar kode percabangan yang kamu tulis lebih **rapi, aman, dan mudah dibaca** — bahkan oleh orang lain (atau dirimu sendiri di masa depan!).

## 1. Selalu Gunakan `===` dan `!==`, Bukan `==` dan `!=`

```js
// Hindari
if (nilai == "80") { ... }

// Disarankan
if (nilai === 80) { ... }
```

**Alasan:** `===` tidak melakukan konversi tipe otomatis yang bisa menghasilkan bug tak terduga.

## 2. Selalu Gunakan Kurung Kurawal `{ }`

```js
// Hindari (rawan bug saat menambah baris baru)
if (umur >= 18)
  console.log("Dewasa");
  console.log("Boleh mendaftar"); // BUG: baris ini SELALU jalan, di luar if!

// Disarankan
if (umur >= 18) {
  console.log("Dewasa");
  console.log("Boleh mendaftar");
}
```

## 3. Urutkan Kondisi dari yang Paling Spesifik/Ketat

```js
// Salah urutan
if (nilai >= 60) { ... }
else if (nilai >= 90) { ... } // tidak akan pernah tercapai!

// Urutan benar
if (nilai >= 90) { ... }
else if (nilai >= 60) { ... }
```

## 4. Hindari Nested If Terlalu Dalam — Gunakan Early Return / Guard Clause

```js
// Kurang baik: nested terlalu dalam
function prosesUser(user) {
  if (user) {
    if (user.aktif) {
      if (user.role === "admin") {
        console.log("Akses diberikan");
      }
    }
  }
}

// Lebih baik: guard clause (langsung return jika syarat tidak terpenuhi)
function prosesUser(user) {
  if (!user) return;
  if (!user.aktif) return;
  if (user.role !== "admin") return;

  console.log("Akses diberikan");
}
```

Guard clause membuat kode lebih **datar (flat)** dan lebih mudah diikuti alurnya.

## 5. Gunakan `switch` Hanya untuk Perbandingan Nilai Spesifik

```js
// Cocok untuk switch
switch (hari) {
  case 1: console.log("Senin"); break;
  case 2: console.log("Selasa"); break;
}

// Tidak cocok untuk switch, lebih baik if-else
if (nilai >= 90) { ... }
else if (nilai >= 80) { ... }
```

## 6. Beri Nama Variabel Boolean yang Jelas

```js
// Kurang jelas
let flag = true;
if (flag) { ... }

// Lebih jelas
let sudahLogin = true;
if (sudahLogin) { ... }
```

Gunakan awalan seperti `is`, `has`, `sudah`, `bisa` agar maksudnya langsung terbaca, contoh: `isValid`, `hasAccess`, `sudahBayar`, `bisaEdit`.

## 7. Sederhanakan Kondisi Boolean yang Berlebihan

```js
// Berlebihan
if (isValid === true) { ... }
if (isValid === false) { ... }

// Cukup
if (isValid) { ... }
if (!isValid) { ... }
```

## 8. Ekstrak Kondisi Kompleks ke Variabel/Fungsi dengan Nama Jelas

```js
// Sulit dibaca
if (umur >= 17 && punyaKTP && !isBanned && statusAkun === "aktif") {
  console.log("Boleh mencoblos");
}

// Lebih mudah dibaca
let cukupUmur = umur >= 17;
let memenuhiSyarat = cukupUmur && punyaKTP && !isBanned && statusAkun === "aktif";

if (memenuhiSyarat) {
  console.log("Boleh mencoblos");
}
```

## Ringkasan Checklist

- [ ] Pakai `===` / `!==`, hindari `==` / `!=`
- [ ] Selalu pakai `{ }` walau hanya satu baris
- [ ] Urutkan kondisi dari yang paling ketat
- [ ] Hindari nested if berlebihan, pakai guard clause
- [ ] Pilih `switch` vs `if-else` sesuai kasus
- [ ] Beri nama variabel boolean yang deskriptif
- [ ] Sederhanakan perbandingan boolean berlebihan
- [ ] Pecah kondisi kompleks jadi variabel/fungsi bernama jelas

➡️ Lanjut ke materi terakhir: **13 Latihan dan Quiz**
