# 07 - Object

## Apa itu Object?

**Object** adalah struktur data untuk menyimpan **kumpulan data dalam bentuk pasangan key-value** (kunci dan nilai). Object ditulis dengan tanda kurung kurawal `{}`.

```js
let siswa = {
  nama: "Rina",
  umur: 21,
  jurusan: "Teknik Informatika",
  aktif: true,
};
```

Di sini, `nama`, `umur`, `jurusan`, dan `aktif` disebut **key (properti)**, sedangkan `"Rina"`, `21`, `"Teknik Informatika"`, dan `true` adalah **value (nilainya)**.

## Kenapa Object Berbeda dari Array?

- **Array**: data diakses berdasarkan **urutan/index angka** (`buah[0]`) — cocok untuk data berurutan
- **Object**: data diakses berdasarkan **nama key** (`siswa.nama`) — cocok untuk data yang punya "label" masing-masing

## Cara Mengakses Properti Object

Ada 2 cara:

### 1. Dot Notation (paling umum)
```js
console.log(siswa.nama); // "Rina"
```

### 2. Bracket Notation (untuk key yang dinamis atau mengandung spasi)
```js
console.log(siswa["nama"]); // "Rina"

let namaKey = "umur";
console.log(siswa[namaKey]); // 21 -> berguna kalau nama key disimpan dalam variabel
```

## Mengubah dan Menambah Properti

```js
siswa.umur = 22;         // mengubah nilai yang sudah ada
siswa.email = "rina@mail.com"; // menambah properti baru
delete siswa.aktif;       // menghapus properti
```

## Object Bisa Berisi Method (Fungsi)

Properti object juga bisa berupa fungsi, yang disebut **method**:

```js
let siswa = {
  nama: "Rina",
  sapa: function () {
    console.log(`Halo, saya ${this.nama}`);
  },
};

siswa.sapa(); // "Halo, saya Rina"
```

`this` di dalam method merujuk ke **object itu sendiri**.

## Object Bisa Bersarang (Nested)

Object bisa berisi object lain, atau array, di dalamnya:

```js
let siswa = {
  nama: "Rina",
  alamat: {
    kota: "Bontang",
    provinsi: "Kalimantan Timur",
  },
  hobi: ["membaca", "coding"],
};

console.log(siswa.alamat.kota); // "Bontang"
console.log(siswa.hobi[0]);     // "membaca"
```

## Method Berguna untuk Object

| Method | Fungsi |
|---|---|
| `Object.keys(obj)` | Ambil semua key dalam bentuk array |
| `Object.values(obj)` | Ambil semua value dalam bentuk array |
| `Object.entries(obj)` | Ambil semua pasangan [key, value] |

## Poin Penting

- Object = kumpulan data key-value, ditulis dengan `{}`
- Akses properti dengan dot notation (`obj.key`) atau bracket notation (`obj["key"]`)
- Object bisa berisi method (fungsi) dan bisa bersarang (nested)
- `Object.keys()`, `Object.values()`, `Object.entries()` berguna untuk mengolah data object

Lanjut ke → [08 Tipe Data Khusus (Symbol dan BigInt)](../08%20Tipe%20Data%20Khusus%20(Symbol%20dan%20BigInt)/Readme.md)
