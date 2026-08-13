# 12 - Tugas Latihan

Setelah mempelajari materi 01–11, saatnya menguji pemahamanmu dengan latihan berikut. Kerjakan langsung di file `soal.js` pada bagian yang sudah ditandai `// TODO`.

## Soal 1 — For Loop (Level: Mudah)

Buat fungsi `cetakGanjil(batas)` yang mencetak semua bilangan **ganjil** dari 1 sampai `batas` menggunakan `for` loop.

## Soal 2 — While Loop (Level: Mudah)

Buat fungsi `hitungDigit(angka)` yang menghitung **jumlah digit** dari sebuah angka menggunakan `while` loop. Contoh: `hitungDigit(12345)` → `5`.

## Soal 3 — Do While Loop (Level: Mudah-Sedang)

Buat simulasi dengan `do...while` yang mencetak angka dari 1 sampai 5, tapi pastikan kodenya **tetap mencetak angka 1 minimal sekali** meskipun kondisi awalnya sengaja dibuat salah (misalnya variabel awal sudah 10).

## Soal 4 — Break dan Continue (Level: Sedang)

Diberikan array `[12, 7, -3, 25, 0, 18, -9, 30]`. Buat loop yang:
- Melewati (skip) angka negatif dengan `continue`
- Berhenti sepenuhnya dengan `break` begitu menemukan angka `0`
- Mencetak setiap angka yang diproses (bukan yang dilewati/setelah berhenti)

## Soal 5 — Nested Loop (Level: Sedang)

Buat pola berikut menggunakan nested loop:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

## Soal 6 — For...of vs For...in (Level: Sedang)

Diberikan array `nilai = [88, 92, 75, 60, 95]`. Gunakan `for...of` untuk menghitung **rata-rata nilai**. Lalu jelaskan (di komentar) kenapa `for...in` **tidak tepat** dipakai untuk kasus ini.

## Soal 7 — Looping Array dengan Method (Level: Menantang)

Diberikan data berikut:
```js
let produk = [
  { nama: "Laptop", harga: 8000000, stok: 3 },
  { nama: "Mouse", harga: 100000, stok: 0 },
  { nama: "Keyboard", harga: 250000, stok: 5 },
];
```
Buat kode (menggunakan `filter`, `map`, dan/atau `reduce`) untuk:
1. Menampilkan nama produk yang **stoknya habis** (stok = 0)
2. Menghitung **total nilai inventori** (harga × stok, dijumlahkan semua produk yang stoknya > 0)

## Soal 8 — Menghindari Infinite Loop (Level: Menantang)

Kode berikut punya bug infinite loop. Perbaiki kodenya:
```js
let saldo = 100;
while (saldo > 0) {
  console.log("Saldo:", saldo);
  saldo += 10; // ada bug di sini!
}
```

## Soal 9 — Studi Kasus Gabungan (Level: Menantang)

Buat fungsi `analisisNilaiSiswa(daftarNilai)` yang menerima array nilai (angka), lalu mengembalikan object berisi:
- `tertinggi` — nilai tertinggi
- `terendah` — nilai terendah
- `rataRata` — rata-rata (dibulatkan 2 desimal)
- `jumlahLulus` — jumlah nilai yang >= 70

Gunakan kombinasi loop/method array sesuai kebutuhan masing-masing.

## Cara Mengerjakan

1. Buka file `soal.js`
2. Cari bagian bertanda `// TODO: Soal X`
3. Tulis kode kamu di bawahnya
4. Jalankan dengan `node soal.js` untuk mengecek hasilnya

## Tips

- Jangan terburu-buru melihat solusi. Coba kerjakan sendiri dulu berdasarkan materi 01–11.
- Kalau stuck, baca ulang materi yang relevan sebelum mencoba lagi.
- Latihan ini dirancang untuk melatih pemahaman konsep loop, bukan hafalan sintaks.

Selamat mengerjakan! 💪
