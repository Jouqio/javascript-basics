# 02. Var, Let, Const

## Tiga Cara Mendeklarasikan Variabel

JavaScript menyediakan **3 keyword** untuk mendeklarasikan variabel: `var`, `let`, dan `const`. Ketiganya punya perilaku yang berbeda.

| Keyword | Bisa diubah nilainya? | Bisa dideklarasikan ulang? | Scope | Rekomendasi |
|---------|------------------------|------------------------------|-------|--------------|
| `var` | ✅ Ya | ✅ Ya | Function scope | ❌ Hindari (cara lama) |
| `let` | ✅ Ya | ❌ Tidak | Block scope | ✅ Gunakan jika nilai akan berubah |
| `const` | ❌ Tidak | ❌ Tidak | Block scope | ✅ Gunakan sebagai default pilihan |

## 1. `let` — Untuk Variabel yang Nilainya Bisa Berubah

```js
let umur = 20;
umur = 21; // boleh diubah
console.log(umur); // 21
```

```js
let nama = "Budi";
let nama = "Andi"; // ERROR! tidak boleh deklarasi ulang dengan nama sama di scope yang sama
```

## 2. `const` — Untuk Variabel yang Nilainya Tetap

```js
const PI = 3.14;
console.log(PI); // 3.14

PI = 3.14159; // ERROR! Assignment to constant variable
```

`const` **wajib diisi nilai** saat dideklarasikan:

```js
const nama; // ERROR! Missing initializer in const declaration
```

## 3. `var` — Cara Lama (Sebaiknya Dihindari)

```js
var umur = 20;
var umur = 25; // diperbolehkan (tidak error), tapi berbahaya karena bisa menimpa tanpa sadar
```

`var` punya perilaku yang **membingungkan dan rawan bug**, terutama soal scope (akan dibahas detail di materi **Scope Variable**). Karena itu, JavaScript modern **tidak lagi merekomendasikan** penggunaan `var`.

## Perbedaan Utama: Function Scope vs Block Scope

```js
// var: function scope (bocor keluar dari blok if/for)
if (true) {
  var x = 10;
}
console.log(x); // 10 (bisa diakses di luar blok if!)

// let: block scope (terkurung di dalam blok)
if (true) {
  let y = 10;
}
console.log(y); // ERROR! y is not defined (tidak bisa diakses di luar blok)
```

Penjelasan detail tentang scope ada di materi **07 Scope Variable**.

## Kapan Menggunakan yang Mana?

### 💡 Aturan Praktis Modern JavaScript:

1. **Gunakan `const` sebagai pilihan default** untuk semua variabel
2. **Gunakan `let`** hanya jika kamu tahu nilai variabel tersebut **akan berubah** nanti (misal: counter, hasil perhitungan yang di-update, dll)
3. **Jangan gunakan `var`** sama sekali di kode baru

```js
const namaAplikasi = "TodoApp"; // tidak akan berubah -> const
let jumlahTugas = 0;            // akan bertambah/berkurang -> let

jumlahTugas = jumlahTugas + 1; // OK, karena pakai let
```

## Ringkasan Contoh Error Umum

```js
const skor = 100;
skor = 200; // ❌ TypeError: Assignment to constant variable.

let nilai = 80;
let nilai = 90; // ❌ SyntaxError: Identifier 'nilai' has already been declared

let benar = 80;
benar = 90; // ✅ OK, ini valid karena hanya mengubah nilai, bukan deklarasi ulang
```

➡️ Lanjut ke materi berikutnya: **03 Aturan Penamaan Variable**
