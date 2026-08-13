# 09. Rangkuman dan Best Practice localStorage

Selamat! Kamu sudah mempelajari seluruh materi dasar **Local Storage** di JavaScript. Berikut rangkuman lengkapnya.

## Rangkuman Materi

| # | Topik | Poin Penting |
|---|---|---|
| 01 | Pengantar Web Storage | localStorage = permanen, sessionStorage = sementara |
| 02 | localStorage Dasar | `setItem`, `getItem`, `removeItem`, `clear`; semua data jadi string |
| 03 | JSON dengan localStorage | `JSON.stringify()` untuk simpan, `JSON.parse()` untuk ambil object/array |
| 04 | sessionStorage | API sama, tapi data hilang saat tab ditutup & tidak dibagikan antar tab |
| 05 | localStorage vs sessionStorage vs Cookies | Cookies terkirim otomatis ke server, bisa `httpOnly` |
| 06 | Storage Event | Event `storage` hanya terpicu di tab LAIN, untuk sinkronisasi antar tab |
| 07 | Studi Kasus To-Do List | Pola "Load → Ubah → Save" untuk CRUD data |
| 08 | Keamanan & Keterbatasan | Jangan simpan data sensitif, rentan XSS, kapasitas terbatas |

## Best Practice Menggunakan localStorage

### ✅ 1. Selalu Gunakan Function Helper untuk Simpan/Ambil Data

```javascript
function simpanData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
    return false;
  }
}

function ambilData(key, nilaiDefault = null) {
  const data = localStorage.getItem(key);
  if (data === null) return nilaiDefault;
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return nilaiDefault;
  }
}
```

### ✅ 2. Gunakan Prefix pada Key untuk Menghindari Konflik

```javascript
// ❌ Kurang aman, berpotensi konflik dengan aplikasi lain di domain sama
localStorage.setItem("tema", "gelap");

// ✅ Lebih aman dengan prefix nama aplikasi
localStorage.setItem("todoApp_tema", "gelap");
```

### ✅ 3. Jangan Simpan Data Sensitif
Hindari menyimpan token autentikasi, password, atau data pribadi sensitif langsung di `localStorage` karena rentan terhadap serangan XSS.

### ✅ 4. Selalu Cek `null` Sebelum Menggunakan Data

```javascript
const preferensi = localStorage.getItem("tema");
if (preferensi !== null) {
  terapkanTema(preferensi);
} else {
  terapkanTema("terang"); // nilai default
}
```

### ✅ 5. Bersihkan Data yang Sudah Tidak Diperlukan
Gunakan `removeItem()` secara spesifik alih-alih `clear()` yang menghapus **semua** data domain.

```javascript
// ✅ Lebih aman, hanya hapus data spesifik
localStorage.removeItem("todoApp_dataLama");

// ⚠️ Hati-hati, ini menghapus SEMUA data domain (termasuk milik fitur lain)
localStorage.clear();
```

### ✅ 6. Validasi Ulang di Server untuk Data Krusial
Jangan pernah mempercayai data dari `localStorage` sepenuhnya untuk keputusan penting (harga, hak akses, dll) — karena user bisa mengedit data tersebut secara manual lewat DevTools.

### ✅ 7. Pertimbangkan Kapasitas
Jangan menyimpan data dalam jumlah sangat besar (misalnya ribuan record atau gambar base64 besar) di `localStorage`. Untuk kebutuhan seperti itu, pertimbangkan **IndexedDB** sebagai alternatif yang lebih cocok.

### ✅ 8. Gunakan Storage Event untuk Sinkronisasi Antar Tab (Jika Perlu)
Jika aplikasi butuh data yang konsisten di banyak tab (misalnya status login), manfaatkan event `storage` untuk memberi tahu tab lain saat ada perubahan.

## Checklist Sebelum "Lulus" Materi Ini

- [ ] Paham perbedaan `localStorage` dan `sessionStorage`
- [ ] Bisa menggunakan `setItem`, `getItem`, `removeItem`, `clear` dengan benar
- [ ] Paham kenapa perlu `JSON.stringify()`/`JSON.parse()` untuk object/array
- [ ] Paham kapan menggunakan `localStorage` vs `sessionStorage` vs Cookies
- [ ] Bisa menjelaskan cara kerja Storage Event untuk sinkronisasi antar tab
- [ ] Bisa membangun aplikasi sederhana (To-Do List) menggunakan localStorage
- [ ] Memahami risiko keamanan (XSS) dan tidak menyimpan data sensitif di localStorage

➡️ Uji pemahamanmu di: **10. Tugas (Latihan Mandiri)** dan **11. Quiz Local Storage**
