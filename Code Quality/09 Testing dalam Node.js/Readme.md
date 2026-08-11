# 9. Testing dalam Node.js

## Dua Cara Testing di Node.js

1. Menggunakan **modul bawaan Node.js**: `node:test` (tersedia sejak Node.js v18+).
2. Menggunakan **library pihak ketiga** populer seperti **Jest** atau **Vitest**.

## 1. Built-in Test Runner: `node:test`

Sejak Node.js versi 18, kita bisa menulis test **tanpa install library tambahan**.

### Contoh File `sum.js`

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = { sum };
```

### Contoh File `sum.test.js`

```javascript
const test = require("node:test");
const assert = require("node:assert");
const { sum } = require("./sum");

test("menjumlahkan 2 + 3 sama dengan 5", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("menjumlahkan angka negatif", () => {
  assert.strictEqual(sum(-2, -3), -5);
});
```

### Menjalankan Test

```bash
node --test
```

Contoh output:

```
▶ sum.test.js
  ✔ menjumlahkan 2 + 3 sama dengan 5 (1.2ms)
  ✔ menjumlahkan angka negatif (0.4ms)
▶ sum.test.js (2 tests, 2 pass, 0 fail)
```

## 2. Menggunakan Jest (Library Populer)

**Jest** adalah framework testing yang sangat populer, dibuat oleh Meta, banyak dipakai di proyek React/Node.js.

### Instalasi

```bash
npm install --save-dev jest
```

Tambahkan script di `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### Contoh Test dengan Jest

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = { sum };
```

```javascript
// sum.test.js
const { sum } = require("./sum");

describe("fungsi sum", () => {
  test("2 + 3 = 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("hasil negatif jika kedua angka negatif", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test("melempar tipe number", () => {
    expect(typeof sum(1, 2)).toBe("number");
  });
});
```

### Menjalankan Jest

```bash
npm test
```

### Matcher Umum di Jest

| Matcher | Fungsi |
|---------|--------|
| `toBe(value)` | Membandingkan nilai primitif secara persis |
| `toEqual(obj)` | Membandingkan isi objek/array (deep equality) |
| `toBeTruthy()` / `toBeFalsy()` | Memeriksa nilai truthy/falsy |
| `toContain(item)` | Memeriksa apakah array/string mengandung item tertentu |
| `toThrow()` | Memeriksa apakah fungsi melempar error |
| `toBeGreaterThan(n)` | Memeriksa nilai lebih besar dari `n` |

### Mocking Sederhana di Jest

```javascript
const fetchData = jest.fn(() => Promise.resolve({ id: 1, name: "Budi" }));

test("mock function dipanggil dengan benar", async () => {
  const data = await fetchData();
  expect(fetchData).toHaveBeenCalledTimes(1);
  expect(data.name).toBe("Budi");
});
```

## Melihat Test Coverage

```bash
npx jest --coverage
```

Akan menghasilkan laporan seperti:

```
File      | % Stmts | % Branch | % Funcs | % Lines
----------|---------|----------|---------|--------
sum.js    |   100   |   100    |   100   |   100
```

## `node:test` vs Jest

| Aspek | `node:test` (bawaan) | Jest |
|-------|----------------------|------|
| Instalasi | Tidak perlu | Perlu `npm install` |
| Fitur mocking bawaan | Terbatas | Lengkap |
| Coverage bawaan | Ya (`node --test --experimental-test-coverage`) | Ya |
| Kecocokan proyek | Proyek kecil/sederhana | Proyek besar/kompleks |

## Latihan Kecil

Buatlah test untuk fungsi berikut menggunakan `node:test` **atau** Jest:

```javascript
function isEven(number) {
  return number % 2 === 0;
}
```

Buat minimal 2 test case: satu untuk angka genap, satu untuk angka ganjil.

## Poin Penting

- Node.js sejak v18 punya test runner bawaan (`node:test`) tanpa perlu instalasi tambahan.
- **Jest** adalah pilihan populer untuk proyek yang butuh fitur lebih lengkap (mocking, coverage, snapshot testing).
- Selanjutnya kita akan melihat cara testing di runtime alternatif yang lebih baru: **Bun**.

---
⬅️ [08. Pengujian Program](08-pengujian-program.md) | ➡️ [10. Testing dalam Bun](10-testing-dalam-bun.md)