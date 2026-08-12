# 08. Rangkuman Array & Cheat Sheet

## Ringkasan Materi

| Materi | Inti Pembelajaran |
|--------|--------------------|
| 01 Pengantar Array | Array adalah struktur data terurut untuk menyimpan kumpulan nilai |
| 02 Mutable vs Immutable | Mutable = mengubah array asli, Immutable = menghasilkan array baru |
| 03 Array Filter | `filter()` menyaring elemen berdasarkan kondisi (`true`/`false`) |
| 04 Array Map | `map()` mentransformasi setiap elemen menjadi bentuk baru |
| 05 Array Reduce | `reduce()` meringkas array menjadi satu nilai (angka, object, dll) |
| 06 Kombinasi | `filter().map().reduce()` bisa dirangkai untuk mengolah data secara immutable |
| 07 Studi Kasus | Pola immutable diterapkan pada Todo List (tambah, hapus, edit, toggle) |

## Cheat Sheet Method Array Penting

### 🔴 Method Mutable (mengubah array asli)
```js
arr.push(item);       // tambah di akhir
arr.pop();             // hapus di akhir
arr.unshift(item);    // tambah di awal
arr.shift();           // hapus di awal
arr.splice(i, jumlah); // hapus/tambah di posisi tertentu
arr.sort();             // urutkan
arr.reverse();          // balik urutan
```

### 🟢 Method Immutable (menghasilkan array/nilai baru)
```js
arr.map(fn);            // transformasi
arr.filter(fn);         // penyaringan
arr.reduce(fn, init);   // ringkas jadi satu nilai
arr.slice(awal, akhir); // ambil sebagian
arr.concat(arr2);       // gabungkan
[...arr];                // salin array
arr.find(fn);            // cari elemen pertama yang cocok
arr.some(fn);             // cek ada minimal 1 yang cocok? (boolean)
arr.every(fn);             // cek semua elemen cocok? (boolean)
arr.includes(nilai);       // cek apakah nilai ada di array
```

## Pola Immutable Update yang Sering Dipakai

```js
// Tambah elemen
const baru = [...arr, item];

// Hapus elemen (by id)
const baru = arr.filter((x) => x.id !== id);

// Ubah 1 elemen (by id)
const baru = arr.map((x) => (x.id === id ? { ...x, prop: nilaiBaru } : x));

// Gabung 2 array
const baru = [...arr1, ...arr2];

// Urutkan tanpa mutasi
const baru = [...arr].sort();
```

## Kapan Pakai `filter` vs `map` vs `reduce`?

- Gunakan **`filter()`** ketika kamu ingin **mengurangi jumlah elemen** (menyaring).
- Gunakan **`map()`** ketika **jumlah elemen tetap sama**, hanya **bentuknya** yang berubah.
- Gunakan **`reduce()`** ketika kamu ingin **meringkas array menjadi satu nilai** (total, rata-rata, objek gabungan, dsb).

## Diagram Alur Berpikir

```
Butuh menyaring data?          -> filter()
Butuh mengubah bentuk data?    -> map()
Butuh 1 nilai akhir dari data? -> reduce()
Butuh ketiganya sekaligus?     -> filter().map().reduce()
```

---
⬅️ [Studi Kasus Immutable Array](../07%20Studi%20Kasus%20Immutable%20Array/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Quiz Array](../09%20Quiz%20Array/readme.md)
