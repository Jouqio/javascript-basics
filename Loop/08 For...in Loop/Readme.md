# 08 - For...in Loop

## Apa itu For...in Loop?

**`for...in`** adalah jenis loop yang dirancang khusus untuk melakukan perulangan pada **key (nama properti) sebuah object**.

```js
let siswa = { nama: "Rina", umur: 21, jurusan: "Teknik Informatika" };

for (let key in siswa) {
  console.log(key); // hanya key-nya saja: "nama", "umur", "jurusan"
}
```

## Mendapatkan Value dari Key

`for...in` hanya memberikan **key**, bukan value. Untuk mendapatkan value, kita perlu mengakses object-nya secara manual dengan bracket notation:

```js
for (let key in siswa) {
  console.log(key, "->", siswa[key]); // gunakan siswa[key] untuk ambil value
}
```

## For...in vs For...of — Jangan Tertukar!

Ini adalah salah satu kebingungan paling umum bagi pemula karena namanya mirip:

| | `for...in` | `for...of` |
|---|---|---|
| Dipakai untuk | **Object** (key-nya) | **Array, String, iterable lain** (nilainya) |
| Yang didapat | **Key/nama properti** | **Value/elemen langsung** |

```js
let arr = ["a", "b", "c"];

for (let x in arr) {
  console.log(x); // 0, 1, 2 -> INDEX (karena array diperlakukan seperti object dengan key index)
}

for (let x of arr) {
  console.log(x); // "a", "b", "c" -> VALUE langsung
}
```

**Aturan sederhana untuk diingat**:
- **`for...IN`** → cocok untuk **object**, memberi **key**
- **`for...OF`** → cocok untuk **array/iterable**, memberi **value/elemen**

## Kenapa Sebaiknya TIDAK Memakai For...in untuk Array?

Walaupun secara teknis `for...in` bisa dipakai pada array (karena array sebenarnya adalah object khusus), **ini tidak dianjurkan**, karena:

1. Hasilnya adalah **string index** ("0", "1", "2"), bukan angka murni — bisa menyebabkan bug tak terduga saat melakukan operasi matematika
2. `for...in` bisa juga mengambil properti tambahan yang **tidak diinginkan** kalau array punya properti custom
3. Urutan iterasi **tidak dijamin** persis sesuai urutan index pada semua kasus

**Aturan emas**: gunakan `for...in` **hanya untuk object**, dan `for...of` (atau method array modern) **untuk array**.

## Kapan For...in Berguna?

Cocok dipakai saat kita perlu mengakses **key sekaligus value** dari sebuah object, terutama untuk object yang strukturnya tidak diketahui pasti sebelumnya (dinamis):

```js
let konfigurasi = {
  tema: "gelap",
  bahasa: "id",
  notifikasi: true,
};

for (let pengaturan in konfigurasi) {
  console.log(`${pengaturan}: ${konfigurasi[pengaturan]}`);
}
```

**Catatan**: Untuk kebutuhan seperti ini, alternatif modern yang lebih disarankan adalah `Object.entries()` yang dikombinasikan dengan `for...of` atau `.forEach()` (sudah dibahas di materi Object), karena lebih fleksibel dan hasilnya berupa array yang bisa diolah dengan method array lainnya.

## Poin Penting

- `for...in` = loop khusus untuk **key** pada object
- `for...in` **berbeda** dari `for...of` — jangan tertukar!
- Hindari memakai `for...in` untuk array, gunakan `for...of` atau method array
- Untuk kombinasi key+value pada object, alternatif modern: `Object.entries()` + `for...of`/`.forEach()`

Lanjut ke → [09 Looping Array dengan Method](../09%20Looping%20Array%20dengan%20Method/Readme.md)
