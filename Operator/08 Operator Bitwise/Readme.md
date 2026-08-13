# 08. Operator Bitwise

## Apa itu Operator Bitwise?

**Operator Bitwise** adalah operator yang bekerja pada level **bit (biner)**, bukan pada nilai angka desimal secara langsung. Sebelum diproses, angka akan diubah menjadi representasi **biner 32-bit**, dioperasikan bit demi bit, lalu hasilnya diubah kembali menjadi angka desimal.

⚠️ **Catatan untuk pemula:** Operator bitwise adalah materi yang **cukup jarang dipakai** dalam pemrograman web sehari-hari, tapi tetap penting untuk dipahami dasarnya — terutama jika nanti berhubungan dengan pemrograman tingkat rendah, optimasi performa, atau algoritma tertentu.

## Sedikit Dasar: Bilangan Biner

Komputer menyimpan angka dalam bentuk **biner** (hanya terdiri dari `0` dan `1`). Contoh:

```
Angka 5 dalam biner (8-bit) = 00000101
Angka 3 dalam biner (8-bit) = 00000011
```

## Daftar Operator Bitwise

| Operator | Nama | Fungsi |
|---|---|---|
| `&` | AND | `1` hanya jika **kedua** bit `1` |
| `\|` | OR | `1` jika **salah satu** bit `1` |
| `^` | XOR | `1` jika bit **berbeda** (salah satu `1`, bukan keduanya) |
| `~` | NOT | Membalik semua bit (0 jadi 1, 1 jadi 0) |
| `<<` | Left Shift | Menggeser bit ke kiri |
| `>>` | Right Shift | Menggeser bit ke kanan (mempertahankan tanda) |
| `>>>` | Unsigned Right Shift | Menggeser bit ke kanan (mengisi 0 di depan) |

## Contoh `&` (AND) Bit demi Bit

```javascript
console.log(5 & 3);
// 5  = 00000101
// 3  = 00000011
// AND= 00000001  -> hasil desimal = 1
```

## Contoh `|` (OR) Bit demi Bit

```javascript
console.log(5 | 3);
// 5  = 00000101
// 3  = 00000011
// OR = 00000111  -> hasil desimal = 7
```

## Contoh `^` (XOR) Bit demi Bit

```javascript
console.log(5 ^ 3);
// 5   = 00000101
// 3   = 00000011
// XOR = 00000110  -> hasil desimal = 6
```

## Contoh `<<` (Left Shift) — Trik Cepat Kali 2

Menggeser semua bit ke kiri sebanyak `n` posisi setara dengan **mengalikan dengan 2 pangkat n**:

```javascript
console.log(5 << 1); // 10  (5 * 2^1 = 10)
console.log(5 << 2); // 20  (5 * 2^2 = 20)
console.log(1 << 3); // 8   (1 * 2^3 = 8)
```

## Contoh `>>` (Right Shift) — Trik Cepat Bagi 2

```javascript
console.log(20 >> 1); // 10  (20 / 2^1 = 10)
console.log(20 >> 2); // 5   (20 / 2^2 = 5)
```

## Trik Populer: `~~` sebagai Alternatif `Math.floor()` untuk Angka Positif

Ini adalah trik yang cukup terkenal (tapi lebih sebagai pengetahuan tambahan, bukan **best practice** untuk kode produksi):

```javascript
console.log(~~4.7);  // 4  (mirip Math.floor untuk angka positif)
console.log(Math.floor(4.7)); // 4 (cara yang lebih JELAS dan direkomendasikan)
```

👉 **Catatan:** `~~` bekerja dengan membuang bagian desimal (mirip Math.trunc), **bukan** benar-benar sama seperti Math.floor untuk angka negatif. Untuk kode produksi, **selalu** gunakan `Math.floor()`/`Math.trunc()` yang jelas maksudnya, bukan trik bitwise yang membingungkan pembaca kode lain.

## Kapan Operator Bitwise Benar-Benar Dipakai?

- **Flags/permission system** — menyimpan banyak status boolean dalam satu angka (misalnya sistem hak akses)
- **Optimasi performa** tingkat rendah pada algoritma tertentu (kompetitif programming, game development)
- **Manipulasi warna** (RGB) dalam grafik komputer
- **Enkripsi/hashing** sederhana

## Kesimpulan untuk Pemula

Untuk kebutuhan pemrograman web sehari-hari (membuat website, aplikasi CRUD, dsb), operator bitwise **jarang** dibutuhkan secara langsung. Namun, memahami **dasarnya** tetap penting sebagai fondasi pengetahuan pemrograman yang lebih menyeluruh, dan berguna jika suatu saat berhubungan dengan algoritma atau sistem tingkat rendah.

👉 **Fokus utama pemula:** kuasai dulu operator Aritmatika, Perbandingan, dan Logika dengan sangat baik — operator Bitwise bisa dipelajari lebih dalam belakangan sesuai kebutuhan.

Buka `contoh.html` untuk mencoba operator bitwise dan melihat representasi binernya secara visual.

➡️ Lanjut ke materi berikutnya: **09. Operator Modern (Nullish Coalescing dan Optional Chaining)**
