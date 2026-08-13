# 06. Dynamic Typing

## Apa itu Dynamic Typing?

**Dynamic Typing** (Pengetikan Dinamis) berarti tipe data sebuah variabel di JavaScript **tidak ditentukan secara tetap** saat dideklarasikan — variabel yang sama bisa **berganti tipe data** kapan saja hanya dengan memberinya nilai baru.

Ini berbeda dengan bahasa **statically typed** (seperti Java, C++), di mana kamu harus menentukan tipe data sejak awal dan tidak bisa diubah.

## Contoh Dynamic Typing

```js
let data = "Halo"; // data bertipe string
console.log(typeof data); // "string"

data = 100; // sekarang data bertipe number
console.log(typeof data); // "number"

data = true; // sekarang data bertipe boolean
console.log(typeof data); // "boolean"
```

Variabel `data` di atas **berganti tipe** tiga kali, dan JavaScript **tidak melarangnya** sama sekali.

## Perbandingan dengan Bahasa Statically Typed

```java
// Contoh di Java (statically typed) - HANYA ilustrasi, bukan JavaScript
int umur = 25;
umur = "dua puluh lima"; // ERROR! Tidak bisa mengubah int menjadi String
```

```js
// Di JavaScript, ini DIPERBOLEHKAN
let umur = 25;
umur = "dua puluh lima"; // OK, tidak error
```

## Kelebihan Dynamic Typing

- **Lebih fleksibel** dan cepat untuk menulis kode, terutama untuk prototyping
- Tidak perlu mendeklarasikan tipe data secara eksplisit

## ⚠️ Kekurangan Dynamic Typing

- **Rawan bug** karena tipe data bisa berubah tanpa disengaja
- Kesalahan tipe data baru diketahui **saat program dijalankan** (runtime), bukan sebelumnya
- Kode menjadi lebih sulit "ditebak" tanpa membaca detail logikanya

```js
function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3));       // 8 (sesuai harapan)
console.log(tambah("5", "3"));   // "53" (string digabung, bukan dijumlahkan!)
console.log(tambah(5, "3"));     // "53" (tercampur, hasil tak terduga)
```

## Cara Menghindari Masalah Dynamic Typing

1. **Konsisten** — jangan mengubah tipe data variabel yang sama di tengah jalan tanpa alasan jelas
2. **Validasi** input, terutama dari user atau API eksternal, sebelum digunakan
3. Gunakan **TypeScript** (bahasa yang dibangun di atas JavaScript dengan static typing) untuk project besar — di luar cakupan materi dasar ini

```js
// Kurang baik: variabel berganti tipe tanpa alasan jelas
let hasil = 10;
hasil = "sepuluh"; // membingungkan, kenapa tiba-tiba jadi string?

// Lebih baik: konsisten dengan satu tipe data
let hasilAngka = 10;
let hasilTeks = "sepuluh"; // gunakan variabel terpisah jika memang butuh keduanya
```

## Contoh Nyata: Kenapa Ini Perlu Diwaspadai

```js
let umurInput = "25"; // sering terjadi, karena input form selalu berupa string

console.log(umurInput + 5); // "255" (bukan 30!) karena "25" digabung sebagai teks

// Solusi: konversi dulu ke number sebelum dipakai untuk perhitungan
let umurAngka = Number(umurInput);
console.log(umurAngka + 5); // 30 (benar)
```

Materi konversi tipe data akan dibahas lebih lengkap di **11 Type Conversion dan Coercion**.

➡️ Lanjut ke materi berikutnya: **07 Scope Variable**
