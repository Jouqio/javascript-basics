# 4. Flow, Type Check Library

## Apa itu Flow?

**Flow** adalah *static type checker* untuk JavaScript yang dikembangkan oleh Meta (Facebook). Flow menambahkan **anotasi tipe langsung dalam kode** (bukan lewat komentar seperti JSDoc), lalu memeriksa kode sebelum dijalankan untuk menemukan kesalahan tipe.

> Catatan: Saat ini popularitas Flow sudah menurun dibanding TypeScript, tapi tetap penting dipelajari sebagai bagian dari sejarah dan perbandingan konsep *static type checking* di JavaScript.

## Instalasi Flow

```bash
npm install --save-dev flow-bin
npx flow init
```

Perintah `flow init` akan membuat file konfigurasi `.flowconfig` di root proyek.

## Cara Kerja Flow

Flow bekerja dengan menambahkan komentar khusus `// @flow` di baris pertama file agar file tersebut diperiksa oleh Flow.

```javascript
// @flow

function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);      // ✅ OK
add(1, "dua");  // ❌ Error: string tidak sesuai dengan number
```

## Sintaks Anotasi Tipe di Flow

### Tipe Dasar

```javascript
// @flow
let age: number = 25;
let name: string = "Budi";
let isActive: boolean = true;
let list: Array<number> = [1, 2, 3];
```

### Tipe Objek

```javascript
// @flow
type User = {
  name: string,
  age: number,
  isActive: boolean,
};

function printUser(user: User): void {
  console.log(user.name);
}
```

### Nullable Type

Flow menggunakan tanda `?` untuk tipe yang boleh bernilai `null` atau `undefined`.

```javascript
// @flow
function findUser(id: number): ?User {
  // bisa mengembalikan User, null, atau undefined
  return null;
}
```

### Union Type

```javascript
// @flow
function printId(id: number | string): void {
  console.log(id);
}
```

## Menjalankan Pengecekan Flow

```bash
npx flow
```

Flow akan menganalisis semua file yang mengandung `// @flow` dan menampilkan daftar error tipe (jika ada), tanpa perlu mengubah cara file JavaScript dijalankan (Flow hanya alat pengecekan, bukan compiler runtime).

## Flow vs JSDoc

| Aspek | JSDoc | Flow |
|-------|-------|------|
| Cara menulis tipe | Lewat komentar `/** */` | Lewat sintaks langsung di kode |
| Perlu babel/compiler? | Tidak | Ya, perlu `babel-plugin-transform-flow-strip-types` untuk menghapus anotasi sebelum dijalankan di Node.js/browser |
| Tingkat ketelitian | Ringan | Lebih ketat & lengkap |
| Popularitas saat ini | Umum, ringan | Menurun, banyak beralih ke TypeScript |

## Menghapus Anotasi Flow Sebelum Dijalankan

Karena browser/Node.js tidak mengenali sintaks `: number`, `: string`, dll., kita perlu mengubahnya (strip) sebelum dijalankan, biasanya menggunakan Babel:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-flow
```

```json
// .babelrc
{
  "presets": ["@babel/preset-flow"]
}
```

```bash
npx babel src --out-dir dist
```

## Latihan Kecil

Tambahkan anotasi tipe Flow pada fungsi berikut:

```javascript
function calculateDiscount(price, percentage) {
  return price - (price * percentage / 100);
}
```

## Poin Penting

- Flow adalah *static type checker* untuk JavaScript dengan anotasi tipe langsung di kode.
- Butuh langkah tambahan (Babel) untuk menghapus anotasi sebelum kode dijalankan.
- Saat ini banyak proyek beralih ke **TypeScript**, yang akan dibahas di bab selanjutnya.

---
⬅️ [03. JSDoc, Alat Dokumentasi Kode](03-jsdoc-alat-dokumentasi.md) | ➡️ [05. TypeScript, Superset dari JavaScript](05-typescript-superset-javascript.md)