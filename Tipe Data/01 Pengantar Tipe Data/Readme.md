# 01 - Pengantar Tipe Data

## Apa itu Tipe Data?

**Tipe data (data type)** adalah kategori/jenis dari suatu nilai yang menentukan **apa yang bisa dilakukan** dengan nilai tersebut dan **bagaimana komputer menyimpannya**.

Bayangkan kamu punya kotak-kotak penyimpanan di rumah: kotak untuk baju, kotak untuk buku, kotak untuk alat masak. Kamu tidak akan menyimpan baju di kotak alat masak, kan? Begitu juga di pemrograman — setiap jenis data punya "kotak" (tipe data) masing-masing, dan setiap tipe data punya aturan dan kemampuan yang berbeda.

## Kenapa Tipe Data Penting?

- Menentukan operasi apa saja yang bisa dilakukan pada suatu nilai (misalnya angka bisa dijumlahkan, teks bisa digabungkan)
- Membantu kita menghindari bug/error yang tidak terduga
- Membantu program berjalan lebih efisien dan mudah dipahami

## JavaScript adalah Bahasa Dynamically Typed

JavaScript termasuk bahasa **dynamically typed**, artinya:

- Kita **tidak perlu menyatakan tipe data secara eksplisit** saat membuat variabel
- Tipe data suatu variabel bisa **berubah** tergantung nilai yang disimpan di dalamnya

```js
let data = 10;        // sekarang data bertipe Number
data = "Halo";         // sekarang data berubah jadi tipe String
data = true;            // sekarang berubah lagi jadi tipe Boolean
```

Ini berbeda dengan bahasa **statically typed** seperti Java atau C++, di mana tipe data harus ditentukan sejak awal dan tidak bisa berubah.

## Dua Kelompok Besar Tipe Data di JavaScript

### 1. Tipe Data Primitif (Primitive)
Nilai dasar yang **tidak bisa diubah (immutable)** dan disimpan langsung sebagai nilai. Ada 7 tipe primitif:

| Tipe Data | Contoh Nilai |
|---|---|
| `Number` | `10`, `3.14`, `-5` |
| `String` | `"Halo"`, `'Dunia'` |
| `Boolean` | `true`, `false` |
| `Undefined` | `undefined` |
| `Null` | `null` |
| `Symbol` | `Symbol("id")` |
| `BigInt` | `123456789012345678901234567890n` |

### 2. Tipe Data Non-Primitif (Reference)
Struktur data yang lebih kompleks, disimpan sebagai **referensi (alamat memori)**, bukan nilai langsung:

| Tipe Data | Contoh Nilai |
|---|---|
| `Object` | `{ nama: "Budi", umur: 20 }` |
| `Array` | `[1, 2, 3]` (sebenarnya jenis khusus dari Object) |
| `Function` | `function() {}` |

## Perbedaan Utama Primitif vs Non-Primitif

- **Primitif**: setiap kali disalin ke variabel lain, nilainya **dicopy sepenuhnya** (independen)
- **Non-Primitif**: setiap kali disalin, yang dicopy adalah **referensinya**, sehingga kedua variabel menunjuk ke data yang **sama**

Materi selanjutnya akan membahas satu per satu tipe data ini secara detail.

## Poin Penting

- Tipe data menentukan jenis nilai dan kemampuan/operasi yang bisa dilakukan
- JavaScript bersifat dynamically typed — tipe data variabel bisa berubah-ubah
- Ada 7 tipe data primitif dan beberapa tipe data non-primitif (Object, Array, Function)
- Primitif disalin sebagai nilai, non-primitif disalin sebagai referensi

Lanjut ke → [02 Number](../02%20Number/Readme.md)
