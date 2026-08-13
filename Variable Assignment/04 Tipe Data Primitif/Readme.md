# 04. Tipe Data Primitif

## Apa itu Tipe Data?

**Tipe data** menentukan **jenis nilai** yang disimpan dalam sebuah variabel, dan menentukan operasi apa saja yang bisa dilakukan pada nilai tersebut. JavaScript punya beberapa tipe data **primitif** (tipe data dasar, bukan objek).

## 7 Tipe Data Primitif di JavaScript

### 1. `String` — Teks

```js
let nama = "Budi";
let kalimat = 'Ini juga string';
let templateString = `Halo, ${nama}!`; // template literal, bisa sisipkan variabel

console.log(typeof nama); // "string"
```

### 2. `Number` — Angka (Bulat & Desimal)

Berbeda dengan banyak bahasa lain, JavaScript **tidak membedakan** integer dan float — semuanya `Number`.

```js
let umur = 25;
let harga = 15000.50;
let negatif = -10;

console.log(typeof umur); // "number"
```

### 3. `Boolean` — Benar/Salah

```js
let sudahLogin = true;
let sudahBayar = false;

console.log(typeof sudahLogin); // "boolean"
```

### 4. `Undefined` — Variabel Sudah Dideklarasikan tapi Belum Diberi Nilai

```js
let alamat;
console.log(alamat); // undefined
console.log(typeof alamat); // "undefined"
```

### 5. `Null` — Sengaja Dikosongkan (Tidak Ada Nilai)

```js
let dataUser = null; // sengaja diisi "kosong" oleh programmer
console.log(dataUser); // null
console.log(typeof dataUser); // "object" (ini adalah bug lama di JavaScript, tapi tetap seperti ini hingga sekarang)
```

### 6. `BigInt` — Angka Sangat Besar (Jarang Dipakai Pemula)

```js
let angkaBesar = 123456789012345678901234567890n; // diakhiri huruf "n"
console.log(typeof angkaBesar); // "bigint"
```

### 7. `Symbol` — Nilai Unik (Jarang Dipakai Pemula)

```js
let id = Symbol("id");
console.log(typeof id); // "symbol"
```

## Perbedaan `undefined` vs `null`

Ini sering membingungkan pemula:

| | `undefined` | `null` |
|---|---|---|
| Artinya | Variabel belum diberi nilai (otomatis oleh JS) | Sengaja dikosongkan (manual oleh programmer) |
| Kapan muncul | Deklarasi tanpa nilai awal | Ditulis eksplisit oleh programmer |

```js
let a;           // undefined (JS otomatis)
let b = null;    // null (programmer sengaja kosongkan)
```

## Mengecek Tipe Data dengan `typeof`

```js
console.log(typeof "Halo");      // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk/bug lama JavaScript)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (array juga dianggap object)
console.log(typeof function(){}); // "function"
```

## Tipe Data Primitif vs Non-Primitif (Reference Type)

Selain 7 tipe primitif di atas, JavaScript juga punya tipe **non-primitif** seperti `Object`, `Array`, dan `Function` — yang di luar cakupan materi dasar ini, tapi penting untuk diketahui bedanya:

- **Primitif**: disimpan langsung sebagai nilai (`string`, `number`, `boolean`, dll)
- **Non-primitif**: disimpan sebagai referensi ke lokasi memori (`object`, `array`, `function`)

```js
let a = 5;
let b = a; // b menyalin NILAI dari a
b = 10;
console.log(a); // 5 (a tidak ikut berubah, karena primitif disalin sebagai nilai)

let obj1 = { angka: 5 };
let obj2 = obj1; // obj2 menyalin REFERENSI ke obj1, bukan nilai
obj2.angka = 10;
console.log(obj1.angka); // 10 (obj1 IKUT berubah, karena keduanya menunjuk objek yang sama!)
```

➡️ Lanjut ke materi berikutnya: **05 Assignment Operator**
