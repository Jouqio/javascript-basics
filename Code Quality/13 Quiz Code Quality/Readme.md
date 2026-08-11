# 13. Kuis: Code Quality

Kerjakan kuis berikut untuk menguji pemahamanmu terhadap seluruh materi Code Quality. Kunci jawaban ada di bagian paling bawah — coba jawab dulu sebelum melihatnya!

## Bagian A: Pilihan Ganda

**1. Manakah pernyataan yang benar tentang JavaScript?**
A. Statically typed dan strongly typed
B. Dynamically typed dan weakly typed
C. Statically typed dan weakly typed
D. Dynamically typed dan strongly typed

**2. Apa hasil dari `"5" + 3` di JavaScript?**
A. `8`
B. `"53"`
C. `Error`
D. `undefined`

**3. Operator mana yang membandingkan nilai TANPA melakukan type coercion?**
A. `==`
B. `=`
C. `===`
D. `!=`

**4. Tag JSDoc apa yang digunakan untuk mendeskripsikan parameter fungsi?**
A. `@type`
B. `@param`
C. `@arg`
D. `@input`

**5. Apa perbedaan utama antara Flow dan TypeScript?**
A. Flow tidak bisa mendeteksi error tipe sama sekali
B. TypeScript adalah superset JavaScript yang dikompilasi penuh, sedangkan Flow menambahkan anotasi tipe yang perlu di-strip dengan Babel
C. Flow hanya bisa dipakai di browser, TypeScript hanya di Node.js
D. Tidak ada perbedaan, keduanya sama persis

**6. Alat apa yang digunakan untuk menegakkan aturan kode secara otomatis (mendeteksi bug potensial & pelanggaran style guide)?**
A. Prettier
B. ESLint
C. npm
D. Babel

**7. Apa fungsi utama Prettier?**
A. Menjalankan unit test
B. Merapikan format kode secara otomatis dan konsisten
C. Mengompilasi TypeScript ke JavaScript
D. Mendeteksi kerentanan keamanan

**8. Dalam Piramida Testing, jenis test manakah yang seharusnya paling BANYAK jumlahnya?**
A. End-to-End (E2E) Test
B. Integration Test
C. Unit Test
D. Manual Test

**9. Apa kepanjangan dari prinsip "FIRST" dalam menulis test yang baik?**
A. Fast, Independent, Repeatable, Self-validating, Timely
B. Fast, Integrated, Reliable, Simple, Tested
C. Flexible, Isolated, Robust, Scalable, Thorough
D. Functional, Interactive, Reusable, Structured, Tidy

**10. Perintah apa yang digunakan untuk menjalankan test bawaan di Bun?**
A. `npm run test`
B. `node --test`
C. `bun test`
D. `jest run`

## Bagian B: Esai Singkat

**11.** Jelaskan mengapa penggunaan operator `===` lebih disarankan dibanding `==` dalam JavaScript. Berikan satu contoh kasus di mana `==` bisa menyebabkan bug.

**12.** Sebutkan dan jelaskan secara singkat tiga jenis testing yang dibahas dalam materi ini (Unit, Integration, E2E), beserta perbedaan kecepatan dan cakupannya.

**13.** Menurutmu, apa perbedaan mendasar antara peran **Style Guide** dan **Linter**? Mengapa keduanya tetap dibutuhkan meskipun saling berkaitan?

**14.** Buatlah contoh fungsi JavaScript sederhana (bebas, misal validasi email atau menghitung total belanja), lalu tuliskan minimal 3 unit test untuk fungsi tersebut menggunakan sintaks Jest atau Bun (`bun:test`), mencakup kasus normal, kasus batas, dan kasus error.

---

## 🔑 Kunci Jawaban

### Bagian A
1. **B** — JavaScript bersifat *dynamically typed* dan *weakly typed*.
2. **B** — `"5" + 3` menghasilkan `"53"` karena angka dikonversi menjadi string saat digabung dengan operator `+`.
3. **C** — `===` (strict equality) membandingkan nilai dan tipe data tanpa konversi.
4. **B** — `@param` digunakan untuk mendeskripsikan parameter fungsi dalam JSDoc.
5. **B** — TypeScript adalah superset JS yang dikompilasi penuh (`tsc`), sedangkan Flow menambahkan anotasi tipe yang perlu di-strip menggunakan Babel sebelum dijalankan.
6. **B** — ESLint digunakan untuk menegakkan aturan kode dan mendeteksi potensi bug.
7. **B** — Prettier fokus merapikan format kode secara otomatis dan konsisten.
8. **C** — Unit Test seharusnya paling banyak jumlahnya karena cepat dan murah dijalankan (dasar piramida testing).
9. **A** — Fast, Independent, Repeatable, Self-validating, Timely.
10. **C** — `bun test` adalah perintah untuk menjalankan test bawaan di Bun.

### Bagian B (Panduan Jawaban)

**11.** `===` disarankan karena tidak melakukan type coercion, sehingga hasil perbandingan lebih dapat diprediksi. Contoh bug dengan `==`: `0 == "0"` menghasilkan `true` meskipun tipe datanya berbeda (number vs string), yang bisa menyebabkan logika program salah jika tidak disengaja.

**12.**
- **Unit Test**: menguji satu unit kode terkecil (biasanya satu fungsi) secara terisolasi — paling cepat, cakupan paling sempit, jumlahnya paling banyak.
- **Integration Test**: menguji interaksi antar beberapa modul/unit (misalnya fungsi yang mengakses database) — kecepatan sedang, cakupan lebih luas.
- **E2E Test**: menguji aplikasi secara keseluruhan dari sudut pandang pengguna — paling lambat, cakupan paling luas, jumlahnya paling sedikit.

**13.** Style Guide adalah **dokumen aturan/kesepakatan** tertulis tentang bagaimana kode seharusnya ditulis (misalnya penamaan, indentasi). Linter adalah **alat otomatis** yang menerapkan dan menegakkan aturan tersebut secara nyata dalam kode, termasuk mendeteksi pelanggaran maupun potensi bug. Keduanya tetap dibutuhkan karena Style Guide memberi arah/kesepakatan, sedangkan Linter memastikan kesepakatan itu benar-benar dipatuhi secara konsisten dan otomatis, tanpa mengandalkan disiplin manual setiap developer.

**14.** Jawaban bervariasi tergantung fungsi yang dibuat siswa — pastikan strukturnya mengikuti pola **Arrange–Act–Assert**, dan mencakup minimal: 1 kasus normal, 1 kasus batas (edge case), dan 1 kasus error/tidak valid. Contoh kerangka:

```javascript
function isValidEmail(email) {
  if (typeof email !== "string") {
    throw new Error("Email harus berupa string");
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

test("email valid mengembalikan true", () => {
  expect(isValidEmail("budi@mail.com")).toBe(true);
});

test("email tanpa domain mengembalikan false", () => {
  expect(isValidEmail("budi@")).toBe(false);
});

test("input bukan string melempar error", () => {
  expect(() => isValidEmail(12345)).toThrow();
});
```

---
⬅️ [12. Rangkuman Code Quality](12-rangkuman-code-quality.md) | 🏠 [Kembali ke README](../README.md)

**Selamat! 🎉 Kamu telah menyelesaikan seluruh materi Code Quality.**