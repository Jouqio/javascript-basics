# 13. Latihan dan Quiz

Selamat! Kamu sudah mempelajari semua materi dasar **Conditional Statement** di JavaScript. Sekarang saatnya menguji pemahamanmu dengan latihan soal dan quiz berikut.

> 💡 Tips: Coba kerjakan dulu tanpa melihat kunci jawaban di file `jawaban.js`. Setelah selesai, baru cocokkan hasilnya!

## 📝 Bagian A: Quiz Pilihan Ganda (Konsep)

**1. Apa hasil dari `5 == "5"`?**
- a) `true`
- b) `false`
- c) Error
- d) `undefined`

**2. Manakah dari berikut ini yang termasuk nilai FALSY?**
- a) `"0"` (string)
- b) `[]` (array kosong)
- c) `0` (angka nol)
- d) `"false"` (string)

**3. Apa yang terjadi jika kamu lupa menulis `break` di dalam `switch`?**
- a) Program akan error
- b) Case selanjutnya tetap dievaluasi walau tidak cocok (fall-through)
- c) Tidak ada efek apapun
- d) Program berhenti total

**4. Manakah kode berikut yang setara dengan:**
```js
if (a) {
  console.log("Halo");
}
```
- a) `a || console.log("Halo");`
- b) `a && console.log("Halo");`
- c) `!a && console.log("Halo");`
- d) `a === console.log("Halo");`

**5. Apa hasil dari `console.log(!!"")`?**
- a) `true`
- b) `false`
- c) `""`
- d) Error

*(Kunci jawaban ada di bagian bawah file ini)*

## 💻 Bagian B: Latihan Coding

Kerjakan soal-soal berikut di file `latihan.js` yang sudah disediakan (ada template kosong dengan komentar `// TULIS KODE DI SINI`).

### Soal 1: Cek Bilangan Positif/Negatif/Nol
Buat program yang menerima sebuah angka, lalu mencetak:
- `"Positif"` jika angka > 0
- `"Negatif"` jika angka < 0
- `"Nol"` jika angka === 0

### Soal 2: Kategori Umur
Buat program dengan variabel `umur` yang mencetak kategori berikut:
- `< 13`: "Anak-anak"
- `13 - 17`: "Remaja"
- `18 - 59`: "Dewasa"
- `>= 60`: "Lansia"

### Soal 3: Cek Tahun Kabisat
Buat program untuk mengecek apakah sebuah `tahun` adalah tahun kabisat. Aturan tahun kabisat:
- Habis dibagi 4 **DAN** (tidak habis dibagi 100 **ATAU** habis dibagi 400)

Contoh: 2024 → kabisat, 1900 → bukan kabisat, 2000 → kabisat

### Soal 4: Konversi Nilai ke Grade (dengan Switch)
Buat program yang menerima `nilai` (0-100), lalu konversi ke grade menggunakan pendekatan berikut:
- Bagi nilai dengan 10, bulatkan ke bawah (misal 85 → 8)
- Gunakan `switch` untuk mencetak grade: 10/9 → "A", 8 → "B", 7 → "C", 6 → "D", selain itu → "E"

### Soal 5: Validasi Form Sederhana
Buat program dengan variabel `nama`, `email`, `umur`. Cetak `"Form valid"` hanya jika:
- `nama` tidak kosong
- `email` mengandung karakter `"@"` (gunakan `email.includes("@")`)
- `umur` adalah angka dan >= 17

Jika ada syarat yang tidak terpenuhi, cetak pesan error yang sesuai (misal: `"Nama tidak boleh kosong"`).

## 🎯 Tantangan Bonus (Lebih Sulit)

### Soal 6: FizzBuzz
Buat program yang mengecek sebuah `angka` dari 1-100:
- Jika habis dibagi 3 **dan** 5, cetak `"FizzBuzz"`
- Jika habis dibagi 3 saja, cetak `"Fizz"`
- Jika habis dibagi 5 saja, cetak `"Buzz"`
- Selain itu, cetak angkanya sendiri

*(Soal ini adalah soal interview klasik yang sangat sering dipakai untuk menguji pemahaman conditional statement!)*

---

## 🔑 Kunci Jawaban Quiz Pilihan Ganda

<details>
<summary>Klik untuk melihat jawaban</summary>

1. **a) `true`** — karena `==` mengonversi tipe data, `"5"` jadi `5`
2. **c) `0`** — angka nol adalah satu-satunya di antara opsi yang falsy (`"0"` string, `[]`, dan `"false"` string semuanya truthy)
3. **b)** — tanpa `break`, case selanjutnya tetap dijalankan (fall-through)
4. **b) `a && console.log("Halo");`** — short circuit `&&` hanya menjalankan bagian kanan jika `a` truthy
5. **b) `false`** — `!""` adalah `true` (karena `""` falsy), lalu `!true` adalah `false`

</details>

Untuk kunci jawaban soal coding, lihat file `jawaban.js` di folder ini — tapi coba kerjakan sendiri dulu ya! 💪
