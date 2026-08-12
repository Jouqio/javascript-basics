# 10. Modules (Import dan Export)

> Cara resmi ES6+ memecah kode menjadi banyak file kecil yang saling terhubung lewat import dan export.

## Tujuan Pembelajaran

- Memahami kenapa kode perlu dipecah menjadi beberapa module
- Menggunakan named export dan named import
- Menggunakan default export dan default import

## Kenapa Butuh Module?

Semakin besar proyek, semakin sulit menaruh semua kode dalam satu file. **Module** memungkinkan kode dipecah ke banyak file kecil yang fokus pada satu tanggung jawab, lalu dihubungkan kembali lewat `export` dan `import`.

**Catatan penting:** contoh di materi ini memakai ekstensi `.mjs` (bukan `.js`) agar Node.js langsung mengenalinya sebagai ES module tanpa konfigurasi tambahan. Jalankan dengan `node contoh.mjs`, bukan `node contoh.js`.

## Named Export dan Named Import

**Named export** mengekspor beberapa nilai dari satu file, masing-masing dengan nama tertentu. Saat di-import, namanya harus **persis sama** (dibungkus kurung kurawal `{ }`).

File `modul-matematika.mjs` (lihat file terpisah di folder ini) berisi:

```js
// --- modul-matematika.mjs ---
export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export const PI = 3.14159;
```

## Mengimpor Named Export

```js
// --- di file lain ---
import { tambah, kurang, PI } from "./modul-matematika.mjs";

console.log(tambah(2, 3)); // 5
console.log(kurang(5, 2)); // 3
console.log(PI);           // 3.14159

// Bisa juga rename saat import
import { tambah as jumlahkan } from "./modul-matematika.mjs";
console.log(jumlahkan(10, 5)); // 15
```

## Default Export dan Default Import

**Default export** dipakai saat satu file hanya punya **satu** nilai utama yang diekspor. Saat di-import, namanya **boleh berbeda** (tanpa kurung kurawal).

```js
// --- konfigurasi.mjs ---
const konfigurasi = {
  namaAplikasi: "Belajar ES6+",
  versi: "1.0.0",
};

export default konfigurasi;

// --- di file lain ---
import config from "./konfigurasi.mjs"; // nama bebas, tidak perlu kurung kurawal
console.log(config.namaAplikasi); // Belajar ES6+
```

> **Tips:** Satu file boleh punya **satu** default export dan **banyak** named export sekaligus. Lihat file `modul-matematika.mjs` dan `contoh.mjs` di folder ini untuk versi lengkap yang bisa langsung dijalankan.

## Latihan

Di file `modul-matematika.mjs` (lihat folder ini), tambahkan named export baru bernama `kali(a, b)` yang mengembalikan hasil perkalian, lalu import dan gunakan di `contoh.mjs`.

<details>
<summary>Lihat Jawaban</summary>

Tambahkan di `modul-matematika.mjs`:

```js
export function kali(a, b) {
  return a * b;
}
```

Lalu di file lain:

```js
import { kali } from "./modul-matematika.mjs";
console.log(kali(4, 5)); // 20
```
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file **[contoh.mjs](./contoh.mjs)** pada folder ini.

[← Classes di JavaScript](../09 Classes di JavaScript/Readme.md) | [Map dan Set →](../11 Map dan Set/Readme.md)
