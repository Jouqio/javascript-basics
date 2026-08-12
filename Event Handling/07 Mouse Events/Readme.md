# 07. Mouse Events

## Daftar Event Mouse yang Umum

| Event | Terjadi Saat |
|---|---|
| `click` | Mouse diklik (tekan + lepas) sekali |
| `dblclick` | Mouse diklik dua kali dengan cepat |
| `mousedown` | Tombol mouse **ditekan** (belum dilepas) |
| `mouseup` | Tombol mouse **dilepas** |
| `mouseover` | Kursor **masuk** ke area elemen (juga trigger di elemen anak) |
| `mouseout` | Kursor **keluar** dari area elemen (juga trigger dari elemen anak) |
| `mouseenter` | Kursor masuk ke elemen (⚠️ TIDAK trigger di elemen anak, lebih "bersih") |
| `mouseleave` | Kursor keluar dari elemen (⚠️ TIDAK trigger dari elemen anak) |
| `mousemove` | Kursor **bergerak** di dalam elemen |
| `contextmenu` | Klik kanan (memunculkan menu klik kanan) |

## `mouseover`/`mouseout` vs `mouseenter`/`mouseleave`

Ini poin penting yang sering bikin bingung:

- `mouseover` dan `mouseout` akan **ikut terpicu** ketika kursor masuk/keluar dari elemen **anak** di dalamnya (karena bubbling)
- `mouseenter` dan `mouseleave` **tidak** bubbling, jadi hanya terpicu saat masuk/keluar dari elemen itu sendiri

👉 **Rekomendasi:** gunakan `mouseenter`/`mouseleave` jika ingin perilaku yang lebih "bersih" dan mudah diprediksi (misalnya untuk efek hover pada card).

## Posisi Mouse

Event mouse membawa informasi posisi kursor lewat Event Object:

```javascript
elemen.addEventListener("mousemove", function (e) {
  console.log("Posisi X:", e.clientX, "Posisi Y:", e.clientY);
});
```

- `e.clientX`, `e.clientY` → posisi relatif terhadap **jendela browser (viewport)**
- `e.pageX`, `e.pageY` → posisi relatif terhadap **seluruh halaman** (termasuk area yang di-scroll)
- `e.offsetX`, `e.offsetY` → posisi relatif terhadap **elemen itu sendiri**

## Contoh Penggunaan Nyata

- `click` → tombol, link, navigasi
- `mouseenter`/`mouseleave` → efek hover (tooltip, dropdown menu)
- `mousemove` → drag & drop, custom cursor, canvas drawing
- `dblclick` → aksi cepat seperti "buka file"
- `contextmenu` → membuat menu klik kanan custom

Buka `contoh.html` dan coba gerakkan/klik mouse di area yang disediakan untuk melihat setiap event bekerja.

➡️ Lanjut ke materi berikutnya: **08. Keyboard Events**
