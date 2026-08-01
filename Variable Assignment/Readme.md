# 📘 Variable Assignment di JavaScript

Ringkasan materi tentang apa itu variabel, cara membuatnya, dan aturan-aturan penamaan variabel yang berlaku di JavaScript.

---

##  Daftar Isi

- [Apa Itu Variabel](#-apa-itu-variabel)
- [Aturan Penamaan Variabel](#-aturan-penamaan-variabel)
  - [1. Tidak Boleh Ada Nama yang Sama dalam Cakupan yang Sama](#1-tidak-boleh-ada-nama-yang-sama-dalam-cakupan-yang-sama)
  - [2. Hanya Boleh Terdiri dari Karakter Tertentu](#2-hanya-boleh-terdiri-dari-karakter-tertentu)
  - [3. Tidak Boleh Diawali dengan Angka](#3-tidak-boleh-diawali-dengan-angka)
- [Kesimpulan](#-kesimpulan)

---

##  Apa Itu Variabel

**Variabel** adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (*expression*).

Di JavaScript, ada dua sintaksis utama untuk membuat variabel:

| Keyword | Keterangan |
|---|---|
| `const` | nilai variabel tidak bisa diubah setelah didefinisikan |
| `let` | nilai variabel bisa diubah/di-assign ulang |

```js
const companyName = 'Dicoding';
let employeeCount = 10;
```

---

##  Aturan Penamaan Variabel

Penamaan variabel di JavaScript tidak boleh sembarangan — ada beberapa aturan yang wajib ditaati.

### 1. Tidak Boleh Ada Nama yang Sama dalam Cakupan yang Sama

Nama variabel harus **unik** dalam cakupannya (*scope*). Kita tidak bisa mendeklarasikan ulang variabel dengan nama yang sudah ada di cakupan yang sama.

```js
// Company data
const name = 'Dicoding';
const legal = 'LLC';

// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';
```

Namun, nama yang sama **diperbolehkan** jika cakupannya berbeda — misalnya berada di dalam fungsi yang berbeda.

```js
function printCompanyInfo() {
  const name = 'Lion'; // <- nama variabel sama
  const legal = 'LLC';

  console.log('Company name:', name);
  console.log('Legal type:', legal);
}

function printEmployeeInfo() {
  const name = 'John'; // <- nama variabel sama
  const division = 'IT';

  console.log('Employee name:', name);
  console.log('Division:', division);
}

printCompanyInfo();
printEmployeeInfo();
```

> 📝 **Catatan:** Konsep cakupan (*scope*) dan fungsi akan dibahas lebih lanjut pada modul terpisah.

### 2. Hanya Boleh Terdiri dari Karakter Tertentu

Nama variabel hanya boleh mengandung: **huruf**, **angka**, **garis bawah** (`_`), dan **tanda dolar** (`$`).

```js
// ✅ nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;

// ❌ nama variabel yang salah
const first-name = 'Fulan';   // tidak boleh mengandung karakter -
const last name = 'Lestari';  // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @

// ..dan lain-lain
```

### 3. Tidak Boleh Diawali dengan Angka

Angka boleh digunakan dalam nama variabel, tetapi **tidak boleh berada di awal**.

```js
// ✅ nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';

// ❌ nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';
```

---

##  Kesimpulan

- Variabel adalah wadah untuk menyimpan nilai, dibuat dengan `const` atau `let`.
- Nama variabel harus **unik** dalam cakupan yang sama, tapi boleh sama jika berbeda cakupan (misalnya di fungsi berbeda).
- Nama variabel hanya boleh berisi **huruf, angka, underscore (`_`), dan tanda dolar (`$`)** — tanpa spasi atau karakter khusus lain.
- Nama variabel **tidak boleh diawali dengan angka**.