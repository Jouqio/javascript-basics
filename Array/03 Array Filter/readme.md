# 03. Array Filter — `filter()`

## Apa itu `filter()`?

`filter()` adalah method array yang **immutable**, digunakan untuk membuat
array baru yang hanya berisi elemen-elemen yang **lolos syarat tertentu**
(callback mengembalikan `true`).

```js
const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter((n) => n % 2 === 0);

console.log(genap); // [2, 4, 6]
console.log(angka); // [1, 2, 3, 4, 5, 6] (tidak berubah)
```

## Sintaks

```js
array.filter((elemen, index, arrayAsli) => {
  return kondisi; // true = elemen dipertahankan, false = dibuang
});
```

- `elemen` — nilai elemen saat ini
- `index` — indeks elemen saat ini (opsional)
- `arrayAsli` — array yang sedang di-filter (opsional)

## Contoh: Filter Angka

```js
const nilai = [55, 80, 90, 40, 70];
const lulus = nilai.filter((n) => n >= 60);
console.log(lulus); // [80, 90, 70]
```

## Contoh: Filter Object Berdasarkan Properti

```js
const mahasiswa = [
  { nama: "Andi", jurusan: "Informatika" },
  { nama: "Budi", jurusan: "Sipil" },
  { nama: "Citra", jurusan: "Informatika" },
];

const infoStudent = mahasiswa.filter((m) => m.jurusan === "Informatika");
console.log(infoStudent);
// [{ nama: "Andi", ... }, { nama: "Citra", ... }]
```

## Contoh: Filter dengan Banyak Kondisi

```js
const produk = [
  { nama: "Laptop", harga: 8000000, stok: 5 },
  { nama: "Mouse", harga: 50000, stok: 0 },
  { nama: "Keyboard", harga: 150000, stok: 10 },
];

const tersediaDanMurah = produk.filter((p) => p.stok > 0 && p.harga < 1000000);
console.log(tersediaDanMurah); // [{ nama: "Keyboard", ... }]
```

## Menghapus Elemen dari Array Secara Immutable

`filter()` sering dipakai untuk "menghapus" elemen tanpa mengubah array asli:

```js
const todos = ["Belajar", "Olahraga", "Tidur"];
const tanpaOlahraga = todos.filter((t) => t !== "Olahraga");

console.log(tanpaOlahraga); // ["Belajar", "Tidur"]
console.log(todos);         // ["Belajar", "Olahraga", "Tidur"] (utuh)
```

## Kesalahan Umum

```js
// ❌ Lupa return (kalau pakai kurung kurawal, harus eksplisit return)
const salah = angka.filter((n) => {
  n % 2 === 0; // tidak ada return -> selalu undefined -> array kosong
});

// ✅ Benar
const benar = angka.filter((n) => {
  return n % 2 === 0;
});
```

## 📝 Latihan

1. Diberikan `const angka = [12, 5, 8, 130, 44]`, ambil hanya angka yang lebih besar dari 10.
2. Diberikan array object `user` dengan properti `aktif` (boolean), filter hanya user yang `aktif === true`.
3. Buat fungsi `hapusItem(array, itemYangDihapus)` yang mengembalikan array baru tanpa item tersebut, menggunakan `filter()`.

---
⬅️ [Mutable vs Immutable Array](../02%20Mutable%20vs%20Immutable%20Array/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Array Map](../04%20Array%20Map/readme.md)
