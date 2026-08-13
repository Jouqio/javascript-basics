# 05. Perbedaan localStorage, sessionStorage, dan Cookies

Di browser, ada **3 cara utama** untuk menyimpan data di sisi client: `localStorage`, `sessionStorage`, dan `cookies`. Ketiganya punya karakteristik yang berbeda dan cocok untuk kebutuhan yang berbeda pula.

## Tabel Perbandingan Lengkap

| Aspek | `localStorage` | `sessionStorage` | Cookies |
|---|---|---|---|
| **Kapasitas** | ~5-10MB | ~5-10MB | ~4KB (sangat kecil) |
| **Masa berlaku** | Permanen (sampai dihapus) | Sampai tab ditutup | Bisa diatur (punya tanggal expired) |
| **Dibagikan antar tab?** | ✅ Ya | ❌ Tidak | ✅ Ya |
| **Terkirim ke server otomatis?** | ❌ Tidak | ❌ Tidak | ✅ Ya, di setiap HTTP request |
| **Akses dari JavaScript** | Mudah (`localStorage.setItem`) | Mudah (`sessionStorage.setItem`) | Rumit (`document.cookie`, harus parsing string manual) |
| **Bisa diatur "httpOnly" (tidak bisa diakses JS)?** | ❌ Tidak bisa | ❌ Tidak bisa | ✅ Bisa (lebih aman untuk data sensitif) |
| **Cocok untuk** | Preferensi, cache, data non-sensitif | Data sementara per-sesi tab | Autentikasi (session ID), data yang perlu dikenali server |

## Kenapa Cookies Masih Digunakan Meski Ada localStorage?

Meski `localStorage` lebih mudah dipakai dan berkapasitas lebih besar, **cookies punya kelebihan unik**: cookies **otomatis terkirim ke server** di setiap request HTTP, dan bisa diberi atribut `httpOnly` yang membuatnya **tidak bisa diakses lewat JavaScript** — ini membuat cookies lebih aman untuk menyimpan data sensitif seperti **session ID** login.

`localStorage` dan `sessionStorage`, sebaliknya, **selalu bisa diakses lewat JavaScript** apapun yang berjalan di halaman tersebut — termasuk skrip berbahaya jika situs terkena serangan **XSS (Cross-Site Scripting)**. Ini adalah salah satu alasan kenapa **tidak disarankan** menyimpan token autentikasi sensitif langsung di `localStorage` (akan dibahas lebih detail di materi 08 — Keamanan).

## Contoh Sederhana Cookies (Sebagai Perbandingan)

```javascript
// Menulis cookie (rumit dibanding localStorage!)
document.cookie = "nama=Budi; max-age=3600; path=/";

// Membaca cookie (harus parsing manual)
console.log(document.cookie); // "nama=Budi" (semua cookie jadi satu string, dipisah ";")
```

Bandingkan dengan `localStorage` yang jauh lebih sederhana:

```javascript
localStorage.setItem("nama", "Budi");
console.log(localStorage.getItem("nama")); // "Budi"
```

## Kapan Menggunakan yang Mana?

| Kebutuhan | Pilihan Terbaik |
|---|---|
| Preferensi UI (dark mode, bahasa) | `localStorage` |
| Keranjang belanja (harus tetap ada walau browser ditutup) | `localStorage` |
| Progress multi-step form dalam satu kunjungan | `sessionStorage` |
| Session ID untuk autentikasi login (butuh dikirim otomatis ke server & lebih aman) | Cookies (idealnya dengan `httpOnly`) |
| Cache data non-sensitif untuk mempercepat loading | `localStorage` |
| Data yang harus dikenali oleh server di setiap request | Cookies |

## Kesimpulan Singkat

- Gunakan **`localStorage`** untuk data non-sensitif yang perlu bertahan lama dan diakses lewat JavaScript
- Gunakan **`sessionStorage`** untuk data sementara yang hanya relevan selama satu sesi tab
- Gunakan **Cookies** untuk data yang perlu **otomatis dikirim ke server**, terutama untuk kebutuhan autentikasi yang butuh keamanan lebih (dengan `httpOnly`)

Buka `contoh.html` untuk melihat perbandingan cara kerja `localStorage` dan cookies secara langsung.

➡️ Lanjut ke materi berikutnya: **06. Storage Event (Sinkronisasi Antar Tab)**
