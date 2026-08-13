# 01. Pengantar Variable

## Apa itu Variable?

**Variable (Variabel)** adalah tempat menyimpan data yang diberi **nama**, agar data itu bisa diakses dan dipakai lagi di bagian lain dari program.

Bayangkan variabel seperti **kotak berlabel** — kamu menyimpan sesuatu di dalamnya, memberi label (nama), dan bisa membuka kotak itu lagi kapan saja untuk melihat atau mengganti isinya.

## Analogi Sederhana

> Bayangkan kamu punya kotak bernama "uangSaku" berisi angka 50000.
> Kapanpun kamu butuh tahu berapa uang sakumu, cukup lihat kotak "uangSaku" — tidak perlu menghitung ulang dari awal.

```js
let uangSaku = 50000;
console.log(uangSaku); // 50000
```

## Kenapa Variable Dibutuhkan?

Tanpa variabel, kita harus menulis ulang nilai yang sama berkali-kali, dan program tidak bisa **mengingat** atau **mengubah** data seiring waktu. Variabel memungkinkan program untuk:

- **Menyimpan** data sementara (nama user, hasil perhitungan, status login, dll)
- **Mengubah** nilai data seiring waktu (skor game yang bertambah, jumlah barang di keranjang)
- **Menggunakan kembali** data yang sama di banyak tempat tanpa menulis ulang

## Anatomi Sebuah Variabel

```js
let umur = 20;
// ^^^  ^^^^  ^^
// |    |     |
// |    |     +-- Nilai (value)
// |    +-------- Nama variabel (identifier)
// +------------- Keyword deklarasi
```

- **Keyword deklarasi**: kata kunci untuk memberitahu JavaScript bahwa kita sedang membuat variabel baru (`let`, `const`, atau `var` — dibahas di materi berikutnya)
- **Nama variabel**: label yang kita berikan agar bisa mengakses data tersebut nanti
- **Nilai**: data yang disimpan di dalam variabel

## Contoh Sederhana

```js
let nama = "Sari";
let umur = 25;
let sudahMenikah = false;

console.log(nama);          // Sari
console.log(umur);          // 25
console.log(sudahMenikah);  // false
```

## Mengubah Nilai Variabel

Variabel yang dideklarasikan dengan `let` bisa **diubah nilainya** kapan saja setelah dideklarasikan:

```js
let skor = 0;
console.log(skor); // 0

skor = 10; // mengubah nilai skor
console.log(skor); // 10

skor = skor + 5; // mengubah nilai berdasarkan nilai sebelumnya
console.log(skor); // 15
```

## Variabel dalam Kehidupan Nyata Program

```js
// Menyimpan data user
let namaUser = "Andi";
let umurUser = 30;

// Menyimpan hasil perhitungan
let hargaBarang = 15000;
let jumlahBeli = 3;
let totalHarga = hargaBarang * jumlahBeli;

console.log("Total belanja:", totalHarga); // Total belanja: 45000
```

➡️ Lanjut ke materi berikutnya: **02 Var Let Const**
