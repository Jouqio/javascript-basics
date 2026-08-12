# 05. Arrow Function

## Apa itu Arrow Function?

**Arrow Function** (fungsi panah) adalah cara **modern dan ringkas** untuk menulis function di JavaScript (diperkenalkan di ES6/2015), menggunakan simbol `=>` (panah).

```javascript
const namaVariabel = (parameter) => {
  // isi function
  return hasil;
};
```

### Perbandingan dengan Function Expression Biasa

```javascript
// Function Expression biasa
const tambah = function (a, b) {
  return a + b;
};

// Arrow Function - lebih ringkas
const tambahArrow = (a, b) => {
  return a + b;
};
```

## Bentuk-Bentuk Penulisan Arrow Function

Arrow function punya beberapa **penyederhanaan sintaks** tergantung jumlah parameter dan isi function:

### 1. Implicit Return (tanpa `{}` dan `return`)
Jika isi function hanya **satu baris ekspresi**, kita bisa hilangkan `{}` dan `return` — hasilnya otomatis dikembalikan.

```javascript
const tambah = (a, b) => a + b;
console.log(tambah(3, 4)); // 7
```

### 2. Satu Parameter (tanda kurung boleh dihilangkan)

```javascript
const kuadrat = (n) => n * n;
// atau tanpa kurung:
const kuadrat2 = n => n * n;
```

### 3. Tanpa Parameter (tanda kurung wajib kosong)

```javascript
const sapa = () => "Halo!";
```

### 4. Banyak Baris (tetap butuh `{}` dan `return`)

```javascript
const hitungBMI = (berat, tinggi) => {
  const tinggiMeter = tinggi / 100;
  const bmi = berat / (tinggiMeter * tinggiMeter);
  return bmi.toFixed(2);
};
```

### 5. Mengembalikan Object (butuh kurung tambahan)

⚠️ Ini sering bikin bingung pemula: jika ingin langsung mengembalikan **object literal** dengan implicit return, harus dibungkus tanda kurung `()`, karena `{}` akan dianggap sebagai **body function**, bukan object.

```javascript
// ❌ SALAH - {} dianggap body function, bukan object
const buatUser = (nama) => { nama: nama }; // Error / hasilnya undefined

// ✅ BENAR - dibungkus tanda kurung ()
const buatUser = (nama) => ({ nama: nama });
console.log(buatUser("Budi")); // { nama: "Budi" }
```

## Perbedaan Penting: Arrow Function Tidak Punya `this` Sendiri

Ini adalah **perbedaan paling krusial** antara arrow function dan function biasa: **arrow function tidak memiliki `this` miliknya sendiri**. Ia akan menggunakan `this` dari **lingkup (scope) di luarnya** (disebut *lexical this*).

```javascript
const objek = {
  nama: "Kelas Pemrograman",
  anggota: ["Budi", "Ani", "Rina"],

  // Function biasa: "this" merujuk ke objek pemanggil (di sini: objek "objek")
  tampilkanBiasa: function () {
    this.anggota.forEach(function (nama) {
      // ❌ "this" di sini BUKAN objek "objek" lagi (undefined di strict mode)
      console.log(this?.nama, "-", nama);
    });
  },

  // Arrow function: "this" mengikuti lingkup luar (yaitu "this" milik tampilkanArrow)
  tampilkanArrow: function () {
    this.anggota.forEach((nama) => {
      // ✅ "this" di sini TETAP merujuk ke objek "objek"
      console.log(this.nama, "-", nama);
    });
  }
};
```

👉 Karena perilaku `this` ini, arrow function **tidak cocok** dipakai sebagai method objek yang butuh akses `this` ke objek itu sendiri, tapi **sangat cocok** dipakai sebagai callback di dalam method (seperti contoh `tampilkanArrow` di atas).

## Perbandingan Ringkas

| Aspek | Function Biasa | Arrow Function |
|---|---|---|
| Sintaks | Lebih panjang | Lebih ringkas |
| Implicit return | ❌ Tidak ada | ✅ Ada (untuk 1 ekspresi) |
| Punya `this` sendiri? | ✅ Ya | ❌ Tidak (ikut scope luar) |
| Bisa jadi constructor (`new`)? | ✅ Ya | ❌ Tidak bisa |
| Cocok untuk method objek? | ✅ Ya | ⚠️ Kurang cocok (masalah `this`) |
| Cocok untuk callback? | ✅ Ya | ✅ Sangat cocok |

## Kapan Menggunakan Arrow Function?

- Callback singkat (`.map()`, `.filter()`, `.forEach()`, `.reduce()`)
- Ketika ingin mempertahankan `this` dari scope luar (misalnya di dalam method objek)
- Function utility sederhana yang tidak butuh `this`

## Kapan TIDAK Menggunakan Arrow Function?

- Sebagai **method** di dalam objek yang butuh akses `this` ke objek itu sendiri
- Sebagai **constructor function** (tidak bisa dipakai dengan `new`)

Buka `contoh.html` untuk melihat berbagai bentuk arrow function dan perbedaan `this`-nya secara langsung.

➡️ Lanjut ke materi berikutnya: **06. Higher Order Function**
