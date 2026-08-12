# 11. Tugas (Latihan Mandiri)

Sekarang saatnya **mempraktikkan** semua yang sudah dipelajari! Kerjakan latihan berikut **tanpa melihat kunci jawaban** terlebih dahulu. Tulis kodemu langsung di file `latihan.js`, lalu jalankan untuk mengecek hasilnya.

## Cara Mengerjakan

1. Buka file `latihan.js`
2. Isi setiap function sesuai instruksi (di bagian yang bertanda `// TODO`)
3. Jalankan file dengan Node.js (`node latihan.js`) atau lihat hasilnya lewat `console.log`
4. Bandingkan dengan kunci jawaban di bagian bawah file ini setelah selesai mencoba sendiri

## Daftar Soal Latihan

### Soal 1 — Function Declaration
Buat function `hitungKeliling(panjang, lebar)` yang mengembalikan keliling persegi panjang menggunakan **Function Declaration**.

### Soal 2 — Function Expression
Buat function `hitungDiskon` (Function Expression) yang menerima `harga` dan `persenDiskon`, lalu mengembalikan harga setelah diskon.

### Soal 3 — Arrow Function
Ubah function berikut menjadi **Arrow Function** dengan implicit return:
```javascript
function kuadrat(n) {
  return n * n;
}
```

### Soal 4 — Higher Order Function
Diberikan array berikut:
```javascript
const siswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Ani", nilai: 60 },
  { nama: "Rina", nilai: 90 },
  { nama: "Dedi", nilai: 55 }
];
```
Gunakan `.filter()` untuk mendapatkan **hanya siswa dengan nilai >= 70** (lulus), lalu gunakan `.map()` untuk mengambil **nama-nama** siswa yang lulus saja.

### Soal 5 — IIFE
Buat sebuah IIFE yang membuat variabel `counter` privat (mulai dari 0), dan mengembalikan object dengan dua method: `tambah()` (menambah counter +1 dan mengembalikan nilainya) dan `reset()` (mengembalikan counter ke 0).

### Soal 6 — Recursive Function
Buat function rekursif `hitungPangkat(basis, pangkat)` yang menghitung hasil perpangkatan **tanpa** menggunakan operator `**` atau `Math.pow()`. Contoh: `hitungPangkat(2, 4)` harus menghasilkan `16`.

### Soal 7 — Generator Function
Buat generator function `generatorGenap()` yang menghasilkan bilangan genap secara berurutan (2, 4, 6, 8, ...) menggunakan `yield`, lalu ambil **5 nilai pertama** dari generator tersebut.

### Soal 8 — Gabungan (Tantangan!)
Buat function `buatValidator(minPanjang)` yang merupakan **Higher Order Function** — ia menerima `minPanjang`, dan **mengembalikan function baru** yang menerima sebuah `string` dan mengembalikan `true` jika panjang string tersebut **lebih besar atau sama dengan** `minPanjang`, atau `false` jika tidak.

```javascript
const validatorPassword = buatValidator(8);
console.log(validatorPassword("12345"));      // false (kurang dari 8 karakter)
console.log(validatorPassword("password123")); // true
```

## Tips Mengerjakan

- Kerjakan **satu per satu**, jangan terburu-buru
- Coba dulu tanpa melihat kunci jawaban di file `kunci-jawaban.js`
- Gunakan `console.log()` untuk mengecek hasil setiap function yang kamu buat
- Jika stuck, coba baca ulang materi terkait di folder sebelumnya (01-09)

Selamat mengerjakan! 💪
