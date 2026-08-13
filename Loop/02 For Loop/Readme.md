# 02 - For Loop

## Apa itu For Loop?

**For loop** adalah jenis loop **paling umum dan paling sering dipakai** di JavaScript, terutama ketika kita **sudah tahu berapa kali** perulangan harus dijalankan (atau setidaknya tahu batas awal dan akhirnya).

## Struktur For Loop

```js
for (inisialisasi; kondisi; update) {
  // kode yang akan diulang
}
```

Contoh:
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

## Cara Kerja For Loop, Langkah demi Langkah

1. **Inisialisasi** (`let i = 0`) — dijalankan **sekali saja** di awal, sebelum loop dimulai
2. **Kondisi** (`i < 5`) — dicek **sebelum setiap iterasi**. Kalau `true`, loop lanjut. Kalau `false`, loop berhenti
3. **Kode di dalam `{}`** dijalankan
4. **Update** (`i++`) — dijalankan **setelah setiap iterasi**, sebelum kembali cek kondisi
5. Kembali ke langkah 2, dan seterusnya sampai kondisi bernilai `false`

## Variasi For Loop

### Looping Mundur (Descending)
```js
for (let i = 5; i > 0; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

### Loncat Beberapa Angka (Step)
```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

### Looping pada Array
Pola paling umum untuk mengakses setiap elemen array dengan index:
```js
let buah = ["Apel", "Jeruk", "Mangga"];
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
```

**Tips penting**: gunakan `buah.length` di dalam kondisi (bukan angka tetap seperti `3`), supaya kode tetap benar walaupun jumlah data di array berubah.

## Kesalahan Umum Pemula

### 1. Off-by-One Error (Salah 1 Angka)
```js
let buah = ["Apel", "Jeruk", "Mangga"]; // panjang = 3, index 0-2

for (let i = 0; i <= buah.length; i++) { // SALAH! pakai <= bukan <
  console.log(buah[i]);
}
// Output: Apel, Jeruk, Mangga, undefined <- error, index 3 tidak ada!
```
**Solusi**: gunakan `<` (bukan `<=`) ketika membandingkan dengan `.length`.

### 2. Lupa Update, Menyebabkan Infinite Loop
```js
for (let i = 0; i < 5; ) { // lupa i++
  console.log(i);
  // loop TIDAK PERNAH BERHENTI karena i tidak pernah bertambah!
}
```
Dibahas lebih lanjut di materi 10 (Infinite Loop).

## Poin Penting

- For loop = jenis loop paling umum, terdiri dari inisialisasi, kondisi, dan update
- Cocok dipakai ketika jumlah perulangan sudah diketahui/dihitung
- Bisa mundur (descending) atau melompat beberapa angka (step)
- Gunakan `.length` (bukan angka tetap) saat looping array, dan hati-hati dengan off-by-one error

Lanjut ke → [03 While Loop](../03%20While%20Loop/Readme.md)
