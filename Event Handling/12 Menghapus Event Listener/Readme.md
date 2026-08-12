# 12. Menghapus Event Listener

## Kenapa Perlu Menghapus Event Listener?

Terkadang kita ingin sebuah event listener **berhenti bekerja** setelah kondisi tertentu, misalnya:

- Event hanya perlu dijalankan **sekali** saja
- Elemen sudah **tidak dibutuhkan lagi** (dihapus dari halaman)
- Mencegah **memory leak** (kebocoran memori) pada aplikasi yang kompleks

Jika event listener tidak pernah dihapus padahal elemennya sudah tidak dipakai, browser tetap menyimpan referensi ke fungsi tersebut di memori — ini yang disebut **memory leak**.

## Cara Menghapus: `removeEventListener()`

```javascript
elemen.removeEventListener(jenisEvent, fungsiHandler);
```

⚠️ **Syarat Penting:** fungsi yang didaftarkan (`addEventListener`) dan yang ingin dihapus (`removeEventListener`) **harus fungsi yang SAMA** (referensi yang sama), bukan sekadar fungsi yang terlihat mirip!

### ❌ Contoh yang SALAH (tidak akan terhapus)

```javascript
elemen.addEventListener("click", function () {
  console.log("Diklik!");
});

// Ini TIDAK akan menghapus listener di atas!
// Karena ini adalah fungsi ANONIM yang BERBEDA (walau isinya sama)
elemen.removeEventListener("click", function () {
  console.log("Diklik!");
});
```

### ✅ Contoh yang BENAR

```javascript
// Simpan fungsi handler ke sebuah variabel/nama terlebih dahulu
function handlerKlik() {
  console.log("Diklik!");
}

elemen.addEventListener("click", handlerKlik);

// Sekarang bisa dihapus karena mereferensikan fungsi yang SAMA
elemen.removeEventListener("click", handlerKlik);
```

👉 **Kesimpulan:** Jika ingin bisa menghapus listener nanti, **jangan gunakan fungsi anonim** (`function () {}` langsung di dalam `addEventListener`). Simpan fungsi ke variabel bernama terlebih dahulu.

## Opsi `{ once: true }` — Event yang Hanya Jalan Sekali

Jika kita hanya ingin event berjalan **sekali saja** lalu otomatis "terhapus", gunakan opsi `once`:

```javascript
elemen.addEventListener("click", function () {
  console.log("Ini hanya akan muncul SEKALI, klik selanjutnya diabaikan.");
}, { once: true });
```

Ini lebih ringkas dibanding memanggil `removeEventListener` secara manual.

## Contoh Penggunaan Nyata

- Tombol "Tutup" yang hanya boleh berjalan sekali (misal menutup modal/notifikasi)
- Menghapus listener saat elemen di-unmount (dihapus) dari halaman, terutama di aplikasi besar (contoh: React, Vue)
- Toggle: mengaktifkan/menonaktifkan fitur tertentu berdasarkan aksi user

Buka `contoh.html` untuk mencoba menambah dan menghapus event listener secara langsung.

➡️ Lanjut ke materi berikutnya: **13. Rangkuman dan Best Practice Event Handling**
