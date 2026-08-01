#  Object di JavaScript

Ringkasan materi tentang **Object** di JavaScript — mulai dari cara membuatnya, mengakses propertinya, hingga mengubah dan menghapus properti di dalamnya.

---

##  Daftar Isi

- [Apa Itu Object](#-apa-itu-object)
- [Membuat Object](#-membuat-object)
- [Mengakses Properti di Object](#-mengakses-properti-di-object)
  - [1. Menggunakan Dot Notation](#1-menggunakan-dot-notation)
  - [2. Menggunakan Square Bracket](#2-menggunakan-square-bracket)
  - [3. Menggunakan Object Destructuring](#3-menggunakan-object-destructuring)
- [Mengubah Nilai di Properti Object](#-mengubah-nilai-di-properti-object)
- [Menghapus Properti di Object](#-menghapus-properti-di-object)
- [Kesimpulan](#-kesimpulan)

---

##  Apa Itu Object

**Object** adalah kumpulan pasangan **key-value** dan merupakan tipe data yang **bukan primitif**. Jika tipe data primitif hanya dapat menyimpan satu jenis data seperti string atau number, tipe data object dapat menyimpan data yang beragam dan kompleks. Object juga dapat menyimpan data secara **tidak terurut**.

> 📝 **Catatan:** Selain tipe data `string`, `number`, `symbol`, `boolean`, `null`, dan `undefined`, semuanya di JavaScript dianggap sebagai object. Sebagai informasi tambahan, object di bahasa pemrograman lain sering disebut dengan *hash-table*, *map*, atau *dictionary*.

---

##  Membuat Object

Membuat object dengan **object literals** sangat mudah, cukup dengan menuliskan kurung kurawal `{}`.

```js
const user = {};
const products = { name: 'Sepatu', price: 230000 };
```

Di dalam kurung kurawal tersebut, kita bisa menuliskan properti-properti dari object.

---

##  Mengakses Properti di Object

Object yang sudah dibuat dapat diakses dengan **3 teknik**.

### 1. Menggunakan Dot Notation

Cara pertama untuk mengakses nilai properti adalah menggunakan **dot notation** (`.`) — sebut nama object, lalu tanda titik, diikuti nama propertinya.

```js
const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};

console.log(user.name); // Output: Dicoding
```

### 2. Menggunakan Square Bracket

Untuk menutupi kekurangan dot notation (misalnya nama properti mengandung spasi), kita bisa menggunakan **square bracket** — tulis nama object, lalu di dalam kurung siku tuliskan nama properti yang ingin diakses.

```js
const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};

console.log(user['last name']); // Output: Indonesia
```

### 3. Menggunakan Object Destructuring

Cara lain untuk mengakses nilai properti object adalah menggunakan **object destructuring**.

```js
const user = {
  'name': 'Dicoding',
  'lastName': 'Indonesia',
  age: 9
};

const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia
```

---

##  Mengubah Nilai di Properti Object

Memodifikasi nilai properti object dapat dilakukan dengan **assignment operator** (`=`).

```js
const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000
```

---

##  Menghapus Properti di Object

Untuk menghapus properti pada object, gunakan operator **`delete`** dengan menuliskan nama object, tanda titik, lalu nama propertinya.

```js
const user = {
  'name': 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};

delete user.age;
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }
```

---

##  Kesimpulan

- **Object** menyimpan data sebagai pasangan **key-value** yang tidak terurut, dan termasuk tipe data non-primitif.
- Object dibuat dengan **object literals** menggunakan kurung kurawal `{}`.
- Properti object dapat diakses dengan tiga cara: **dot notation**, **square bracket**, dan **object destructuring**.
- Nilai properti object dapat **diubah** menggunakan assignment operator (`=`).
- Properti object dapat **dihapus** menggunakan operator `delete`.