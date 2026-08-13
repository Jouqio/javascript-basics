# 05. Operator Logika (Logical)

## Apa itu Operator Logika?

**Operator Logika** digunakan untuk **menggabungkan atau membalik** nilai boolean (`true`/`false`), biasanya untuk membuat **kondisi yang lebih kompleks**.

## Daftar Operator Logika

| Operator | Nama | Fungsi |
|---|---|---|
| `&&` | AND (DAN) | `true` hanya jika **KEDUA** kondisi `true` |
| `\|\|` | OR (ATAU) | `true` jika **SALAH SATU** kondisi `true` |
| `!` | NOT (BUKAN/negasi) | Membalik nilai boolean |

## 1. Operator `&&` (AND)

Hasil `true` **hanya jika kedua sisi bernilai `true`**.

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```

### Contoh Penggunaan Nyata

```javascript
const umur = 20;
const punyaKTP = true;

if (umur >= 17 && punyaKTP) {
  console.log("Boleh membuat SIM");
}
```

## 2. Operator `||` (OR)

Hasil `true` **jika salah satu (atau keduanya) bernilai `true`**.

```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```

### Contoh Penggunaan Nyata

```javascript
const adaKupon = false;
const adaSaldoBonus = true;

if (adaKupon || adaSaldoBonus) {
  console.log("Bisa dapat diskon");
}
```

## 3. Operator `!` (NOT)

Membalik nilai boolean: `true` menjadi `false`, dan sebaliknya. Ini adalah **unary operator** (hanya butuh 1 operand).

```javascript
console.log(!true);  // false
console.log(!false); // true

const sudahLogin = false;
console.log(!sudahLogin); // true -> berarti "belum login"
```

## Truthy dan Falsy — Konsep Penting!

Operator logika sebenarnya bekerja dengan **semua tipe data**, bukan hanya boolean murni. JavaScript akan otomatis menganggap setiap nilai sebagai **truthy** (dianggap benar) atau **falsy** (dianggap salah) saat dievaluasi dalam konteks logika.

### Nilai yang Dianggap FALSY (hanya ada 6 + 1):

```javascript
false
0
""       // string kosong
null
undefined
NaN
0n       // BigInt nol (kasus jarang)
```

### SEMUA Nilai Lainnya Dianggap TRUTHY

```javascript
true, 1, -1, "0" (string berisi "0"), "false" (string), [], {}, "halo", 100
```

⚠️ **Perhatian khusus:** array kosong `[]` dan object kosong `{}` adalah **truthy**, meskipun terlihat "kosong"! Ini sering mengejutkan pemula.

```javascript
if ([]) {
  console.log("Ini akan tetap dijalankan, karena [] itu truthy!");
}
```

## Short-Circuit Evaluation (Evaluasi Hubung Singkat)

Ini adalah perilaku **penting dan sering dimanfaatkan** oleh developer JavaScript: operator `&&` dan `||` **berhenti mengevaluasi** begitu hasil akhirnya sudah bisa dipastikan, **tanpa** perlu mengecek sisi kanan.

### `&&` — Berhenti di Nilai FALSY Pertama

```javascript
console.log(false && "ini tidak akan dievaluasi"); // false (langsung berhenti di false)
console.log(true && "lanjut dicek");                 // "lanjut dicek" (karena true, lanjut ke kanan)
```

### `||` — Berhenti di Nilai TRUTHY Pertama

```javascript
console.log(true || "ini tidak akan dievaluasi"); // true (langsung berhenti di true)
console.log(false || "lanjut dicek");               // "lanjut dicek" (karena false, lanjut ke kanan)
```

### Pemanfaatan Short-Circuit: Default Value dengan `||`

```javascript
function sapa(nama) {
  const namaFinal = nama || "Tamu"; // jika nama falsy (kosong/undefined), pakai "Tamu"
  return "Halo, " + namaFinal;
}

console.log(sapa("Budi")); // "Halo, Budi"
console.log(sapa(""));      // "Halo, Tamu" (string kosong itu falsy)
```

### Pemanfaatan Short-Circuit: Menjalankan Kode Bersyarat dengan `&&`

```javascript
const user = { nama: "Budi", isAdmin: true };

user.isAdmin && console.log("Selamat datang, Admin!"); // hanya jalan jika isAdmin truthy
```

⚠️ **Catatan:** Untuk kode nyata, `if` statement biasanya lebih jelas dibaca dibanding trik `&&` di atas. Gunakan trik ini secukupnya, jangan berlebihan hingga mengurangi keterbacaan kode.

Buka `contoh.html` untuk mencoba operator logika, truthy/falsy, dan short-circuit evaluation secara langsung.

➡️ Lanjut ke materi berikutnya: **06. Operator String**
