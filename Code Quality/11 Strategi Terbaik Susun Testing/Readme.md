# 11. Strategi Terbaik Susun Testing

## Mengapa Strategi Testing Penting?

Menulis test itu mudah, tapi menulis test yang **efektif, efisien, dan mudah dipelihara** butuh strategi. Testing yang buruk justru bisa memperlambat development dan membuat frustrasi tim.

## 1. Ikuti Prinsip Piramida Testing

```
        /\
       /E2E\        <- sedikit, lambat, mahal
      /------\
     /Integr. \     <- sedang
    /----------\
   / Unit Tests \   <- banyak, cepat, murah
  /--------------\
```

- **Unit test** sebaiknya paling banyak jumlahnya (cepat dijalankan, mudah menemukan letak bug).
- **Integration test** secukupnya, menguji interaksi antar modul.
- **E2E test** sedikit saja, hanya untuk alur paling kritikal (misal: login, checkout).

## 2. Tulis Test yang FIRST

Prinsip **FIRST** untuk test yang baik:

| Huruf | Arti | Penjelasan |
|-------|------|-----------|
| **F**ast | Cepat | Test harus berjalan cepat agar sering dijalankan |
| **I**ndependent | Independen | Satu test tidak boleh bergantung pada test lain |
| **R**epeatable | Bisa diulang | Hasil test harus sama setiap kali dijalankan, di lingkungan manapun |
| **S**elf-validating | Validasi mandiri | Test harus menghasilkan pass/fail secara otomatis, tanpa cek manual |
| **T**imely | Tepat waktu | Idealnya ditulis bersamaan (atau sebelum) kode produksi dibuat |

## 3. Uji Perilaku (Behavior), Bukan Detail Implementasi

```javascript
// ❌ Kurang baik: menguji detail internal yang mudah berubah
test("variabel internal cache terisi", () => {
  expect(myFunction.__cache).toBeDefined();
});

// ✅ Lebih baik: menguji hasil/perilaku yang terlihat dari luar
test("memanggil fungsi dua kali dengan input sama mengembalikan hasil sama", () => {
  expect(myFunction(5)).toBe(myFunction(5));
});
```

Dengan begini, jika implementasi internal berubah (tapi hasil akhirnya tetap sama), test **tidak perlu diubah**.

## 4. Gunakan Nama Test yang Deskriptif

```javascript
// ❌ Tidak jelas
test("test1", () => { ... });

// ✅ Jelas, menjelaskan skenario dan hasil yang diharapkan
test("mengembalikan error jika umur bernilai negatif", () => { ... });
```

## 5. Uji Kasus Normal, Batas (Edge Case), dan Kasus Error

```javascript
describe("fungsi validateAge", () => {
  test("umur normal (25) dianggap valid", () => {
    expect(validateAge(25)).toBe(true);
  });

  test("umur 0 (batas bawah) dianggap valid", () => {
    expect(validateAge(0)).toBe(true);
  });

  test("umur negatif dianggap tidak valid", () => {
    expect(validateAge(-1)).toBe(false);
  });

  test("umur berupa string melempar error", () => {
    expect(() => validateAge("dua puluh")).toThrow();
  });
});
```

> 💡 Selalu pikirkan: **kasus normal**, **kasus batas** (nol, kosong, maksimum), dan **kasus salah/error**.

## 6. Hindari Test yang Saling Bergantung

```javascript
// ❌ Buruk: test kedua bergantung pada state dari test pertama
let counter = 0;

test("increment pertama", () => {
  counter++;
  expect(counter).toBe(1);
});

test("increment kedua", () => {
  counter++;
  expect(counter).toBe(2); // gagal jika test pertama tidak dijalankan lebih dulu
});
```

Gunakan `beforeEach`/`afterEach` untuk mereset state antar test.

```javascript
let counter;

beforeEach(() => {
  counter = 0; // reset sebelum setiap test
});

test("increment sekali", () => {
  counter++;
  expect(counter).toBe(1);
});
```

## 7. Gunakan Mock untuk Dependensi Eksternal

Saat menguji fungsi yang bergantung pada API eksternal, database, atau waktu (`Date.now()`), gunakan **mock** agar test tetap cepat dan konsisten (tidak bergantung koneksi internet, dsb.).

```javascript
const getUser = jest.fn().mockResolvedValue({ id: 1, name: "Budi" });
```

## 8. Perhatikan Test Coverage, Tapi Jangan Terobsesi 100%

- Coverage tinggi (misal 80-90%) adalah indikator baik, tapi **coverage 100% tidak menjamin bebas bug**.
- Fokus utama: **menguji logika penting dan skenario yang berisiko tinggi**, bukan sekadar mengejar angka.

## 9. Integrasikan Testing ke CI/CD

Jalankan test secara otomatis setiap kali ada perubahan kode (misalnya lewat GitHub Actions), sehingga bug terdeteksi sebelum kode digabungkan ke branch utama.

```yaml
# .github/workflows/test.yml (contoh sederhana)
name: Run Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm test
```

## Latihan Kecil

Diberikan fungsi berikut, tuliskan minimal 4 test case (normal, batas, dan error) sesuai strategi di atas:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan nol");
  }
  return a / b;
}
```

## Poin Penting

- Ikuti **piramida testing**: unit test terbanyak, E2E paling sedikit.
- Test yang baik bersifat **FIRST**: Fast, Independent, Repeatable, Self-validating, Timely.
- Uji **perilaku**, bukan detail implementasi internal.
- Selalu pertimbangkan kasus normal, batas, dan error.
- Otomatiskan testing lewat **CI/CD** agar konsisten dijalankan.

---
⬅️ [10. Testing dalam Bun](10-testing-dalam-bun.md) | ➡️ [12. Rangkuman Code Quality](12-rangkuman-code-quality.md)