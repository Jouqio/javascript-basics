# 08. Keyboard Events

## Daftar Event Keyboard

| Event | Terjadi Saat |
|---|---|
| `keydown` | Tombol keyboard **ditekan** (termasuk saat ditahan, akan berulang) |
| `keyup` | Tombol keyboard **dilepas** |
| `keypress` | ⚠️ **Deprecated** (tidak disarankan lagi), gunakan `keydown` sebagai gantinya |

👉 **Rekomendasi:** gunakan `keydown` dan `keyup`, hindari `keypress` karena sudah **deprecated** (tidak lagi direkomendasikan oleh standar web modern).

## Mengetahui Tombol yang Ditekan

Event Object keyboard punya properti khusus:

```javascript
document.addEventListener("keydown", function (e) {
  console.log("key:", e.key);   // nama tombol, contoh: "a", "Enter", "Shift"
  console.log("code:", e.code); // kode fisik tombol, contoh: "KeyA", "Enter", "ShiftLeft"
});
```

### Perbedaan `key` vs `code`

- `e.key` → nilai tombol **sesuai layout keyboard** (dipengaruhi Shift, Caps Lock, dll). Contoh: menekan Shift+A menghasilkan `"A"`
- `e.code` → **posisi fisik** tombol, tidak berubah walau layout keyboard beda. Contoh: selalu `"KeyA"` walau Shift ditekan

👉 Gunakan `e.key` untuk mengecek **karakter** yang diketik, dan `e.code` untuk mengecek **posisi tombol** (misalnya untuk game).

## Mendeteksi Tombol Khusus

```javascript
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("Tombol Enter ditekan!");
  }
  if (e.key === "Escape") {
    console.log("Tombol Escape ditekan!");
  }
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // cegah browser membuka dialog "Save Page"
    console.log("Ctrl+S ditekan, disimpan secara custom!");
  }
});
```

Properti tambahan yang berguna: `e.ctrlKey`, `e.shiftKey`, `e.altKey`, `e.metaKey` (Command di Mac / Windows key di Windows) — semuanya bernilai `true`/`false`.

## Contoh Penggunaan Nyata

- Validasi input (misalnya hanya boleh angka)
- Shortcut keyboard (Ctrl+S, Ctrl+Z, Esc untuk menutup modal)
- Kontrol game (panah atas/bawah/kiri/kanan)
- Live search (mencari saat mengetik)

Buka `contoh.html`, coba ketik di kolom input untuk melihat validasi hanya-angka, dan tekan tombol apapun untuk melihat detail event-nya.

➡️ Lanjut ke materi berikutnya: **09. Form Events**
