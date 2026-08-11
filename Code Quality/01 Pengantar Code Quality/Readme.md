# 1. Pengantar Code Quality

## Apa itu Code Quality?

**Code Quality** (kualitas kode) adalah ukuran seberapa baik kode program ditulis, dilihat dari sisi:

- **Kebenaran (Correctness)** — kode berjalan sesuai yang diharapkan.
- **Keterbacaan (Readability)** — mudah dibaca dan dipahami orang lain (atau diri sendiri di masa depan).
- **Konsistensi (Consistency)** — mengikuti gaya penulisan yang seragam.
- **Kemudahan dipelihara (Maintainability)** — mudah diubah/ditambah tanpa merusak bagian lain.
- **Efisiensi (Performance)** — tidak boros sumber daya (memori, waktu proses).
- **Keamanan (Security)** — tidak membuka celah yang bisa dieksploitasi.

## Kenapa Code Quality Penting?

1. **Kolaborasi tim** — Kode akan dibaca oleh banyak orang, bukan hanya penulisnya.
2. **Bug lebih sedikit** — Kode yang rapi dan konsisten lebih mudah dicek kesalahannya.
3. **Biaya jangka panjang lebih murah** — Kode buruk ("technical debt") butuh waktu lebih lama untuk diperbaiki di masa depan.
4. **Onboarding lebih cepat** — Developer baru lebih cepat memahami proyek.

## Contoh: Kode Buruk vs Kode Baik

**Kode buruk** (sulit dibaca, tidak konsisten):

```javascript
function calc(a,b,c){
if(c=='+'){return a+b}
else if(c=='-')
{return a-b}
else{
return null}}
```

**Kode baik** (rapi, konsisten, jelas):

```javascript
function calculate(numberA, numberB, operator) {
  if (operator === '+') {
    return numberA + numberB;
  }

  if (operator === '-') {
    return numberA - numberB;
  }

  return null;
}
```

Kedua kode di atas **secara fungsi sama**, tapi kode kedua jauh lebih mudah dibaca, konsisten indentasinya, dan menggunakan nama variabel yang jelas.

## Pilar-Pilar Code Quality yang Akan Dipelajari

Dalam rangkaian materi ini, kita akan membahas beberapa pilar utama:

1. **Type System** — memahami tipe data agar kode lebih dapat diprediksi.
2. **Dokumentasi kode (JSDoc)** — menjelaskan maksud kode lewat komentar terstruktur.
3. **Type Checking (Flow, TypeScript)** — mendeteksi kesalahan tipe sebelum program dijalankan.
4. **Style Guide & Linter** — menjaga konsistensi gaya penulisan kode secara otomatis.
5. **Testing (Pengujian Program)** — memastikan kode benar-benar bekerja sesuai harapan, baik di Node.js maupun Bun.

## Latihan Kecil

Coba perbaiki potongan kode berikut agar lebih rapi dan mudah dibaca (indentasi konsisten, nama variabel jelas):

```javascript
function f(x){if(x>0){return "positif"}else if(x<0){return "negatif"}else{return "nol"}}
```

> 💡 Tip: Ganti nama fungsi `f` dan parameter `x` menjadi nama yang lebih deskriptif, misalnya `getSignStatus(number)`.

## Poin Penting

- Code Quality bukan hanya soal "kode berjalan", tapi juga soal kode yang **mudah dipahami dan dipelihara**.
- Kualitas kode yang baik akan menghemat waktu dan biaya dalam jangka panjang.
- Materi selanjutnya akan membahas fondasi penting: **Type System dalam JavaScript**.

---
⬅️ [Kembali ke README](../README.md) | ➡️ Lanjut ke [02. Type System dalam JavaScript](02-type-system-javascript.md)