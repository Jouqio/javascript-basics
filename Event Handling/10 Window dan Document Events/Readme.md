# 10. Window dan Document Events

Selain event yang terjadi pada elemen tertentu, ada juga event yang terjadi pada level **window** (jendela browser) dan **document** (seluruh halaman).

## Daftar Event Umum

| Event | Objek | Terjadi Saat |
|---|---|---|
| `DOMContentLoaded` | `document` | HTML selesai dimuat & di-parse (belum termasuk gambar/CSS) |
| `load` | `window` | **Semua** resource (HTML, gambar, CSS, dll) selesai dimuat |
| `resize` | `window` | Ukuran jendela browser berubah |
| `scroll` | `window` / elemen | Halaman atau elemen di-scroll |
| `beforeunload` | `window` | Sebelum halaman ditutup/direfresh (bisa untuk konfirmasi) |

## `DOMContentLoaded` vs `load` — Kapan Pakai yang Mana?

Ini penting dipahami pemula:

- **`DOMContentLoaded`** → HTML sudah bisa diakses (struktur DOM siap), **tapi** gambar/video mungkin belum selesai dimuat. **Lebih cepat** terpicu.
- **`load`** → **Benar-benar semua** resource (termasuk gambar) sudah selesai dimuat. Lebih lambat terpicu.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML siap, DOM sudah bisa dimanipulasi!");
});

window.addEventListener("load", function () {
  console.log("Semua resource (gambar, dll) sudah selesai dimuat.");
});
```

👉 **Rekomendasi:** Untuk kebanyakan kasus (menjalankan script setelah HTML siap), gunakan **`DOMContentLoaded`** karena lebih cepat dan cukup untuk memanipulasi DOM.

## Event `resize`

Berguna untuk membuat tampilan **responsive** secara JavaScript (misalnya mengubah layout saat ukuran layar berubah):

```javascript
window.addEventListener("resize", function () {
  console.log("Lebar jendela sekarang:", window.innerWidth);
});
```

## Event `scroll`

Sering dipakai untuk efek **sticky header**, **infinite scroll**, atau **animasi saat scroll**:

```javascript
window.addEventListener("scroll", function () {
  console.log("Posisi scroll:", window.scrollY);
});
```

⚠️ **Catatan performa:** event `scroll` dan `resize` bisa terpicu **sangat sering** (puluhan kali per detik). Untuk aplikasi nyata, sebaiknya gunakan teknik **debounce** atau **throttle** agar tidak membebani performa (materi ini akan dibahas di bab Best Practice).

## Contoh Penggunaan Nyata

- `DOMContentLoaded` → menjalankan script setup setelah HTML siap
- `resize` → layout responsive custom
- `scroll` → sticky navbar, tombol "back to top", lazy loading gambar
- `beforeunload` → peringatan "Yakin ingin keluar?" jika ada data belum disimpan

Buka `contoh.html`, scroll ke bawah untuk melihat efek sticky header, dan ubah ukuran jendela browser untuk melihat event resize.

➡️ Lanjut ke materi berikutnya: **11. Custom Events**
