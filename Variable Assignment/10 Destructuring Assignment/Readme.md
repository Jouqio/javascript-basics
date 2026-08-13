# 10. Destructuring Assignment

## Apa itu Destructuring Assignment?

**Destructuring Assignment** adalah cara **ringkas** untuk mengekstrak nilai dari **array** atau **properti dari object**, lalu langsung menyimpannya ke variabel — tanpa perlu mengakses satu per satu secara manual.

## 1. Array Destructuring

### Cara Lama (Tanpa Destructuring)

```js
let buah = ["Apel", "Jeruk", "Mangga"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1, buah2, buah3); // Apel Jeruk Mangga
```

### Cara Baru (Dengan Destructuring)

```js
let buah = ["Apel", "Jeruk", "Mangga"];

let [buah1, buah2, buah3] = buah; // urutan variabel mengikuti urutan di array

console.log(buah1, buah2, buah3); // Apel Jeruk Mangga
```

### Melewati (Skip) Elemen Tertentu

```js
let angka = [1, 2, 3, 4, 5];

let [pertama, , ketiga] = angka; // koma kosong untuk skip elemen kedua

console.log(pertama, ketiga); // 1 3
```

### Nilai Default Jika Elemen Tidak Ada

```js
let warna = ["Merah"];

let [warna1, warna2 = "Biru"] = warna; // warna2 tidak ada di array, pakai default

console.log(warna1, warna2); // Merah Biru
```

### Menukar Nilai Dua Variabel (Swap) dengan Destructuring

```js
let a = 1;
let b = 2;

[a, b] = [b, a]; // cara ringkas untuk menukar nilai tanpa variabel bantu

console.log(a, b); // 2 1
```

## 2. Object Destructuring

### Cara Lama (Tanpa Destructuring)

```js
let user = { nama: "Budi", umur: 25, kota: "Jakarta" };

let nama = user.nama;
let umur = user.umur;

console.log(nama, umur); // Budi 25
```

### Cara Baru (Dengan Destructuring)

```js
let user = { nama: "Budi", umur: 25, kota: "Jakarta" };

let { nama, umur } = user; // nama variabel HARUS SAMA dengan nama properti object

console.log(nama, umur); // Budi 25
```

### Mengganti Nama Variabel Saat Destructuring

```js
let user = { nama: "Budi", umur: 25 };

let { nama: namaUser, umur: umurUser } = user; // "nama" di object -> disimpan sebagai "namaUser"

console.log(namaUser, umurUser); // Budi 25
```

### Nilai Default pada Object Destructuring

```js
let user = { nama: "Budi" };

let { nama, kota = "Tidak diketahui" } = user; // kota tidak ada di object, pakai default

console.log(nama, kota); // Budi Tidak diketahui
```

### Destructuring pada Parameter Fungsi (Sangat Umum Dipakai)

```js
function tampilkanUser({ nama, umur }) {
  console.log(`Nama: ${nama}, Umur: ${umur}`);
}

tampilkanUser({ nama: "Sari", umur: 30 }); // Nama: Sari, Umur: 30
```

Ini sangat berguna karena kamu tidak perlu menulis `user.nama`, `user.umur` di dalam fungsi — cukup akses `nama` dan `umur` langsung.

## Kenapa Destructuring Berguna?

1. **Kode lebih ringkas** — tidak perlu mengakses properti satu per satu
2. **Lebih mudah dibaca** — jelas variabel apa saja yang diambil dari data
3. Sangat umum dipakai saat bekerja dengan **data dari API** (biasanya berupa object/array)

➡️ Lanjut ke materi berikutnya: **11 Type Conversion dan Coercion**
