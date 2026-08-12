# 06. Mengubah Style dan Class

## Dua Cara Mengubah Tampilan Elemen

Ada dua pendekatan utama untuk mengubah tampilan elemen lewat JavaScript: langsung lewat properti `style`, atau dengan menambah/menghapus `class` CSS.

## 1. Properti `style` — Mengubah CSS Langsung

```js
const kotak = document.querySelector(".kotak");

kotak.style.backgroundColor = "blue";
kotak.style.color = "white";
kotak.style.padding = "20px";
kotak.style.display = "none"; // menyembunyikan elemen
```

**Perhatikan:** nama properti CSS yang mengandung tanda hubung (`-`) ditulis dalam gaya **camelCase** di JavaScript:

| CSS | JavaScript |
|-----|------------|
| `background-color` | `style.backgroundColor` |
| `font-size` | `style.fontSize` |
| `margin-top` | `style.marginTop` |
| `border-radius` | `style.borderRadius` |

### ⚠️ Kekurangan Properti `style`

Mengubah banyak style satu-satu lewat `style.xxx` membuat kode JavaScript "kotor" dengan detail tampilan (mencampur logika dengan desain), dan sulit dikelola jika perubahan stylenya kompleks.

## 2. `classList` — Cara yang Lebih Direkomendasikan

Daripada mengatur CSS satu-satu lewat JavaScript, **cara yang lebih baik** adalah menyiapkan class di file CSS terlebih dahulu, lalu **menambah/menghapus class tersebut** lewat JavaScript.

```css
/* style.css */
.aktif {
  background-color: blue;
  color: white;
}
```

```js
const kotak = document.querySelector(".kotak");

kotak.classList.add("aktif");     // menambah class "aktif"
kotak.classList.remove("aktif");  // menghapus class "aktif"
kotak.classList.toggle("aktif");  // tambah jika belum ada, hapus jika sudah ada
kotak.classList.contains("aktif"); // true/false, cek apakah class ada
```

### Kenapa `classList` Lebih Baik?

1. **Memisahkan logika (JS) dan tampilan (CSS)** — style tetap didefinisikan di CSS, JS hanya mengatur "kapan" class itu aktif
2. Lebih mudah mengatur **banyak properti CSS sekaligus** cukup dengan satu nama class
3. Lebih mudah dipelihara — jika ingin ubah warna/tampilan, cukup edit CSS, tidak perlu sentuh JS

## Contoh: Toggle Dark Mode

```html
<body>
  <button id="btn-tema">Ganti Tema</button>
</body>
```

```css
body.dark {
  background: #0f172a;
  color: white;
}
```

```js
const tombol = document.querySelector("#btn-tema");

tombol.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
```

## Method `classList` Selengkapnya

| Method | Fungsi |
|--------|--------|
| `.add("nama")` | Menambah class |
| `.remove("nama")` | Menghapus class |
| `.toggle("nama")` | Tambah jika belum ada, hapus jika sudah ada |
| `.contains("nama")` | Mengecek apakah class ada (`true`/`false`) |
| `.replace("lama", "baru")` | Mengganti satu class dengan class lain |

## Kapan Menggunakan `style` Langsung?

Meskipun `classList` lebih disarankan untuk kebanyakan kasus, properti `style` langsung tetap berguna untuk:
- Nilai yang **dinamis/dihitung** (misal posisi berdasarkan koordinat mouse, lebar progress bar berdasarkan persentase)

```js
let persentase = 75;
progressBar.style.width = persentase + "%";
```

➡️ Lanjut ke materi berikutnya: **07 Membuat dan Menghapus Element**
