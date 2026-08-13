# 03. Menyimpan Data Object dan Array (JSON)

## Masalah: localStorage Hanya Bisa Menyimpan String

Seperti dibahas di materi sebelumnya, `localStorage` **hanya bisa menyimpan string**. Lalu bagaimana jika kita ingin menyimpan **object** atau **array**, misalnya data user atau daftar produk?

```javascript
const user = { nama: "Budi", umur: 20 };

localStorage.setItem("user", user);
console.log(localStorage.getItem("user")); // "[object Object]"  ❌ SALAH!
```

Ketika sebuah object langsung disimpan, JavaScript otomatis mengubahnya menjadi string `"[object Object]"` — ini **bukan** data yang kita inginkan, dan informasi aslinya **hilang**.

## Solusi: `JSON.stringify()` dan `JSON.parse()`

JavaScript menyediakan objek global `JSON` dengan dua method penting untuk mengatasi masalah ini:

| Method | Fungsi |
|---|---|
| `JSON.stringify(data)` | Mengubah object/array menjadi **string JSON** (untuk disimpan) |
| `JSON.parse(string)` | Mengubah **string JSON** kembali menjadi object/array (untuk dipakai) |

### Menyimpan Object dengan Benar

```javascript
const user = { nama: "Budi", umur: 20, aktif: true };

// 1. Ubah object menjadi string JSON sebelum disimpan
localStorage.setItem("user", JSON.stringify(user));

console.log(localStorage.getItem("user"));
// '{"nama":"Budi","umur":20,"aktif":true}'  <- ini string JSON, bukan object lagi
```

### Mengambil Object dengan Benar

```javascript
// 2. Ambil string JSON, lalu ubah kembali menjadi object
const userString = localStorage.getItem("user");
const userObjek = JSON.parse(userString);

console.log(userObjek.nama);  // "Budi"
console.log(userObjek.umur);  // 20 (sudah kembali jadi number, bukan string!)
console.log(typeof userObjek); // "object"
```

## Menyimpan Array

Cara yang sama berlaku untuk array:

```javascript
const daftarBuah = ["apel", "jeruk", "mangga"];

// Simpan
localStorage.setItem("buah", JSON.stringify(daftarBuah));

// Ambil kembali
const buahTersimpan = JSON.parse(localStorage.getItem("buah"));
console.log(buahTersimpan); // ["apel", "jeruk", "mangga"]
console.log(Array.isArray(buahTersimpan)); // true
```

## Menyimpan Array of Object (Kasus Paling Umum!)

Ini adalah pola yang **paling sering dipakai** dalam aplikasi nyata, misalnya menyimpan daftar tugas, daftar produk, atau daftar user:

```javascript
const daftarTugas = [
  { id: 1, judul: "Belajar JavaScript", selesai: false },
  { id: 2, judul: "Mengerjakan tugas", selesai: true }
];

// Simpan
localStorage.setItem("tugas", JSON.stringify(daftarTugas));

// Ambil & gunakan
const tugasTersimpan = JSON.parse(localStorage.getItem("tugas"));
tugasTersimpan.forEach((tugas) => {
  console.log(tugas.judul, "-", tugas.selesai ? "Selesai" : "Belum selesai");
});
```

## Pola Aman: Membuat Function Helper

Karena pola "stringify saat simpan, parse saat ambil" ini akan sering dipakai, sebaiknya buat **function pembantu (helper)** agar kode lebih rapi dan tidak berulang:

```javascript
function simpanData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function ambilData(key, nilaiDefault = null) {
  const data = localStorage.getItem(key);
  if (data === null) return nilaiDefault;

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Gagal parse data localStorage:", error);
    return nilaiDefault;
  }
}

// Penggunaan jadi lebih mudah:
simpanData("user", { nama: "Budi", umur: 20 });
const user = ambilData("user", {});
console.log(user.nama); // "Budi"
```

👉 Perhatikan penggunaan `try...catch` di atas — ini penting untuk **berjaga-jaga** jika data di localStorage rusak/tidak valid (misalnya diedit manual oleh user lewat DevTools), agar program tidak crash.

## Ringkasan Alur

```
Object/Array  --[JSON.stringify()]-->  String JSON  --[localStorage.setItem()]-->  Tersimpan
Tersimpan  --[localStorage.getItem()]-->  String JSON  --[JSON.parse()]-->  Object/Array
```

Buka `contoh.html` untuk mencoba menyimpan dan mengambil object serta array dari localStorage.

➡️ Lanjut ke materi berikutnya: **04. sessionStorage**
