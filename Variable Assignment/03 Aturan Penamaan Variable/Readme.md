# 03. Aturan Penamaan Variable

## Aturan Wajib (Jika Dilanggar, Kode Error)

JavaScript punya aturan **wajib** untuk nama variabel. Jika dilanggar, kode akan menghasilkan `SyntaxError`.

1. **Hanya boleh mengandung**: huruf (a-z, A-Z), angka (0-9), underscore (`_`), dan dollar sign (`$`)
2. **Tidak boleh diawali dengan angka**
3. **Tidak boleh menggunakan reserved keyword** (kata kunci bawaan JavaScript seperti `let`, `const`, `if`, `function`, dll)
4. **Case-sensitive** — `nama` dan `Nama` dianggap **dua variabel yang berbeda**

```js
let nama1 = "Budi";     // ✅ Valid (huruf + angka, tidak diawali angka)
let _privat = "rahasia"; // ✅ Valid (boleh diawali underscore)
let $harga = 5000;       // ✅ Valid (boleh diawali dollar sign)

let 1nama = "Budi";      // ❌ SyntaxError, tidak boleh diawali angka
let nama-user = "Budi";  // ❌ SyntaxError, tanda hubung tidak diperbolehkan
let let = "Budi";        // ❌ SyntaxError, "let" adalah reserved keyword
```

## Contoh Reserved Keyword yang Tidak Boleh Dipakai

`let`, `const`, `var`, `function`, `if`, `else`, `for`, `while`, `return`, `class`, `new`, `this`, `true`, `false`, `null`, `undefined`, `typeof`, `import`, `export`, dan banyak lagi.

## Aturan Praktik Terbaik (Konvensi, Tidak Wajib tapi Sangat Disarankan)

### 1. Gunakan `camelCase` untuk Nama Variabel

Konvensi standar di JavaScript adalah **camelCase**: kata pertama huruf kecil semua, kata berikutnya diawali huruf besar.

```js
// Disarankan (camelCase)
let namaLengkap = "Budi Santoso";
let jumlahBarang = 5;
let isLoggedIn = true;

// Kurang disarankan (gaya penulisan lain)
let nama_lengkap = "Budi Santoso"; // snake_case, jarang dipakai di JS
let NamaLengkap = "Budi Santoso";  // PascalCase, biasanya untuk nama Class
let namalengkap = "Budi Santoso";  // sulit dibaca tanpa pemisah kata
```

### 2. Gunakan Nama yang Deskriptif (Jelas Maksudnya)

```js
// Kurang jelas
let x = 25;
let d = "2024-01-01";
let flag = true;

// Lebih jelas
let umur = 25;
let tanggalLahir = "2024-01-01";
let sudahMenikah = true;
```

### 3. Gunakan Awalan `is`, `has`, `sudah`, `bisa` untuk Variabel Boolean

```js
let isValid = true;
let hasAccess = false;
let sudahBayar = true;
let bisaEdit = false;
```

### 4. Konstanta Global yang Tidak Pernah Berubah Boleh Ditulis UPPER_SNAKE_CASE

```js
const MAX_UPLOAD_SIZE = 5000000;
const API_BASE_URL = "https://api.example.com";
const PI = 3.14159;
```

Konvensi ini biasanya dipakai untuk nilai konstan yang bersifat "konfigurasi" atau tidak pernah berubah sama sekali sepanjang aplikasi berjalan.

### 5. Hindari Nama Variabel Satu Huruf (Kecuali dalam Konteks Sangat Jelas)

```js
// Kurang jelas (kecuali dalam loop sederhana)
let n = "Budi";
let a = 20;

// Lebih jelas
let nama = "Budi";
let umur = 20;

// Pengecualian: variabel loop seperti "i" sudah menjadi konvensi umum
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Ringkasan Checklist Penamaan Variabel

- [ ] Hanya pakai huruf, angka, `_`, `$` — tidak diawali angka
- [ ] Bukan reserved keyword
- [ ] Gunakan `camelCase`
- [ ] Nama deskriptif, jelaskan isi/maksud variabel
- [ ] Variabel boolean diberi awalan `is`/`has`/`sudah`/`bisa`
- [ ] Konstanta global tetap boleh `UPPER_SNAKE_CASE`

➡️ Lanjut ke materi berikutnya: **04 Tipe Data Primitif**
