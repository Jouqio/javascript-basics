# 02. localStorage Dasar

## 4 Method Utama `localStorage`

`localStorage` menyediakan 4 method dasar yang wajib kamu kuasai:

| Method | Fungsi |
|---|---|
| `setItem(key, value)` | **Menyimpan** data (key-value) |
| `getItem(key)` | **Mengambil** data berdasarkan key |
| `removeItem(key)` | **Menghapus** satu data berdasarkan key |
| `clear()` | **Menghapus semua** data di localStorage |

## 1. `setItem()` — Menyimpan Data

```javascript
localStorage.setItem("nama", "Budi");
localStorage.setItem("umur", "20");
```

- Parameter pertama → **key** (nama/kunci data, harus string)
- Parameter kedua → **value** (nilai data, akan otomatis diubah jadi string)

⚠️ Jika `key` yang sama dipakai lagi, `value` sebelumnya akan **tertimpa (overwrite)**.

```javascript
localStorage.setItem("nama", "Budi");
localStorage.setItem("nama", "Ani"); // menimpa nilai sebelumnya
console.log(localStorage.getItem("nama")); // "Ani"
```

## 2. `getItem()` — Mengambil Data

```javascript
const nama = localStorage.getItem("nama");
console.log(nama); // "Ani"
```

⚠️ Jika `key` **tidak ditemukan**, `getItem()` akan mengembalikan `null` (bukan `undefined`):

```javascript
console.log(localStorage.getItem("keyTidakAda")); // null
```

👉 **Tips:** Selalu cek apakah hasilnya `null` sebelum memakainya, untuk menghindari error.

```javascript
const data = localStorage.getItem("preferensi");
if (data !== null) {
  console.log("Data ditemukan:", data);
} else {
  console.log("Data belum ada, gunakan nilai default");
}
```

## 3. `removeItem()` — Menghapus Satu Data

```javascript
localStorage.removeItem("nama");
console.log(localStorage.getItem("nama")); // null (sudah terhapus)
```

## 4. `clear()` — Menghapus SEMUA Data

```javascript
localStorage.clear();
console.log(localStorage.length); // 0 (semua data terhapus)
```

⚠️ **Hati-hati!** `clear()` akan menghapus **semua** data localStorage milik domain tersebut, bukan hanya milik aplikasi kita. Gunakan dengan bijak.

## Alternatif: Akses Seperti Property Object

Selain method di atas, `localStorage` juga bisa diakses seperti object biasa (walau **tidak disarankan**, karena kurang eksplisit):

```javascript
// Cara alternatif (kurang disarankan)
localStorage.nama = "Budi";        // sama seperti setItem("nama", "Budi")
console.log(localStorage.nama);    // sama seperti getItem("nama")
delete localStorage.nama;          // sama seperti removeItem("nama")
```

👉 **Rekomendasi:** Selalu gunakan `setItem()`, `getItem()`, `removeItem()`, dan `clear()` secara eksplisit — lebih jelas maksudnya dan menghindari konflik jika key kebetulan sama dengan nama property bawaan object.

## Properti `length`

Untuk mengetahui **berapa banyak data** yang tersimpan:

```javascript
console.log(localStorage.length); // jumlah key yang tersimpan
```

## Semua Data Disimpan sebagai STRING

Ini poin **sangat penting** untuk pemula: `localStorage` **hanya bisa menyimpan string**. Jika kamu menyimpan angka atau boolean, otomatis akan diubah menjadi string.

```javascript
localStorage.setItem("umur", 20); // angka 20 diubah jadi string "20"
const umur = localStorage.getItem("umur");
console.log(typeof umur); // "string" (bukan "number"!)
console.log(umur + 5);    // "205" (bukan 25! karena string digabung, bukan dijumlah)

// Solusi: ubah tipe data manual saat mengambilnya
const umurAngka = Number(localStorage.getItem("umur"));
console.log(umurAngka + 5); // 25 (benar)
```

Untuk menyimpan **object** atau **array**, kita butuh `JSON.stringify()` dan `JSON.parse()` — akan dibahas lengkap di materi berikutnya.

Buka `contoh.html` untuk mencoba keempat method dasar ini secara langsung.

➡️ Lanjut ke materi berikutnya: **03. Menyimpan Data Object dan Array (JSON)**
