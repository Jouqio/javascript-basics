# 13. Quiz Operator

Uji pemahamanmu tentang materi Operator dengan quiz berikut. Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah!

---

## Bagian A — Pilihan Ganda

**1. Apa hasil dari `10 % 3`?**
a. 3
b. 3.33
c. 1
d. 0

**2. Manakah yang merupakan operator UNARY (hanya 1 operand)?**
a. `5 + 3`
b. `!true`
c. `a && b`
d. `kondisi ? a : b`

**3. Apa hasil dari `"5" + 3`?**
a. `8`
b. `"53"`
c. Error
d. `undefined`

**4. Apa perbedaan utama antara `==` dan `===`?**
a. Tidak ada bedanya
b. `==` membandingkan nilai dan tipe, `===` hanya nilai
c. `===` membandingkan nilai DAN tipe data, `==` hanya nilai (dengan konversi tipe otomatis)
d. `==` hanya untuk angka, `===` untuk semua tipe

**5. Manakah dari berikut yang termasuk nilai FALSY?**
a. `"0"` (string berisi angka 0)
b. `[]` (array kosong)
c. `0` (angka nol)
d. `{}` (object kosong)

**6. Apa hasil dari `false || "Halo"`?**
a. `false`
b. `"Halo"`
c. `true`
d. `undefined`

**7. Kenapa `??` lebih disarankan dibanding `||` untuk kasus tertentu?**
a. `??` lebih cepat dieksekusi
b. `??` hanya menganggap `null`/`undefined` sebagai kosong, sedangkan `||` menganggap semua nilai falsy (termasuk 0) sebagai kosong
c. `??` hanya bisa dipakai dengan angka
d. Tidak ada bedanya, keduanya identik

**8. Apa yang terjadi jika kita menggunakan `user.alamat?.kota` padahal `user.alamat` bernilai `null`?**
a. Program akan error (TypeError)
b. Hasilnya `undefined`, tidak ada error
c. Hasilnya `null`
d. Hasilnya string kosong

**9. Apa hasil dari `2 + 3 * 4`?**
a. `20`
b. `14`
c. `24`
d. Error

**10. Manakah operator yang punya prioritas PALING RENDAH?**
a. `*` (perkalian)
b. `&&` (AND)
c. `=` (assignment)
d. `()` (kurung)

---

## Bagian B — Essay Singkat

**11.** Jelaskan dengan kata-katamu sendiri, kenapa sebaiknya kita selalu menggunakan `===` dibanding `==` dalam kode JavaScript?

**12.** Buatlah contoh kode sederhana menggunakan **operator ternary** untuk menentukan apakah sebuah angka adalah bilangan positif, negatif, atau nol.

**13.** Jelaskan perbedaan antara operator `||` dan `??` dengan memberi contoh kasus di mana hasilnya akan **berbeda**.

---

## Kunci Jawaban

<details>
<summary>Klik untuk melihat jawaban (Bagian A)</summary>

1. c — `10 % 3 = 1` (sisa pembagian)
2. b — `!true` hanya butuh 1 operand
3. b — `"53"` (string + angka = digabung jadi string)
4. c — `===` membandingkan nilai DAN tipe data
5. c — `0` adalah falsy, sedangkan `"0"`, `[]`, `{}` semuanya truthy
6. b — `"Halo"` (karena `false` falsy, lanjut ke sisi kanan)
7. b — `??` hanya menganggap `null`/`undefined` sebagai kosong
8. b — Hasilnya `undefined`, tidak error (itulah gunanya optional chaining)
9. b — `14` (perkalian didahulukan: 3*4=12, lalu 2+12=14)
10. c — `=` (assignment) memiliki prioritas paling rendah

</details>

<details>
<summary>Klik untuk melihat panduan jawaban (Bagian B)</summary>

**11.** `===` (strict equality) membandingkan **nilai DAN tipe data** sekaligus, sehingga perilakunya lebih **jelas dan mudah ditebak**. Sedangkan `==` (loose equality) melakukan **konversi tipe data otomatis** sebelum membandingkan, yang seringkali menghasilkan perilaku tidak terduga (misalnya `0 == false` bernilai `true`), sehingga rawan menyebabkan bug.

**12.**
```javascript
function cekTandaAngka(angka) {
  return angka > 0 ? "positif" : angka < 0 ? "negatif" : "nol";
}

console.log(cekTandaAngka(5));  // "positif"
console.log(cekTandaAngka(-3)); // "negatif"
console.log(cekTandaAngka(0));  // "nol"
```

**13.** `||` menganggap **semua nilai falsy** (`0`, `""`, `false`, `null`, `undefined`, `NaN`) sebagai "kosong" dan akan diganti nilai default, sedangkan `??` **hanya** menganggap `null` dan `undefined` sebagai "kosong". Contoh kasus berbeda:
```javascript
const jumlahStok = 0;
console.log(jumlahStok || 10); // 10 (SALAH, karena 0 dianggap kosong oleh ||)
console.log(jumlahStok ?? 10); // 0  (BENAR, karena 0 bukan null/undefined)
```

</details>

---

**Skor kamu:** Hitung berapa jawaban benar dari 10 soal pilihan ganda.
- 9-10 benar → 🌟 Sangat menguasai materi Operator!
- 6-8 benar → 👍 Cukup baik, coba ulas lagi materi yang masih ragu
- < 6 benar → 📖 Sebaiknya baca ulang materi 01-11 sebelum lanjut

Selamat, kamu telah menyelesaikan seluruh materi **Operator** dalam JavaScript! 🎉
