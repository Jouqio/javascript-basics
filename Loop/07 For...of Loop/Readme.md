# 07 - For...of Loop

## Apa itu For...of Loop?

**`for...of`** adalah jenis loop modern (ES6+) yang dirancang khusus untuk melakukan perulangan pada **iterable** — struktur data yang bisa "diiterasi" satu per satu, seperti **array, string, Map, Set**, dan lainnya.

## Kenapa For...of Lebih Baik dari For Biasa untuk Array?

Dengan `for` biasa, kita harus mengelola index secara manual, yang rawan kesalahan (misalnya off-by-one error):

```js
// Cara lama (for biasa)
let buah = ["Apel", "Jeruk", "Mangga"];
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
```

Dengan `for...of`, kita langsung mendapatkan **nilai/elemennya**, tanpa perlu mengurus index:

```js
// Cara modern (for...of) - lebih ringkas dan aman dari off-by-one error
let buah = ["Apel", "Jeruk", "Mangga"];
for (let item of buah) {
  console.log(item);
}
```

## Struktur For...of

```js
for (let variabel of iterable) {
  // kode yang dijalankan untuk setiap elemen
}
```

## For...of pada String

`for...of` juga bisa dipakai untuk melakukan perulangan pada **setiap karakter** dalam string:

```js
let kata = "Halo";
for (let huruf of kata) {
  console.log(huruf);
}
// Output: H, a, l, o (satu per satu)
```

## Mendapatkan Index Sekaligus dengan `entries()`

Kalau kita tetap butuh index (misalnya untuk penomoran), gabungkan dengan `.entries()`:

```js
let buah = ["Apel", "Jeruk", "Mangga"];
for (let [index, item] of buah.entries()) {
  console.log(`${index}: ${item}`);
}
// Output: 0: Apel, 1: Jeruk, 2: Mangga
```

## For...of dengan break dan continue

`break` dan `continue` bekerja sama seperti pada loop lainnya:

```js
let angka = [10, 20, 30, 40, 50];
for (let n of angka) {
  if (n === 30) break;
  console.log(n);
}
// Output: 10, 20 (berhenti sebelum 30)
```

## Perbandingan For Biasa vs For...of

| | `for` biasa | `for...of` |
|---|---|---|
| Akses | Index dulu, baru elemen (`arr[i]`) | Langsung dapat elemen |
| Risiko off-by-one | Ada (kalau salah kondisi) | Tidak ada |
| Perlu index? | Selalu tersedia (`i`) | Perlu `.entries()` kalau butuh index |
| Bisa dipakai untuk object biasa? | Tidak langsung (bukan iterable) | Tidak langsung (object biasa bukan iterable, lihat materi 08 untuk `for...in`) |

## Poin Penting

- `for...of` = loop modern untuk iterable (array, string, Map, Set, dll)
- Langsung memberikan **nilai/elemen**, tanpa perlu mengelola index manual
- Lebih aman dari kesalahan off-by-one dibanding `for` biasa
- Gunakan `.entries()` kalau tetap butuh index bersamaan dengan nilai
- Tidak bisa langsung dipakai untuk object biasa (object bukan iterable) — untuk itu gunakan `for...in` (materi berikutnya)

Lanjut ke → [08 For...in Loop](../08%20For...in%20Loop/Readme.md)
