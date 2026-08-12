# 03. DOM Traversal

## Apa itu DOM Traversal?

**DOM Traversal** adalah cara "berpindah-pindah" atau **menjelajahi** DOM Tree dari satu elemen ke elemen lain berdasarkan **hubungan (relasi)** di antara mereka: parent (induk), child (anak), atau sibling (saudara).

Ini berguna ketika kamu sudah memilih satu elemen, lalu ingin mengakses elemen **di sekitarnya** tanpa perlu melakukan selection baru.

## Ilustrasi Hubungan Elemen

```html
<div class="parent">          <!-- PARENT -->
  <p>Anak pertama</p>          <!-- CHILD 1 / SIBLING dari p kedua -->
  <p class="target">Anak kedua</p>  <!-- CHILD 2 -->
  <p>Anak ketiga</p>           <!-- CHILD 3 / SIBLING dari p kedua -->
</div>
```

## 1. Mengakses Parent (Induk)

```js
const target = document.querySelector(".target");

console.log(target.parentElement); // <div class="parent">...</div>
```

## 2. Mengakses Children (Anak-anak)

```js
const parent = document.querySelector(".parent");

console.log(parent.children);        // HTMLCollection berisi 3 elemen <p>
console.log(parent.children[0]);     // <p>Anak pertama</p>
console.log(parent.firstElementChild); // elemen anak pertama
console.log(parent.lastElementChild);  // elemen anak terakhir
console.log(parent.childElementCount); // 3
```

## 3. Mengakses Sibling (Saudara)

```js
const target = document.querySelector(".target");

console.log(target.previousElementSibling); // <p>Anak pertama</p>
console.log(target.nextElementSibling);     // <p>Anak ketiga</p>
```

## Tabel Ringkasan Properti Traversal

| Properti | Fungsi |
|----------|--------|
| `.parentElement` | Mengambil elemen induk |
| `.children` | Mengambil semua elemen anak (HTMLCollection) |
| `.firstElementChild` | Mengambil anak pertama |
| `.lastElementChild` | Mengambil anak terakhir |
| `.childElementCount` | Jumlah elemen anak |
| `.previousElementSibling` | Mengambil saudara sebelumnya |
| `.nextElementSibling` | Mengambil saudara setelahnya |

## ⚠️ Perhatikan: `Element` vs `Node`

DOM sebenarnya punya 2 versi properti serupa — satu berakhiran `Element` (hanya menghitung tag HTML), dan satu tanpa `Element` (menghitung **semua node**, termasuk teks/whitespace/komentar):

```js
console.log(parent.children);    // HANYA elemen HTML (disarankan)
console.log(parent.childNodes);  // SEMUA node, termasuk teks kosong akibat enter/spasi di HTML
```

**Rekomendasi:** selalu gunakan versi yang **mengandung kata "Element"** (`children`, `firstElementChild`, `nextElementSibling`, dst) karena hasilnya lebih konsisten dan tidak "terganggu" oleh whitespace di HTML.

## Contoh Penggunaan Praktis

Traversal sangat berguna saat menangani event pada elemen yang berulang (misal daftar/list), untuk mencari elemen terkait tanpa perlu selector baru:

```js
// Misal ada tombol hapus di dalam setiap item daftar
document.querySelectorAll(".btn-hapus").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    // "this" merujuk ke tombol yang diklik
    // parentElement-nya adalah item daftar yang ingin dihapus
    this.parentElement.remove();
  });
});
```

➡️ Lanjut ke materi berikutnya: **04 Mengubah Konten Element**
