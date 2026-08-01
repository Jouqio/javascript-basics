#  Function di JavaScript

Ringkasan materi tentang apa itu *function*, mengapa kita membutuhkannya, dan bagaimana cara mendeklarasikan, memanggil, memberi parameter/argument, mengembalikan nilai, hingga menuliskannya dalam gaya *expression* dan *arrow function* di JavaScript.

---

##  Daftar Isi

- [Latar Belakang Masalah](#-latar-belakang-masalah)
- [Deklarasi Function](#-deklarasi-function)
- [Pemanggilan Function](#-pemanggilan-function)
- [Parameter dan Argument](#-parameter-dan-argument)
- [Default Parameter](#-default-parameter)
- [Return Value](#-return-value)
- [Function Expression](#-function-expression)
- [Menjadi First-Class Citizen](#-menjadi-first-class-citizen)
- [Arrow Function](#-arrow-function)
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

##  Return Value

Selain menerima input lewat parameter, function juga bisa **mengeluarkan nilai** — inilah yang disebut **return value**.

Secara bawaan (default), function akan mengembalikan `undefined` jika tidak ada `return` statement. Contohnya bisa dilihat pada `console.log`:

```js
const result = console.log('JavaScript keren!');
console.log(result);

/* Output:
JavaScript keren!
undefined
*/
```

Agar function dapat mengembalikan nilai, tambahkan **`return` statement** beserta nilai yang diinginkan.

```js
function sumNumbers(a, b) {
  const result = a + b;
  return result;
}

const result = sumNumbers(2, 4);
console.log('2 + 4:', result);

/* Output:
2 + 4: 6
*/
```

### `return` Menghentikan Eksekusi Function

Begitu eksekusi kode mencapai `return` statement, program dalam function **langsung berhenti**. Kode setelahnya tidak akan dijalankan.

```js
function generateGreetingWorldMessage() {
  return 'Halo, dunia!';
  console.log('Aku tidak akan tampil!');
}

const message = generateGreetingWorldMessage();
console.log(message);

/* Output:
Halo, dunia!
*/
```

Contoh lain, `return` pada function konversi suhu:

```js
function convertCelsiusToFahrenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/
```

---

##  Function Expression

**Function expression** adalah cara membuat function dengan gaya *expression* — mirip seperti membuat variabel — bukan lewat *function statement* (deklarasi biasa dengan keyword `function` diikuti nama function).

```js
const result = 3 * 4;
console.log(result);

/* Output:
12
*/
```

Dengan pola yang sama, function bisa disimpan ke dalam sebuah variabel, dan variabel itulah yang menjadi identifier-nya:

```js
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/
```

Cara memanggilnya sama seperti function biasa — sebut identifier-nya diikuti tanda kurung `()`.

> ⚠️ **Perbedaan penting:** function expression **tidak memiliki hoisting**, sehingga tidak bisa dipanggil sebelum dideklarasikan (berbeda dengan function statement).

---

##  Menjadi First-Class Citizen

Sebuah bahasa pemrograman disebut memperlakukan function sebagai **first-class citizen** jika function dapat diperlakukan layaknya nilai/variabel biasa.

Di JavaScript, function bisa:

- disimpan sebagai nilai dalam variabel,
- dijadikan nilai argumen bagi function lain,
- dikembalikan dari function lain (`return`),
- disimpan dalam array atau object literal,
- memiliki *method* dan *properties* sendiri.

### Function sebagai Argument

```js
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
*/
```

Function `multiply` dijadikan nilai argumen pertama untuk `calculate`, sehingga parameter `operation` bernilai function `multiply` dan bisa langsung dipanggil (*invoke*) di dalamnya.

### Function yang Mengembalikan Function

```js
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
```

---

##  Arrow Function

**Arrow function** adalah sintaksis alternatif untuk membuat function yang lebih ringkas dibanding *function expression* biasa.

### Deklarasi

```js
let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194
```

Perbedaan utama arrow function dari regular function:

- Tidak perlu menuliskan keyword `function`.
- Sebagai gantinya, tanda panah `=>` (disebut **fat arrow**) ditulis setelah parameter.
- Tetap memiliki *function body* seperti regular function.

### Refactor: Bentuk Lebih Ringkas

Arrow function bisa disederhanakan lagi dengan menghilangkan tanda kurung kurawal `{}` — cocok untuk function yang hanya mengembalikan **satu nilai** dalam satu baris ekspresi.

```js
let temperatureInFahrenheit;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
```

> 📝 **Catatan:**
> - Arrow function hanya tersedia dalam bentuk *expression*, sehingga nilainya selalu disimpan dalam variabel.
> - Bentuk ringkas (tanpa `{}`) hanya mampu menampung **satu return value**. Jika butuh banyak baris kode, tetap gunakan tanda kurung kurawal buka-tutup.

---

##  Kesimpulan

- **Function** membungkus kode yang berulang menjadi satu blok yang bisa dipakai ulang.
- Function harus **dipanggil** agar isinya dieksekusi.
- **Parameter** adalah "wadah" input di deklarasi, **argument** adalah nilai nyata saat pemanggilan.
- **Default parameter** mencegah hasil `NaN`/`undefined` saat function dipanggil tanpa argument.
- **Return value** memungkinkan function mengembalikan nilai; `return` juga menghentikan eksekusi function.
- **Function expression** membuat function dengan gaya variabel, tapi tidak memiliki hoisting.
- Function di JavaScript adalah **first-class citizen** — bisa disimpan, dikirim, dan dikembalikan sebagai nilai.
- **Arrow function** (`=>`) adalah sintaksis alternatif yang lebih ringkas untuk membuat function.