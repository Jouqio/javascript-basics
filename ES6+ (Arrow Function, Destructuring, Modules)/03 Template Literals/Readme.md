# 03. Template Literals

> Cara baru menulis string yang lebih mudah dibaca, mendukung interpolasi variabel dan multi-baris.

## Tujuan Pembelajaran

- Memahami syntax template literal dengan backtick
- Melakukan interpolasi variabel dan ekspresi di dalam string
- Menulis string multi-baris tanpa karakter escape

## Masalah Penggabungan String Cara Lama

Sebelum ES6, menggabungkan variabel ke dalam string harus pakai operator `+`, yang cepat berantakan kalau variabelnya banyak.

```js
var nama = "Syauqi";
var umur = 20;
var pesan = "Halo, nama saya " + nama + " dan umur saya " + umur + " tahun.";
console.log(pesan);
```

## Template Literal: Pakai Backtick

Template literal ditulis dengan tanda **backtick** (`` ` ``), bukan kutip satu/dua. Variabel disisipkan langsung dengan `${namaVariabel}` — disebut *interpolasi*.

```js
const nama = "Syauqi";
const umur = 20;
const pesan = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;
console.log(pesan);
// Halo, nama saya Syauqi dan umur saya 20 tahun.
```

## Bisa Diisi Ekspresi, Bukan Cuma Variabel

Di dalam `${ }` boleh diisi ekspresi JavaScript apa pun — operasi matematika, pemanggilan fungsi, bahkan kondisi ternary.

```js
const harga = 15000;
const qty = 3;
console.log(`Total: Rp${harga * qty}`); // Total: Rp45000

function sapa(nama) {
  return "Halo, " + nama;
}
console.log(`Pesan: ${sapa("Syauqi")}`); // Pesan: Halo, Syauqi

const nilai = 85;
console.log(`Status: ${nilai >= 75 ? "Lulus" : "Tidak Lulus"}`); // Status: Lulus
```

## String Multi-baris Tanpa \n

Dengan string biasa, baris baru harus ditulis manual dengan `\n`. Dengan template literal, cukup tekan Enter di dalam backtick.

```js
// Cara lama
var pesanLama = "Baris satu\n" + "Baris dua\n" + "Baris tiga";

// Cara ES6+
const pesanBaru = `Baris satu
Baris dua
Baris tiga`;

console.log(pesanBaru);
```

> **Tips:** Template literal juga sangat berguna untuk menulis potongan HTML atau query yang panjang, karena tetap mudah dibaca meski multi-baris.

## Latihan

Ubah kode berikut menjadi versi template literal:

```js
var produk = "Sepatu";
var harga = 250000;
var diskon = 10;
var pesan = "Produk " + produk + " harga Rp" + harga + " diskon " + diskon + "%";
```

<details>
<summary>Lihat Jawaban</summary>

```js
const produk = "Sepatu";
const harga = 250000;
const diskon = 10;
const pesan = `Produk ${produk} harga Rp${harga} diskon ${diskon}%`;
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← let dan const](../02 let dan const/Readme.md) | [Arrow Function →](../04 Arrow Function/Readme.md)
