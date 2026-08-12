# 08. Enhanced Object Literals

> Cara ES6+ mempersingkat penulisan objek: property shorthand, method shorthand, dan computed property names.

## Tujuan Pembelajaran

- Menulis objek dengan property shorthand
- Menulis method di dalam objek tanpa kata kunci function
- Membuat nama properti secara dinamis dengan computed property names

## Property Shorthand

Kalau nama variabel sama persis dengan nama properti yang diinginkan, cukup tulis sekali saja.

```js
const nama = "Syauqi";
const umur = 20;

// Cara lama
const userLama = { nama: nama, umur: umur };

// Cara ES6+ - property shorthand
const userBaru = { nama, umur };

console.log(userLama); // { nama: "Syauqi", umur: 20 }
console.log(userBaru); // { nama: "Syauqi", umur: 20 } - hasilnya sama
```

## Method Shorthand

Menulis method (fungsi di dalam objek) juga bisa dipersingkat, tanpa kata kunci `function` dan tanda titik dua.

```js
// Cara lama
const kalkulatorLama = {
  tambah: function (a, b) {
    return a + b;
  },
};

// Cara ES6+ - method shorthand
const kalkulatorBaru = {
  tambah(a, b) {
    return a + b;
  },
};

console.log(kalkulatorLama.tambah(2, 3)); // 5
console.log(kalkulatorBaru.tambah(2, 3)); // 5
```

> **Perhatian:** Method shorthand tidak sama dengan arrow function sebagai properti objek. Method shorthand tetap punya `this` yang merujuk ke objek itu sendiri, sedangkan arrow function tidak (lihat lagi materi 04).

## Computed Property Names

Kadang nama properti objek perlu ditentukan secara **dinamis** dari sebuah variabel, bukan ditulis tetap. ES6+ memungkinkan ini dengan tanda kurung siku `[ ]` di dalam literal objek.

```js
const kunci = "warnaFavorit";

// Cara lama membutuhkan langkah tambahan
var objLama = {};
objLama[kunci] = "Biru";

// Cara ES6+ - computed property name
const objBaru = {
  [kunci]: "Biru",
};

console.log(objLama); // { warnaFavorit: "Biru" }
console.log(objBaru); // { warnaFavorit: "Biru" }

// Contoh nyata: membuat objek hasil pencarian dinamis
function buatFilter(field, nilai) {
  return { [field]: nilai };
}
console.log(buatFilter("kategori", "elektronik"));
// { kategori: "elektronik" }
```

> **Tips:** Ketiga fitur ini (property shorthand, method shorthand, computed property names) sering dipakai bersamaan untuk membuat kode yang membentuk objek jadi jauh lebih ringkas dan rapi.

## Latihan

Gabungkan property shorthand dan method shorthand untuk membuat objek `produk` dari variabel `nama = "Sepatu"` dan `harga = 250000`, ditambah method `info()` yang mengembalikan template literal `"Sepatu - Rp250000"`.

<details>
<summary>Lihat Jawaban</summary>

```js
const nama = "Sepatu";
const harga = 250000;

const produk = {
  nama,
  harga,
  info() {
    return `${this.nama} - Rp${this.harga}`;
  },
};

console.log(produk.info()); // "Sepatu - Rp250000"
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Spread dan Rest Operator](../07 Spread dan Rest Operator/Readme.md) | [Classes di JavaScript →](../09 Classes di JavaScript/Readme.md)
