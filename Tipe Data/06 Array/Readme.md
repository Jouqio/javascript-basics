# 06 - Array

## Apa itu Array?

**Array** adalah struktur data untuk menyimpan **kumpulan nilai secara berurutan** dalam satu variabel. Array ditulis menggunakan tanda kurung siku `[]`, dengan setiap nilai dipisahkan koma.

```js
let buah = ["Apel", "Jeruk", "Mangga"];
let angka = [1, 2, 3, 4, 5];
let campuran = ["Budi", 25, true, null]; // array boleh berisi tipe data berbeda-beda
```

## Index Array

Setiap elemen dalam array punya **index (posisi)**, dan **dimulai dari 0**, bukan 1!

```js
let buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[0]); // "Apel"  <- index pertama adalah 0
console.log(buah[1]); // "Jeruk"
console.log(buah[2]); // "Mangga"
console.log(buah[3]); // undefined, karena index 3 tidak ada
```

## Mengetahui Panjang Array

```js
console.log(buah.length); // 3
```

## Array Bersifat Mutable

Berbeda dengan string yang immutable, **array bisa diubah isinya secara langsung** setelah dibuat:

```js
let buah = ["Apel", "Jeruk"];
buah[0] = "Nanas"; // BISA diubah langsung
console.log(buah); // ["Nanas", "Jeruk"]
```

## Method Array yang Sering Dipakai

### Menambah/Menghapus Elemen

| Method | Fungsi |
|---|---|
| `.push(x)` | Tambah elemen di akhir array |
| `.pop()` | Hapus elemen terakhir |
| `.unshift(x)` | Tambah elemen di awal array |
| `.shift()` | Hapus elemen pertama |

### Method untuk Mengolah Data (Sangat Penting!)

| Method | Fungsi |
|---|---|
| `.forEach(fn)` | Menjalankan fungsi untuk setiap elemen (tidak menghasilkan array baru) |
| `.map(fn)` | Membuat array baru dengan hasil transformasi setiap elemen |
| `.filter(fn)` | Membuat array baru berisi elemen yang **lolos syarat/kondisi** |
| `.reduce(fn, awal)` | Meringkas seluruh array jadi **satu nilai** (misalnya total) |
| `.find(fn)` | Mencari **satu elemen pertama** yang cocok dengan syarat |
| `.includes(x)` | Cek apakah array mengandung nilai x |

```js
let angka = [1, 2, 3, 4, 5];

let dikali2 = angka.map((n) => n * 2);          // [2, 4, 6, 8, 10]
let genapSaja = angka.filter((n) => n % 2 === 0); // [2, 4]
let total = angka.reduce((jumlah, n) => jumlah + n, 0); // 15
```

## Poin Penting

- Array = kumpulan nilai berurutan, ditulis dengan `[]`
- Index dimulai dari **0**, bukan 1
- Array bersifat mutable — bisa diubah isinya secara langsung
- Method `.map()`, `.filter()`, `.reduce()` adalah "senjata utama" untuk mengolah data array secara modern

Lanjut ke → [07 Object](../07%20Object/Readme.md)
