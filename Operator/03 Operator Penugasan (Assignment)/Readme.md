# 03. Operator Penugasan (Assignment)

## Apa itu Operator Penugasan?

**Operator Penugasan (Assignment Operator)** digunakan untuk **memberikan nilai** ke sebuah variabel. Operator paling dasar adalah tanda sama dengan (`=`).

```javascript
let nama = "Budi"; // memberikan nilai "Budi" ke variabel nama
```

## Operator Penugasan Gabungan (Compound Assignment)

Selain `=` biasa, JavaScript menyediakan operator penugasan **gabungan** yang menggabungkan operasi aritmatika dengan penugasan sekaligus — membuat kode lebih **ringkas**.

| Operator | Setara Dengan | Contoh | Penjelasan |
|---|---|---|---|
| `+=` | `x = x + y` | `x += 5` | Tambah lalu simpan ke `x` |
| `-=` | `x = x - y` | `x -= 5` | Kurangi lalu simpan ke `x` |
| `*=` | `x = x * y` | `x *= 5` | Kali lalu simpan ke `x` |
| `/=` | `x = x / y` | `x /= 5` | Bagi lalu simpan ke `x` |
| `%=` | `x = x % y` | `x %= 5` | Ambil sisa bagi lalu simpan ke `x` |
| `**=` | `x = x ** y` | `x **= 2` | Pangkatkan lalu simpan ke `x` |

### Contoh Perbandingan: Dengan dan Tanpa Operator Gabungan

```javascript
let skor = 10;

// Cara panjang
skor = skor + 5;
console.log(skor); // 15

// Cara ringkas dengan operator gabungan
skor += 5;
console.log(skor); // 20 (sama saja hasilnya, tapi lebih ringkas)
```

### Contoh Semua Operator Gabungan

```javascript
let nilai = 10;

nilai += 5;  // nilai = nilai + 5  -> 15
nilai -= 3;  // nilai = nilai - 3  -> 12
nilai *= 2;  // nilai = nilai * 2  -> 24
nilai /= 4;  // nilai = nilai / 4  -> 6
nilai %= 4;  // nilai = nilai % 4  -> 2
nilai **= 3; // nilai = nilai ** 3 -> 8
```

## Operator Penugasan untuk String

Operator `+=` juga bisa dipakai untuk **menambahkan teks** ke string yang sudah ada:

```javascript
let pesan = "Halo";
pesan += ", Dunia!"; // sama seperti: pesan = pesan + ", Dunia!"
console.log(pesan); // "Halo, Dunia!"
```

## Operator Penugasan Modern (ES2021+): `&&=`, `||=`, `??=`

JavaScript modern menambahkan operator penugasan yang **menggabungkan logika** — hanya melakukan penugasan **jika kondisi tertentu terpenuhi**.

### `||=` — Isi Nilai Hanya Jika Saat Ini Falsy

```javascript
let nama = "";
nama ||= "Tamu"; // jika nama saat ini falsy (termasuk string kosong), isi dengan "Tamu"
console.log(nama); // "Tamu"
```

### `??=` — Isi Nilai Hanya Jika Saat Ini `null` atau `undefined`

```javascript
let umur = 0;
umur ??= 18; // umur TIDAK diubah, karena 0 bukan null/undefined (hanya falsy biasa)
console.log(umur); // 0 (tetap, beda dengan contoh ||= di atas!)

let kota;
kota ??= "Jakarta"; // kota masih undefined, jadi diisi
console.log(kota); // "Jakarta"
```

### `&&=` — Isi Nilai Hanya Jika Saat Ini Truthy

```javascript
let sudahLogin = true;
sudahLogin &&= "Selamat datang!"; // karena sudahLogin truthy, nilainya diganti
console.log(sudahLogin); // "Selamat datang!"
```

👉 Ketiga operator modern ini akan lebih mudah dipahami setelah mempelajari materi **05. Operator Logika** dan **09. Operator Modern**, karena berkaitan erat dengan konsep **truthy/falsy** dan **nullish**.

## Ringkasan Kapan Menggunakan Operator Gabungan

- Gunakan `+=`, `-=`, `*=`, `/=` untuk membuat kode **lebih ringkas** saat mengubah nilai variabel berdasarkan nilai sebelumnya
- Sangat umum dipakai dalam **loop** (perulangan) dan **akumulasi nilai** (misalnya menghitung total)

```javascript
let total = 0;
const harga = [10000, 20000, 15000];

for (let i = 0; i < harga.length; i++) {
  total += harga[i]; // menjumlahkan setiap harga ke total
}

console.log(total); // 45000
```

Buka `contoh.html` untuk mencoba semua operator penugasan secara langsung.

➡️ Lanjut ke materi berikutnya: **04. Operator Perbandingan (Comparison)**
