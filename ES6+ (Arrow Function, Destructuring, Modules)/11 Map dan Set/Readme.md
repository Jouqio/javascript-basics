# 11. Map dan Set

> Dua struktur data baru di ES6: Map untuk pasangan kunci-nilai yang lebih fleksibel dari objek, dan Set untuk kumpulan nilai unik.

## Tujuan Pembelajaran

- Memahami kelebihan Map dibanding objek biasa
- Menggunakan method dasar Map: set, get, has, delete
- Menggunakan Set untuk menyimpan nilai unik dan menghilangkan duplikat

## Map: Pasangan Kunci-Nilai yang Lebih Fleksibel

Objek biasa (`{}`) sebenarnya juga menyimpan pasangan kunci-nilai, tapi kuncinya harus berupa string atau symbol. `Map` mengizinkan **kunci bertipe apa saja** — angka, objek, bahkan fungsi — dan urutan datanya selalu terjaga sesuai urutan dimasukkan.

```js
const dataUser = new Map();

dataUser.set("nama", "Syauqi");
dataUser.set("umur", 20);
dataUser.set(true, "nilai dengan kunci boolean"); // kunci tidak harus string!

console.log(dataUser.get("nama")); // Syauqi
console.log(dataUser.has("umur")); // true
console.log(dataUser.size);        // 3

dataUser.delete("umur");
console.log(dataUser.has("umur")); // false
```

## Melakukan Iterasi pada Map

```js
const nilaiSiswa = new Map([
  ["Ani", 90],
  ["Budi", 85],
  ["Citra", 95],
]);

for (const [nama, nilai] of nilaiSiswa) {
  console.log(`${nama}: ${nilai}`);
}
// Ani: 90
// Budi: 85
// Citra: 95
```

> **Tips:** Gunakan `Map` (bukan objek biasa) saat kunci datanya bisa bertipe apa saja, sering ditambah/dihapus, atau urutan data penting untuk dijaga.

## Set: Kumpulan Nilai Unik

`Set` menyimpan kumpulan nilai tanpa ada **duplikat**. Kalau nilai yang sama dimasukkan dua kali, hanya satu yang disimpan.

```js
const warna = new Set();

warna.add("merah");
warna.add("hijau");
warna.add("merah"); // duplikat, akan diabaikan

console.log(warna);      // Set(2) { "merah", "hijau" }
console.log(warna.size); // 2
console.log(warna.has("hijau")); // true
```

## Kasus Penggunaan Umum: Menghilangkan Duplikat Array

Kombinasi `Set` dan spread operator (materi 07) adalah cara paling ringkas menghilangkan duplikat dari array.

```js
const angkaDenganDuplikat = [1, 2, 2, 3, 3, 3, 4];

const unik = [...new Set(angkaDenganDuplikat)];
console.log(unik); // [1, 2, 3, 4]
```

> **Tips:** Pola `[...new Set(array)]` sangat sering dipakai di kode nyata untuk menghilangkan duplikat dengan satu baris kode.

## Latihan

Diberikan array `["apel", "jeruk", "apel", "mangga", "jeruk"]`, gunakan `Set` untuk mendapatkan daftar buah unik dalam bentuk array.

<details>
<summary>Lihat Jawaban</summary>

```js
const buah = ["apel", "jeruk", "apel", "mangga", "jeruk"];
const buahUnik = [...new Set(buah)];
console.log(buahUnik); // ["apel", "jeruk", "mangga"]
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Modules (Import dan Export)](../10 Modules (Import dan Export)/Readme.md) | [Optional Chaining (?.) dan Nullish Coalescing (??) →](../12 Optional Chaining dan Nullish Coalescing/Readme.md)
