# 11. Custom Events

## Apa itu Custom Event?

Selain event bawaan browser (`click`, `submit`, `keydown`, dll), JavaScript juga mengizinkan kita membuat **event buatan sendiri (Custom Event)**. Ini berguna untuk komunikasi antar bagian kode, terutama pada aplikasi yang lebih kompleks.

## Membuat Custom Event

Gunakan constructor `CustomEvent`:

```javascript
const eventKu = new CustomEvent("namaEventKu", {
  detail: { pesan: "Halo dari custom event!" } // data tambahan (opsional)
});
```

- Parameter pertama → **nama event** (bebas, sesuai keinginan kita)
- `detail` → object berisi **data tambahan** yang ingin kita kirim bersama event

## Memicu (Dispatch) Custom Event

Untuk "menjalankan" custom event, gunakan `dispatchEvent()`:

```javascript
elemen.dispatchEvent(eventKu);
```

## Mendengarkan Custom Event

Sama seperti event biasa, gunakan `addEventListener`:

```javascript
elemen.addEventListener("namaEventKu", function (e) {
  console.log(e.detail.pesan); // "Halo dari custom event!"
});
```

## Contoh Lengkap

```javascript
const tombol = document.querySelector("button");

// 1. Buat custom event dengan data tambahan
const eventBelanja = new CustomEvent("produkDibeli", {
  detail: { nama: "Laptop", harga: 8000000 }
});

// 2. Dengarkan custom event
tombol.addEventListener("produkDibeli", function (e) {
  console.log("Produk dibeli:", e.detail.nama, "Harga:", e.detail.harga);
});

// 3. Picu event saat tombol diklik
tombol.addEventListener("click", function () {
  tombol.dispatchEvent(eventBelanja);
});
```

## Kenapa Custom Event Berguna?

- Membuat kode lebih **modular** — satu bagian kode bisa "mengumumkan" sesuatu terjadi, tanpa perlu tahu siapa yang mendengarkan
- Berguna untuk komunikasi antar komponen (misalnya component A memberi tahu component B bahwa data sudah berubah)
- Dasar dari banyak framework/library modern (event bus, pub-sub pattern)

## Contoh Penggunaan Nyata

- Notifikasi "keranjang belanja diperbarui" ke bagian header
- Event "data berhasil disimpan" untuk memicu animasi sukses
- Sistem plugin/modul yang saling berkomunikasi tanpa terikat langsung (loosely coupled)

Buka `contoh.html` untuk melihat custom event yang membawa data dan memicu perubahan di beberapa elemen sekaligus.

➡️ Lanjut ke materi berikutnya: **12. Menghapus Event Listener**
