# 04. Array Map — `map()`

## Apa itu `map()`?

`map()` adalah method array yang **immutable**, digunakan untuk membuat array
baru dengan **jumlah elemen yang sama** seperti array asli, tetapi setiap
elemennya sudah **ditransformasikan** sesuai fungsi yang kita berikan.

```js
const angka = [1, 2, 3];
const dikali2 = angka.map((n) => n * 2);

console.log(dikali2); // [2, 4, 6]
console.log(angka);   // [1, 2, 3] (tidak berubah)
```

## Sintaks

```js
array.map((elemen, index, arrayAsli) => {
  return nilaiBaru; // wajib return, ini yang jadi elemen array baru
});
```

## Perbedaan `map()` vs `forEach()`

| | `map()` | `forEach()` |
|---|---------|-------------|
| Return value | Array baru | `undefined` |
| Tujuan | Transformasi data | Menjalankan efek samping (misal: `console.log`) |
| Immutable | Ya | Tidak menghasilkan apa-apa (bukan untuk transformasi) |

```js
// map -> menghasilkan array baru
const hasilMap = [1, 2, 3].map((n) => n * 2); // [2, 4, 6]

// forEach -> hanya iterasi, tidak menghasilkan array
const hasilForEach = [1, 2, 3].forEach((n) => n * 2); // undefined
```

## Contoh: Transformasi Struktur Data

```js
const users = [
  { id: 1, firstName: "Andi", lastName: "Saputra" },
  { id: 2, firstName: "Budi", lastName: "Santoso" },
];

const namaLengkap = users.map((u) => `${u.firstName} ${u.lastName}`);
console.log(namaLengkap); // ["Andi Saputra", "Budi Santoso"]
```

## Contoh: Mengubah Sebagian Properti Object (Immutable Update)

```js
const produk = [
  { id: 1, nama: "Kaos", harga: 100000 },
  { id: 2, nama: "Celana", harga: 200000 },
];

// Naikkan harga produk id 2 sebesar 10%, tanpa mutasi array asli
const produkBaru = produk.map((p) =>
  p.id === 2 ? { ...p, harga: p.harga * 1.1 } : p
);

console.log(produkBaru);
// [{ id: 1, harga: 100000, ... }, { id: 2, harga: 220000, ... }]
console.log(produk); // tetap seperti semula
```

## Contoh: Mengekstrak Satu Properti Saja

```js
const mahasiswa = [
  { nama: "Andi", nim: "001" },
  { nama: "Budi", nim: "002" },
];

const daftarNim = mahasiswa.map((m) => m.nim);
console.log(daftarNim); // ["001", "002"]
```

## Kesalahan Umum

```js
// ❌ Menggunakan map() hanya untuk side effect (harusnya pakai forEach)
angka.map((n) => console.log(n)); // boros, hasil map dibuang percuma

// ✅ Gunakan forEach kalau tidak butuh array baru
angka.forEach((n) => console.log(n));
```

## 📝 Latihan

1. Diberikan `const celsius = [0, 20, 37, 100]`, ubah semua ke Fahrenheit `(C * 9/5) + 32` menggunakan `map()`.
2. Diberikan array object `produk` dengan properti `harga`, buat array baru berisi harga setelah diskon 15%.
3. Diberikan array nama, buat array baru berisi objek `{ nama, panjang: nama.length }` menggunakan `map()`.

---
⬅️ [Array Filter](../03%20Array%20Filter/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Array Reduce](../05%20Array%20Reduce/readme.md)
