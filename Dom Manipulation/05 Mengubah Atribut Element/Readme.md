# 05. Mengubah Atribut Element

## Apa itu Atribut?

**Atribut** adalah informasi tambahan yang melekat pada tag HTML, contohnya `src`, `href`, `alt`, `id`, `class`, `disabled`, dll.

```html
<img src="gambar.jpg" alt="Deskripsi gambar" id="foto-utama">
<a href="https://example.com" target="_blank">Kunjungi</a>
```

## 1. `getAttribute()` — Membaca Atribut

```js
const gambar = document.querySelector("#foto-utama");

console.log(gambar.getAttribute("src"));  // "gambar.jpg"
console.log(gambar.getAttribute("alt"));  // "Deskripsi gambar"
```

## 2. `setAttribute()` — Mengubah/Menambah Atribut

```js
gambar.setAttribute("src", "gambar-baru.jpg");
gambar.setAttribute("alt", "Deskripsi baru");
gambar.setAttribute("data-status", "aktif"); // menambah atribut baru
```

## 3. `removeAttribute()` — Menghapus Atribut

```js
gambar.removeAttribute("alt");
```

## 4. Mengakses Atribut Umum Langsung Lewat Properti

Untuk atribut yang **umum**, kamu juga bisa mengaksesnya langsung sebagai **properti objek**, tanpa perlu `getAttribute`/`setAttribute`:

```js
const gambar = document.querySelector("#foto-utama");

console.log(gambar.src); // membaca langsung
gambar.src = "gambar-baru.jpg"; // mengubah langsung

const link = document.querySelector("a");
link.href = "https://google.com";

const input = document.querySelector("input");
input.value = "Halo"; // untuk input, gunakan .value bukan getAttribute("value")
input.disabled = true; // untuk atribut boolean seperti disabled, checked
```

**Catatan:** untuk atribut seperti `value` (pada input) dan atribut boolean (`disabled`, `checked`), gunakan properti langsung (`.value`, `.disabled`, `.checked`), **bukan** `getAttribute`/`setAttribute`, karena hasilnya lebih konsisten dengan kondisi terkini elemen.

## 5. `dataset` — Mengelola Atribut Custom (`data-*`)

HTML mendukung atribut custom dengan awalan `data-`, yang sangat berguna untuk menyimpan data tambahan tanpa mengubah tampilan:

```html
<button id="btn-produk" data-id="123" data-nama="Kaos Polos">Beli</button>
```

```js
const tombol = document.querySelector("#btn-produk");

console.log(tombol.dataset.id);   // "123"
console.log(tombol.dataset.nama); // "Kaos Polos"

tombol.dataset.status = "terjual"; // menambah data-status="terjual" di HTML
```

Perhatikan penulisan: `data-nama` di HTML menjadi `dataset.nama` di JavaScript (tanda hubung `-` dihilangkan, huruf setelahnya jadi kecil biasa; untuk `data-nama-produk` akan menjadi `dataset.namaProduk`, mengikuti gaya penulisan **camelCase**).

## Contoh Praktis: Toggle Status Baca Notifikasi

```html
<div class="notifikasi" data-dibaca="false">Pesan baru masuk!</div>
```

```js
const notif = document.querySelector(".notifikasi");

notif.addEventListener("click", function () {
  if (notif.dataset.dibaca === "false") {
    notif.dataset.dibaca = "true";
    notif.style.opacity = "0.5";
  }
});
```

➡️ Lanjut ke materi berikutnya: **06 Mengubah Style dan Class**
