# 06 - Nested Loop (Loop Bersarang)

## Apa itu Nested Loop?

**Nested loop (loop bersarang)** adalah **loop di dalam loop** — sebuah loop yang di dalamnya berisi loop lain. Setiap **satu iterasi loop luar**, seluruh **loop dalam akan dijalankan sampai selesai**.

```js
for (let i = 1; i <= 3; i++) {       // loop luar
  for (let j = 1; j <= 2; j++) {     // loop dalam
    console.log(`i=${i}, j=${j}`);
  }
}
```

## Cara Kerja Nested Loop

Untuk contoh di atas, jalannya adalah:

```
i=1 (loop dalam jalan penuh: j=1, j=2)
i=2 (loop dalam jalan penuh lagi: j=1, j=2)
i=3 (loop dalam jalan penuh lagi: j=1, j=2)
```

Total iterasi = **jumlah iterasi loop luar × jumlah iterasi loop dalam** = 3 × 2 = **6 kali**.

## Kapan Nested Loop Dipakai?

Nested loop sangat umum dipakai untuk:

1. **Data berbentuk grid/tabel/matriks** (baris dan kolom)
2. **Membuat pola visual** (misalnya piramida bintang, papan catur)
3. **Membandingkan setiap elemen dengan elemen lain** (misalnya mencari pasangan duplikat)
4. **Data bersarang** (misalnya daftar kelas yang masing-masing punya daftar siswa)

## Contoh: Membuat Pola Piramida

```js
for (let baris = 1; baris <= 5; baris++) {
  let pola = "";
  for (let kolom = 1; kolom <= baris; kolom++) {
    pola += "*";
  }
  console.log(pola);
}
// Output:
// *
// **
// ***
// ****
// *****
```

## Contoh: Tabel Perkalian Lengkap (Grid)

```js
for (let i = 1; i <= 3; i++) {
  let baris = "";
  for (let j = 1; j <= 3; j++) {
    baris += `${i * j}\t`; // \t = tab, untuk perataan
  }
  console.log(baris);
}
// Output:
// 1  2  3
// 2  4  6
// 3  6  9
```

## Contoh: Data Bersarang (Array of Arrays)

```js
let kelas = [
  ["Andi", "Budi"],
  ["Citra", "Dedi", "Eka"],
];

for (let i = 0; i < kelas.length; i++) {
  console.log(`Kelas ${i + 1}:`);
  for (let j = 0; j < kelas[i].length; j++) {
    console.log(`  - ${kelas[i][j]}`);
  }
}
```

## Peringatan: Performa pada Data Besar

Nested loop bisa menjadi **lambat** kalau dipakai pada data yang **sangat besar**, karena kompleksitasnya bersifat **kuadratik** (kalau ada 1000 data di masing-masing loop, totalnya jadi 1.000.000 iterasi!). Untuk data besar, sering perlu dicari cara yang lebih efisien (di luar cakupan materi dasar ini, biasanya dibahas di materi struktur data & algoritma).

## Poin Penting

- Nested loop = loop di dalam loop, setiap iterasi loop luar menjalankan loop dalam sampai selesai
- Total iterasi = iterasi loop luar × iterasi loop dalam
- Sangat berguna untuk data grid/tabel, pola visual, dan data bersarang
- Hati-hati dengan performa pada data yang sangat besar (kompleksitas kuadratik)

Lanjut ke → [07 For...of Loop](../07%20For...of%20Loop/Readme.md)
