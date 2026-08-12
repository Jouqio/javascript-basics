# 10. Truthy dan Falsy

## Apa itu Truthy dan Falsy?

Di JavaScript, kondisi pada `if` **tidak harus** berupa nilai boolean murni (`true`/`false`). JavaScript akan otomatis **mengonversi** nilai apapun menjadi boolean saat dievaluasi sebagai kondisi. Nilai yang dikonversi menjadi:

- **`true`** disebut **truthy**
- **`false`** disebut **falsy**

## Daftar Nilai Falsy (WAJIB DIHAFAL)

Di JavaScript, hanya ada **7 nilai** yang dianggap **falsy**. Selain ketujuh nilai ini, semuanya dianggap **truthy**.

| Nilai Falsy | Keterangan |
|-------------|------------|
| `false` | boolean false |
| `0` | angka nol |
| `-0` | negatif nol |
| `""` atau `''` | string kosong |
| `null` | tidak ada nilai |
| `undefined` | variabel belum diberi nilai |
| `NaN` | Not a Number |

## Contoh Nilai Truthy

Semua nilai selain 7 di atas adalah **truthy**, termasuk yang mungkin terlihat "kosong" atau "nol" tapi sebenarnya bukan:

```js
console.log(Boolean("0"));    // true! ("0" adalah string berisi karakter, bukan string kosong)
console.log(Boolean(" "));    // true! (spasi tetap dianggap ada isinya)
console.log(Boolean([]));     // true! (array kosong tetap truthy)
console.log(Boolean({}));     // true! (object kosong tetap truthy)
console.log(Boolean(-1));     // true! (angka negatif tetap truthy, hanya 0 yang falsy)
```

## Contoh Penggunaan dalam If Statement

```js
let nama = "";

if (nama) {
  console.log("Halo, " + nama);
} else {
  console.log("Nama tidak boleh kosong");
}

// Output: Nama tidak boleh kosong
// (karena "" adalah falsy)
```

```js
let daftarBelanja = [];

if (daftarBelanja.length) {
  console.log("Ada barang di keranjang");
} else {
  console.log("Keranjang masih kosong");
}

// Output: Keranjang masih kosong
// (karena .length dari array kosong adalah 0, yang falsy)
```

## Kenapa Konsep Ini Penting?

Truthy/falsy sering dipakai untuk membuat validasi sederhana tanpa harus menulis perbandingan panjang:

```js
// Cara panjang
if (nama !== "" && nama !== null && nama !== undefined) {
  console.log("Nama valid");
}

// Cara singkat memanfaatkan truthy/falsy
if (nama) {
  console.log("Nama valid");
}
```

## ⚠️ Hati-hati dengan Nilai yang Terlihat "Falsy" tapi Sebenarnya Valid

```js
let jumlahBarang = 0; // stok habis, ini adalah nilai valid, bukan "tidak ada data"

if (jumlahBarang) {
  console.log("Stok: " + jumlahBarang);
} else {
  console.log("Data tidak valid"); // pesan ini KURANG TEPAT untuk kasus stok = 0
}
```

Untuk kasus seperti ini, sebaiknya gunakan perbandingan eksplisit:

```js
if (jumlahBarang === 0) {
  console.log("Stok habis");
} else if (jumlahBarang > 0) {
  console.log("Stok: " + jumlahBarang);
} else {
  console.log("Data tidak valid");
}
```

**Kesimpulan:** manfaatkan truthy/falsy untuk kode yang lebih ringkas, tapi tetap **berhati-hati** ketika angka `0` atau string kosong `""` adalah nilai yang **valid secara bisnis** (bukan berarti "kosong/tidak ada").

➡️ Lanjut ke materi berikutnya: **11 Short Circuit Evaluation**
