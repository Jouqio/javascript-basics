# 08 - Tipe Data Khusus (Symbol dan BigInt)

## Kenapa Materi Ini Ada?

Setelah mempelajari 5 tipe data yang paling sering dipakai sehari-hari (Number, String, Boolean, Null/Undefined, Array/Object), ada 2 tipe data primitif lain yang **jarang dipakai pemula**, tapi penting untuk diketahui supaya tidak bingung saat menemukannya di kode orang lain.

## Symbol

**Symbol** adalah tipe data yang menghasilkan **nilai unik yang tidak akan pernah sama**, walaupun deskripsinya sama persis.

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false! Walaupun deskripsinya sama, nilainya tetap BEDA
```

### Kegunaan Symbol

Symbol biasanya dipakai untuk membuat **key object yang dijamin tidak akan bentrok/tertimpa** dengan key lain, terutama dalam pengembangan library atau ketika bekerja dengan banyak kode dari sumber berbeda.

```js
const idUnik = Symbol("userId");
let user = {
  nama: "Budi",
  [idUnik]: 12345, // key Symbol, dijamin tidak akan bentrok dengan key lain
};
```

Untuk pemula, Symbol **tidak perlu terlalu dikhawatirkan** — cukup tahu bahwa tipe data ini ada dan fungsinya untuk membuat identitas yang benar-benar unik.

## BigInt

**BigInt** adalah tipe data untuk menyimpan **bilangan bulat yang sangat besar**, melebihi batas maksimum yang bisa ditangani oleh tipe `Number` biasa.

### Masalah pada Number Biasa

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (batas aman Number)
console.log(9007199254740991 + 1); // 9007199254740992 (benar)
console.log(9007199254740991 + 2); // 9007199254740992 (SALAH! harusnya +993)
```

Di atas angka tersebut, `Number` **kehilangan ketelitian (presisi)**.

### Solusi dengan BigInt

Tambahkan huruf `n` di akhir angka untuk membuat BigInt:

```js
let angkaBesar = 9007199254740993n; // huruf 'n' di akhir menandakan BigInt
console.log(angkaBesar + 1n); // 9007199254740994n (tetap presisi!)
```

### Aturan Penting BigInt

- BigInt **tidak bisa dicampur langsung** dengan Number biasa dalam operasi matematika
```js
console.log(10n + 5); // Error! Tidak bisa mencampur BigInt dengan Number
console.log(10n + 5n); // 15n (harus sama-sama BigInt)
```

### Kapan BigInt Dipakai?

BigInt jarang dipakai di aplikasi sehari-hari, tapi berguna untuk:
- Perhitungan kriptografi
- ID unik yang sangat besar (misalnya di sistem keuangan/blockchain)
- Perhitungan ilmiah dengan angka sangat besar

## Poin Penting

- Symbol = tipe data untuk nilai **unik** yang tidak akan pernah sama, dipakai sebagai key object yang aman dari bentrok
- BigInt = tipe data untuk bilangan bulat sangat besar (di luar batas aman Number), ditulis dengan akhiran `n`
- BigInt tidak bisa langsung dioperasikan bersama Number biasa
- Kedua tipe data ini jarang dipakai pemula, tapi penting diketahui keberadaannya

Lanjut ke → [09 Type Conversion dan Coercion](../09%20Type%20Conversion%20dan%20Coercion/Readme.md)
