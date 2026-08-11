# 10. Testing dalam Bun

## Apa itu Bun?

**Bun** adalah runtime JavaScript modern (alternatif dari Node.js) yang dikenal sangat cepat, dan dilengkapi dengan **test runner bawaan** — artinya kita bisa langsung menulis dan menjalankan test **tanpa install library tambahan** seperti Jest.

## Instalasi Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Cek instalasi:

```bash
bun --version
```

## Menulis Test dengan Bun

Bun menggunakan API yang **mirip Jest**, sehingga mudah dipelajari jika sudah familiar dengan Jest.

### Contoh File `sum.js`

```javascript
export function sum(a, b) {
  return a + b;
}
```

### Contoh File `sum.test.js`

```javascript
import { expect, test, describe } from "bun:test";
import { sum } from "./sum";

describe("fungsi sum", () => {
  test("2 + 3 = 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("hasil negatif jika kedua angka negatif", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
```

### Menjalankan Test

```bash
bun test
```

Contoh output:

```
sum.test.js:
✓ fungsi sum > 2 + 3 = 5 [0.05ms]
✓ fungsi sum > hasil negatif jika kedua angka negatif [0.02ms]

 2 pass
 0 fail
 2 expect() calls
```

## Keunggulan Bun untuk Testing

1. **Sangat cepat** — Bun ditulis dengan bahasa Zig dan dioptimalkan untuk performa tinggi, sehingga test berjalan jauh lebih cepat dibanding Jest di banyak kasus.
2. **Tanpa konfigurasi tambahan** — tidak perlu install/konfigurasi Babel, transformer, dsb. Bun mendukung TypeScript & JSX secara native.
3. **API mirip Jest** — memudahkan migrasi dari proyek berbasis Jest.

## Mocking di Bun

```javascript
import { test, expect, mock } from "bun:test";

const fetchData = mock(() => Promise.resolve({ id: 1, name: "Budi" }));

test("mock function dipanggil dengan benar", async () => {
  const data = await fetchData();
  expect(fetchData).toHaveBeenCalledTimes(1);
  expect(data.name).toBe("Budi");
});
```

## Test Coverage di Bun

```bash
bun test --coverage
```

## Watch Mode (Menjalankan Ulang Test Otomatis)

```bash
bun test --watch
```

Berguna saat development: setiap kali file disimpan, test akan otomatis dijalankan ulang.

## Perbandingan Node.js (`node:test` / Jest) vs Bun

| Aspek | Node.js (`node:test`) | Jest | Bun (`bun:test`) |
|-------|------------------------|------|-------------------|
| Perlu instalasi tambahan | Tidak | Ya | Tidak |
| Kecepatan | Sedang | Sedang–lambat pada proyek besar | Sangat cepat |
| Dukungan TypeScript native | Tidak langsung | Perlu `ts-jest`/Babel | Ya, native |
| Kematangan ekosistem | Sedang | Sangat matang & lengkap | Masih berkembang |
| API mirip Jest | Berbeda | - | Ya, sangat mirip |

## Latihan Kecil

Migrasikan test Jest berikut ke sintaks `bun:test`:

```javascript
const { sum } = require("./sum");

test("2 + 3 = 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

> 💡 Tip: Ganti `require` dengan `import`, dan tambahkan `import { expect, test } from "bun:test";` di baris pertama.

## Poin Penting

- Bun menyediakan test runner bawaan (`bun:test`) dengan API mirip Jest, tanpa perlu instalasi tambahan.
- Bun unggul dalam kecepatan eksekusi test dan dukungan TypeScript native.
- Setelah memahami cara testing di Node.js dan Bun, langkah selanjutnya adalah mempelajari **strategi terbaik dalam menyusun testing** agar efektif dan efisien.

---
⬅️ [09. Testing dalam Node.js](09-testing-dalam-nodejs.md) | ➡️ [11. Strategi Terbaik Susun Testing](11-strategi-terbaik-susun-testing.md)