# 10. Operator Precedence (Urutan Operasi)

## Apa itu Operator Precedence?

**Operator Precedence (urutan operasi/prioritas operator)** adalah aturan yang menentukan **operator mana yang dievaluasi lebih dulu** ketika sebuah ekspresi memiliki **lebih dari satu operator**. Ini mirip dengan aturan matematika di sekolah: **perkalian/pembagian didahulukan dari penjumlahan/pengurangan**.

```javascript
console.log(2 + 3 * 4); // 14, BUKAN 20!
```

Kenapa hasilnya `14`, bukan `20`? Karena `*` (perkalian) memiliki **prioritas lebih tinggi** dari `+` (penjumlahan), sehingga `3 * 4` dihitung **lebih dulu** (`= 12`), baru kemudian `2 + 12 = 14`.

## Tabel Prioritas Operator (Ringkasan Umum)

Berikut urutan **umum** dari prioritas **tertinggi ke terendah** (semakin tinggi prioritas, semakin dulu dievaluasi):

| Prioritas | Operator | Contoh |
|---|---|---|
| Tertinggi | `()` Kurung | `(2 + 3)` |
| | `**` Pemangkatan | `2 ** 3` |
| | `*` `/` `%` | `3 * 4` |
| | `+` `-` | `2 + 3` |
| | `<` `>` `<=` `>=` | `5 > 3` |
| | `==` `===` `!=` `!==` | `5 === 5` |
| | `&&` | `true && false` |
| | `\|\|` `??` | `true \|\| false` |
| Terendah | `=` `+=` `-=` dll | `x = 5` |

⚠️ **Catatan:** Ini adalah versi **ringkas** untuk pemula. Daftar lengkap operator precedence JavaScript sebenarnya jauh lebih detail (mencakup puluhan operator), tapi tabel di atas sudah mencakup operator yang **paling sering** dipakai sehari-hari.

## Contoh-Contoh Penting

### 1. Perkalian/Pembagian vs Penjumlahan/Pengurangan

```javascript
console.log(10 - 2 * 3);  // 4  (2*3=6 dulu, baru 10-6=4)
console.log((10 - 2) * 3); // 24 (kurung mengubah urutan: 8*3=24)
```

### 2. Perbandingan vs Aritmatika

Operator aritmatika **selalu** dievaluasi lebih dulu daripada perbandingan:

```javascript
console.log(5 + 3 > 2 * 3); // true
// Langkah: 5+3=8, 2*3=6, lalu 8 > 6 -> true
```

### 3. Logika `&&` vs `||`

`&&` memiliki prioritas **lebih tinggi** dari `||`, jadi `&&` dievaluasi lebih dulu:

```javascript
console.log(true || false && false);
// && dievaluasi dulu: false && false = false
// lalu: true || false = true
console.log(true || (false && false)); // sama saja, hasilnya true
```

⚠️ Ini adalah kasus yang **sering membingungkan**! Jika ragu, selalu gunakan **tanda kurung** untuk memperjelas maksud kode, meskipun secara teknis tidak wajib.

### 4. Assignment (`=`) Memiliki Prioritas PALING RENDAH

```javascript
let hasil = 2 + 3 * 4; // operasi aritmatika selesai dulu (=14), baru di-assign ke hasil
console.log(hasil); // 14
```

## 👉 Best Practice: Gunakan Tanda Kurung untuk Kejelasan!

Meskipun JavaScript punya aturan precedence yang pasti, **mengandalkan hafalan urutan operator** bisa berisiko menyebabkan bug dan kode yang **sulit dibaca** orang lain (atau diri kita sendiri di masa depan). 

```javascript
// ❌ Ambigu secara visual, walau secara teknis benar
if (a > 5 && b < 10 || c === true) { ... }

// ✅ Lebih jelas dengan tanda kurung, walau hasilnya SAMA
if ((a > 5 && b < 10) || (c === true)) { ... }
```

👉 **Aturan emas:** Jika kamu **ragu** atau merasa ekspresi mulai rumit dengan banyak operator, **selalu tambahkan tanda kurung** untuk memperjelas maksud, meskipun secara prioritas operator sudah "otomatis benar". Kode yang jelas jauh lebih berharga daripada menghemat beberapa karakter tanda kurung.

## Associativity (Arah Evaluasi)

Selain prioritas, ada juga konsep **associativity** — arah evaluasi ketika operator dengan prioritas **sama** muncul berurutan.

### Left-to-Right (kebanyakan operator)

```javascript
console.log(20 - 5 - 3); // dievaluasi dari KIRI ke kanan: (20-5)-3 = 12
```

### Right-to-Left (khusus untuk `=` dan `**`)

```javascript
let a, b, c;
a = b = c = 5; // dievaluasi dari KANAN ke kiri: c=5 dulu, lalu b=c, lalu a=b
console.log(a, b, c); // 5 5 5

console.log(2 ** 3 ** 2); // dievaluasi dari KANAN: 3**2=9 dulu, lalu 2**9 = 512
```

## Ringkasan Praktis untuk Pemula

1. **Kurung `()`** selalu dievaluasi paling dulu — gunakan untuk mengontrol urutan dengan pasti
2. **Perkalian/pembagian** didahulukan dari **penjumlahan/pengurangan**
3. **Aritmatika** didahulukan dari **perbandingan**, dan **perbandingan** didahulukan dari **logika**
4. **`&&`** didahulukan dari **`||`**
5. **Assignment (`=`)** selalu dievaluasi **paling akhir**
6. Jika ragu, **gunakan tanda kurung** — tidak ada ruginya untuk kejelasan kode

Buka `contoh.html` untuk mencoba berbagai ekspresi dan membuktikan urutan operasi secara langsung.

➡️ Lanjut ke materi berikutnya: **11. Rangkuman dan Best Practice Operator**
