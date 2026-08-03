# Looping di JavaScript

Ringkasan materi tentang perulangan (loop) di JavaScript: cara kerja, jenis-jenis loop, dan control statement.

## Daftar Isi

- [Pengantar](#pengantar)
- [For](#for)
  - [For Loop](#for-loop)
  - [For In](#for-in)
  - [For Of](#for-of)
- [While](#while)
- [Do-While](#do-while)
- [Control Statement](#control-statement)
  - [Break](#break)
  - [Continue](#continue)
- [Ringkasan Perbandingan](#ringkasan-perbandingan)

## Pengantar

Ketika memprogram, sering kali kita perlu mengeksekusi instruksi yang sama berulang kali — misalnya mencetak semua item dalam sebuah list. Di sinilah looping berperan, agar kita tidak perlu menulis instruksi yang sama berkali-kali secara manual.

## For

`for` adalah cara looping paling umum di JavaScript. Sejak ES6, `for` terbagi menjadi tiga jenis: **for loop**, **for in**, dan **for of**.

### For Loop

Struktur dasar:

```js
for (variabel awal; test kondisi; increment) {
  // do something
}
```

- **Variabel awal**: nilai variabel sebelum looping dimulai
- **Test kondisi**: dievaluasi setiap iterasi; jika `false`, loop berhenti
- **Increment**: perubahan nilai variabel setiap iterasi

Contoh:

```js
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}
```

### For In

Digunakan untuk melakukan iterasi pada **object**, termasuk properti inheritance-nya.

```js
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}
```

### For Of

Diperkenalkan di ES6, lebih sederhana karena tidak perlu memikirkan property/key — langsung mendapatkan nilai (value) dari elemen.

```js
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}
```

Bisa digunakan pada objek yang iterable, seperti array, string, set, dan map.

## While

Mengeksekusi statement selama kondisi bernilai truthy. Kondisi dicek **di awal**.

```js
while (condition) {
  statement
}
```

Contoh:

```js
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}
```

> ⚠️ **Hati-hati infinite loop**: jika variabel kondisi tidak pernah diubah di dalam loop, kondisi akan selalu `true` dan loop tidak akan pernah berhenti.

```js
// Contoh infinite loop — i tidak pernah bertambah
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
}
```

## Do-While

Mirip dengan `while`, namun kondisi dicek **di akhir**. Artinya, blok kode di dalam `do` pasti dijalankan **minimal satu kali**.

```js
do {
  // Do something
} while (condition)
```

Contoh:

```js
let i = 0;

do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);
```

## Control Statement

Digunakan untuk mengontrol alur eksekusi looping.

### Break

Menghentikan looping (atau switch case) sepenuhnya dan langsung keluar.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Kode di atas hanya mencetak `0` sampai `4`, karena loop berhenti saat `i === 5`.

Contoh lain penggunaan `break` pada `switch case`:

```js
const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}
```

### Continue

Melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya (tanpa menghentikan loop sepenuhnya). Hanya bisa digunakan di dalam body looping.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Kode di atas mencetak `0-9`, **kecuali** angka `5`, karena iterasi tersebut di-skip.

## Ringkasan Perbandingan

| Jenis | Cocok untuk | Kondisi dicek | Catatan |
|---|---|---|---|
| `for` loop | Iterasi dengan jumlah diketahui | Di awal | Butuh variabel awal, kondisi, increment |
| `for in` | Iterasi properti object | - | Bisa termasuk properti inheritance |
| `for of` | Iterasi nilai pada array/string/set/map | - | Sintaks paling ringkas |
| `while` | Jumlah iterasi tidak diketahui di awal | Di awal | Rawan infinite loop jika kondisi tidak berubah |
| `do-while` | Butuh eksekusi minimal 1x | Di akhir | Blok selalu jalan minimal sekali |
| `break` | Menghentikan loop/switch | - | Keluar total dari perulangan |
| `continue` | Skip iterasi tertentu | - | Loop tetap berlanjut ke iterasi berikutnya |