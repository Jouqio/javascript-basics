# 📘 Function di JavaScript

Ringkasan materi tentang apa itu *function*, mengapa kita membutuhkannya, dan bagaimana cara mendeklarasikan, memanggil, serta memberi parameter/argument pada sebuah function di JavaScript.

---

##  Daftar Isi

- [Latar Belakang Masalah](#-latar-belakang-masalah)
- [Deklarasi Function](#-deklarasi-function)
- [Pemanggilan Function](#-pemanggilan-function)
- [Parameter dan Argument](#-parameter-dan-argument)
- [Default Parameter](#-default-parameter)
- [Kesimpulan](#-kesimpulan)

---

##  Latar Belakang Masalah

Bayangkan kita ingin mengonversi suhu dari skala **Celsius** ke **Fahrenheit** menggunakan rumus:

```
9 / 5 * celsius + 32
```

Kalau ditulis langsung di JavaScript:

```js
const temperatureInCelsius = 90;
const temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;

console.log('Hasil konversi:', temperatureInFahrenheit);
// Output: Hasil konversi: 194
```

Masalahnya muncul kalau kita perlu mengonversi **banyak nilai** (50°C, 70°C, 100°C, dst). Tanpa function, kita terpaksa copy-paste baris kode yang sama berulang kali — kode jadi panjang, berulang, dan sulit dirawat.

👉 Di sinilah **function** berguna: membungkus logika yang berulang menjadi satu blok kode yang bisa dipanggil kapan saja.

---

##  Deklarasi Function

Struktur dasar deklarasi function:

```js
function namaFunction(parameter) {
  // function body — kode yang akan dijalankan
}
```

Bagian-bagiannya:

| Bagian | Penjelasan |
|---|---|
| `function` | keyword wajib untuk mendeklarasikan function |
| `namaFunction` | identifier, mirip nama variabel |
| `(parameter)` | data input yang dibutuhkan function |
| `{ ... }` | *function body*, kumpulan statement yang dieksekusi |

Contoh penerapan pada kasus konversi suhu:

```js
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  console.log('Hasil konversi:', temperatureInFahrenheit);
}
```

> ⚠️ Mendeklarasikan function saja **tidak** membuatnya berjalan. Function baru dieksekusi ketika **dipanggil**.

---

##  Pemanggilan Function

Untuk menjalankan function, sebut nama function-nya diikuti tanda kurung `()`.

```js
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log('Hasil konversi:', temperatureInFahrenheit);
}

const temperatureInCelsius = 90;

// Hanya menampilkan referensi function, TIDAK menjalankannya
console.log(convertCelsiusToFahrenheit);
// Output: [Function: convertCelsiusToFahrenheit]

// Memanggil (menjalankan) function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output: Hasil konversi: 194
```

---

##  Parameter dan Argument

- **Parameter** → nama variabel yang dideklarasikan di dalam tanda kurung saat *membuat* function.
- **Argument** → nilai nyata yang dikirim ke function saat *memanggilnya*.

```js
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  console.log('Hasil konversi:', temperatureInFahrenheit);
}

// Argument berupa nilai langsung
convertCelsiusToFahrenheit(100);

// Argument berupa nilai dari variabel
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);
```

Dengan pola ini, satu function bisa dipakai ulang untuk **berapa pun** nilai suhu yang ingin dikonversi — jauh lebih fleksibel dibanding menulis kode berulang.

---

##  Default Parameter

Jika function dipanggil **tanpa argument**, parameter akan bernilai `undefined`, yang biasanya menyebabkan hasil `NaN`:

```js
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log('Hasil konversi:', temperatureInFahrenheit);
}

convertCelsiusToFahrenheit();
// Output: Hasil konversi: NaN
```

Solusinya, gunakan **default parameter** dengan sintaks `=`:

```js
function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  console.log('Hasil konversi:', temperatureInFahrenheit);
}

// Tanpa argument -> pakai default value (50)
convertCelsiusToFahrenheit();
// Output: Hasil konversi: 122

// Dengan argument -> menggantikan default value
convertCelsiusToFahrenheit(90);
// Output: Hasil konversi: 194
```

---

##  Kesimpulan

- **Function** membungkus kode yang berulang menjadi satu blok yang bisa dipakai ulang.
- Function harus **dipanggil** agar isinya dieksekusi.
- **Parameter** adalah "wadah" input di deklarasi, **argument** adalah nilai nyata saat pemanggilan.
- **Default parameter** mencegah hasil `NaN`/`undefined` saat function dipanggil tanpa argument.