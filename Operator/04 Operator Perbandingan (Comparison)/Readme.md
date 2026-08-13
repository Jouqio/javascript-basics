# 04. Operator Perbandingan (Comparison)

## Apa itu Operator Perbandingan?

**Operator Perbandingan** digunakan untuk **membandingkan dua nilai**, dan selalu menghasilkan nilai **boolean**: `true` atau `false`.

## Daftar Operator Perbandingan

| Operator | Nama | Contoh | Hasil |
|---|---|---|---|
| `==` | Sama dengan (loose) | `5 == "5"` | `true` |
| `===` | Sama dengan persis (strict) | `5 === "5"` | `false` |
| `!=` | Tidak sama dengan (loose) | `5 != "5"` | `false` |
| `!==` | Tidak sama dengan persis (strict) | `5 !== "5"` | `true` |
| `>` | Lebih besar dari | `5 > 3` | `true` |
| `<` | Lebih kecil dari | `5 < 3` | `false` |
| `>=` | Lebih besar atau sama dengan | `5 >= 5` | `true` |
| `<=` | Lebih kecil atau sama dengan | `5 <= 4` | `false` |

## ⚠️ Perbedaan PALING PENTING: `==` vs `===`

Ini adalah **salah satu konsep terpenting** yang wajib dipahami setiap pemula JavaScript, dan **sumber bug yang sangat umum** jika salah paham.

### `==` (Loose Equality) — Membandingkan Nilai Saja, Mengabaikan Tipe Data

Operator ini akan **otomatis mengubah tipe data (type coercion)** salah satu operand agar bisa dibandingkan, sebelum membandingkan nilainya.

```javascript
console.log(5 == "5");       // true  (string "5" diubah jadi angka 5 dulu)
console.log(0 == false);     // true  (false diubah jadi angka 0 dulu)
console.log(null == undefined); // true (kasus khusus, keduanya dianggap "sama" oleh ==)
console.log("" == 0);        // true  (string kosong diubah jadi angka 0 dulu)
```

### `===` (Strict Equality) — Membandingkan Nilai DAN Tipe Data

Operator ini **tidak** melakukan konversi tipe data. Jika tipe datanya berbeda, hasilnya langsung `false`, **tanpa** mencoba menyamakan dulu.

```javascript
console.log(5 === "5");        // false (angka vs string, tipe beda!)
console.log(0 === false);      // false (number vs boolean, tipe beda!)
console.log(null === undefined); // false (null dan undefined adalah tipe yang berbeda)
console.log(5 === 5);          // true  (nilai dan tipe sama-sama cocok)
```

## 👉 Rekomendasi: SELALU Gunakan `===` dan `!==`

Karena perilaku `==` yang **sulit ditebak** (banyak aturan konversi tersembunyi), hampir semua developer JavaScript profesional **selalu** menggunakan `===` dan `!==`, **kecuali** ada alasan khusus yang benar-benar disengaja.

```javascript
// ❌ Hindari (bisa menghasilkan bug tak terduga)
if (nilai == "10") { ... }

// ✅ Direkomendasikan (perilaku jelas dan konsisten)
if (nilai === "10") { ... }
```

## Tabel Perbandingan Kasus-Kasus Aneh dengan `==`

Berikut beberapa contoh perilaku `==` yang sering membingungkan, sebagai bukti kenapa `===` lebih aman:

| Ekspresi | Hasil `==` | Hasil `===` |
|---|---|---|
| `1 == "1"` | `true` | `false` |
| `1 == true` | `true` | `false` |
| `0 == ""` | `true` | `false` |
| `null == undefined` | `true` | `false` |
| `NaN == NaN` | `false` | `false` (selalu false, kasus unik!) |

⚠️ **Catatan khusus `NaN`:** `NaN` (Not a Number) adalah **satu-satunya nilai** di JavaScript yang **tidak pernah sama dengan dirinya sendiri**, baik dengan `==` maupun `===`. Untuk mengecek `NaN`, gunakan `Number.isNaN()`:

```javascript
console.log(NaN === NaN);         // false (aneh tapi memang begitu!)
console.log(Number.isNaN(NaN));   // true (cara yang benar untuk mengecek NaN)
```

## Membandingkan String

Perbandingan `>` dan `<` juga bisa dipakai untuk string, berdasarkan urutan **alfabet (leksikografis)**, mirip seperti urutan kata di kamus:

```javascript
console.log("apel" < "jeruk"); // true ("a" muncul lebih dulu dari "j" di alfabet)
console.log("Apel" < "apel");  // true (huruf besar punya kode karakter lebih kecil dari huruf kecil)
```

## Membandingkan Objek dan Array

⚠️ **Perhatian:** Object dan Array dibandingkan berdasarkan **referensi (alamat memori)**, bukan berdasarkan isinya!

```javascript
const obj1 = { nama: "Budi" };
const obj2 = { nama: "Budi" };
const obj3 = obj1;

console.log(obj1 === obj2); // false! (isinya sama, tapi referensi/objeknya BEDA)
console.log(obj1 === obj3); // true  (obj3 menunjuk ke objek yang SAMA persis dengan obj1)
```

👉 Untuk membandingkan **isi** object/array, kita perlu cara lain (misalnya `JSON.stringify()` untuk perbandingan sederhana, atau library khusus untuk kasus kompleks) — ini di luar cakupan modul dasar ini.

Buka `contoh.html` untuk mencoba berbagai perbandingan `==` vs `===` secara langsung.

➡️ Lanjut ke materi berikutnya: **05. Operator Logika (Logical)**
