# 11. Rangkuman dan Best Practice Operator

Selamat! Kamu sudah mempelajari seluruh materi dasar **Operator** di JavaScript. Berikut rangkuman lengkapnya.

## Rangkuman Materi

| # | Topik | Poin Penting |
|---|---|---|
| 01 | Pengantar Operator | Operator, operand, unary/binary/ternary |
| 02 | Operator Aritmatika | `+ - * / % **`, increment/decrement |
| 03 | Operator Penugasan | `= += -= *=`, operator modern `\|\|= ??= &&=` |
| 04 | Operator Perbandingan | `==` vs `===`, selalu gunakan `===` |
| 05 | Operator Logika | `&& \|\| !`, truthy/falsy, short-circuit |
| 06 | Operator String | `+` untuk gabung string, Template Literals |
| 07 | Operator Ternary | `kondisi ? a : b`, hindari nested berlebihan |
| 08 | Operator Bitwise | `& \| ^ ~ << >>`, jarang dipakai di web dasar |
| 09 | Operator Modern | `??` (nullish coalescing), `?.` (optional chaining) |
| 10 | Operator Precedence | Urutan evaluasi operator, gunakan kurung untuk kejelasan |

## Tabel Prioritas Operator Lengkap (Ringkasan)

Dari prioritas **tertinggi** ke **terendah**:

```
()                          Kurung
**                          Pemangkatan
* / %                       Perkalian, Pembagian, Modulus
+ -                         Penjumlahan, Pengurangan
< > <= >=                   Perbandingan relasi
== === != !==                Perbandingan kesetaraan
&&                          Logika AND
|| ??                       Logika OR, Nullish Coalescing
?:                          Ternary
= += -= *= /= ||= ??= &&=   Penugasan
```

## Best Practice Menggunakan Operator

### ✅ 1. Selalu Gunakan `===` dan `!==`, Bukan `==` dan `!=`
Menghindari bug tak terduga akibat type coercion otomatis.

```javascript
// ❌ Hindari
if (nilai == "10") { ... }

// ✅ Direkomendasikan
if (nilai === "10") { ... }
```

### ✅ 2. Gunakan `??` untuk Nilai Default, Bukan `||`, Jika `0`/`""`/`false` adalah Nilai Valid

```javascript
// ❌ Bug: stok 0 dianggap "kosong"
const stok = jumlahStok || 10;

// ✅ Benar: 0 tetap dihargai sebagai nilai valid
const stok = jumlahStok ?? 10;
```

### ✅ 3. Gunakan Template Literals untuk Menggabungkan String

```javascript
// ❌ Kurang mudah dibaca untuk banyak variabel
const pesan = "Halo " + nama + ", umur " + umur + " tahun";

// ✅ Lebih rapi
const pesan = `Halo ${nama}, umur ${umur} tahun`;
```

### ✅ 4. Gunakan Tanda Kurung untuk Memperjelas Urutan Operasi
Walau JavaScript sudah punya aturan precedence, tanda kurung membuat kode **lebih mudah dibaca** siapa saja.

```javascript
// ⚠️ Secara teknis benar, tapi kurang jelas dibaca sekilas
if (a > 5 && b < 10 || c === true) { ... }

// ✅ Lebih jelas maksudnya
if ((a > 5 && b < 10) || (c === true)) { ... }
```

### ✅ 5. Hindari Ternary Bersarang yang Terlalu Dalam
Untuk logika dengan banyak kondisi, gunakan `if...else if` atau `switch` agar lebih mudah dibaca.

```javascript
// ⚠️ Sulit dibaca jika lebih dari 2-3 tingkat
const grade = n>=90?"A":n>=80?"B":n>=70?"C":"D";

// ✅ Lebih jelas untuk kasus kompleks
function hitungGrade(n) {
  if (n >= 90) return "A";
  if (n >= 80) return "B";
  if (n >= 70) return "C";
  return "D";
}
```

### ✅ 6. Gunakan `?.` untuk Mengakses Data yang Strukturnya Tidak Pasti
Terutama saat bekerja dengan data dari API atau input pengguna yang bisa jadi tidak lengkap.

```javascript
const kota = response?.data?.user?.alamat?.kota ?? "Tidak diketahui";
```

### ✅ 7. Selalu Pastikan Tipe Data Numerik Benar Sebelum Operasi Aritmatika
Terutama data dari `<input>` HTML yang selalu berupa string.

```javascript
const nilaiInput = document.querySelector("input").value; // selalu string!
const angka = Number(nilaiInput); // ubah dulu sebelum dihitung
```

## Checklist Sebelum "Lulus" Materi Ini

- [ ] Paham perbedaan `==` dan `===`, dan selalu memilih `===`
- [ ] Paham konsep truthy/falsy dan short-circuit evaluation
- [ ] Bisa menggunakan Template Literals untuk menggabungkan string
- [ ] Bisa menggunakan operator ternary untuk kondisi sederhana
- [ ] Paham perbedaan `||` dan `??` untuk nilai default
- [ ] Bisa menggunakan `?.` untuk akses data yang aman
- [ ] Paham dasar urutan operasi (precedence) dan kapan perlu tanda kurung

➡️ Uji pemahamanmu di: **12. Tugas (Latihan Mandiri)** dan **13. Quiz Operator**
