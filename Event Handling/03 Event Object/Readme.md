# 03. Event Object

## Apa itu Event Object?

Setiap kali sebuah event terjadi, browser secara **otomatis** membuat sebuah object yang berisi **informasi detail** tentang event tersebut, lalu mengirimkannya sebagai **parameter pertama** ke fungsi handler kita.

Object ini biasa disebut **Event Object**, dan biasanya diberi nama parameter `e` atau `event`.

```javascript
elemen.addEventListener("click", function (e) {
  console.log(e); // e adalah Event Object
});
```

## Properti Penting dalam Event Object

| Properti | Penjelasan |
|---|---|
| `e.type` | Jenis event, contoh: `"click"`, `"keydown"` |
| `e.target` | Elemen **asli** yang memicu event (tempat event terjadi pertama kali) |
| `e.currentTarget` | Elemen yang **sedang** memproses event (tempat listener dipasang) |
| `e.timeStamp` | Waktu (dalam milidetik) saat event terjadi |
| `e.clientX` / `e.clientY` | Posisi mouse saat event (untuk mouse event) |
| `e.key` / `e.code` | Tombol yang ditekan (untuk keyboard event) |
| `e.preventDefault()` | Method untuk mencegah aksi default browser |
| `e.stopPropagation()` | Method untuk menghentikan event menyebar ke elemen lain |

## Perbedaan `target` vs `currentTarget`

Ini sering membingungkan pemula:

- **`e.target`** → elemen **spesifik** yang **benar-benar diklik** oleh user
- **`e.currentTarget`** → elemen tempat **event listener dipasang**

Contoh: jika kamu memasang listener di `<div>` besar, tapi user mengklik `<span>` di dalamnya:
- `e.target` → `<span>` (yang diklik langsung)
- `e.currentTarget` → `<div>` (tempat listener dipasang)

## Kenapa Event Object Berguna?

Dengan Event Object, kita bisa:
- Tahu **elemen mana** yang memicu event (berguna untuk event delegation)
- Tahu **posisi mouse** atau **tombol keyboard** yang ditekan
- **Mencegah perilaku default** browser (misalnya submit form otomatis)
- **Menghentikan penyebaran** event ke elemen lain

Materi tentang `preventDefault()` dan `stopPropagation()` akan dibahas lebih detail di bab selanjutnya.

Coba buka `contoh.html` dan klik di berbagai tempat, lalu perhatikan informasi event yang tampil.

➡️ Lanjut ke materi berikutnya: **04. Event Propagation (Bubbling dan Capturing)**
