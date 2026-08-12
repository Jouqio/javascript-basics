# 06. Kombinasi Filter, Map, dan Reduce (Method Chaining)

## Kenapa Dikombinasikan?

Di dunia nyata, kita jarang hanya memakai satu method saja. Biasanya kita
perlu **menyaring** data (`filter`), **mengubah bentuknya** (`map`), lalu
**meringkasnya** (`reduce`) — semua secara **immutable**, berurutan seperti
rantai (*chaining*).

```
data mentah -> filter() -> map() -> reduce() -> hasil akhir
```

## Studi Kasus: Data Produk Toko

```js
const produk = [
  { nama: "Laptop", kategori: "Elektronik", harga: 8000000, stok: 3 },
  { nama: "Mouse", kategori: "Elektronik", harga: 50000, stok: 0 },
  { nama: "Meja", kategori: "Furnitur", harga: 500000, stok: 5 },
  { nama: "Keyboard", kategori: "Elektronik", harga: 150000, stok: 10 },
];

// Soal: Hitung total nilai stok untuk kategori "Elektronik" yang masih tersedia
const totalNilaiStok = produk
  .filter((p) => p.kategori === "Elektronik" && p.stok > 0) // saring
  .map((p) => p.harga * p.stok)                              // ubah jadi nilai stok
  .reduce((total, nilai) => total + nilai, 0);                // jumlahkan

console.log(totalNilaiStok); // 8000000*3 + 150000*10 = 25.500.000
```

Perhatikan: array `produk` asli **tidak pernah berubah** di sepanjang proses ini.

## Studi Kasus: Diskon dan Rata-rata

```js
const transaksi = [
  { produk: "Baju", harga: 100000 },
  { produk: "Celana", harga: 150000 },
  { produk: "Topi", harga: 30000 },
];

const rataRataSetelahDiskon = transaksi
  .map((t) => ({ ...t, harga: t.harga * 0.9 })) // diskon 10%, immutable update
  .reduce((acc, t, index, arr) => {
    acc += t.harga;
    if (index === arr.length - 1) return acc / arr.length; // rata-rata di elemen terakhir
    return acc;
  }, 0);

console.log(rataRataSetelahDiskon);
```

> 💡 Untuk rata-rata, cara yang lebih umum dan jelas adalah menghitung total
> dengan `reduce()` lalu membaginya dengan `array.length` di luar `reduce()`.

## Urutan yang Disarankan

1. **`filter()` dulu** — supaya data yang diproses `map()`/`reduce()` selanjutnya lebih sedikit (lebih efisien).
2. **`map()`** — untuk transformasi bentuk data.
3. **`reduce()`** — untuk meringkas menjadi hasil akhir.

## Mengapa Ini "Immutable Array" Pattern?

Setiap method (`filter`, `map`, `reduce`) **selalu mengembalikan nilai/array
baru** dan **tidak pernah mengubah array sumbernya**. Inilah kenapa gaya
pemrograman ini disebut **fungsional & immutable**—sangat berguna terutama
saat bekerja dengan *state* di framework seperti React.

## 📝 Latihan

1. Diberikan data `mahasiswa` dengan `{ nama, nilai }`, ambil yang `nilai >= 75`, ubah menjadi predikat `{ nama, predikat: "Lulus" }`, lalu hitung jumlah yang lulus dengan `reduce()`.
2. Diberikan data `pesanan` dengan `{ status, total }`, hitung total pendapatan hanya dari pesanan berstatus `"selesai"` menggunakan chaining `filter().reduce()`.
3. Refactor kode yang menggunakan `for` loop biasa menjadi versi `filter().map().reduce()`.

---
⬅️ [Array Reduce](../05%20Array%20Reduce/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Studi Kasus Immutable Array](../07%20Studi%20Kasus%20Immutable%20Array/readme.md)
