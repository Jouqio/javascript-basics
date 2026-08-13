# 07 - Object Reference dan Copy

## Object Disimpan sebagai Referensi, Bukan Nilai

Ini adalah salah satu konsep **paling penting** (dan paling sering menjebak pemula) di JavaScript: ketika kamu menyalin object ke variabel lain, yang disalin adalah **referensinya (alamat memori)**, bukan **isinya**.

```js
let obj1 = { nilai: 10 };
let obj2 = obj1; // obj2 menyalin REFERENSI, bukan isi/nilai obj1

obj2.nilai = 99;
console.log(obj1.nilai); // 99! obj1 IKUT BERUBAH walaupun yang diubah obj2
```

## Analogi Sederhana

Bayangkan `obj1` adalah **alamat rumah**, bukan rumahnya sendiri. Ketika kamu memberi `obj2` alamat yang sama, `obj2` bukan mendapat rumah baru — dia hanya tahu alamat rumah yang **sama** dengan `obj1`. Kalau seseorang mengubah sesuatu di rumah itu (lewat alamat `obj2`), tentu saja rumah itu (yang juga ditunjuk oleh `obj1`) ikut berubah — karena sebenarnya cuma ada **satu rumah**.

## Perbandingan dengan Primitif

Ini **berbeda total** dari tipe data primitif, yang disalin sebagai **nilai murni (independen)**:

```js
let a = 10;
let b = a; // b menyalin NILAI, independen dari a
b = 20;
console.log(a); // tetap 10, TIDAK ikut berubah
```

## Perbandingan Object dengan `===`

Karena object dibandingkan berdasarkan **referensi**, dua object dengan isi yang **identik** tapi disimpan di tempat berbeda, dianggap **tidak sama**:

```js
let objA = { nilai: 10 };
let objB = { nilai: 10 };
console.log(objA === objB); // false! Walaupun isinya sama persis, referensinya BEDA

let objC = objA;
console.log(objA === objC); // true! Karena objC menunjuk ke referensi yang SAMA dengan objA
```

## Cara Menyalin Object dengan Benar (Shallow Copy)

Kalau ingin membuat **object baru yang independen** (bukan sekadar referensi), gunakan salah satu cara berikut:

### 1. Spread Operator (`...`) — Cara Paling Umum
```js
let asli = { nama: "Andi", umur: 20 };
let salinan = { ...asli }; // membuat object BARU dengan isi yang sama

salinan.umur = 25;
console.log(asli.umur);    // 20, TIDAK berubah
console.log(salinan.umur); // 25
```

### 2. `Object.assign()`
```js
let salinan2 = Object.assign({}, asli);
```

## Peringatan: Shallow Copy Tidak Berlaku untuk Object Bersarang!

Spread operator dan `Object.assign()` hanya melakukan **shallow copy (salinan dangkal)** — artinya hanya menyalin **level pertama** saja. Kalau ada object di dalam object (nested), object di dalamnya **masih berbagi referensi yang sama**!

```js
let asli = { nama: "Budi", alamat: { kota: "Bontang" } };
let salinan = { ...asli };

salinan.alamat.kota = "Samarinda"; // mengubah object bersarang
console.log(asli.alamat.kota); // "Samarinda"! IKUT BERUBAH, karena alamat masih berbagi referensi
```

Untuk menyalin object bersarang secara **penuh (deep copy)**, ada beberapa cara, misalnya `structuredClone()` (fitur modern) atau `JSON.parse(JSON.stringify(obj))` (cara lama, ada batasan tertentu).

```js
let deepCopy = structuredClone(asli); // menyalin SEMUA level, termasuk nested object
```

## Poin Penting

- Object disalin sebagai **referensi**, bukan nilai — mengubah satu variabel bisa memengaruhi variabel lain yang menunjuk ke object yang sama
- `===` pada object membandingkan **referensi**, bukan isi
- Gunakan spread operator (`{...obj}`) atau `Object.assign()` untuk membuat salinan independen (shallow copy)
- Shallow copy tidak menyalin object bersarang secara penuh — gunakan `structuredClone()` untuk deep copy

Lanjut ke → [08 Immutable Object](../08%20Immutable%20Object/Readme.md)
