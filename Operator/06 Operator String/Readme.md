# 06. Operator String

## Operator `+` untuk String: Concatenation (Penggabungan)

Selain untuk penjumlahan angka, operator `+` juga digunakan untuk **menggabungkan (concatenate)** dua atau lebih string menjadi satu string baru.

```javascript
const depan = "Budi";
const belakang = "Santoso";
const namaLengkap = depan + " " + belakang;

console.log(namaLengkap); // "Budi Santoso"
```

## Operator `+=` untuk String

Sama seperti pada angka, `+=` bisa dipakai untuk **menambahkan** teks ke string yang sudah ada.

```javascript
let pesan = "Halo";
pesan += ", ";
pesan += "Dunia!";

console.log(pesan); // "Halo, Dunia!"
```

## Menggabungkan String dengan Tipe Data Lain

Ketika salah satu operand adalah **string**, operator `+` akan **mengubah** operand lain menjadi string juga (seperti dibahas di materi Operator Aritmatika):

```javascript
console.log("Umur saya: " + 20);        // "Umur saya: 20"
console.log("Status: " + true);          // "Status: true"
console.log("Data: " + [1, 2, 3]);       // "Data: 1,2,3" (array diubah jadi string dipisah koma)
console.log("Objek: " + { a: 1 });       // "Objek: [object Object]" (kurang berguna untuk object!)
```

⚠️ Untuk menggabungkan object ke dalam string agar terbaca jelas, sebaiknya gunakan `JSON.stringify()`:

```javascript
console.log("Data: " + JSON.stringify({ a: 1 })); // "Data: {"a":1}"
```

## Alternatif Modern: Template Literals (Lebih Direkomendasikan!)

Sejak ES6 (2015), JavaScript memiliki cara yang **jauh lebih mudah dibaca** untuk menggabungkan string, yaitu **Template Literals**, menggunakan tanda **backtick** (`` ` ``) alih-alih tanda kutip biasa.

```javascript
const nama = "Budi";
const umur = 20;

// Cara lama - operator + (kurang mudah dibaca jika banyak variabel)
const pesanLama = "Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.";

// Cara modern - Template Literals (lebih mudah dibaca)
const pesanBaru = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;

console.log(pesanLama); // sama persis hasilnya
console.log(pesanBaru); // sama persis hasilnya
```

### Keunggulan Template Literals

1. **Lebih mudah dibaca**, terutama jika menggabungkan banyak variabel
2. Bisa berisi **ekspresi**, bukan hanya variabel:

```javascript
const a = 5;
const b = 3;
console.log(`Hasil dari ${a} + ${b} adalah ${a + b}`); // "Hasil dari 5 + 3 adalah 8"
```

3. Mendukung **multi-line string** secara langsung (tanpa perlu `\n` manual):

```javascript
const puisi = `Baris pertama
Baris kedua
Baris ketiga`;

console.log(puisi);
// Baris pertama
// Baris kedua
// Baris ketiga
```

## Operator Perbandingan pada String

Seperti dibahas sekilas di materi sebelumnya, operator `<` dan `>` bisa membandingkan string secara **alfabetis (leksikografis)**:

```javascript
console.log("apel" < "jeruk"); // true
console.log("budi" === "Budi"); // false (huruf besar/kecil dianggap BEDA)
```

👉 Untuk membandingkan string **tanpa** memedulikan huruf besar/kecil, gunakan `.toLowerCase()` atau `.toUpperCase()` terlebih dahulu:

```javascript
console.log("Budi".toLowerCase() === "budi".toLowerCase()); // true
```

## Ringkasan: Kapan Pakai `+` vs Template Literals?

| Situasi | Rekomendasi |
|---|---|
| Menggabungkan 1-2 string sederhana | `+` boleh saja, cukup jelas |
| Menggabungkan banyak variabel/ekspresi | **Template Literals** (jauh lebih mudah dibaca) |
| Butuh string multi-baris | **Template Literals** (wajib, `+` tidak praktis) |

👉 **Best practice modern:** Sebagian besar developer JavaScript saat ini **lebih memilih Template Literals** untuk hampir semua kasus penggabungan string, karena lebih rapi dan mudah di-maintain.

Buka `contoh.html` untuk membandingkan operator `+` dan Template Literals secara langsung.

➡️ Lanjut ke materi berikutnya: **07. Operator Ternary (Kondisional)**
