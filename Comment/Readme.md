# Comment (Komentar) dalam JavaScript

Comment adalah bagian kode yang **tidak dieksekusi** oleh JavaScript. Fungsinya untuk memberi catatan, penjelasan, atau menonaktifkan sementara suatu baris kode, agar kode lebih mudah dipahami oleh diri sendiri maupun orang lain.

## Kenapa Comment Penting?

- Membantu menjelaskan maksud dari suatu kode
- Memudahkan kolaborasi dengan developer lain
- Bisa digunakan untuk menonaktifkan kode sementara saat debugging
- Membuat kode lebih rapi dan mudah dibaca di kemudian hari

## Jenis-Jenis Comment

### 1. Single-line Comment (Komentar Satu Baris)

Menggunakan tanda `//`. Semua teks setelah `//` dalam satu baris akan diabaikan oleh JavaScript.

```javascript
// Ini adalah komentar satu baris
console.log("Halo Dunia"); // Ini juga komentar, ditulis di akhir baris
```

### 2. Multi-line Comment (Komentar Banyak Baris)

Menggunakan tanda `/* */`. Cocok untuk menulis penjelasan yang lebih panjang atau mencakup beberapa baris sekaligus.

```javascript
/*
Ini adalah komentar
yang terdiri dari
beberapa baris
*/
console.log("Belajar JavaScript");
```

## Contoh Penggunaan dalam Kode

```javascript
// Fungsi untuk menjumlahkan dua angka
function tambah(a, b) {
  return a + b; // mengembalikan hasil penjumlahan
}

/*
Memanggil fungsi tambah
dengan nilai 5 dan 10
*/
console.log(tambah(5, 10)); // Output: 15
```

## Menonaktifkan Kode dengan Comment

Comment juga sering dipakai untuk menonaktifkan sementara suatu baris kode tanpa menghapusnya, terutama saat proses debugging.

```javascript
console.log("Baris ini akan dijalankan");
// console.log("Baris ini tidak akan dijalankan karena dikomentari");
```

## Tips Menulis Comment yang Baik

- Tulis comment untuk menjelaskan **"mengapa"**, bukan sekadar **"apa"** (karena kode sudah menunjukkan "apa")
- Hindari comment yang berlebihan pada kode yang sudah jelas
- Selalu perbarui comment jika logika kode berubah, agar tidak menyesatkan
- Gunakan comment untuk menandai bagian penting atau catatan sementara, contoh:

```javascript
// TODO: tambahkan validasi input di sini
// FIXME: perbaiki bug perhitungan total harga
```

## Ringkasan

| Jenis Comment | Simbol | Kegunaan |
|---|---|---|
| Single-line | `//` | Catatan singkat satu baris |
| Multi-line | `/* */` | Penjelasan panjang atau blok kode |