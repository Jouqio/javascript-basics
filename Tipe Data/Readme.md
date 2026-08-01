#  Tipe Data di JavaScript

Ringkasan materi tentang tipe data primitif dasar di JavaScript, yaitu **String**, **Number**, dan **Boolean**.

---

##  Daftar Isi

- [Apa Itu Tipe Data](#-apa-itu-tipe-data)
- [String](#-string)
- [Number](#-number)
- [Boolean](#-boolean)
- [Kesimpulan](#-kesimpulan)

---

##  Apa Itu Tipe Data

Nilai yang dihasilkan dari sebuah *expression* disebut juga **data**. Data adalah elemen dasar yang disimpan dan diolah untuk membuat instruksi atau statement dalam pemrograman.

JavaScript memiliki beberapa **tipe data primitif**, di antaranya:

| Tipe Data | Keterangan |
|---|---|
| `string` | merepresentasikan teks |
| `number` | merepresentasikan angka (bulat maupun pecahan) |
| `boolean` | merepresentasikan nilai benar/salah (`true`/`false`) |
| `null` & `undefined` | merepresentasikan nilai kosong |

---

##  String

**String** adalah tipe data yang merepresentasikan teks, seperti nama, alamat, atau email. Nilai string diapit oleh tanda kutip, dan JavaScript mendukung tiga jenis tanda kutip:

- petik tunggal (`'...'`)
- petik ganda (`"..."`)
- backticks (`` `...` ``)

```js
"Ini merupakan contoh string di JavaScript"
'Ini merupakan contoh string di JavaScript'
`Ini merupakan contoh string di JavaScript`
```

> 📝 Tanda kutip pembuka dan penutup harus **sama**.

### Baris Baru dalam String

Untuk petik tunggal/ganda, baris baru harus ditulis dengan notasi `\n`. Sementara backticks mendukung baris baru secara langsung.

```js
"Baris pertama.\nBaris kedua."
'Baris pertama.\nBaris kedua.'
`Baris pertama.
Baris kedua.`
```

### Template Literals

Backticks juga disebut **template literals** karena memungkinkan kita menyisipkan JavaScript expression ke dalam string menggunakan notasi `${}`.

```js
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);
```

---

##  Number

**Number** merepresentasikan semua data berupa angka, baik bilangan bulat maupun pecahan. Nilai number ditulis langsung tanpa tanda kutip.

```js
40
3.14
5
3.333
```

### Nilai Spesial: `Infinity` dan `NaN`

- **`Infinity`** muncul saat melakukan operasi aritmetika yang tidak terdefinisi, misalnya membagi dengan nol.

```js
const result = 50 / 0;
console.log(result); // output: Infinity
```

- **`NaN`** (*Not-a-Number*) muncul saat nilai non-numerik dikonversi ke tipe number, misalnya mengonversi string yang bukan angka.

```js
const result = Number('Dicoding');
console.log(result); // output: NaN
```

> 📝 Konversi antar tipe data akan dibahas lebih lanjut setelah mengenal seluruh tipe data.

---

##  Boolean

**Boolean** adalah tipe data yang hanya memiliki dua kemungkinan nilai: `true` dan `false`. Umumnya digunakan untuk merepresentasikan kondisi "ya" (`true`) atau "tidak" (`false`).

```js
const completed = true;
const passed = false;

console.log(completed, passed); // output: true false
```

Nilai boolean juga sering dihasilkan dari operator perbandingan.

```js
const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)
```

---

##  Kesimpulan

- **String** merepresentasikan teks, bisa dibuat dengan petik tunggal, petik ganda, atau backticks (*template literals*).
- **Number** merepresentasikan angka, termasuk nilai spesial `Infinity` dan `NaN`.
- **Boolean** hanya memiliki dua nilai: `true` dan `false`, sering dihasilkan dari operator perbandingan.
- Memahami tipe data primitif ini penting sebagai dasar untuk mengelola dan mengolah data di JavaScript.