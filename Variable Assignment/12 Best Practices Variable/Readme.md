# 12. Best Practices Variable

Kumpulan tips agar penggunaan variabel dalam kodemu lebih **rapi, aman, dan mudah dipahami** orang lain (atau dirimu sendiri di masa depan).

## 1. Gunakan `const` sebagai Default, `let` Jika Perlu, Hindari `var`

```js
// Disarankan
const namaAplikasi = "TodoApp";
let jumlahTugas = 0;

// Hindari
var status = "aktif";
```

## 2. Beri Nama Variabel yang Deskriptif

```js
// Kurang jelas
let d = new Date();
let x = 17;

// Lebih jelas
let tanggalSekarang = new Date();
let umurMinimal = 17;
```

## 3. Gunakan `camelCase` secara Konsisten

```js
let namaLengkap = "Budi Santoso"; // konsisten camelCase
let jumlahBarang = 5;
let isValid = true;
```

## 4. Satu Variabel, Satu Tujuan yang Jelas

```js
// Kurang baik: variabel dipakai untuk hal yang berbeda-beda di tempat berbeda
let data = "Budi";
data = 25; // sekarang jadi umur? membingungkan!

// Lebih baik: variabel terpisah sesuai tujuannya
let nama = "Budi";
let umur = 25;
```

## 5. Deklarasikan Variabel Sedekat Mungkin dengan Penggunaannya

```js
// Kurang baik: dideklarasikan jauh dari tempat dipakai
let hasil;
// ...banyak baris kode lain di antara sini...
hasil = 10 + 5;
console.log(hasil);

// Lebih baik: deklarasi dekat dengan penggunaan
let hasil = 10 + 5;
console.log(hasil);
```

## 6. Hindari Variabel Global yang Tidak Perlu

```js
// Kurang baik: variabel global yang sebenarnya hanya dipakai di satu fungsi
let hasilSementara;

function hitung() {
  hasilSementara = 10 + 5;
  return hasilSementara;
}

// Lebih baik: variabel lokal di dalam fungsi yang membutuhkannya
function hitung() {
  let hasilSementara = 10 + 5;
  return hasilSementara;
}
```

Variabel global lebih rawan konflik nama dan lebih sulit dilacak perubahannya, terutama di project besar.

## 7. Konversi Tipe Data Secara Eksplisit (Hindari Mengandalkan Coercion)

```js
// Kurang aman
let total = hargaInput + jumlahInput;

// Lebih aman
let total = Number(hargaInput) + Number(jumlahInput);
```

## 8. Gunakan Destructuring untuk Kode yang Lebih Ringkas

```js
// Kurang ringkas
let nama = user.nama;
let umur = user.umur;

// Lebih ringkas
let { nama, umur } = user;
```

## 9. Hindari "Magic Number/String" — Gunakan Konstanta Bernama

**Magic number/string** adalah nilai literal yang muncul langsung di kode tanpa penjelasan, sehingga maknanya tidak jelas.

```js
// Kurang jelas: apa maksud 0.11 dan 17 di sini?
let totalHarga = harga + (harga * 0.11);
if (umur >= 17) { ... }

// Lebih jelas dengan konstanta bernama
const PAJAK_PPN = 0.11;
const UMUR_MINIMAL_KTP = 17;

let totalHarga = harga + (harga * PAJAK_PPN);
if (umur >= UMUR_MINIMAL_KTP) { ... }
```

## 10. Jangan Deklarasikan Variabel yang Tidak Dipakai

```js
// Kurang baik: variabel dideklarasikan tapi tidak pernah dipakai
let tidakDipakai = "halo";
let nama = "Budi";
console.log(nama);

// Lebih baik: hanya deklarasikan yang benar-benar dibutuhkan
let nama = "Budi";
console.log(nama);
```

Kebanyakan code editor modern (seperti VS Code) akan **otomatis memperingatkan** variabel yang dideklarasikan tapi tidak pernah dipakai.

## Ringkasan Checklist

- [ ] Gunakan `const` sebagai default, `let` jika perlu berubah, hindari `var`
- [ ] Nama variabel deskriptif dan konsisten `camelCase`
- [ ] Satu variabel untuk satu tujuan yang jelas
- [ ] Deklarasikan variabel sedekat mungkin dengan penggunaannya
- [ ] Hindari variabel global yang tidak perlu
- [ ] Konversi tipe data secara eksplisit, jangan andalkan coercion
- [ ] Manfaatkan destructuring untuk kode lebih ringkas
- [ ] Hindari magic number/string, gunakan konstanta bernama
- [ ] Hapus variabel yang tidak dipakai

➡️ Lanjut ke materi terakhir: **13 Latihan dan Quiz**
