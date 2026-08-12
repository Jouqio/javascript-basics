# 06. Mencegah Default Action (preventDefault)

## Apa itu "Default Action"?

Beberapa elemen HTML punya **perilaku bawaan (default)** dari browser saat sebuah event terjadi. Contohnya:

| Elemen | Event | Perilaku Default Browser |
|---|---|---|
| `<a href="...">` | `click` | Pindah/navigasi ke halaman lain |
| `<form>` | `submit` | Mengirim data & reload halaman |
| `<input type="checkbox">` | `click` | Mencentang/menghilangkan centang |
| Klik kanan | `contextmenu` | Menampilkan menu klik kanan browser |

## Method `preventDefault()`

Untuk **membatalkan** perilaku default tersebut, gunakan method `e.preventDefault()` pada Event Object.

```javascript
elemen.addEventListener("click", function (e) {
  e.preventDefault(); // batalkan perilaku default
  // kode custom kita di sini
});
```

## Contoh 1: Mencegah Link Berpindah Halaman

```javascript
const link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Link diklik, tapi tidak pindah halaman!");
});
```

## Contoh 2: Mencegah Form Submit (untuk Validasi Custom)

Ini adalah penggunaan yang **paling umum**! Biasanya kita ingin mengecek data form dulu sebelum benar-benar dikirim.

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload halaman

  const input = form.querySelector("input");
  if (input.value.trim() === "") {
    alert("Input tidak boleh kosong!");
    return;
  }

  alert("Form valid, siap dikirim (dengan AJAX/fetch misalnya)");
});
```

## `preventDefault()` vs `stopPropagation()` — Jangan Tertukar!

Ini sering membingungkan pemula:

| Method | Fungsi |
|---|---|
| `e.preventDefault()` | Mencegah **perilaku default** browser (misalnya submit form) |
| `e.stopPropagation()` | Mencegah event **menyebar** ke elemen induk (bubbling) |

Keduanya **tidak berhubungan** satu sama lain dan bisa dipakai bersamaan jika perlu:

```javascript
elemen.addEventListener("click", function (e) {
  e.preventDefault();     // cegah perilaku default
  e.stopPropagation();    // cegah event menyebar
});
```

Coba buka `contoh.html` — ada contoh link dan form yang perilaku defaultnya dicegah.

➡️ Lanjut ke materi berikutnya: **07. Mouse Events**
