# 06. Storage Event (Sinkronisasi Antar Tab)

## Apa itu Storage Event?

Karena `localStorage` **dibagikan antar tab** dalam domain yang sama, browser menyediakan sebuah event khusus bernama **`storage`** yang akan **otomatis terpicu** ketika data localStorage **berubah** — tapi dengan satu catatan penting yang sering membingungkan pemula.

## Aturan Penting: Event Hanya Terpicu di Tab LAIN

⚠️ Ini poin **paling penting** untuk dipahami: event `storage` **TIDAK** akan terpicu pada tab yang **melakukan perubahan itu sendiri**. Event ini hanya terpicu pada **tab-tab lain** yang membuka domain yang sama.

```
Tab A: localStorage.setItem("data", "baru")
   |
   v
Tab A: ❌ TIDAK menerima event "storage" (karena dia sendiri yang mengubah)
Tab B: ✅ MENERIMA event "storage" (karena perubahan terjadi di tab lain)
Tab C: ✅ MENERIMA event "storage" (karena perubahan terjadi di tab lain)
```

## Cara Menggunakan Storage Event

```javascript
window.addEventListener("storage", function (e) {
  console.log("Ada perubahan localStorage dari tab lain!");
  console.log("Key yang berubah:", e.key);
  console.log("Nilai lama:", e.oldValue);
  console.log("Nilai baru:", e.newValue);
  console.log("URL tab yang mengubah:", e.url);
});
```

## Properti Event Object pada `storage`

| Properti | Penjelasan |
|---|---|
| `e.key` | Nama key yang berubah (`null` jika dipanggil `clear()`) |
| `e.oldValue` | Nilai **sebelum** perubahan |
| `e.newValue` | Nilai **sesudah** perubahan (`null` jika key dihapus) |
| `e.url` | URL halaman/tab yang melakukan perubahan |
| `e.storageArea` | Referensi ke object storage yang berubah (`localStorage`) |

## Contoh Kasus Nyata: Sinkronisasi Login/Logout Antar Tab

Salah satu penggunaan paling umum adalah **menyinkronkan status login** di banyak tab sekaligus. Contoh: jika user logout di salah satu tab, tab-tab lain otomatis ikut logout juga.

```javascript
// Saat user logout di Tab A
function logout() {
  localStorage.setItem("statusLogin", "logout");
  localStorage.removeItem("token");
}

// Di SEMUA tab (termasuk tab lain), pasang listener ini:
window.addEventListener("storage", function (e) {
  if (e.key === "statusLogin" && e.newValue === "logout") {
    alert("Anda telah logout di tab lain. Halaman akan dimuat ulang.");
    window.location.reload();
  }
});
```

## Contoh Kasus Nyata: Sinkronisasi Dark Mode Antar Tab

```javascript
// Saat user mengubah tema di Tab A
function ubahTema(temaBaru) {
  localStorage.setItem("tema", temaBaru);
  document.body.className = temaBaru;
}

// Tab B otomatis ikut berubah temanya tanpa perlu di-refresh manual
window.addEventListener("storage", function (e) {
  if (e.key === "tema") {
    document.body.className = e.newValue;
  }
});
```

## Kenapa Event Tidak Terpicu di Tab yang Sama?

Ini adalah **desain yang disengaja** oleh browser. Jika kita mengubah data di tab yang sama, kita **sudah tahu** bahwa data berubah (karena kita sendiri yang melakukannya) — jadi tidak perlu event tambahan. Event `storage` dirancang khusus untuk **memberi tahu tab-tab LAIN** bahwa ada perubahan yang mungkin perlu mereka respons.

👉 Jika ingin melakukan sesuatu di tab yang sama **setelah** menyimpan data, cukup jalankan kode itu **langsung** setelah `setItem()`, tidak perlu lewat event `storage`.

## Kapan Storage Event Berguna?

- Sinkronisasi status login/logout antar tab
- Sinkronisasi preferensi (tema, bahasa) secara real-time antar tab
- Sinkronisasi keranjang belanja antar tab (misalnya notifikasi "item ditambahkan" di tab lain)
- Membangun fitur kolaboratif sederhana antar tab tanpa perlu backend/WebSocket

Buka `contoh.html` di **dua tab berbeda** secara bersamaan untuk melihat storage event bekerja — ubah data di satu tab, lalu perhatikan tab lainnya otomatis merespons!

➡️ Lanjut ke materi berikutnya: **07. Studi Kasus To-Do List dengan localStorage**
