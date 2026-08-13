# 07. Operator Ternary (Kondisional)

## Apa itu Operator Ternary?

**Operator Ternary** (kadang disebut Conditional Operator) adalah **satu-satunya** operator di JavaScript yang membutuhkan **tiga operand**. Operator ini adalah versi **ringkas** dari `if...else` sederhana, ditulis dalam **satu baris**.

## Sintaks

```javascript
kondisi ? nilaiJikaTrue : nilaiJikaFalse
```

- `kondisi` → ekspresi yang menghasilkan `true`/`false`
- `?` → jika kondisi `true`, ambil nilai setelah tanda ini
- `:` → jika kondisi `false`, ambil nilai setelah tanda ini

## Contoh Dasar

```javascript
const umur = 20;
const status = umur >= 18 ? "Dewasa" : "Anak-anak";

console.log(status); // "Dewasa"
```

## Perbandingan dengan `if...else`

```javascript
// Menggunakan if...else (lebih panjang)
let status;
if (umur >= 18) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}

// Menggunakan Ternary (lebih ringkas, hasilnya SAMA)
const status2 = umur >= 18 ? "Dewasa" : "Anak-anak";
```

👉 Ternary sangat cocok dipakai ketika kita hanya perlu **memilih salah satu dari dua nilai** berdasarkan kondisi sederhana, dan ingin menuliskannya dalam satu baris.

## Menggunakan Ternary Langsung di `console.log()` atau Template Literals

Salah satu kelebihan ternary adalah bisa dipakai **langsung di dalam ekspresi lain**, sesuatu yang tidak bisa dilakukan `if...else` biasa:

```javascript
const nilai = 75;
console.log(`Kamu ${nilai >= 60 ? "LULUS" : "TIDAK LULUS"}`);
// "Kamu LULUS"
```

```javascript
// Langsung dipakai sebagai nilai class CSS, misalnya
const statusAktif = true;
elemen.className = statusAktif ? "aktif" : "nonaktif";
```

## Ternary Bersarang (Nested Ternary) — Gunakan dengan Hati-Hati!

Ternary bisa "disarangkan" untuk menangani **lebih dari dua kemungkinan**, tapi ini bisa membuat kode **sulit dibaca** jika terlalu banyak:

```javascript
const nilai = 75;

const grade = nilai >= 90 ? "A"
            : nilai >= 80 ? "B"
            : nilai >= 70 ? "C"
            : nilai >= 60 ? "D"
            : "E";

console.log(grade); // "C"
```

⚠️ **Peringatan:** Ternary bersarang yang **lebih dari 2-3 tingkat** sebaiknya **dihindari** karena sulit dibaca. Untuk kasus dengan banyak kemungkinan, sebaiknya gunakan `if...else if...else` biasa atau `switch` agar lebih jelas.

```javascript
// Untuk kasus kompleks, if...else lebih mudah dibaca dibanding ternary bersarang
function hitungGrade(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
}
```

## Kapan Menggunakan Ternary?

✅ **Cocok dipakai untuk:**
- Memilih salah satu dari **dua** nilai sederhana
- Digunakan **langsung di dalam ekspresi** (template literals, JSX/React, argument function)
- Penugasan nilai variabel yang singkat

❌ **Sebaiknya hindari untuk:**
- Logika kompleks dengan **banyak** kondisi bersarang
- Ketika hasilnya bukan sekadar "memilih nilai", tapi ada **banyak aksi/efek samping** yang perlu dijalankan (gunakan `if...else` biasa)

## Contoh Penggunaan Nyata

```javascript
// Validasi form sederhana
const inputKosong = nama.trim() === "";
pesanError.textContent = inputKosong ? "Nama tidak boleh kosong!" : "";

// Menampilkan teks jamak/tunggal
const jumlahItem = 5;
console.log(`Kamu punya ${jumlahItem} ${jumlahItem === 1 ? "item" : "item-item"}`);

// Toggle status
let statusLampu = "mati";
statusLampu = statusLampu === "mati" ? "menyala" : "mati";
```

Buka `contoh.html` untuk mencoba operator ternary, termasuk kasus ternary bersarang untuk grading.

➡️ Lanjut ke materi berikutnya: **08. Operator Bitwise**
