# 3. JSDoc, Alat Dokumentasi Kode

## Apa itu JSDoc?

**JSDoc** adalah standar penulisan komentar dokumentasi di JavaScript menggunakan format khusus (`/** ... */`). JSDoc memungkinkan kita menambahkan **anotasi tipe data** dan **penjelasan fungsi** tanpa mengubah JavaScript menjadi bahasa lain (berbeda dengan TypeScript).

## Kenapa Perlu JSDoc?

1. Memberi **dokumentasi otomatis** yang bisa dibaca editor (VS Code akan menampilkan info saat *hover*).
2. Membantu **type checking ringan** tanpa perlu compiler tambahan.
3. Memudahkan tim lain memahami fungsi tanpa membaca isi kode secara detail.

## Sintaks Dasar JSDoc

```javascript
/**
 * Menjumlahkan dua angka.
 * @param {number} a - Angka pertama
 * @param {number} b - Angka kedua
 * @returns {number} Hasil penjumlahan
 */
function add(a, b) {
  return a + b;
}
```

Saat menulis `add(` di editor seperti VS Code, akan muncul info tipe parameter dan deskripsi fungsi secara otomatis.

## Tag-Tag Umum dalam JSDoc

| Tag | Fungsi | Contoh |
|-----|--------|--------|
| `@param` | Mendeskripsikan parameter fungsi | `@param {string} name` |
| `@returns` / `@return` | Mendeskripsikan nilai kembalian | `@returns {boolean}` |
| `@type` | Menentukan tipe suatu variabel | `@type {number}` |
| `@typedef` | Membuat tipe custom | lihat contoh di bawah |
| `@property` | Properti dalam objek/tipe custom | dipakai bersama `@typedef` |
| `@example` | Contoh penggunaan fungsi | `@example add(1, 2)` |
| `@deprecated` | Menandai fungsi usang | `@deprecated Gunakan sum() sebagai gantinya` |
| `@throws` | Menjelaskan error yang mungkin dilempar | `@throws {Error} Jika input bukan angka` |

## Contoh: Membuat Tipe Custom dengan `@typedef`

```javascript
/**
 * @typedef {Object} User
 * @property {string} name - Nama pengguna
 * @property {number} age - Umur pengguna
 * @property {boolean} isActive - Status aktif
 */

/**
 * Menampilkan info pengguna.
 * @param {User} user
 */
function printUser(user) {
  console.log(`${user.name} (${user.age}) - ${user.isActive ? "Aktif" : "Nonaktif"}`);
}

printUser({ name: "Budi", age: 25, isActive: true });
```

## Union Type & Optional Parameter di JSDoc

```javascript
/**
 * Mencari user berdasarkan id atau nama.
 * @param {number|string} identifier - Bisa berupa id (number) atau nama (string)
 * @param {boolean} [strict=false] - Parameter opsional, default false
 * @returns {User|null}
 */
function findUser(identifier, strict = false) {
  // implementasi...
  return null;
}
```

Tanda `[strict=false]` berarti parameter **opsional** dengan nilai default `false`.

## Mengaktifkan Type-Checking JSDoc di VS Code (Opsional)

Kita bisa memanfaatkan JSDoc untuk pengecekan tipe tanpa TypeScript penuh, dengan menambahkan komentar berikut di baris paling atas file `.js`:

```javascript
// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

add(1, "dua"); // ❌ Editor akan menampilkan error: Argument tipe string tidak sesuai
```

VS Code (berbasis mesin TypeScript) akan otomatis memvalidasi tipe berdasarkan anotasi JSDoc, meskipun file tetap `.js` murni.

## Latihan Kecil

Tambahkan anotasi JSDoc lengkap (`@param`, `@returns`) untuk fungsi berikut:

```javascript
function calculateDiscount(price, percentage) {
  return price - (price * percentage / 100);
}
```

## Poin Penting

- JSDoc adalah cara menuliskan dokumentasi + tipe data lewat komentar, tanpa mengubah `.js` menjadi bahasa lain.
- Berguna untuk dokumentasi otomatis di editor dan type-checking ringan (`// @ts-check`).
- JSDoc menjadi jembatan sebelum mempelajari alat type-checking yang lebih ketat seperti **Flow** dan **TypeScript**.

---
⬅️ [02. Type System dalam JavaScript](02-type-system-javascript.md) | ➡️ [04. Flow, Type Check Library](04-flow-type-check-library.md)