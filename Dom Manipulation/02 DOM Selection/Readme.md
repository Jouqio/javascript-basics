# 02. DOM Selection

## Apa itu DOM Selection?

Sebelum bisa mengubah sebuah elemen HTML, kita harus **memilihnya (select)** terlebih dahulu dari JavaScript. DOM Selection adalah proses mencari dan mengambil elemen HTML tertentu agar bisa dimanipulasi.

## Metode-metode DOM Selection

### 1. `getElementById()`

Memilih **satu elemen** berdasarkan atribut `id`. Karena `id` harus unik dalam satu halaman, metode ini selalu mengembalikan **satu elemen** (atau `null` jika tidak ditemukan).

```html
<h1 id="judul">Halo Dunia</h1>
```

```js
const judul = document.getElementById("judul");
console.log(judul); // <h1 id="judul">Halo Dunia</h1>
```

### 2. `getElementsByClassName()`

Memilih **semua elemen** yang memiliki `class` tertentu. Hasilnya berupa **HTMLCollection** (mirip array, tapi "live" — otomatis update jika DOM berubah).

```html
<p class="item">Item 1</p>
<p class="item">Item 2</p>
```

```js
const items = document.getElementsByClassName("item");
console.log(items); // HTMLCollection berisi 2 elemen <p>
console.log(items[0]); // Item 1
```

### 3. `getElementsByTagName()`

Memilih semua elemen berdasarkan nama tag.

```js
const semuaParagraf = document.getElementsByTagName("p");
console.log(semuaParagraf.length); // jumlah tag <p> di halaman
```

### 4. `querySelector()` — Paling Fleksibel & Direkomendasikan

Memilih **satu elemen pertama** yang cocok dengan CSS selector (bisa berupa id, class, tag, atau kombinasi).

```js
document.querySelector("#judul");   // berdasarkan id
document.querySelector(".item");    // berdasarkan class (elemen pertama saja)
document.querySelector("p");        // berdasarkan tag
document.querySelector("div.card span"); // selector kompleks, seperti CSS
```

### 5. `querySelectorAll()` — Paling Fleksibel & Direkomendasikan

Memilih **SEMUA elemen** yang cocok dengan CSS selector. Hasilnya berupa **NodeList** (mirip array, dan bisa langsung dipakai `.forEach()`).

```js
const semuaItem = document.querySelectorAll(".item");
console.log(semuaItem.length);

semuaItem.forEach(function (item) {
  console.log(item.textContent);
});
```

## Perbandingan Semua Metode

| Metode | Mengembalikan | Bisa `.forEach()`? | Live/Static |
|--------|---------------|---------------------|--------------|
| `getElementById` | 1 elemen atau `null` | - | - |
| `getElementsByClassName` | HTMLCollection | ❌ (perlu diubah ke array dulu) | Live |
| `getElementsByTagName` | HTMLCollection | ❌ | Live |
| `querySelector` | 1 elemen atau `null` | - | - |
| `querySelectorAll` | NodeList | ✅ | Static |

## 💡 Rekomendasi untuk Pemula

Gunakan `querySelector()` dan `querySelectorAll()` sebagai andalan utama, karena:
1. Sintaksnya sama seperti CSS selector yang sudah familiar
2. Bisa memilih elemen dengan kombinasi kompleks (`.card > h2`, `input[type="text"]`, dll)
3. `querySelectorAll()` hasilnya NodeList yang bisa langsung dipakai `.forEach()`

## Mengubah HTMLCollection Menjadi Array

Jika kamu perlu memakai method array (seperti `.map()`, `.filter()`) pada hasil `getElementsByClassName`, ubah dulu jadi array:

```js
const items = document.getElementsByClassName("item");
const itemsArray = Array.from(items);
// atau: const itemsArray = [...items];

itemsArray.map(item => item.textContent);
```

## ⚠️ Hati-hati: Elemen `null`

Jika selector tidak menemukan elemen apapun, `querySelector`/`getElementById` akan mengembalikan `null`. Mencoba mengakses properti dari `null` akan menyebabkan **error**:

```js
const takAda = document.querySelector("#tidak-ada");
console.log(takAda); // null

// console.log(takAda.textContent); // ERROR! Cannot read properties of null
```

**Solusi:** selalu cek dulu apakah elemen ditemukan sebelum menggunakannya:

```js
if (takAda) {
  console.log(takAda.textContent);
} else {
  console.log("Elemen tidak ditemukan");
}
```

➡️ Lanjut ke materi berikutnya: **03 DOM Traversal**
