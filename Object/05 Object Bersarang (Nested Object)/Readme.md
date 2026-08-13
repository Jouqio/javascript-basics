# 05 - Object Bersarang (Nested Object)

## Apa itu Object Bersarang?

**Object bersarang (nested object)** adalah object yang **di dalamnya berisi object lain**, atau array, sebagai nilai dari salah satu propertinya. Ini sangat umum terjadi karena data di dunia nyata sering memiliki struktur berlapis.

```js
let siswa = {
  nama: "Rina",
  alamat: {
    jalan: "Jl. Merdeka No. 10",
    kota: "Bontang",
    provinsi: "Kalimantan Timur",
  },
  nilai: {
    matematika: 85,
    bahasaInggris: 90,
  },
};
```

## Mengakses Data Bersarang

Gunakan dot notation berantai (chaining), sesuai kedalaman strukturnya:

```js
console.log(siswa.alamat.kota); // "Bontang"
console.log(siswa.nilai.matematika); // 85
```

## Object Bersarang dengan Array

Kombinasi object dan array sangat umum, misalnya untuk data yang punya banyak item:

```js
let siswa = {
  nama: "Andi",
  hobi: ["membaca", "coding", "futsal"],
  temanDekat: [
    { nama: "Budi", umur: 21 },
    { nama: "Citra", umur: 20 },
  ],
};

console.log(siswa.hobi[0]); // "membaca"
console.log(siswa.temanDekat[0].nama); // "Budi"
```

## Masalah: Error saat Properti Tidak Ada

Kalau kita mencoba mengakses properti dari object bersarang yang **ternyata tidak ada**, JavaScript akan melempar error:

```js
let user = { nama: "Dinda" };
console.log(user.alamat.kota); // ERROR! "Cannot read properties of undefined"
```

Ini terjadi karena `user.alamat` bernilai `undefined`, dan kita mencoba mengakses `.kota` dari `undefined` — yang tidak punya properti apapun.

## Solusi: Optional Chaining (`?.`)

**Optional chaining** adalah fitur modern JavaScript (ES2020) yang membuat pengaksesan properti bersarang jadi **aman**, tidak akan error walaupun properti di tengah jalan ternyata `undefined`/`null`.

```js
let user = { nama: "Dinda" };
console.log(user.alamat?.kota); // undefined, TIDAK error!
```

Optional chaining juga bisa dipakai berantai untuk struktur yang lebih dalam:

```js
console.log(user.alamat?.detail?.kodePos); // undefined, tetap aman walaupun 2 level kosong
```

## Poin Penting

- Object bersarang = object di dalam object (atau array), sangat umum untuk data berstruktur kompleks
- Akses data bersarang dengan dot notation berantai (`obj.a.b.c`)
- Mengakses properti dari nilai `undefined`/`null` akan menyebabkan error
- Gunakan optional chaining (`?.`) untuk akses yang aman tanpa risiko error

Lanjut ke → [06 Perulangan pada Object](../06%20Perulangan%20pada%20Object/Readme.md)
