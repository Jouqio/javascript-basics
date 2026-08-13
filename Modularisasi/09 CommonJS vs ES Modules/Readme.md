# 09. CommonJS vs ES Modules

> Perbandingan menyeluruh dua sistem module JavaScript, dan bagaimana keduanya bisa (atau tidak bisa) dipakai bersamaan.

## Tujuan Pembelajaran

- Membandingkan syntax dan perilaku CommonJS dan ES Modules
- Memahami perbedaan loading synchronous vs asynchronous
- Mengetahui cara Node.js menentukan sistem module yang dipakai

## Perbandingan Syntax

| | CommonJS | ES Modules |
|---|---|---|
| Ekspor | `module.exports = {...}` | `export`, `export default` |
| Impor | `require("path")` | `import ... from "path"` |
| Loading | Synchronous (blocking) | Asynchronous (non-blocking) |
| Posisi import | Boleh di mana saja, bahkan kondisional | Harus di top-level (kecuali dynamic `import()`) |
| Dukungan browser | Tidak native, butuh bundler | Native didukung langsung |
| Ekstensi umum di Node.js | `.cjs` atau `.js` (default) | `.mjs` atau `.js` (dengan `"type": "module"`) |

## Bagaimana Node.js Menentukan Sistem Module?

Node.js menentukan cara membaca file `.js` biasa berdasarkan **field `"type"` di `package.json`**:

- Tidak ada field `"type"`, atau `"type": "commonjs"` → semua file `.js` dianggap **CommonJS**.
- `"type": "module"` → semua file `.js` dianggap **ES Modules**.
- Ekstensi `.cjs` selalu dipaksa CommonJS, `.mjs` selalu dipaksa ES Modules, **apa pun** pengaturan `package.json`-nya.

```js
{
  "name": "proyek-saya",
  "type": "module",
  "version": "1.0.0"
}

// Dengan pengaturan di atas, semua file .js di proyek ini
// otomatis dianggap ES Modules, boleh pakai import/export langsung.
```

> **Tips:** Materi-materi sebelumnya di paket ini memakai ekstensi `.mjs`/`.cjs` secara eksplisit justru supaya **tidak bergantung** pada `package.json` — jadi setiap folder materi bisa langsung dijalankan tanpa perlu setup tambahan.

## Bisakah Keduanya Dicampur?

- **ES Modules bisa meng-import CommonJS** — `import` bisa memuat file CommonJS, hasilnya diperlakukan seperti default export.
- **CommonJS TIDAK BISA memakai `require()` untuk memuat ES Modules** — ini batasan teknis penting yang sering bikin bingung, karena `require()` bekerja secara synchronous sedangkan ES Modules dirancang asynchronous.

```js
// CommonJS mengimpor ES Modules HARUS pakai dynamic import (async)
async function muatESModuleDariCJS() {
  const modul = await import("./file-esm.mjs");
  console.log(modul.default);
}
muatESModuleDariCJS();

// require("./file-esm.mjs") akan ERROR jika dipaksakan langsung
```

> **Perhatian:** Ketidakcocokan arah ini adalah salah satu sumber kebingungan paling umum saat proyek lama (CommonJS) perlu memakai package npm modern yang sudah pindah ke ES Modules murni.

## Mana yang Sebaiknya Dipakai?

Untuk **proyek baru**, ES Modules adalah pilihan yang direkomendasikan karena merupakan standar resmi bahasa dan didukung penuh baik di browser maupun Node.js modern. CommonJS tetap penting dipahami karena masih sangat umum di proyek lama dan banyak package npm yang belum bermigrasi sepenuhnya.

## Latihan

Benar atau salah: file CommonJS bisa memuat file ES Modules langsung dengan `require("./file.mjs")`. Jelaskan alasannya.

<details>
<summary>Lihat Jawaban</summary>

**Salah.** `require()` bersifat synchronous, sedangkan ES Modules dirancang untuk dimuat secara asynchronous. Karena itu, CommonJS tidak bisa memakai `require()` untuk memuat ES Modules secara langsung — solusinya adalah memakai dynamic `import()` (yang mengembalikan Promise) di dalam file CommonJS tersebut.
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.mjs`) ada di file [file-esm.mjs](./file-esm.mjs), [contoh.mjs](./contoh.mjs), [matematika.cjs](./matematika.cjs) pada folder ini.

[← Circular Dependency (Ketergantungan Melingkar)](../08 Circular Dependency/Readme.md) | [Mengatur Struktur Folder Modular →](../10 Mengatur Struktur Folder Modular/Readme.md)
