# 11. Short Circuit Evaluation

## Apa itu Short Circuit Evaluation?

**Short Circuit Evaluation** adalah perilaku JavaScript yang **berhenti mengevaluasi** sebuah ekspresi logika **begitu hasil akhirnya sudah bisa dipastikan**, tanpa perlu mengecek sisa ekspresi lainnya. Ini berlaku pada operator `&&` dan `||`.

## Cara Kerja Operator `&&`

Pada `A && B`:
- Jika **A bernilai falsy**, maka hasilnya **pasti falsy** (apapun nilai B). Jadi JavaScript **tidak perlu mengevaluasi B** — langsung mengembalikan nilai A.
- Jika **A truthy**, JavaScript baru mengevaluasi dan mengembalikan nilai **B**.

```js
console.log(false && "Halo");  // false (B tidak dievaluasi/diperiksa)
console.log(true && "Halo");   // "Halo" (B dikembalikan karena A truthy)
console.log(0 && "Halo");      // 0 (short circuit, B diabaikan)
```

## Cara Kerja Operator `||`

Pada `A || B`:
- Jika **A bernilai truthy**, maka hasilnya **pasti truthy**. JavaScript **tidak perlu mengevaluasi B** — langsung mengembalikan nilai A.
- Jika **A falsy**, JavaScript baru mengevaluasi dan mengembalikan nilai **B**.

```js
console.log(true || "Halo");   // true (B diabaikan)
console.log(false || "Halo");  // "Halo" (karena A falsy, B dikembalikan)
console.log("" || "Default");  // "Default" (short circuit karena "" falsy)
```

## Kegunaan Praktis 1: Nilai Default

Short circuit dengan `||` sering dipakai untuk memberi **nilai default** jika sebuah variabel kosong/tidak ada:

```js
function sapa(nama) {
  let namaFinal = nama || "Tamu";
  console.log("Halo, " + namaFinal + "!");
}

sapa("Rina"); // Halo, Rina!
sapa("");     // Halo, Tamu!  ("" falsy, jadi pakai default)
sapa();       // Halo, Tamu!  (undefined falsy, jadi pakai default)
```

> Catatan: JavaScript modern juga punya operator `??` (nullish coalescing) yang mirip tapi hanya menganggap `null`/`undefined` sebagai "kosong" — tidak menganggap `0` atau `""` sebagai kosong. Ini di luar cakupan materi dasar ini, tapi baik untuk diketahui ke depannya.

## Kegunaan Praktis 2: Menjalankan Kode Secara Kondisional (Guard Clause)

Short circuit dengan `&&` sering dipakai sebagai pengganti `if` sederhana:

```js
let sudahLogin = true;

// Menggunakan if biasa
if (sudahLogin) {
  console.log("Selamat datang!");
}

// Menggunakan short circuit && (setara, lebih ringkas)
sudahLogin && console.log("Selamat datang!");
```

Ini sering dipakai di React/JavaScript modern untuk menampilkan sesuatu **hanya jika** kondisi terpenuhi.

## Kegunaan Praktis 3: Menghindari Error

```js
let user = null;

// Tanpa short circuit, ini akan ERROR karena user adalah null
// console.log(user.nama); // TypeError!

// Dengan short circuit, kode di kanan tidak dijalankan jika user falsy
console.log(user && user.nama); // null (aman, tidak error)
```

## Rangkuman

| Ekspresi | Hasil | Kenapa |
|----------|-------|--------|
| `falsy && apapun` | nilai falsy tersebut | Short circuit, langsung berhenti |
| `truthy && B` | nilai `B` | Lanjut evaluasi B |
| `truthy \|\| apapun` | nilai truthy tersebut | Short circuit, langsung berhenti |
| `falsy \|\| B` | nilai `B` | Lanjut evaluasi B |

➡️ Lanjut ke materi berikutnya: **12 Best Practices Conditional Statement**
