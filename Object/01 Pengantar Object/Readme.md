# 01 - Pengantar Object

## Apa itu Object?

**Object** adalah salah satu tipe data paling penting di JavaScript, dipakai untuk menyimpan **kumpulan data dalam bentuk pasangan key-value** (kunci dan nilai). Object ditulis menggunakan tanda kurung kurawal `{}`.

```js
let siswa = {
  nama: "Rina",
  umur: 21,
  jurusan: "Teknik Informatika",
};
```

Di sini:
- `nama`, `umur`, `jurusan` disebut **key** atau **properti**
- `"Rina"`, `21`, `"Teknik Informatika"` disebut **value (nilainya)**

## Kenapa Object Penting?

Hampir **semua data di dunia nyata** memiliki struktur seperti object — sesuatu dengan beberapa atribut/karakteristik. Misalnya:

- Data user: nama, email, umur, alamat
- Data produk: nama, harga, stok, kategori
- Data mobil: merk, model, tahun, warna

Object memungkinkan kita mengelompokkan data-data yang **saling berhubungan** dalam satu tempat, alih-alih memakai variabel terpisah-pisah.

```js
// Tanpa object - berantakan, sulit dikelola
let namaSiswa = "Rina";
let umurSiswa = 21;
let jurusanSiswa = "Teknik Informatika";

// Dengan object - rapi, jelas ini semua adalah data SATU siswa
let siswa = {
  nama: "Rina",
  umur: 21,
  jurusan: "Teknik Informatika",
};
```

## Perbandingan Object vs Array

Object sering dibandingkan dengan Array, tapi keduanya punya kegunaan yang berbeda:

| | Array | Object |
|---|---|---|
| Akses data | Berdasarkan **index angka** (`arr[0]`) | Berdasarkan **nama key** (`obj.nama`) |
| Cocok untuk | Data **berurutan**, tidak punya "label" | Data yang punya **atribut/label** masing-masing |
| Contoh | Daftar nama buah, daftar angka | Data profil user, konfigurasi aplikasi |

```js
// Array: cocok untuk data berurutan tanpa label khusus
let daftarBuah = ["Apel", "Jeruk", "Mangga"];

// Object: cocok untuk data dengan atribut yang jelas
let buah = { nama: "Apel", warna: "Merah", harga: 15000 };
```

## Semua Nilai di JavaScript Sebenarnya Berhubungan dengan Object

Selain sebagai struktur data yang kita buat sendiri, Object juga adalah **fondasi** dari banyak fitur JavaScript lainnya — Array, Function, bahkan Date, semuanya sebenarnya adalah "jenis khusus" dari Object.

## Poin Penting

- Object = kumpulan data key-value, ditulis dengan `{}`
- Cocok untuk mengelompokkan data yang saling berhubungan (punya banyak atribut)
- Array diakses dengan index angka, Object diakses dengan nama key
- Object adalah fondasi banyak fitur JavaScript lainnya

Lanjut ke → [02 Membuat dan Mengakses Object](../02%20Membuat%20dan%20Mengakses%20Object/Readme.md)
