# 8. Pengujian Program

## Apa itu Pengujian Program (Testing)?

**Pengujian program (testing)** adalah proses memeriksa apakah kode berjalan sesuai dengan yang diharapkan. Testing bisa dilakukan secara **manual** (mencoba aplikasi langsung) atau **otomatis** (menulis kode khusus untuk menguji kode lain).

## Kenapa Testing Penting untuk Code Quality?

1. Menemukan bug **sebelum** kode dirilis ke pengguna.
2. Memberi **kepercayaan diri** saat melakukan refactoring/perubahan kode besar.
3. Berfungsi sebagai **dokumentasi hidup** — test menunjukkan bagaimana suatu fungsi seharusnya digunakan.
4. Mencegah bug lama muncul kembali (*regression*).

## Jenis-Jenis Testing

### 1. Unit Test

Menguji **satu unit kode terkecil** (biasanya satu fungsi) secara terisolasi.

```javascript
function add(a, b) {
  return a + b;
}

// Unit test untuk fungsi add
// add(2, 3) harus menghasilkan 5
```

### 2. Integration Test

Menguji **beberapa unit/modul** yang bekerja sama, misalnya fungsi yang mengakses database atau API.

### 3. End-to-End (E2E) Test

Menguji aplikasi **secara keseluruhan**, dari sisi pengguna, seperti mengklik tombol di browser dan memeriksa hasil di layar.

```
Unit Test  ->  cepat, sempit, banyak jumlahnya
Integration Test  ->  sedang
E2E Test  ->  lambat, luas, jumlahnya sedikit
```

Konsep ini sering digambarkan sebagai **Piramida Testing (Testing Pyramid)** — semakin ke atas (E2E), jumlah test sebaiknya semakin sedikit karena lebih lambat dan mahal dijalankan.

## Anatomi Sebuah Test: AAA Pattern

Pola umum menulis test disebut **Arrange–Act–Assert**:

```javascript
test("menjumlahkan dua angka", () => {
  // Arrange: siapkan data
  const a = 2;
  const b = 3;

  // Act: jalankan fungsi yang diuji
  const result = add(a, b);

  // Assert: periksa hasilnya sesuai harapan
  expect(result).toBe(5);
});
```

## Istilah Penting dalam Testing

| Istilah | Penjelasan |
|---------|-----------|
| **Assertion** | Pernyataan untuk memeriksa apakah suatu nilai sesuai harapan (`expect(x).toBe(y)`) |
| **Test Suite** | Kumpulan beberapa test yang berkaitan (biasanya dalam satu file, dibungkus `describe()`) |
| **Test Case** | Satu skenario pengujian tunggal (`test()` atau `it()`) |
| **Mock** | Objek/fungsi tiruan untuk menggantikan dependensi asli (misalnya API call) saat testing |
| **Coverage** | Persentase seberapa banyak baris kode yang sudah diuji oleh test |

## Contoh Sederhana (Pseudo-code, Framework Umum)

```javascript
describe("Kalkulator", () => {
  test("penjumlahan dua angka positif", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("penjumlahan angka negatif", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("penjumlahan dengan nol", () => {
    expect(add(5, 0)).toBe(5);
  });
});
```

## Poin Penting

- Testing memastikan kode benar secara **fungsi**, bukan hanya rapi secara **gaya penulisan**.
- Ada tiga jenis utama: **Unit**, **Integration**, dan **E2E test**.
- Gunakan pola **Arrange–Act–Assert** saat menulis test.
- Selanjutnya kita akan praktik langsung menulis test menggunakan runtime **Node.js** (Bab 9) dan **Bun** (Bab 10).

---
⬅️ [07. Code Convention dengan Linter Library](07-code-convention-linter.md) | ➡️ [09. Testing dalam Node.js](09-testing-dalam-nodejs.md)