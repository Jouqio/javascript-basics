# 04. sessionStorage

## Apa itu sessionStorage?

**`sessionStorage`** adalah "saudara" dari `localStorage` — API-nya **hampir identik**, tapi punya satu perbedaan besar: **data hanya bertahan selama sesi tab browser tersebut masih terbuka**.

Begitu tab/window ditutup, seluruh data di `sessionStorage` untuk tab itu akan **otomatis terhapus**.

## API `sessionStorage` — Sama Persis dengan `localStorage`

```javascript
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
sessionStorage.length;
```

Semua method dan cara penggunaannya (termasuk `JSON.stringify()`/`JSON.parse()` untuk object/array) **sama persis** seperti `localStorage` yang sudah kita pelajari. Yang berbeda hanyalah **berapa lama data bertahan**.

## Perbedaan Utama: Cakupan (Scope) Data

Ini bagian yang sering membingungkan pemula. `sessionStorage` **tidak dibagikan** antar tab, bahkan jika tab tersebut membuka **URL yang sama persis**:

| Skenario | localStorage | sessionStorage |
|---|---|---|
| Buka tab baru dengan domain sama | ✅ Data **tetap sama** (dibagikan) | ❌ Data **kosong/baru** (tidak dibagikan) |
| Refresh halaman | ✅ Data tetap ada | ✅ Data tetap ada |
| Tutup lalu buka ulang tab | ✅ Data tetap ada | ❌ Data **hilang** |
| Buka halaman di tab lain lalu kembali | ✅ Data tetap sama | ❌ Data tab itu sendiri saja |

👉 **Pengecualian:** Jika sebuah tab **membuka tab baru** menggunakan `window.open()` atau link dengan `target="_blank"` dari halaman yang sama, `sessionStorage` **akan diwariskan (di-copy)** ke tab baru tersebut. Namun setelahnya, kedua tab punya `sessionStorage` yang **terpisah** — perubahan di satu tab tidak akan mempengaruhi tab lainnya.

## Contoh Penggunaan

```javascript
// Menyimpan data form sementara (misalnya multi-step form)
sessionStorage.setItem("langkahForm", "2");
sessionStorage.setItem("dataForm", JSON.stringify({ nama: "Budi", email: "budi@mail.com" }));

// Mengambil kembali saat user melanjutkan pengisian form
const langkah = sessionStorage.getItem("langkahForm");
const dataForm = JSON.parse(sessionStorage.getItem("dataForm"));
```

## Kapan Menggunakan `sessionStorage`?

- **Multi-step form** (wizard) — menyimpan progress pengisian form sementara
- **Data sensitif sementara** yang tidak perlu bertahan lama (misalnya token sesi yang hanya berlaku selama kunjungan)
- **State navigasi** dalam satu sesi kunjungan (misalnya filter pencarian yang aktif)
- Data yang **memang seharusnya hilang** saat tab ditutup (tidak perlu disimpan permanen)

## Kapan Menggunakan `localStorage` Sebagai Gantinya?

- Preferensi pengguna yang harus **bertahan lama** (tema, bahasa)
- Data yang harus **dibagikan** antar tab (misalnya keranjang belanja yang sama di semua tab)
- Cache data yang ingin tetap ada meski browser ditutup dan dibuka lagi

## Ringkasan Perbandingan Cepat

| | `localStorage` | `sessionStorage` |
|---|---|---|
| Bertahan sampai | Dihapus manual | Tab/window ditutup |
| Dibagikan antar tab? | ✅ Ya | ❌ Tidak |
| API | Sama | Sama |
| Kapasitas | ~5-10MB | ~5-10MB |

Buka `contoh.html`, lalu **buka juga halaman yang sama di tab baru** untuk membuktikan bahwa `sessionStorage` **tidak** dibagikan antar tab, sedangkan `localStorage` dibagikan.

➡️ Lanjut ke materi berikutnya: **05. Perbedaan localStorage, sessionStorage, dan Cookies**
