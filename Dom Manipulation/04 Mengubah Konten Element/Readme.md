# 04. Mengubah Konten Element

## Tiga Cara Mengubah Konten Elemen

Setelah berhasil memilih sebuah elemen, langkah selanjutnya yang paling umum adalah **mengubah isinya**. JavaScript menyediakan 3 properti untuk ini: `textContent`, `innerText`, dan `innerHTML`.

## 1. `textContent`

Mengambil atau mengubah **teks murni** di dalam elemen (termasuk teks yang tersembunyi via CSS), **tanpa memproses tag HTML** di dalamnya.

```js
const judul = document.querySelector("h1");

console.log(judul.textContent); // "Halo Dunia"

judul.textContent = "Judul Baru";
judul.textContent = "<strong>Tebal</strong>"; // ditampilkan sebagai teks biasa, TIDAK jadi tebal
```

## 2. `innerText`

Mirip `textContent`, tapi **memperhatikan tampilan visual** (CSS) — misalnya elemen yang disembunyikan dengan `display: none` tidak akan ikut terbaca. `innerText` juga sedikit lebih lambat karena memicu perhitungan ulang tampilan (reflow).

```js
console.log(judul.innerText); // teks yang benar-benar terlihat di layar
```

## 3. `innerHTML`

Mengambil atau mengubah konten **sebagai HTML**, sehingga tag HTML di dalamnya akan **diproses dan dirender**.

```js
const kotak = document.querySelector(".kotak");

kotak.innerHTML = "<strong>Teks ini tebal</strong>";
// Hasilnya: teks "Teks ini tebal" akan tampil TEBAL di halaman
```

## Perbandingan Ketiganya

| Properti | Memproses tag HTML? | Memperhatikan CSS (visible)? | Kecepatan |
|----------|----------------------|-------------------------------|-----------|
| `textContent` | ❌ Tidak | ❌ Tidak | Cepat |
| `innerText` | ❌ Tidak | ✅ Ya | Lebih lambat |
| `innerHTML` | ✅ Ya | - | Tergantung ukuran HTML |

## ⚠️ Bahaya `innerHTML`: Risiko XSS

Menggunakan `innerHTML` dengan data yang berasal dari **input pengguna** bisa berbahaya, karena teks tersebut akan diproses sebagai HTML — termasuk tag `<script>` yang bisa dipakai untuk **menyisipkan kode jahat** (serangan bernama **XSS - Cross Site Scripting**).

```js
// BERBAHAYA jika inputUser berasal dari form/user tanpa validasi
let inputUser = "<img src=x onerror=alert('Diretas!')>";
elemen.innerHTML = inputUser; // kode di dalamnya bisa dieksekusi!
```

**Rekomendasi:** gunakan `textContent` jika kamu hanya ingin menampilkan teks biasa (lebih aman), dan gunakan `innerHTML` **hanya** jika kamu memang sengaja ingin merender HTML, dan sumber datanya terpercaya.

## Kapan Menggunakan yang Mana?

- **`textContent`** → default pilihan untuk menampilkan teks (paling aman & cepat)
- **`innerHTML`** → ketika kamu memang butuh menyisipkan struktur HTML (misal beberapa tag sekaligus)
- **`innerText`** → jarang dipakai, hanya jika kamu butuh teks yang benar-benar terlihat di layar (menghormati CSS)

➡️ Lanjut ke materi berikutnya: **05 Mengubah Atribut Element**
