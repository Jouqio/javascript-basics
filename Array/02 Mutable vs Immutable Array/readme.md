# 02. Mutable vs Immutable Array

## Apa itu Mutable?

**Mutable** artinya data tersebut **bisa diubah langsung** (secara *mutate*)
setelah dibuat, tanpa membuat salinan baru.

```js
const angka = [1, 2, 3];
angka.push(4); // array asli langsung berubah
console.log(angka); // [1, 2, 3, 4]
```

## Apa itu Immutable?

**Immutable** artinya data **tidak diubah langsung**. Setiap kali ingin
"mengubah" data, kita membuat **array/objek baru** hasil dari data lama,
sedangkan array aslinya tetap utuh.

```js
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4]; // membuat array baru
console.log(angka);    // [1, 2, 3]      (tidak berubah)
console.log(angkaBaru); // [1, 2, 3, 4]  (array baru)
```

## Method yang Bersifat Mutable (Mengubah Array Asli)

| Method | Fungsi |
|--------|--------|
| `push()` | Menambah elemen di akhir |
| `pop()` | Menghapus elemen di akhir |
| `unshift()` | Menambah elemen di awal |
| `shift()` | Menghapus elemen di awal |
| `splice()` | Menambah/menghapus elemen di posisi tertentu |
| `sort()` | Mengurutkan array |
| `reverse()` | Membalik urutan array |
| `fill()` | Mengisi array dengan nilai tertentu |

```js
const arr = [3, 1, 2];
arr.sort(); // arr aslinya ikut berubah menjadi [1, 2, 3]
```

## Method yang Bersifat Immutable (Tidak Mengubah Array Asli)

| Method | Fungsi |
|--------|--------|
| `map()` | Membuat array baru hasil transformasi |
| `filter()` | Membuat array baru hasil penyaringan |
| `reduce()` | Meringkas array menjadi satu nilai baru |
| `slice()` | Mengambil sebagian array (array baru) |
| `concat()` | Menggabungkan array (array baru) |
| Spread `[...arr]` | Menyalin/menggabungkan array |

```js
const arr = [3, 1, 2];
const arrBaru = arr.slice().sort(); // arr asli tetap [3, 1, 2]
```

> 💡 **Tips:** Jika ingin memakai method mutable (seperti `sort()`) tapi tidak
> ingin mengubah array asli, salin dulu array-nya dengan `[...arr]` atau
> `arr.slice()` sebelum memanggil method tersebut.

## Kenapa Immutability Penting?

1. **Predictable (mudah diprediksi)** — data tidak berubah tiba-tiba di tempat lain.
2. **Mudah di-debug** — kita tahu persis dari mana data baru berasal.
3. **Cocok untuk state management** — framework seperti React mendeteksi
   perubahan `state` dengan membandingkan referensi objek/array lama vs baru.
   Jika array di-mutate langsung, React tidak akan mendeteksi perubahan.
4. **Menghindari efek samping (side effect)** yang tidak disengaja saat array
   dibagikan (di-*passing*) ke banyak fungsi.

```js
// ❌ Contoh bug akibat mutasi tidak sengaja
function tambahItem(daftar, item) {
  daftar.push(item); // mengubah array asli milik pemanggil fungsi!
  return daftar;
}

// ✅ Versi immutable
function tambahItemAman(daftar, item) {
  return [...daftar, item]; // array baru, daftar asli tetap aman
}
```

## 📝 Latihan

1. Buat array `const buah = ["Apel", "Jeruk"]`. Tambahkan `"Mangga"` secara
   **immutable** (tanpa mengubah `buah` asli), simpan hasilnya ke variabel baru.
2. Buat array angka acak, urutkan secara **immutable** menggunakan `slice()` + `sort()`.
3. Jelaskan dengan kata-katamu sendiri kenapa React lebih menyukai pendekatan immutable saat memperbarui state array.

---
⬅️ [Pengantar Array](../01%20Pengantar%20Array/readme.md) | 🏠 [Daftar Isi](../Readme.md) | ➡️ [Lanjut: Array Filter](../03%20Array%20Filter/readme.md)
