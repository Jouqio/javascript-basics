# 6. Style Guide

## Apa itu Style Guide?

**Style Guide** adalah kumpulan aturan penulisan kode yang disepakati bersama, mencakup hal-hal seperti:

- Penggunaan indentasi (spasi vs tab, berapa banyak spasi)
- Penamaan variabel dan fungsi (`camelCase`, `PascalCase`, dsb.)
- Penggunaan tanda kutip (`'single'` vs `"double"`)
- Penggunaan titik koma (`;`)
- Panjang maksimal baris kode
- Struktur file dan folder

## Kenapa Style Guide Penting?

Tanpa style guide, setiap developer dalam tim bisa menulis kode dengan gaya berbeda-beda, sehingga kode menjadi:

- Sulit dibaca karena tidak konsisten.
- Rawan konflik saat menggabungkan kode (merge conflict) di Git.
- Sulit dipelihara dalam jangka panjang.

## Contoh Konvensi Penamaan (Naming Convention)

| Gaya | Contoh | Umum dipakai untuk |
|------|--------|---------------------|
| `camelCase` | `userName`, `getUserData()` | Variabel & fungsi di JavaScript |
| `PascalCase` | `UserProfile`, `class Person` | Nama class & komponen React |
| `snake_case` | `user_name` | Umum di Python, jarang di JS |
| `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` | Konstanta |
| `kebab-case` | `user-profile.js` | Nama file |

## Style Guide Populer di JavaScript

1. **Airbnb JavaScript Style Guide** — salah satu yang paling banyak digunakan, sangat detail dan lengkap.
2. **Google JavaScript Style Guide** — dipakai di proyek-proyek Google.
3. **StandardJS** — style guide "tanpa konfigurasi" (tanpa titik koma, aturan sederhana).

## Contoh Aturan dari Airbnb Style Guide

```javascript
// ❌ Tidak sesuai style guide
var nama = 'Budi'
function GetData(){
    return nama
}

// ✅ Sesuai style guide (Airbnb)
const name = 'Budi';

function getData() {
  return name;
}
```

Beberapa aturan yang biasa diterapkan:

- Gunakan `const`/`let`, hindari `var`.
- Gunakan tanda kutip tunggal (`'...'`) untuk string.
- Selalu tutup pernyataan dengan titik koma.
- Gunakan indentasi 2 spasi.
- Nama fungsi menggunakan `camelCase`, bukan `PascalCase` (kecuali constructor/class).

## Konsistensi Format Kode

Selain penamaan, style guide juga mengatur format seperti:

```javascript
// ❌ Tidak konsisten
if(x>0){console.log("positif")}else{console.log("negatif")}

// ✅ Konsisten & mudah dibaca
if (x > 0) {
  console.log("positif");
} else {
  console.log("negatif");
}
```

## Style Guide vs Linter

Style Guide adalah **dokumen aturan** (bisa berupa teks/panduan), sedangkan **Linter** (dibahas di bab berikutnya) adalah **alat otomatis** yang memeriksa dan bahkan memperbaiki kode agar sesuai style guide tersebut.

```
Style Guide (aturan)  --->  diimplementasikan oleh  --->  Linter (alat, misal ESLint)
```

## Latihan Kecil

Perbaiki kode berikut agar mengikuti gaya penulisan yang konsisten (indentasi 2 spasi, tanda kutip tunggal, titik koma, `camelCase`):

```javascript
var UserName = "Budi"
function get_user_info(){
return UserName
}
```

## Poin Penting

- Style Guide adalah kesepakatan aturan penulisan kode dalam tim/komunitas.
- Contoh populer: Airbnb, Google, StandardJS.
- Style guide biasanya diterapkan secara otomatis menggunakan **Linter**, yang akan dibahas di bab selanjutnya.

---
⬅️ [05. TypeScript, Superset dari JavaScript](05-typescript-superset-javascript.md) | ➡️ [07. Code Convention dengan Linter Library](07-code-convention-linter.md)