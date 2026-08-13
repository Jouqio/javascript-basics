# 09 - Looping Array dengan Method

## Alternatif Modern untuk Loop pada Array

Selain `for`, `while`, dan `for...of`, JavaScript modern menyediakan **method array bawaan** yang secara internal juga melakukan perulangan, tapi dengan gaya penulisan yang lebih **deklaratif** (fokus pada "apa yang ingin dicapai", bukan "bagaimana cara loop-nya").

## `forEach()` — Menjalankan Fungsi untuk Setiap Elemen

Mirip `for...of`, tapi dalam bentuk method dengan callback function:

```js
let buah = ["Apel", "Jeruk", "Mangga"];

buah.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
```

**Catatan**: `forEach()` **tidak menghasilkan array baru**, hanya menjalankan fungsi untuk setiap elemen (mirip loop biasa, tapi dengan sintaks berbeda).

## `map()` — Membuat Array Baru dari Transformasi

`map()` menjalankan fungsi untuk setiap elemen, dan **mengembalikan array baru** berisi hasil transformasinya.

```js
let angka = [1, 2, 3, 4, 5];
let dikali2 = angka.map((n) => n * 2);
console.log(dikali2); // [2, 4, 6, 8, 10]
```

## `filter()` — Menyaring Elemen Sesuai Syarat

`filter()` mengembalikan array baru berisi **hanya elemen yang lolos kondisi tertentu**.

```js
let angka = [1, 2, 3, 4, 5, 6];
let genapSaja = angka.filter((n) => n % 2 === 0);
console.log(genapSaja); // [2, 4, 6]
```

## `reduce()` — Meringkas Array Jadi Satu Nilai

`reduce()` "meringkas" seluruh array menjadi **satu nilai akhir** (misalnya total, rata-rata, atau nilai maksimum).

```js
let angka = [1, 2, 3, 4, 5];
let total = angka.reduce((akumulator, n) => akumulator + n, 0);
console.log(total); // 15
```

## Kapan Pakai Loop Biasa vs Method Array?

| Situasi | Gunakan |
|---|---|
| Ingin membuat array baru hasil transformasi | `map()` |
| Ingin menyaring sebagian data | `filter()` |
| Ingin meringkas jadi satu nilai (total, rata-rata) | `reduce()` |
| Hanya ingin "melakukan sesuatu" untuk tiap elemen (misal print) | `forEach()` atau `for...of` |
| Perlu `break`/`continue` di tengah proses | Loop biasa (`for`, `while`) — **method array TIDAK bisa di-break!** |
| Perlu kontrol penuh atas index (misalnya loncat 2 index) | Loop biasa (`for`) |

## Peringatan Penting: Method Array TIDAK Bisa Di-break!

Berbeda dari loop biasa, `forEach()`, `map()`, `filter()`, dan `reduce()` **tidak mendukung `break`**. Kalau butuh menghentikan proses di tengah jalan (misalnya begitu ditemukan hasil), lebih baik gunakan `for...of` biasa, atau method khusus seperti `.find()` / `.some()` yang secara internal sudah otomatis berhenti begitu kondisi terpenuhi.

```js
let angka = [1, 2, 3, 4, 5];

// forEach TIDAK bisa di-break -> tetap loop semua elemen walau sudah ketemu
angka.forEach((n) => {
  if (n === 3) {
    console.log("Ketemu 3, tapi forEach TIDAK BISA berhenti di sini!");
  }
});

// Solusi: gunakan .find() yang otomatis berhenti begitu ketemu
let hasil = angka.find((n) => n === 3);
console.log("Hasil find:", hasil); // 3, dan proses berhenti otomatis
```

## Chaining — Merangkai Beberapa Method Sekaligus

Salah satu keunggulan besar method array adalah bisa **dirangkai (chaining)**, membuat kode sangat ringkas dan mudah dibaca:

```js
let siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
];

let namaSiswaLulus = siswa
  .filter((s) => s.nilai >= 70)  // saring yang lulus
  .map((s) => s.nama);            // ambil namanya saja

console.log(namaSiswaLulus); // ["Andi", "Citra"]
```

## Poin Penting

- `forEach()`, `map()`, `filter()`, `reduce()` adalah alternatif modern untuk loop pada array
- `map()` = transformasi, `filter()` = penyaringan, `reduce()` = meringkas jadi satu nilai
- Method array **tidak bisa di-break**, gunakan loop biasa atau `.find()`/`.some()` kalau butuh berhenti di tengah
- Method array bisa dirangkai (chaining) untuk kode yang ringkas dan deklaratif

Lanjut ke → [10 Infinite Loop dan Cara Menghindarinya](../10%20Infinite%20Loop%20dan%20Cara%20Menghindarinya/Readme.md)
