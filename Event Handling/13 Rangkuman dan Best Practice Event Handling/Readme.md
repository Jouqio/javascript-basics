# 13. Rangkuman dan Best Practice Event Handling

Selamat! Kamu sudah mempelajari seluruh materi dasar **Event Handling** di JavaScript. Berikut rangkuman lengkapnya.

## Rangkuman Materi

| # | Topik | Poin Penting |
|---|---|---|
| 01 | Pengantar Event Handling | Event = kejadian, Handler = fungsi respons |
| 02 | Cara Menambahkan Event Listener | Gunakan `addEventListener()`, hindari inline HTML |
| 03 | Event Object | Berisi info event: `target`, `type`, `key`, dll |
| 04 | Event Propagation | Ada fase capturing & bubbling, bisa dihentikan dengan `stopPropagation()` |
| 05 | Event Delegation | Satu listener di parent, manfaatkan bubbling & `e.target` |
| 06 | preventDefault() | Mencegah perilaku default browser (submit, navigasi link) |
| 07 | Mouse Events | `click`, `mouseenter/leave`, `mousemove`, dll |
| 08 | Keyboard Events | `keydown`, `keyup`, gunakan `e.key`/`e.code` |
| 09 | Form Events | `input` (real-time) vs `change` (setelah blur), `submit` |
| 10 | Window & Document Events | `DOMContentLoaded` vs `load`, `scroll`, `resize` |
| 11 | Custom Events | Buat event sendiri dengan `CustomEvent` + `dispatchEvent()` |
| 12 | Menghapus Event Listener | `removeEventListener()` butuh fungsi bernama, atau pakai `{ once: true }` |

## Best Practice Event Handling

### ✅ 1. Selalu Gunakan `addEventListener()`
Jangan pakai inline HTML attribute (`onclick=""`) atau DOM property (`el.onclick = fn`). `addEventListener` lebih fleksibel dan bisa menampung banyak handler.

### ✅ 2. Gunakan Event Delegation untuk Elemen Dinamis/Banyak
Daripada memasang listener ke ratusan elemen, pasang **satu listener** di parent-nya. Lebih hemat memori dan otomatis bekerja untuk elemen baru.

### ✅ 3. Selalu Bersihkan Listener yang Tidak Terpakai
Gunakan `removeEventListener()` atau `{ once: true }` untuk mencegah **memory leak**, terutama di aplikasi berskala besar.

### ✅ 4. Gunakan Fungsi Bernama, Bukan Anonim (jika perlu dihapus nanti)

```javascript
// ✅ Bisa dihapus nanti
function handler() { ... }
el.addEventListener("click", handler);

// ❌ Tidak bisa dihapus (fungsi anonim baru setiap kali dipanggil)
el.addEventListener("click", function () { ... });
```

### ✅ 5. Hindari Event yang Terlalu Sering Terpicu (Debounce/Throttle)
Event seperti `scroll`, `resize`, dan `input` bisa terpicu **puluhan kali per detik**. Gunakan teknik **debounce** (tunda eksekusi sampai user "berhenti") atau **throttle** (batasi eksekusi per interval waktu) agar performa tetap baik.

```javascript
// Contoh sederhana debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener("resize", debounce(function () {
  console.log("Resize selesai (tidak dipanggil terus-menerus)");
}, 300));
```

### ✅ 6. Selalu `preventDefault()` Sebelum Validasi Custom pada Form
Cegah perilaku default (reload halaman) di awal handler `submit`, baru lakukan validasi.

### ✅ 7. Pahami `e.target` vs `e.currentTarget`
Terutama penting saat menggunakan event delegation — pastikan mengecek `e.target` dengan benar (gunakan `closest()` untuk elemen bersarang).

### ✅ 8. Jangan Lupa `stopPropagation()` Jika Diperlukan
Gunakan saat kamu tidak ingin event menyebar ke elemen induk (misalnya tombol "Hapus" di dalam card yang juga clickable).

## Checklist Sebelum "Lulus" Materi Ini

- [ ] Paham perbedaan `addEventListener` vs cara lain
- [ ] Paham `e.target` vs `e.currentTarget`
- [ ] Paham bubbling dan bisa menjelaskan event delegation
- [ ] Bisa menggunakan `preventDefault()` dengan tepat
- [ ] Tahu event mouse, keyboard, dan form yang umum dipakai
- [ ] Bisa membuat dan memicu custom event
- [ ] Tahu cara menghapus event listener dengan benar

➡️ Uji pemahamanmu di: **14. Quiz Event Handling**
