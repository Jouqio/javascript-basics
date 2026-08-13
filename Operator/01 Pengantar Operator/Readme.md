# 01. Pengantar Operator

## Apa itu Operator?

**Operator** adalah simbol khusus dalam JavaScript yang digunakan untuk **melakukan operasi** pada satu atau lebih nilai (disebut **operand**), lalu menghasilkan sebuah **nilai baru**.

```javascript
5 + 3
```

Pada contoh di atas:
- `5` dan `3` disebut **operand** (nilai yang dioperasikan)
- `+` disebut **operator** (simbol yang menentukan operasi apa yang dilakukan)
- Hasilnya adalah `8` (nilai baru)

## Analogi Sederhana

Bayangkan operator seperti **tombol pada kalkulator**. Kamu masukkan angka (operand), tekan tombol operasi (operator: `+`, `-`, `x`, `÷`), dan kalkulator menghasilkan jawaban. Di JavaScript, konsepnya sama persis, hanya saja operatornya lebih beragam — tidak cuma matematika, tapi juga untuk membandingkan, menggabungkan teks, dan mengambil keputusan logika.

## Unary vs Binary Operator

Operator dibedakan berdasarkan **jumlah operand** yang dibutuhkan:

| Jenis | Jumlah Operand | Contoh |
|---|---|---|
| **Unary** | 1 operand | `-5`, `!benar`, `typeof x` |
| **Binary** | 2 operand | `5 + 3`, `a && b`, `x > y` |
| **Ternary** | 3 operand | `kondisi ? nilaiA : nilaiB` (satu-satunya operator ternary di JS) |

```javascript
// Unary - hanya butuh 1 operand
let x = -5;         // tanda minus di depan angka
let y = !true;       // tanda seru untuk negasi boolean

// Binary - butuh 2 operand
let hasil = 5 + 3;   // + di antara dua angka

// Ternary - butuh 3 operand
let status = (5 > 3) ? "besar" : "kecil";
```

## Kategori Operator yang Akan Kita Pelajari

JavaScript memiliki banyak jenis operator, dikelompokkan berdasarkan fungsinya. Modul ini akan membahas setiap kategori secara mendalam:

| Kategori | Contoh Operator | Fungsi |
|---|---|---|
| **Aritmatika** | `+` `-` `*` `/` `%` `**` | Operasi matematika |
| **Penugasan (Assignment)** | `=` `+=` `-=` `*=` | Memberi/mengubah nilai variabel |
| **Perbandingan** | `==` `===` `>` `<` `!=` | Membandingkan dua nilai |
| **Logika** | `&&` `\|\|` `!` | Menggabungkan/membalik kondisi boolean |
| **String** | `+` (untuk teks) | Menggabungkan (concatenate) string |
| **Ternary** | `? :` | Kondisi singkat dalam satu baris |
| **Bitwise** | `&` `\|` `^` `~` `<<` `>>` | Operasi pada level bit (biner) |
| **Modern (ES2020+)** | `??` `?.` | Nullish coalescing & optional chaining |

## Kenapa Operator Penting Dipahami?

- Operator adalah **fondasi** hampir semua logika program: perhitungan, pengambilan keputusan, validasi data
- Kesalahan memahami operator (misalnya `==` vs `===`) adalah **sumber bug yang sangat umum** bagi pemula
- Memahami **urutan operasi (precedence)** mencegah hasil perhitungan yang tidak terduga

## Contoh Sederhana Sebelum Masuk ke Detail

```javascript
console.log(10 + 5);        // Aritmatika -> 15
console.log(10 > 5);        // Perbandingan -> true
console.log(true && false); // Logika -> false
console.log("Halo" + " Dunia"); // String -> "Halo Dunia"
console.log(10 > 5 ? "besar" : "kecil"); // Ternary -> "besar"
```

Buka `contoh.html` untuk mencoba berbagai jenis operator secara langsung sebagai pengantar sebelum masuk ke materi detail per kategori.

➡️ Lanjut ke materi berikutnya: **02. Operator Aritmatika**
