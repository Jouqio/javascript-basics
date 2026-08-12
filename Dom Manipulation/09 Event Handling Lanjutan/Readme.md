# 09. Event Handling Lanjutan

## 1. Event Bubbling

**Event Bubbling** adalah perilaku default di mana event yang terjadi pada sebuah elemen akan **"menggelembung" ke atas**, dari elemen tersebut ke parent-nya, lalu ke parent dari parent-nya, dan seterusnya hingga ke `document`.

```html
<div id="luar">
  <div id="tengah">
    <button id="dalam">Klik Saya</button>
  </div>
</div>
```

```js
document.querySelector("#luar").addEventListener("click", () => console.log("Luar diklik"));
document.querySelector("#tengah").addEventListener("click", () => console.log("Tengah diklik"));
document.querySelector("#dalam").addEventListener("click", () => console.log("Dalam diklik"));
```

Jika kamu klik tombol `#dalam`, urutan output di console adalah:
```
Dalam diklik
Tengah diklik
Luar diklik
```

Event "menggelembung" dari elemen yang diklik ke semua parent-nya.

## 2. Menghentikan Bubbling: `stopPropagation()`

```js
document.querySelector("#dalam").addEventListener("click", function (event) {
  event.stopPropagation(); // event tidak akan lanjut ke parent
  console.log("Dalam diklik (bubbling dihentikan)");
});
```

## 3. `preventDefault()` — Mencegah Perilaku Default Browser

Beberapa elemen HTML punya **perilaku default** saat event tertentu terjadi, misalnya:
- Form akan **reload halaman** saat disubmit
- Link `<a>` akan **berpindah halaman** saat diklik

```js
const form = document.querySelector("#form-daftar");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah reload halaman
  console.log("Form disubmit, tapi halaman tidak reload");
});
```

```js
const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault(); // mencegah pindah halaman
  console.log("Link diklik, tapi tidak berpindah halaman");
});
```

## 4. Event Delegation — Teknik Penting untuk Elemen Dinamis

**Masalah:** jika kamu memasang event listener satu-satu ke setiap item dalam daftar, item yang **ditambahkan belakangan** (setelah halaman dimuat) **tidak akan otomatis punya event listener**.

```js
// MASALAH: item baru yang ditambahkan setelah ini TIDAK akan memiliki event listener
document.querySelectorAll(".item").forEach(function (item) {
  item.addEventListener("click", () => console.log("Item diklik"));
});
```

**Solusi: Event Delegation** — memanfaatkan **event bubbling**, kita cukup memasang **satu event listener** di elemen **parent** (yang sudah pasti ada sejak awal), lalu mengecek elemen mana yang sebenarnya memicu event lewat `event.target`.

```js
const daftar = document.querySelector("#daftar");

daftar.addEventListener("click", function (event) {
  // Cek apakah yang diklik adalah elemen dengan class "item"
  if (event.target.classList.contains("item")) {
    console.log("Item diklik:", event.target.textContent);
  }
});

// Sekarang, item BARU yang ditambahkan setelahnya TETAP bisa dideteksi klik-nya,
// karena listener dipasang di parent (#daftar), bukan di setiap item.
```

### Keuntungan Event Delegation

1. **Bekerja untuk elemen yang ditambahkan secara dinamis** (setelah halaman dimuat)
2. **Lebih hemat memori** — hanya 1 event listener, bukan puluhan/ratusan listener untuk tiap item
3. Cocok untuk kasus seperti to-do list, komentar, hasil pencarian, dll

## Ringkasan

| Konsep | Fungsi |
|--------|--------|
| Event Bubbling | Event menggelembung dari child ke parent |
| `stopPropagation()` | Menghentikan bubbling |
| `preventDefault()` | Mencegah perilaku default browser (reload, pindah halaman) |
| Event Delegation | Memasang 1 listener di parent untuk menangani banyak/elemen dinamis |

➡️ Lanjut ke materi berikutnya: **10 Form Handling**
