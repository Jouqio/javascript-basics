# 06. Switch Case

## Apa itu Switch Case?

`switch` adalah bentuk conditional statement yang digunakan untuk membandingkan **satu variabel/ekspresi** dengan **beberapa nilai spesifik**. Ini menjadi alternatif yang lebih rapi dibanding `if...else if` yang panjang, **khusus** ketika kamu membandingkan satu nilai yang sama berulang kali.

## Syntax

```js
switch (ekspresi) {
  case nilai1:
    // dijalankan jika ekspresi === nilai1
    break;
  case nilai2:
    // dijalankan jika ekspresi === nilai2
    break;
  default:
    // dijalankan jika tidak ada case yang cocok
}
```

## Contoh Dasar

```js
let hari = 3;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  default:
    console.log("Akhir pekan");
}

// Output: Rabu
```

## Perbandingan dengan If Else If

Kode di atas jika ditulis dengan `if...else if` akan terlihat seperti ini:

```js
if (hari === 1) {
  console.log("Senin");
} else if (hari === 2) {
  console.log("Selasa");
} else if (hari === 3) {
  console.log("Rabu");
} // dan seterusnya...
```

Untuk kasus membandingkan **satu variabel** dengan **banyak nilai spesifik**, `switch` biasanya lebih mudah dibaca.

## ⚠️ Jangan Lupa `break`!

Ini adalah **kesalahan paling umum** pemula saat menggunakan switch. Jika kamu lupa menulis `break`, program akan **terus mengeksekusi case-case di bawahnya** meskipun tidak cocok — perilaku ini disebut **"fall-through"**.

```js
let hari = 2;

switch (hari) {
  case 1:
    console.log("Senin");
  case 2:
    console.log("Selasa");   // ini dijalankan
  case 3:
    console.log("Rabu");     // ini JUGA ikut dijalankan (bug!)
  default:
    console.log("Hari tidak dikenali"); // ini juga ikut jalan
}

// Output (SALAH, karena lupa break):
// Selasa
// Rabu
// Hari tidak dikenali
```

**Solusi:** selalu tambahkan `break` di akhir setiap `case`, kecuali kamu memang **sengaja** ingin memanfaatkan fall-through (jarang digunakan, dan biasanya hanya untuk kasus khusus).

## Memanfaatkan Fall-through dengan Sengaja (Opsional)

Kadang fall-through berguna untuk mengelompokkan beberapa case dengan hasil yang sama:

```js
let bulan = 2;
let tahun = 2024;
let jumlahHari;

switch (bulan) {
  case 1: case 3: case 5: case 7:
  case 8: case 10: case 12:
    jumlahHari = 31;
    break;
  case 4: case 6: case 9: case 11:
    jumlahHari = 30;
    break;
  case 2:
    jumlahHari = (tahun % 4 === 0) ? 29 : 28;
    break;
  default:
    jumlahHari = "Bulan tidak valid";
}

console.log(jumlahHari); // 29 (karena 2024 adalah tahun kabisat)
```

## Kapan Pakai Switch, Kapan Pakai If Else?

| Gunakan `switch` jika... | Gunakan `if...else if` jika... |
|---------------------------|----------------------------------|
| Membandingkan 1 variabel dengan banyak nilai spesifik (misal: hari, bulan, status) | Kondisinya berupa rentang nilai (misal: `nilai >= 90`) |
| Nilai pembanding bertipe sama (angka/string) | Kondisinya kompleks / gabungan banyak variabel |

➡️ Lanjut ke materi berikutnya: **07 Ternary Operator**
