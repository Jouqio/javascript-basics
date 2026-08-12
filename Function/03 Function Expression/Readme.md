# 03. Function Expression

## Apa itu Function Expression?

**Function Expression** adalah cara membuat function dengan **menyimpannya ke dalam sebuah variabel**. Function di sini diperlakukan seperti **nilai (value)** — sama seperti angka atau string.

```javascript
const namaVariabel = function (parameter) {
  // isi function
  return hasil;
};
```

### Contoh

```javascript
const hitungLuasSegitiga = function (alas, tinggi) {
  return 0.5 * alas * tinggi;
};

console.log(hitungLuasSegitiga(10, 6)); // 30
```

Perhatikan: function di atas **tidak punya nama** setelah kata kunci `function` — namanya didapat dari **variabel** `hitungLuasSegitiga` yang menyimpannya.

## Perbedaan Utama dengan Function Declaration

| Aspek | Function Declaration | Function Expression |
|---|---|---|
| Sintaks | `function nama() {}` | `const nama = function() {}` |
| Hoisting | ✅ Bisa dipanggil sebelum deklarasi | ❌ **Tidak bisa**, harus dideklarasikan dulu |
| Disimpan ke variabel? | ❌ Tidak | ✅ Ya |

## Bukti: Function Expression TIDAK Di-hoisting

```javascript
console.log(sapa("Budi")); // ❌ Error! Cannot access 'sapa' before initialization

const sapa = function (nama) {
  return "Halo, " + nama + "!";
};
```

Ini terjadi karena yang di-hoisting hanyalah **deklarasi variabelnya** (`const sapa`), bukan **isi function-nya**. Jadi saat baris pertama dijalankan, `sapa` memang sudah "ada", tapi belum diberi nilai (masih dalam **temporal dead zone** jika pakai `const`/`let`).

## Function Expression Bernama (Named Function Expression)

Function Expression **boleh** diberi nama, walau jarang dipakai. Nama ini hanya bisa diakses **di dalam function itu sendiri** (berguna untuk recursive function):

```javascript
const faktorial = function hitungFaktorial(n) {
  if (n <= 1) return 1;
  return n * hitungFaktorial(n - 1); // memanggil dirinya sendiri via nama internal
};

console.log(faktorial(5)); // 120
```

## Kapan Menggunakan Function Expression?

- Ketika function ingin diperlakukan sebagai **nilai** — misalnya disimpan di variabel, dikirim sebagai argument, atau dikembalikan dari function lain
- Ketika ingin memastikan function **hanya bisa dipakai setelah dideklarasikan** (kode lebih terprediksi, tidak bergantung hoisting)
- Sering dipakai dalam **callback function** (function yang dikirim sebagai argument ke function lain)

```javascript
// Function Expression sering dipakai sebagai callback
button.addEventListener("click", function () {
  console.log("Tombol diklik!");
});
```

Buka `contoh.html` untuk melihat perbandingan langsung antara Function Declaration dan Function Expression terkait hoisting.

➡️ Lanjut ke materi berikutnya: **04. Anonymous Function**
