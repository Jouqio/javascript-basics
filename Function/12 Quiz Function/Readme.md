# 12. Quiz Function

Uji pemahamanmu tentang materi Function dengan quiz berikut. Coba jawab dulu sebelum melihat kunci jawaban di bagian bawah!

---

## Bagian A — Pilihan Ganda

**1. Manakah yang merupakan contoh Function Declaration?**
a. `const f = function() {}`
b. `function f() {}`
c. `const f = () => {}`
d. `(function() {})()`

**2. Kenapa Function Declaration bisa dipanggil sebelum posisi deklarasinya di kode?**
a. Karena menggunakan `const`
b. Karena mengalami hoisting
c. Karena JavaScript membaca kode dari bawah ke atas
d. Tidak bisa, ini akan selalu error

**3. Apa perbedaan utama Parameter dan Argument?**
a. Tidak ada bedanya, istilah yang sama
b. Parameter adalah nilai saat memanggil, Argument adalah nama variabel saat deklarasi
c. Parameter adalah nama variabel saat deklarasi, Argument adalah nilai saat memanggil
d. Parameter hanya untuk arrow function

**4. Manakah pernyataan yang BENAR tentang Arrow Function?**
a. Arrow function selalu punya `this` miliknya sendiri
b. Arrow function tidak memiliki `this` sendiri, mengikuti scope luar (lexical this)
c. Arrow function tidak bisa menerima parameter
d. Arrow function wajib memiliki nama

**5. Apa yang dimaksud dengan Higher Order Function?**
a. Function yang hanya bisa dipanggil sekali
b. Function yang menerima dan/atau mengembalikan function lain
c. Function yang selalu memanggil dirinya sendiri
d. Function yang tidak punya parameter

**6. Apa kegunaan utama IIFE (Immediately Invoked Function Expression)?**
a. Membuat function bisa dipanggil berkali-kali
b. Membuat function di-hoisting
c. Menjalankan kode sekali dan membuat scope privat
d. Membuat function menjadi rekursif

**7. Dua komponen wajib dalam Recursive Function adalah?**
a. Parameter dan Argument
b. Base Case dan Recursive Case
c. Callback dan Promise
d. Yield dan Next

**8. Apa yang terjadi jika sebuah Recursive Function TIDAK memiliki base case?**
a. Function akan berjalan normal
b. Function hanya berjalan sekali
c. Terjadi infinite recursion dan error "Maximum call stack size exceeded"
d. JavaScript akan otomatis menambahkan base case

**9. Apa fungsi kata kunci `yield` pada Generator Function?**
a. Menghentikan function secara permanen
b. Menghasilkan nilai dan menjeda eksekusi function sampai `.next()` dipanggil lagi
c. Sama seperti `return`, tidak ada bedanya
d. Membuat function menjadi asynchronous

**10. Manakah cara yang BENAR untuk mengembalikan object secara implicit return di Arrow Function?**
a. `const f = () => { nama: "Budi" };`
b. `const f = () => ({ nama: "Budi" });`
c. `const f = () => [nama: "Budi"];`
d. `const f = () => return { nama: "Budi" };`

---

## Bagian B — Essay Singkat

**11.** Jelaskan dengan kata-katamu sendiri, kapan sebaiknya kita menggunakan **Arrow Function** dan kapan sebaiknya menggunakan **Function Declaration/Expression biasa**?

**12.** Buatlah sebuah **Recursive Function** bernama `hitungMundur(n)` yang mencetak angka dari `n` sampai `1` (menurun), lalu mencetak `"Selesai!"` di akhir.

**13.** Jelaskan perbedaan antara Anonymous Function dan Named Function Expression. Berikan masing-masing satu contoh kode singkat.

---

## Kunci Jawaban

<details>
<summary>Klik untuk melihat jawaban (Bagian A)</summary>

1. b — `function f() {}` adalah Function Declaration
2. b — Karena mengalami hoisting
3. c — Parameter = nama variabel saat deklarasi, Argument = nilai saat memanggil
4. b — Arrow function tidak punya `this` sendiri, mengikuti scope luar
5. b — Function yang menerima dan/atau mengembalikan function lain
6. c — Menjalankan kode sekali dan membuat scope privat
7. b — Base Case dan Recursive Case
8. c — Infinite recursion dan error "Maximum call stack size exceeded"
9. b — Menghasilkan nilai dan menjeda eksekusi sampai `.next()` dipanggil lagi
10. b — `const f = () => ({ nama: "Budi" });`

</details>

<details>
<summary>Klik untuk melihat panduan jawaban (Bagian B)</summary>

**11.** Gunakan **Arrow Function** untuk callback singkat (`.map()`, `.filter()`, event handler sederhana) dan ketika ingin mempertahankan `this` dari scope luar. Gunakan **Function Declaration/Expression biasa** untuk method objek yang butuh `this` sendiri, constructor function, atau function utama yang kompleks dan butuh nama jelas untuk debugging.

**12.**
```javascript
function hitungMundur(n) {
  if (n < 1) {
    console.log("Selesai!");
    return;
  }
  console.log(n);
  hitungMundur(n - 1);
}

hitungMundur(5); // 5, 4, 3, 2, 1, Selesai!
```

**13.** **Anonymous Function** adalah function tanpa nama sama sekali, biasanya dipakai sekali sebagai callback:
```javascript
array.map(function (item) { return item * 2; });
```
**Named Function Expression** adalah Function Expression yang **diberi nama internal**, nama tersebut hanya bisa diakses di dalam function itu sendiri (berguna untuk rekursi):
```javascript
const faktorial = function hitungFaktorial(n) {
  if (n <= 1) return 1;
  return n * hitungFaktorial(n - 1);
};
```

</details>

---

**Skor kamu:** Hitung berapa jawaban benar dari 10 soal pilihan ganda.
- 9-10 benar → 🌟 Sangat menguasai materi Function!
- 6-8 benar → 👍 Cukup baik, coba ulas lagi materi yang masih ragu
- < 6 benar → 📖 Sebaiknya baca ulang materi 01-10 sebelum lanjut

Selamat, kamu telah menyelesaikan seluruh materi **Function** dalam JavaScript! 🎉
