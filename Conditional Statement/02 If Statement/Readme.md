# 02. If Statement

## Apa itu `if`?

`if` adalah bentuk paling dasar dari conditional statement. Kode di dalam `if` **hanya akan dijalankan jika kondisinya bernilai `true`**. Jika kondisinya `false`, kode di dalamnya akan **dilewati** (tidak dijalankan).

## Syntax (Struktur Penulisan)

```js
if (kondisi) {
  // kode yang dijalankan jika kondisi bernilai true
}
```

- `kondisi` adalah ekspresi yang hasilnya `true` atau `false`
- Kode di dalam kurung kurawal `{ }` disebut **block statement**

## Contoh Dasar

```js
let nilai = 80;

if (nilai >= 75) {
  console.log("Kamu lulus!");
}

// Output: Kamu lulus!
```

Karena `nilai >= 75` bernilai `true` (80 >= 75), maka `console.log("Kamu lulus!")` dijalankan.

## Contoh Ketika Kondisi Salah

```js
let nilai = 60;

if (nilai >= 75) {
  console.log("Kamu lulus!");
}

console.log("Program selesai");

// Output:
// Program selesai
```

Karena `60 >= 75` bernilai `false`, baris `console.log("Kamu lulus!")` **dilewati**, dan program langsung lanjut ke baris setelahnya.

## Hal Penting yang Perlu Diingat

1. **Kondisi harus berupa boolean** (atau nilai yang bisa dikonversi ke boolean — lihat materi *Truthy dan Falsy*).
2. **Tanda kurung kurawal `{ }` boleh dihilangkan** jika hanya ada satu baris kode, tapi ini **tidak disarankan** karena rawan bug:

```js
// Boleh, tapi kurang disarankan
if (nilai >= 75) console.log("Lulus");

// Lebih disarankan (lebih aman & mudah dibaca)
if (nilai >= 75) {
  console.log("Lulus");
}
```

3. `if` **tanpa `else`** hanya menjalankan kode ketika kondisi `true`. Jika kamu butuh alternatif ketika kondisi `false`, pelajari materi selanjutnya: **If Else Statement**.

## Kesalahan Umum Pemula

```js
// SALAH: pakai tanda "=" (assignment), bukan "==" atau "===" (perbandingan)
let umur = 20;
if (umur = 18) {   // ini MENGUBAH nilai umur menjadi 18, bukan membandingkan!
  console.log("Umur 18 tahun");
}

// BENAR: gunakan "===" untuk membandingkan
if (umur === 18) {
  console.log("Umur 18 tahun");
}
```

➡️ Lanjut ke materi berikutnya: **03 If Else Statement**
