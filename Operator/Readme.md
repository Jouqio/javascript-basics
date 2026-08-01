#  Operator di JavaScript

Ringkasan materi tentang apa itu operator dan operan, pengelompokan operator (unary, binary, ternary), serta jenis-jenis operator yang umum digunakan di JavaScript.

---

##  Daftar Isi

- [Operator dan Operan](#-operator-dan-operan)
- [Assignment Operator](#-assignment-operator)
- [Arithmetic Operator](#-arithmetic-operator)
- [Comparison Operator](#-comparison-operator)
- [Logical Operator](#-logical-operator)
- [String Operator](#-string-operator)
- [Kesimpulan](#-kesimpulan)

---

##  Operator dan Operan

Ada dua istilah penting sebelum mengenal jenis-jenis operator:

- **Operator** → simbol atau teks yang digunakan untuk melakukan sebuah operasi (aritmetika, penugasan, logika, tipe data, dll).
- **Operan** → nilai yang menjadi target dari sebuah operasi.

Contoh: pada operasi `5 + 4`, operatornya adalah `+`, sedangkan operannya adalah `5` dan `4`.

### Pengelompokan Operator

Operator di JavaScript terbagi menjadi tiga kelompok berdasarkan jumlah operan yang dibutuhkan:

| Kelompok | Jumlah Operan | Contoh |
|---|---|---|
| **Unary** | 1 operan | `typeof age` |
| **Binary** | 2 operan | `5 + 4`, `age = 30` |
| **Ternary** | 3 operan | `(age < 18) ? 'You are too young!' : 'Welcome onboard!'` |

```js
let age = 25;

// Unary operator
typeof age;

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!';
```

---

##  Assignment Operator

**Operator penugasan (assignment operator)** digunakan untuk memberikan nilai kepada sebuah variabel — baik untuk inisiasi nilai baru maupun mengubah nilai yang sudah ada. Ditulis dengan simbol `=`, dan termasuk **binary operator** karena membutuhkan dua operan: variabel di sisi kiri dan nilai di sisi kanan.

```js
// Digunakan untuk menginisiasi nilai
const name = 'Jouqio';
let location = 'Bontang';

// Digunakan untuk mengubah nilai
location = 'Jakarta';
```

---

##  Arithmetic Operator

**Operator aritmetika** digunakan untuk proses aritmetika standar: penambahan (`+`), pengurangan (`-`), perkalian (`*`), dan pembagian (`/`), termasuk beberapa operasi tambahan seperti modulus (`%`).

```js
6 + 5;        // mengembalikan 11
7 - 2;        // mengembalikan 5
8 * 5;        // mengembalikan 40
10 / 3;       // mengembalikan 3.33
10 % 2;       // mengembalikan 0
2 * (10 + 2); // mengembalikan 24
```

> 📝 **Catatan:** Tanda kurung menentukan urutan operasi — bagian yang diberi tanda kurung dikalkulasi lebih dulu, sesuai aturan umum matematika.

---

##  Comparison Operator

**Operator perbandingan** digunakan untuk membandingkan dua nilai dan mengembalikan nilai **boolean** (`true`/`false`) sebagai hasilnya. Cocok untuk skenario seperti "Apakah x lebih besar dari y?".

```js
const a = 10;
const b = 12;

console.log(a < b); // output: true
console.log(a > b); // output: false
```

---

##  Logical Operator

**Operator logika** digunakan untuk menetapkan logika dari dua nilai operan boolean, seperti operasi gerbang logika **AND**, **OR**, dan **NOT**.

```js
// AND
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

// OR
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true

// NOT
console.log(!true);  // false
console.log(!false); // true
```

---

##  String Operator

**Operator string** digunakan untuk menggabungkan dua nilai string, menggunakan simbol `+`, dan termasuk **binary operator**.

```js
const first = 'bekerja';
const second = 'sama';
const merged = first + second;

console.log(merged); // Output: bekerjasama
```

> ⚠️ **Perhatian:** Simbol `+` punya fungsi ganda tergantung jenis operannya:
> - Jika salah satu operan adalah **string** → berfungsi sebagai operator string (penggabungan).
> - Jika kedua operan adalah **angka** → berfungsi sebagai operator aritmetika (penjumlahan).
>
> Contohnya, `"2" + 2` hasilnya bukan `4`, melainkan `"22"`, karena salah satu operannya adalah string.

---

##  Kesimpulan

- **Operator** adalah simbol untuk melakukan operasi, **operan** adalah nilai yang dioperasikan.
- Operator dikelompokkan menjadi **unary** (1 operan), **binary** (2 operan), dan **ternary** (3 operan).
- **Assignment operator** (`=`) untuk memberi/mengubah nilai variabel.
- **Arithmetic operator** untuk operasi matematika (`+`, `-`, `*`, `/`, `%`).
- **Comparison operator** untuk membandingkan nilai dan menghasilkan boolean.
- **Logical operator** (`&&`, `||`, `!`) untuk menyusun logika dari nilai boolean.
- **String operator** (`+`) untuk menggabungkan string — perlu hati-hati karena `+` juga dipakai untuk aritmetika.