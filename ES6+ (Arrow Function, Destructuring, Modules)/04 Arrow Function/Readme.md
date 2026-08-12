# 04. Arrow Function

> Cara baru menulis fungsi yang lebih ringkas, dengan perilaku this yang lebih mudah diprediksi.

## Tujuan Pembelajaran

- Menulis fungsi dengan syntax arrow function
- Memahami penulisan singkat (implicit return) untuk fungsi satu baris
- Memahami perbedaan this pada arrow function vs function biasa

## Dari Function Biasa ke Arrow Function

Arrow function adalah cara baru menulis fungsi dengan syntax lebih pendek memakai tanda panah `=>`.

```js
// Function biasa
function tambah(a, b) {
  return a + b;
}

// Arrow function - setara persis
const tambahArrow = (a, b) => {
  return a + b;
};

console.log(tambah(2, 3));      // 5
console.log(tambahArrow(2, 3)); // 5
```

## Implicit Return: Lebih Ringkas Lagi

Jika isi fungsi hanya satu baris berupa `return`, kurung kurawal `{ }` dan kata `return` boleh dihilangkan — disebut *implicit return*.

```js
// Arrow function panjang
const kali = (a, b) => {
  return a * b;
};

// Arrow function dengan implicit return
const kaliSingkat = (a, b) => a * b;

console.log(kaliSingkat(4, 5)); // 20

// Satu parameter, tanda kurung boleh dihilangkan
const kuadrat = (n) => n * n;
const kuadratTanpaKurung = n => n * n; // sama saja
console.log(kuadratTanpaKurung(6)); // 36

// Tanpa parameter, tetap butuh tanda kurung kosong
const sapaSemua = () => "Halo semuanya!";
console.log(sapaSemua());
```

> **Tips:** Implicit return hanya berlaku untuk satu ekspresi. Kalau fungsinya perlu beberapa baris logika, tetap gunakan kurung kurawal dan `return` secara eksplisit.

## Arrow Function Sangat Cocok untuk Callback

Arrow function paling sering dipakai sebagai callback singkat, misalnya pada method array seperti `map`, `filter`, `forEach`.

```js
const angka = [1, 2, 3, 4, 5];

// Cara lama
const kuadratLama = angka.map(function (n) {
  return n * n;
});

// Cara ES6+ - jauh lebih ringkas
const kuadratBaru = angka.map((n) => n * n);

console.log(kuadratBaru); // [1, 4, 9, 16, 25]

const genap = angka.filter((n) => n % 2 === 0);
console.log(genap); // [2, 4]
```

## Perbedaan this pada Arrow Function

Ini perbedaan paling penting: function biasa punya `this` sendiri yang berubah tergantung cara ia dipanggil. Arrow function **tidak punya `this` sendiri** — ia "meminjam" `this` dari lingkungan di sekelilingnya (disebut *lexical this*).

```js
const timer = {
  detik: 0,
  mulai: function () {
    // Arrow function di sini "meminjam" this dari mulai()
    setInterval(() => {
      this.detik++;
      console.log(this.detik);
    }, 1000);
  },
};

// Jika pakai function biasa di dalam setInterval,
// this TIDAK akan merujuk ke objek timer - inilah
// alasan arrow function sangat berguna dalam kasus ini.
```

> **Tips:** Aturan praktis untuk pemula: pakai arrow function untuk kebanyakan kasus (callback, fungsi utilitas sederhana). Pakai function biasa saat kamu butuh `this` yang merujuk ke objek pemanggil, misalnya di dalam method objek/class.

## Latihan

Ubah function biasa berikut menjadi arrow function dengan implicit return:

```js
function sapaFormal(nama) {
  return "Selamat datang, " + nama + "!";
}
```

<details>
<summary>Lihat Jawaban</summary>

```js
const sapaFormal = (nama) => `Selamat datang, ${nama}!`;
```

(Bonus: sekalian dipakai template literal dari materi 03.)
</details>

---

Contoh kode yang bisa langsung dijalankan (`node contoh.js`) ada di file **[contoh.js](./contoh.js)** pada folder ini.

[← Template Literals](../03 Template Literals/Readme.md) | [Default Parameters →](../05 Default Parameters/Readme.md)
